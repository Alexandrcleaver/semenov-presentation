# HTML-презентация Семёнова — модульные исходники

**Главный принцип: окончательный результат — один файл `dist/presentation.html`.**

Это **первый, безопасный этап миграции** рабочей презентации. Исходный HTML разделён на
39 слайдов, 42 последовательных CSS-блока, 10 JavaScript-блоков и бинарные ассеты.
Порядок компонентов, исходный код, медиа и исторические CSS-переопределения не изменены.

## Сборка

Требуется установленный Node.js, никаких внешних библиотек или `npm install`.

```powershell
npm run build
# Проверить абсолютную идентичность загруженному эталону:
npm run verify:reference
# Найти файлы, относящиеся к конкретному слайду:
npm run locate -- 7
```

Откройте **`dist/presentation.html`** в браузере. Это единственный файл для передачи
и запуска выступления, интернет и сервер для ресурсов не нужны.

## Результаты анализа оригинала

- 39 `<section>` в **порядке документа**, а не в порядке номеров их `id`.
- 42 `<style>`: порядок загрузки критичен из-за каскада CSS и накопленных исправлений.
- 10 `<script>`: первый скрипт — основной контроллер навигации и стадий анимации.
- 83 вхождения Base64-ресурсов (файлы сохранены бинарно, повторы дедуплицированы).
- 3 видео (2 MP4, 1 WebM), 4 встроенных TTF-шрифта, изображения WEBP/PNG/JPEG/SVG.
- 2 iframe с атрибутами `srcdoc`, работа навигации включает `postMessage`.
- Физический порядок `<section>` и фактическая навигация отличаются: слайды 4 и 5 показаны в обратном порядке относительно секций документа.
- Оригинал: 16,816,530 байт, SHA-256 `d3e1a606a834beca8a4c6a172b4f71049324be8647ed406e5e4a8111a726c648`.

## Из чего состоит проект

- `src/slides/*.html` — отдельный HTML для каждого слайда.
- `src/styles/*.css` — CSS блоки в том же исходном порядке, что и в оригинале.
- `src/scripts/*.js` — исходные скрипты без изменений.
- `src/assets/*` — вынесенные бинарные изображения, видео и шрифты.
- `src/shell.html` — остальная разметка и места вставки модулей.
- `src/parts.json` — строгий порядок вставки исходников.
- `src/assets.json` — места Base64-встраивания и SHA-256 медиафайлов.
- `src/slides.json` — физический порядок секций HTML.
- `src/deck_order.json` — реальная последовательность слайдов в интерфейсе показа (4/5 поменяны местами).
- `scripts/build.mjs` — сборщик автономного HTML (без зависимостей).
- `dist/presentation.html` — собранная автономная презентация.

## Правила при внесении правок

1. **Не редактируйте `dist/presentation.html`**: изменения пропадут при сборке.
2. Для правки слайда найдите его **номер в интерфейсе** в `src/deck_order.json` или запустите `npm run locate -- N`.
3. Меняйте только HTML этого слайда и соответствующий CSS / JS.
4. **Не сортируйте** `src/parts.json`, `src/slides.json` или `src/deck_order.json` по `id`.
5. **Не склеивайте и не чистите CSS** до завершения визуальной регрессии.
6. Не меняйте текущие `id`, классы, `srcdoc` и глобальную JS-навигацию без проверки.
7. Сборка (`npm run build`) обязательна после правок.
8. `npm run verify:reference` применим **только до первой осмысленной правки**:
   после неё несовпадение SHA-256 ожидаемо.

## Статус миграции

**Выполнено:** без потерь разделены исходники и ассеты; первый билд побайтно совпадает
с загруженным HTML (проверить командой `npm run verify:reference`).

**Следующий этап:** проанализировать межслайдовые зависимости CSS, сформировать
удобные тематические стили и независимые обработчики жизненного цикла слайдов.
Это уже **рефакторинг**, и он требует проверок в браузере по всем 39 слайдам,
включая анимации, видео, переходы и возвраты назад.

## Слайды — физический порядок (для номера показа см. `src/deck_order.json`)

