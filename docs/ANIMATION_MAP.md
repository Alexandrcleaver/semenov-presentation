> Обновление 2026-10-14: вставлен новый слайд 6 `#agentsIntroSlide`, `src/slides/06-agentsIntroSlide.html`, stage `.925`, CSS `11-figma-slides34-style.css`, переходы в `01-main-player.js`. Пять ассетов `agents-*` в manifest. Прежние номера 6–39 в таблицах ниже сдвинуты на +1; актуальный порядок в `src/deck_order.json`.

# Карта анимаций и переходов

Генератор: `node scripts/generate-maps.mjs`. Логика движка не изменена. Ссылки L — строки исходника; длинная L113 содержит несколько функций, поэтому искать также по имени.

## Основной маршрут

01-main-player.js: advance/back L113; __deckJump L115–159. Ввод: Enter/Space/ArrowRight/N вперёд; P, левый край click/touch и prev назад. ArrowLeft/Backspace перехватываются UI (06-presenter-ui-script.js). message next/prev/jump поддерживаются глобально.

- 1 cover (0) → 2 figmaSlide2 (.5): advance/back; ветви stage L113.
- 2 figmaSlide2 (.5) → 3 figmaSlide3Extras (.75): advance/back; ветви stage L113.
- 3 figmaSlide3Extras (.75) → 4 figmaSlide5 (.85): advance/back; ветви stage L113.
- 4 figmaSlide5 (.85) → 5 figmaSlide4 (.9): advance/back; ветви stage L113.
- 5 figmaSlide4 (.9) → 6 figmaSlide6 (.95): advance/back; ветви stage L113.
- 6 figmaSlide6 (.95) → 7 architectureRagSlide (.96): advance/back; ветви stage L113.
- 7 architectureRagSlide (.96) → 8 aistEvolutionSlide (.965): advance/back; ветви stage L113.
- 8 aistEvolutionSlide (.965) → 9 figmaSlide7 (.97): advance/back; ветви stage L113.
- 9 figmaSlide7 (.97) → 10 pdfSlide8 (.98, index 0): advance/back; ветви stage L113.
- 10 pdfSlide8 (.98, index 0) → 11 pdfSlide27 (.98, index 1): advance/back; showPdfSlideByIndex L102–112.
- 11 pdfSlide27 (.98, index 1) → 12 pdfSlide9 (.98, index 2): advance/back; showPdfSlideByIndex L102–112.
- 12 pdfSlide9 (.98, index 2) → 13 pdfSlide29 (.98, index 3): advance/back; showPdfSlideByIndex L102–112.
- 13 pdfSlide29 (.98, index 3) → 14 pdfSlide10 (.98, index 4): advance/back; showPdfSlideByIndex L102–112.
- 14 pdfSlide10 (.98, index 4) → 15 pdfSlide11 (.98, index 5): advance/back; showPdfSlideByIndex L102–112.
- 15 pdfSlide11 (.98, index 5) → 16 pdfSlide12 (.98, index 6): advance/back; showPdfSlideByIndex L102–112.
- 16 pdfSlide12 (.98, index 6) → 17 pdfSlide30 (.98, index 7): advance/back; showPdfSlideByIndex L102–112.
- 17 pdfSlide30 (.98, index 7) → 18 pdfSlide13 (.98, index 8): advance/back; showPdfSlideByIndex L102–112.
- 18 pdfSlide13 (.98, index 8) → 19 pdfSlide31 (.98, index 9): advance/back; showPdfSlideByIndex L102–112.
- 19 pdfSlide31 (.98, index 9) → 20 pdfSlide32 (.98, index 10): advance/back; showPdfSlideByIndex L102–112.
- 20 pdfSlide32 (.98, index 10) → 21 pdfSlide14 (.98, index 11): advance/back; showPdfSlideByIndex L102–112.
- 21 pdfSlide14 (.98, index 11) → 22 pdfSlide15 (.98, index 12): advance/back; showPdfSlideByIndex L102–112.
- 22 pdfSlide15 (.98, index 12) → 23 pdfSlide33 (.98, index 13): advance/back; showPdfSlideByIndex L102–112.
- 23 pdfSlide33 (.98, index 13) → 24 pdfSlide16 (.98, index 14): advance/back; showPdfSlideByIndex L102–112.
- 24 pdfSlide16 (.98, index 14) → 25 pdfSlide34 (.98, index 15): advance/back; showPdfSlideByIndex L102–112.
- 25 pdfSlide34 (.98, index 15) → 26 pdfSlide17 (.98, index 16): advance/back; showPdfSlideByIndex L102–112.
- 26 pdfSlide17 (.98, index 16) → 27 pdfSlide35 (.98, index 17): advance/back; showPdfSlideByIndex L102–112.
- 27 pdfSlide35 (.98, index 17) → 28 pdfSlide18 (.98, index 18): advance/back; showPdfSlideByIndex L102–112.
- 28 pdfSlide18 (.98, index 18) → 29 pdfSlide19 (.98, index 19): advance/back; showPdfSlideByIndex L102–112.
- 29 pdfSlide19 (.98, index 19) → 30 pdfSlide36 (.98, index 20): advance/back; showPdfSlideByIndex L102–112.
- 30 pdfSlide36 (.98, index 20) → 31 pdfSlide20 (.98, index 21): advance/back; showPdfSlideByIndex L102–112.
- 31 pdfSlide20 (.98, index 21) → 32 pdfSlide37 (.98, index 22): advance/back; showPdfSlideByIndex L102–112.
- 32 pdfSlide37 (.98, index 22) → 33 pdfSlide21 (.98, index 23): advance/back; showPdfSlideByIndex L102–112.
- 33 pdfSlide21 (.98, index 23) → 34 pdfSlide22 (.98, index 24): advance/back; showPdfSlideByIndex L102–112.
- 34 pdfSlide22 (.98, index 24) → 35 pdfSlide23 (.98, index 25): advance/back; showPdfSlideByIndex L102–112.
- 35 pdfSlide23 (.98, index 25) → 36 pdfSlide24 (.98, index 26): advance/back; showPdfSlideByIndex L102–112.
- 36 pdfSlide24 (.98, index 26) → 37 pdfSlide25 (.98, index 27): advance/back; showPdfSlideByIndex L102–112.
- 37 pdfSlide25 (.98, index 27) → 38 pdfSlide26 (.98, index 28): advance/back; showPdfSlideByIndex L102–112.
- 38 pdfSlide26 (.98, index 28) → 39 pdfSlide28 (.98, index 29): advance/back; showPdfSlideByIndex L102–112.

## Подтверждённые тайминги и внутренние шаги

- 1→2: cover-off, requestAnimationFrame → show + playBentoAssembly; блокировка coverLeaving 4650 мс; assemble снимается спустя 4650 мс (L6).
- 2→3: focus-docs; show надстройки спустя 220 мс, блокировка 1080 мс.
- 3→4, 4→5: show/out и requestAnimationFrame; блокировка 760 мс.
- 5→6, 6→7: блокировка 900 мс. Timeline: 9 шагов 0..8, переменные CSS progress/runner/pan, revealed/active; playAgentTimeline сбрасывает в 0, __deckJump в 6 устанавливает 8.
- 7→8, 8→9, 9→10: блокировка 760 мс. Архитектура: setupSchemePieces L1–6 клонирует scheme-base в 12 фрагментов, delay = порядок ×82 мс; запускается классом show.
- Эволюция: showAistStep L73–91; шаги 0..6, is-active/aria-hidden, progress. ev2ActivateScreens L54–72 подставляет data-src один раз; отложенный вызов 220 мс с проверкой текущего шага. Back из 9 возвращает последний шаг эволюции.
- PDF-слайды 10–39: showPdfSlideByIndex L102–112 перезапускает через offsetWidth; старый show становится out, out удаляется спустя 560 мс. Вперёд блокируется 620 мс. После 39 advance возвращается.
- Слайд 10: __v8Advance/__v8Back обрабатывают 0..10 прежде смены PDF-слайда. onEnter начинает с 0; onLeave чистит классы/чат и шаг. Возврат на compose использует задержку 150 мс с проверкой шага/видимости.

## Глобальные эффекты и опасные связи

- fit масштабирует body 1920×1080; все координаты и измерения зависят от него.
- advance включает glow.boost на 700 мс; debug также меняет typing/boost/fade. Глобальные message glowTypingStart/End меняют glow. CSS glow распределён между 01–06.
- Слайды 2 и 3 показываются совместно. MutationObserver видео слайда 2 следит за любым изменением class, поэтому focus-docs/assemble могут повторно запускать sync и currentTime=0.
- __deckJump очищает timer/fadeTimer/bentoAssemblyTimer/boostTimer и классы ряда слайдов; не все анонимные таймеры отменяются. Проверка повторного входа обязательна.
- Числа stage дублируются в контроллере, presenter UI и debug; порядок PDF_SLIDE_SEQUENCE дублируется в deck_order.json.
- Исторические stage 1..11 и ссылки на incoming/final/description/chatSlide присутствуют в контроллере, но не являются отдельными пунктами текущего маршрута 39 слайдов. Их удаление не входит в эту работу.
- CSS 33 заставляет ee-content/ee-reveal быть видимыми, CSS 41 добавляет движение translate/clip-path с !important; удаление старых правил меняет результат каскада.
- document.fonts.ready/resize запускают измерение hero-заголовков (04); CSS может переопределять вычисленные эффекты. Не считать этот runtime неиспользуемым без проверки.
- Галерея прыгает через __deckJump и не воспроизводит все переходы advance. Presenter refresh каждые 180 мс; debug обновляется каждые 100 мс.

