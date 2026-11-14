# Director Studio

## Русский

**Director Studio** — одностраничное HTML-приложение для Telegram Mini App. Оно помогает составлять готовые промпты для нейросетей в четырёх режимах: **Видео**, **Игры**, **Общение** и **Универсальный**.

Приложение работает прямо в браузере Telegram: поддерживает русский и английский языки, сохраняет черновики и историю результатов локально на устройстве, позволяет редактировать и копировать готовый текст. Для видео доступны настройки сцены, действия, ракурса, оптики, движения камеры, света, атмосферы, длительности, формата кадра, трёхэтапного сценария и negative prompt.

`index.html` — самостоятельный файл приложения. Его можно разместить на HTTPS-хостинге и указать URL в настройках Telegram-бота как Mini App.

Приложение создаёт текстовые промпты и может улучшить их через встроенную модель браузера. Генерация медиа выполняется в выбранном сервисе. Интерфейс Telegram Stars работает в демонстрационном режиме.

## English

**Director Studio** is a single-file HTML application for a Telegram Mini App. It helps users create ready-to-use AI prompts in four modes: **Video**, **Games**, **Conversation**, and **Universal**.

The app runs directly inside Telegram’s browser. It supports Russian and English, stores drafts and result history locally on the device, and lets users edit and copy generated prompts. Video mode includes settings for scene, action, framing, optics, camera movement, lighting, atmosphere, duration, aspect ratio, a three-stage sequence, and a negative prompt.

`index.html` is a standalone application file. Host it over HTTPS and set its URL as the Telegram bot’s Mini App URL.

The app creates prompt text and can refine it with the browser's built-in model. Media generation happens in the selected service. Telegram Stars runs in demo mode.

## Готовый файл

**`dist/index.html`** — самостоятельная версия с включёнными CSS и JavaScript. Разместите этот файл на HTTPS-хостинге как `index.html` и укажите его адрес в настройках Mini App / кнопке бота. Развёртывание в действующем боте не выполнялось.

Для обычного локального просмотра достаточно открыть `dist/index.html` в браузере. Для стабильной работы буфера обмена и хранилища рекомендуется HTTP localhost или HTTPS. Telegram SDK загружается с `telegram.org`; отсутствие SDK не блокирует генератор.

## Что изменено

- Liquid Glass: полупрозрачные панели, градиентный фон, единые SVG-иконки, крупные мобильные элементы управления. Без внешнего CSS-фреймворка и шрифтов.
- Четыре режима: видео, игры, общение, универсальный. У каждого отдельные настройки, примеры, черновик, выбранный сервис и результат.
- Видео: сохранены 20 вариантов ракурса, оптики, движения, света и атмосферы, а также интенсивность движения. Добавлены действие, длительность, соотношение сторон, три этапа сцены и редактируемые исключения (negative prompt).
- Игры: 7 отдельных типов задания — идея, механика, персонажи, мир, квест, диалог, разработка. Учитываются жанр, платформа, стиль, движок и масштаб.
- Общение: обсуждение, мозговой штурм, объяснение и ролевой диалог; роль, тон и подробность. Приложение создаёт инструкции, а не изображает ответ нейросети.
- Универсальный: цель, контекст, ограничения, вид задачи и формат результата.
- Редактирование, копирование с запасным способом и честным сообщением об отказе; локальная история до 30 результатов с открытием, удалением и подтверждением полной очистки.
- RU/EN: интерфейс, настройки, примеры и шаблоны. Смена языка не переводит пользовательский ввод и уже сохранённые результаты; у результата указан язык создания.
- Анимации появления, выбора и нажатия, движение фоновых бликов; `prefers-reduced-motion`; запасной непрозрачный вид без `backdrop-filter`.
- Telegram: `ready`, `expand`, изменения высоты окна и безопасных отступов, поддерживаемый тактильный отклик.
- Stars явно обозначены как демонстрация: нет локального «баланса», фиктивного пополнения или списания за генерацию. Пакеты 25 / 100 XTR показаны как недоступные.

Выбранные модели задаются по семействам без обещаний поддержки конкретной версии. Все пожелания описываются обычным текстом; выдуманные флаги моделей удалены. Сохранённые Flux и Midjourney можно использовать для визуального брифа/раскадровки — наличие видеогенерации у сервиса приложение не утверждает.

