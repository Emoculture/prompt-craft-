"use strict";
(() => {
  // All UI and template strings share one RU/EN translation registry.
  const dictionary = {};
  const pair = (ru, en) => ({ ru, en });
  const add = (key, ru, en) => {
    dictionary[key] = pair(ru, en);
    return key;
  };
  const ui = {
    demo: ["Демо", "Demo"],
    eyebrow: ["ВАША ТВОРЧЕСКАЯ СТУДИЯ", "YOUR CREATIVE WORKSPACE"],
    headline: ["От идеи — к точному промпту.", "Big ideas. Better prompts."],
    intro: [
      "Задайте направление. Добавьте детали. Создайте что-то своё.",
      "Set a direction. Add the details. Make it yours.",
    ],
    step1: ["01 / ИДЕЯ", "01 / THE IDEA"],
    step2: ["02 / ДЕТАЛИ", "02 / THE DETAILS"],
    step3: ["03 / РЕЗУЛЬТАТ", "03 / THE RESULT"],
    settings: ["Настройте под себя", "Make it your own"],
    example: ["Пример", "Example"],
    target: ["Нейросеть для промпта", "Target AI"],
    targetHint: [
      "Готовый текст для переноса в выбранный сервис. Доступные параметры зависят от модели.",
      "Ready-to-copy text for your chosen service. Available settings depend on the model.",
    ],
    generate: ["Создать промпт", "Create prompt"],
    promptStyle: ["Стиль промпта", "Prompt style"],
    workspaceIntro: ["Выберите задачу и стиль, затем создайте промпт.", "Choose a task and style, then create a prompt."],
    quick: ["Быстрый", "Quick"],
    pro: ["Профессиональный", "Professional"],
    creative: ["Креативный", "Creative"],
    favorites: ["Избранное", "Favorites"],
    searchPrompts: ["Поиск по промптам", "Search prompts"],
    noMatches: ["Промпты не найдены", "No matching prompts"],
    saveFavorite: ["Добавить в избранное", "Add to favorites"],
    removeFavorite: ["Убрать из избранного", "Remove from favorites"],
    improve: ["Улучшить с ИИ", "Improve with AI"],
    improving: ["ИИ улучшает промпт…", "AI is improving the prompt…"],
    improveError: ["Не удалось улучшить промпт. Попробуйте ещё раз.", "Could not improve the prompt. Try again."],
    aiUnavailable: ["Для этого языка встроенная модель недоступна.", "The built-in model is unavailable for this language."],
    localHint: [
      "Бесплатно · Без отправки данных в нейросеть",
      "Free · No data sent to AI",
    ],
    result: ["Ваш следующий шедевр", "Your next great creation"],
    emptyTitle: ["Всё начинается с идеи", "It starts with an idea"],
    emptyHint: [
      "Заполните описание или попробуйте пример. Здесь появится готовый промпт.",
      "Write a brief or try an example. Your ready-to-use prompt will appear here.",
    ],
    resultText: ["Текст промпта", "Prompt text"],
    edit: ["Редактировать", "Edit"],
    done: ["Готово", "Done"],
    copy: ["Копировать", "Copy"],
    editHint: [
      "Изменения автоматически сохраняются в истории.",
      "Edits are automatically saved to history.",
    ],
    history: ["История", "History"],
    clear: ["Очистить", "Clear"],
    historyHint: [
      "Последние 30 результатов · Только на этом устройстве",
      "Last 30 results · On this device only",
    ],
    connectionHint: [
      "Это конструктор промптов. Диалог с нейросетью и генерация медиа не подключены.",
      "This is a prompt builder. AI chat and media generation are not connected.",
    ],
    footer: ["Место для ваших идей.", "A space for your ideas."],
    demoOnly: ["Демонстрационный интерфейс", "Demo interface"],
    starsHint: [
      "Реальная оплата не подключена. Пакеты ниже — только макет: Stars не списываются и не начисляются. Генерация промптов бесплатна.",
      "Real payments are not connected. These packages are a preview: no Stars are charged or credited. Prompt creation is free.",
    ],
    unavailable: ["Недоступно", "Unavailable"],
    starsBackend: [
      "Покупки станут доступны после подключения платёжного сервера бота.",
      "Purchases require the bot’s payment server to be connected.",
    ],
    clearQuestion: ["Удалить всю историю?", "Delete all history?"],
    clearHint: [
      "Сохранённые результаты будут удалены с этого устройства. Черновики останутся.",
      "Saved results will be removed from this device. Input drafts will remain.",
    ],
    cancel: ["Отмена", "Cancel"],
    delete: ["Удалить", "Delete"],
    close: ["Закрыть", "Close"],
    copied: ["Промпт скопирован", "Prompt copied"],
    copyFailed: [
      "Текст выделен. Скопируйте его вручную.",
      "Text selected. Please copy it manually.",
    ],
    emptyHistory: [
      "Ваши промпты появятся здесь.",
      "Your prompts will appear here.",
    ],
    required: [
      "Добавьте описание задачи или выберите пример.",
      "Add a brief or choose an example.",
    ],
    storageError: [
      "Хранилище недоступно или заполнено. Данные сохраняются только до закрытия страницы.",
      "Storage is unavailable or full. Data will last only until this page closes.",
    ],
    deleted: ["Результат удалён", "Result deleted"],
    cleared: ["История очищена", "History cleared"],
    created: ["Промпт готов", "Prompt ready"],
    chars: ["знаков", "characters"],
    modes: ["Режимы", "Modes"],
    negative: [
      "Нежелательные элементы (negative prompt)",
      "Elements to avoid (negative prompt)",
    ],
    stage1: ["1. Начало", "1. Opening"],
    stage2: ["2. Развитие", "2. Development"],
    stage3: ["3. Завершение", "3. Ending"],
    purpose: ["Задача", "Task"],
    model: ["Целевой сервис", "Target service"],
    responseLanguage: ["Язык ответа: русский.", "Response language: English."],
    noInvent: [
      "Не выдумывай факты. Отделяй предположения от проверенной информации. Если важного контекста не хватает, задай уточняющие вопросы.",
      "Do not invent facts. Separate assumptions from verified information. Ask clarifying questions if essential context is missing.",
    ],
    naturalSettings: [
      "Параметры ниже описывают желаемый результат обычным текстом, а не команды или гарантированные возможности сервиса.",
      "The settings below describe the desired result in plain language; they are not commands or guaranteed service capabilities.",
    ],
    optional: ["Необязательно", "Optional"],
    none: ["Без дополнительных ограничений", "No additional constraints"],
    auto: ["По задаче", "As appropriate"],
    modelNeutral: ["Любая нейросеть", "Any AI"],
    video: ["Видео", "Video"],
    games: ["Игры", "Games"],
    chat: ["Общение", "Chat"],
    universal: ["Универсальный", "Universal"],
    videoTitle: ["Расскажите вашу сцену", "Set the scene"],
    gamesTitle: ["Придумайте игровой опыт", "Build a game idea"],
    chatTitle: ["Начните с интересной темы", "Start a conversation"],
    universalTitle: ["Сформулируйте задачу", "Define the task"],
    videoHint: [
      "От первого кадра до финального акцента. Соберите визуальное направление будущего видео.",
      "From the opening frame to the final beat. Shape the visual direction of your video.",
    ],
    gamesHint: [
      "От механики до задания разработчику — выберите, что хотите создать.",
      "From a mechanic to a development brief — choose what you want to create.",
    ],
    chatHint: [
      "Составьте промпт для будущего диалога. Сам диалог проходит в выбранной нейросети.",
      "Prepare a prompt for a future conversation. The conversation happens in your chosen AI service.",
    ],
    universalHint: [
      "Тексты, обучение, код и любые другие задачи — с ясным контекстом и форматом.",
      "Writing, learning, code and more — with clear context and a useful format.",
    ],
  };
  Object.entries(ui).forEach(([key, values]) => add(key, ...values));
  const options = (name, rows) =>
    rows.map(([id, ru, en]) => ({
      id,
      label: add(name + "." + id, ru, en || ru),
    }));
  const field = (id, ru, en, type = "text", extra = {}) => ({
    id,
    label: add("field." + id, ru, en),
    type,
    ...extra,
  });
  const videoFields = [
    field("scene", "Описание сцены", "Scene description", "textarea", {
      required: true,
    }),
    field("action", "Действие", "Action", "textarea"),
    field("framing", "Ракурс и план", "Framing & angle", "choices", {
      options: options("framing", [
        ["low", "Героический снизу", "Low-angle hero"],
        ["macro", "Сверхкрупный план", "Extreme macro"],
        ["wide", "Общий план", "Wide establishing"],
        ["dutch", "Наклон горизонта 15°", "Dutch angle 15°"],
      ]),
    }),
    field("optics", "Камера и оптика", "Camera & optics", "select", {
      options: options("optics", [
        ["cooke", "Cooke · анаморфная 35 мм", "Cooke · anamorphic 35 mm"],
        ["arri", "Arri · 50 мм T1.3", "Arri · 50 mm T1.3"],
        ["leica", "Leica · 75 мм f/1.25", "Leica · 75 mm f/1.25"],
        ["bolex", "Bolex · плёнка 16 мм", "Bolex · 16 mm film"],
      ]),
    }),
    field("movement", "Движение камеры", "Camera movement", "select", {
      options: options("movement", [
        ["dolly", "Плавный наезд", "Smooth dolly push"],
        ["orbit", "Облёт 360°", "360° orbit"],
        ["fpv", "Пикирование FPV", "FPV drone dive"],
        ["vertigo", "Долли-зум", "Dolly zoom"],
      ]),
    }),
    field("lighting", "Свет и цвет", "Lighting & color", "select", {
      options: options("lighting", [
        ["noir", "Контрастный свет · нуар", "High-contrast chiaroscuro"],
        [
          "kodak",
          "Kodak Vision3 · тёплый свет",
          "Kodak Vision3 · warm tungsten",
        ],
        ["neon", "Неон · циан и маджента", "Neon · cyan & magenta"],
        ["golden", "Золотой час", "Golden hour"],
      ]),
    }),
    field("atmosphere", "Атмосфера", "Atmosphere", "select", {
      options: options("atmosphere", [
        ["fog", "Лучи света в тумане", "Light shafts through fog"],
        ["rain", "Ливень и мокрые отражения", "Heavy rain & wet reflections"],
        ["ash", "Пепел, смог и искры", "Ash, smog & sparks"],
        ["cosmic", "Космическая пыль", "Floating cosmic dust"],
      ]),
    }),
    field("duration", "Длительность", "Duration", "select", {
      options: options("duration", [
        ["5", "5 секунд", "5 seconds"],
        ["10", "10 секунд", "10 seconds"],
        ["15", "15 секунд", "15 seconds"],
        ["30", "30 секунд", "30 seconds"],
      ]),
    }),
    field("ratio", "Формат кадра", "Aspect ratio", "select", {
      options: options("ratio", [
        ["16:9", "16:9 · горизонтальный", "16:9 · landscape"],
        ["9:16", "9:16 · вертикальный", "9:16 · portrait"],
        ["1:1", "1:1 · квадрат", "1:1 · square"],
        ["4:3", "4:3 · классический", "4:3 · classic"],
      ]),
    }),
    field("motion", "Интенсивность движения", "Motion intensity", "range"),
    field("negative", "Что исключить", "What to avoid", "textarea"),
  ];
  const gameFields = [
    field("brief", "Идея и контекст", "Idea & context", "textarea", {
      required: true,
    }),
    field("kind", "Что создаём", "What to create", "select", {
      options: options("kind", [
        ["idea", "Идея игры", "Game concept"],
        ["mechanics", "Механика", "Mechanics"],
        ["characters", "Персонажи", "Characters"],
        ["world", "Игровой мир", "Game world"],
        ["quest", "Квест", "Quest"],
        ["dialogue", "Диалог", "Dialogue"],
        ["development", "Задание на разработку", "Development brief"],
      ]),
    }),
    field("genre", "Жанр", "Genre", "select", {
      options: options("genre", [
        ["adventure", "Приключение", "Adventure"],
        ["rpg", "Ролевая игра", "RPG"],
        ["puzzle", "Головоломка", "Puzzle"],
        ["strategy", "Стратегия", "Strategy"],
        ["simulation", "Симулятор", "Simulation"],
        ["action", "Экшен", "Action"],
      ]),
    }),
    field("platform", "Платформа", "Platform", "select", {
      options: options("platform", [
        ["mobile", "Мобильная", "Mobile"],
        ["pc", "ПК", "PC"],
        ["web", "Браузер", "Web"],
        ["console", "Консоль", "Console"],
      ]),
    }),
    field("style", "Визуальный стиль", "Visual style", "select", {
      options: options("style", [
        ["stylized", "Стилизация", "Stylized"],
        ["pixel", "Пиксель-арт", "Pixel art"],
        ["real", "Реализм", "Realistic"],
        ["lowpoly", "Низкополигональный", "Low poly"],
      ]),
    }),
    field("engine", "Движок", "Engine", "select", {
      options: options("engine", [
        ["godot", "Godot"],
        ["unity", "Unity"],
        ["unreal", "Unreal Engine"],
        ["web", "HTML / JavaScript"],
        ["any", "Предложить подходящий", "Suggest a suitable engine"],
      ]),
    }),
    field("scope", "Масштаб проекта", "Project scope", "select", {
      options: options("scope", [
        ["prototype", "Прототип · 1 разработчик", "Prototype · solo developer"],
        ["jam", "Геймджем · 48 часов", "Game jam · 48 hours"],
        ["indie", "Инди · небольшая команда", "Indie · small team"],
        ["large", "Большой проект", "Large project"],
      ]),
    }),
  ];
  const chatFields = [
    field("topic", "Тема и контекст", "Topic & context", "textarea", {
      required: true,
    }),
    field("role", "Роль собеседника", "Conversation partner’s role", "text"),
    field("kindChat", "Тип общения", "Conversation type", "select", {
      options: options("kindChat", [
        ["discussion", "Обсуждение", "Discussion"],
        ["brainstorm", "Мозговой штурм", "Brainstorming"],
        ["explain", "Объяснение", "Explanation"],
        ["roleplay", "Ролевой диалог", "Role-play"],
      ]),
    }),
    field("tone", "Тон", "Tone", "select", {
      options: options("tone", [
        ["friendly", "Дружелюбный", "Friendly"],
        ["professional", "Деловой", "Professional"],
        ["socratic", "Сократический", "Socratic"],
        ["playful", "Игривый", "Playful"],
      ]),
    }),
    field("detail", "Подробность", "Detail level", "select", {
      options: options("detail", [
        ["balanced", "Средняя", "Balanced"],
        ["brief", "Кратко", "Brief"],
        ["deep", "Подробно, с примерами", "Detailed, with examples"],
      ]),
    }),
  ];
  const universalFields = [
    field("goal", "Цель", "Goal", "textarea", { required: true }),
    field("context", "Контекст", "Context", "textarea"),
    field("constraints", "Ограничения", "Constraints", "textarea"),
    field("taskType", "Тип задачи", "Task type", "select", {
      options: options("taskType", [
        ["writing", "Текст", "Writing"],
        ["learning", "Обучение", "Learning"],
        ["coding", "Программирование", "Programming"],
        ["other", "Другая задача", "Other task"],
      ]),
    }),
    field("format", "Формат результата", "Output format", "select", {
      options: options("format", [
        ["steps", "Пошаговый план", "Step-by-step plan"],
        ["text", "Связный текст", "Prose"],
        ["list", "Список", "List"],
        ["table", "Таблица", "Table"],
        ["code", "Код с пояснением", "Code with explanation"],
        ["json", "JSON", "JSON"],
      ]),
    }),
  ];
  const modes = {
    video: { icon: "video", fields: videoFields },
    games: { icon: "game", fields: gameFields },
    chat: { icon: "chat", fields: chatFields },
    universal: { icon: "sparkles", fields: universalFields },
  };
  const examples = {
    video: [
      pair(
        "Хранитель маяка на скале наблюдает северное сияние над спокойным морем.",
        "A lighthouse keeper on a cliff watches the aurora above a calm sea.",
      ),
      pair(
        "Робот-садовник находит первый цветок среди заброшенных городских теплиц.",
        "A gardening robot discovers the first flower in abandoned urban greenhouses.",
      ),
      pair(
        "Пилот в стеклянном шлеме смотрит на вспышку сверхновой через иллюминатор.",
        "A pilot in a glass helmet watches a supernova through a spacecraft window.",
      ),
    ],
    games: [
      pair(
        "Мир летающих островов, где курьер доставляет воспоминания. Игровая сессия — 10 минут.",
        "A world of floating islands where a courier delivers memories. Each session lasts 10 minutes.",
      ),
      pair(
        "Уютная мастерская роботов. Игрок ремонтирует помощников и узнаёт истории их владельцев.",
        "A cozy robot workshop. The player repairs companions and learns their owners’ stories.",
      ),
      pair(
        "Подводная библиотека: знания меняют течения, а книги нужно спасать от прилива.",
        "An underwater library where knowledge changes currents and books must be saved from the tide.",
      ),
    ],
    chat: [
      pair(
        "Как найти баланс между творческой работой и повседневной рутиной?",
        "How can I balance creative work with everyday routines?",
      ),
      pair(
        "Почему небо меняет цвет на закате? Я начинающий и хочу понять физику явления.",
        "Why does the sky change color at sunset? I am a beginner and want to understand the physics.",
      ),
      pair(
        "Каким может быть общественный транспорт в городе через 50 лет?",
        "What might public transportation look like in a city 50 years from now?",
      ),
    ],
    universal: [
      pair(
        "Помоги составить план изучения JavaScript на четыре недели.",
        "Help me create a four-week JavaScript learning plan.",
      ),
      pair(
        "Напиши короткое приветствие для сайта независимой книжной лавки.",
        "Write a short welcome message for an independent bookshop website.",
      ),
      pair(
        "Разработай функцию, которая группирует список задач по приоритету.",
        "Develop a function that groups a list of tasks by priority.",
      ),
    ],
  };
  Object.entries(examples).forEach(([mode, list]) =>
    list.forEach((value, i) => (dictionary[mode + ".example." + i] = value)),
  );
  add(
    "rolePlaceholder",
    "Например: терпеливый наставник, редактор, персонаж",
    "For example: patient mentor, editor, fictional character",
  );
  const targetOptions = {
    video: ["Kling", "Runway", "Sora", "Luma", "Flux", "Midjourney"],
    other: ["ChatGPT", "Claude", "Gemini"],
  };
  const icons = {
    aperture:
      '<circle cx="12" cy="12" r="9"/><path d="m9 3 6 10M19 6H8m13 8-7-10m1 17-6-10M5 18h11M3 10l7 10"/>',
    video:
      '<rect x="3" y="6" width="12" height="12" rx="3"/><path d="m15 10 6-3v10l-6-3"/>',
    game: '<path d="M7 7h10c3 0 5 10 3 12-2 1-4-3-5-3H9c-1 0-3 4-5 3C2 17 4 7 7 7Z"/><path d="M8 10v5m-2.5-2.5h5M16 11h.01M18 14h.01"/>',
    chat: '<path d="M21 11a8 8 0 0 1-8 8H7l-4 3V7a4 4 0 0 1 4-4h6a8 8 0 0 1 8 8Z"/><path d="M7 9h9M7 13h6"/>',
    sparkles:
      '<path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5ZM20 2v4m-2-2h4M4 18v4m-2-2h4"/>',
    sliders:
      '<path d="M4 6h7m4 0h5M4 12h3m4 0h9M4 18h11m4 0h1"/><circle cx="13" cy="6" r="2"/><circle cx="9" cy="12" r="2"/><circle cx="17" cy="18" r="2"/>',
    star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9Z"/>',
    document:
      '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Z"/><path d="M14 3v6h6M8 13h8M8 17h5"/>',
    copy: '<rect x="8" y="8" width="12" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/>',
    edit: '<path d="m15 4 5 5M4 20l5-1L21 7l-5-5L4 14ZM13 20h8"/>',
    history: '<path d="M3 11a9 9 0 1 1 2 7M3 4v7h7M12 7v6l4 2"/>',
    shield: '<path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6ZM8 12l3 3 5-6"/>',
    shuffle:
      '<path d="M3 6h3c4 0 8 12 12 12h3m-4-4 4 4-4 4M3 18h3c4 0 8-12 12-12h3m-4-4 4 4-4 4"/>',
    close: '<path d="m6 6 12 12M6 18 18 6"/>',
    trash: '<path d="M3 6h18M9 6V3h6v3M5 6l1 15h12l1-15M10 10v7m4-7v7"/>',
  };
  const svg = (name) =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.sparkles}</svg>`;
  const $ = (id) => document.getElementById(id);
  const KEY = "director-studio.v5";
  const blankDraft = (mode) => ({
    values: Object.fromEntries(
      modes[mode].fields.map((f) => [
        f.id,
        f.options?.[0].id || (f.type === "range" ? "6" : ""),
      ]),
    ),
    target: mode === "video" ? "Kling" : "ChatGPT",
    result: null,
  });
  const state = {
    version: 5,
    lang: "ru",
    mode: "video",
    drafts: Object.fromEntries(
      Object.keys(modes).map((m) => [m, blankDraft(m)]),
    ),
    history: [],
    favorites: {},
    style: "quick",
  };
  let favoritesOnly = false;
  let aiBusy = false;
  let storageFailed = false,
    toastTimer,
    editing = false;
  const t = (key) => dictionary[key]?.[state.lang] || key;
  const resultValid = (r) =>
    r &&
    typeof r.text === "string" &&
    r.text.length <= 60000 &&
    typeof r.id === "string" &&
    r.id.length < 100 &&
    ["ru", "en"].includes(r.lang) &&
    typeof r.target === "string" &&
    r.target.length < 100;
  try {
    const saved = JSON.parse(localStorage.getItem(KEY));
    if (saved?.version === 5) {
      if (["quick", "pro", "creative"].includes(saved.style)) state.style = saved.style;
      for (const r of Object.values(saved.favorites ?? {})) {
        if (resultValid(r) && Object.hasOwn(modes, r.mode) && Number.isFinite(r.date))
          Object.defineProperty(state.favorites, r.id, { value: r, writable: true, enumerable: true, configurable: true });
      }
      if (["ru", "en"].includes(saved.lang)) state.lang = saved.lang;
      if (Object.hasOwn(modes, saved.mode)) state.mode = saved.mode;
      for (const mode of Object.keys(modes)) {
        const data = saved.drafts?.[mode];
        if (!data) continue;
        for (const f of modes[mode].fields) {
          const v = data.values?.[f.id];
          if (
            typeof v === "string" &&
            v.length <= 6000 &&
            (!f.options || f.options.some((o) => o.id === v)) &&
            (f.type !== "range" || /^(10|[1-9])$/.test(v))
          )
            state.drafts[mode].values[f.id] = v;
        }
        if (
          [
            ...(mode === "video" ? targetOptions.video : targetOptions.other),
            "Any AI",
          ].includes(data.target)
        )
          state.drafts[mode].target = data.target;
        if (resultValid(data.result))
          state.drafts[mode].result = {
            id: data.result.id,
            text: data.result.text,
            lang: data.result.lang,
            target: data.result.target,
          };
      }
      if (Array.isArray(saved.history))
        state.history = saved.history
          .filter(
            (r) =>
              resultValid(r) &&
              Object.hasOwn(modes, r.mode) &&
              Number.isFinite(r.date),
          )
          .slice(0, 30)
          .map((r) => ({
            id: r.id,
            text: r.text,
            lang: r.lang,
            target: r.target,
            mode: r.mode,
            date: r.date,
          }));
    }
  } catch {
    storageFailed = true;
  }
  function persist() {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
      storageFailed = false;
    } catch {
      if (!storageFailed) toast(t("storageError"));
      storageFailed = true;
    }
  }
  function toast(message) {
    $("toast").textContent = message;
    $("toast").classList.add("visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => $("toast").classList.remove("visible"), 4000);
  }
  let tg;
  function haptic(kind = "selection") {
    try {
      if (!tg?.isVersionAtLeast?.("6.1")) return;
      if (kind === "selection") tg.HapticFeedback?.selectionChanged();
      else tg.HapticFeedback?.notificationOccurred("success");
    } catch {
      /* Optional bridge must never block the app. */
    }
  }
  const reduceMotion = () =>
    matchMedia("(prefers-reduced-motion: reduce)").matches;
  function initTelegram() {
    if (!tg) return;
    try {
      tg.ready();
      tg.expand();
    } catch {}
    const viewport = () => {
      if (tg.viewportStableHeight > 0)
        document.documentElement.style.setProperty(
          "--tg-viewport-stable-height",
          tg.viewportStableHeight + "px",
        );
      for (const side of ["top", "bottom", "left", "right"]) {
        const inset =
          (tg.safeAreaInset?.[side] || 0) +
          (tg.contentSafeAreaInset?.[side] || 0);
        document.documentElement.style.setProperty(
          "--safe-" + side,
          inset + "px",
        );
      }
    };
    viewport();
    try {
      tg.onEvent("viewportChanged", viewport);
      if (tg.isVersionAtLeast?.("8.0")) {
        tg.onEvent("safeAreaChanged", viewport);
        tg.onEvent("contentSafeAreaChanged", viewport);
      }
    } catch {}
  }
  function translate() {
    document.documentElement.lang = state.lang;
    document
      .querySelectorAll("[data-i18n]")
      .forEach((el) => (el.textContent = t(el.dataset.i18n)));
    document
      .querySelectorAll("[data-label]")
      .forEach((el) => el.setAttribute("aria-label", t(el.dataset.label)));
    document
      .querySelectorAll("[data-lang]")
      .forEach((el) =>
        el.setAttribute("aria-pressed", String(el.dataset.lang === state.lang)),
      );
    $("modes").setAttribute("aria-label", t("modes"));
  }
  function renderModes() {
    const nav = $("modes");
    nav.replaceChildren();
    for (const [key, mode] of Object.entries(modes)) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "mode-button";
      b.dataset.mode = key;
      b.setAttribute("aria-pressed", String(state.mode === key));
      b.innerHTML = svg(mode.icon);
      const text = document.createElement("span");
      text.textContent = t(key);
      b.append(text);
      b.addEventListener("click", () => {
        state.mode = key;
        editing = false;
        persist();
        render();
        haptic();
      });
      nav.append(b);
    }
  }
  function setValue(id, value) {
    state.drafts[state.mode].values[id] = value;
    persist();
  }
  function renderField(f) {
    const container = document.createElement("div");
    container.className =
      "field" +
      (["choices", "range", "textarea"].includes(f.type) ? " wide" : "") +
      (f.type === "select" && !["duration", "ratio"].includes(f.id)
        ? " select-field"
        : "");
    const id = "field-" + f.id;
    const label = document.createElement("label");
    label.htmlFor = id;
    label.textContent = t(f.label) + (f.required ? " *" : "");
    container.append(label);
    const value = state.drafts[state.mode].values[f.id];
    let input;
    if (f.type === "choices") {
      label.removeAttribute("for");
      label.id = id + "-label";
      input = document.createElement("div");
      input.className = "choice-grid";
      input.setAttribute("role", "group");
      input.setAttribute("aria-labelledby", label.id);
      for (const o of f.options) {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "choice";
        b.textContent = t(o.label);
        b.setAttribute("aria-pressed", String(o.id === value));
        b.addEventListener("click", () => {
          setValue(f.id, o.id);
          input
            .querySelectorAll("button")
            .forEach((btn) =>
              btn.setAttribute("aria-pressed", String(btn === b)),
            );
          haptic();
        });
        input.append(b);
      }
    } else if (f.type === "select") {
      input = document.createElement("select");
      for (const o of f.options) {
        const opt = document.createElement("option");
        opt.value = o.id;
        opt.textContent = t(o.label);
        input.append(opt);
      }
      input.value = value;
      input.addEventListener("change", () => {
        setValue(f.id, input.value);
        haptic();
      });
    } else {
      input = document.createElement(
        f.type === "textarea" ? "textarea" : "input",
      );
      if (f.type === "range") {
        input.type = "range";
        input.min = "1";
        input.max = "10";
        input.step = "1";
        label.className = "range-label";
        const counter = document.createElement("output");
        counter.value = value + " / 10";
        label.append(counter);
        input.addEventListener(
          "input",
          () => (counter.value = input.value + " / 10"),
        );
      } else {
        input.maxLength = 6000;
        if (f.type !== "textarea") input.type = "text";
        input.placeholder = f.required
          ? t(state.mode + ".example.0")
          : f.id === "role"
            ? t("rolePlaceholder")
            : t("optional");
        if (f.required) input.required = true;
        if (f.type === "textarea") input.rows = f.required ? 4 : 2;
      }
      input.value = value;
      input.addEventListener("input", () => {
        input.setCustomValidity("");
        setValue(f.id, input.value);
      });
    }
    input.id = id;
    container.append(input);
    return container;
  }
  function renderFields() {
    const mode = modes[state.mode];
    $("mode-title").textContent = t(state.mode + "Title");
    $("mode-hint").textContent = t(state.mode + "Hint");
    $("brief-fields").replaceChildren();
    $("settings-fields").replaceChildren();
    for (const f of mode.fields) {
      const brief = [
        "scene",
        "action",
        "brief",
        "topic",
        "role",
        "goal",
        "context",
        "constraints",
      ].includes(f.id);
      $(brief ? "brief-fields" : "settings-fields").append(renderField(f));
    }
    const target = $("target");
    target.replaceChildren();
    for (const value of [
      ...(state.mode === "video" ? targetOptions.video : targetOptions.other),
      "Any AI",
    ]) {
      const opt = document.createElement("option");
      opt.value = value;
      opt.textContent = value === "Any AI" ? t("modelNeutral") : value;
      target.append(opt);
    }
    target.value = state.drafts[state.mode].target;
  }
  function renderResult() {
    const result = state.drafts[state.mode].result;
    $("empty-result").hidden = !!result;
    $("result-content").hidden = !result;
    if (!result) return;
    $("output").value = result.text;
    $("output").readOnly = !editing;
    $("edit").querySelector("[data-i18n]").textContent = t(
      editing ? "done" : "edit",
    );
    $("result-badge").textContent =
      t(state.mode) +
      " · " +
      (result.target === "Any AI" ? t("modelNeutral") : result.target) +
      " · " +
      result.lang.toUpperCase();
    $("char-count").textContent =
      result.text.length.toLocaleString(state.lang) + " " + t("chars");
    $("copy").disabled = !result.text.trim();
    $("improve").disabled = aiBusy || !result.text.trim();
  }
  function clearResult(id) {
    for (const d of Object.values(state.drafts))
      if (d.result?.id === id) d.result = null;
  }
  function renderHistory() {
    const list = $("history-list");
    list.replaceChildren();
    $("history-count").textContent = state.history.length;
    $("clear-history").disabled = !state.history.length;
    $("history-search").placeholder = t("searchPrompts");
    $("history-search").setAttribute("aria-label", t("searchPrompts"));
    const query = $("history-search").value.trim().toLocaleLowerCase(state.lang);
    const items = (favoritesOnly ? Object.values(state.favorites).sort((a, b) => b.date - a.date) : state.history)
      .filter((item) => [item.text, item.target, t(item.mode)].join(" ").toLocaleLowerCase(state.lang).includes(query));
    if (!items.length) {
      const p = document.createElement("p");
      p.className = "history-empty";
      p.textContent = t(query || favoritesOnly ? "noMatches" : "emptyHistory");
      list.append(p);
      return;
    }
    for (const item of items) {
      const row = document.createElement("div");
      row.className = "history-item";
      const favorite = document.createElement("button");
      favorite.type = "button";
      favorite.className = "favorite-button";
      const saved = Object.hasOwn(state.favorites, item.id);
      favorite.textContent = saved ? "♥" : "♡";
      favorite.setAttribute("aria-pressed", String(saved));
      favorite.setAttribute("aria-label", t(saved ? "removeFavorite" : "saveFavorite"));
      favorite.addEventListener("click", () => {
        if (saved) delete state.favorites[item.id];
        else Object.defineProperty(state.favorites, item.id, { value: { ...item }, writable: true, enumerable: true, configurable: true });
        persist();
        renderHistory();
        haptic();
      });
      const open = document.createElement("button");
      open.type = "button";
      open.className = "history-open";
      const title = document.createElement("strong");
      const briefLabel =
        dictionary[modes[item.mode].fields.find((f) => f.required).label][
          item.lang
        ] + ": ";
      title.textContent =
        item.text
          .split("\n")
          .find((line) => line.startsWith(briefLabel))
          ?.slice(briefLabel.length) ||
        item.text.split("\n").find((line) => line.trim()) ||
        t("result");
      const meta = document.createElement("small");
      meta.textContent =
        t(item.mode) +
        " · " +
        new Date(item.date).toLocaleString(state.lang, {
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        });
      open.append(title, meta);
      open.addEventListener("click", () => {
        state.mode = item.mode;
        state.drafts[item.mode].result = {
          id: item.id,
          text: item.text,
          lang: item.lang,
          target: item.target,
        };
        editing = false;
        persist();
        render();
        scrollResult();
      });
      const del = document.createElement("button");
      del.type = "button";
      del.className = "icon-button";
      del.setAttribute(
        "aria-label",
        t("delete") + ": " + title.textContent.slice(0, 65),
      );
      del.innerHTML = svg("trash");
      del.addEventListener("click", () => {
        const index = state.history.findIndex((x) => x.id === item.id);
        state.history = state.history.filter((x) => x.id !== item.id);
        clearResult(item.id);
        persist();
        renderResult();
        renderHistory();
        const next =
          $("history-list").querySelectorAll(".icon-button")[
            Math.min(index, state.history.length - 1)
          ];
        (next || $("generate")).focus({ preventScroll: true });
        toast(t("deleted"));
      });
      row.append(open, favorite);
      if (!favoritesOnly) row.append(del);
      list.append(row);
    }
  }
  function render() {
    translate();
    renderModes();
    renderFields();
    renderResult();
    renderHistory();
    if (!reduceMotion())
      document.querySelectorAll(".mode-panel").forEach((panel, i) => {
        panel.getAnimations().forEach((a) => a.cancel());
        panel.animate(
          [
            { opacity: 0, transform: "translateY(6px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
          { duration: 220, delay: i * 35 },
        );
      });
  }
  const value = (id) => {
    const f = modes[state.mode].fields.find((x) => x.id === id),
      v = state.drafts[state.mode].values[id];
    return f?.options
      ? t(f.options.find((o) => o.id === v).label)
      : (v || "").trim();
  };
  const line = (id) => t("field." + id) + ": " + value(id);
  const lines = (ids) =>
    ids
      .filter((id) => value(id))
      .map(line)
      .join("\n");
  const localized = (ru, en) => (state.lang === "ru" ? ru : en);
  // Templates produce instructions, never simulated answers or model command flags.
  const templates = {
    video: () => {
      const seconds = Number(value("duration").match(/\d+/)?.[0] || 5),
        a = +(seconds / 3).toFixed(1),
        b = +((seconds * 2) / 3).toFixed(1);
      const scene = value("scene"),
        action =
          value("action") ||
          localized(
            "Главный объект естественно взаимодействует с окружением.",
            "The main subject interacts naturally with the environment.",
          );
      return [
        localized(
          "Создай видео по следующему режиссёрскому описанию.",
          "Create a video based on the following director’s brief.",
        ),
        lines([
          "scene",
          "action",
          "framing",
          "optics",
          "movement",
          "lighting",
          "atmosphere",
          "duration",
          "ratio",
        ]),
        line("motion") +
          "/10 — " +
          localized(
            "желаемая выразительность движения.",
            "desired movement intensity.",
          ),
        `${t("stage1")} · 0–${a} ${localized("с", "s")}\n${localized("Покажи исходную сцену:", "Establish the scene:")} ${scene} ${localized("Обозначь расположение главного объекта и окружение.", "Show the main subject’s position and surroundings.")}`,
        `${t("stage2")} · ${a}–${b} ${localized("с", "s")}\n${action} ${localized("Развивай действие, используя движение камеры:", "Develop the action using this camera movement:")} ${value("movement")}.`,
        `${t("stage3")} · ${b}–${seconds} ${localized("с", "s")}\n${localized("Заверши действие в рамках описанной сцены, удержи финальный акцент на главном объекте. Сохрани его внешность, пространственную связность и непрерывность освещения.", "Resolve the action within the described scene and hold the final emphasis on the main subject. Preserve appearance, spatial coherence and lighting continuity.")}`,
        `${t("negative")}\n${value("negative") || localized("Размытые детали, искажённая анатомия, мерцание, скачки формы, водяные знаки, нежелательный текст.", "Blurry details, distorted anatomy, flicker, morphing artifacts, watermarks, unwanted text.")}`,
        t("naturalSettings"),
      ].join("\n\n");
    },
    games: () => {
      const tasks = {
        idea: pair(
          "Предложи 3 разные концепции. Для каждой опиши игровой цикл, отличительную черту и минимальный прототип.",
          "Propose 3 distinct concepts. Describe each core loop, distinguishing feature and minimum prototype.",
        ),
        mechanics: pair(
          "Разработай механику: правила, действия игрока, обратная связь, прогрессия, баланс и способ проверить её прототипом.",
          "Design a mechanic: rules, player actions, feedback, progression, balance and a prototype test.",
        ),
        characters: pair(
          "Создай персонажей: роль в игре, мотивация, конфликт, способности, ограничения и визуальное описание.",
          "Create characters: game role, motivation, conflict, abilities, limitations and visual description.",
        ),
        world: pair(
          "Разработай мир: основные правила, локации, фракции, история, ресурсы и связь окружения с механиками.",
          "Develop a world: core rules, locations, factions, history, resources and links between the environment and mechanics.",
        ),
        quest: pair(
          "Напиши квест: завязка, цели, этапы, выборы игрока, последствия, награды и условия успеха или провала.",
          "Write a quest: hook, objectives, stages, player choices, consequences, rewards and success or failure conditions.",
        ),
        dialogue: pair(
          "Создай ветвящийся диалог: участники, мотивации, реплики, варианты выбора, условия переходов и влияние на игру.",
          "Create a branching dialogue: participants, motives, lines, choices, transition conditions and effects on the game.",
        ),
        development: pair(
          "Подготовь задание разработчику: требования, границы задачи, компоненты, данные, этапы, критерии приёмки и тестовые сценарии. API и зависимости проверяй по документации; укажи допущения.",
          "Prepare a development brief: requirements, scope, components, data, milestones, acceptance criteria and test cases. Verify APIs and dependencies against documentation; state assumptions.",
        ),
      };
      return [
        localized(
          "Выступи в роли геймдизайнера и разработчика игр.",
          "Act as a game designer and developer.",
        ),
        lines([
          "brief",
          "kind",
          "genre",
          "platform",
          "style",
          "engine",
          "scope",
        ]),
        tasks[state.drafts.games.values.kind][state.lang],
        localized(
          "Соразмерь решение с платформой, движком и масштабом проекта. Отдели обязательный минимум от возможных улучшений. Укажи риски и следующий практический шаг.",
          "Fit the solution to the platform, engine and project scope. Separate the essential minimum from optional improvements. Identify risks and the next practical step.",
        ),
        t("noInvent"),
      ].join("\n\n");
    },
    chat: () => {
      const tasks = {
        discussion: pair(
          "Предложи несколько точек зрения и начни обсуждение с одного открытого вопроса.",
          "Offer several perspectives and begin the discussion with one open question.",
        ),
        brainstorm: pair(
          "Предложи 8 разных идей, затем помоги выбрать перспективные по понятным критериям.",
          "Suggest 8 varied ideas, then help select promising ones using clear criteria.",
        ),
        explain: pair(
          "Объясни тему от простого к сложному, приведи понятный пример и проверь понимание одним вопросом.",
          "Explain the topic from simple to complex, give an accessible example and check understanding with one question.",
        ),
        roleplay: pair(
          "Предложи ситуацию для ролевого диалога и произнеси первую реплику своей роли. Не отвечай за меня; дождись моего ответа.",
          "Propose a role-play scenario and give your role’s first line. Do not speak for me; wait for my response.",
        ),
      };
      return [
        localized(
          "Проведи со мной диалог на следующую тему.",
          "Have a conversation with me about the following topic.",
        ),
        lines(["topic", "role", "kindChat", "tone", "detail"]),
        tasks[state.drafts.chat.values.kindChat][state.lang],
        localized(
          "Учитывай мой контекст, сохраняй выбранные тон и подробность.",
          "Respect my context and the chosen tone and detail level.",
        ),
        t("noInvent"),
      ].join("\n\n");
    },
    universal: () => {
      const tasks = {
        writing: pair(
          "Учитывай аудиторию и цель текста. Используй ясный язык и логичную структуру.",
          "Consider the audience and purpose. Use clear language and a logical structure.",
        ),
        learning: pair(
          "Учти начальный уровень. Добавь практику, критерии понимания и порядок изучения.",
          "Account for the starting level. Include practice, understanding checks and a learning sequence.",
        ),
        coding: pair(
          "Предложи решение для указанного окружения. Объясни зависимости, обработку ошибок и способ проверки. Не выдумывай API.",
          "Provide a solution for the stated environment. Explain dependencies, error handling and validation. Do not invent APIs.",
        ),
        other: pair(
          "Предложи применимый результат, явно обозначь допущения и способ проверить качество.",
          "Provide an actionable result, explicitly state assumptions and how to assess quality.",
        ),
      };
      return [
        localized(
          "Выполни задачу по следующему брифу.",
          "Complete the task using the following brief.",
        ),
        lines(["goal", "context", "constraints", "taskType", "format"]),
        tasks[state.drafts.universal.values.taskType][state.lang],
        t("noInvent"),
      ].join("\n\n");
    },
  };
  function scrollResult() {
    $("result-panel").scrollIntoView({
      behavior: reduceMotion() ? "auto" : "smooth",
      block: "start",
    });
  }
  function generate(event) {
    event.preventDefault();
    const required = modes[state.mode].fields.find((f) => f.required),
      input = $("field-" + required.id);
    if (!value(required.id)) {
      input.setCustomValidity(t("required"));
      input.reportValidity();
      input.focus();
      toast(t("required"));
      return;
    }
    const draft = state.drafts[state.mode];
    const text = [
      templates[state.mode](),
      state.style === "pro"
        ? localized("Структурируй результат. Укажи критерии качества, допущения и способ проверки.", "Structure the result. State quality criteria, assumptions, and how to verify it.")
        : state.style === "creative"
          ? localized("Предложи неожиданный, но уместный подход. Добавь выразительные детали в рамках заданных ограничений.", "Take an unexpected but relevant approach. Add distinctive details within the stated constraints.")
          : "",
      t("model") +
        ": " +
        (draft.target === "Any AI" ? t("modelNeutral") : draft.target),
      t("responseLanguage"),
    ].filter(Boolean).join("\n\n");
    const item = {
      id:
        globalThis.crypto?.randomUUID?.() ||
        Date.now() + "-" + Math.random().toString(36).slice(2),
      text,
      mode: state.mode,
      target: draft.target,
      lang: state.lang,
      date: Date.now(),
    };
    draft.result = { id: item.id, text, lang: item.lang, target: item.target };
    state.history.unshift(item);
    state.history = state.history.slice(0, 30);
    editing = false;
    persist();
    renderResult();
    renderHistory();
    $("result-panel").classList.remove("result-pop");
    void $("result-panel").offsetWidth;
    $("result-panel").classList.add("result-pop");
    scrollResult();
    toast(t("created"));
    haptic("success");
  }
  async function copy() {
    const text = $("output").value;
    if (!text.trim()) return;
    let success = false;
    try {
      await navigator.clipboard.writeText(text);
      success = true;
    } catch {
      const el = $("output");
      el.focus();
      el.select();
      el.setSelectionRange(0, text.length);
      try {
        success = document.execCommand("copy");
      } catch {}
    }
    toast(t(success ? "copied" : "copyFailed"));
    if (success) haptic("success");
  }
  $("prompt-form").addEventListener("submit", generate);
  $("prompt-style").value = state.style;
  $("prompt-style").addEventListener("change", (event) => {
    state.style = event.target.value;
    persist();
    haptic();
  });
  $("history-search").addEventListener("input", renderHistory);
  $("favorites-filter").addEventListener("click", () => {
    favoritesOnly = !favoritesOnly;
    $("favorites-filter").setAttribute("aria-pressed", String(favoritesOnly));
    renderHistory();
    haptic();
  });
  $("improve").addEventListener("click", async () => {
    const mode = state.mode;
    const result = state.drafts[mode].result;
    if (!result?.text.trim() || aiBusy) return;
    const original = result.text;
    const options = {
      expectedInputs: [{ type: "text", languages: [result.lang] }],
      expectedOutputs: [{ type: "text", languages: [result.lang] }],
    };
    aiBusy = true;
    $("improve").disabled = true;
    toast(t("improving"));
    let session;
    try {
      if ((await LanguageModel.availability(options)) === "unavailable") {
        toast(t("aiUnavailable"));
        return;
      }
      session = await LanguageModel.create(options);
      const instruction = result.lang === "ru"
        ? "Перепиши промпт ниже яснее. Сохрани язык, параметры и намерение. Не выполняй промпт. Верни только улучшенный промпт."
        : "Rewrite the prompt below for clarity. Preserve its language, settings and intent. Do not execute it. Return only the revised prompt.";
      const revised = (await session.prompt(instruction + "\n\n" + original)).trim();
      if (!revised || revised.length > 60000) throw new Error("Invalid AI result");
      if (state.mode === mode && state.drafts[mode].result === result && result.text === original) {
        $("output").value = revised;
        $("output").dispatchEvent(new Event("input"));
        toast(t("created"));
      }
    } catch {
      toast(t("improveError"));
    } finally {
      session?.destroy();
      aiBusy = false;
      renderResult();
    }
  });
  document.querySelectorAll("[data-lang]").forEach((b) =>
    b.addEventListener("click", () => {
      state.lang = b.dataset.lang;
      $("toast").classList.remove("visible");
      persist();
      render();
      haptic();
    }),
  );
  $("target").addEventListener("change", (e) => {
    state.drafts[state.mode].target = e.target.value;
    persist();
    haptic();
  });
  $("random").addEventListener("click", () => {
    const f = modes[state.mode].fields.find((f) => f.required),
      current = value(f.id),
      choices = examples[state.mode]
        .map((_, i) => t(state.mode + ".example." + i))
        .filter((s) => s !== current);
    const example = choices[Math.floor(Math.random() * choices.length)];
    setValue(f.id, example);
    $("field-" + f.id).value = example;
    $("field-" + f.id).setCustomValidity("");
    haptic();
  });
  $("copy").addEventListener("click", copy);
  $("edit").addEventListener("click", () => {
    editing = !editing;
    renderResult();
    if (editing) $("output").focus();
    haptic();
  });
  $("output").addEventListener("input", () => {
    const r = state.drafts[state.mode].result;
    if (!r) return;
    r.text = $("output").value;
    const existing = state.history.find((i) => i.id === r.id);
    if (existing) existing.text = r.text;
    else {
      state.history.unshift({ ...r, mode: state.mode, date: Date.now() });
      state.history = state.history.slice(0, 30);
    }
    if (Object.hasOwn(state.favorites, r.id)) state.favorites[r.id].text = r.text;
    $("improve").disabled = aiBusy || !r.text.trim();
    persist();
    $("char-count").textContent =
      r.text.length.toLocaleString(state.lang) + " " + t("chars");
    $("copy").disabled = !r.text.trim();
    renderHistory();
  });
  $("stars-open").addEventListener("click", () => {
    $("stars-dialog").showModal();
    haptic();
  });
  $("stars-close").addEventListener("click", () => $("stars-dialog").close());
  $("clear-history").addEventListener("click", () =>
    $("confirm-dialog").showModal(),
  );
  $("cancel-clear").addEventListener("click", () =>
    $("confirm-dialog").close(),
  );
  $("confirm-clear").addEventListener("click", () => {
    state.history = [];
    Object.values(state.drafts).forEach((d) => (d.result = null));
    persist();
    renderResult();
    renderHistory();
    $("confirm-dialog").close();
    $("generate").focus({ preventScroll: true });
    toast(t("cleared"));
  });
  for (const dialog of document.querySelectorAll("dialog"))
    dialog.addEventListener("click", (e) => {
      if (e.target !== dialog) return;
      const r = dialog.getBoundingClientRect();
      if (
        e.clientX < r.left ||
        e.clientX > r.right ||
        e.clientY < r.top ||
        e.clientY > r.bottom
      )
        dialog.close();
    });
  document
    .querySelectorAll("[data-icon]")
    .forEach((el) => (el.innerHTML = svg(el.dataset.icon)));
  if (
    !CSS.supports("backdrop-filter", "blur(1px)") &&
    !CSS.supports("-webkit-backdrop-filter", "blur(1px)")
  )
    document.documentElement.classList.add("simple-glass");
  function boot() {
    $("improve").hidden = !globalThis.LanguageModel?.availability;
    tg = window.Telegram?.WebApp;
    initTelegram();
    render();
    if (storageFailed) toast(t("storageError"));
  }
  if (document.readyState === "loading")
    window.addEventListener("DOMContentLoaded", boot, { once: true });
  else boot();
})();