## Локальные runtime: запуск, остановка, события, таймеры

### src/scripts/01-main-player.js

Функции: fit:L1-1, setupSchemePieces:L1-6, playBentoAssembly:L6-6, setAgentTimelineStep:L18-31, playAgentTimeline:L32-32, type:L32-50, ev2ActivateScreens:L54-72, showAistStep:L73-91, hidePdfSlides:L101-101, showPdfSlideByIndex:L102-112, back:L113-113, advance:L113-113, window.__aistAdvance:L92-92, window.__aistBack:L93-93, onclick:L113-113, window.__deckJump:L115-159.

События: resize (L1), onclick (L113), message (L113), keydown (L113), click (L113), touchend (L113). Таймеры: clearTimeout (L6), setTimeout (L6), clearTimeout (L35), requestAnimationFrame (L44), setTimeout (L45), setTimeout (L48), setTimeout (L90), setTimeout (L109), clearTimeout (L113), setTimeout (L113), requestAnimationFrame (L113), clearTimeout (L117), clearTimeout (L118). MutationObserver: не установлены. postMessage/type: postMessage( (L113), reset (L113), resetDetail (L113), backOutroTyping (L113), backFanout (L113), backCompose (L113), startTyping (L113), start (L113), detail (L113), compose (L113), fanout (L113), outroTyping (L113), postMessage( (L146), startTyping (L146), postMessage( (L147), start (L147), postMessage( (L148), detail (L148), postMessage( (L149), startTyping (L149), postMessage( (L150), start (L150), postMessage( (L151), compose (L151), postMessage( (L152), fanout (L152), postMessage( (L154), outroTyping (L154).

### src/scripts/02-stage-debug.js

Функции: onclick:L1-1, onclick:L1-1, onclick:L1-1.

События: onclick (L1). Таймеры: setTimeout (L1), setInterval (L1). MutationObserver: не установлены. postMessage/type: не установлены.

### src/scripts/03-figma-slide2-video-control.js

Функции: sync:L2-2.

События: не установлены. Таймеры: не установлены. MutationObserver: MutationObserver (L2). postMessage/type: не установлены.

### src/scripts/04-cinematic-title-measure.js

Функции: calculateHeroPositions:L6-45.

События: resize (L49). Таймеры: не установлены. MutationObserver: не установлены. postMessage/type: не установлены.

### src/scripts/05-v8-fullsite-parent-runtime.js

Функции: send:L17-17, clearClasses:L18-18, clearChat:L19-19, showStep:L20-45, onEnter:L46-46, onLeave:L47-47, replayFighter:L8-8, window.__v8Advance:L48-57, window.__v8Back:L58-61.

События: load (L9). Таймеры: setTimeout (L40). MutationObserver: MutationObserver (L64). postMessage/type: postMessage( (L8), replay-fighter (L8), postMessage( (L17).

### src/scripts/06-presenter-ui-script.js

Функции: refresh:L19-23, toggle:L24-24, setDebugOpen:L54-59, toggleDebug:L60-60, updateFullscreen:L61-67, toggleFullscreen:L68-79, getCurrent:L11-18.

События: click (L8), touchend (L9), click (L25), click (L26), click (L27), touchend (L34), pointerdown (L34), keydown (L35), deck-slide-jump (L47), click (L81), touchend (L82), pointerdown (L83), click (L85), click (L86), fullscreenchange (L87), fullscreenerror (L88), keydown (L89). Таймеры: setInterval (L101). MutationObserver: не установлены. postMessage/type: не установлены.

### src/scripts/07-s7-figma-movie-runtime.js

Функции: setReady:L13-16, ensureSource:L17-24, ensurePlaying:L25-30, refresh:L31-40, preload:L43-43.

События: loadeddata (L47), canplay (L48), ended (L49), stalled (L50), error (L51), visibilitychange (L52). Таймеры: не установлены. MutationObserver: MutationObserver (L44), MutationObserver (L53). postMessage/type: не установлены.

### src/scripts/08-konspektus-link-controls.js

Функции: именованные не установлены.

События: не установлены. Таймеры: не установлены. MutationObserver: не установлены. postMessage/type: не установлены.

### src/scripts/09-semenov29-link-controls.js

Функции: именованные не установлены.

События: не установлены. Таймеры: не установлены. MutationObserver: не установлены. postMessage/type: не установлены.

### src/scripts/10-coverBookVideoLifecycle.js

Функции: sync:L5-11.

События: pageshow (L13), visibilitychange (L14). Таймеры: не установлены. MutationObserver: MutationObserver (L12). postMessage/type: не установлены.

## Видео и iframe

- 03: class observer → sync; назначает источник из data-src, currentTime=0/play при show, pause при скрытии.
- 07: refresh отслеживает show; ensureSource/load, ensurePlaying/play, pause при уходе. loadeddata/canplay/ended/stalled/error; poster до готовности. Предзагрузка от aistEvolutionSlide при шаге ≥3; visibilitychange возобновляет.
- 10: body.cover-off observer → sync; pause при скрытии, currentTime=0 при повторном входе; pageshow и visibilitychange.
- 05: observer show → onEnter/onLeave; fighter load → replay-fighter; iframe чата получает v8clean/reset/start/compose/v8forget. Смена слайда и сброс связаны с iframe готовностью и внутренним состоянием.

### iframe v8FighterIntro

Изолированная логика в src/slides/10-pdfSlide8.html L8-233. Ниже строки относительно декодированного srcdoc.

События: resize (L196), orientationchange (L197), fullscreenchange (L198), click (L199), keydown (L200), message (L213).

Таймеры: requestAnimationFrame (L188), requestAnimationFrame (L209), requestAnimationFrame (L221).

Сообщения: не установлены.

### iframe v8FullChatWebsite

Изолированная логика в src/slides/10-pdfSlide8.html L237-893. Ниже строки относительно декодированного srcdoc.

События: message (L541), message (L626), resize (L654).

Таймеры: setTimeout (L274), setTimeout (L277), setTimeout (L336), requestAnimationFrame (L339), requestAnimationFrame (L341), clearTimeout (L401), setTimeout (L420), setTimeout (L423), setTimeout (L430), setTimeout (L431), setTimeout (L437), setTimeout (L454), setTimeout (L461), setTimeout (L465), setTimeout (L489), setTimeout (L491), setTimeout (L515), setTimeout (L538), setTimeout (L594), requestAnimationFrame (L652).

Сообщения: postMessage( (L445), codeStarted (L445), postMessage( (L531), chatStarted (L531), postMessage( (L537), chatStarted (L537), start (L543), compose (L544), fanout (L545), outroTyping (L546), backCompose (L547), backFanout (L548), backOutroTyping (L549), reset (L550), postMessage( (L602), reset (L602).

## CSS-анимации

@keyframes и правила animation/transition, включая длительности, индексированы в CSS_MAP.md. Для точечной правки искать правило запуска и одноимённый keyframes; последующий каскад и prefers-reduced-motion обязателен к проверке.

- src/styles/01-base-global.css:1-1: `.title`; transition: transform 1400ms cubic-bezier(.33,1,.68,1),opacity 1400ms
- src/styles/01-base-global.css:1-1: `.cursor`; animation: blink .8s steps(1) infinite
- src/styles/01-base-global.css:1-1: `.glow`; animation: breathe 2s ease-in-out infinite,glowDrift 12s ease-in-out infinite; transition: all 2200ms cubic-bezier(.33,1,.68,1)
- src/styles/01-base-global.css:1-1: `.glow.typing`; transition: filter 1400ms ease-in-out
- src/styles/01-base-global.css:1-1: `.glow:before`; transition: opacity 1200ms ease,transform 1200ms ease
- src/styles/01-base-global.css:1-1: `.glow:after`; animation: beam 6s ease-in-out infinite
- src/styles/01-base-global.css:1-1: `.glow.typing:after`; animation-duration: 3.2s
- src/styles/01-base-global.css:1-1: `@keyframes beam`; определение keyframes
- src/styles/01-base-global.css:1-1: `.glow.boost`; transition: opacity 1400ms ease-in-out,filter 1400ms ease-in-out,transform 1400ms cubic-bezier(.33,1,.68,1)
- src/styles/01-base-global.css:1-1: `.scheme-base`; transition: opacity 360ms ease 2.15s,filter 520ms ease 2.15s,transform 520ms cubic-bezier(.22,1,.36,1) 2.15s
- src/styles/01-base-global.css:1-1: `.scheme.show .scheme-piece`; animation: schemePieceIn 1050ms cubic-bezier(.16,1,.3,1) var(--delay) forwards
- src/styles/01-base-global.css:1-1: `.scheme.show .scheme-pieces`; animation: schemePiecesFade 360ms ease 2.2s forwards
- src/styles/01-base-global.css:1-1: `@keyframes schemePieceIn`; определение keyframes
- src/styles/01-base-global.css:1-1: `@keyframes schemePiecesFade`; определение keyframes
- src/styles/01-base-global.css:1-1: `@keyframes glowDrift`; определение keyframes
- src/styles/01-base-global.css:1-1: `@keyframes glowDrift`; определение keyframes
- src/styles/01-base-global.css:1-1: `@keyframes breathe-strong`; определение keyframes
- src/styles/01-base-global.css:1-1: `.glow.fade`; transition: opacity 2600ms ease-in-out,filter 2600ms ease-in-out
- src/styles/01-base-global.css:1-1: `@keyframes blink`; определение keyframes
- src/styles/01-base-global.css:1-1: `.next`; transition: transform 1100ms cubic-bezier(.22,1,.36,1)
- src/styles/01-base-global.css:1-1: `#final`; transition: opacity 1000ms cubic-bezier(.22,1,.36,1),filter 1150ms ease,transform 1200ms cubic-bezier(.22,1,.36,1)
- src/styles/01-base-global.css:1-1: `.blur-out`; transition: opacity 900ms ease,filter 1050ms ease
- src/styles/01-base-global.css:1-1: `#scene.out`; transition: transform 1100ms cubic-bezier(.22,1,.36,1)
- src/styles/01-base-global.css:3-3: `.typeChar.run`; animation: textCharIn .34s cubic-bezier(.22,1,.36,1) forwards
- src/styles/01-base-global.css:5-5: `@keyframes textCharIn`; определение keyframes
- src/styles/01-base-global.css:7-7: `#figmaSlide6.manual .s6-head,#figmaSlide6.manual .s6-range,#figmaSlide6.manual .s6-start`; transition: opacity .55s ease,transform .7s cubic-bezier(.16,1,.3,1),filter .55s ease
- src/styles/01-base-global.css:8-8: `#figmaSlide6.manual .s6-era`; transition: opacity .45s ease
- src/styles/01-base-global.css:10-10: `#figmaSlide6.manual .s6-track`; transition: transform 1100ms cubic-bezier(.22,1,.36,1)
- src/styles/01-base-global.css:11-11: `#figmaSlide6.manual .s6-line-fill`; transition: transform 950ms cubic-bezier(.22,1,.36,1)
- src/styles/01-base-global.css:12-12: `#figmaSlide6.manual .s6-runner`; transition: transform 950ms cubic-bezier(.22,1,.36,1),opacity .45s ease
- src/styles/01-base-global.css:13-13: `#figmaSlide6.manual .s6-node.revealed`; transition: opacity .7s ease,transform .82s cubic-bezier(.16,1,.3,1),filter .7s ease
- src/styles/01-base-global.css:16-16: `#figmaSlide6.manual .s6-final.visible`; transition: opacity .65s ease,transform .7s cubic-bezier(.16,1,.3,1)
- src/styles/01-base-global.css:22-22: `#figmaSlide7`; transition: opacity 680ms ease,transform 900ms cubic-bezier(.22,1,.36,1),filter 760ms ease,visibility 0s linear 900ms
- src/styles/01-base-global.css:23-23: `#figmaSlide7.show`; transition-delay: 0s
- src/styles/01-base-global.css:50-50: `#figmaSlide7.show .s7-title`; animation: s7In .75s cubic-bezier(.16,1,.3,1) .12s forwards
- src/styles/01-base-global.css:51-51: `#figmaSlide7.show .s7-sub`; animation: s7In .75s cubic-bezier(.16,1,.3,1) .34s forwards
- src/styles/01-base-global.css:52-52: `#figmaSlide7.show .s7-panel`; animation: s7Panel .9s cubic-bezier(.16,1,.3,1) .62s forwards
- src/styles/01-base-global.css:53-53: `#figmaSlide7.show .s7-panel-new`; animation-delay: .88s
- src/styles/01-base-global.css:54-54: `#figmaSlide7.show .wf-step`; animation: s7Step .58s cubic-bezier(.16,1,.3,1) forwards
- src/styles/01-base-global.css:55-55: `#figmaSlide7.show .wf-step:nth-child(1)`; animation-delay: 1.2s
- src/styles/01-base-global.css:55-55: `#figmaSlide7.show .wf-step:nth-child(2)`; animation-delay: 1.45s
- src/styles/01-base-global.css:55-55: `#figmaSlide7.show .wf-step:nth-child(3)`; animation-delay: 1.7s
- src/styles/01-base-global.css:55-55: `#figmaSlide7.show .wf-step:nth-child(4)`; animation-delay: 1.95s
- src/styles/01-base-global.css:56-56: `#figmaSlide7.show .wf-lag`; animation: s7Lag .92s cubic-bezier(.16,1,.3,1) 2.28s forwards
- src/styles/01-base-global.css:57-57: `#figmaSlide7.show .wf-lag:after`; animation: s7Label .45s ease 2.85s forwards
- src/styles/01-base-global.css:58-58: `#figmaSlide7.show .wf-agent`; animation: s7InX .65s cubic-bezier(.16,1,.3,1) 3.05s forwards
- src/styles/01-base-global.css:59-59: `#figmaSlide7.show .s7-loop`; animation: s7Loop .95s cubic-bezier(.16,1,.3,1) 1.25s forwards
- src/styles/01-base-global.css:60-60: `#figmaSlide7.show .loop-dot`; animation: s7Dot 3.2s cubic-bezier(.55,0,.2,1) 1.65s forwards
- src/styles/01-base-global.css:61-61: `#figmaSlide7.show .loop-card`; animation: s7Card .55s cubic-bezier(.16,1,.3,1) forwards
- src/styles/01-base-global.css:62-62: `#figmaSlide7.show .lc1`; animation-delay: 1.55s
- src/styles/01-base-global.css:62-62: `#figmaSlide7.show .lc2`; animation-delay: 1.85s
- src/styles/01-base-global.css:62-62: `#figmaSlide7.show .lc3`; animation-delay: 2.15s
- src/styles/01-base-global.css:62-62: `#figmaSlide7.show .lc4`; animation-delay: 2.45s
- src/styles/01-base-global.css:62-62: `#figmaSlide7.show .lc5`; animation-delay: 2.75s
- src/styles/01-base-global.css:63-63: `#figmaSlide7.show .s7-principle`; animation: s7In .68s cubic-bezier(.16,1,.3,1) 3.45s forwards
- src/styles/01-base-global.css:64-64: `@keyframes s7In`; определение keyframes
- src/styles/01-base-global.css:65-65: `@keyframes s7InX`; определение keyframes
- src/styles/01-base-global.css:66-66: `@keyframes s7Panel`; определение keyframes
- src/styles/01-base-global.css:67-67: `@keyframes s7Step`; определение keyframes
- src/styles/01-base-global.css:68-68: `@keyframes s7Lag`; определение keyframes
- src/styles/01-base-global.css:69-69: `@keyframes s7Label`; определение keyframes
- src/styles/01-base-global.css:70-70: `@keyframes s7Loop`; определение keyframes
- src/styles/01-base-global.css:71-71: `@keyframes s7Card`; определение keyframes
- src/styles/01-base-global.css:72-72: `@keyframes s7Dot`; определение keyframes
- src/styles/04-glow-inactive.css:1-1: `.inactive-glow`; transition: opacity 1800ms ease-in-out
- src/styles/05-glow-svg.css:1-1: `.glow-svg`; transition: opacity 1800ms ease-in-out
- src/styles/07-cover-style.css:2-2: `#cover`; transition: opacity 650ms ease
- src/styles/07-cover-style.css:3-3: `#cover .cx`; animation: coverOrbFloat 11s ease-in-out infinite
- src/styles/07-cover-style.css:10-10: `#cover .cover-icon`; animation: coverIconFloat 18s ease-in-out infinite
- src/styles/07-cover-style.css:12-12: `@keyframes coverIconFloat`; определение keyframes
- src/styles/07-cover-style.css:13-13: `@keyframes coverOrbFloat`; определение keyframes
- src/styles/07-cover-style.css:14-14: `#cover .cx,#cover .cover-icon`; animation: none
- src/styles/07-cover-style.css:18-18: `#figmaSlide6.manual .s6-head,#figmaSlide6.manual .s6-range,#figmaSlide6.manual .s6-start`; transition: opacity .55s ease,transform .7s cubic-bezier(.16,1,.3,1),filter .55s ease
- src/styles/07-cover-style.css:19-19: `#figmaSlide6.manual .s6-era`; transition: opacity .45s ease
- src/styles/07-cover-style.css:21-21: `#figmaSlide6.manual .s6-track`; transition: transform 1100ms cubic-bezier(.22,1,.36,1)
- src/styles/07-cover-style.css:22-22: `#figmaSlide6.manual .s6-line-fill`; transition: transform 950ms cubic-bezier(.22,1,.36,1)
- src/styles/07-cover-style.css:23-23: `#figmaSlide6.manual .s6-runner`; transition: transform 950ms cubic-bezier(.22,1,.36,1),opacity .45s ease
- src/styles/07-cover-style.css:24-24: `#figmaSlide6.manual .s6-node.revealed`; transition: opacity .7s ease,transform .82s cubic-bezier(.16,1,.3,1),filter .7s ease
- src/styles/07-cover-style.css:27-27: `#figmaSlide6.manual .s6-final.visible`; transition: opacity .65s ease,transform .7s cubic-bezier(.16,1,.3,1)
- src/styles/09-coauthor-transition-style.css:2-2: `#description`; transition: opacity 1180ms cubic-bezier(.22,1,.36,1),filter 1350ms ease,transform 1350ms cubic-bezier(.22,1,.36,1)
- src/styles/09-coauthor-transition-style.css:4-4: `#final.drop-out`; transition: transform 1320ms cubic-bezier(.22,1,.36,1),filter 1150ms ease!important
- src/styles/09-coauthor-transition-style.css:4-4: `#chatSlide`; transition: transform 980ms cubic-bezier(.22,1,.36,1),opacity 820ms ease,filter 940ms ease
- src/styles/09-coauthor-transition-style.css:4-4: `#description.blur-away`; transition: opacity 820ms ease,filter 980ms ease,transform 980ms cubic-bezier(.22,1,.36,1)!important
- src/styles/09-coauthor-transition-style.css:6-6: `#memeSlide6`; transition: opacity 900ms ease,transform 1100ms cubic-bezier(.22,1,.36,1),filter 1000ms ease
- src/styles/09-coauthor-transition-style.css:13-13: `#figmaSlide6.manual .s6-head,#figmaSlide6.manual .s6-range,#figmaSlide6.manual .s6-start`; transition: opacity .55s ease,transform .7s cubic-bezier(.16,1,.3,1),filter .55s ease
- src/styles/09-coauthor-transition-style.css:14-14: `#figmaSlide6.manual .s6-era`; transition: opacity .45s ease
- src/styles/09-coauthor-transition-style.css:16-16: `#figmaSlide6.manual .s6-track`; transition: transform 1100ms cubic-bezier(.22,1,.36,1)
- src/styles/09-coauthor-transition-style.css:17-17: `#figmaSlide6.manual .s6-line-fill`; transition: transform 950ms cubic-bezier(.22,1,.36,1)
- src/styles/09-coauthor-transition-style.css:18-18: `#figmaSlide6.manual .s6-runner`; transition: transform 950ms cubic-bezier(.22,1,.36,1),opacity .45s ease
- src/styles/09-coauthor-transition-style.css:19-19: `#figmaSlide6.manual .s6-node.revealed`; transition: opacity .7s ease,transform .82s cubic-bezier(.16,1,.3,1),filter .7s ease
- src/styles/09-coauthor-transition-style.css:22-22: `#figmaSlide6.manual .s6-final.visible`; transition: opacity .65s ease,transform .7s cubic-bezier(.16,1,.3,1)
- src/styles/10-figma-slide2-style.css:2-2: `#figmaSlide2`; transition: opacity 620ms ease,transform 760ms cubic-bezier(.22,1,.36,1),filter 720ms ease,visibility 0s linear 760ms
- src/styles/10-figma-slide2-style.css:3-3: `#figmaSlide2.show`; transition-delay: 0s
- src/styles/10-figma-slide2-style.css:59-59: `#figmaSlide2.assemble .s2-logo`; animation: s2CenterIn 1680ms cubic-bezier(.18,.86,.22,1) both
- src/styles/10-figma-slide2-style.css:60-60: `#figmaSlide2.assemble .s2-engineers`; animation: s2CardEngineers 2160ms 540ms cubic-bezier(.18,.86,.22,1) both
- src/styles/10-figma-slide2-style.css:61-61: `#figmaSlide2.assemble .s2-hero`; animation: s2CardHero 2160ms 900ms cubic-bezier(.18,.86,.22,1) both
- src/styles/10-figma-slide2-style.css:62-62: `#figmaSlide2.assemble .s2-video-window`; animation: s2VideoHero 2160ms 900ms cubic-bezier(.18,.86,.22,1) both
- src/styles/10-figma-slide2-style.css:63-63: `#figmaSlide2.assemble .s2-tasks`; animation: s2CardTasks 2160ms 1260ms cubic-bezier(.18,.86,.22,1) both
- src/styles/10-figma-slide2-style.css:64-64: `#figmaSlide2.assemble .s2-docs`; animation: s2CardDocs 2160ms 1620ms cubic-bezier(.18,.86,.22,1) both
- src/styles/10-figma-slide2-style.css:65-65: `#figmaSlide2.assemble .s2-photo`; animation: s2CardPhoto 2160ms 1980ms cubic-bezier(.18,.86,.22,1) both
- src/styles/10-figma-slide2-style.css:66-66: `@keyframes s2CenterIn`; определение keyframes
- src/styles/10-figma-slide2-style.css:67-67: `@keyframes s2CardEngineers`; определение keyframes
- src/styles/10-figma-slide2-style.css:68-68: `@keyframes s2CardHero`; определение keyframes
- src/styles/10-figma-slide2-style.css:69-69: `@keyframes s2VideoHero`; определение keyframes
- src/styles/10-figma-slide2-style.css:70-70: `@keyframes s2CardTasks`; определение keyframes
- src/styles/10-figma-slide2-style.css:71-71: `@keyframes s2CardDocs`; определение keyframes
- src/styles/10-figma-slide2-style.css:72-72: `@keyframes s2CardPhoto`; определение keyframes
- src/styles/10-figma-slide2-style.css:76-76: `#figmaSlide6.manual .s6-head,#figmaSlide6.manual .s6-range,#figmaSlide6.manual .s6-start`; transition: opacity .55s ease,transform .7s cubic-bezier(.16,1,.3,1),filter .55s ease
- src/styles/10-figma-slide2-style.css:77-77: `#figmaSlide6.manual .s6-era`; transition: opacity .45s ease
- src/styles/10-figma-slide2-style.css:79-79: `#figmaSlide6.manual .s6-track`; transition: transform 1100ms cubic-bezier(.22,1,.36,1)
- src/styles/10-figma-slide2-style.css:80-80: `#figmaSlide6.manual .s6-line-fill`; transition: transform 950ms cubic-bezier(.22,1,.36,1)
- src/styles/10-figma-slide2-style.css:81-81: `#figmaSlide6.manual .s6-runner`; transition: transform 950ms cubic-bezier(.22,1,.36,1),opacity .45s ease
- src/styles/10-figma-slide2-style.css:82-82: `#figmaSlide6.manual .s6-node.revealed`; transition: opacity .7s ease,transform .82s cubic-bezier(.16,1,.3,1),filter .7s ease
- src/styles/10-figma-slide2-style.css:85-85: `#figmaSlide6.manual .s6-final.visible`; transition: opacity .65s ease,transform .7s cubic-bezier(.16,1,.3,1)
- src/styles/11-figma-slides34-style.css:3-3: `#figmaSlide2 .s2-card,#figmaSlide2 .s2-video-window`; transition: opacity 620ms ease,filter 760ms ease,transform 980ms cubic-bezier(.22,1,.36,1),background 700ms ease,border-color 700ms ease,box-shadow 700ms ease
- src/styles/11-figma-slides34-style.css:4-4: `#figmaSlide2 .s2-docs`; transition: transform 1050ms cubic-bezier(.18,.86,.22,1),background 700ms ease,border-color 700ms ease,box-shadow 700ms ease,border-radius 850ms ease
- src/styles/11-figma-slides34-style.css:5-5: `#figmaSlide2 .s2-doc-img`; transition: transform 1050ms cubic-bezier(.18,.86,.22,1)
- src/styles/11-figma-slides34-style.css:11-11: `#figmaSlide3Extras`; transition: opacity 480ms ease,visibility 0s linear 520ms
- src/styles/11-figma-slides34-style.css:12-12: `#figmaSlide3Extras.show`; transition-delay: 0s
- src/styles/11-figma-slides34-style.css:13-13: `#figmaSlide3Extras.out`; transition-delay: 0s
- src/styles/11-figma-slides34-style.css:14-14: `#figmaSlide3Extras .s3-file`; transition: opacity 580ms ease,transform 900ms cubic-bezier(.18,.86,.22,1),filter 700ms ease
- src/styles/11-figma-slides34-style.css:16-16: `#figmaSlide3Extras .s3-excel`; transition-delay: 260ms
- src/styles/11-figma-slides34-style.css:17-17: `#figmaSlide3Extras .s3-word`; transition-delay: 390ms
- src/styles/11-figma-slides34-style.css:18-18: `#figmaSlide3Extras .s3-pdf`; transition-delay: 520ms
- src/styles/11-figma-slides34-style.css:22-22: `#figmaSlide4`; transition: opacity 680ms ease,transform 900ms cubic-bezier(.22,1,.36,1),filter 760ms ease,visibility 0s linear 900ms
- src/styles/11-figma-slides34-style.css:23-23: `#figmaSlide4.show`; transition-delay: 0s
- src/styles/11-figma-slides34-style.css:37-37: `#figmaSlide4.show .s4t-percent`; animation: s5TextPercentIn 1050ms cubic-bezier(.16,1,.3,1) 120ms forwards
- src/styles/11-figma-slides34-style.css:38-38: `#figmaSlide4.show .s4t-work`; animation: s5TextWorkIn 1250ms cubic-bezier(.16,1,.3,1) 620ms forwards
- src/styles/11-figma-slides34-style.css:39-39: `#figmaSlide4.show .s4t-search`; animation: s5TextSearchIn 1150ms cubic-bezier(.16,1,.3,1) 1280ms forwards
- src/styles/11-figma-slides34-style.css:40-42: `#figmaSlide4.out .s4t-percent, #figmaSlide4.out .s4t-work, #figmaSlide4.out .s4t-search`; animation: none
- src/styles/11-figma-slides34-style.css:43-47: `@keyframes s5TextPercentIn`; определение keyframes
- src/styles/11-figma-slides34-style.css:48-52: `@keyframes s5TextWorkIn`; определение keyframes
- src/styles/11-figma-slides34-style.css:53-57: `@keyframes s5TextSearchIn`; определение keyframes
- src/styles/11-figma-slides34-style.css:61-61: `#figmaSlide5`; transition: opacity 680ms ease,transform 900ms cubic-bezier(.22,1,.36,1),filter 760ms ease,visibility 0s linear 900ms
- src/styles/11-figma-slides34-style.css:62-62: `#figmaSlide5.show`; transition-delay: 0s
- src/styles/11-figma-slides34-style.css:76-76: `#figmaSlide6`; transition: opacity 680ms ease,transform 900ms cubic-bezier(.22,1,.36,1),filter 760ms ease,visibility 0s linear 900ms
- src/styles/11-figma-slides34-style.css:77-77: `#figmaSlide6.show`; transition-delay: 0s
- src/styles/11-figma-slides34-style.css:106-106: `#figmaSlide6.show.play .s6-head`; animation: s6FadeUp .85s cubic-bezier(.16,1,.3,1) .08s forwards
- src/styles/11-figma-slides34-style.css:107-107: `#figmaSlide6.show.play .s6-range`; animation: s6FadeUp .75s cubic-bezier(.16,1,.3,1) .25s forwards
- src/styles/11-figma-slides34-style.css:108-108: `#figmaSlide6.show.play .s6-era`; animation: s6SoftIn .7s ease forwards
- src/styles/11-figma-slides34-style.css:108-108: `.s6-era.spring`; animation-delay: .55s!important
- src/styles/11-figma-slides34-style.css:108-108: `.s6-era.summer`; animation-delay: 4.3s!important
- src/styles/11-figma-slides34-style.css:108-108: `.s6-era.autumn`; animation-delay: 8.2s!important
- src/styles/11-figma-slides34-style.css:109-109: `#figmaSlide6.show.play .s6-line-fill`; animation: s6Draw 11.8s cubic-bezier(.12,.82,.18,1) .65s forwards
- src/styles/11-figma-slides34-style.css:110-110: `#figmaSlide6.show.play .s6-runner`; animation: s6Runner 11.8s cubic-bezier(.12,.82,.18,1) .65s forwards
- src/styles/11-figma-slides34-style.css:111-111: `#figmaSlide6.show.play .s6-track`; animation: s6Pan 12.6s cubic-bezier(.25,.72,.2,1) .5s forwards
- src/styles/11-figma-slides34-style.css:112-112: `#figmaSlide6.show.play .s6-start`; animation: s6SoftIn .8s ease .85s forwards
- src/styles/11-figma-slides34-style.css:113-113: `#figmaSlide6.show.play .s6-node`; animation: s6NodeIn .72s cubic-bezier(.16,1,.3,1) var(--delay) forwards
- src/styles/11-figma-slides34-style.css:114-114: `#figmaSlide6.show.play .s6-final`; animation: s6FadeUp .8s cubic-bezier(.16,1,.3,1) 11.4s forwards
- src/styles/11-figma-slides34-style.css:115-115: `@keyframes s6FadeUp`; определение keyframes
- src/styles/11-figma-slides34-style.css:116-116: `@keyframes s6SoftIn`; определение keyframes
- src/styles/11-figma-slides34-style.css:117-117: `@keyframes s6NodeIn`; определение keyframes
- src/styles/11-figma-slides34-style.css:118-118: `@keyframes s6Draw`; определение keyframes
- src/styles/11-figma-slides34-style.css:119-119: `@keyframes s6Runner`; определение keyframes
- src/styles/11-figma-slides34-style.css:120-120: `@keyframes s6Pan`; определение keyframes
- src/styles/11-figma-slides34-style.css:124-124: `#figmaSlide6.manual .s6-head,#figmaSlide6.manual .s6-range,#figmaSlide6.manual .s6-start`; transition: opacity .55s ease,transform .7s cubic-bezier(.16,1,.3,1),filter .55s ease
- src/styles/11-figma-slides34-style.css:125-125: `#figmaSlide6.manual .s6-era`; transition: opacity .45s ease
- src/styles/11-figma-slides34-style.css:127-127: `#figmaSlide6.manual .s6-track`; transition: transform 1100ms cubic-bezier(.22,1,.36,1)
- src/styles/11-figma-slides34-style.css:128-128: `#figmaSlide6.manual .s6-line-fill`; transition: transform 950ms cubic-bezier(.22,1,.36,1)
- src/styles/11-figma-slides34-style.css:129-129: `#figmaSlide6.manual .s6-runner`; transition: transform 950ms cubic-bezier(.22,1,.36,1),opacity .45s ease
- src/styles/11-figma-slides34-style.css:130-130: `#figmaSlide6.manual .s6-node.revealed`; transition: opacity .7s ease,transform .82s cubic-bezier(.16,1,.3,1),filter .7s ease
- src/styles/11-figma-slides34-style.css:133-133: `#figmaSlide6.manual .s6-final.visible`; transition: opacity .65s ease,transform .7s cubic-bezier(.16,1,.3,1)
- src/styles/12-slide7-simple-152-896.css:11-11: `#figmaSlide7.show .s7-thesis-1`; animation: s7SimpleTextIn .95s cubic-bezier(.16,1,.3,1) .18s forwards
- src/styles/12-slide7-simple-152-896.css:12-12: `#figmaSlide7.show .s7-thesis-2`; animation: s7SimpleTextIn .95s cubic-bezier(.16,1,.3,1) .72s forwards
- src/styles/12-slide7-simple-152-896.css:13-13: `#figmaSlide7.show .s7-meme`; animation: s7SimpleMemeIn 1.05s cubic-bezier(.16,1,.3,1) .52s forwards
- src/styles/12-slide7-simple-152-896.css:14-14: `@keyframes s7SimpleTextIn`; определение keyframes
- src/styles/12-slide7-simple-152-896.css:15-15: `@keyframes s7SimpleMemeIn`; определение keyframes
- src/styles/13-rag-reauthed-style.css:3-3: `.pdfRestSlide.ee-slide`; transition: opacity .43s ease
- src/styles/13-rag-reauthed-style.css:7-7: `.ee-slide.show .pdf-stage`; animation: eeStageIn .85s cubic-bezier(.16,1,.3,1) forwards
- src/styles/13-rag-reauthed-style.css:8-8: `.ee-slide.out .pdf-stage`; animation: eeStageOut .45s ease-in forwards
- src/styles/13-rag-reauthed-style.css:9-9: `@keyframes eeStageIn`; определение keyframes
- src/styles/13-rag-reauthed-style.css:10-10: `@keyframes eeStageOut`; определение keyframes
- src/styles/13-rag-reauthed-style.css:22-22: `.ee-slide.show .ee-reveal`; animation: eeReveal .82s cubic-bezier(.16,1,.3,1) both; animation-delay: var(--d,0ms)
- src/styles/13-rag-reauthed-style.css:23-23: `@keyframes eeReveal`; определение keyframes
- src/styles/13-rag-reauthed-style.css:75-75: `#pdfSlide9.show .ee-gauge-active`; animation: eeGaugeSweep 1.45s cubic-bezier(.16,1,.3,1) 3.05s forwards
- src/styles/13-rag-reauthed-style.css:76-76: `#pdfSlide9.show .ee-speedo-needle`; animation: eeNeedleSweep 1.45s cubic-bezier(.16,1,.3,1) 3.05s forwards
- src/styles/13-rag-reauthed-style.css:77-77: `#pdfSlide9.show .ee-speedo-center b`; animation: eeSpeedPulse .9s ease 4.18s both
- src/styles/13-rag-reauthed-style.css:78-78: `#pdfSlide9.show .ee-stat.new`; animation: eeSpeedCardGlow .8s ease 4.05s both
- src/styles/13-rag-reauthed-style.css:79-79: `@keyframes eeGaugeSweep`; определение keyframes
- src/styles/13-rag-reauthed-style.css:80-80: `@keyframes eeNeedleSweep`; определение keyframes
- src/styles/13-rag-reauthed-style.css:81-81: `@keyframes eeSpeedPulse`; определение keyframes
- src/styles/13-rag-reauthed-style.css:82-82: `@keyframes eeSpeedCardGlow`; определение keyframes
- src/styles/13-rag-reauthed-style.css:117-117: `.ee-slide .ee-ring`; animation: eeRotate 30s linear infinite
- src/styles/13-rag-reauthed-style.css:118-118: `@keyframes eeRotate`; определение keyframes
- src/styles/13-rag-reauthed-style.css:133-133: `.ee-slide.show .pdf-stage,.ee-slide.show .ee-reveal`; animation: none!important
- src/styles/14-cinematic-hero-titles-8-22.css:12-14: `.pdfRestSlide.ee-slide.show .ee-header.ee-reveal`; animation: eeHeroDock 3.15s linear both!important
- src/styles/14-cinematic-hero-titles-8-22.css:15-20: `@keyframes eeHeroDock`; определение keyframes
- src/styles/14-cinematic-hero-titles-8-22.css:21-21: `.pdfRestSlide.ee-slide.show .ee-content`; animation: eeContentAfterHero .78s cubic-bezier(.16,1,.3,1) 2.68s both
- src/styles/14-cinematic-hero-titles-8-22.css:22-22: `.pdfRestSlide.ee-slide.show .ee-index`; animation: eeContentAfterHero .5s ease 3.1s both
- src/styles/14-cinematic-hero-titles-8-22.css:23-23: `@keyframes eeContentAfterHero`; определение keyframes
- src/styles/14-cinematic-hero-titles-8-22.css:24-26: `.pdfRestSlide.ee-slide.show .ee-content .ee-reveal`; animation-delay: calc(2.77s + var(--d,0ms))
- src/styles/14-cinematic-hero-titles-8-22.css:33-38: `.pdfRestSlide.ee-slide.show .ee-header.ee-reveal,  .pdfRestSlide.ee-slide.show .ee-content,  .pdfRestSlide.ee-slide.show .ee-index,  .pdfRestSlide.ee-slide.show .ee-content .ee-reveal`; animation: none!important
- src/styles/15-v8-fullsite-parent-styling.css:11-11: `#pdfSlide8 #v8FullChatWebsite`; transition: opacity .9s cubic-bezier(.16,1,.3,1),transform 1.15s cubic-bezier(.16,1,.3,1),filter .8s
- src/styles/15-v8-fullsite-parent-styling.css:13-13: `#pdfSlide8.show.v8-website-active .ee-header`; transition: opacity .55s ease,filter .55s ease
- src/styles/15-v8-fullsite-parent-styling.css:14-14: `#pdfSlide8 .v8-narrative`; transition: opacity .7s,transform .7s
- src/styles/15-v8-fullsite-parent-styling.css:16-16: `#pdfSlide8 .v8-progress-step`; transition: background .45s,border-color .45s,color .45s,box-shadow .45s
- src/styles/16-v8-new-story-intro-css.css:4-4: `#pdfSlide8.show .ee-content`; animation: none!important
- src/styles/16-v8-new-story-intro-css.css:5-5: `#pdfSlide8 .v8-intro-panel`; transition: opacity .85s cubic-bezier(.16,1,.3,1),transform 1.1s cubic-bezier(.16,1,.3,1),filter .85s ease,visibility .85s
- src/styles/16-v8-new-story-intro-css.css:16-16: `#pdfSlide8 #v8FullChatWebsite`; transition: opacity 1s cubic-bezier(.16,1,.3,1),transform 1s cubic-bezier(.16,1,.3,1),filter 1s ease
- src/styles/18-v8-sdd-cinematic-spec.css:3-3: `#pdfSlide8 .v8-sdd-intro`; transition: opacity .65s,transform .8s cubic-bezier(.16,1,.3,1),filter .65s,visibility .65s
- src/styles/18-v8-sdd-cinematic-spec.css:9-9: `#pdfSlide8 .v8-sdd-scene`; transition: opacity .75s cubic-bezier(.16,1,.3,1),transform .8s,filter .7s,visibility .8s
- src/styles/18-v8-sdd-cinematic-spec.css:14-14: `#pdfSlide8 .sdd10-title`; transition: opacity .5s cubic-bezier(.16,1,.3,1),transform .65s cubic-bezier(.16,1,.3,1),filter .5s
- src/styles/18-v8-sdd-cinematic-spec.css:27-27: `#pdfSlide8.v8-sdd-scene-on .sdd10-line`; animation: sdd10ShowLine .55s cubic-bezier(.16,1,.3,1) calc(.13s + var(--i)*.085s) both
- src/styles/18-v8-sdd-cinematic-spec.css:28-28: `@keyframes sdd10ShowLine`; определение keyframes
- src/styles/18-v8-sdd-cinematic-spec.css:30-30: `#pdfSlide8 .sdd10-state`; transition: opacity .48s cubic-bezier(.16,1,.3,1),transform .62s cubic-bezier(.16,1,.3,1),filter .48s,visibility .5s
- src/styles/18-v8-sdd-cinematic-spec.css:38-38: `#pdfSlide8 .v8-sdd-conclusion`; transition: opacity .65s cubic-bezier(.16,1,.3,1),transform .75s,filter .6s,visibility .75s
- src/styles/18-v8-sdd-cinematic-spec.css:50-50: `#pdfSlide8 .sdd10-line`; animation: none!important
- src/styles/19-presenter-ui-css.css:2-2: `#prev.nav,#forward.nav`; transition: background .2s,opacity .2s,box-shadow .2s!important
- src/styles/19-presenter-ui-css.css:28-28: `#presenterGrid .deckThumb`; transition: transform .2s,border-color .2s,background .2s
- src/styles/20-rag-architecture-reorder-css.css:2-2: `#architectureRagSlide`; transition: opacity 720ms ease,transform 920ms cubic-bezier(.22,1,.36,1),filter 760ms ease,visibility 0s linear 920ms
- src/styles/20-rag-architecture-reorder-css.css:3-3: `#architectureRagSlide.show`; transition-delay: 0s
- src/styles/20-rag-architecture-reorder-css.css:5-5: `#architectureRagSlide .rag-arch-title`; transition: opacity 900ms ease 150ms,transform 1000ms cubic-bezier(.16,1,.3,1) 150ms,filter 1000ms ease 150ms
- src/styles/20-rag-architecture-reorder-css.css:8-8: `#architectureRagSlide .scheme`; transition: opacity 200ms ease .3s,transform 700ms cubic-bezier(.22,1,.36,1) .3s
- src/styles/20-rag-architecture-reorder-css.css:10-10: `#architectureRagSlide .scheme-base`; transition-delay: 2.0s
- src/styles/20-rag-architecture-reorder-css.css:11-11: `#architectureRagSlide,#architectureRagSlide .rag-arch-title,#architectureRagSlide .scheme`; transition: none!important
- src/styles/21-rag-refined-original-theme-10-22.css:163-163: `#pdfSlide10,#pdfSlide11,#pdfSlide12,#pdfSlide13,#pdfSlide14,#pdfSlide15,#pdfSlide16,#pdfSlide17,#pdfSlide18,#pdfSlide19,#pdfSlide20,#pdfSlide21,#pdfSlide22`; transition: none!important
- src/styles/22-aist-evolution-style.css:3-3: `#aistEvolutionSlide`; transition: opacity 720ms ease,transform 1000ms cubic-bezier(.22,1,.36,1),filter 800ms ease,visibility 0s linear 1000ms
- src/styles/22-aist-evolution-style.css:4-4: `#aistEvolutionSlide.show`; transition-delay: 0s
- src/styles/22-aist-evolution-style.css:7-7: `#aistEvolutionSlide .ev-intro`; transition: opacity .75s ease,transform 1s cubic-bezier(.16,1,.3,1),filter .8s ease
- src/styles/22-aist-evolution-style.css:12-12: `#aistEvolutionSlide .ev-display`; transition: opacity 750ms ease,transform 950ms cubic-bezier(.16,1,.3,1),filter 800ms ease
- src/styles/22-aist-evolution-style.css:21-21: `#aistEvolutionSlide .ev-screen`; transition: opacity 850ms ease,transform 1250ms cubic-bezier(.16,1,.3,1),filter 1050ms ease
- src/styles/22-aist-evolution-style.css:24-24: `#aistEvolutionSlide .ev-progress i`; transition: background .4s,box-shadow .4s,width .4s
- src/styles/22-aist-evolution-style.css:28-28: `#aistEvolutionSlide,#aistEvolutionSlide .ev-screen,#aistEvolutionSlide .ev-intro,#aistEvolutionSlide .ev-display`; transition: none!important
- src/styles/23-evolution-story-polish.css:11-11: `#aistEvolutionSlide .ev-storyline span[data-phase]`; transition: color 500ms ease,text-shadow 500ms ease
- src/styles/23-evolution-story-polish.css:19-19: `#aistEvolutionSlide.show .ev-head.story-enter .ev-title`; animation: evStoryTextIn .65s cubic-bezier(.16,1,.3,1) both
- src/styles/23-evolution-story-polish.css:20-20: `#aistEvolutionSlide.show .ev-head.story-enter .ev-caption`; animation: evStoryTextIn .75s cubic-bezier(.16,1,.3,1) .08s both
- src/styles/23-evolution-story-polish.css:21-21: `@keyframes evStoryTextIn`; определение keyframes
- src/styles/24-s7-figma-movie-style.css:3-3: `#figmaSlide7 .s7-figma-movie`; transition: opacity .42s ease
- src/styles/24-s7-figma-movie-style.css:5-5: `#figmaSlide7 .s7-simple`; transition: none
- src/styles/24-s7-figma-movie-style.css:10-10: `#figmaSlide7.show .s7-thesis-2`; animation: s7SimpleTextIn .95s cubic-bezier(.16,1,.3,1) .18s forwards
- src/styles/24-s7-figma-movie-style.css:11-11: `#figmaSlide7.show .s7-meme`; animation: s7SimpleMemeIn 1.05s cubic-bezier(.16,1,.3,1) .52s forwards
- src/styles/25-ev2-storytelling-style.css:6-6: `#aistEvolutionSlide .ev2-scene`; transition: opacity .72s ease,transform 1.05s cubic-bezier(.16,1,.3,1),filter .78s ease,visibility 0s linear 1s
- src/styles/25-ev2-storytelling-style.css:7-7: `#aistEvolutionSlide.show .ev2-scene.is-active`; transition-delay: 0s
- src/styles/25-ev2-storytelling-style.css:63-63: `#aistEvolutionSlide .ev2-track-line i`; transition: width .85s cubic-bezier(.16,1,.3,1)
- src/styles/25-ev2-storytelling-style.css:65-65: `#aistEvolutionSlide .ev2-scene,#aistEvolutionSlide .ev2-track-line i`; transition: none!important
- src/styles/28-konspektus-practice-style.css:58-58: `#pdfSlide26 .kx-qr-link`; transition: transform .24s
- src/styles/28-konspektus-practice-style.css:63-63: `.kx-section .ee-content`; animation: none!important
- src/styles/29-semenov-29-closing-style.css:20-20: `#pdfSlide28.ee-slide .sv29-qr-link`; transition: transform .25s ease
- src/styles/29-semenov-29-closing-style.css:25-25: `#pdfSlide28.ee-slide.show .sv29-speaker`; animation: sv29Arrival .95s cubic-bezier(.16,1,.3,1) 3.00s both
- src/styles/29-semenov-29-closing-style.css:26-26: `#pdfSlide28.ee-slide.show .sv29-photo`; animation: sv29Arrival 1.0s cubic-bezier(.16,1,.3,1) 2.78s both
- src/styles/29-semenov-29-closing-style.css:27-27: `#pdfSlide28.ee-slide.show .sv29-qr-group`; animation: sv29Arrival .95s cubic-bezier(.16,1,.3,1) 3.23s both
- src/styles/29-semenov-29-closing-style.css:28-28: `@keyframes sv29Arrival`; определение keyframes
- src/styles/29-semenov-29-closing-style.css:29-29: `#pdfSlide28.ee-slide.show .sv29-speaker,#pdfSlide28.ee-slide.show .sv29-photo,#pdfSlide28.ee-slide.show .sv29-qr-group`; animation: none
- src/styles/30-sergei-overrides-oct12.css:5-5: `.ee-slide .ee-reveal`; animation: none!important
- src/styles/31-coverBookVideoStyles.css:3-3: `#cover .cover-icon.has-book-video`; animation: none!important
- src/styles/31-coverBookVideoStyles.css:5-5: `#cover .cover-icon.has-book-video`; animation: none!important
- src/styles/32-reliability-sharpness-fix.css:3-7: `#aistEvolutionSlide .ev2-scene`; transition: opacity .32s ease, transform .42s ease, visibility 0s linear .42s!important
- src/styles/32-reliability-sharpness-fix.css:8-12: `#aistEvolutionSlide.show .ev2-scene.is-active`; transition: opacity .38s ease, transform .45s ease, visibility 0s!important
- src/styles/33-instant-slide-content-fix.css:3-8: `.pdfRestSlide.ee-slide.show>.pdf-stage .ee-content`; animation: none!important
- src/styles/33-instant-slide-content-fix.css:9-13: `.pdfRestSlide.ee-slide.show .ee-content .ee-reveal`; animation: none!important
- src/styles/33-instant-slide-content-fix.css:14-19: `.sv29-final.show .sv29-speaker,.sv29-final.show .sv29-photo,.sv29-final.show .sv29-qr-group`; animation: none!important
- src/styles/34-final-scan-ready-layout.css:3-6: `.pdfRestSlide.ee-slide.show>.pdf-stage`; animation: none!important; transition: none!important
- src/styles/37-storytelling-chapter-2026-10-13.css:4-9: `.pdfRestSlide.ee-slide.story-tech:not(#pdfSlide8) .ee-header`; animation: none!important
- src/styles/37-storytelling-chapter-2026-10-13.css:21-27: `.pdfRestSlide.ee-slide.story-tech:not(#pdfSlide8) .ee-content`; animation: none!important
- src/styles/37-storytelling-chapter-2026-10-13.css:29-31: `.pdfRestSlide.story-tech.show.story-speed .ee-header h2, .pdfRestSlide.story-tech.show.story-roi .ee-header h2, .pdfRestSlide.story-tech.show.story-cta .ee-header h2`; animation: stHeadlineRise .68s cubic-bezier(.16,1,.3,1) both!important
- src/styles/37-storytelling-chapter-2026-10-13.css:32-34: `.pdfRestSlide.story-tech.show.story-pair .ee-header h2, .pdfRestSlide.story-tech.show.story-record .ee-header h2, .pdfRestSlide.story-tech.show.story-boundary .ee-header h2`; animation: stHeadlineWipe .72s cubic-bezier(.16,1,.3,1) both!important
- src/styles/37-storytelling-chapter-2026-10-13.css:35-37: `.pdfRestSlide.story-tech.show.story-cards .ee-header h2, .pdfRestSlide.story-tech.show.story-prd .ee-header h2, .pdfRestSlide.story-tech.show.story-proof .ee-header h2`; animation: stHeadlineFade .72s ease both!important
- src/styles/37-storytelling-chapter-2026-10-13.css:38-40: `.pdfRestSlide.story-tech.show.story-layers .ee-header h2, .pdfRestSlide.story-tech.show.story-flow .ee-header h2, .pdfRestSlide.story-tech.show.story-stack .ee-header h2`; animation: stHeadlineTrack .85s cubic-bezier(.16,1,.3,1) both!important
- src/styles/37-storytelling-chapter-2026-10-13.css:41-43: `.pdfRestSlide.story-tech.show.story-terminal .ee-header h2, .pdfRestSlide.story-tech.show.story-code .ee-header h2, .pdfRestSlide.story-tech.show.story-tools .ee-header h2`; animation: stHeadlineTerminal .48s steps(12,end) both!important
- src/styles/37-storytelling-chapter-2026-10-13.css:44-47: `.pdfRestSlide.story-tech.show.story-security .ee-header h2, .pdfRestSlide.story-tech.show.story-mirror .ee-header h2, .pdfRestSlide.story-tech.show.story-react .ee-header h2, .pdfRestSlide.story-tech.show.story-orchestration .ee-header h2`; animation: stHeadlineLeft .73s cubic-bezier(.18,1,.3,1) both!important
- src/styles/37-storytelling-chapter-2026-10-13.css:48-48: `@keyframes stHeadlineRise`; определение keyframes
- src/styles/37-storytelling-chapter-2026-10-13.css:49-49: `@keyframes stHeadlineWipe`; определение keyframes
- src/styles/37-storytelling-chapter-2026-10-13.css:50-50: `@keyframes stHeadlineFade`; определение keyframes
- src/styles/37-storytelling-chapter-2026-10-13.css:51-51: `@keyframes stHeadlineTrack`; определение keyframes
- src/styles/37-storytelling-chapter-2026-10-13.css:52-52: `@keyframes stHeadlineTerminal`; определение keyframes
- src/styles/37-storytelling-chapter-2026-10-13.css:53-53: `@keyframes stHeadlineLeft`; определение keyframes
- src/styles/37-storytelling-chapter-2026-10-13.css:56-63: `.pdfRestSlide.story-tech.show.story-cards .ee-card, .pdfRestSlide.story-tech.show.story-prd .ee-card, .pdfRestSlide.story-tech.show.story-roi .ee-card, .pdfRestSlide.story-tech.show.story-tools .ee-block, .pdfRestSlide.story-tech.show.story-layers .ee-layer, .pdfRestSlide.story-tech.show.story-flow .ee-pipe-node`; animation: stCardArrive .66s cubic-bezier(.2,.9,.2,1) both!important
- src/styles/37-storytelling-chapter-2026-10-13.css:64-69: `.pdfRestSlide.story-tech.show.story-cards .ee-card:nth-child(2), .pdfRestSlide.story-tech.show.story-prd .ee-card:nth-child(2), .pdfRestSlide.story-tech.show.story-roi .ee-card:nth-child(2), .pdfRestSlide.story-tech.show.story-tools .ee-block:nth-child(2), .pdfRestSlide.story-tech.show.story-layers .ee-layer:nth-child(2), .pdfRestSlide.story-tech.show.story-flow .ee-pipe-node:nth-child(2)`; animation-delay: .24s!important
- src/styles/37-storytelling-chapter-2026-10-13.css:70-74: `.pdfRestSlide.story-tech.show.story-cards .ee-card:nth-child(3), .pdfRestSlide.story-tech.show.story-prd .ee-card:nth-child(3), .pdfRestSlide.story-tech.show.story-roi .ee-card:nth-child(3), .pdfRestSlide.story-tech.show.story-tools .ee-block:nth-child(3), .pdfRestSlide.story-tech.show.story-flow .ee-pipe-node:nth-child(3)`; animation-delay: .46s!important
- src/styles/37-storytelling-chapter-2026-10-13.css:75-75: `@keyframes stCardArrive`; определение keyframes
- src/styles/37-storytelling-chapter-2026-10-13.css:76-76: `.pdfRestSlide.story-tech.show.story-pair .ee-trap:first-child`; animation: stPanelLeft .70s cubic-bezier(.17,.9,.25,1) both!important
- src/styles/37-storytelling-chapter-2026-10-13.css:77-77: `.pdfRestSlide.story-tech.show.story-pair .ee-trap:nth-child(2)`; animation: stPanelRight .70s .28s cubic-bezier(.17,.9,.25,1) both!important
- src/styles/37-storytelling-chapter-2026-10-13.css:78-78: `@keyframes stPanelLeft`; определение keyframes
- src/styles/37-storytelling-chapter-2026-10-13.css:79-79: `@keyframes stPanelRight`; определение keyframes
- src/styles/37-storytelling-chapter-2026-10-13.css:80-80: `.pdfRestSlide.story-tech.show.story-record .ee-adr-table`; animation: stPanelLeft .78s ease both!important
- src/styles/37-storytelling-chapter-2026-10-13.css:81-81: `.pdfRestSlide.story-tech.show.story-record .ee-adr-detail`; animation: stPanelRight .78s .17s ease both!important
- src/styles/37-storytelling-chapter-2026-10-13.css:82-82: `.pdfRestSlide.story-tech.show.story-security .ee-pii-item`; animation: stCardArrive .46s ease both!important
- src/styles/37-storytelling-chapter-2026-10-13.css:83-83: `.pdfRestSlide.story-tech.show.story-security .ee-pii-item:nth-child(3)`; animation-delay: .35s!important
- src/styles/37-storytelling-chapter-2026-10-13.css:84-84: `.pdfRestSlide.story-tech.show.story-security .ee-pii-item:nth-child(7)`; animation-delay: .7s!important
- src/styles/37-storytelling-chapter-2026-10-13.css:85-85: `.pdfRestSlide.story-tech.show.story-security .ee-pii-item:nth-child(11)`; animation-delay: 1.05s!important
- src/styles/37-storytelling-chapter-2026-10-13.css:86-86: `.pdfRestSlide.story-tech.show.story-mirror .ee-content>div>div:nth-child(2)`; animation: stPanelRight .72s .22s ease both!important
- src/styles/37-storytelling-chapter-2026-10-13.css:87-87: `.pdfRestSlide.story-tech.show.story-terminal .ee-tree`; animation: stHeadlineWipe 1.1s steps(18,end) both!important
- src/styles/37-storytelling-chapter-2026-10-13.css:88-88: `.pdfRestSlide.story-tech.show.story-react .ee-react-loop`; animation: stCardArrive .83s .2s ease both!important
- src/styles/37-storytelling-chapter-2026-10-13.css:89-89: `.pdfRestSlide.story-tech.show.story-orchestration .ee-workers`; animation: stCardArrive .75s .2s ease both!important
- src/styles/37-storytelling-chapter-2026-10-13.css:90-90: `.pdfRestSlide.story-tech.show.story-proof .ee-ragui`; animation: stHeadlineWipe 1.12s .12s ease both!important
- src/styles/37-storytelling-chapter-2026-10-13.css:91-91: `.pdfRestSlide.story-tech.show.story-observability .ee-block`; animation: stCardArrive .82s .12s ease both!important
- src/styles/37-storytelling-chapter-2026-10-13.css:140-140: `.story-tech.show .ee-header h2,.story-tech.show .ee-content .ee-reveal,.story-tech.show .ee-pipe-node,.story-tech.show .ee-card`; animation: none!important
- src/styles/41-storytelling-motion-final.css:4-7: `@keyframes storyTitleUp`; определение keyframes
- src/styles/41-storytelling-motion-final.css:8-11: `@keyframes storyTitleWipe`; определение keyframes
- src/styles/41-storytelling-motion-final.css:12-15: `@keyframes storyTitleRight`; определение keyframes
- src/styles/41-storytelling-motion-final.css:16-19: `@keyframes storyTitleScan`; определение keyframes
- src/styles/41-storytelling-motion-final.css:20-23: `@keyframes storyTitleReveal`; определение keyframes
- src/styles/41-storytelling-motion-final.css:24-27: `@keyframes storyContentRise`; определение keyframes
- src/styles/41-storytelling-motion-final.css:28-31: `@keyframes storyContentFromLeft`; определение keyframes
- src/styles/41-storytelling-motion-final.css:32-35: `@keyframes storyContentFromRight`; определение keyframes
- src/styles/41-storytelling-motion-final.css:36-38: `.pdfRestSlide.ee-slide.story-tech.show:is(.story-speed,.story-roi,.story-cta) .ee-header h2`; animation: storyTitleUp .75s cubic-bezier(.17,.9,.2,1) both!important
- src/styles/41-storytelling-motion-final.css:39-41: `.pdfRestSlide.ee-slide.story-tech.show:is(.story-pair,.story-record,.story-boundary) .ee-header h2`; animation: storyTitleWipe .85s cubic-bezier(.15,.86,.2,1) both!important
- src/styles/41-storytelling-motion-final.css:42-44: `.pdfRestSlide.ee-slide.story-tech.show:is(.story-cards,.story-prd,.story-proof) .ee-header h2`; animation: storyTitleReveal .74s cubic-bezier(.15,.86,.2,1) both!important
- src/styles/41-storytelling-motion-final.css:45-47: `.pdfRestSlide.ee-slide.story-tech.show:is(.story-layers,.story-flow,.story-stack) .ee-header h2`; animation: storyTitleRight .82s cubic-bezier(.15,.86,.2,1) both!important
- src/styles/41-storytelling-motion-final.css:48-50: `.pdfRestSlide.ee-slide.story-tech.show:is(.story-terminal,.story-code,.story-tools) .ee-header h2`; animation: storyTitleScan .8s steps(17,end) both!important
- src/styles/41-storytelling-motion-final.css:51-53: `.pdfRestSlide.ee-slide.story-tech.show:is(.story-security,.story-mirror,.story-react,.story-orchestration,.story-observability) .ee-header h2`; animation: storyTitleWipe .84s cubic-bezier(.15,.86,.2,1) both!important
- src/styles/41-storytelling-motion-final.css:55-60: `.pdfRestSlide.ee-slide.story-tech.show:is(.story-cards,.story-prd,.story-roi) .ee-card, .pdfRestSlide.ee-slide.story-tech.show.story-layers .ee-layer, .pdfRestSlide.ee-slide.story-tech.show.story-flow .ee-pipe-node, .pdfRestSlide.ee-slide.story-tech.show.story-tools .ee-block`; animation: storyContentRise .72s cubic-bezier(.12,.86,.2,1) both!important
- src/styles/41-storytelling-motion-final.css:61-64: `.pdfRestSlide.ee-slide.story-tech.show:is(.story-cards,.story-prd,.story-roi) .ee-card:nth-child(2), .pdfRestSlide.ee-slide.story-tech.show.story-layers .ee-layer:nth-child(2), .pdfRestSlide.ee-slide.story-tech.show.story-flow .ee-pipe-node:nth-child(2), .pdfRestSlide.ee-slide.story-tech.show.story-tools .ee-block:nth-child(2)`; animation-delay: .24s!important
- src/styles/41-storytelling-motion-final.css:65-67: `.pdfRestSlide.ee-slide.story-tech.show:is(.story-cards,.story-prd,.story-roi) .ee-card:nth-child(3), .pdfRestSlide.ee-slide.story-tech.show.story-flow .ee-pipe-node:nth-child(3), .pdfRestSlide.ee-slide.story-tech.show.story-tools .ee-block:nth-child(3)`; animation-delay: .48s!important
- src/styles/41-storytelling-motion-final.css:68-72: `.pdfRestSlide.ee-slide.story-tech.show.story-pair .ee-trap:first-child, .pdfRestSlide.ee-slide.story-tech.show.story-record .ee-adr-table, .pdfRestSlide.ee-slide.story-tech.show.story-terminal .ee-explorer`; animation: storyContentFromLeft .8s cubic-bezier(.13,.92,.2,1) both!important
- src/styles/41-storytelling-motion-final.css:73-77: `.pdfRestSlide.ee-slide.story-tech.show.story-pair .ee-trap:nth-child(2), .pdfRestSlide.ee-slide.story-tech.show.story-record .ee-adr-detail, .pdfRestSlide.ee-slide.story-tech.show.story-mirror .ee-content >div>div:nth-child(2)`; animation: storyContentFromRight .8s .22s cubic-bezier(.13,.92,.2,1) both!important
- src/styles/41-storytelling-motion-final.css:78-82: `.pdfRestSlide.ee-slide.story-tech.show.story-proof .ee-ragui, .pdfRestSlide.ee-slide.story-tech.show.story-security .ee-pii-flow, .pdfRestSlide.ee-slide.story-tech.show.story-code .ee-isolation`; animation: storyTitleScan 1.1s steps(15,end) both!important
- src/styles/41-storytelling-motion-final.css:83-87: `.pdfRestSlide.ee-slide.story-tech.show.story-observability .ee-block, .pdfRestSlide.ee-slide.story-tech.show.story-react .ee-react, .pdfRestSlide.ee-slide.story-tech.show.story-orchestration .ee-orchestration`; animation: storyContentRise .85s cubic-bezier(.13,.92,.2,1) both!important
- src/styles/41-storytelling-motion-final.css:89-94: `.pdfRestSlide.ee-slide.story-tech.show .ee-header h2,  .pdfRestSlide.ee-slide.story-tech.show .ee-content .ee-reveal,  .pdfRestSlide.ee-slide.story-tech.show .ee-content .ee-card,  .pdfRestSlide.ee-slide.story-tech.show .ee-content .ee-block`; animation: none!important
- src/styles/42-debug-panel.css:3-8: `#pdfSlide8 #v8FighterIntro`; transition: opacity .48s ease,filter .48s ease,visibility 0s linear .48s
- src/styles/42-debug-panel.css:9-12: `#pdfSlide8.show.v8-intro-2 #v8FighterIntro`; transition: opacity .48s ease,filter .48s ease,visibility 0s
- src/styles/42-debug-panel.css:15-15: `#pdfSlide8:not(.v8-intro-2) #v8FighterIntro`; transition: none!important
- src/styles/43-slide-visual-polish.css:5-5: `#pdfSlide9.show .ee-speedo-needle`; animation: semenovNeedleSweep 3.8s cubic-bezier(.45,0,.55,1) 3.05s both!important
- src/styles/43-slide-visual-polish.css:6-6: `@keyframes semenovNeedleSweep`; определение keyframes
- src/styles/43-slide-visual-polish.css:24-24: `#pdfSlide28 .qr-scan-corners`; animation: semenovQrScanFloat 4.8s ease-in-out infinite
- src/styles/43-slide-visual-polish.css:30-30: `@keyframes semenovQrScanFloat`; определение keyframes
- src/styles/43-slide-visual-polish.css:31-31: `#pdfSlide9.show .ee-speedo-needle`; animation: none!important
- src/styles/43-slide-visual-polish.css:31-31: `#pdfSlide28 .qr-scan-corners`; animation: none
