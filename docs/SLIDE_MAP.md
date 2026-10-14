> Обновление 2026-10-14: вставлен новый слайд 6 `#agentsIntroSlide`, `src/slides/06-agentsIntroSlide.html`, stage `.925`, CSS `11-figma-slides34-style.css`, переходы в `01-main-player.js`. Пять ассетов `agents-*` в manifest. Прежние номера 6–39 в таблицах ниже сдвинуты на +1; актуальный порядок в `src/deck_order.json`.

# Карта слайдов

Генератор: `node scripts/generate-maps.mjs`. Индекс читает только текстовые src, не dist и не бинарные ассеты.

Порядок взят из deck_order.json и проверяется против __deckJump и PDF_SLIDE_SEQUENCE. №4 = figmaSlide5 (секция 5), №5 = figmaSlide4 (секция 4). Слайд 3 — надстройка над видимым figmaSlide2.

CSS: подтверждено наличие ID/классов в исходнике; это кандидаты, а не доказательство вычисленного стиля. :not исключается консервативно; :is/:where учитываются как альтернативы. Состояния show/out/in и классы локальных runtime учитываются. Отношения предок/потомок, атрибуты, специфичность и динамические DOM-узлы требуют проверки. iframe изолированы от CSS родителя. При отсутствии подтверждения: «не установлена».

Общие зависимости всех слайдов: src/scripts/01-main-player.js (fit, advance, back, showPdfSlideByIndex, hidePdfSlides, __deckJump); src/scripts/02-stage-debug.js; src/scripts/06-presenter-ui-script.js (getCurrent, refresh, галерея, fullscreen); src/shell.html (glow, навигация, presenterDrawer). Масштабирование холста 1920×1080; body.cover-off; CSS html/body и @font-face. Эти файлы нельзя менять без проверки затронутых слайдов. Глобальные эффекты glow и UI описаны в ANIMATION_MAP.

## 1. cover

- HTML: `src/slides/01-cover.html`; физическая секция 1.
- stage: `0`. Внутренние шаги: нет подтверждённых внутренних шагов.
- CSS-кандидаты (порядок каскада сохранён):
  - `src/styles/01-base-global.css:1`
  - `src/styles/07-cover-style.css:2-15`
  - `src/styles/08-cover-fonts.css:1`
  - `src/styles/31-coverBookVideoStyles.css:3-5`
- JS: общий контроллер и UI выше; локальные зависимости: `src/scripts/10-coverBookVideoLifecycle.js` (sync:L5-11).
- Ассеты HTML (включая srcdoc): `src/assets/c305c63b1bf23e0316d9b28b.svg` (image/svg+xml), `src/assets/11105f25a349202be3b30e65.webp` (image/webp), `src/assets/d32d3e5535b4d96ec2afcc5c.webm` (video/webm), `src/assets/4e5f3a036fd0d604f31c83db.svg` (image/svg+xml).
- Ассеты CSS-кандидатов: `src/assets/ba1d0151c4a99097231b3117.ttf`, `src/assets/4e5e9de6379dd5b4a7c3c00e.ttf`, `src/assets/598263b7f949a2056b572fdb.ttf`.
- Миниатюра галереи в shell: src/assets/381bd4e0f812270e94390cb9.webp. Общие SVG glow и элементы shell сохраняются для всего показа.
- iframe: локальная связь не установлена.
- src/scripts/10-coverBookVideoLifecycle.js: события pageshow (L13), visibilitychange (L14); таймеры не установлены; MutationObserver MutationObserver (L12); сообщения не установлены.
- Общий message-handler: 01-main-player.js L113. Локальный postMessage: связь не установлена.

## 2. figmaSlide2

- HTML: `src/slides/02-figmaSlide2.html`; физическая секция 2.
- stage: `.5`. Внутренние шаги: нет подтверждённых внутренних шагов.
- CSS-кандидаты (порядок каскада сохранён):
  - `src/styles/01-base-global.css:1`
  - `src/styles/08-cover-fonts.css:1`
  - `src/styles/10-figma-slide2-style.css:2-4,6-12,16-18,22,26-28,32,37,41-43,46-53,59-72`
  - `src/styles/11-figma-slides34-style.css:3-9`
- JS: общий контроллер и UI выше; локальные зависимости: `src/scripts/03-figma-slide2-video-control.js` (sync:L2-2).
- Ассеты HTML (включая srcdoc): `src/assets/937d0d74d2a105688760c777.svg` (image/svg+xml), `src/assets/b033b64ac32937755db2ac40.mp4` (video/mp4), `src/assets/ddfdc6acf8682ed380939c64.webp` (image/webp), `src/assets/2d452df6ceda2cfed529734d.png` (image/png), `src/assets/7b8ac2b7d07299555dbadc64.svg` (image/svg+xml), `src/assets/366511a38b6ed0f81e1ec7c7.svg` (image/svg+xml), `src/assets/8196bbf8e71b45bb453207d8.svg` (image/svg+xml).
- Ассеты CSS-кандидатов: `src/assets/ba1d0151c4a99097231b3117.ttf`, `src/assets/4e5e9de6379dd5b4a7c3c00e.ttf`, `src/assets/598263b7f949a2056b572fdb.ttf`.
- Миниатюра галереи в shell: src/assets/357495476b2acb30e648cfa9.webp. Общие SVG glow и элементы shell сохраняются для всего показа.
- iframe: локальная связь не установлена.
- src/scripts/03-figma-slide2-video-control.js: события не установлены; таймеры не установлены; MutationObserver MutationObserver (L2); сообщения не установлены.
- Общий message-handler: 01-main-player.js L113. Локальный postMessage: связь не установлена.

## 3. figmaSlide3Extras

- HTML: `src/slides/03-figmaSlide3Extras.html`; физическая секция 3.
- stage: `.75`. Внутренние шаги: нет подтверждённых внутренних шагов.
- CSS-кандидаты (порядок каскада сохранён):
  - `src/styles/01-base-global.css:1`
  - `src/styles/08-cover-fonts.css:1`
  - `src/styles/10-figma-slide2-style.css:2-4,6-12,16-18,22,26-28,32,37,41-43,46-53,59-72`
  - `src/styles/11-figma-slides34-style.css:3-9,11-18`
- JS: общий контроллер и UI выше; локальные зависимости: `src/scripts/03-figma-slide2-video-control.js` (sync:L2-2).
- Ассеты HTML (включая srcdoc): `src/assets/e7ff1b5c787e02bd96d7e1e4.svg` (image/svg+xml), `src/assets/51f6475fc8c95ddd03f2c94b.svg` (image/svg+xml), `src/assets/99904e04e11ff18e72f50463.svg` (image/svg+xml).
- Ассеты CSS-кандидатов: `src/assets/ba1d0151c4a99097231b3117.ttf`, `src/assets/4e5e9de6379dd5b4a7c3c00e.ttf`, `src/assets/598263b7f949a2056b572fdb.ttf`.
- Миниатюра галереи в shell: src/assets/a7558874775164a426331d93.webp. Общие SVG glow и элементы shell сохраняются для всего показа.
- iframe: локальная связь не установлена.
- src/scripts/03-figma-slide2-video-control.js: события не установлены; таймеры не установлены; MutationObserver MutationObserver (L2); сообщения не установлены.
- Связь: figmaSlide2 остаётся show + focus-docs; CSS/медиа предыдущего слайда участвуют совместно.
- Общий message-handler: 01-main-player.js L113. Локальный postMessage: связь не установлена.

## 4. figmaSlide5

- HTML: `src/slides/05-figmaSlide5.html`; физическая секция 5.
- stage: `.85`. Внутренние шаги: нет подтверждённых внутренних шагов.
- CSS-кандидаты (порядок каскада сохранён):
  - `src/styles/01-base-global.css:1`
  - `src/styles/08-cover-fonts.css:1`
  - `src/styles/11-figma-slides34-style.css:59,61-73`
- JS: общий контроллер и UI выше; локальные зависимости: не установлены.
- Ассеты HTML (включая srcdoc): `src/assets/cb1b456508e9ac4e7d66fc94.svg` (image/svg+xml), `src/assets/fb238f9aee5779275f37742e.png` (image/png).
- Ассеты CSS-кандидатов: `src/assets/ba1d0151c4a99097231b3117.ttf`, `src/assets/4e5e9de6379dd5b4a7c3c00e.ttf`, `src/assets/598263b7f949a2056b572fdb.ttf`.
- Миниатюра галереи в shell: src/assets/4e07a1c425b90093663e372c.webp. Общие SVG glow и элементы shell сохраняются для всего показа.
- iframe: локальная связь не установлена.
- Общий message-handler: 01-main-player.js L113. Локальный postMessage: связь не установлена.

## 5. figmaSlide4

- HTML: `src/slides/04-figmaSlide4.html`; физическая секция 4.
- stage: `.9`. Внутренние шаги: нет подтверждённых внутренних шагов.
- CSS-кандидаты (порядок каскада сохранён):
  - `src/styles/01-base-global.css:1`
  - `src/styles/08-cover-fonts.css:1`
  - `src/styles/11-figma-slides34-style.css:22-28,31-57`
- JS: общий контроллер и UI выше; локальные зависимости: не установлены.
- Ассеты HTML (включая srcdoc): прямая связь не установлена.
- Ассеты CSS-кандидатов: `src/assets/ba1d0151c4a99097231b3117.ttf`, `src/assets/4e5e9de6379dd5b4a7c3c00e.ttf`, `src/assets/598263b7f949a2056b572fdb.ttf`.
- Миниатюра галереи в shell: src/assets/9c44e3f572089281afac778e.webp. Общие SVG glow и элементы shell сохраняются для всего показа.
- iframe: локальная связь не установлена.
- Общий message-handler: 01-main-player.js L113. Локальный postMessage: связь не установлена.

## 6. figmaSlide6

- HTML: `src/slides/06-figmaSlide6.html`; физическая секция 6.
- stage: `.95`. Внутренние шаги: agentTimelineStep 0..8; галерея начинает с 8.
- CSS-кандидаты (порядок каскада сохранён):
  - `src/styles/01-base-global.css:1,7-12,14-17`
  - `src/styles/07-cover-style.css:18-23,25-28`
  - `src/styles/08-cover-fonts.css:1`
  - `src/styles/09-coauthor-transition-style.css:13-18,20-23`
  - `src/styles/10-figma-slide2-style.css:76-81,83-86`
  - `src/styles/11-figma-slides34-style.css:76-79,81-121,124-129,131-134`
