const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const http = require("node:http");
const { createRequire } = require("node:module");
const bundledRequire = createRequire(
  path.resolve(process.execPath, "../../node_modules/_resolver.cjs"),
);
let playwright;
try {
  playwright = require("playwright");
} catch {
  playwright = bundledRequire("playwright");
}
const root = path.resolve(__dirname, "..");
const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://localhost");
  const file = path.resolve(
    root,
    "." + (url.pathname === "/" ? "/index.html" : url.pathname),
  );
  if (!file.startsWith(root + path.sep)) {
    res.writeHead(403).end();
    return;
  }
  fs.readFile(file, (err, data) => {
    if (err) {
      res.writeHead(404).end();
      return;
    }
    res.setHeader(
      "Content-Type",
      file.endsWith(".css")
        ? "text/css"
        : file.endsWith(".js")
          ? "text/javascript"
          : "text/html; charset=utf-8",
    );
    res.end(data);
  });
});
const bridge = `window.__tgCalls=[];window.__tgEvents={};window.Telegram={WebApp:{viewportStableHeight:844,safeAreaInset:{top:12,bottom:10},contentSafeAreaInset:{top:8,bottom:4},isVersionAtLeast:()=>true,ready:()=>__tgCalls.push('ready'),expand:()=>__tgCalls.push('expand'),onEvent:(name,fn)=>__tgEvents[name]=fn,HapticFeedback:{selectionChanged:()=>__tgCalls.push('selection'),notificationOccurred:(kind)=>__tgCalls.push(kind)}}};`;
const errors = [];
async function run() {
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const url = "http://127.0.0.1:" + server.address().port;
  const browser = await playwright.chromium.launch({
    headless: true,
    channel: "msedge",
  });
  try {
    const context = await browser.newContext({
      viewport: { width: 390, height: 844 },
      deviceScaleFactor: 1,
      isMobile: true,
      hasTouch: true,
      permissions: ["clipboard-read", "clipboard-write"],
    });
    const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
    const sdk = /<script data-telegram-sdk>[\s\S]*?<\/script>/;
    assert.match(html, sdk);
    await context.route(url + "/", (r) =>
      r.fulfill({
        contentType: "text/html; charset=utf-8",
        body: html.replace(sdk, () => "<script>" + bridge + "</script>"),
      }),
    );
    const page = await context.newPage();
    page.on("pageerror", (e) => errors.push(e.message));
    await page.goto(url);
    await page.waitForSelector("#field-scene");
    assert.deepEqual(await page.evaluate(() => __tgCalls.slice(0, 2)), [
      "ready",
      "expand",
    ]);
    assert.equal(
      await page.evaluate(() =>
        getComputedStyle(document.documentElement).getPropertyValue(
          "--safe-top",
        ),
      ),
      "20px",
    );
    await page.evaluate(() => {
      Telegram.WebApp.viewportStableHeight = 620;
      __tgEvents.viewportChanged();
    });
    assert.equal(
      await page.evaluate(() =>
        getComputedStyle(document.documentElement).getPropertyValue(
          "--tg-viewport-stable-height",
        ),
      ),
      "620px",
    );
    await page.locator("#generate").click();
    assert.equal(await page.locator("#result-content").isVisible(), false);
    await page.locator("#field-scene").fill("Станция на орбите Сатурна");
    await page.locator("#field-action").fill("Корабль входит в ангар");
    await page.locator("#field-duration").selectOption("15");
    await page.locator("#field-ratio").selectOption("9:16");
    await page.locator("#field-negative").fill("Не показывать логотипы");
    await page.locator("#generate").click();
    let output = await page.locator("#output").inputValue();
    for (const value of [
      "Станция на орбите Сатурна",
      "Корабль входит в ангар",
      "9:16",
      "0–5",
      "5–10",
      "10–15",
      "Не показывать логотипы",
    ])
      assert.ok(output.includes(value), value);
    assert.ok(!/--kling|--cfg|--gen3|--sora/.test(output));
    await page.locator("#copy").click();
    assert.equal(
      (await page.evaluate(() => navigator.clipboard.readText())).replace(
        /\r\n/g,
        "\n",
      ),
      output,
    );
    await page.locator("#edit").click();
    assert.equal(await page.locator("#edit").innerText(), "Готово");
    assert.equal(await page.locator("#edit svg").count(), 1);
    await page.locator("#output").fill(output + "\nРучная правка");
    await page.locator("#edit").click();
    assert.equal(await page.locator("#history-count").textContent(), "1");
    await page.locator(".favorite-button").first().click();
    await page.locator("#favorites-filter").click();
    assert.equal(await page.locator(".history-item").count(), 1);
    await page.locator("#history-search").fill("zz-no-matching-prompt-zz");
    assert.equal(await page.locator(".history-item").count(), 0);
    await page.locator("#history-search").clear();
    assert.equal(await page.locator(".history-item").count(), 1);
    await page.locator("#favorites-filter").click();
    await page.locator("[data-mode=games]").click();
    await page
      .locator("#field-brief")
      .fill("Игра про курьера на летающих островах");
    for (const kind of [
      "idea",
      "mechanics",
      "characters",
      "world",
      "quest",
      "dialogue",
      "development",
    ]) {
      await page.locator("#field-kind").selectOption(kind);
      await page.locator("#generate").click();
      output = await page.locator("#output").inputValue();
      assert.ok(output.includes("летающих островах"));
      assert.ok(output.includes("Godot"));
      assert.ok(!output.includes("Negative prompt"));
    }
    await page.locator("[data-mode=chat]").click();
    await page.locator("#field-topic").fill("Этика искусственного интеллекта");
    await page.locator("#field-role").fill("Сократ");
    await page.locator("#field-kindChat").selectOption("roleplay");
    await page.locator("#generate").click();
    output = await page.locator("#output").inputValue();
    assert.ok(output.includes("Сократ"));
    assert.ok(output.includes("Не отвечай за меня"));
    await page.locator("[data-mode=universal]").click();
    await page.locator("#field-goal").fill("Напиши функцию сортировки");
    await page.locator("#field-context").fill("Браузер, JavaScript");
    await page.locator("#field-constraints").fill("Без зависимостей");
    await page.locator("#field-taskType").selectOption("coding");
    await page.locator("#field-format").selectOption("code");
    await page.locator("#generate").click();
    output = await page.locator("#output").inputValue();
    for (const text of [
      "функцию сортировки",
      "Браузер, JavaScript",
      "Без зависимостей",
      "Код с пояснением",
      "Не выдумывай API",
    ])
      assert.ok(output.includes(text), text);
    await page.locator("[data-mode=video]").click();
    assert.equal(
      await page.locator("#field-scene").inputValue(),
      "Станция на орбите Сатурна",
    );
    assert.ok(
      (await page.locator("#output").inputValue()).endsWith("Ручная правка"),
    );
    await page.reload();
    await page.waitForSelector("#field-scene");
    assert.equal(await page.locator("#field-duration").inputValue(), "15");
    assert.ok(
      (await page.locator("#output").inputValue()).endsWith("Ручная правка"),
    );
    await page.locator("[data-lang=en]").click();
    assert.equal(await page.locator("html").getAttribute("lang"), "en");
    for (const mode of ["video", "games", "chat", "universal"]) {
      await page.locator(`[data-mode=${mode}]`).click();
      await page.locator("#random").click();
      await page.locator("#generate").click();
      assert.ok(
        (await page.locator("#output").inputValue()).includes(
          "Response language: English.",
        ),
      );
      // Rendered labels must all be translated; retained user text is excluded.
      const labels = await page
        .locator("label, .mode-button, [data-i18n], option, .choice")
        .allTextContents();
      assert.ok(!/[А-Яа-яЁё]/.test(labels.join(" ")), mode + " labels");
    }
    await page.locator("#stars-open").click();
    assert.equal(await page.locator("#stars-dialog").isVisible(), true);
    assert.equal(await page.locator(".packages button:disabled").count(), 2);
    assert.match(
      await page.locator("#stars-dialog").textContent(),
      /no Stars are charged or credited/,
    );
    await page.keyboard.press("Escape");
    // Pathological unbroken and HTML-like content remains text and cannot overflow.
    await page
      .locator("#field-goal")
      .fill("<img src=x onerror=alert(1)>" + "X".repeat(5900));
    await page.locator("#generate").click();
    assert.equal(await page.locator("#history-list img").count(), 0);
    for (const width of [320, 360, 390, 430, 768, 1280]) {
      await page.setViewportSize({ width, height: 844 });
      assert.ok(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        `overflow at ${width}`,
      );
    }
    await page.setViewportSize({ width: 390, height: 844 });
    await page.locator("[data-mode=video]").click();
    await page.locator("[data-lang=ru]").click();
    await page.evaluate(() => scrollTo(0, 0));
    await page.screenshot({
      path: path.join(root, "tests/mobile.png"),
      fullPage: true,
      animations: "disabled",
    });
    await page.setViewportSize({ width: 1280, height: 950 });
    await page.evaluate(() => scrollTo(0, 0));
    await page.screenshot({
      path: path.join(root, "tests/desktop.png"),
      fullPage: true,
      animations: "disabled",
    });
    await page.emulateMedia({ reducedMotion: "reduce" });
    assert.equal(
      await page
        .locator(".ambient i")
        .first()
        .evaluate((el) => getComputedStyle(el).animationName),
      "none",
    );
    await page.evaluate(() =>
      document.documentElement.classList.add("simple-glass"),
    );
    assert.equal(
      await page
        .locator(".glass")
        .first()
        .evaluate((el) => getComputedStyle(el).backdropFilter),
      "none",
    );
    // Bounded history, deletion and reload persistence.
    for (let i = 0; i < 32; i++)
      await page
        .locator("#prompt-form")
        .evaluate((form) => form.requestSubmit());
    assert.equal(await page.locator("#history-count").textContent(), "30");
    await page.locator(".history-item .icon-button").first().click();
    assert.equal(await page.locator("#history-count").textContent(), "29");
    await page.locator(".history-open").first().click();
    assert.equal(await page.locator("#result-content").isVisible(), true);
    await page.locator("#clear-history").click();
    await page.locator("#cancel-clear").click();
    assert.equal(await page.locator("#history-count").textContent(), "29");
    const sceneBeforeClear = await page.locator("#field-scene").inputValue();
    await page.locator("#clear-history").click();
    await page.locator("#confirm-clear").click();
    await page.reload();
    assert.equal(await page.locator("#history-count").textContent(), "0");
    await page.locator("#favorites-filter").click();
    assert.equal(await page.locator(".history-item").count(), 1);
    await page.locator("#favorites-filter").click();
    assert.equal(
      await page.locator("#field-scene").inputValue(),
      sceneBeforeClear,
    );
    // Failed clipboard API + failed legacy copy: truthful manual-copy fallback.
    await page.locator("#generate").click();
    await page.evaluate(() => {
      Object.defineProperty(navigator, "clipboard", {
        value: { writeText: () => Promise.reject(new Error("denied")) },
      });
      document.execCommand = () => false;
    });
    await page.locator("#copy").click();
    assert.match(await page.locator("#toast").textContent(), /вручную/);
    await page.locator("#field-duration").selectOption("10");
    assert.ok(
      await page.evaluate(
        () => __tgCalls.includes("selection") && __tgCalls.includes("success"),
      ),
    );
    const offline = await browser.newContext({
      viewport: { width: 390, height: 844 },
    });
    await offline.route("https://telegram.org/**", (r) => r.abort());
    await offline.addInitScript(() => {
      Object.defineProperty(window, "localStorage", {
        get() {
          throw new Error("blocked");
        },
      });
    });
    const p2 = await offline.newPage();
    p2.on("pageerror", (e) => errors.push(e.message));
    await p2.goto(url);
    await p2.locator("#random").click();
    await p2.locator("#generate").click();
    assert.equal(await p2.locator("#result-content").isVisible(), true);
    // Single-file release initializes the deferred Telegram bridge too.
    const release = await context.newPage();
    release.on("pageerror", (e) => errors.push(e.message));
    await release.goto(url);
    await release.locator("#random").click();
    await release.locator("#generate").click();
    assert.equal(await release.locator("#result-content").isVisible(), true);
    assert.ok(await release.evaluate(() => __tgCalls.includes("ready")));
    assert.deepEqual(errors, []);
    console.log(
      "PASS: 4 modes, 7 game types, RU/EN, drafts/reload, templates, editing, real clipboard + failure fallback, history cap/open/delete/clear, 320–1280px, long input/XSS, reduced motion, no blur, unavailable storage/SDK, Telegram bridge, standalone release. No JavaScript errors.",
    );
  } finally {
    await browser.close();
  }
}
run()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(() => server.close());