## Структура и запуск

- `source/index.html`, `styles.css`, `app.js` — исходники.
- `build.cjs` — сборка единственного HTML без сторонних зависимостей.
- `index.html` и `dist/index.html` — результаты сборки.
- `tests/app.test.cjs` — интеграционные проверки в браузере.
- Проверки создают снимки `tests/mobile.png` и `tests/desktop.png`.

Сборка: `node build.cjs`.

Локальный сервер: `python -m http.server 8000 --bind 127.0.0.1`. Откройте `http://127.0.0.1:8000`.

Проверки: `node tests/app.test.cjs`. Нужны Playwright и установленный Microsoft Edge. В среде Codex используется комплектный Playwright; вне её установите `playwright` как dev dependency. Тест сам запускает временный локальный HTTP-сервер и закрывает его.

Единое состояние хранится под ключом `director-studio.v5` в localStorage. Данные проверяются при чтении, ошибка хранилища не останавливает приложение. Очистка истории удаляет также открытые результаты, но сохраняет введённые поля. Ввод не отправляется на сервер и не интерпретируется как HTML. При недоступном хранилище данные живут до закрытия страницы.

## Проверено

Автотесты пройдены в headless Microsoft Edge (Chromium):

- Четыре режима, семь игровых задач, RU/EN, содержимое шаблонов и настройки видео.
- Валидация пустого ввода, независимые черновики и редактирование с восстановлением после перезагрузки.
- Настоящий буфер обмена и отказ обоих способов копирования с предложением скопировать вручную.
- История: лимит 30, открытие, одиночное удаление, отмена и подтверждение очистки.
- Ширины 320, 360, 390, 430, 768, 1280 px: нет горизонтального переполнения, включая длинную строку без пробелов и HTML-подобный ввод.
- Уменьшение движения, принудительный режим без размытия, недоступные localStorage и Telegram SDK.
- Инициализация Telegram, viewport/safe area и haptics через тестовый мост SDK.
- Отдельно проверена собранная автономная версия. Необработанных ошибок JavaScript в проверенных сценариях нет.

Мобильная и настольная вёрстка дополнительно просмотрены по снимкам экрана. Физические iOS/Android-устройства и реальный WebView Telegram не проверены: нет адреса опубликованного Mini App и настроенного бота в этом проекте.

## Что требует внешнего подключения

1. HTTPS-хостинг и ссылка Mini App в боте. [Telegram Mini Apps](https://core.telegram.org/bots/webapps).
2. Для реального диалога/медиа — серверный API выбранного провайдера. Секреты хранятся только на сервере; в клиенте ключей нет.
3. Для настоящих Stars — сервер бота, счёт в XTR, обработка `pre_checkout_query`, подтверждённого `successful_payment`, идемпотентное начисление и проверка Telegram initData. Клиентское закрытие invoice не является доказательством покупки. [Telegram Stars payments](https://core.telegram.org/bots/payments-stars).

## Обновление Mini App

Быстрый стиль сохраняет базовый шаблон. Профессиональный добавляет критерии качества и проверки, креативный предлагает поискать неожиданный подход в рамках заданных ограничений. Поиск фильтрует историю и избранное по тексту, режиму и модели. Избранное хранится отдельно от истории.

Кнопка «Улучшить с ИИ» использует встроенную модель браузера через [Prompt API](https://developer.chrome.com/docs/ai/prompt-api). Доступность зависит от браузера, устройства и языка, включая Telegram WebView. Для статического приложения не нужны переменные окружения, API-ключи или сервер.

## Mini App update

Quick keeps the original template. Professional adds quality and verification criteria. Creative asks for an unexpected approach within the brief. Search covers prompt text, mode and model. Favorites are stored separately from history.

The optional AI rewrite uses the browser's built-in model through the [Prompt API](https://developer.chrome.com/docs/ai/prompt-api). Availability depends on the browser, device and language. The static app requires no environment variables, keys or backend. Open the standalone HTML in a browser or host it over HTTPS for Telegram. Run `node build.cjs` from the source directory to rebuild it.