- JS: общий контроллер и UI выше; локальные зависимости: не установлены.
- Ассеты HTML (включая srcdoc): прямая связь не установлена.
- Ассеты CSS-кандидатов: `src/assets/ba1d0151c4a99097231b3117.ttf`, `src/assets/4e5e9de6379dd5b4a7c3c00e.ttf`, `src/assets/598263b7f949a2056b572fdb.ttf`.
- Миниатюра галереи в shell: src/assets/d011816ba59ec8ed8dc7bb8f.webp. Общие SVG glow и элементы shell сохраняются для всего показа.
- iframe: локальная связь не установлена.
- Общий message-handler: 01-main-player.js L113. Локальный postMessage: связь не установлена.

## 7. architectureRagSlide

- HTML: `src/slides/07-architectureRagSlide.html`; физическая секция 7.
- stage: `.96`. Внутренние шаги: нет подтверждённых внутренних шагов.
- CSS-кандидаты (порядок каскада сохранён):
  - `src/styles/01-base-global.css:1`
  - `src/styles/08-cover-fonts.css:1`
  - `src/styles/20-rag-architecture-reorder-css.css:2-11`
- JS: общий контроллер и UI выше; локальные зависимости: не установлены.
- Ассеты HTML (включая srcdoc): `src/assets/7252bf3cf0c13bceb39d9b07.svg` (image/svg+xml).
- Ассеты CSS-кандидатов: `src/assets/ba1d0151c4a99097231b3117.ttf`, `src/assets/4e5e9de6379dd5b4a7c3c00e.ttf`, `src/assets/598263b7f949a2056b572fdb.ttf`.
- Миниатюра галереи в shell: src/assets/806e095ed59b3177a15ba743.webp. Общие SVG glow и элементы shell сохраняются для всего показа.
- iframe: локальная связь не установлена.
- setupSchemePieces создаёт scheme-piece и клонирует scheme-base; CSS динамических частей искать отдельно по scheme-piece.
- Общий message-handler: 01-main-player.js L113. Локальный postMessage: связь не установлена.

## 8. aistEvolutionSlide

- HTML: `src/slides/08-aistEvolutionSlide.html`; физическая секция 8.
- stage: `.965`. Внутренние шаги: aistEvolutionStep 0..6.
- CSS-кандидаты (порядок каскада сохранён):
  - `src/styles/01-base-global.css:1`
  - `src/styles/08-cover-fonts.css:1`
  - `src/styles/22-aist-evolution-style.css:3-5,28`
  - `src/styles/25-ev2-storytelling-style.css:3,5-7,12-13,18-20,22-23,25-28,34-35,40,42-46,50-60,65`
  - `src/styles/26-layout-audit-fixes-2026-10-12.css:10-13`
  - `src/styles/27-slide8-editorial-simplify.css:3-5,7-29`
  - `src/styles/32-reliability-sharpness-fix.css:3-17`
- JS: общий контроллер и UI выше; локальные зависимости: `src/scripts/07-s7-figma-movie-runtime.js` (setReady:L13-16, ensureSource:L17-24, ensurePlaying:L25-30, refresh:L31-40, preload:L43-43).
- Ассеты HTML (включая srcdoc): `src/assets/aaf78246a3ccf2032b20eb5c.png` (image/png), `src/assets/3c8015cd47c6ffe98fffcec3.png` (image/png), `src/assets/36014cc4fb3265da8c8d69b5.png` (image/png), `src/assets/fdf33bc9541452e0052bd65d.png` (image/png).
- Ассеты CSS-кандидатов: `src/assets/ba1d0151c4a99097231b3117.ttf`, `src/assets/4e5e9de6379dd5b4a7c3c00e.ttf`, `src/assets/598263b7f949a2056b572fdb.ttf`.
- Миниатюра галереи в shell: src/assets/55fe35cbcb5ba3455f589982.webp. Общие SVG glow и элементы shell сохраняются для всего показа.
- iframe: локальная связь не установлена.
- src/scripts/07-s7-figma-movie-runtime.js: события loadeddata (L47), canplay (L48), ended (L49), stalled (L50), error (L51), visibilitychange (L52); таймеры не установлены; MutationObserver MutationObserver (L44), MutationObserver (L53); сообщения не установлены.
- Общий message-handler: 01-main-player.js L113. Локальный postMessage: связь не установлена.

## 9. figmaSlide7

- HTML: `src/slides/09-figmaSlide7.html`; физическая секция 9.
- stage: `.97`. Внутренние шаги: нет подтверждённых внутренних шагов.
- CSS-кандидаты (порядок каскада сохранён):
  - `src/styles/01-base-global.css:1,22-24`
  - `src/styles/08-cover-fonts.css:1`
  - `src/styles/12-slide7-simple-152-896.css:3-6,9-10,12-15`
  - `src/styles/24-s7-figma-movie-style.css:3-11`
- JS: общий контроллер и UI выше; локальные зависимости: `src/scripts/07-s7-figma-movie-runtime.js` (setReady:L13-16, ensureSource:L17-24, ensurePlaying:L25-30, refresh:L31-40, preload:L43-43).
- Ассеты HTML (включая srcdoc): `src/assets/8119202a6d3deaad53d705bb.webp` (image/webp), `src/assets/c9fe7c4f2227fdea2593ad55.mp4` (video/mp4).
- Ассеты CSS-кандидатов: `src/assets/ba1d0151c4a99097231b3117.ttf`, `src/assets/4e5e9de6379dd5b4a7c3c00e.ttf`, `src/assets/598263b7f949a2056b572fdb.ttf`.
- Миниатюра галереи в shell: src/assets/4848d9d7523fe37a412e018a.webp. Общие SVG glow и элементы shell сохраняются для всего показа.
- iframe: локальная связь не установлена.
- src/scripts/07-s7-figma-movie-runtime.js: события loadeddata (L47), canplay (L48), ended (L49), stalled (L50), error (L51), visibilitychange (L52); таймеры не установлены; MutationObserver MutationObserver (L44), MutationObserver (L53); сообщения не установлены.
- Связь: runtime видео наблюдает предыдущий aistEvolutionSlide; предварительная загрузка при evStep ≥ 3.
- Общий message-handler: 01-main-player.js L113. Локальный postMessage: связь не установлена.

## 10. pdfSlide8

- HTML: `src/slides/10-pdfSlide8.html`; физическая секция 10.
- stage: `.98`; pdfDeckIndex=0. Внутренние шаги: __v8ClickStep 0..10.
- CSS-кандидаты (порядок каскада сохранён):
  - `src/styles/01-base-global.css:1`
  - `src/styles/08-cover-fonts.css:1`
  - `src/styles/13-rag-reauthed-style.css:3-14,16-17,19,21-23,133`
  - `src/styles/14-cinematic-hero-titles-8-22.css:7-10,12-21,23-26,28-29,33-38`
  - `src/styles/15-v8-fullsite-parent-styling.css:4-20`
  - `src/styles/16-v8-new-story-intro-css.css:3-9,13-16`
  - `src/styles/17-rag-borderless-and-no-number.css:3-8`
  - `src/styles/18-v8-sdd-cinematic-spec.css:3-50`
  - `src/styles/30-sergei-overrides-oct12.css:3-5`
  - `src/styles/32-reliability-sharpness-fix.css:19`
  - `src/styles/33-instant-slide-content-fix.css:3-13`
  - `src/styles/34-final-scan-ready-layout.css:3-7`
  - `src/styles/37-storytelling-chapter-2026-10-13.css:3-16,18-27,55,139-140`
  - `src/styles/41-storytelling-motion-final.css:89-94`
  - `src/styles/42-debug-panel.css:3-12,15`
