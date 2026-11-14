import assert from "node:assert/strict";
import { createHmac } from "node:crypto";
import worker from "../worker.mjs";

const origin = "https://emoculture.github.io";
const token = "test-bot-token";
const signed = new URLSearchParams({
  auth_date: String(Math.floor(Date.now() / 1000)),
  user: JSON.stringify({ id: 123 }),
});
signed.sort();
const key = createHmac("sha256", "WebAppData").update(token).digest();
signed.set("hash", createHmac("sha256", key).update(
  [...signed].map(([k, v]) => k + "=" + v).join("\n"),
).digest("hex"));
let limit = false;
const env = {
  APP_ORIGIN: origin, TELEGRAM_BOT_TOKEN: token, GEMINI_API_KEY: "test-key",
  QUOTA: {
    idFromName(id) { assert.equal(id, "123"); return id; },
    get: () => ({ fetch: async () => new Response(null, { status: limit ? 429 : 204 }) }),
  },
};
const request = (route, body, init = signed.toString(), from = origin) => worker.fetch(
  new Request("https://worker.test/api/ai/" + route, {
    method: "POST",
    headers: { origin: from, "content-type": "application/json", "x-telegram-init-data": init },
    body: JSON.stringify(body),
  }), env);
const prompt = { text: "Clean up this prompt", style: "quick", lang: "en" };
let upstream = 0;
let upstreamError = false;
const scene = Object.fromEntries(["title","action","characters","location","camera","lighting","atmosphere","sound","prompt"].map(key => [key, key]));
globalThis.fetch = async (url, options) => {
  upstream++;
  assert.match(url, /gemini-3\.5-flash-lite:generateContent$/);
  assert.equal(options.headers["x-goog-api-key"], "test-key");
  if (upstreamError) return new Response(null, {status: 500});
  const body = JSON.parse(options.body);
  const schema = body.generationConfig.responseJsonSchema;
  const text = schema ? JSON.stringify(Array.from({length: schema.minItems}, () => scene)) : "Improved";
  return Response.json({ candidates: [{ finishReason: "STOP", content: { parts: [{ text }] } }] });
};
assert.equal((await request("improve", prompt, "invalid")).status, 401);
assert.equal((await request("improve", prompt, signed.toString().replace("123", "124"))).status, 401);
assert.equal((await request("improve", prompt, undefined, "https://another.test")).status, 403);
limit = true;
assert.equal((await request("improve", prompt)).status, 429);
limit = false;
assert.equal((await request("improve", {...prompt, text: "x".repeat(12001)})).status, 400);
assert.equal((await request("image-to-prompt", {mime:"image/png", image:btoa("not a PNG"), style:"cinematic"})).status, 415);
assert.equal(upstream, 0);
for (const style of ["quick","pro","creative"])
  assert.equal((await (await request("improve", {...prompt, style})).json()).text, "Improved");
for (const count of [3,5,10]) {
  const settings = { idea: "Story", genre: "Drama", visual: "3D", count, total: 15, ratio: "9:16" };
  const {scenes} = await (await request("scenario", settings)).json();
  assert.equal(scenes.length, count);
  assert.equal(scenes.reduce((sum, scene) => sum + scene.duration, 0), 15);
  const replacement = await (await request("scenario", {...settings, sceneIndex:1, context:"previous scenes"})).json();
  assert.equal(replacement.scenes[0].duration, scenes[1].duration);
}
for (const [mime, signature] of [["image/jpeg","\xff\xd8\xff"],["image/png","\x89PNG\r\n\x1a\n"],["image/webp","RIFF0000WEBP"]])
  assert.equal((await request("image-to-prompt", {mime, image:btoa(signature), style:"cinematic"})).status, 200);
upstreamError = true;
assert.equal((await request("improve", prompt)).status, 502);
console.log("Worker API checks passed with mocked Gemini and signed Telegram data.");