| № | DOM ID | HTML-файл |
|---:|---|---|
| 1 | `cover` | `src/slides/01-cover.html` |
| 2 | `figmaSlide2` | `src/slides/02-figmaSlide2.html` |
| 3 | `figmaSlide3Extras` | `src/slides/03-figmaSlide3Extras.html` |
| 4 | `figmaSlide4` | `src/slides/04-figmaSlide4.html` |
| 5 | `figmaSlide5` | `src/slides/05-figmaSlide5.html` |
| 6 | `figmaSlide6` | `src/slides/06-figmaSlide6.html` |
| 7 | `architectureRagSlide` | `src/slides/07-architectureRagSlide.html` |
| 8 | `aistEvolutionSlide` | `src/slides/08-aistEvolutionSlide.html` |
| 9 | `figmaSlide7` | `src/slides/09-figmaSlide7.html` |
| 10 | `pdfSlide8` | `src/slides/10-pdfSlide8.html` |
| 11 | `pdfSlide27` | `src/slides/11-pdfSlide27.html` |
| 12 | `pdfSlide9` | `src/slides/12-pdfSlide9.html` |
| 13 | `pdfSlide29` | `src/slides/13-pdfSlide29.html` |
| 14 | `pdfSlide10` | `src/slides/14-pdfSlide10.html` |
| 15 | `pdfSlide11` | `src/slides/15-pdfSlide11.html` |
| 16 | `pdfSlide12` | `src/slides/16-pdfSlide12.html` |
| 17 | `pdfSlide30` | `src/slides/17-pdfSlide30.html` |
| 18 | `pdfSlide13` | `src/slides/18-pdfSlide13.html` |
| 19 | `pdfSlide31` | `src/slides/19-pdfSlide31.html` |
| 20 | `pdfSlide32` | `src/slides/20-pdfSlide32.html` |
| 21 | `pdfSlide14` | `src/slides/21-pdfSlide14.html` |
| 22 | `pdfSlide15` | `src/slides/22-pdfSlide15.html` |
| 23 | `pdfSlide33` | `src/slides/23-pdfSlide33.html` |
| 24 | `pdfSlide16` | `src/slides/24-pdfSlide16.html` |
| 25 | `pdfSlide34` | `src/slides/25-pdfSlide34.html` |
| 26 | `pdfSlide17` | `src/slides/26-pdfSlide17.html` |
| 27 | `pdfSlide35` | `src/slides/27-pdfSlide35.html` |
| 28 | `pdfSlide18` | `src/slides/28-pdfSlide18.html` |
| 29 | `pdfSlide19` | `src/slides/29-pdfSlide19.html` |
| 30 | `pdfSlide36` | `src/slides/30-pdfSlide36.html` |
| 31 | `pdfSlide20` | `src/slides/31-pdfSlide20.html` |
| 32 | `pdfSlide37` | `src/slides/32-pdfSlide37.html` |
| 33 | `pdfSlide21` | `src/slides/33-pdfSlide21.html` |
| 34 | `pdfSlide22` | `src/slides/34-pdfSlide22.html` |
| 35 | `pdfSlide23` | `src/slides/35-pdfSlide23.html` |
| 36 | `pdfSlide24` | `src/slides/36-pdfSlide24.html` |
| 37 | `pdfSlide25` | `src/slides/37-pdfSlide25.html` |
| 38 | `pdfSlide26` | `src/slides/38-pdfSlide26.html` |
| 39 | `pdfSlide28` | `src/slides/39-pdfSlide28.html` |

## CSS — фактический порядок каскада