- JS: общий контроллер и UI выше; локальные зависимости: `src/scripts/05-v8-fullsite-parent-runtime.js` (send:L17-17, clearClasses:L18-18, clearChat:L19-19, showStep:L20-45, onEnter:L46-46, onLeave:L47-47, replayFighter:L8-8, window.__v8Advance:L48-57, window.__v8Back:L58-61); `src/scripts/04-cinematic-title-measure.js` (calculateHeroPositions:L6-45).
- Ассеты HTML (включая srcdoc): `src/assets/8ab3158cc900a7f6c1d60cb4.webp` (image/webp), `src/assets/cf4adc3cd09ff55c94efc675.webp` (image/webp), `src/assets/74e9ea905187f74c7d5603fd.webp` (image/webp), `src/assets/7844563c81ed031aee6de8a5.webp` (image/webp), `src/assets/1397409e044a80809c846ad4.svg` (image/svg+xml), `src/assets/d068cee3e267e55b8e36a903.svg` (image/svg+xml).
- Ассеты CSS-кандидатов: `src/assets/ba1d0151c4a99097231b3117.ttf`, `src/assets/4e5e9de6379dd5b4a7c3c00e.ttf`, `src/assets/598263b7f949a2056b572fdb.ttf`.
- Миниатюра галереи в shell: src/assets/86e4a561a9491d8b7f52fbf1.webp. Общие SVG glow и элементы shell сохраняются для всего показа.
- iframe: `v8FighterIntro`, HTML L8-233; вложенные стили и скрипты в srcdoc; `v8FullChatWebsite`, HTML L237-893; вложенные стили и скрипты в srcdoc.
- src/scripts/05-v8-fullsite-parent-runtime.js: события load (L9); таймеры setTimeout (L40); MutationObserver MutationObserver (L64); сообщения postMessage( (L8), replay-fighter (L8), postMessage( (L17).
- src/scripts/04-cinematic-title-measure.js: события resize (L49); таймеры не установлены; MutationObserver не установлены; сообщения не установлены.
- Общий message-handler: 01-main-player.js L113. Локальный postMessage: см. перечень сообщений выше.

## 11. pdfSlide27

- HTML: `src/slides/11-pdfSlide27.html`; физическая секция 11.
- stage: `.98`; pdfDeckIndex=1. Внутренние шаги: нет подтверждённых внутренних шагов.
- CSS-кандидаты (порядок каскада сохранён):
  - `src/styles/01-base-global.css:1`
  - `src/styles/08-cover-fonts.css:1`
  - `src/styles/13-rag-reauthed-style.css:3-13,19,133`
  - `src/styles/14-cinematic-hero-titles-8-22.css:10,21,23,28-29,33-38`
  - `src/styles/17-rag-borderless-and-no-number.css:3-8`
  - `src/styles/28-konspektus-practice-style.css:3,6,63`
  - `src/styles/30-sergei-overrides-oct12.css:4,31-49,57-82`
  - `src/styles/33-instant-slide-content-fix.css:3-8`
  - `src/styles/34-final-scan-ready-layout.css:3-7`
  - `src/styles/35-catwin-final-layout-fix.css:3-9,11-28`
  - `src/styles/37-storytelling-chapter-2026-10-13.css:3,21-27,137,139`
- JS: общий контроллер и UI выше; локальные зависимости: не установлены.
- Ассеты HTML (включая srcdoc): `src/assets/8ab3158cc900a7f6c1d60cb4.webp` (image/webp), `src/assets/cf4adc3cd09ff55c94efc675.webp` (image/webp), `src/assets/74e9ea905187f74c7d5603fd.webp` (image/webp).
- Ассеты CSS-кандидатов: `src/assets/ba1d0151c4a99097231b3117.ttf`, `src/assets/4e5e9de6379dd5b4a7c3c00e.ttf`, `src/assets/598263b7f949a2056b572fdb.ttf`.
- Миниатюра галереи в shell: src/assets/7614076119a953f7613698b7.webp. Общие SVG glow и элементы shell сохраняются для всего показа.
- iframe: локальная связь не установлена.
- Общий message-handler: 01-main-player.js L113. Локальный postMessage: связь не установлена.

## 12. pdfSlide9

- HTML: `src/slides/12-pdfSlide9.html`; физическая секция 12.
- stage: `.98`; pdfDeckIndex=2. Внутренние шаги: нет подтверждённых внутренних шагов.
- CSS-кандидаты (порядок каскада сохранён):
  - `src/styles/01-base-global.css:1`
  - `src/styles/08-cover-fonts.css:1`
  - `src/styles/13-rag-reauthed-style.css:3-17,19,21-23,46-72,75-82,133`
  - `src/styles/14-cinematic-hero-titles-8-22.css:6-10,12-21,23-26,28-29,33-38`
  - `src/styles/17-rag-borderless-and-no-number.css:3-8`
  - `src/styles/21-rag-refined-original-theme-10-22.css:171-174`
  - `src/styles/30-sergei-overrides-oct12.css:3-5`
  - `src/styles/32-reliability-sharpness-fix.css:19`
  - `src/styles/33-instant-slide-content-fix.css:3-13`
  - `src/styles/34-final-scan-ready-layout.css:3-7`
  - `src/styles/37-storytelling-chapter-2026-10-13.css:3-27,29-31,48,55,93-96,139-140`
  - `src/styles/38-storytelling-layout-corrections.css:63-69`
  - `src/styles/41-storytelling-motion-final.css:4-7,36-38,89-94`
  - `src/styles/43-slide-visual-polish.css:2-6,31`
- JS: общий контроллер и UI выше; локальные зависимости: `src/scripts/04-cinematic-title-measure.js` (calculateHeroPositions:L6-45).
- Ассеты HTML (включая srcdoc): прямая связь не установлена.
- Ассеты CSS-кандидатов: `src/assets/ba1d0151c4a99097231b3117.ttf`, `src/assets/4e5e9de6379dd5b4a7c3c00e.ttf`, `src/assets/598263b7f949a2056b572fdb.ttf`.
- Миниатюра галереи в shell: src/assets/04c6da75365662525ad135be.webp. Общие SVG glow и элементы shell сохраняются для всего показа.
- iframe: локальная связь не установлена.
- src/scripts/04-cinematic-title-measure.js: события resize (L49); таймеры не установлены; MutationObserver не установлены; сообщения не установлены.
- Общий message-handler: 01-main-player.js L113. Локальный postMessage: связь не установлена.

## 13. pdfSlide29

- HTML: `src/slides/13-pdfSlide29.html`; физическая секция 13.
- stage: `.98`; pdfDeckIndex=3. Внутренние шаги: нет подтверждённых внутренних шагов.
- CSS-кандидаты (порядок каскада сохранён):
  - `src/styles/01-base-global.css:1`
  - `src/styles/08-cover-fonts.css:1`
  - `src/styles/13-rag-reauthed-style.css:3-14,16-17,19,21-27,73-74,133`
  - `src/styles/14-cinematic-hero-titles-8-22.css:7-10,12-21,23-26,28-29,33-38`
  - `src/styles/17-rag-borderless-and-no-number.css:3-8`
  - `src/styles/30-sergei-overrides-oct12.css:3-5`
  - `src/styles/32-reliability-sharpness-fix.css:19`
  - `src/styles/33-instant-slide-content-fix.css:3-13`
  - `src/styles/34-final-scan-ready-layout.css:3-7`
  - `src/styles/37-storytelling-chapter-2026-10-13.css:3-16,18-27,35-37,50,55-75,97-99,139-140`
  - `src/styles/41-storytelling-motion-final.css:20-27,42-44,55-67,89-94`
- JS: общий контроллер и UI выше; локальные зависимости: не установлены.
- Ассеты HTML (включая srcdoc): прямая связь не установлена.
- Ассеты CSS-кандидатов: `src/assets/ba1d0151c4a99097231b3117.ttf`, `src/assets/4e5e9de6379dd5b4a7c3c00e.ttf`, `src/assets/598263b7f949a2056b572fdb.ttf`.
- Миниатюра галереи в shell: src/assets/54f2ddaed5ea8b9f214d2056.webp. Общие SVG glow и элементы shell сохраняются для всего показа.
- iframe: локальная связь не установлена.
- Общий message-handler: 01-main-player.js L113. Локальный postMessage: связь не установлена.

## 14. pdfSlide10

- HTML: `src/slides/14-pdfSlide10.html`; физическая секция 14.
- stage: `.98`; pdfDeckIndex=4. Внутренние шаги: нет подтверждённых внутренних шагов.
- CSS-кандидаты (порядок каскада сохранён):
  - `src/styles/01-base-global.css:1`
  - `src/styles/08-cover-fonts.css:1`
  - `src/styles/13-rag-reauthed-style.css:3-17,19,21-23,84-90,133`
  - `src/styles/14-cinematic-hero-titles-8-22.css:6-10,12-21,23-26,28-29,33-38`
  - `src/styles/17-rag-borderless-and-no-number.css:3-8`
  - `src/styles/21-rag-refined-original-theme-10-22.css:4-19,23,33-45,163`
  - `src/styles/30-sergei-overrides-oct12.css:3-5`
  - `src/styles/32-reliability-sharpness-fix.css:19`
  - `src/styles/33-instant-slide-content-fix.css:3-13`
  - `src/styles/34-final-scan-ready-layout.css:3-7`
  - `src/styles/37-storytelling-chapter-2026-10-13.css:3-27,32-34,49,55,76-79,139-140`
  - `src/styles/41-storytelling-motion-final.css:8-11,28-35,39-41,68-77,89-94`
- JS: общий контроллер и UI выше; локальные зависимости: `src/scripts/04-cinematic-title-measure.js` (calculateHeroPositions:L6-45).
- Ассеты HTML (включая srcdoc): прямая связь не установлена.
- Ассеты CSS-кандидатов: `src/assets/ba1d0151c4a99097231b3117.ttf`, `src/assets/4e5e9de6379dd5b4a7c3c00e.ttf`, `src/assets/598263b7f949a2056b572fdb.ttf`.
- Миниатюра галереи в shell: src/assets/2bb56771fe71f6a516d59408.webp. Общие SVG glow и элементы shell сохраняются для всего показа.
- iframe: локальная связь не установлена.
- src/scripts/04-cinematic-title-measure.js: события resize (L49); таймеры не установлены; MutationObserver не установлены; сообщения не установлены.
- Общий message-handler: 01-main-player.js L113. Локальный postMessage: связь не установлена.

## 15. pdfSlide11

- HTML: `src/slides/15-pdfSlide11.html`; физическая секция 15.
- stage: `.98`; pdfDeckIndex=5. Внутренние шаги: нет подтверждённых внутренних шагов.
- CSS-кандидаты (порядок каскада сохранён):
  - `src/styles/01-base-global.css:1`
  - `src/styles/08-cover-fonts.css:1`
  - `src/styles/13-rag-reauthed-style.css:3-17,19,21-27,92-97,133`
  - `src/styles/14-cinematic-hero-titles-8-22.css:6-10,12-21,23-26,28-29,33-38`
  - `src/styles/17-rag-borderless-and-no-number.css:3-8`
  - `src/styles/21-rag-refined-original-theme-10-22.css:4-19,23-30,47-58,163`
  - `src/styles/30-sergei-overrides-oct12.css:3-5`
  - `src/styles/32-reliability-sharpness-fix.css:19`
  - `src/styles/33-instant-slide-content-fix.css:3-13`
  - `src/styles/34-final-scan-ready-layout.css:3-7`
  - `src/styles/37-storytelling-chapter-2026-10-13.css:3-27,35-37,50,55-75,139-140`
  - `src/styles/41-storytelling-motion-final.css:20-27,42-44,55-67,89-94`
- JS: общий контроллер и UI выше; локальные зависимости: `src/scripts/04-cinematic-title-measure.js` (calculateHeroPositions:L6-45).
- Ассеты HTML (включая srcdoc): прямая связь не установлена.
- Ассеты CSS-кандидатов: `src/assets/ba1d0151c4a99097231b3117.ttf`, `src/assets/4e5e9de6379dd5b4a7c3c00e.ttf`, `src/assets/598263b7f949a2056b572fdb.ttf`.
- Миниатюра галереи в shell: src/assets/15ebb7abed8a164e1511ce24.webp. Общие SVG glow и элементы shell сохраняются для всего показа.
- iframe: локальная связь не установлена.
- src/scripts/04-cinematic-title-measure.js: события resize (L49); таймеры не установлены; MutationObserver не установлены; сообщения не установлены.
- Общий message-handler: 01-main-player.js L113. Локальный postMessage: связь не установлена.

## 16. pdfSlide12

- HTML: `src/slides/16-pdfSlide12.html`; физическая секция 16.
- stage: `.98`; pdfDeckIndex=6. Внутренние шаги: нет подтверждённых внутренних шагов.
- CSS-кандидаты (порядок каскада сохранён):
  - `src/styles/01-base-global.css:1`
  - `src/styles/08-cover-fonts.css:1`
  - `src/styles/13-rag-reauthed-style.css:3-17,19,21-23,99-102,133`
  - `src/styles/14-cinematic-hero-titles-8-22.css:6-10,12-21,23-26,28-29,33-38`
  - `src/styles/17-rag-borderless-and-no-number.css:3-8`
  - `src/styles/21-rag-refined-original-theme-10-22.css:4-19,23,60-64,163`
  - `src/styles/26-layout-audit-fixes-2026-10-12.css:16-19`
  - `src/styles/30-sergei-overrides-oct12.css:3-5`
  - `src/styles/32-reliability-sharpness-fix.css:19`
  - `src/styles/33-instant-slide-content-fix.css:3-13`
  - `src/styles/34-final-scan-ready-layout.css:3-7`
  - `src/styles/37-storytelling-chapter-2026-10-13.css:3-27,32-34,49,55,78,80,100-101,139-140`
  - `src/styles/38-storytelling-layout-corrections.css:78-80`
  - `src/styles/41-storytelling-motion-final.css:8-11,28-31,39-41,68-72,89-94`
- JS: общий контроллер и UI выше; локальные зависимости: `src/scripts/04-cinematic-title-measure.js` (calculateHeroPositions:L6-45).
- Ассеты HTML (включая srcdoc): прямая связь не установлена.
- Ассеты CSS-кандидатов: `src/assets/ba1d0151c4a99097231b3117.ttf`, `src/assets/4e5e9de6379dd5b4a7c3c00e.ttf`, `src/assets/598263b7f949a2056b572fdb.ttf`.
- Миниатюра галереи в shell: src/assets/c51a88fdd4a2012514c39da1.webp. Общие SVG glow и элементы shell сохраняются для всего показа.
- iframe: локальная связь не установлена.
- src/scripts/04-cinematic-title-measure.js: события resize (L49); таймеры не установлены; MutationObserver не установлены; сообщения не установлены.
- Общий message-handler: 01-main-player.js L113. Локальный postMessage: связь не установлена.

## 17. pdfSlide30

- HTML: `src/slides/17-pdfSlide30.html`; физическая секция 17.
- stage: `.98`; pdfDeckIndex=7. Внутренние шаги: нет подтверждённых внутренних шагов.
- CSS-кандидаты (порядок каскада сохранён):
  - `src/styles/01-base-global.css:1`
  - `src/styles/08-cover-fonts.css:1`
  - `src/styles/13-rag-reauthed-style.css:3-14,16-17,19,21-23,103-107,133`
  - `src/styles/14-cinematic-hero-titles-8-22.css:7-10,12-21,23-26,28-29,33-38`
  - `src/styles/17-rag-borderless-and-no-number.css:3-8`
  - `src/styles/30-sergei-overrides-oct12.css:3-5`
  - `src/styles/32-reliability-sharpness-fix.css:19`
  - `src/styles/33-instant-slide-content-fix.css:3-13`
  - `src/styles/34-final-scan-ready-layout.css:3-7`
  - `src/styles/37-storytelling-chapter-2026-10-13.css:3-16,18-27,32-34,49,55,79,81,102-105,139-140`
  - `src/styles/38-storytelling-layout-corrections.css:71-76,78-80`
  - `src/styles/41-storytelling-motion-final.css:8-11,32-35,39-41,73-77,89-94`
- JS: общий контроллер и UI выше; локальные зависимости: не установлены.
- Ассеты HTML (включая srcdoc): прямая связь не установлена.
- Ассеты CSS-кандидатов: `src/assets/ba1d0151c4a99097231b3117.ttf`, `src/assets/4e5e9de6379dd5b4a7c3c00e.ttf`, `src/assets/598263b7f949a2056b572fdb.ttf`.
- Миниатюра галереи в shell: src/assets/cacf991f935c5651226ba37b.webp. Общие SVG glow и элементы shell сохраняются для всего показа.
- iframe: локальная связь не установлена.
- Общий message-handler: 01-main-player.js L113. Локальный postMessage: связь не установлена.

## 18. pdfSlide13

- HTML: `src/slides/18-pdfSlide13.html`; физическая секция 18.
- stage: `.98`; pdfDeckIndex=8. Внутренние шаги: нет подтверждённых внутренних шагов.
- CSS-кандидаты (порядок каскада сохранён):
  - `src/styles/01-base-global.css:1`
  - `src/styles/08-cover-fonts.css:1`
  - `src/styles/13-rag-reauthed-style.css:3-17,19,21-23,109-111,133`
  - `src/styles/14-cinematic-hero-titles-8-22.css:6-10,12-21,23-26,28-29,33-38`
  - `src/styles/17-rag-borderless-and-no-number.css:3-8`
  - `src/styles/21-rag-refined-original-theme-10-22.css:4-19,23,73-79,163,165-166,180-184,189-190`
  - `src/styles/26-layout-audit-fixes-2026-10-12.css:29-46`
  - `src/styles/30-sergei-overrides-oct12.css:3-5`
  - `src/styles/32-reliability-sharpness-fix.css:19`
  - `src/styles/33-instant-slide-content-fix.css:3-13`
  - `src/styles/34-final-scan-ready-layout.css:3-7`
  - `src/styles/37-storytelling-chapter-2026-10-13.css:3-27,38-40,51,55-69,75,106-109,139-140`
  - `src/styles/38-storytelling-layout-corrections.css:27-55`
  - `src/styles/39-storytelling-quality-pass.css:3-11`
  - `src/styles/41-storytelling-motion-final.css:12-15,24-27,45-47,55-64,89-94`
- JS: общий контроллер и UI выше; локальные зависимости: `src/scripts/04-cinematic-title-measure.js` (calculateHeroPositions:L6-45).
- Ассеты HTML (включая srcdoc): прямая связь не установлена.
- Ассеты CSS-кандидатов: `src/assets/ba1d0151c4a99097231b3117.ttf`, `src/assets/4e5e9de6379dd5b4a7c3c00e.ttf`, `src/assets/598263b7f949a2056b572fdb.ttf`.
- Миниатюра галереи в shell: src/assets/a8d4ebdd66a80d856e87215f.webp. Общие SVG glow и элементы shell сохраняются для всего показа.
- iframe: локальная связь не установлена.
- src/scripts/04-cinematic-title-measure.js: события resize (L49); таймеры не установлены; MutationObserver не установлены; сообщения не установлены.
- Общий message-handler: 01-main-player.js L113. Локальный postMessage: связь не установлена.

## 19. pdfSlide31

- HTML: `src/slides/19-pdfSlide31.html`; физическая секция 19.
- stage: `.98`; pdfDeckIndex=9. Внутренние шаги: нет подтверждённых внутренних шагов.
- CSS-кандидаты (порядок каскада сохранён):
  - `src/styles/01-base-global.css:1`
  - `src/styles/08-cover-fonts.css:1`
  - `src/styles/13-rag-reauthed-style.css:3-14,16-17,19,21-23,109-111,133`
  - `src/styles/14-cinematic-hero-titles-8-22.css:7-10,12-21,23-26,28-29,33-38`
  - `src/styles/17-rag-borderless-and-no-number.css:3-8`
  - `src/styles/30-sergei-overrides-oct12.css:3-5`
  - `src/styles/32-reliability-sharpness-fix.css:19`
  - `src/styles/33-instant-slide-content-fix.css:3-13`
  - `src/styles/34-final-scan-ready-layout.css:3-7`
  - `src/styles/37-storytelling-chapter-2026-10-13.css:3-16,18-27,38-40,51,55-69,75,106-111,139-140`
  - `src/styles/38-storytelling-layout-corrections.css:27-61`
  - `src/styles/39-storytelling-quality-pass.css:3-11`
  - `src/styles/41-storytelling-motion-final.css:12-15,24-27,45-47,55-64,89-94`
- JS: общий контроллер и UI выше; локальные зависимости: не установлены.
- Ассеты HTML (включая srcdoc): прямая связь не установлена.
- Ассеты CSS-кандидатов: `src/assets/ba1d0151c4a99097231b3117.ttf`, `src/assets/4e5e9de6379dd5b4a7c3c00e.ttf`, `src/assets/598263b7f949a2056b572fdb.ttf`.
- Миниатюра галереи в shell: src/assets/e32e181a309249b693af8da1.webp. Общие SVG glow и элементы shell сохраняются для всего показа.
- iframe: локальная связь не установлена.
- Общий message-handler: 01-main-player.js L113. Локальный postMessage: связь не установлена.

## 20. pdfSlide32

- HTML: `src/slides/20-pdfSlide32.html`; физическая секция 20.
- stage: `.98`; pdfDeckIndex=10. Внутренние шаги: нет подтверждённых внутренних шагов.
- CSS-кандидаты (порядок каскада сохранён):
  - `src/styles/01-base-global.css:1`
  - `src/styles/08-cover-fonts.css:1`
  - `src/styles/13-rag-reauthed-style.css:3-14,16-17,19,21-23,109-111,133`
  - `src/styles/14-cinematic-hero-titles-8-22.css:7-10,12-21,23-26,28-29,33-38`
  - `src/styles/17-rag-borderless-and-no-number.css:3-8`
  - `src/styles/30-sergei-overrides-oct12.css:3-5`
  - `src/styles/32-reliability-sharpness-fix.css:19`
  - `src/styles/33-instant-slide-content-fix.css:3-13`
  - `src/styles/34-final-scan-ready-layout.css:3-7`
  - `src/styles/37-storytelling-chapter-2026-10-13.css:3-16,18-27,38-40,51,55-69,75,106-111,139-140`
  - `src/styles/38-storytelling-layout-corrections.css:27-61`
  - `src/styles/39-storytelling-quality-pass.css:3-11`
  - `src/styles/41-storytelling-motion-final.css:12-15,24-27,45-47,55-64,89-94`
- JS: общий контроллер и UI выше; локальные зависимости: не установлены.
- Ассеты HTML (включая srcdoc): прямая связь не установлена.
- Ассеты CSS-кандидатов: `src/assets/ba1d0151c4a99097231b3117.ttf`, `src/assets/4e5e9de6379dd5b4a7c3c00e.ttf`, `src/assets/598263b7f949a2056b572fdb.ttf`.
- Миниатюра галереи в shell: src/assets/f438c8b93e692649907e7e2e.webp. Общие SVG glow и элементы shell сохраняются для всего показа.
- iframe: локальная связь не установлена.
- Общий message-handler: 01-main-player.js L113. Локальный postMessage: связь не установлена.

## 21. pdfSlide14

- HTML: `src/slides/21-pdfSlide14.html`; физическая секция 21.
- stage: `.98`; pdfDeckIndex=11. Внутренние шаги: нет подтверждённых внутренних шагов.
- CSS-кандидаты (порядок каскада сохранён):
  - `src/styles/01-base-global.css:1`
  - `src/styles/08-cover-fonts.css:1`
  - `src/styles/13-rag-reauthed-style.css:3-17,19,21-23,113-114,133`
  - `src/styles/14-cinematic-hero-titles-8-22.css:6-10,12-21,23-26,28-29,33-38`
  - `src/styles/17-rag-borderless-and-no-number.css:3-8`
  - `src/styles/21-rag-refined-original-theme-10-22.css:4-19,23,81-88,163`
  - `src/styles/30-sergei-overrides-oct12.css:3-5`
  - `src/styles/32-reliability-sharpness-fix.css:19`
  - `src/styles/33-instant-slide-content-fix.css:3-13`
  - `src/styles/34-final-scan-ready-layout.css:3-7`
  - `src/styles/37-storytelling-chapter-2026-10-13.css:3-27,44-47,53,55,79,86,139-140`
  - `src/styles/41-storytelling-motion-final.css:8-11,32-35,51-53,73-77,89-94`
- JS: общий контроллер и UI выше; локальные зависимости: `src/scripts/04-cinematic-title-measure.js` (calculateHeroPositions:L6-45).
- Ассеты HTML (включая srcdoc): прямая связь не установлена.
- Ассеты CSS-кандидатов: `src/assets/ba1d0151c4a99097231b3117.ttf`, `src/assets/4e5e9de6379dd5b4a7c3c00e.ttf`, `src/assets/598263b7f949a2056b572fdb.ttf`.
- Миниатюра галереи в shell: src/assets/a520904b6e4028e6383c1653.webp. Общие SVG glow и элементы shell сохраняются для всего показа.
- iframe: локальная связь не установлена.
- src/scripts/04-cinematic-title-measure.js: события resize (L49); таймеры не установлены; MutationObserver не установлены; сообщения не установлены.
- Общий message-handler: 01-main-player.js L113. Локальный postMessage: связь не установлена.

## 22. pdfSlide15

- HTML: `src/slides/22-pdfSlide15.html`; физическая секция 22.
- stage: `.98`; pdfDeckIndex=12. Внутренние шаги: нет подтверждённых внутренних шагов.
- CSS-кандидаты (порядок каскада сохранён):
  - `src/styles/01-base-global.css:1`
  - `src/styles/08-cover-fonts.css:1`
  - `src/styles/13-rag-reauthed-style.css:3-17,19,21-24,27-29,116,133`
  - `src/styles/14-cinematic-hero-titles-8-22.css:6-10,12-21,23-26,28-29,33-38`
  - `src/styles/17-rag-borderless-and-no-number.css:3-8`
  - `src/styles/21-rag-refined-original-theme-10-22.css:4-19,23-28,31,90-96,163`
  - `src/styles/30-sergei-overrides-oct12.css:3-5`
  - `src/styles/32-reliability-sharpness-fix.css:19`
  - `src/styles/33-instant-slide-content-fix.css:3-13`
  - `src/styles/34-final-scan-ready-layout.css:3-7`
  - `src/styles/37-storytelling-chapter-2026-10-13.css:3-27,38-40,51,55,112-113,139-140`
  - `src/styles/39-storytelling-quality-pass.css:15`
  - `src/styles/41-storytelling-motion-final.css:12-15,45-47,89-94`
- JS: общий контроллер и UI выше; локальные зависимости: `src/scripts/04-cinematic-title-measure.js` (calculateHeroPositions:L6-45).
- Ассеты HTML (включая srcdoc): прямая связь не установлена.
- Ассеты CSS-кандидатов: `src/assets/ba1d0151c4a99097231b3117.ttf`, `src/assets/4e5e9de6379dd5b4a7c3c00e.ttf`, `src/assets/598263b7f949a2056b572fdb.ttf`.
- Миниатюра галереи в shell: src/assets/5c2767d3695463d4e91e2701.webp. Общие SVG glow и элементы shell сохраняются для всего показа.
- iframe: локальная связь не установлена.
- src/scripts/04-cinematic-title-measure.js: события resize (L49); таймеры не установлены; MutationObserver не установлены; сообщения не установлены.
- Общий message-handler: 01-main-player.js L113. Локальный postMessage: связь не установлена.

## 23. pdfSlide33

- HTML: `src/slides/23-pdfSlide33.html`; физическая секция 23.
- stage: `.98`; pdfDeckIndex=13. Внутренние шаги: нет подтверждённых внутренних шагов.
- CSS-кандидаты (порядок каскада сохранён):
  - `src/styles/01-base-global.css:1`
  - `src/styles/08-cover-fonts.css:1`
  - `src/styles/13-rag-reauthed-style.css:3-14,16-17,19,21-23,117-118,133`
  - `src/styles/14-cinematic-hero-titles-8-22.css:7-10,12-21,23-26,28-29,33-38`
  - `src/styles/17-rag-borderless-and-no-number.css:3-8`
  - `src/styles/30-sergei-overrides-oct12.css:3-5`
  - `src/styles/32-reliability-sharpness-fix.css:19`
  - `src/styles/33-instant-slide-content-fix.css:3-13`
  - `src/styles/34-final-scan-ready-layout.css:3-7`
  - `src/styles/37-storytelling-chapter-2026-10-13.css:3-16,18-27,44-47,53,55,75,88,114-115,139-140`
  - `src/styles/38-storytelling-layout-corrections.css:78-80`
  - `src/styles/41-storytelling-motion-final.css:8-11,24-27,51-53,83-87,89-94`
- JS: общий контроллер и UI выше; локальные зависимости: не установлены.
- Ассеты HTML (включая srcdoc): прямая связь не установлена.
- Ассеты CSS-кандидатов: `src/assets/ba1d0151c4a99097231b3117.ttf`, `src/assets/4e5e9de6379dd5b4a7c3c00e.ttf`, `src/assets/598263b7f949a2056b572fdb.ttf`.
- Миниатюра галереи в shell: src/assets/43d63dff3587ca932e8062a3.webp. Общие SVG glow и элементы shell сохраняются для всего показа.
- iframe: локальная связь не установлена.
- Общий message-handler: 01-main-player.js L113. Локальный postMessage: связь не установлена.

## 24. pdfSlide16

- HTML: `src/slides/24-pdfSlide16.html`; физическая секция 24.
- stage: `.98`; pdfDeckIndex=14. Внутренние шаги: нет подтверждённых внутренних шагов.
- CSS-кандидаты (порядок каскада сохранён):
  - `src/styles/01-base-global.css:1`
  - `src/styles/08-cover-fonts.css:1`
  - `src/styles/13-rag-reauthed-style.css:3-17,19,21-23,120,133`
  - `src/styles/14-cinematic-hero-titles-8-22.css:6-10,12-21,23-26,28-29,33-38`
  - `src/styles/17-rag-borderless-and-no-number.css:3-8`
  - `src/styles/21-rag-refined-original-theme-10-22.css:4-19,23,103-108,163`
  - `src/styles/26-layout-audit-fixes-2026-10-12.css:50-71`
  - `src/styles/30-sergei-overrides-oct12.css:3-5`
  - `src/styles/32-reliability-sharpness-fix.css:19`
  - `src/styles/33-instant-slide-content-fix.css:3-13`
  - `src/styles/34-final-scan-ready-layout.css:3-7`
  - `src/styles/37-storytelling-chapter-2026-10-13.css:3-27,38-40,51,55-75,116-117,139-140`
  - `src/styles/38-storytelling-layout-corrections.css:3-20`
  - `src/styles/39-storytelling-quality-pass.css:13`
  - `src/styles/41-storytelling-motion-final.css:12-15,24-27,45-47,55-67,89-94`
- JS: общий контроллер и UI выше; локальные зависимости: `src/scripts/04-cinematic-title-measure.js` (calculateHeroPositions:L6-45).
- Ассеты HTML (включая srcdoc): прямая связь не установлена.
- Ассеты CSS-кандидатов: `src/assets/ba1d0151c4a99097231b3117.ttf`, `src/assets/4e5e9de6379dd5b4a7c3c00e.ttf`, `src/assets/598263b7f949a2056b572fdb.ttf`.
- Миниатюра галереи в shell: src/assets/9726260b6ac9e85cca15b8f2.webp. Общие SVG glow и элементы shell сохраняются для всего показа.
- iframe: локальная связь не установлена.
- src/scripts/04-cinematic-title-measure.js: события resize (L49); таймеры не установлены; MutationObserver не установлены; сообщения не установлены.
- Общий message-handler: 01-main-player.js L113. Локальный postMessage: связь не установлена.

## 25. pdfSlide34

- HTML: `src/slides/25-pdfSlide34.html`; физическая секция 25.
- stage: `.98`; pdfDeckIndex=15. Внутренние шаги: нет подтверждённых внутренних шагов.
- CSS-кандидаты (порядок каскада сохранён):
  - `src/styles/01-base-global.css:1`
  - `src/styles/08-cover-fonts.css:1`
  - `src/styles/13-rag-reauthed-style.css:3-14,16-17,19,21-23,120,133`
  - `src/styles/14-cinematic-hero-titles-8-22.css:7-10,12-21,23-26,28-29,33-38`
  - `src/styles/17-rag-borderless-and-no-number.css:3-8`
  - `src/styles/30-sergei-overrides-oct12.css:3-5`
  - `src/styles/32-reliability-sharpness-fix.css:19`
  - `src/styles/33-instant-slide-content-fix.css:3-13`
  - `src/styles/34-final-scan-ready-layout.css:3-7`
  - `src/styles/37-storytelling-chapter-2026-10-13.css:3-16,18-27,38-40,51,55-75,116-119,139-140`
  - `src/styles/38-storytelling-layout-corrections.css:3-25`
  - `src/styles/39-storytelling-quality-pass.css:13`
  - `src/styles/41-storytelling-motion-final.css:12-15,24-27,45-47,55-67,89-94`
- JS: общий контроллер и UI выше; локальные зависимости: не установлены.
- Ассеты HTML (включая srcdoc): прямая связь не установлена.
- Ассеты CSS-кандидатов: `src/assets/ba1d0151c4a99097231b3117.ttf`, `src/assets/4e5e9de6379dd5b4a7c3c00e.ttf`, `src/assets/598263b7f949a2056b572fdb.ttf`.
- Миниатюра галереи в shell: src/assets/853e96faa56ef7c75cf7be00.webp. Общие SVG glow и элементы shell сохраняются для всего показа.
- iframe: локальная связь не установлена.
- Общий message-handler: 01-main-player.js L113. Локальный postMessage: связь не установлена.

## 26. pdfSlide17

- HTML: `src/slides/26-pdfSlide17.html`; физическая секция 26.
- stage: `.98`; pdfDeckIndex=16. Внутренние шаги: нет подтверждённых внутренних шагов.
- CSS-кандидаты (порядок каскада сохранён):
  - `src/styles/01-base-global.css:1`
  - `src/styles/08-cover-fonts.css:1`
  - `src/styles/13-rag-reauthed-style.css:3-17,19,21-23,30-31,122,133`
  - `src/styles/14-cinematic-hero-titles-8-22.css:6-10,12-21,23-26,28-29,33-38`
  - `src/styles/17-rag-borderless-and-no-number.css:3-8`
  - `src/styles/21-rag-refined-original-theme-10-22.css:4-19,23,111-115,163`
  - `src/styles/30-sergei-overrides-oct12.css:3-5`
  - `src/styles/32-reliability-sharpness-fix.css:19`
  - `src/styles/33-instant-slide-content-fix.css:3-13`
  - `src/styles/34-final-scan-ready-layout.css:3-7`
  - `src/styles/37-storytelling-chapter-2026-10-13.css:3-27,41-43,49,52,55,87,120-121,139-140`
  - `src/styles/41-storytelling-motion-final.css:16-19,28-31,48-50,68-72,89-94`
- JS: общий контроллер и UI выше; локальные зависимости: `src/scripts/04-cinematic-title-measure.js` (calculateHeroPositions:L6-45).
- Ассеты HTML (включая srcdoc): прямая связь не установлена.
- Ассеты CSS-кандидатов: `src/assets/ba1d0151c4a99097231b3117.ttf`, `src/assets/4e5e9de6379dd5b4a7c3c00e.ttf`, `src/assets/598263b7f949a2056b572fdb.ttf`.
- Миниатюра галереи в shell: src/assets/5f147adf26083696057fc4f6.webp. Общие SVG glow и элементы shell сохраняются для всего показа.
- iframe: локальная связь не установлена.
- src/scripts/04-cinematic-title-measure.js: события resize (L49); таймеры не установлены; MutationObserver не установлены; сообщения не установлены.
- Общий message-handler: 01-main-player.js L113. Локальный postMessage: связь не установлена.

## 27. pdfSlide35

- HTML: `src/slides/27-pdfSlide35.html`; физическая секция 27.
- stage: `.98`; pdfDeckIndex=17. Внутренние шаги: нет подтверждённых внутренних шагов.
- CSS-кандидаты (порядок каскада сохранён):
  - `src/styles/01-base-global.css:1`
  - `src/styles/08-cover-fonts.css:1`
  - `src/styles/13-rag-reauthed-style.css:3-14,16-17,19,21-23,122,133`
  - `src/styles/14-cinematic-hero-titles-8-22.css:7-10,12-21,23-26,28-29,33-38`
  - `src/styles/17-rag-borderless-and-no-number.css:3-8`
  - `src/styles/30-sergei-overrides-oct12.css:3-5`
  - `src/styles/32-reliability-sharpness-fix.css:19`
  - `src/styles/33-instant-slide-content-fix.css:3-13`
  - `src/styles/34-final-scan-ready-layout.css:3-7`
  - `src/styles/37-storytelling-chapter-2026-10-13.css:3-16,18-27,44-47,53,55,75,89,122-123,139-140`
  - `src/styles/41-storytelling-motion-final.css:8-11,24-27,51-53,83-87,89-94`
- JS: общий контроллер и UI выше; локальные зависимости: не установлены.
- Ассеты HTML (включая srcdoc): прямая связь не установлена.
- Ассеты CSS-кандидатов: `src/assets/ba1d0151c4a99097231b3117.ttf`, `src/assets/4e5e9de6379dd5b4a7c3c00e.ttf`, `src/assets/598263b7f949a2056b572fdb.ttf`.
- Миниатюра галереи в shell: src/assets/58aede0d8151c10b4a1b8261.webp. Общие SVG glow и элементы shell сохраняются для всего показа.
- iframe: локальная связь не установлена.
- Общий message-handler: 01-main-player.js L113. Локальный postMessage: связь не установлена.

## 28. pdfSlide18

- HTML: `src/slides/28-pdfSlide18.html`; физическая секция 28.
- stage: `.98`; pdfDeckIndex=18. Внутренние шаги: нет подтверждённых внутренних шагов.
- CSS-кандидаты (порядок каскада сохранён):
  - `src/styles/01-base-global.css:1`
  - `src/styles/08-cover-fonts.css:1`
  - `src/styles/13-rag-reauthed-style.css:3-17,19,21-27,124,133,136-137`
  - `src/styles/14-cinematic-hero-titles-8-22.css:6-10,12-21,23-26,28-29,33-38`
  - `src/styles/17-rag-borderless-and-no-number.css:3-8`
  - `src/styles/21-rag-refined-original-theme-10-22.css:4-19,23-30,121-130,163`
  - `src/styles/30-sergei-overrides-oct12.css:3-5`
  - `src/styles/32-reliability-sharpness-fix.css:19`
  - `src/styles/33-instant-slide-content-fix.css:3-13`
  - `src/styles/34-final-scan-ready-layout.css:3-7`
  - `src/styles/37-storytelling-chapter-2026-10-13.css:3-27,44-47,53,55,75,82-85,139-140`
  - `src/styles/41-storytelling-motion-final.css:8-11,16-19,51-53,78-82,89-94`
- JS: общий контроллер и UI выше; локальные зависимости: `src/scripts/04-cinematic-title-measure.js` (calculateHeroPositions:L6-45).
- Ассеты HTML (включая srcdoc): прямая связь не установлена.
- Ассеты CSS-кандидатов: `src/assets/ba1d0151c4a99097231b3117.ttf`, `src/assets/4e5e9de6379dd5b4a7c3c00e.ttf`, `src/assets/598263b7f949a2056b572fdb.ttf`.
- Миниатюра галереи в shell: src/assets/319806292f5e844b5bfb1e04.webp. Общие SVG glow и элементы shell сохраняются для всего показа.
- iframe: локальная связь не установлена.
- src/scripts/04-cinematic-title-measure.js: события resize (L49); таймеры не установлены; MutationObserver не установлены; сообщения не установлены.
- Общий message-handler: 01-main-player.js L113. Локальный postMessage: связь не установлена.

## 29. pdfSlide19

- HTML: `src/slides/29-pdfSlide19.html`; физическая секция 29.
- stage: `.98`; pdfDeckIndex=19. Внутренние шаги: нет подтверждённых внутренних шагов.
- CSS-кандидаты (порядок каскада сохранён):
  - `src/styles/01-base-global.css:1`
  - `src/styles/08-cover-fonts.css:1`
  - `src/styles/13-rag-reauthed-style.css:3-17,19,21-23,126,133`
  - `src/styles/14-cinematic-hero-titles-8-22.css:6-10,12-21,23-26,28-29,33-38`
  - `src/styles/17-rag-borderless-and-no-number.css:3-8`
  - `src/styles/21-rag-refined-original-theme-10-22.css:4-19,23,132-136,163,180`
  - `src/styles/26-layout-audit-fixes-2026-10-12.css:76-84`
  - `src/styles/30-sergei-overrides-oct12.css:3-5`
  - `src/styles/32-reliability-sharpness-fix.css:19`
  - `src/styles/33-instant-slide-content-fix.css:3-13`
  - `src/styles/34-final-scan-ready-layout.css:3-7`
  - `src/styles/37-storytelling-chapter-2026-10-13.css:3-27,41-43,52,55,124-125,139-140`
  - `src/styles/41-storytelling-motion-final.css:16-19,48-50,78-82,89-94`
- JS: общий контроллер и UI выше; локальные зависимости: `src/scripts/04-cinematic-title-measure.js` (calculateHeroPositions:L6-45).
- Ассеты HTML (включая srcdoc): прямая связь не установлена.
- Ассеты CSS-кандидатов: `src/assets/ba1d0151c4a99097231b3117.ttf`, `src/assets/4e5e9de6379dd5b4a7c3c00e.ttf`, `src/assets/598263b7f949a2056b572fdb.ttf`.
- Миниатюра галереи в shell: src/assets/989ae12689711986b123db8d.webp. Общие SVG glow и элементы shell сохраняются для всего показа.
- iframe: локальная связь не установлена.
- src/scripts/04-cinematic-title-measure.js: события resize (L49); таймеры не установлены; MutationObserver не установлены; сообщения не установлены.
- Общий message-handler: 01-main-player.js L113. Локальный postMessage: связь не установлена.

## 30. pdfSlide36

- HTML: `src/slides/30-pdfSlide36.html`; физическая секция 30.
- stage: `.98`; pdfDeckIndex=20. Внутренние шаги: нет подтверждённых внутренних шагов.
- CSS-кандидаты (порядок каскада сохранён):
  - `src/styles/01-base-global.css:1`
  - `src/styles/08-cover-fonts.css:1`
  - `src/styles/13-rag-reauthed-style.css:3-14,16-17,19,21-24,27-29,126,133`
  - `src/styles/14-cinematic-hero-titles-8-22.css:7-10,12-21,23-26,28-29,33-38`
  - `src/styles/17-rag-borderless-and-no-number.css:3-8`
  - `src/styles/30-sergei-overrides-oct12.css:3-5`
  - `src/styles/32-reliability-sharpness-fix.css:19`
  - `src/styles/33-instant-slide-content-fix.css:3-13`
  - `src/styles/34-final-scan-ready-layout.css:3-7`
  - `src/styles/37-storytelling-chapter-2026-10-13.css:3-16,18-27,41-43,52,55-75,126-128,139-140`
  - `src/styles/40-storytelling-fix-tools-grid.css:2-13`
  - `src/styles/41-storytelling-motion-final.css:16-19,24-27,48-50,55-67,89-94`
- JS: общий контроллер и UI выше; локальные зависимости: не установлены.
- Ассеты HTML (включая srcdoc): прямая связь не установлена.
- Ассеты CSS-кандидатов: `src/assets/ba1d0151c4a99097231b3117.ttf`, `src/assets/4e5e9de6379dd5b4a7c3c00e.ttf`, `src/assets/598263b7f949a2056b572fdb.ttf`.
- Миниатюра галереи в shell: src/assets/aa97b735839a29541a0d8f8f.webp. Общие SVG glow и элементы shell сохраняются для всего показа.
- iframe: локальная связь не установлена.
- Общий message-handler: 01-main-player.js L113. Локальный postMessage: связь не установлена.

## 31. pdfSlide20

- HTML: `src/slides/31-pdfSlide20.html`; физическая секция 31.
- stage: `.98`; pdfDeckIndex=21. Внутренние шаги: нет подтверждённых внутренних шагов.
- CSS-кандидаты (порядок каскада сохранён):
  - `src/styles/01-base-global.css:1`
  - `src/styles/08-cover-fonts.css:1`
  - `src/styles/13-rag-reauthed-style.css:3-17,19,21-23,128,133`
  - `src/styles/14-cinematic-hero-titles-8-22.css:6-10,12-21,23-26,28-29,33-38`
  - `src/styles/17-rag-borderless-and-no-number.css:3-8`
  - `src/styles/21-rag-refined-original-theme-10-22.css:4-19,23,142-146,163`
  - `src/styles/30-sergei-overrides-oct12.css:3-5`
  - `src/styles/32-reliability-sharpness-fix.css:19`
  - `src/styles/33-instant-slide-content-fix.css:3-13`
  - `src/styles/34-final-scan-ready-layout.css:3-7`
  - `src/styles/37-storytelling-chapter-2026-10-13.css:3-27,35-37,49-50,55,90,129-130,139-140`
  - `src/styles/38-storytelling-layout-corrections.css:78-80`
  - `src/styles/41-storytelling-motion-final.css:16-23,42-44,78-82,89-94`
- JS: общий контроллер и UI выше; локальные зависимости: `src/scripts/04-cinematic-title-measure.js` (calculateHeroPositions:L6-45).
- Ассеты HTML (включая srcdoc): прямая связь не установлена.
- Ассеты CSS-кандидатов: `src/assets/ba1d0151c4a99097231b3117.ttf`, `src/assets/4e5e9de6379dd5b4a7c3c00e.ttf`, `src/assets/598263b7f949a2056b572fdb.ttf`.
- Миниатюра галереи в shell: src/assets/ab35eaaa02db6a4ff351c726.webp. Общие SVG glow и элементы shell сохраняются для всего показа.
- iframe: локальная связь не установлена.
- src/scripts/04-cinematic-title-measure.js: события resize (L49); таймеры не установлены; MutationObserver не установлены; сообщения не установлены.
- Общий message-handler: 01-main-player.js L113. Локальный postMessage: связь не установлена.

## 32. pdfSlide37

- HTML: `src/slides/32-pdfSlide37.html`; физическая секция 32.
- stage: `.98`; pdfDeckIndex=22. Внутренние шаги: нет подтверждённых внутренних шагов.
- CSS-кандидаты (порядок каскада сохранён):
  - `src/styles/01-base-global.css:1`
  - `src/styles/08-cover-fonts.css:1`
  - `src/styles/13-rag-reauthed-style.css:3-14,16-17,19,21-24,27-29,128,133`
  - `src/styles/14-cinematic-hero-titles-8-22.css:7-10,12-21,23-26,28-29,33-38`
  - `src/styles/17-rag-borderless-and-no-number.css:3-8`
  - `src/styles/30-sergei-overrides-oct12.css:3-5`
  - `src/styles/32-reliability-sharpness-fix.css:19`
  - `src/styles/33-instant-slide-content-fix.css:3-13`
  - `src/styles/34-final-scan-ready-layout.css:3-7`
  - `src/styles/37-storytelling-chapter-2026-10-13.css:3-16,18-27,55,75,91,131-133,139-140`
  - `src/styles/41-storytelling-motion-final.css:8-11,24-27,51-53,83-87,89-94`
- JS: общий контроллер и UI выше; локальные зависимости: не установлены.
- Ассеты HTML (включая srcdoc): прямая связь не установлена.
- Ассеты CSS-кандидатов: `src/assets/ba1d0151c4a99097231b3117.ttf`, `src/assets/4e5e9de6379dd5b4a7c3c00e.ttf`, `src/assets/598263b7f949a2056b572fdb.ttf`.
- Миниатюра галереи в shell: src/assets/7f8a016478da1ceeb0df301b.webp. Общие SVG glow и элементы shell сохраняются для всего показа.
- iframe: локальная связь не установлена.
- Общий message-handler: 01-main-player.js L113. Локальный postMessage: связь не установлена.

## 33. pdfSlide21

- HTML: `src/slides/33-pdfSlide21.html`; физическая секция 33.
- stage: `.98`; pdfDeckIndex=23. Внутренние шаги: нет подтверждённых внутренних шагов.
- CSS-кандидаты (порядок каскада сохранён):
  - `src/styles/01-base-global.css:1`
  - `src/styles/08-cover-fonts.css:1`
  - `src/styles/13-rag-reauthed-style.css:3-17,19,21-23,130,133`
  - `src/styles/14-cinematic-hero-titles-8-22.css:6-10,12-21,23-26,28-29,33-38`
  - `src/styles/17-rag-borderless-and-no-number.css:3-8`
  - `src/styles/21-rag-refined-original-theme-10-22.css:4-19,23,152-154,163`
  - `src/styles/30-sergei-overrides-oct12.css:3-5`
  - `src/styles/32-reliability-sharpness-fix.css:19`
  - `src/styles/33-instant-slide-content-fix.css:3-13`
  - `src/styles/34-final-scan-ready-layout.css:3-7`
  - `src/styles/37-storytelling-chapter-2026-10-13.css:3-27,32-34,49,55,139-140`
  - `src/styles/41-storytelling-motion-final.css:8-11,39-41,89-94`
- JS: общий контроллер и UI выше; локальные зависимости: `src/scripts/04-cinematic-title-measure.js` (calculateHeroPositions:L6-45).
- Ассеты HTML (включая srcdoc): прямая связь не установлена.
- Ассеты CSS-кандидатов: `src/assets/ba1d0151c4a99097231b3117.ttf`, `src/assets/4e5e9de6379dd5b4a7c3c00e.ttf`, `src/assets/598263b7f949a2056b572fdb.ttf`.
- Миниатюра галереи в shell: src/assets/9da27e3ee308c21e48f6d33c.webp. Общие SVG glow и элементы shell сохраняются для всего показа.
- iframe: локальная связь не установлена.
- src/scripts/04-cinematic-title-measure.js: события resize (L49); таймеры не установлены; MutationObserver не установлены; сообщения не установлены.
- Общий message-handler: 01-main-player.js L113. Локальный postMessage: связь не установлена.

## 34. pdfSlide22

- HTML: `src/slides/34-pdfSlide22.html`; физическая секция 34.
- stage: `.98`; pdfDeckIndex=24. Внутренние шаги: нет подтверждённых внутренних шагов.
- CSS-кандидаты (порядок каскада сохранён):
  - `src/styles/01-base-global.css:1`
  - `src/styles/08-cover-fonts.css:1`
  - `src/styles/13-rag-reauthed-style.css:3-17,19,21-27,132-133`
  - `src/styles/14-cinematic-hero-titles-8-22.css:6-10,12-21,23-26,28-29,33-38`
  - `src/styles/17-rag-borderless-and-no-number.css:3-8`
  - `src/styles/21-rag-refined-original-theme-10-22.css:4-19,23-30,156-163`
  - `src/styles/30-sergei-overrides-oct12.css:3-5`
  - `src/styles/32-reliability-sharpness-fix.css:19`
  - `src/styles/33-instant-slide-content-fix.css:3-13`
  - `src/styles/34-final-scan-ready-layout.css:3-7`
  - `src/styles/37-storytelling-chapter-2026-10-13.css:3-27,29-31,48,55-75,139-140`
  - `src/styles/41-storytelling-motion-final.css:4-7,24-27,36-38,55-67,89-94`
- JS: общий контроллер и UI выше; локальные зависимости: `src/scripts/04-cinematic-title-measure.js` (calculateHeroPositions:L6-45).
- Ассеты HTML (включая srcdoc): прямая связь не установлена.
- Ассеты CSS-кандидатов: `src/assets/ba1d0151c4a99097231b3117.ttf`, `src/assets/4e5e9de6379dd5b4a7c3c00e.ttf`, `src/assets/598263b7f949a2056b572fdb.ttf`.
- Миниатюра галереи в shell: src/assets/12c45f8d426efd0ec3aca2d9.webp. Общие SVG glow и элементы shell сохраняются для всего показа.
- iframe: локальная связь не установлена.
- src/scripts/04-cinematic-title-measure.js: события resize (L49); таймеры не установлены; MutationObserver не установлены; сообщения не установлены.
- Общий message-handler: 01-main-player.js L113. Локальный postMessage: связь не установлена.

## 35. pdfSlide23

- HTML: `src/slides/35-pdfSlide23.html`; физическая секция 35.
- stage: `.98`; pdfDeckIndex=25. Внутренние шаги: нет подтверждённых внутренних шагов.
- CSS-кандидаты (порядок каскада сохранён):
  - `src/styles/01-base-global.css:1`
  - `src/styles/08-cover-fonts.css:1`
  - `src/styles/13-rag-reauthed-style.css:3-14,16-17,19,21-23,133`
  - `src/styles/14-cinematic-hero-titles-8-22.css:7-10,12-21,23-26,28-29,33-38`
  - `src/styles/17-rag-borderless-and-no-number.css:3-8`
  - `src/styles/28-konspektus-practice-style.css:3-6,8-11,19-26,31-35,63`
  - `src/styles/30-sergei-overrides-oct12.css:3-5`
  - `src/styles/32-reliability-sharpness-fix.css:19`
  - `src/styles/33-instant-slide-content-fix.css:3-13`
  - `src/styles/34-final-scan-ready-layout.css:3-7`
  - `src/styles/37-storytelling-chapter-2026-10-13.css:3-16,18-27,35-37,50,55,135-137,139-140`
  - `src/styles/41-storytelling-motion-final.css:20-23,42-44,89-94`
- JS: общий контроллер и UI выше; локальные зависимости: не установлены.
- Ассеты HTML (включая srcdoc): `src/assets/d602c868548a9537983390d2.jpg` (image/jpeg).
- Ассеты CSS-кандидатов: `src/assets/ba1d0151c4a99097231b3117.ttf`, `src/assets/4e5e9de6379dd5b4a7c3c00e.ttf`, `src/assets/598263b7f949a2056b572fdb.ttf`.
- Миниатюра галереи в shell: src/assets/06c2ec9ebc21e42157c2f1ca.webp. Общие SVG glow и элементы shell сохраняются для всего показа.
- iframe: локальная связь не установлена.
- Общий message-handler: 01-main-player.js L113. Локальный postMessage: связь не установлена.

## 36. pdfSlide24

- HTML: `src/slides/36-pdfSlide24.html`; физическая секция 36.
- stage: `.98`; pdfDeckIndex=26. Внутренние шаги: нет подтверждённых внутренних шагов.
- CSS-кандидаты (порядок каскада сохранён):
  - `src/styles/01-base-global.css:1`
  - `src/styles/08-cover-fonts.css:1`
  - `src/styles/13-rag-reauthed-style.css:3-14,16-17,19,21-23,133`
  - `src/styles/14-cinematic-hero-titles-8-22.css:7-10,12-21,23-26,28-29,33-38`
  - `src/styles/17-rag-borderless-and-no-number.css:3-8`
  - `src/styles/28-konspektus-practice-style.css:3-6,8-10,12-16,37-41,63`
  - `src/styles/30-sergei-overrides-oct12.css:3-5`
  - `src/styles/32-reliability-sharpness-fix.css:19`
  - `src/styles/33-instant-slide-content-fix.css:3-13`
  - `src/styles/34-final-scan-ready-layout.css:3-7`
  - `src/styles/37-storytelling-chapter-2026-10-13.css:3-16,18-27,35-37,50,55,135-137,139-140`
  - `src/styles/41-storytelling-motion-final.css:20-23,42-44,89-94`
- JS: общий контроллер и UI выше; локальные зависимости: не установлены.
- Ассеты HTML (включая srcdoc): `src/assets/f1013e2aae13c3d21cba21e9.jpg` (image/jpeg).
- Ассеты CSS-кандидатов: `src/assets/ba1d0151c4a99097231b3117.ttf`, `src/assets/4e5e9de6379dd5b4a7c3c00e.ttf`, `src/assets/598263b7f949a2056b572fdb.ttf`.
- Миниатюра галереи в shell: src/assets/eda7411d1c4ce7a1e13f0bf2.webp. Общие SVG glow и элементы shell сохраняются для всего показа.
- iframe: локальная связь не установлена.
- Общий message-handler: 01-main-player.js L113. Локальный postMessage: связь не установлена.

## 37. pdfSlide25

- HTML: `src/slides/37-pdfSlide25.html`; физическая секция 37.
- stage: `.98`; pdfDeckIndex=27. Внутренние шаги: нет подтверждённых внутренних шагов.
- CSS-кандидаты (порядок каскада сохранён):
  - `src/styles/01-base-global.css:1`
  - `src/styles/08-cover-fonts.css:1`
  - `src/styles/13-rag-reauthed-style.css:3-14,16-17,19,21-23,133`
  - `src/styles/14-cinematic-hero-titles-8-22.css:7-10,12-21,23-26,28-29,33-38`
  - `src/styles/17-rag-borderless-and-no-number.css:3-8`
  - `src/styles/28-konspektus-practice-style.css:3-6,8-10,12-16,43-47,63`
  - `src/styles/30-sergei-overrides-oct12.css:3-5`
  - `src/styles/32-reliability-sharpness-fix.css:19`
  - `src/styles/33-instant-slide-content-fix.css:3-13`
  - `src/styles/34-final-scan-ready-layout.css:3-7`
  - `src/styles/37-storytelling-chapter-2026-10-13.css:3-16,18-27,35-37,50,55,135-137,139-140`
  - `src/styles/38-storytelling-layout-corrections.css:78-80`
  - `src/styles/41-storytelling-motion-final.css:20-23,42-44,89-94`
- JS: общий контроллер и UI выше; локальные зависимости: не установлены.
- Ассеты HTML (включая srcdoc): `src/assets/82f94bbe7c07c6625632c9d0.jpg` (image/jpeg).
- Ассеты CSS-кандидатов: `src/assets/ba1d0151c4a99097231b3117.ttf`, `src/assets/4e5e9de6379dd5b4a7c3c00e.ttf`, `src/assets/598263b7f949a2056b572fdb.ttf`.
- Миниатюра галереи в shell: src/assets/2699ee4fc1079d6c0741d0b6.webp. Общие SVG glow и элементы shell сохраняются для всего показа.
- iframe: локальная связь не установлена.
- Общий message-handler: 01-main-player.js L113. Локальный postMessage: связь не установлена.

## 38. pdfSlide26

- HTML: `src/slides/38-pdfSlide26.html`; физическая секция 38.
- stage: `.98`; pdfDeckIndex=28. Внутренние шаги: нет подтверждённых внутренних шагов.
- CSS-кандидаты (порядок каскада сохранён):
  - `src/styles/01-base-global.css:1`
  - `src/styles/08-cover-fonts.css:1`
  - `src/styles/13-rag-reauthed-style.css:3-14,16-17,19,21-23,133`
  - `src/styles/14-cinematic-hero-titles-8-22.css:7-10,12-21,23-26,28-29,33-38`
  - `src/styles/17-rag-borderless-and-no-number.css:3-8`
  - `src/styles/28-konspektus-practice-style.css:3-6,13-14,49-61,63`
  - `src/styles/30-sergei-overrides-oct12.css:3-5,8`
  - `src/styles/32-reliability-sharpness-fix.css:19`
  - `src/styles/33-instant-slide-content-fix.css:3-13`
  - `src/styles/34-final-scan-ready-layout.css:3-7`
  - `src/styles/37-storytelling-chapter-2026-10-13.css:3-16,18-27,29-31,48,55,135-137,139-140`
  - `src/styles/38-storytelling-layout-corrections.css:81`
  - `src/styles/41-storytelling-motion-final.css:4-7,36-38,89-94`
  - `src/styles/43-slide-visual-polish.css:7-23`
- JS: общий контроллер и UI выше; локальные зависимости: не установлены.
- Ассеты HTML (включая srcdoc): `src/assets/82f94bbe7c07c6625632c9d0.jpg` (image/jpeg), `src/assets/82ae04ca1bc68604880e15d2.png` (image/png).
- Ассеты CSS-кандидатов: `src/assets/ba1d0151c4a99097231b3117.ttf`, `src/assets/4e5e9de6379dd5b4a7c3c00e.ttf`, `src/assets/598263b7f949a2056b572fdb.ttf`.
- Миниатюра галереи в shell: src/assets/04b1eff673b72991e19ecf01.webp. Общие SVG glow и элементы shell сохраняются для всего показа.
- iframe: локальная связь не установлена.
- Общий message-handler: 01-main-player.js L113. Локальный postMessage: связь не установлена.

## 39. pdfSlide28

- HTML: `src/slides/39-pdfSlide28.html`; физическая секция 39.
- stage: `.98`; pdfDeckIndex=29. Внутренние шаги: нет подтверждённых внутренних шагов.
- CSS-кандидаты (порядок каскада сохранён):
  - `src/styles/01-base-global.css:1`
  - `src/styles/08-cover-fonts.css:1`
  - `src/styles/13-rag-reauthed-style.css:3-13,19,133`
  - `src/styles/14-cinematic-hero-titles-8-22.css:10,21,23,28-29,33-38`
  - `src/styles/17-rag-borderless-and-no-number.css:3-8`
  - `src/styles/28-konspektus-practice-style.css:3,6,63`
  - `src/styles/29-semenov-29-closing-style.css:3-4,8`
  - `src/styles/30-sergei-overrides-oct12.css:4,8,11-17`
  - `src/styles/33-instant-slide-content-fix.css:3-8`
  - `src/styles/34-final-scan-ready-layout.css:3-7`
  - `src/styles/36-speaker-qr-mirror-konspektus.css:3-26,28-31`
  - `src/styles/43-slide-visual-polish.css:24-31`
- JS: общий контроллер и UI выше; локальные зависимости: не установлены.
- Ассеты HTML (включая srcdoc): `src/assets/01045651a18b7305919f0c8a.webp` (image/webp), `src/assets/a66cb598a15fd1c352313084.png` (image/png).
- Ассеты CSS-кандидатов: `src/assets/ba1d0151c4a99097231b3117.ttf`, `src/assets/4e5e9de6379dd5b4a7c3c00e.ttf`, `src/assets/598263b7f949a2056b572fdb.ttf`.
- Миниатюра галереи в shell: src/assets/356ecbc98246b86f6a72524c.webp. Общие SVG glow и элементы shell сохраняются для всего показа.
- iframe: локальная связь не установлена.
- Общий message-handler: 01-main-player.js L113. Локальный postMessage: связь не установлена.