| № | DOM ID | CSS-файл |
|---:|---|---|
| 1 | `(no id)` | `src/styles/01-base-global.css` |
| 2 | `(no id)` | `src/styles/02-glow-position.css` |
| 3 | `(no id)` | `src/styles/03-glow-hide-pseudo.css` |
| 4 | `(no id)` | `src/styles/04-glow-inactive.css` |
| 5 | `(no id)` | `src/styles/05-glow-svg.css` |
| 6 | `(no id)` | `src/styles/06-glow-strength.css` |
| 7 | `cover-style` | `src/styles/07-cover-style.css` |
| 8 | `cover-fonts` | `src/styles/08-cover-fonts.css` |
| 9 | `coauthor-transition-style` | `src/styles/09-coauthor-transition-style.css` |
| 10 | `figma-slide2-style` | `src/styles/10-figma-slide2-style.css` |
| 11 | `figma-slides34-style` | `src/styles/11-figma-slides34-style.css` |
| 12 | `slide7-simple-152-896` | `src/styles/12-slide7-simple-152-896.css` |
| 13 | `rag-reauthed-style` | `src/styles/13-rag-reauthed-style.css` |
| 14 | `cinematic-hero-titles-8-22` | `src/styles/14-cinematic-hero-titles-8-22.css` |
| 15 | `v8-fullsite-parent-styling` | `src/styles/15-v8-fullsite-parent-styling.css` |
| 16 | `v8-new-story-intro-css` | `src/styles/16-v8-new-story-intro-css.css` |
| 17 | `rag-borderless-and-no-number` | `src/styles/17-rag-borderless-and-no-number.css` |
| 18 | `v8-sdd-cinematic-spec` | `src/styles/18-v8-sdd-cinematic-spec.css` |
| 19 | `presenter-ui-css` | `src/styles/19-presenter-ui-css.css` |
| 20 | `rag-architecture-reorder-css` | `src/styles/20-rag-architecture-reorder-css.css` |
| 21 | `rag-refined-original-theme-10-22` | `src/styles/21-rag-refined-original-theme-10-22.css` |
| 22 | `aist-evolution-style` | `src/styles/22-aist-evolution-style.css` |
| 23 | `evolution-story-polish` | `src/styles/23-evolution-story-polish.css` |
| 24 | `s7-figma-movie-style` | `src/styles/24-s7-figma-movie-style.css` |
| 25 | `ev2-storytelling-style` | `src/styles/25-ev2-storytelling-style.css` |
| 26 | `layout-audit-fixes-2026-10-12` | `src/styles/26-layout-audit-fixes-2026-10-12.css` |
| 27 | `slide8-editorial-simplify` | `src/styles/27-slide8-editorial-simplify.css` |
| 28 | `konspektus-practice-style` | `src/styles/28-konspektus-practice-style.css` |
| 29 | `semenov-29-closing-style` | `src/styles/29-semenov-29-closing-style.css` |
| 30 | `sergei-overrides-oct12` | `src/styles/30-sergei-overrides-oct12.css` |
| 31 | `coverBookVideoStyles` | `src/styles/31-coverBookVideoStyles.css` |
| 32 | `reliability-sharpness-fix` | `src/styles/32-reliability-sharpness-fix.css` |
| 33 | `instant-slide-content-fix` | `src/styles/33-instant-slide-content-fix.css` |
| 34 | `final-scan-ready-layout` | `src/styles/34-final-scan-ready-layout.css` |
| 35 | `catwin-final-layout-fix` | `src/styles/35-catwin-final-layout-fix.css` |
| 36 | `speaker-qr-mirror-konspektus` | `src/styles/36-speaker-qr-mirror-konspektus.css` |
| 37 | `storytelling-chapter-2026-10-13` | `src/styles/37-storytelling-chapter-2026-10-13.css` |
| 38 | `storytelling-layout-corrections` | `src/styles/38-storytelling-layout-corrections.css` |
| 39 | `storytelling-quality-pass` | `src/styles/39-storytelling-quality-pass.css` |
| 40 | `storytelling-fix-tools-grid` | `src/styles/40-storytelling-fix-tools-grid.css` |
| 41 | `storytelling-motion-final` | `src/styles/41-storytelling-motion-final.css` |
| 42 | `(no id)` | `src/styles/42-debug-panel.css` |

## JavaScript — фактический порядок исполнения

| № | DOM ID | JS-файл |
|---:|---|---|
| 1 | `(no id)` | `src/scripts/01-main-player.js` |
| 2 | `(no id)` | `src/scripts/02-stage-debug.js` |
| 3 | `figma-slide2-video-control` | `src/scripts/03-figma-slide2-video-control.js` |
| 4 | `cinematic-title-measure` | `src/scripts/04-cinematic-title-measure.js` |
| 5 | `v8-fullsite-parent-runtime` | `src/scripts/05-v8-fullsite-parent-runtime.js` |
| 6 | `presenter-ui-script` | `src/scripts/06-presenter-ui-script.js` |
| 7 | `s7-figma-movie-runtime` | `src/scripts/07-s7-figma-movie-runtime.js` |
| 8 | `konspektus-link-controls` | `src/scripts/08-konspektus-link-controls.js` |
| 9 | `semenov29-link-controls` | `src/scripts/09-semenov29-link-controls.js` |
| 10 | `coverBookVideoLifecycle` | `src/scripts/10-coverBookVideoLifecycle.js` |

## Индексы для точечных правок
`npm run locate -- N` показывает HTML, CSS-диапазоны и keyframes, локальные функции/события/таймеры, общие зависимости и iframe. Статические CSS-кандидаты не заменяют проверку каскада в браузере.

- `docs/SLIDE_MAP.md` — искать раздел по номеру показа.
- `docs/ANIMATION_MAP.md` — стадии, переходы, запуск/остановка, сообщения и опасные связи.
- `docs/CSS_MAP.md` — селекторы, свойства, условия, порядок и потенциальные переопределения.
- `npm run maps` — воспроизводимое обновление карт без чтения dist/бинарных ассетов.
- `npm run test:locate` — проверки индекса и порядка.

## Браузерная регрессия
Существующий комплект Playwright используется без установки зависимостей проекта.
`npm run regression:quick` — сборка и функциональная проверка; `npm run regression:full` — переходы, шаги, iframe и PNG-сравнение.
Выборочно: `npm run regression:full -- --slide=30`; при изменении общего файла добавляйте `--changed=src/styles/FILE.css` или путь JS/ассета.
Правила принятия эталонов, профиль и найденные проблемы: `docs/REGRESSION_PLAN.md`; фактический отчёт: `docs/REGRESSION_RESULTS.md`.
