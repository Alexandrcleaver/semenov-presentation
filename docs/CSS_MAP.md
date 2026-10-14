# Индекс CSS и переопределений

Генератор: `node scripts/generate-maps.mjs`. Порядок таблицы равен каскаду src/styles.json. Строки 1-based. Контекст @media/@supports сохраняется. В основной таблице селекторы с запятыми записаны как исходное правило; при поиске повторов список разделяется с учётом скобок.

Повтор точного селектора (в том числе внутри списка через запятую) — потенциальное переопределение: итог зависит от свойства, !important, условий и специфичности. Разные селекторы тоже пересекаются; их полная эквивалентность не установлена. Стили srcdoc изолированы и находятся в HTML слайда 10; их отдельный индекс в конце. Не удалять и не переставлять правила по этому индексу.

| Порядок | Файл:строки | Селектор / at-rule | Условие | Свойства | !important |
|---|---|---|---|---|---|
| 1 | src/styles/01-base-global.css:1-1 | @font-face | — | font-family, src | — |
| 1 | src/styles/01-base-global.css:1-1 | * | — | box-sizing | — |
| 1 | src/styles/01-base-global.css:1-1 | html,body | — | margin, width, height, overflow, background, color, font-family | — |
| 1 | src/styles/01-base-global.css:1-1 | #scene | — | position, width, height | — |
| 1 | src/styles/01-base-global.css:1-1 | .title | — | position, left, top, font-size, transform-origin, line-height, transition | — |
| 1 | src/styles/01-base-global.css:1-1 | .title .accent | — | background, -webkit-background-clip, background-clip, color | — |
| 1 | src/styles/01-base-global.css:1-1 | .title.moved | — | transform, opacity | — |
| 1 | src/styles/01-base-global.css:1-1 | .cursor | — | display, width, height, background, margin-left, animation | — |
| 1 | src/styles/01-base-global.css:1-1 | .glow | — | position, overflow, z-index, pointer-events, left, top, width, height, bottom, background, background-size, background-position, filter, opacity, animation, transition | да |
| 1 | src/styles/01-base-global.css:1-1 | .glow.typing | — | filter, transition | — |
| 1 | src/styles/01-base-global.css:1-1 | .glow:before | — | content, position, left, bottom, width, height, border-radius, background, filter, opacity, transition | — |
| 1 | src/styles/01-base-global.css:1-1 | .glow.typing:before | — | opacity, transform, filter | — |
| 1 | src/styles/01-base-global.css:1-1 | .glow.boost:before | — | opacity, transform, filter | — |
| 1 | src/styles/01-base-global.css:1-1 | .glow:after | — | content, position, left, bottom, width, height, border-radius, background, filter, opacity, animation | — |
| 1 | src/styles/01-base-global.css:1-1 | .glow.typing:after | — | opacity, animation-duration | — |
| 1 | src/styles/01-base-global.css:1-1 | @keyframes beam | — | transform | — |
| 1 | src/styles/01-base-global.css:1-1 | .glow.boost | — | opacity, filter, transform, transform-origin, transition | — |
| 1 | src/styles/01-base-global.css:1-1 | .scheme | — | position, left, top, width, height, opacity, overflow | — |
| 1 | src/styles/01-base-global.css:1-1 | .scheme.show | — | opacity | — |
| 1 | src/styles/01-base-global.css:1-1 | .scheme>img | — | width, height, display | — |
| 1 | src/styles/01-base-global.css:1-1 | .scheme-base | — | position, inset, opacity, filter, transform, transition | — |
| 1 | src/styles/01-base-global.css:1-1 | .scheme.show .scheme-base | — | opacity, filter, transform | — |
| 1 | src/styles/01-base-global.css:1-1 | .scheme-pieces | — | position, inset, width, height, pointer-events | — |
| 1 | src/styles/01-base-global.css:1-1 | .scheme-piece | — | position, inset, width, height, opacity, filter, transform, transform-origin, will-change | — |
| 1 | src/styles/01-base-global.css:1-1 | .scheme-piece img | — | position, inset, width, height, display, max-width | — |
| 1 | src/styles/01-base-global.css:1-1 | .scheme.show .scheme-piece | — | animation | — |
| 1 | src/styles/01-base-global.css:1-1 | .scheme.show .scheme-pieces | — | animation | — |
| 1 | src/styles/01-base-global.css:1-1 | @keyframes schemePieceIn | — | opacity, filter, transform | — |
| 1 | src/styles/01-base-global.css:1-1 | @keyframes schemePiecesFade | — | opacity | — |
| 1 | src/styles/01-base-global.css:1-1 | @keyframes glowDrift | — | background-position | — |
| 1 | src/styles/01-base-global.css:1-1 | 50% | — | background-position | — |
| 1 | src/styles/01-base-global.css:1-1 | }@keyframes frameTravel | — | stroke-dashoffset | — |
| 1 | src/styles/01-base-global.css:1-1 | @keyframes glowDrift | — | background-position | — |
| 1 | src/styles/01-base-global.css:1-1 | 50% | — | background-position | — |
| 1 | src/styles/01-base-global.css:1-1 | }@keyframes breathe | — | opacity | — |
| 1 | src/styles/01-base-global.css:1-1 | @keyframes breathe-strong | — | opacity, filter, transform | — |
| 1 | src/styles/01-base-global.css:1-1 | .glow.fade | — | opacity, filter, transition | — |
| 1 | src/styles/01-base-global.css:1-1 | @keyframes blink | — | opacity | — |
| 1 | src/styles/01-base-global.css:1-1 | .next | — | position, z-index, inset, width, height, border, transform, transition, background | — |
| 1 | src/styles/01-base-global.css:1-1 | .next.in | — | transform | — |
| 1 | src/styles/01-base-global.css:1-1 | #final | — | transform, opacity, filter, transition, will-change | — |
| 1 | src/styles/01-base-global.css:1-1 | #final.in | — | transform, opacity, filter | — |
| 1 | src/styles/01-base-global.css:1-1 | .blur-out | — | opacity, filter, transition, will-change | — |
| 1 | src/styles/01-base-global.css:1-1 | #scene.out | — | transform, transition | — |
| 1 | src/styles/01-base-global.css:1-1 | .nav | — | position, top, transform, z-index, width, height, border, border-radius, background, color, font, backdrop-filter | — |
| 1 | src/styles/01-base-global.css:1-1 | .nav:active | — | background | — |
| 1 | src/styles/01-base-global.css:1-1 | #prev | — | left | — |
| 1 | src/styles/01-base-global.css:1-1 | #forward | — | right | — |
| 1 | src/styles/01-base-global.css:1-1 | .nav | @media(min-width:900px) | opacity | — |
| 1 | src/styles/01-base-global.css:1-1 | .nav:hover | @media(min-width:900px) | opacity | — |
| 1 | src/styles/01-base-global.css:2-2 | .typeChar | — | display, opacity, transform, filter, will-change, color | — |
| 1 | src/styles/01-base-global.css:3-3 | .typeChar.run | — | animation | — |
| 1 | src/styles/01-base-global.css:4-4 | .title .accent .typeChar | — | background, -webkit-background-clip, background-clip, color | — |
| 1 | src/styles/01-base-global.css:5-5 | @keyframes textCharIn | — | opacity, transform, filter | — |
| 1 | src/styles/01-base-global.css:7-7 | #figmaSlide6.manual .s6-head,#figmaSlide6.manual .s6-range,#figmaSlide6.manual .s6-start | — | opacity, transform, filter, transition | — |
| 1 | src/styles/01-base-global.css:8-8 | #figmaSlide6.manual .s6-era | — | opacity, transition | — |
| 1 | src/styles/01-base-global.css:9-9 | #figmaSlide6.manual .s6-era.active | — | opacity, color, text-shadow | — |
| 1 | src/styles/01-base-global.css:10-10 | #figmaSlide6.manual .s6-track | — | transform, transition | — |
| 1 | src/styles/01-base-global.css:11-11 | #figmaSlide6.manual .s6-line-fill | — | transform, transition | — |
| 1 | src/styles/01-base-global.css:12-12 | #figmaSlide6.manual .s6-runner | — | opacity, transform, transition | — |
| 1 | src/styles/01-base-global.css:13-13 | #figmaSlide6.manual .s6-node.revealed | — | opacity, transform, filter, transition | — |
| 1 | src/styles/01-base-global.css:14-14 | #figmaSlide6.manual .s6-node.active .s6-dot | — | background, box-shadow | — |
| 1 | src/styles/01-base-global.css:15-15 | #figmaSlide6.manual .s6-node.active .s6-card | — | background, box-shadow | — |
| 1 | src/styles/01-base-global.css:16-16 | #figmaSlide6.manual .s6-final.visible | — | opacity, transform, transition | — |
| 1 | src/styles/01-base-global.css:17-17 | #figmaSlide6.manual .s6-range | — | min-width, text-align | — |
| 1 | src/styles/01-base-global.css:22-22 | #figmaSlide7 | — | position, inset, width, height, z-index, background, opacity, visibility, pointer-events, transform, filter, transition, overflow, font-family, color | — |
| 1 | src/styles/01-base-global.css:23-23 | #figmaSlide7.show | — | opacity, visibility, pointer-events, transform, filter, transition-delay | — |
| 1 | src/styles/01-base-global.css:24-24 | #figmaSlide7.out | — | opacity, visibility, pointer-events, transform, filter | — |
| 1 | src/styles/01-base-global.css:25-25 | #figmaSlide7 .s7-bg | — | position, inset, width, height, border-radius, background, filter, opacity, mix-blend-mode | — |
| 1 | src/styles/01-base-global.css:26-26 | #figmaSlide7 .s7-title | — | position, left, top, width, font-weight, font-size, line-height, letter-spacing, color, opacity, transform, filter | — |
| 1 | src/styles/01-base-global.css:27-27 | #figmaSlide7 .s7-title span | — | background, -webkit-background-clip, background-clip, color, text-shadow | — |
| 1 | src/styles/01-base-global.css:28-28 | #figmaSlide7 .s7-sub | — | position, left, top, width, font-size, line-height, font-weight, color, opacity, transform, filter | — |
| 1 | src/styles/01-base-global.css:29-29 | #figmaSlide7 .s7-grid | — | position, left, top, width, height, display, grid-template-columns, gap | — |
| 1 | src/styles/01-base-global.css:30-30 | #figmaSlide7 .s7-panel | — | position, border, background, backdrop-filter, border-radius, overflow, padding, opacity, transform, filter | — |
| 1 | src/styles/01-base-global.css:31-31 | #figmaSlide7 .s7-panel:before | — | content, position, inset, border-radius, pointer-events, background | — |
| 1 | src/styles/01-base-global.css:32-32 | #figmaSlide7 .s7-panel-old | — | box-shadow | — |
| 1 | src/styles/01-base-global.css:33-33 | #figmaSlide7 .s7-panel-new | — | border-color, box-shadow | — |
| 1 | src/styles/01-base-global.css:34-34 | #figmaSlide7 .s7-label | — | font-size, line-height, font-weight, color, margin-bottom | — |
| 1 | src/styles/01-base-global.css:35-35 | #figmaSlide7 .s7-label small | — | display, margin-top, font-size, font-weight, color | — |
| 1 | src/styles/01-base-global.css:36-36 | #figmaSlide7 .s7-waterfall | — | position, left, right, top, height | — |
| 1 | src/styles/01-base-global.css:37-37 | #figmaSlide7 .wf-step | — | position, width, height, border-radius, background, border, display, align-items, justify-content, text-align, font-size, line-height, color, opacity, transform, filter | — |
| 1 | src/styles/01-base-global.css:38-38 | #figmaSlide7 .wf-step:nth-child(1) | — | left, top | — |
| 1 | src/styles/01-base-global.css:38-38 | #figmaSlide7 .wf-step:nth-child(2) | — | left, top | — |
| 1 | src/styles/01-base-global.css:38-38 | #figmaSlide7 .wf-step:nth-child(3) | — | left, top | — |
| 1 | src/styles/01-base-global.css:38-38 | #figmaSlide7 .wf-step:nth-child(4) | — | left, top | — |
| 1 | src/styles/01-base-global.css:39-39 | #figmaSlide7 .wf-lag | — | position, left, top, width, height, border-radius, background, transform-origin, transform, box-shadow | — |
| 1 | src/styles/01-base-global.css:40-40 | #figmaSlide7 .wf-lag:after | — | content, position, right, top, font-size, color, white-space, opacity, transform | — |
| 1 | src/styles/01-base-global.css:41-41 | #figmaSlide7 .wf-agent | — | position, left, top, font-size, font-weight, letter-spacing, color, opacity, transform, filter | — |
| 1 | src/styles/01-base-global.css:42-42 | #figmaSlide7 .wf-agent span | — | color, text-shadow | — |
| 1 | src/styles/01-base-global.css:43-43 | #figmaSlide7 .s7-loop | — | position, left, top, width, height, border-radius, border, box-shadow, opacity, transform, filter | — |
| 1 | src/styles/01-base-global.css:44-44 | #figmaSlide7 .s7-loop:before | — | content, position, left, top, width, height, border-radius, border | — |
| 1 | src/styles/01-base-global.css:45-45 | #figmaSlide7 .loop-dot | — | position, width, height, border-radius, background, box-shadow, left, top, opacity | — |
| 1 | src/styles/01-base-global.css:46-46 | #figmaSlide7 .loop-card | — | position, min-width, padding, border-radius, background, border, font-size, line-height, text-align, color, opacity, transform, filter | — |
| 1 | src/styles/01-base-global.css:47-47 | #figmaSlide7 .lc1 | — | left, top | — |
| 1 | src/styles/01-base-global.css:47-47 | .lc2 | — | left, top | — |
| 1 | src/styles/01-base-global.css:47-47 | .lc3 | — | right, top | — |
| 1 | src/styles/01-base-global.css:47-47 | .lc4 | — | left, bottom | — |
| 1 | src/styles/01-base-global.css:47-47 | .lc5 | — | left, bottom | — |
| 1 | src/styles/01-base-global.css:48-48 | #figmaSlide7 .s7-principle | — | position, left, right, bottom, border-radius, padding, background, border-left, font-size, line-height, font-weight, color, opacity, transform, filter | — |
| 1 | src/styles/01-base-global.css:49-49 | #figmaSlide7 .s7-principle strong | — | font-weight, color | — |
| 1 | src/styles/01-base-global.css:50-50 | #figmaSlide7.show .s7-title | — | animation | — |
| 1 | src/styles/01-base-global.css:51-51 | #figmaSlide7.show .s7-sub | — | animation | — |
| 1 | src/styles/01-base-global.css:52-52 | #figmaSlide7.show .s7-panel | — | animation | — |
| 1 | src/styles/01-base-global.css:53-53 | #figmaSlide7.show .s7-panel-new | — | animation-delay | — |
| 1 | src/styles/01-base-global.css:54-54 | #figmaSlide7.show .wf-step | — | animation | — |
| 1 | src/styles/01-base-global.css:55-55 | #figmaSlide7.show .wf-step:nth-child(1) | — | animation-delay | — |
| 1 | src/styles/01-base-global.css:55-55 | #figmaSlide7.show .wf-step:nth-child(2) | — | animation-delay | — |
| 1 | src/styles/01-base-global.css:55-55 | #figmaSlide7.show .wf-step:nth-child(3) | — | animation-delay | — |
| 1 | src/styles/01-base-global.css:55-55 | #figmaSlide7.show .wf-step:nth-child(4) | — | animation-delay | — |
| 1 | src/styles/01-base-global.css:56-56 | #figmaSlide7.show .wf-lag | — | animation | — |
| 1 | src/styles/01-base-global.css:57-57 | #figmaSlide7.show .wf-lag:after | — | animation | — |
| 1 | src/styles/01-base-global.css:58-58 | #figmaSlide7.show .wf-agent | — | animation | — |
| 1 | src/styles/01-base-global.css:59-59 | #figmaSlide7.show .s7-loop | — | animation | — |
| 1 | src/styles/01-base-global.css:60-60 | #figmaSlide7.show .loop-dot | — | animation | — |
| 1 | src/styles/01-base-global.css:61-61 | #figmaSlide7.show .loop-card | — | animation | — |
| 1 | src/styles/01-base-global.css:62-62 | #figmaSlide7.show .lc1 | — | animation-delay | — |
| 1 | src/styles/01-base-global.css:62-62 | #figmaSlide7.show .lc2 | — | animation-delay | — |
| 1 | src/styles/01-base-global.css:62-62 | #figmaSlide7.show .lc3 | — | animation-delay | — |
| 1 | src/styles/01-base-global.css:62-62 | #figmaSlide7.show .lc4 | — | animation-delay | — |
| 1 | src/styles/01-base-global.css:62-62 | #figmaSlide7.show .lc5 | — | animation-delay | — |
| 1 | src/styles/01-base-global.css:63-63 | #figmaSlide7.show .s7-principle | — | animation | — |
| 1 | src/styles/01-base-global.css:64-64 | @keyframes s7In | — | opacity, transform, filter | — |
| 1 | src/styles/01-base-global.css:65-65 | @keyframes s7InX | — | opacity, transform, filter | — |
| 1 | src/styles/01-base-global.css:66-66 | @keyframes s7Panel | — | opacity, transform, filter | — |
| 1 | src/styles/01-base-global.css:67-67 | @keyframes s7Step | — | opacity, transform, filter | — |
| 1 | src/styles/01-base-global.css:68-68 | @keyframes s7Lag | — | transform | — |
| 1 | src/styles/01-base-global.css:69-69 | @keyframes s7Label | — | opacity, transform | — |
| 1 | src/styles/01-base-global.css:70-70 | @keyframes s7Loop | — | opacity, transform, filter | — |
| 1 | src/styles/01-base-global.css:71-71 | @keyframes s7Card | — | opacity, transform, filter | — |
| 1 | src/styles/01-base-global.css:72-72 | @keyframes s7Dot | — | opacity, transform | — |
| 2 | src/styles/02-glow-position.css:1-1 | .glow | — | left, top, bottom, width, height, background, filter | да |
| 2 | src/styles/02-glow-position.css:1-1 | .glow-svg | — | width, height, display, overflow | — |
| 2 | src/styles/02-glow-position.css:1-1 | .glow.typing | — | filter | да |
| 2 | src/styles/02-glow-position.css:1-1 | .glow.boost | — | filter | да |
| 2 | src/styles/02-glow-position.css:1-1 | .glow.fade | — | opacity, filter | да |
| 3 | src/styles/03-glow-hide-pseudo.css:1-1 | .glow:before,.glow:after | — | display | да |
| 4 | src/styles/04-glow-inactive.css:1-1 | .inactive-glow | — | position, left, bottom, width, height, opacity, transition, z-index | — |
| 4 | src/styles/04-glow-inactive.css:1-1 | .glow-svg | — | position, z-index | — |
| 4 | src/styles/04-glow-inactive.css:1-1 | .glow.typing .inactive-glow,.glow.boost .inactive-glow | — | opacity | — |
| 4 | src/styles/04-glow-inactive.css:1-1 | .glow.fade .inactive-glow | — | opacity | — |
| 5 | src/styles/05-glow-svg.css:1-1 | .glow-svg | — | opacity, transition | — |
| 5 | src/styles/05-glow-svg.css:1-1 | .glow.typing .glow-svg,.glow.boost .glow-svg | — | opacity | — |
| 5 | src/styles/05-glow-svg.css:1-1 | .glow.fade .glow-svg | — | opacity | — |
| 6 | src/styles/06-glow-strength.css:1-1 | .glow:not(.fade) .glow-svg | — | opacity | да |
| 6 | src/styles/06-glow-strength.css:1-1 | .glow.typing .glow-svg,.glow.boost .glow-svg | — | opacity | да |
| 7 | src/styles/07-cover-style.css:2-2 | #cover | — | position, inset, width, height, overflow, background, z-index, opacity, visibility, transition | — |
| 7 | src/styles/07-cover-style.css:3-3 | #cover .cx | — | position, left, top, width, height, max-width, object-fit, pointer-events, transform, transform-origin, will-change, animation | — |
| 7 | src/styles/07-cover-style.css:4-4 | #cover .cover-title | — | position, left, top, width, margin, color, font-family, font-size, line-height, font-weight, letter-spacing, white-space | — |
| 7 | src/styles/07-cover-style.css:5-5 | #cover .cover-title strong | — | display, font-weight | — |
| 7 | src/styles/07-cover-style.css:6-6 | #cover .cover-author | — | position, left, top, height, display, align-items, gap, color, font-family | — |
| 7 | src/styles/07-cover-style.css:7-7 | #cover .cover-photo-frame | — | position, width, height, border-radius, overflow, flex | — |
| 7 | src/styles/07-cover-style.css:8-8 | #cover .cover-photo | — | position, width, height, left, top, max-width, object-fit, object-position | — |
| 7 | src/styles/07-cover-style.css:9-9 | #cover .cover-author-text | — | font-size, line-height, white-space, width | — |
| 7 | src/styles/07-cover-style.css:9-9 | .cover-author-text b | — | display, font-size, font-weight, margin-bottom | — |
| 7 | src/styles/07-cover-style.css:10-10 | #cover .cover-icon | — | position, left, top, width, height, will-change, animation | — |
| 7 | src/styles/07-cover-style.css:11-11 | #cover .cover-icon img | — | width, height, display, max-width | — |
| 7 | src/styles/07-cover-style.css:12-12 | @keyframes coverIconFloat | — | transform | — |
| 7 | src/styles/07-cover-style.css:13-13 | @keyframes coverOrbFloat | — | transform | — |
| 7 | src/styles/07-cover-style.css:14-14 | #cover .cx,#cover .cover-icon | @media (prefers-reduced-motion:reduce) | animation | — |
| 7 | src/styles/07-cover-style.css:15-15 | .cover-off #cover | — | opacity, visibility, pointer-events | — |
| 7 | src/styles/07-cover-style.css:16-16 | body:not(.cover-off) #glow,body:not(.cover-off) #debugGlow | — | visibility | — |
| 7 | src/styles/07-cover-style.css:18-18 | #figmaSlide6.manual .s6-head,#figmaSlide6.manual .s6-range,#figmaSlide6.manual .s6-start | — | opacity, transform, filter, transition | — |
| 7 | src/styles/07-cover-style.css:19-19 | #figmaSlide6.manual .s6-era | — | opacity, transition | — |
| 7 | src/styles/07-cover-style.css:20-20 | #figmaSlide6.manual .s6-era.active | — | opacity, color, text-shadow | — |
| 7 | src/styles/07-cover-style.css:21-21 | #figmaSlide6.manual .s6-track | — | transform, transition | — |
| 7 | src/styles/07-cover-style.css:22-22 | #figmaSlide6.manual .s6-line-fill | — | transform, transition | — |
| 7 | src/styles/07-cover-style.css:23-23 | #figmaSlide6.manual .s6-runner | — | opacity, transform, transition | — |
| 7 | src/styles/07-cover-style.css:24-24 | #figmaSlide6.manual .s6-node.revealed | — | opacity, transform, filter, transition | — |
| 7 | src/styles/07-cover-style.css:25-25 | #figmaSlide6.manual .s6-node.active .s6-dot | — | background, box-shadow | — |
| 7 | src/styles/07-cover-style.css:26-26 | #figmaSlide6.manual .s6-node.active .s6-card | — | background, box-shadow | — |
| 7 | src/styles/07-cover-style.css:27-27 | #figmaSlide6.manual .s6-final.visible | — | opacity, transform, transition | — |
| 7 | src/styles/07-cover-style.css:28-28 | #figmaSlide6.manual .s6-range | — | min-width, text-align | — |
| 8 | src/styles/08-cover-fonts.css:1-1 | @font-face | — | font-family, src, font-weight, font-style, font-display | — |
| 8 | src/styles/08-cover-fonts.css:1-1 | @font-face | — | font-family, src, font-weight, font-style, font-display | — |
| 8 | src/styles/08-cover-fonts.css:1-1 | @font-face | — | font-family, src, font-weight, font-style, font-display | — |
| 9 | src/styles/09-coauthor-transition-style.css:2-2 | #description | — | z-index, transform, opacity, filter, pointer-events, transition, will-change | — |
| 9 | src/styles/09-coauthor-transition-style.css:3-3 | #description.in | — | transform, opacity, filter, pointer-events | — |
| 9 | src/styles/09-coauthor-transition-style.css:4-4 | #final.drop-out | — | transform, opacity, filter, transition, will-change | да |
| 9 | src/styles/09-coauthor-transition-style.css:4-4 | #chatSlide | — | position, inset, width, height, border, background, z-index, transform, opacity, filter, pointer-events, transition, will-change | — |
| 9 | src/styles/09-coauthor-transition-style.css:4-4 | #chatSlide.in | — | transform, opacity, filter, pointer-events | — |
| 9 | src/styles/09-coauthor-transition-style.css:4-4 | #description.blur-away | — | opacity, filter, transform, transition | да |
| 9 | src/styles/09-coauthor-transition-style.css:6-6 | #memeSlide6 | — | position, inset, width, height, z-index, background, opacity, transform, filter, pointer-events, transition, will-change, overflow | — |
| 9 | src/styles/09-coauthor-transition-style.css:7-7 | #memeSlide6.in | — | opacity, transform, filter, pointer-events | — |
| 9 | src/styles/09-coauthor-transition-style.css:8-8 | #memeSlide6.out | — | opacity, transform, filter, pointer-events | — |
| 9 | src/styles/09-coauthor-transition-style.css:9-9 | #memeSlide6 .memeCrop | — | position, left, top, width, height, overflow, border-radius | — |
| 9 | src/styles/09-coauthor-transition-style.css:10-10 | #memeSlide6 .memeCrop img | — | position, left, top, width, height, max-width, display | — |
| 9 | src/styles/09-coauthor-transition-style.css:11-11 | #chatSlide.slide5-away | — | opacity, transform, filter, pointer-events | да |
| 9 | src/styles/09-coauthor-transition-style.css:13-13 | #figmaSlide6.manual .s6-head,#figmaSlide6.manual .s6-range,#figmaSlide6.manual .s6-start | — | opacity, transform, filter, transition | — |
| 9 | src/styles/09-coauthor-transition-style.css:14-14 | #figmaSlide6.manual .s6-era | — | opacity, transition | — |
| 9 | src/styles/09-coauthor-transition-style.css:15-15 | #figmaSlide6.manual .s6-era.active | — | opacity, color, text-shadow | — |
| 9 | src/styles/09-coauthor-transition-style.css:16-16 | #figmaSlide6.manual .s6-track | — | transform, transition | — |
| 9 | src/styles/09-coauthor-transition-style.css:17-17 | #figmaSlide6.manual .s6-line-fill | — | transform, transition | — |
| 9 | src/styles/09-coauthor-transition-style.css:18-18 | #figmaSlide6.manual .s6-runner | — | opacity, transform, transition | — |
| 9 | src/styles/09-coauthor-transition-style.css:19-19 | #figmaSlide6.manual .s6-node.revealed | — | opacity, transform, filter, transition | — |
| 9 | src/styles/09-coauthor-transition-style.css:20-20 | #figmaSlide6.manual .s6-node.active .s6-dot | — | background, box-shadow | — |
| 9 | src/styles/09-coauthor-transition-style.css:21-21 | #figmaSlide6.manual .s6-node.active .s6-card | — | background, box-shadow | — |
| 9 | src/styles/09-coauthor-transition-style.css:22-22 | #figmaSlide6.manual .s6-final.visible | — | opacity, transform, transition | — |
| 9 | src/styles/09-coauthor-transition-style.css:23-23 | #figmaSlide6.manual .s6-range | — | min-width, text-align | — |
| 10 | src/styles/10-figma-slide2-style.css:2-2 | #figmaSlide2 | — | position, inset, width, height, overflow, background, z-index, opacity, visibility, pointer-events, transform, filter, transition, font-family | — |
| 10 | src/styles/10-figma-slide2-style.css:3-3 | #figmaSlide2.show | — | opacity, visibility, pointer-events, transform, filter, transition-delay | — |
| 10 | src/styles/10-figma-slide2-style.css:4-4 | #figmaSlide2.out | — | opacity, visibility, pointer-events, transform, filter | — |
| 10 | src/styles/10-figma-slide2-style.css:5-5 | #figmaSlide2 .s2-glow | — | position, left, right, bottom, height, background, filter, opacity, pointer-events | — |
| 10 | src/styles/10-figma-slide2-style.css:6-6 | #figmaSlide2 .s2-grid | — | position, left, top, width, height | — |
| 10 | src/styles/10-figma-slide2-style.css:7-7 | #figmaSlide2 .s2-card | — | position, border-radius, background, overflow, border, box-shadow | — |
| 10 | src/styles/10-figma-slide2-style.css:8-8 | #figmaSlide2 .s2-num | — | margin, background, -webkit-background-clip, background-clip, color, font-weight, line-height, letter-spacing | — |
| 10 | src/styles/10-figma-slide2-style.css:9-9 | #figmaSlide2 .s2-label | — | color, font-weight, font-size, line-height, letter-spacing | — |
| 10 | src/styles/10-figma-slide2-style.css:10-10 | #figmaSlide2 .s2-engineers | — | left, top, width, height, padding | — |
| 10 | src/styles/10-figma-slide2-style.css:11-11 | #figmaSlide2 .s2-engineers .s2-num | — | font-size | — |
| 10 | src/styles/10-figma-slide2-style.css:12-12 | #figmaSlide2 .s2-engineers .s2-label | — | margin-top | — |
| 10 | src/styles/10-figma-slide2-style.css:13-13 | #figmaSlide2 .s2-russia | — | position, right, top, width, height, opacity | — |
| 10 | src/styles/10-figma-slide2-style.css:14-14 | #figmaSlide2 .s2-russia-shape | — | position, inset, background, clip-path, filter | — |
| 10 | src/styles/10-figma-slide2-style.css:15-15 | #figmaSlide2 .s2-russia-dots | — | position, inset, background-image, background-size, mask-image, opacity, transform | — |
| 10 | src/styles/10-figma-slide2-style.css:16-16 | #figmaSlide2 .s2-photo | — | left, top, width, height, padding | — |
| 10 | src/styles/10-figma-slide2-style.css:17-17 | #figmaSlide2 .s2-photo .s2-num | — | font-size | — |
| 10 | src/styles/10-figma-slide2-style.css:18-18 | #figmaSlide2 .s2-photo .s2-label | — | margin-top | — |
| 10 | src/styles/10-figma-slide2-style.css:19-19 | #figmaSlide2 .s2-device | — | position, left, bottom, width, height, transform | — |
| 10 | src/styles/10-figma-slide2-style.css:20-20 | #figmaSlide2 .s2-device:before | — | content, position, left, top, width, height, border-radius, background, box-shadow, transform | — |
| 10 | src/styles/10-figma-slide2-style.css:21-21 | #figmaSlide2 .s2-device:after | — | content, position, left, top, width, height, border-radius, background, box-shadow | — |
| 10 | src/styles/10-figma-slide2-style.css:22-22 | #figmaSlide2 .s2-logo | — | left, top, width, height, display, align-items, justify-content | — |
| 10 | src/styles/10-figma-slide2-style.css:23-23 | #figmaSlide2 .s2-brand | — | display, align-items, gap, font-size, font-weight, letter-spacing, color | — |
| 10 | src/styles/10-figma-slide2-style.css:24-24 | #figmaSlide2 .s2-brandmark | — | width, height, border-radius, background, position, box-shadow | — |
| 10 | src/styles/10-figma-slide2-style.css:25-25 | #figmaSlide2 .s2-brandmark:after | — | content, position, left, top, width, height, border-left, border-bottom, transform, border-radius | — |
| 10 | src/styles/10-figma-slide2-style.css:26-26 | #figmaSlide2 .s2-tasks | — | left, top, width, height, padding | — |
| 10 | src/styles/10-figma-slide2-style.css:27-27 | #figmaSlide2 .s2-tasks .s2-num,#figmaSlide2 .s2-docs .s2-num | — | font-size | — |
| 10 | src/styles/10-figma-slide2-style.css:28-28 | #figmaSlide2 .s2-tasks .s2-label,#figmaSlide2 .s2-docs .s2-label | — | margin-top | — |
| 10 | src/styles/10-figma-slide2-style.css:29-29 | #figmaSlide2 .s2-routeicon | — | position, right, top, width, height, border, border-radius, transform | — |
| 10 | src/styles/10-figma-slide2-style.css:30-30 | #figmaSlide2 .s2-routeicon:before | — | content, position, left, top, width, height, border-radius, border, border-left-color, transform | — |
| 10 | src/styles/10-figma-slide2-style.css:31-31 | #figmaSlide2 .s2-routeicon:after | — | content, position, left, top, width, height, background, border-radius, transform | — |
| 10 | src/styles/10-figma-slide2-style.css:32-32 | #figmaSlide2 .s2-hero | — | left, top, width, height, background | — |
| 10 | src/styles/10-figma-slide2-style.css:33-33 | #figmaSlide2 .s2-hero-lines | — | position, inset, background | — |
| 10 | src/styles/10-figma-slide2-style.css:34-34 | #figmaSlide2 .s2-hero-core | — | position, left, top, width, height, transform, border, border-radius, box-shadow | — |
| 10 | src/styles/10-figma-slide2-style.css:35-35 | #figmaSlide2 .s2-hero-core:before,#figmaSlide2 .s2-hero-core:after | — | content, position, inset, border, transform, border-radius | — |
| 10 | src/styles/10-figma-slide2-style.css:36-36 | #figmaSlide2 .s2-hero-core:after | — | inset, border-color, border-radius | — |
| 10 | src/styles/10-figma-slide2-style.css:37-37 | #figmaSlide2 .s2-docs | — | left, top, width, height, padding | — |
| 10 | src/styles/10-figma-slide2-style.css:38-38 | #figmaSlide2 .s2-docicon | — | position, right, top, width, height, border, border-radius, opacity | — |
| 10 | src/styles/10-figma-slide2-style.css:39-39 | #figmaSlide2 .s2-docicon:before | — | content, position, left, top, width, height, background, box-shadow | — |
| 10 | src/styles/10-figma-slide2-style.css:41-41 | #figmaSlide2 .s2-grid,#figmaSlide2 .s2-glow | — | z-index | — |
| 10 | src/styles/10-figma-slide2-style.css:42-42 | #figmaSlide2 .s2-video-window | — | position, left, top, width, height, border-radius, overflow, z-index, pointer-events, background, box-shadow | — |
| 10 | src/styles/10-figma-slide2-style.css:43-43 | #figmaSlide2 #figmaSlide2Exact | — | position, inset, width, height, max-width, object-fit, object-position, display, pointer-events, background | — |
| 10 | src/styles/10-figma-slide2-style.css:46-46 | #figmaSlide2 .s2-blue-glow-wrap | — | position, left, top, width, height, z-index, mix-blend-mode, opacity, pointer-events, overflow | — |
| 10 | src/styles/10-figma-slide2-style.css:47-47 | #figmaSlide2 .s2-blue-glow-wrap img | — | position, left, top, width, height, max-width, transform | — |
| 10 | src/styles/10-figma-slide2-style.css:48-48 | #figmaSlide2 .s2-earth-img | — | position, left, top, width, height, max-width, object-fit, pointer-events | — |
| 10 | src/styles/10-figma-slide2-style.css:49-49 | #figmaSlide2 .s2-device-img | — | position, left, top, width, height, max-width, object-fit, pointer-events | — |
| 10 | src/styles/10-figma-slide2-style.css:50-50 | #figmaSlide2 .s2-logo-viewport | — | position, left, top, width, height, overflow, pointer-events | — |
| 10 | src/styles/10-figma-slide2-style.css:51-51 | #figmaSlide2 .s2-logo-img | — | position, left, top, width, height, max-width | — |
| 10 | src/styles/10-figma-slide2-style.css:52-52 | #figmaSlide2 .s2-check-img | — | position, left, top, width, height, max-width, pointer-events | — |
| 10 | src/styles/10-figma-slide2-style.css:53-53 | #figmaSlide2 .s2-doc-img | — | position, left, top, width, height, max-width, pointer-events | — |
| 10 | src/styles/10-figma-slide2-style.css:56-56 | #figmaSlide2.show ~ #glow | — | visibility | — |
| 10 | src/styles/10-figma-slide2-style.css:59-59 | #figmaSlide2.assemble .s2-logo | — | animation | — |
| 10 | src/styles/10-figma-slide2-style.css:60-60 | #figmaSlide2.assemble .s2-engineers | — | animation | — |
| 10 | src/styles/10-figma-slide2-style.css:61-61 | #figmaSlide2.assemble .s2-hero | — | animation | — |
| 10 | src/styles/10-figma-slide2-style.css:62-62 | #figmaSlide2.assemble .s2-video-window | — | animation | — |
| 10 | src/styles/10-figma-slide2-style.css:63-63 | #figmaSlide2.assemble .s2-tasks | — | animation | — |
| 10 | src/styles/10-figma-slide2-style.css:64-64 | #figmaSlide2.assemble .s2-docs | — | animation | — |
| 10 | src/styles/10-figma-slide2-style.css:65-65 | #figmaSlide2.assemble .s2-photo | — | animation | — |
| 10 | src/styles/10-figma-slide2-style.css:66-66 | @keyframes s2CenterIn | — | opacity, filter, transform | — |
| 10 | src/styles/10-figma-slide2-style.css:67-67 | @keyframes s2CardEngineers | — | opacity, filter, transform | — |
| 10 | src/styles/10-figma-slide2-style.css:68-68 | @keyframes s2CardHero | — | opacity, filter, transform | — |
| 10 | src/styles/10-figma-slide2-style.css:69-69 | @keyframes s2VideoHero | — | opacity, filter, transform | — |
| 10 | src/styles/10-figma-slide2-style.css:70-70 | @keyframes s2CardTasks | — | opacity, filter, transform | — |
| 10 | src/styles/10-figma-slide2-style.css:71-71 | @keyframes s2CardDocs | — | opacity, filter, transform | — |
| 10 | src/styles/10-figma-slide2-style.css:72-72 | @keyframes s2CardPhoto | — | opacity, filter, transform | — |
| 10 | src/styles/10-figma-slide2-style.css:74-74 | #figmaSlide2 .s2-russia,#figmaSlide2 .s2-device,#figmaSlide2 .s2-brand,#figmaSlide2 .s2-routeicon,#figmaSlide2 .s2-docicon,#figmaSlide2 .s2-glow | — | display | да |
| 10 | src/styles/10-figma-slide2-style.css:76-76 | #figmaSlide6.manual .s6-head,#figmaSlide6.manual .s6-range,#figmaSlide6.manual .s6-start | — | opacity, transform, filter, transition | — |
| 10 | src/styles/10-figma-slide2-style.css:77-77 | #figmaSlide6.manual .s6-era | — | opacity, transition | — |
| 10 | src/styles/10-figma-slide2-style.css:78-78 | #figmaSlide6.manual .s6-era.active | — | opacity, color, text-shadow | — |
| 10 | src/styles/10-figma-slide2-style.css:79-79 | #figmaSlide6.manual .s6-track | — | transform, transition | — |
| 10 | src/styles/10-figma-slide2-style.css:80-80 | #figmaSlide6.manual .s6-line-fill | — | transform, transition | — |
| 10 | src/styles/10-figma-slide2-style.css:81-81 | #figmaSlide6.manual .s6-runner | — | opacity, transform, transition | — |
| 10 | src/styles/10-figma-slide2-style.css:82-82 | #figmaSlide6.manual .s6-node.revealed | — | opacity, transform, filter, transition | — |
| 10 | src/styles/10-figma-slide2-style.css:83-83 | #figmaSlide6.manual .s6-node.active .s6-dot | — | background, box-shadow | — |
| 10 | src/styles/10-figma-slide2-style.css:84-84 | #figmaSlide6.manual .s6-node.active .s6-card | — | background, box-shadow | — |
| 10 | src/styles/10-figma-slide2-style.css:85-85 | #figmaSlide6.manual .s6-final.visible | — | opacity, transform, transition | — |
| 10 | src/styles/10-figma-slide2-style.css:86-86 | #figmaSlide6.manual .s6-range | — | min-width, text-align | — |
| 11 | src/styles/11-figma-slides34-style.css:3-3 | #figmaSlide2 .s2-card,#figmaSlide2 .s2-video-window | — | transition | — |
| 11 | src/styles/11-figma-slides34-style.css:4-4 | #figmaSlide2 .s2-docs | — | transform-origin, will-change, transition | — |
| 11 | src/styles/11-figma-slides34-style.css:5-5 | #figmaSlide2 .s2-doc-img | — | transform-origin, transition | — |
| 11 | src/styles/11-figma-slides34-style.css:6-6 | #figmaSlide2.focus-docs .s2-card:not(.s2-docs),#figmaSlide2.focus-docs .s2-video-window | — | opacity, filter, transform, pointer-events | — |
| 11 | src/styles/11-figma-slides34-style.css:7-7 | #figmaSlide2.focus-docs .s2-docs | — | transform, background, border-color, box-shadow, border-radius, overflow | — |
| 11 | src/styles/11-figma-slides34-style.css:8-8 | #figmaSlide2.focus-docs .s2-doc-img | — | transform | — |
| 11 | src/styles/11-figma-slides34-style.css:9-9 | #figmaSlide2.focus-docs .s2-blue-glow-wrap | — | opacity | — |
| 11 | src/styles/11-figma-slides34-style.css:11-11 | #figmaSlide3Extras | — | position, inset, width, height, z-index, pointer-events, opacity, visibility, transition, overflow | — |
| 11 | src/styles/11-figma-slides34-style.css:12-12 | #figmaSlide3Extras.show | — | opacity, visibility, transition-delay | — |
| 11 | src/styles/11-figma-slides34-style.css:13-13 | #figmaSlide3Extras.out | — | opacity, visibility, transition-delay | — |
| 11 | src/styles/11-figma-slides34-style.css:14-14 | #figmaSlide3Extras .s3-file | — | position, width, height, max-width, opacity, filter, transform, transition | — |
| 11 | src/styles/11-figma-slides34-style.css:15-15 | #figmaSlide3Extras.show .s3-file | — | opacity, filter, transform | — |
| 11 | src/styles/11-figma-slides34-style.css:16-16 | #figmaSlide3Extras .s3-excel | — | left, top, transition-delay | — |
| 11 | src/styles/11-figma-slides34-style.css:17-17 | #figmaSlide3Extras .s3-word | — | left, top, transition-delay | — |
| 11 | src/styles/11-figma-slides34-style.css:18-18 | #figmaSlide3Extras .s3-pdf | — | left, top, transition-delay | — |
| 11 | src/styles/11-figma-slides34-style.css:22-22 | #figmaSlide4 | — | position, inset, width, height, z-index, background, opacity, visibility, pointer-events, transform, filter, transition, overflow, font-family | — |
| 11 | src/styles/11-figma-slides34-style.css:23-23 | #figmaSlide4.show | — | opacity, visibility, pointer-events, transform, filter, transition-delay | — |
| 11 | src/styles/11-figma-slides34-style.css:24-24 | #figmaSlide4.out | — | opacity, visibility, pointer-events, transform, filter | — |
| 11 | src/styles/11-figma-slides34-style.css:25-25 | #figmaSlide4 .s4t-frame | — | position, left, top, width, height, word-break, font-style | — |
| 11 | src/styles/11-figma-slides34-style.css:26-26 | #figmaSlide4 .s4t-percent | — | position, left, top, margin, color, font-weight, font-size, line-height, letter-spacing, white-space | — |
| 11 | src/styles/11-figma-slides34-style.css:27-27 | #figmaSlide4 .s4t-work | — | position, left, top, margin, font-size, line-height, font-weight, letter-spacing, white-space, background, -webkit-background-clip, background-clip, color, text-shadow | — |
| 11 | src/styles/11-figma-slides34-style.css:28-28 | #figmaSlide4 .s4t-search | — | position, left, right, top, bottom, color, font-weight, font-size, line-height, letter-spacing, text-align, white-space, display, align-items, justify-content | — |
| 11 | src/styles/11-figma-slides34-style.css:31-33 | #figmaSlide4 .s4t-percent, #figmaSlide4 .s4t-work, #figmaSlide4 .s4t-search | — | opacity, will-change | — |
| 11 | src/styles/11-figma-slides34-style.css:34-34 | #figmaSlide4 .s4t-percent | — | transform, filter | — |
| 11 | src/styles/11-figma-slides34-style.css:35-35 | #figmaSlide4 .s4t-work | — | transform, filter, text-shadow | — |
| 11 | src/styles/11-figma-slides34-style.css:36-36 | #figmaSlide4 .s4t-search | — | transform, filter | — |
| 11 | src/styles/11-figma-slides34-style.css:37-37 | #figmaSlide4.show .s4t-percent | — | animation | — |
| 11 | src/styles/11-figma-slides34-style.css:38-38 | #figmaSlide4.show .s4t-work | — | animation | — |
| 11 | src/styles/11-figma-slides34-style.css:39-39 | #figmaSlide4.show .s4t-search | — | animation | — |
| 11 | src/styles/11-figma-slides34-style.css:40-42 | #figmaSlide4.out .s4t-percent, #figmaSlide4.out .s4t-work, #figmaSlide4.out .s4t-search | — | animation, opacity | — |
| 11 | src/styles/11-figma-slides34-style.css:43-47 | @keyframes s5TextPercentIn | — | opacity, transform, filter | — |
| 11 | src/styles/11-figma-slides34-style.css:48-52 | @keyframes s5TextWorkIn | — | opacity, transform, filter, text-shadow | — |
| 11 | src/styles/11-figma-slides34-style.css:53-57 | @keyframes s5TextSearchIn | — | opacity, transform, filter | — |
| 11 | src/styles/11-figma-slides34-style.css:59-59 | #figmaSlide5 | — | z-index | — |
| 11 | src/styles/11-figma-slides34-style.css:61-61 | #figmaSlide5 | — | position, inset, width, height, z-index, background, opacity, visibility, pointer-events, transform, filter, transition, overflow, font-family | — |
| 11 | src/styles/11-figma-slides34-style.css:62-62 | #figmaSlide5.show | — | opacity, visibility, pointer-events, transform, filter, transition-delay | — |
| 11 | src/styles/11-figma-slides34-style.css:63-63 | #figmaSlide5.out | — | opacity, visibility, pointer-events, transform, filter | — |
| 11 | src/styles/11-figma-slides34-style.css:64-64 | #figmaSlide5 .s4-glow | — | position, left, top, width, height, mix-blend-mode, opacity, pointer-events | — |
| 11 | src/styles/11-figma-slides34-style.css:65-65 | #figmaSlide5 .s4-glow img | — | position, left, top, width, height, max-width | — |
| 11 | src/styles/11-figma-slides34-style.css:66-66 | #figmaSlide5 .s4-frame | — | position, left, top, width, height | — |
| 11 | src/styles/11-figma-slides34-style.css:67-67 | #figmaSlide5 .s4-num | — | position, left, top, width, margin, font-size, line-height, font-weight, letter-spacing, background, -webkit-background-clip, background-clip, color | — |
| 11 | src/styles/11-figma-slides34-style.css:68-68 | #figmaSlide5 .s4-label | — | position, left, top, color, font-weight, font-size, line-height, white-space, letter-spacing | — |
| 11 | src/styles/11-figma-slides34-style.css:69-69 | #figmaSlide5 .s4-wiki | — | position, width, height, box-sizing, border, border-radius, overflow, box-shadow, background | — |
| 11 | src/styles/11-figma-slides34-style.css:70-70 | #figmaSlide5 .s4-wiki img | — | position, inset, width, height, max-width, object-fit, pointer-events | — |
| 11 | src/styles/11-figma-slides34-style.css:71-71 | #figmaSlide5 .s4-wiki.w1 | — | left, top, z-index | — |
| 11 | src/styles/11-figma-slides34-style.css:72-72 | #figmaSlide5 .s4-wiki.w2 | — | left, top, z-index | — |
| 11 | src/styles/11-figma-slides34-style.css:73-73 | #figmaSlide5 .s4-wiki.w3 | — | left, top, z-index | — |
| 11 | src/styles/11-figma-slides34-style.css:76-76 | #figmaSlide6 | — | position, inset, width, height, z-index, background, opacity, visibility, pointer-events, transform, filter, transition, overflow, font-family, color | — |
| 11 | src/styles/11-figma-slides34-style.css:77-77 | #figmaSlide6.show | — | opacity, visibility, pointer-events, transform, filter, transition-delay | — |
| 11 | src/styles/11-figma-slides34-style.css:78-78 | #figmaSlide6.out | — | opacity, visibility, pointer-events, transform, filter | — |
| 11 | src/styles/11-figma-slides34-style.css:79-79 | #figmaSlide6 .s6-head | — | position, left, top, z-index, opacity, transform, filter | — |
| 11 | src/styles/11-figma-slides34-style.css:80-80 | #figmaSlide6 .s6-kicker | — | font-size, line-height, font-weight, letter-spacing, color, text-transform | — |
| 11 | src/styles/11-figma-slides34-style.css:81-81 | #figmaSlide6 .s6-title | — | margin-top, font-size, line-height, font-weight, letter-spacing | — |
| 11 | src/styles/11-figma-slides34-style.css:82-82 | #figmaSlide6 .s6-title span | — | background, -webkit-background-clip, background-clip, color, text-shadow | — |
| 11 | src/styles/11-figma-slides34-style.css:83-83 | #figmaSlide6 .s6-range | — | position, right, top, z-index, padding, border, border-radius, background, font-size, font-weight, opacity, transform | — |
| 11 | src/styles/11-figma-slides34-style.css:84-84 | #figmaSlide6 .s6-viewport | — | position, left, right, top, height, overflow, mask-image, -webkit-mask-image | — |
| 11 | src/styles/11-figma-slides34-style.css:85-85 | #figmaSlide6 .s6-track | — | position, left, top, width, height, transform, will-change | — |
| 11 | src/styles/11-figma-slides34-style.css:86-86 | #figmaSlide6 .s6-line-base | — | position, left, top, width, height, border-radius, background | — |
| 11 | src/styles/11-figma-slides34-style.css:87-87 | #figmaSlide6 .s6-line-fill | — | position, left, top, width, height, border-radius, background, box-shadow, transform-origin, transform | — |
| 11 | src/styles/11-figma-slides34-style.css:88-88 | #figmaSlide6 .s6-runner | — | position, left, top, width, height, border-radius, background, box-shadow, opacity, will-change | — |
| 11 | src/styles/11-figma-slides34-style.css:89-89 | #figmaSlide6 .s6-era | — | display | — |
| 11 | src/styles/11-figma-slides34-style.css:90-90 | #figmaSlide6 .s6-era.spring | — | left | — |
| 11 | src/styles/11-figma-slides34-style.css:90-90 | #figmaSlide6 .s6-era.summer | — | left | — |
| 11 | src/styles/11-figma-slides34-style.css:90-90 | #figmaSlide6 .s6-era.autumn | — | left | — |
| 11 | src/styles/11-figma-slides34-style.css:91-91 | #figmaSlide6 .s6-node | — | position, left, top, width, height, opacity, will-change, transform, filter | — |
| 11 | src/styles/11-figma-slides34-style.css:92-92 | #figmaSlide6 .s6-dot | — | position, left, top, width, height, border-radius, background, border, box-sizing, box-shadow | — |
| 11 | src/styles/11-figma-slides34-style.css:93-93 | #figmaSlide6 .s6-stem | — | position, left, width, height, background, box-shadow | — |
| 11 | src/styles/11-figma-slides34-style.css:94-94 | #figmaSlide6 .s6-node.up .s6-stem | — | bottom | — |
| 11 | src/styles/11-figma-slides34-style.css:94-94 | #figmaSlide6 .s6-node.down .s6-stem | — | top | — |
| 11 | src/styles/11-figma-slides34-style.css:95-95 | #figmaSlide6 .s6-date | — | position, left, width, padding, border-radius, text-align, font-size, line-height, font-weight, color, background, box-shadow, white-space | — |
| 11 | src/styles/11-figma-slides34-style.css:96-96 | #figmaSlide6 .s6-node.up .s6-date | — | top | — |
| 11 | src/styles/11-figma-slides34-style.css:96-96 | #figmaSlide6 .s6-node.down .s6-date | — | bottom | — |
| 11 | src/styles/11-figma-slides34-style.css:97-97 | #figmaSlide6 .s6-card | — | position, width, min-height, padding, box-sizing, background, backdrop-filter, -webkit-backdrop-filter | — |
| 11 | src/styles/11-figma-slides34-style.css:98-98 | #figmaSlide6 .s6-node.up .s6-card | — | left, bottom, border-bottom | — |
| 11 | src/styles/11-figma-slides34-style.css:99-99 | #figmaSlide6 .s6-node.down .s6-card | — | left, top, border-top | — |
| 11 | src/styles/11-figma-slides34-style.css:100-100 | #figmaSlide6 .s6-card.wide | — | width | — |
| 11 | src/styles/11-figma-slides34-style.css:100-100 | .s6-node.up .s6-card.wide,.s6-node.down .s6-card.wide | — | left | — |
| 11 | src/styles/11-figma-slides34-style.css:101-101 | #figmaSlide6 .s6-card-title | — | font-size, line-height, font-weight, letter-spacing, background, -webkit-background-clip, background-clip, color | — |
| 11 | src/styles/11-figma-slides34-style.css:102-102 | #figmaSlide6 .s6-card-text | — | margin-top, font-size, line-height, font-weight, color | — |
| 11 | src/styles/11-figma-slides34-style.css:103-103 | #figmaSlide6 .s6-start | — | position, left, top, width, font-size, line-height, color, opacity | — |
| 11 | src/styles/11-figma-slides34-style.css:104-104 | #figmaSlide6 .s6-start strong | — | display, margin-bottom, font-size, color, font-weight | — |
| 11 | src/styles/11-figma-slides34-style.css:105-105 | #figmaSlide6 .s6-final | — | position, right, bottom, z-index, font-size, color, opacity, transform | — |
| 11 | src/styles/11-figma-slides34-style.css:106-106 | #figmaSlide6.show.play .s6-head | — | animation | — |
| 11 | src/styles/11-figma-slides34-style.css:107-107 | #figmaSlide6.show.play .s6-range | — | animation | — |
| 11 | src/styles/11-figma-slides34-style.css:108-108 | #figmaSlide6.show.play .s6-era | — | animation | — |
| 11 | src/styles/11-figma-slides34-style.css:108-108 | .s6-era.spring | — | animation-delay | да |
| 11 | src/styles/11-figma-slides34-style.css:108-108 | .s6-era.summer | — | animation-delay | да |
| 11 | src/styles/11-figma-slides34-style.css:108-108 | .s6-era.autumn | — | animation-delay | да |
| 11 | src/styles/11-figma-slides34-style.css:109-109 | #figmaSlide6.show.play .s6-line-fill | — | animation | — |
| 11 | src/styles/11-figma-slides34-style.css:110-110 | #figmaSlide6.show.play .s6-runner | — | animation | — |
| 11 | src/styles/11-figma-slides34-style.css:111-111 | #figmaSlide6.show.play .s6-track | — | animation | — |
| 11 | src/styles/11-figma-slides34-style.css:112-112 | #figmaSlide6.show.play .s6-start | — | animation | — |
| 11 | src/styles/11-figma-slides34-style.css:113-113 | #figmaSlide6.show.play .s6-node | — | animation | — |
| 11 | src/styles/11-figma-slides34-style.css:114-114 | #figmaSlide6.show.play .s6-final | — | animation | — |
| 11 | src/styles/11-figma-slides34-style.css:115-115 | @keyframes s6FadeUp | — | opacity, transform, filter | — |
| 11 | src/styles/11-figma-slides34-style.css:116-116 | @keyframes s6SoftIn | — | opacity | — |
| 11 | src/styles/11-figma-slides34-style.css:117-117 | @keyframes s6NodeIn | — | opacity, transform, filter | — |
| 11 | src/styles/11-figma-slides34-style.css:118-118 | @keyframes s6Draw | — | transform | — |
| 11 | src/styles/11-figma-slides34-style.css:119-119 | @keyframes s6Runner | — | opacity, transform | — |
| 11 | src/styles/11-figma-slides34-style.css:120-120 | @keyframes s6Pan | — | transform | — |
| 11 | src/styles/11-figma-slides34-style.css:121-121 | #figmaSlide6.show .s6-head,#figmaSlide6.show .s6-range,#figmaSlide6.show .s6-era,#figmaSlide6.show .s6-start,#figmaSlide6.show .s6-node,#figmaSlide6.show .s6-final | @media (prefers-reduced-motion:reduce) | opacity, transform, filter | да |
| 11 | src/styles/11-figma-slides34-style.css:121-121 | #figmaSlide6.show .s6-line-fill | @media (prefers-reduced-motion:reduce) | transform | да |
| 11 | src/styles/11-figma-slides34-style.css:121-121 | #figmaSlide6.show .s6-track | @media (prefers-reduced-motion:reduce) | transform | да |
| 11 | src/styles/11-figma-slides34-style.css:124-124 | #figmaSlide6.manual .s6-head,#figmaSlide6.manual .s6-range,#figmaSlide6.manual .s6-start | — | opacity, transform, filter, transition | — |
| 11 | src/styles/11-figma-slides34-style.css:125-125 | #figmaSlide6.manual .s6-era | — | opacity, transition | — |
| 11 | src/styles/11-figma-slides34-style.css:126-126 | #figmaSlide6.manual .s6-era.active | — | opacity, color, text-shadow | — |
| 11 | src/styles/11-figma-slides34-style.css:127-127 | #figmaSlide6.manual .s6-track | — | transform, transition | — |
| 11 | src/styles/11-figma-slides34-style.css:128-128 | #figmaSlide6.manual .s6-line-fill | — | transform, transition | — |
| 11 | src/styles/11-figma-slides34-style.css:129-129 | #figmaSlide6.manual .s6-runner | — | opacity, transform, transition | — |
| 11 | src/styles/11-figma-slides34-style.css:130-130 | #figmaSlide6.manual .s6-node.revealed | — | opacity, transform, filter, transition | — |
| 11 | src/styles/11-figma-slides34-style.css:131-131 | #figmaSlide6.manual .s6-node.active .s6-dot | — | background, box-shadow | — |
| 11 | src/styles/11-figma-slides34-style.css:132-132 | #figmaSlide6.manual .s6-node.active .s6-card | — | background, box-shadow | — |
| 11 | src/styles/11-figma-slides34-style.css:133-133 | #figmaSlide6.manual .s6-final.visible | — | opacity, transform, transition | — |
| 11 | src/styles/11-figma-slides34-style.css:134-134 | #figmaSlide6.manual .s6-range | — | min-width, text-align | — |
| 12 | src/styles/12-slide7-simple-152-896.css:3-3 | #figmaSlide7 | — | background | — |
| 12 | src/styles/12-slide7-simple-152-896.css:4-4 | #figmaSlide7 .s7-simple | — | position, inset, width, height, overflow | — |
| 12 | src/styles/12-slide7-simple-152-896.css:5-5 | #figmaSlide7 .s7-theses | — | position, left, top, width, height, display, flex-direction, justify-content, gap, z-index | — |
| 12 | src/styles/12-slide7-simple-152-896.css:6-6 | #figmaSlide7 .s7-thesis | — | margin, font-family, font-weight, font-size, line-height, letter-spacing, color, opacity, transform, filter, will-change | — |
| 12 | src/styles/12-slide7-simple-152-896.css:7-7 | #figmaSlide7 .s7-thesis .s7-strong | — | font-weight, color | — |
| 12 | src/styles/12-slide7-simple-152-896.css:8-8 | #figmaSlide7 .s7-thesis .s7-accent | — | font-weight, background, -webkit-background-clip, background-clip, color, text-shadow | — |
| 12 | src/styles/12-slide7-simple-152-896.css:9-9 | #figmaSlide7 .s7-meme | — | position, left, top, width, height, border-radius, overflow, z-index, opacity, transform, filter, box-shadow, will-change | — |
| 12 | src/styles/12-slide7-simple-152-896.css:10-10 | #figmaSlide7 .s7-meme img | — | display, width, height, object-fit, object-position | — |
| 12 | src/styles/12-slide7-simple-152-896.css:11-11 | #figmaSlide7.show .s7-thesis-1 | — | animation | — |
| 12 | src/styles/12-slide7-simple-152-896.css:12-12 | #figmaSlide7.show .s7-thesis-2 | — | animation | — |
| 12 | src/styles/12-slide7-simple-152-896.css:13-13 | #figmaSlide7.show .s7-meme | — | animation | — |
| 12 | src/styles/12-slide7-simple-152-896.css:14-14 | @keyframes s7SimpleTextIn | — | opacity, transform, filter | — |
| 12 | src/styles/12-slide7-simple-152-896.css:15-15 | @keyframes s7SimpleMemeIn | — | opacity, transform, filter | — |
| 13 | src/styles/13-rag-reauthed-style.css:3-3 | .pdfRestSlide.ee-slide | — | position, inset, width, height, background, opacity, pointer-events, z-index, overflow, transition | — |
| 13 | src/styles/13-rag-reauthed-style.css:4-4 | .pdfRestSlide.ee-slide.show | — | opacity, pointer-events | — |
| 13 | src/styles/13-rag-reauthed-style.css:5-5 | .pdfRestSlide.ee-slide.out | — | opacity, pointer-events | — |
| 13 | src/styles/13-rag-reauthed-style.css:6-6 | .ee-slide .pdf-stage | — | position, left, top, width, height, opacity, transform, filter, will-change | — |
| 13 | src/styles/13-rag-reauthed-style.css:7-7 | .ee-slide.show .pdf-stage | — | animation | — |
| 13 | src/styles/13-rag-reauthed-style.css:8-8 | .ee-slide.out .pdf-stage | — | animation | — |
| 13 | src/styles/13-rag-reauthed-style.css:9-9 | @keyframes eeStageIn | — | opacity, transform, filter | — |
| 13 | src/styles/13-rag-reauthed-style.css:10-10 | @keyframes eeStageOut | — | opacity, transform, filter | — |
| 13 | src/styles/13-rag-reauthed-style.css:11-11 | .ee-slide .ee-canvas | — | position, width, height, overflow, box-sizing, padding, border-radius, border, background, box-shadow, font-family, color | — |
| 13 | src/styles/13-rag-reauthed-style.css:12-12 | .ee-slide .ee-canvas:before | — | content, position, inset, pointer-events, opacity, background-image, background-size, mask-image | — |
| 13 | src/styles/13-rag-reauthed-style.css:13-13 | .ee-slide .ee-canvas:after | — | content, pointer-events, position, left, right, top, height, background | — |
| 13 | src/styles/13-rag-reauthed-style.css:14-14 | .ee-slide .ee-header | — | position, z-index, margin-bottom | — |
| 13 | src/styles/13-rag-reauthed-style.css:15-15 | .ee-slide .ee-eyebrow | — | color, letter-spacing, font, margin-bottom | — |
| 13 | src/styles/13-rag-reauthed-style.css:16-16 | .ee-slide .ee-header h2 | — | font, letter-spacing, margin, color | — |
| 13 | src/styles/13-rag-reauthed-style.css:17-17 | .ee-slide .ee-header p | — | font, color, margin | — |
| 13 | src/styles/13-rag-reauthed-style.css:18-18 | .ee-slide .ee-gradient | — | font-weight, background, -webkit-background-clip, background-clip, color | — |
| 13 | src/styles/13-rag-reauthed-style.css:19-19 | .ee-slide .ee-content | — | position, z-index, min-height, height | — |
| 13 | src/styles/13-rag-reauthed-style.css:20-20 | .ee-slide .ee-index | — | position, bottom, right, font, color, letter-spacing | — |
| 13 | src/styles/13-rag-reauthed-style.css:21-21 | .ee-slide .ee-reveal | — | opacity, transform, filter | — |
| 13 | src/styles/13-rag-reauthed-style.css:22-22 | .ee-slide.show .ee-reveal | — | animation, animation-delay | — |
| 13 | src/styles/13-rag-reauthed-style.css:23-23 | @keyframes eeReveal | — | opacity, transform, filter | — |
| 13 | src/styles/13-rag-reauthed-style.css:24-24 | .ee-slide .ee-card,.ee-slide .ee-block | — | background, border, border-radius, padding, box-sizing, box-shadow | — |
| 13 | src/styles/13-rag-reauthed-style.css:25-25 | .ee-slide .ee-kicker | — | font-size, font-weight, color, margin-bottom | — |
| 13 | src/styles/13-rag-reauthed-style.css:26-26 | .ee-slide .ee-copy | — | font-size, line-height, font-weight, color | — |
| 13 | src/styles/13-rag-reauthed-style.css:27-27 | .ee-slide .ee-copy code,.ee-slide .ee-block-body code | — | font-family, color | — |
| 13 | src/styles/13-rag-reauthed-style.css:28-28 | .ee-slide .ee-block-label | — | color, font-size, font-weight, margin-bottom | — |
| 13 | src/styles/13-rag-reauthed-style.css:29-29 | .ee-slide .ee-block-body | — | font-size, line-height | — |
| 13 | src/styles/13-rag-reauthed-style.css:30-30 | .ee-slide .ee-pills | — | display, flex-wrap, gap | — |
| 13 | src/styles/13-rag-reauthed-style.css:31-31 | .ee-slide .ee-pills>span | — | padding, border-radius, background, border, font-size, color | — |
| 13 | src/styles/13-rag-reauthed-style.css:33-33 | .ee-slide .ee-compare | — | display, grid-template-columns, gap, height, padding-top, box-sizing | — |
| 13 | src/styles/13-rag-reauthed-style.css:34-34 | .ee-slide .ee-side | — | padding, border, border-radius, position, background | — |
| 13 | src/styles/13-rag-reauthed-style.css:35-35 | .ee-slide .ee-negative | — | border-color | — |
| 13 | src/styles/13-rag-reauthed-style.css:35-35 | .ee-slide .ee-positive | — | border-color | — |
| 13 | src/styles/13-rag-reauthed-style.css:36-36 | .ee-slide .ee-side-top | — | font-size, color, min-height | — |
| 13 | src/styles/13-rag-reauthed-style.css:36-36 | .ee-slide .ee-side-top b | — | color | — |
| 13 | src/styles/13-rag-reauthed-style.css:37-37 | .ee-slide .ee-vchain | — | display, grid-template-rows, gap, height | — |
| 13 | src/styles/13-rag-reauthed-style.css:38-38 | .ee-slide .ee-vchain>div | — | position, border-radius, padding, background, border-left | — |
| 13 | src/styles/13-rag-reauthed-style.css:39-39 | .ee-slide .ee-negative .ee-vchain>div | — | border-left-color | — |
| 13 | src/styles/13-rag-reauthed-style.css:39-39 | .ee-slide .ee-positive .ee-vchain>div | — | border-left-color | — |
| 13 | src/styles/13-rag-reauthed-style.css:40-40 | .ee-slide .ee-vchain>div:not(:last-child):after | — | content, position, bottom, left, color, font-size, z-index | — |
| 13 | src/styles/13-rag-reauthed-style.css:41-41 | .ee-slide .ee-vchain small | — | display, color, font-size, margin-bottom | — |
| 13 | src/styles/13-rag-reauthed-style.css:42-42 | .ee-slide .ee-negative .ee-vchain small | — | color | — |
| 13 | src/styles/13-rag-reauthed-style.css:43-43 | .ee-slide .ee-vchain strong | — | font-size, line-height, font-weight, display | — |
| 13 | src/styles/13-rag-reauthed-style.css:44-44 | .ee-slide .ee-vs | — | align-self, justify-self, font-size, letter-spacing, color, writing-mode | — |
| 13 | src/styles/13-rag-reauthed-style.css:46-46 | .ee-slide .ee-discovery | — | box-sizing, border, border-radius, padding, background, position | — |
| 13 | src/styles/13-rag-reauthed-style.css:47-47 | .ee-slide .ee-speedo-wrap | — | display, grid-template-columns, justify-items, width | — |
| 13 | src/styles/13-rag-reauthed-style.css:48-48 | .ee-slide .ee-speedo-card | — | width, max-width, display, grid-template-columns, gap, align-items | — |
| 13 | src/styles/13-rag-reauthed-style.css:49-49 | .ee-slide .ee-speedometer | — | position, height, width, max-width, margin | — |
| 13 | src/styles/13-rag-reauthed-style.css:50-50 | .ee-slide .ee-speedometer svg | — | width, height, display, overflow | — |
| 13 | src/styles/13-rag-reauthed-style.css:51-51 | .ee-slide .ee-gauge-bg | — | fill, stroke, stroke-width, stroke-linecap | — |
| 13 | src/styles/13-rag-reauthed-style.css:52-52 | .ee-slide .ee-gauge-active | — | fill, stroke, stroke-width, stroke-linecap, filter, stroke-dasharray, stroke-dashoffset | — |
| 13 | src/styles/13-rag-reauthed-style.css:53-53 | .ee-slide .ee-gauge-tick | — | stroke, stroke-width, stroke-linecap | — |
| 13 | src/styles/13-rag-reauthed-style.css:54-54 | .ee-slide .ee-gauge-tick.major | — | stroke, stroke-width | — |
| 13 | src/styles/13-rag-reauthed-style.css:55-55 | .ee-slide .ee-gauge-label | — | font, fill | — |
| 13 | src/styles/13-rag-reauthed-style.css:56-56 | .ee-slide .ee-gauge-label.strong | — | fill | — |
| 13 | src/styles/13-rag-reauthed-style.css:57-57 | .ee-slide .ee-speedo-needle | — | transform-box, transform-origin, transform | — |
| 13 | src/styles/13-rag-reauthed-style.css:58-58 | .ee-slide .ee-speedo-needle line | — | stroke, stroke-width, stroke-linecap, filter | — |
| 13 | src/styles/13-rag-reauthed-style.css:59-59 | .ee-slide .ee-speedo-needle circle | — | fill, stroke, stroke-width, filter | — |
| 13 | src/styles/13-rag-reauthed-style.css:60-60 | .ee-slide .ee-speedo-center | — | position, left, top, transform, display, flex-direction, align-items, gap, text-align | — |
| 13 | src/styles/13-rag-reauthed-style.css:61-61 | .ee-slide .ee-speedo-center b | — | font-size, line-height, background, -webkit-background-clip, background-clip, color, text-shadow | — |
| 13 | src/styles/13-rag-reauthed-style.css:62-62 | .ee-slide .ee-speedo-center span | — | font-size, color, letter-spacing | — |
| 13 | src/styles/13-rag-reauthed-style.css:63-63 | .ee-slide .ee-speedo-side | — | display, flex-direction, gap, align-items | — |
| 13 | src/styles/13-rag-reauthed-style.css:64-64 | .ee-slide .ee-speedo-note | — | padding, border-radius, border, background, font-size, line-height, color | — |
| 13 | src/styles/13-rag-reauthed-style.css:65-65 | .ee-slide .ee-speedo-note strong | — | display, font-size, font-weight, letter-spacing, color, text-transform, margin-bottom | — |
| 13 | src/styles/13-rag-reauthed-style.css:66-66 | .ee-slide .ee-speedo-legend | — | display, grid-template-columns, gap | — |
| 13 | src/styles/13-rag-reauthed-style.css:67-67 | .ee-slide .ee-stat | — | padding, border-radius, border, background | — |
| 13 | src/styles/13-rag-reauthed-style.css:68-68 | .ee-slide .ee-stat small | — | display, font-size, color, margin-bottom, line-height | — |
| 13 | src/styles/13-rag-reauthed-style.css:69-69 | .ee-slide .ee-stat strong | — | font-size, line-height, color, font-weight | — |
| 13 | src/styles/13-rag-reauthed-style.css:70-70 | .ee-slide .ee-stat.new strong | — | background, -webkit-background-clip, background-clip, color | — |
| 13 | src/styles/13-rag-reauthed-style.css:71-71 | .ee-slide .ee-stat.new | — | border-color, box-shadow | — |
| 13 | src/styles/13-rag-reauthed-style.css:72-72 | .ee-slide .ee-stat.old strong | — | color | — |
| 13 | src/styles/13-rag-reauthed-style.css:73-73 | .ee-slide .ee-three | — | display, grid-template-columns, gap, margin-top | — |
| 13 | src/styles/13-rag-reauthed-style.css:74-74 | .ee-slide .ee-three .ee-card | — | min-height | — |
| 13 | src/styles/13-rag-reauthed-style.css:75-75 | #pdfSlide9.show .ee-gauge-active | — | animation | — |
| 13 | src/styles/13-rag-reauthed-style.css:76-76 | #pdfSlide9.show .ee-speedo-needle | — | animation | — |
| 13 | src/styles/13-rag-reauthed-style.css:77-77 | #pdfSlide9.show .ee-speedo-center b | — | animation | — |
| 13 | src/styles/13-rag-reauthed-style.css:78-78 | #pdfSlide9.show .ee-stat.new | — | animation | — |
| 13 | src/styles/13-rag-reauthed-style.css:79-79 | @keyframes eeGaugeSweep | — | stroke-dashoffset | — |
| 13 | src/styles/13-rag-reauthed-style.css:80-80 | @keyframes eeNeedleSweep | — | transform | — |
| 13 | src/styles/13-rag-reauthed-style.css:81-81 | @keyframes eeSpeedPulse | — | transform, opacity | — |
| 13 | src/styles/13-rag-reauthed-style.css:82-82 | @keyframes eeSpeedCardGlow | — | box-shadow | — |
| 13 | src/styles/13-rag-reauthed-style.css:84-84 | .ee-slide .ee-traps | — | display, grid-template-rows, gap, height | — |
| 13 | src/styles/13-rag-reauthed-style.css:85-85 | .ee-slide .ee-trap | — | padding | — |
| 13 | src/styles/13-rag-reauthed-style.css:85-85 | .ee-slide .ee-trap h3 | — | font, margin | — |
| 13 | src/styles/13-rag-reauthed-style.css:85-85 | .ee-slide .ee-trap h3 span | — | color, font-weight, margin-right | — |
| 13 | src/styles/13-rag-reauthed-style.css:85-85 | .ee-slide .ee-trap h3 small | — | font-size, color | — |
| 13 | src/styles/13-rag-reauthed-style.css:86-86 | .ee-slide .ee-trap-flow | — | display, grid-template-columns, align-items, gap, height | — |
| 13 | src/styles/13-rag-reauthed-style.css:87-87 | .ee-slide .ee-trap-sym,.ee-slide .ee-trap-cure | — | padding, border-radius, background, border | — |
| 13 | src/styles/13-rag-reauthed-style.css:88-88 | .ee-slide .ee-trap-sym | — | border-left | — |
| 13 | src/styles/13-rag-reauthed-style.css:88-88 | .ee-slide .ee-trap-cure | — | border-left | — |
| 13 | src/styles/13-rag-reauthed-style.css:89-89 | .ee-slide .ee-trap-sym b | — | color | — |
| 13 | src/styles/13-rag-reauthed-style.css:89-89 | .ee-slide .ee-trap-cure b | — | color | — |
| 13 | src/styles/13-rag-reauthed-style.css:90-90 | .ee-slide .ee-trap-sym b,.ee-slide .ee-trap-cure b | — | font-size | — |
| 13 | src/styles/13-rag-reauthed-style.css:90-90 | .ee-slide .ee-trap-flow p | — | font-size, line-height, margin | — |
| 13 | src/styles/13-rag-reauthed-style.css:90-90 | .ee-slide .ee-trap-arrow | — | align-self, text-align, color, font-size | — |
| 13 | src/styles/13-rag-reauthed-style.css:92-92 | .ee-slide .ee-prd-lead | — | font-size, color, margin | — |
| 13 | src/styles/13-rag-reauthed-style.css:92-92 | .ee-slide .ee-prd-lead strong | — | color, font-weight | — |
| 13 | src/styles/13-rag-reauthed-style.css:93-93 | .ee-slide .ee-prd-layout | — | display, grid-template-columns, gap, height | — |
| 13 | src/styles/13-rag-reauthed-style.css:94-94 | .ee-slide .ee-prd-sheet | — | position, min-height, border, background, border-radius, margin, padding, box-shadow | — |
| 13 | src/styles/13-rag-reauthed-style.css:95-95 | .ee-slide .ee-prd-tab | — | position, top, left, padding, background, border, border-bottom-right-radius, font, color | — |
| 13 | src/styles/13-rag-reauthed-style.css:96-96 | .ee-slide .ee-code-lines | — | display, gap | — |
| 13 | src/styles/13-rag-reauthed-style.css:96-96 | .ee-slide .ee-code-lines span | — | height, background, border-radius | — |
| 13 | src/styles/13-rag-reauthed-style.css:96-96 | .ee-slide .ee-code-lines .w80 | — | width | — |
| 13 | src/styles/13-rag-reauthed-style.css:96-96 | .ee-slide .ee-code-lines .w55 | — | width | — |
| 13 | src/styles/13-rag-reauthed-style.css:96-96 | .ee-slide .ee-code-lines .w95 | — | width | — |
| 13 | src/styles/13-rag-reauthed-style.css:96-96 | .ee-slide .ee-code-lines .w65 | — | width | — |
| 13 | src/styles/13-rag-reauthed-style.css:96-96 | .ee-slide .ee-code-lines .w90 | — | width | — |
| 13 | src/styles/13-rag-reauthed-style.css:96-96 | .ee-slide .ee-code-lines .w45 | — | width | — |
| 13 | src/styles/13-rag-reauthed-style.css:96-96 | .ee-slide .ee-code-lines .w75 | — | width | — |
| 13 | src/styles/13-rag-reauthed-style.css:96-96 | .ee-slide .ee-code-lines .w85 | — | width | — |
| 13 | src/styles/13-rag-reauthed-style.css:97-97 | .ee-slide .ee-prd-points | — | display, gap, grid-template-rows | — |
| 13 | src/styles/13-rag-reauthed-style.css:97-97 | .ee-slide .ee-prd-c | — | padding | — |
| 13 | src/styles/13-rag-reauthed-style.css:97-97 | .ee-slide .ee-prd-c .ee-kicker | — | margin-bottom | — |
| 13 | src/styles/13-rag-reauthed-style.css:97-97 | .ee-slide .ee-prd-c .ee-copy | — | font-size | — |
| 13 | src/styles/13-rag-reauthed-style.css:99-99 | .ee-slide .ee-adr-sub | — | font-size, color, margin | — |
| 13 | src/styles/13-rag-reauthed-style.css:100-100 | .ee-slide .ee-adr-layout | — | display, grid-template-columns, gap, height | — |
| 13 | src/styles/13-rag-reauthed-style.css:101-101 | .ee-slide .ee-adr-table | — | border, border-radius, overflow, display, flex-direction, background | — |
| 13 | src/styles/13-rag-reauthed-style.css:102-102 | .ee-slide .ee-adr-table>div | — | display, grid-template-columns, gap, align-items, min-height, padding, box-sizing, border-bottom, font | — |
| 13 | src/styles/13-rag-reauthed-style.css:102-102 | .ee-slide .ee-adr-table>div:last-child | — | border, background, border-radius, margin | — |
| 13 | src/styles/13-rag-reauthed-style.css:102-102 | .ee-slide .ee-adr-table>.ee-table-header | — | min-height, font-size, color, background, text-transform | — |
| 13 | src/styles/13-rag-reauthed-style.css:103-103 | .ee-slide .ee-adr-detail | — | border, border-radius, padding, background | — |
| 13 | src/styles/13-rag-reauthed-style.css:104-104 | .ee-slide .ee-detail-title | — | font-size, font-weight, color, margin | — |
| 13 | src/styles/13-rag-reauthed-style.css:105-105 | .ee-slide .ee-decision | — | display, grid-template-columns, gap, align-items, padding, border-bottom, font-size, line-height | — |
| 13 | src/styles/13-rag-reauthed-style.css:106-106 | .ee-slide .ee-decision b | — | font-size, color, font-weight | — |
| 13 | src/styles/13-rag-reauthed-style.css:106-106 | .ee-slide .ee-decision.selected | — | border, border-radius, background | — |
| 13 | src/styles/13-rag-reauthed-style.css:107-107 | .ee-slide .ee-adr-bot | — | display, grid-template-columns, gap, margin-top | — |
| 13 | src/styles/13-rag-reauthed-style.css:107-107 | .ee-slide .ee-adr-bot>div | — | border-radius, border, padding, font-size, line-height | — |
| 13 | src/styles/13-rag-reauthed-style.css:107-107 | .ee-slide .ee-adr-bot b | — | display, color, margin-bottom | — |
| 13 | src/styles/13-rag-reauthed-style.css:109-109 | .ee-slide .ee-layers | — | display, grid-template-rows, gap, height, padding | — |
| 13 | src/styles/13-rag-reauthed-style.css:110-110 | .ee-slide .ee-layer | — | border-radius, border, display, grid-template-columns, align-items, padding, background | — |
| 13 | src/styles/13-rag-reauthed-style.css:111-111 | .ee-slide .ee-layer-name | — | font-size, font-weight, color | — |
| 13 | src/styles/13-rag-reauthed-style.css:111-111 | .ee-slide .ee-layer-nodes | — | display, gap, justify-content | — |
| 13 | src/styles/13-rag-reauthed-style.css:111-111 | .ee-slide .ee-layer-node | — | font-size, line-height, text-align, display, justify-content, align-items, min-height, flex, border, border-radius, padding, background | — |
| 13 | src/styles/13-rag-reauthed-style.css:111-111 | .ee-slide .ee-layer:nth-child(2n) .ee-layer-node | — | border-color, background | — |
| 13 | src/styles/13-rag-reauthed-style.css:111-111 | .ee-slide .ee-layer-node small | — | font-size, color | — |
| 13 | src/styles/13-rag-reauthed-style.css:113-113 | .ee-slide .ee-verify-grid | — | height, display, grid-template-columns, gap | — |
| 13 | src/styles/13-rag-reauthed-style.css:113-113 | .ee-slide .ee-verify-side | — | background, border, border-radius, padding | — |
| 13 | src/styles/13-rag-reauthed-style.css:113-113 | .ee-slide .ee-verify-side:last-child | — | border-color | — |
| 13 | src/styles/13-rag-reauthed-style.css:114-114 | .ee-slide .ee-verify-kicker | — | color, font-size, margin-bottom | — |
| 13 | src/styles/13-rag-reauthed-style.css:114-114 | .ee-slide .ee-verify-name | — | font-size, font-weight, line-height | — |
| 13 | src/styles/13-rag-reauthed-style.css:114-114 | .ee-slide .ee-verify-alias | — | font-size, color, margin-top | — |
| 13 | src/styles/13-rag-reauthed-style.css:114-114 | .ee-slide .ee-verify-info | — | margin-top, border-top, padding-top, font-size, line-height | — |
| 13 | src/styles/13-rag-reauthed-style.css:114-114 | .ee-slide .ee-verify-separator | — | writing-mode, transform, align-self, justify-self, color, font-size, border-left, padding-left | — |
| 13 | src/styles/13-rag-reauthed-style.css:116-116 | .ee-slide .ee-stack-layout | — | display, grid-template-columns, gap, height | — |
| 13 | src/styles/13-rag-reauthed-style.css:116-116 | .ee-slide .ee-stack-left | — | display, flex-direction, align-items | — |
| 13 | src/styles/13-rag-reauthed-style.css:116-116 | .ee-slide .ee-stack-left>.ee-block | — | width, text-align, padding | — |
| 13 | src/styles/13-rag-reauthed-style.css:116-116 | .ee-slide .ee-stack-left>.ee-block .ee-block-label | — | font-size | — |
| 13 | src/styles/13-rag-reauthed-style.css:116-116 | .ee-slide .ee-stack-left>.ee-block .ee-block-body | — | font-size | — |
| 13 | src/styles/13-rag-reauthed-style.css:116-116 | .ee-slide .ee-stack-link | — | font-size, color, line-height | — |
| 13 | src/styles/13-rag-reauthed-style.css:116-116 | .ee-slide .ee-stack-bottom | — | display, grid-template-columns, gap | — |
| 13 | src/styles/13-rag-reauthed-style.css:116-116 | .ee-slide .ee-stack-bottom .ee-block | — | padding | — |
| 13 | src/styles/13-rag-reauthed-style.css:116-116 | .ee-slide .ee-stack-bottom .ee-block-label | — | font-size | — |
| 13 | src/styles/13-rag-reauthed-style.css:116-116 | .ee-slide .ee-stack-bottom .ee-block-body | — | font-size | — |
| 13 | src/styles/13-rag-reauthed-style.css:117-117 | .ee-slide .ee-react | — | position, border-radius, border, padding, text-align | — |
| 13 | src/styles/13-rag-reauthed-style.css:117-117 | .ee-slide .ee-react-title | — | font-size, font-weight | — |
| 13 | src/styles/13-rag-reauthed-style.css:117-117 | .ee-slide .ee-react-title small | — | display, font-size, color, font-weight, margin-top | — |
| 13 | src/styles/13-rag-reauthed-style.css:117-117 | .ee-slide .ee-react-loop | — | position, width, height, margin | — |
| 13 | src/styles/13-rag-reauthed-style.css:117-117 | .ee-slide .ee-ring | — | border-radius, border, position, inset, animation, z-index | — |
| 13 | src/styles/13-rag-reauthed-style.css:117-117 | .ee-slide .ee-react-node | — | position, z-index, min-width, padding, background, border, color, border-radius, font-size | — |
| 13 | src/styles/13-rag-reauthed-style.css:117-117 | .ee-slide .r-thought | — | right, top | — |
| 13 | src/styles/13-rag-reauthed-style.css:117-117 | .ee-slide .r-action | — | bottom, left | — |
| 13 | src/styles/13-rag-reauthed-style.css:117-117 | .ee-slide .r-observation | — | left, top | — |
| 13 | src/styles/13-rag-reauthed-style.css:117-117 | .ee-slide .ee-react-foot | — | font-size, line-height, color | — |
| 13 | src/styles/13-rag-reauthed-style.css:118-118 | @keyframes eeRotate | — | transform | — |
| 13 | src/styles/13-rag-reauthed-style.css:120-120 | .ee-slide .ee-pipe | — | display, align-items, gap, justify-content, height, margin-top | — |
| 13 | src/styles/13-rag-reauthed-style.css:120-120 | .ee-slide .ee-pipe-node | — | position, flex, background, border, border-radius, padding, min-width | — |
| 13 | src/styles/13-rag-reauthed-style.css:120-120 | .ee-slide .ee-pipe-node.tone-blue | — | background, border-color | — |
| 13 | src/styles/13-rag-reauthed-style.css:120-120 | .ee-slide .ee-pipe-node:not(:last-child):after | — | content, position, right, top, transform, z-index, color, font-size, line-height | — |
| 13 | src/styles/13-rag-reauthed-style.css:120-120 | .ee-slide .ee-pipe-label | — | font-size, line-height, font-weight, color, border-bottom, padding-bottom, margin-bottom | — |
| 13 | src/styles/13-rag-reauthed-style.css:120-120 | .ee-slide .ee-pipe-copy | — | font-size, line-height | — |
| 13 | src/styles/13-rag-reauthed-style.css:120-120 | .ee-slide .ee-pipe-tag | — | margin, text-align, font-size, color | — |
| 13 | src/styles/13-rag-reauthed-style.css:122-122 | .ee-slide .ee-explore-layout | — | display, grid-template-columns, gap, height | — |
| 13 | src/styles/13-rag-reauthed-style.css:122-122 | .ee-slide .ee-explorer | — | position, border, background, border-radius, padding, overflow | — |
| 13 | src/styles/13-rag-reauthed-style.css:122-122 | .ee-slide .ee-terminal-bar | — | height, display, align-items, gap, margin, padding, background | — |
| 13 | src/styles/13-rag-reauthed-style.css:122-122 | .ee-slide .ee-terminal-bar span | — | width, height, border-radius, background | — |
| 13 | src/styles/13-rag-reauthed-style.css:122-122 | .ee-slide .ee-terminal-bar b | — | margin-left, font-size, font-weight, color | — |
| 13 | src/styles/13-rag-reauthed-style.css:122-122 | .ee-slide .ee-tree | — | font-family, font-size, white-space, line-height, color | — |
| 13 | src/styles/13-rag-reauthed-style.css:122-122 | .ee-slide .ee-tree-pills | — | position, top, right, width, flex-direction | — |
| 13 | src/styles/13-rag-reauthed-style.css:122-122 | .ee-slide .ee-tree-pills>span | — | text-align | — |
| 13 | src/styles/13-rag-reauthed-style.css:122-122 | .ee-slide .ee-explore-foot | — | position, bottom, left, right, font-size, line-height | — |
| 13 | src/styles/13-rag-reauthed-style.css:122-122 | .ee-slide .ee-explore-foot b | — | color | — |
| 13 | src/styles/13-rag-reauthed-style.css:122-122 | .ee-slide .ee-orchestration | — | display, flex-direction, align-items, padding-top, gap | — |
| 13 | src/styles/13-rag-reauthed-style.css:122-122 | .ee-slide .ee-orchestrator-main | — | width, padding, background, border, border-radius, text-align, font-size | — |
| 13 | src/styles/13-rag-reauthed-style.css:122-122 | .ee-slide .ee-worker-lines | — | height, width, border-top, border-left, border-right, border-bottom, border-radius, position | — |
| 13 | src/styles/13-rag-reauthed-style.css:122-122 | .ee-slide .ee-worker-lines:before | — | content, position, left, top, height, border-left | — |
| 13 | src/styles/13-rag-reauthed-style.css:122-122 | .ee-slide .ee-workers | — | display, gap, justify-content, width, margin-top | — |
| 13 | src/styles/13-rag-reauthed-style.css:122-122 | .ee-slide .ee-workers>div | — | padding, font-size, text-align, background, border, border-radius, flex | — |
| 13 | src/styles/13-rag-reauthed-style.css:122-122 | .ee-slide .ee-orchestrator-note | — | margin-top, font-size, line-height, border, padding, border-radius | — |
| 13 | src/styles/13-rag-reauthed-style.css:122-122 | .ee-slide .ee-orchestrator-note b | — | color | — |
| 13 | src/styles/13-rag-reauthed-style.css:124-124 | .ee-slide .ee-pii-flow | — | display, align-items, gap, margin-top, height | — |
| 13 | src/styles/13-rag-reauthed-style.css:124-124 | .ee-slide .ee-pii-item | — | flex, min-width, padding, background, border, border-radius, display, flex-direction, justify-content, align-items, text-align | — |
| 13 | src/styles/13-rag-reauthed-style.css:124-124 | .ee-slide .ee-pii-item b | — | font-size, font-weight, line-height | — |
| 13 | src/styles/13-rag-reauthed-style.css:124-124 | .ee-slide .ee-pii-item small | — | color, font-size, margin-top | — |
| 13 | src/styles/13-rag-reauthed-style.css:124-124 | .ee-slide .ee-pii-cloud | — | background, border-color, border-radius | — |
| 13 | src/styles/13-rag-reauthed-style.css:124-124 | .ee-slide .ee-connector | — | align-self, font-size, color | — |
| 13 | src/styles/13-rag-reauthed-style.css:124-124 | .ee-slide .ee-pii-descriptions | — | display, grid-template-columns, gap, margin-top | — |
| 13 | src/styles/13-rag-reauthed-style.css:124-124 | .ee-slide .ee-pii-descriptions .ee-card | — | min-height | — |
| 13 | src/styles/13-rag-reauthed-style.css:126-126 | .ee-slide .ee-sandbox | — | display, grid-template-columns, gap, height | — |
| 13 | src/styles/13-rag-reauthed-style.css:126-126 | .ee-slide .ee-isolation | — | position, height | — |
| 13 | src/styles/13-rag-reauthed-style.css:126-126 | .ee-slide .ee-isol-level | — | box-sizing, border, border-radius, padding, position | — |
| 13 | src/styles/13-rag-reauthed-style.css:126-126 | .ee-slide .ee-isol-level>label | — | font-size, color | — |
| 13 | src/styles/13-rag-reauthed-style.css:126-126 | .ee-slide .l1 | — | height | — |
| 13 | src/styles/13-rag-reauthed-style.css:126-126 | .ee-slide .l2 | — | margin, height | — |
| 13 | src/styles/13-rag-reauthed-style.css:126-126 | .ee-slide .l3 | — | margin, height | — |
| 13 | src/styles/13-rag-reauthed-style.css:126-126 | .ee-slide .l4 | — | margin, width, height, display, justify-content, align-items, text-align | — |
| 13 | src/styles/13-rag-reauthed-style.css:126-126 | .ee-slide .l4 label | — | font-weight | — |
| 13 | src/styles/13-rag-reauthed-style.css:126-126 | .ee-slide .ee-bridge | — | position, right, top, font-size, color, text-align, z-index | — |
| 13 | src/styles/13-rag-reauthed-style.css:126-126 | .ee-slide .ee-bridge small | — | font-size | — |
| 13 | src/styles/13-rag-reauthed-style.css:126-126 | .ee-slide .ee-bridge span | — | font-size, display | — |
| 13 | src/styles/13-rag-reauthed-style.css:126-126 | .ee-slide .ee-toolstack | — | display, grid-template-rows, gap | — |
| 13 | src/styles/13-rag-reauthed-style.css:126-126 | .ee-slide .ee-toolstack .ee-block | — | padding | — |
| 13 | src/styles/13-rag-reauthed-style.css:126-126 | .ee-slide .ee-toolstack .ee-block-label | — | font-size | — |
| 13 | src/styles/13-rag-reauthed-style.css:126-126 | .ee-slide .ee-toolstack .ee-block-body | — | font-size | — |
| 13 | src/styles/13-rag-reauthed-style.css:128-128 | .ee-slide .ee-observe | — | display, grid-template-rows, gap, height | — |
| 13 | src/styles/13-rag-reauthed-style.css:128-128 | .ee-slide .ee-ragui | — | position, width, margin, border, background, border-radius, padding, box-sizing | — |
| 13 | src/styles/13-rag-reauthed-style.css:128-128 | .ee-slide .ee-ui-name | — | font-size, font-weight, color, margin-bottom | — |
| 13 | src/styles/13-rag-reauthed-style.css:128-128 | .ee-slide .ee-ui-chat | — | font-size, line-height, padding, background, border-radius, max-width | — |
| 13 | src/styles/13-rag-reauthed-style.css:128-128 | .ee-slide .ee-ui-chat mark | — | background, color | — |
| 13 | src/styles/13-rag-reauthed-style.css:128-128 | .ee-slide .ee-ui-citation | — | position, right, top, width, height, background, border, border-radius, box-shadow, padding, box-sizing, color, font | — |
| 13 | src/styles/13-rag-reauthed-style.css:128-128 | .ee-slide .ee-source-stripes | — | display, flex-direction, gap, margin-top | — |
| 13 | src/styles/13-rag-reauthed-style.css:128-128 | .ee-slide .ee-source-stripes i | — | height, width, background | — |
| 13 | src/styles/13-rag-reauthed-style.css:128-128 | .ee-slide .ee-source-stripes i:nth-child(2) | — | width | — |
| 13 | src/styles/13-rag-reauthed-style.css:128-128 | .ee-slide .ee-source-stripes i.highlight | — | background | — |
| 13 | src/styles/13-rag-reauthed-style.css:128-128 | .ee-slide .ee-ui-caption | — | font-size, margin-top, color | — |
| 13 | src/styles/13-rag-reauthed-style.css:128-128 | .ee-slide .ee-observe-bottom | — | display, grid-template-columns, gap | — |
| 13 | src/styles/13-rag-reauthed-style.css:128-128 | .ee-slide .ee-observe-bottom .ee-block | — | padding | — |
| 13 | src/styles/13-rag-reauthed-style.css:128-128 | .ee-slide .ee-observe-bottom .ee-block-label | — | font-size | — |
| 13 | src/styles/13-rag-reauthed-style.css:128-128 | .ee-slide .ee-observe-bottom .ee-block-body | — | font-size | — |
| 13 | src/styles/13-rag-reauthed-style.css:128-128 | .ee-slide .ee-trace-bars | — | display, gap, margin | — |
| 13 | src/styles/13-rag-reauthed-style.css:128-128 | .ee-slide .ee-trace-bars span | — | display, height, border-radius, background | — |
| 13 | src/styles/13-rag-reauthed-style.css:130-130 | .ee-slide .ee-delegation | — | height, position, border, border-radius, overflow, background | — |
| 13 | src/styles/13-rag-reauthed-style.css:130-130 | .ee-slide .ee-delegation:before | — | content, position, left, top, height, width, background, transform, box-shadow | — |
| 13 | src/styles/13-rag-reauthed-style.css:130-130 | .ee-slide .ee-delegate-human,.ee-slide .ee-delegate-ai | — | position, width, padding, box-sizing | — |
| 13 | src/styles/13-rag-reauthed-style.css:130-130 | .ee-slide .ee-delegate-human | — | left, top | — |
| 13 | src/styles/13-rag-reauthed-style.css:130-130 | .ee-slide .ee-delegate-ai | — | right, bottom | — |
| 13 | src/styles/13-rag-reauthed-style.css:130-130 | .ee-slide .ee-delegate-label | — | font-size, font-weight, color, margin-bottom | — |
| 13 | src/styles/13-rag-reauthed-style.css:130-130 | .ee-slide .ee-delegate-ai .ee-delegate-label | — | color | — |
| 13 | src/styles/13-rag-reauthed-style.css:130-130 | .ee-slide .ee-delegate-human>div:last-child,.ee-slide .ee-delegate-ai>div:last-child | — | font-size, line-height | — |
| 13 | src/styles/13-rag-reauthed-style.css:130-130 | .ee-slide .ee-delegate-axis | — | position, bottom, left, right, display, justify-content, font-size, color | — |
| 13 | src/styles/13-rag-reauthed-style.css:130-130 | .ee-slide .ee-delegate-conclusion | — | margin, font-size, line-height, text-align, white-space | — |
| 13 | src/styles/13-rag-reauthed-style.css:130-130 | .ee-slide .ee-delegate-conclusion strong | — | color | — |
| 13 | src/styles/13-rag-reauthed-style.css:132-132 | .ee-slide .ee-roi-grid | — | display, grid-template-columns, gap, margin-top | — |
| 13 | src/styles/13-rag-reauthed-style.css:132-132 | .ee-slide .ee-roi-card | — | min-height | — |
| 13 | src/styles/13-rag-reauthed-style.css:132-132 | .ee-slide .ee-roi-card .ee-kicker | — | font-size, color | — |
| 13 | src/styles/13-rag-reauthed-style.css:132-132 | .ee-slide .ee-roi-value | — | font-size, line-height, font-weight, color | — |
| 13 | src/styles/13-rag-reauthed-style.css:132-132 | .ee-slide .ee-roi-detail | — | font-size, margin-top, line-height | — |
| 13 | src/styles/13-rag-reauthed-style.css:132-132 | .ee-slide .ee-roi-percent | — | font-size, line-height, color, font-weight, letter-spacing | — |
| 13 | src/styles/13-rag-reauthed-style.css:132-132 | .ee-slide .ee-roi-insight | — | margin-top, border, border-radius, background, padding, text-align, font-size, line-height | — |
| 13 | src/styles/13-rag-reauthed-style.css:132-132 | .ee-slide .ee-roi-insight b | — | color | — |
| 13 | src/styles/13-rag-reauthed-style.css:133-133 | .ee-slide.show .pdf-stage,.ee-slide.show .ee-reveal | @media(prefers-reduced-motion:reduce) | animation, opacity, transform, filter | да |
| 13 | src/styles/13-rag-reauthed-style.css:135-135 | .ee-slide.show ~ #debugGlow | — | display | да |
| 13 | src/styles/13-rag-reauthed-style.css:136-136 | .ee-slide .ee-pii-flow | — | margin-top | — |
| 13 | src/styles/13-rag-reauthed-style.css:137-137 | .ee-slide .ee-pii-descriptions | — | margin-top | — |
| 14 | src/styles/14-cinematic-hero-titles-8-22.css:6-6 | .pdfRestSlide.ee-slide .ee-eyebrow | — | display | да |
| 14 | src/styles/14-cinematic-hero-titles-8-22.css:7-7 | .pdfRestSlide.ee-slide .ee-header | — | position, z-index, margin-bottom, transform-origin, will-change | — |
| 14 | src/styles/14-cinematic-hero-titles-8-22.css:8-8 | .pdfRestSlide.ee-slide .ee-header h2 | — | max-width, font-size, line-height, letter-spacing, overflow-wrap | — |
| 14 | src/styles/14-cinematic-hero-titles-8-22.css:9-9 | .pdfRestSlide.ee-slide .ee-header.ee-reveal | — | opacity, transform, filter | — |
| 14 | src/styles/14-cinematic-hero-titles-8-22.css:10-10 | .pdfRestSlide.ee-slide .ee-content | — | opacity, will-change | — |
| 14 | src/styles/14-cinematic-hero-titles-8-22.css:11-11 | .pdfRestSlide.ee-slide .ee-index | — | opacity | — |
| 14 | src/styles/14-cinematic-hero-titles-8-22.css:12-14 | .pdfRestSlide.ee-slide.show .ee-header.ee-reveal | — | animation | да |
| 14 | src/styles/14-cinematic-hero-titles-8-22.css:15-20 | @keyframes eeHeroDock | — | opacity, transform, filter, animation-timing-function | — |
| 14 | src/styles/14-cinematic-hero-titles-8-22.css:21-21 | .pdfRestSlide.ee-slide.show .ee-content | — | animation | — |
| 14 | src/styles/14-cinematic-hero-titles-8-22.css:22-22 | .pdfRestSlide.ee-slide.show .ee-index | — | animation | — |
| 14 | src/styles/14-cinematic-hero-titles-8-22.css:23-23 | @keyframes eeContentAfterHero | — | opacity | — |
| 14 | src/styles/14-cinematic-hero-titles-8-22.css:24-26 | .pdfRestSlide.ee-slide.show .ee-content .ee-reveal | — | animation-delay | — |
| 14 | src/styles/14-cinematic-hero-titles-8-22.css:28-29 | .pdfRestSlide.ee-slide:not(.show) .ee-header, .pdfRestSlide.ee-slide:not(.show) .ee-content | — | opacity | — |
| 14 | src/styles/14-cinematic-hero-titles-8-22.css:33-38 | .pdfRestSlide.ee-slide.show .ee-header.ee-reveal,  .pdfRestSlide.ee-slide.show .ee-content,  .pdfRestSlide.ee-slide.show .ee-index,  .pdfRestSlide.ee-slide.show .ee-content .ee-reveal | @media(prefers-reduced-motion:reduce) | animation, opacity, transform, filter | да |
| 15 | src/styles/15-v8-fullsite-parent-styling.css:4-4 | #pdfSlide8.ee-slide .pdf-stage | — | left, top, width, height | — |
| 15 | src/styles/15-v8-fullsite-parent-styling.css:5-5 | #pdfSlide8.ee-slide .ee-canvas | — | padding, border, border-radius, background, box-shadow, overflow | да |
| 15 | src/styles/15-v8-fullsite-parent-styling.css:6-6 | #pdfSlide8.ee-slide .ee-canvas:before | — | display | — |
| 15 | src/styles/15-v8-fullsite-parent-styling.css:7-7 | #pdfSlide8.ee-slide .ee-header | — | position, top, left, margin, z-index, pointer-events | — |
| 15 | src/styles/15-v8-fullsite-parent-styling.css:8-8 | #pdfSlide8.ee-slide .ee-header h2 | — | font-size, font-weight, max-width, letter-spacing | — |
| 15 | src/styles/15-v8-fullsite-parent-styling.css:9-9 | #pdfSlide8.ee-slide .ee-header h2 span | — | color | — |
| 15 | src/styles/15-v8-fullsite-parent-styling.css:10-10 | #pdfSlide8.ee-slide .ee-content | — | position, inset, height, z-index, overflow | да |
| 15 | src/styles/15-v8-fullsite-parent-styling.css:11-11 | #pdfSlide8 #v8FullChatWebsite | — | display, position, inset, width, height, border, background, pointer-events, opacity, transform, filter, transition | — |
| 15 | src/styles/15-v8-fullsite-parent-styling.css:12-12 | #pdfSlide8.show.v8-website-active #v8FullChatWebsite | — | opacity, transform, filter | — |
| 15 | src/styles/15-v8-fullsite-parent-styling.css:13-13 | #pdfSlide8.show.v8-website-active .ee-header | — | opacity, filter, pointer-events, transition | да |
| 15 | src/styles/15-v8-fullsite-parent-styling.css:14-14 | #pdfSlide8 .v8-narrative | — | position, right, top, display, gap, z-index, pointer-events, opacity, transform, transition | — |
| 15 | src/styles/15-v8-fullsite-parent-styling.css:15-15 | #pdfSlide8.show.v8-website-active .v8-narrative | — | opacity, transform | — |
| 15 | src/styles/15-v8-fullsite-parent-styling.css:16-16 | #pdfSlide8 .v8-progress-step | — | display, align-items, gap, padding, border-radius, background, border, font, color, transition | — |
| 15 | src/styles/15-v8-fullsite-parent-styling.css:17-17 | #pdfSlide8 .v8-progress-step span | — | font, color | — |
| 15 | src/styles/15-v8-fullsite-parent-styling.css:18-18 | #pdfSlide8.v8-phase-1 .v8-prompt-label,#pdfSlide8.v8-phase-2 .v8-process-label,#pdfSlide8.v8-phase-3 .v8-result-label | — | background, border-color, color, box-shadow | — |
| 15 | src/styles/15-v8-fullsite-parent-styling.css:19-19 | #pdfSlide8.v8-phase-3 .v8-result-label | — | border-color, background | — |
| 15 | src/styles/15-v8-fullsite-parent-styling.css:20-20 | #pdfSlide8.show #v8FullChatWebsite | @media(prefers-reduced-motion:reduce) | opacity, transform, filter | — |
| 16 | src/styles/16-v8-new-story-intro-css.css:3-3 | #pdfSlide8 .ee-header | — | display | да |
| 16 | src/styles/16-v8-new-story-intro-css.css:4-4 | #pdfSlide8.show .ee-content | — | opacity, animation | да |
| 16 | src/styles/16-v8-new-story-intro-css.css:5-5 | #pdfSlide8 .v8-intro-panel | — | position, inset, z-index, display, align-items, justify-content, flex-direction, gap, padding, box-sizing, background, opacity, visibility, transform, filter, transition, pointer-events, text-align | — |
| 16 | src/styles/16-v8-new-story-intro-css.css:6-6 | #pdfSlide8 .v8-intro-panel::before | — | content, position, width, height, left, top, background, pointer-events | — |
| 16 | src/styles/16-v8-new-story-intro-css.css:7-7 | #pdfSlide8 .v8-intro-panel h2 | — | position, margin, max-width, font-family, font-size, letter-spacing, font-weight, line-height, color | — |
| 16 | src/styles/16-v8-new-story-intro-css.css:8-8 | #pdfSlide8 .v8-intro-panel h2 span | — | font-weight, background, background-clip, -webkit-background-clip, color | — |
| 16 | src/styles/16-v8-new-story-intro-css.css:9-9 | #pdfSlide8 .v8-intro-panel.v8-intro-meaning h2 | — | font-size, line-height | — |
| 16 | src/styles/16-v8-new-story-intro-css.css:10-10 | #pdfSlide8 .v8-intro-panel.v8-intro-compare h2 | — | font-size, font-weight | — |
| 16 | src/styles/16-v8-new-story-intro-css.css:11-11 | #pdfSlide8 .v8-intro-panel.v8-intro-compare h2 b | — | font-size, margin, font-weight, color | — |
| 16 | src/styles/16-v8-new-story-intro-css.css:12-12 | #pdfSlide8 .v8-intro-overline | — | font, color, letter-spacing, margin-bottom | — |
| 16 | src/styles/16-v8-new-story-intro-css.css:13-13 | #pdfSlide8 .v8-intro-panel.v8-intro-paradigm h2 | — | font-size | — |
| 16 | src/styles/16-v8-new-story-intro-css.css:14-14 | #pdfSlide8.v8-intro-1.show .v8-intro-meaning,#pdfSlide8.v8-intro-2.show .v8-intro-compare,#pdfSlide8.v8-intro-3.show .v8-intro-paradigm | — | opacity, visibility, transform, filter | — |
| 16 | src/styles/16-v8-new-story-intro-css.css:15-15 | #pdfSlide8.v8-website-active .v8-intro-panel | — | opacity, visibility | — |
| 16 | src/styles/16-v8-new-story-intro-css.css:16-16 | #pdfSlide8 #v8FullChatWebsite | — | transition | — |
| 17 | src/styles/17-rag-borderless-and-no-number.css:3-6 | .pdfRestSlide.ee-slide:not(#pdfSlide8) .ee-canvas | — | border, border-radius, box-shadow, background | да |
| 17 | src/styles/17-rag-borderless-and-no-number.css:7-8 | .pdfRestSlide.ee-slide:not(#pdfSlide8) .ee-canvas::before, .pdfRestSlide.ee-slide:not(#pdfSlide8) .ee-canvas::after | — | display | да |
| 17 | src/styles/17-rag-borderless-and-no-number.css:10-10 | .pdfRestSlide.ee-slide .ee-index | — | display | да |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:3-3 | #pdfSlide8 .v8-sdd-intro | — | position, inset, z-index, visibility, opacity, pointer-events, background, display, flex-direction, align-items, justify-content, text-align, gap, transform, filter, transition | — |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:4-4 | #pdfSlide8.v8-sdd-intro-on.show .v8-sdd-intro | — | visibility, opacity, transform, filter | — |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:5-5 | #pdfSlide8 .sdd10-eyebrow | — | color, font, letter-spacing | — |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:6-6 | #pdfSlide8 .v8-sdd-intro h2 | — | color, font, letter-spacing, margin | — |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:7-7 | #pdfSlide8 .v8-sdd-intro h2 span | — | font-weight, background, -webkit-background-clip, background-clip, color | — |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:8-8 | #pdfSlide8 .v8-sdd-intro p | — | font, color, margin | — |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:9-9 | #pdfSlide8 .v8-sdd-scene | — | position, inset, z-index, background, color, visibility, opacity, transform, filter, transition, pointer-events, font-family, overflow | — |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:10-10 | #pdfSlide8.show.v8-sdd-scene-on .v8-sdd-scene | — | visibility, opacity, transform, filter | — |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:11-11 | #pdfSlide8.show.v8-sdd-scene-on .v8-intro-panel,#pdfSlide8.show.v8-sdd-intro-on .v8-intro-panel | — | opacity, visibility | — |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:12-12 | #pdfSlide8 .sdd10-header | — | position, top, left, right, min-height | — |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:13-13 | #pdfSlide8 .sdd10-approach | — | font-size, font-weight, color, letter-spacing | — |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:14-14 | #pdfSlide8 .sdd10-title | — | font, letter-spacing, margin, position, left, top, right, opacity, transform, filter, transition | — |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:15-15 | #pdfSlide8 .sdd10-title em,#pdfSlide8 .sdd10-big em,#pdfSlide8 .v8-sdd-conclusion h2 em | — | font-style, color, font-weight | — |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:16-16 | #pdfSlide8.v8-sdd-md-on .sdd10-title-md,#pdfSlide8.v8-sdd-process-on .sdd10-title-process,#pdfSlide8.v8-sdd-later-on .sdd10-title-later | — | opacity, transform, filter | — |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:17-17 | #pdfSlide8 .sdd10-layout | — | position, left, right, top, bottom, display, grid-template-columns, gap, align-items | — |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:18-18 | #pdfSlide8 .sdd10-editor | — | background, border, border-radius, overflow, box-shadow, display, flex-direction | — |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:19-19 | #pdfSlide8 .sdd10-editorbar | — | height, background, border-bottom, display, align-items, padding, gap, box-sizing, font-size | — |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:20-20 | #pdfSlide8 .sdd10-fileicon | — | display, align-items, justify-content, width, height, border, border-radius, color, font-weight | — |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:21-21 | #pdfSlide8 .sdd10-saved | — | display, align-items, gap, margin-left, font-size, color | — |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:22-22 | #pdfSlide8 .sdd10-dot | — | width, height, border-radius, background | — |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:23-23 | #pdfSlide8 .sdd10-code | — | padding, display, flex-direction, gap, font, letter-spacing, min-width | — |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:24-24 | #pdfSlide8 .sdd10-line | — | white-space, overflow, text-overflow, opacity, transform | — |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:25-25 | #pdfSlide8 .sdd10-line span | — | color | — |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:26-26 | #pdfSlide8 .sdd10-blank | — | height, line-height | — |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:27-27 | #pdfSlide8.v8-sdd-scene-on .sdd10-line | — | animation | — |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:28-28 | @keyframes sdd10ShowLine | — | opacity, transform | — |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:29-29 | #pdfSlide8 .sdd10-explanation | — | position, min-width, display, align-items | — |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:30-30 | #pdfSlide8 .sdd10-state | — | position, inset, display, flex-direction, justify-content, gap, opacity, visibility, transform, filter, transition | — |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:31-31 | #pdfSlide8.v8-sdd-md-on .sdd10-state-md,#pdfSlide8.v8-sdd-process-on .sdd10-state-process,#pdfSlide8.v8-sdd-later-on .sdd10-state-later | — | opacity, visibility, transform, filter | — |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:32-32 | #pdfSlide8 .sdd10-big | — | font, letter-spacing, margin, color | — |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:33-33 | #pdfSlide8 .sdd10-small | — | font-size, line-height, color, font-weight, margin, max-width | — |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:34-34 | #pdfSlide8 .sdd10-message | — | font, padding, border-left, background, border-radius, color | — |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:35-35 | #pdfSlide8 .sdd10-message span | — | display, font, letter-spacing, color, margin-bottom | — |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:36-36 | #pdfSlide8 .sdd10-answer | — | border-left-color, background | — |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:37-37 | #pdfSlide8 .sdd10-answer span | — | color | — |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:38-38 | #pdfSlide8 .v8-sdd-conclusion | — | position, inset, z-index, background, box-sizing, visibility, opacity, transform, filter, transition, padding | — |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:39-39 | #pdfSlide8.v8-sdd-conclusion-on .v8-sdd-conclusion | — | visibility, opacity, transform, filter | — |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:40-40 | #pdfSlide8 .sdd10-end-overline | — | font, letter-spacing, color, margin | — |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:41-41 | #pdfSlide8 .v8-sdd-conclusion h2 | — | font, letter-spacing, margin | — |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:42-42 | #pdfSlide8 .sdd10-comparison | — | display, grid-template-columns, gap | — |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:43-43 | #pdfSlide8 .sdd10-side | — | padding, border-left | — |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:44-44 | #pdfSlide8 .sdd10-good | — | border-left-color | — |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:45-45 | #pdfSlide8 .sdd10-side span | — | display, font, letter-spacing, color, margin-bottom | — |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:46-46 | #pdfSlide8 .sdd10-good span | — | color | — |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:47-47 | #pdfSlide8 .sdd10-side strong | — | font, letter-spacing, display, color | — |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:48-48 | #pdfSlide8 .sdd10-side p | — | font, color, margin, max-width | — |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:49-49 | #pdfSlide8.v8-sdd-intro-on #v8FullChatWebsite,#pdfSlide8.v8-sdd-scene-on #v8FullChatWebsite,#pdfSlide8.v8-sdd-intro-on .v8-narrative,#pdfSlide8.v8-sdd-scene-on .v8-narrative | — | opacity, visibility | — |
| 18 | src/styles/18-v8-sdd-cinematic-spec.css:50-50 | #pdfSlide8 .sdd10-line | @media(prefers-reduced-motion:reduce) | opacity, transform, animation | да |
| 19 | src/styles/19-presenter-ui-css.css:2-2 | #prev.nav,#forward.nav | — | position, display, align-items, justify-content, visibility, opacity, z-index, width, height, top, margin, transform, cursor, background, border, box-shadow, border-radius, color, font, transition, pointer-events | да |
| 19 | src/styles/19-presenter-ui-css.css:3-3 | #prev.nav | — | left | да |
| 19 | src/styles/19-presenter-ui-css.css:3-3 | #forward.nav | — | right | да |
| 19 | src/styles/19-presenter-ui-css.css:4-4 | #prev.nav:hover,#forward.nav:hover | — | background, opacity, box-shadow | да |
| 19 | src/styles/19-presenter-ui-css.css:5-5 | #prev.nav:focus-visible,#forward.nav:focus-visible,.presenterIconBtn:focus-visible | — | outline, outline-offset | — |
| 19 | src/styles/19-presenter-ui-css.css:6-6 | #debugGlow | — | position, top, left, display, visibility, opacity, z-index, min-width, background, border, box-shadow, border-radius, padding, backdrop-filter, pointer-events | да |
| 19 | src/styles/19-presenter-ui-css.css:7-7 | .ee-slide.show ~ #debugGlow | — | display | да |
| 19 | src/styles/19-presenter-ui-css.css:8-8 | #debugGlow #glowStatus | — | margin, font, white-space | да |
| 19 | src/styles/19-presenter-ui-css.css:9-9 | #debugGlow button | — | border, border-radius, background, color, padding, cursor | — |
| 19 | src/styles/19-presenter-ui-css.css:10-10 | #presenterDebugMeta | — | font, color, padding-bottom, margin-bottom, border-bottom | — |
| 19 | src/styles/19-presenter-ui-css.css:11-11 | #presenterBar | — | position, z-index, bottom, left, transform, width, max-width, height, display, align-items, gap, padding, background, border, border-radius, color, font, box-shadow, backdrop-filter, pointer-events | — |
| 19 | src/styles/19-presenter-ui-css.css:12-12 | #presenterBar .presenterKeys | — | display, align-items, gap, white-space, color | — |
| 19 | src/styles/19-presenter-ui-css.css:13-13 | #presenterBar kbd | — | font, color, background, border, padding, border-radius, min-width, text-align, display | — |
| 19 | src/styles/19-presenter-ui-css.css:14-14 | #presenterBar .presenterRule | — | height, border-left | — |
| 19 | src/styles/19-presenter-ui-css.css:15-15 | #presenterCounter | — | color, min-width, text-align, font, white-space | — |
| 19 | src/styles/19-presenter-ui-css.css:16-16 | .presenterIconBtn | — | border, background, color, border-radius, display, align-items, gap, justify-content, white-space, padding, font, cursor | — |
| 19 | src/styles/19-presenter-ui-css.css:17-17 | .presenterIconBtn:hover | — | background | — |
| 19 | src/styles/19-presenter-ui-css.css:18-18 | .presenterIconBtn svg | — | width, height, stroke, fill, stroke-width, stroke-linecap, stroke-linejoin | — |
| 19 | src/styles/19-presenter-ui-css.css:19-19 | #presenterDrawer | — | position, inset, z-index, display, align-items, justify-content, pointer-events, background, backdrop-filter, color, font-family | — |
| 19 | src/styles/19-presenter-ui-css.css:20-20 | #presenterDrawer.open | — | display, pointer-events | — |
| 19 | src/styles/19-presenter-ui-css.css:21-21 | #presenterDrawer .drawerPanel | — | width, height, display, flex-direction, border-radius, border, background, box-shadow, overflow | — |
| 19 | src/styles/19-presenter-ui-css.css:22-22 | #presenterDrawer .drawerHead | — | flex, display, align-items, justify-content, padding, border-bottom | — |
| 19 | src/styles/19-presenter-ui-css.css:23-23 | #presenterDrawer .drawerHead h2 | — | margin, font-size, letter-spacing, font-weight | — |
| 19 | src/styles/19-presenter-ui-css.css:24-24 | #presenterDrawer .drawerSub | — | font-size, color, margin-top | — |
| 19 | src/styles/19-presenter-ui-css.css:25-25 | #presenterDrawer .drawerClose | — | width, height, border-radius, background, color, border, font, cursor | — |
| 19 | src/styles/19-presenter-ui-css.css:26-26 | #presenterDrawer .drawerScroll | — | padding, overflow-y, flex, overscroll-behavior | — |
| 19 | src/styles/19-presenter-ui-css.css:27-27 | #presenterGrid | — | display, grid-template-columns, gap | — |
| 19 | src/styles/19-presenter-ui-css.css:28-28 | #presenterGrid .deckThumb | — | display, flex-direction, gap, text-align, color, background, border, border-radius, padding, cursor, overflow, min-width, transition | — |
| 19 | src/styles/19-presenter-ui-css.css:29-29 | #presenterGrid .deckThumb:hover | — | transform, border-color, background | — |
| 19 | src/styles/19-presenter-ui-css.css:30-30 | #presenterGrid .deckThumb.active | — | border-color, background | — |
| 19 | src/styles/19-presenter-ui-css.css:31-31 | #presenterGrid .thumbPreview | — | display, aspect-ratio, width, position, border-radius, overflow, background, border | — |
| 19 | src/styles/19-presenter-ui-css.css:32-32 | #presenterGrid .thumbPreview img | — | width, height, display, object-fit | — |
| 19 | src/styles/19-presenter-ui-css.css:33-33 | #presenterGrid .thumbPlaceholder | — | position, inset, display, align-items, justify-content, font, color | — |
| 19 | src/styles/19-presenter-ui-css.css:34-34 | #presenterGrid .thumbPlaceholder | — | display | да |
| 19 | src/styles/19-presenter-ui-css.css:35-35 | #presenterGrid .thumbTitle | — | display, white-space, overflow, text-overflow, font, margin | — |
| 19 | src/styles/19-presenter-ui-css.css:36-36 | #presenterGrid .thumbTitle b | — | color, font-size, margin-right | — |
| 19 | src/styles/19-presenter-ui-css.css:37-37 | #presenterGrid .thumbTag | — | font-size, line-height, color, padding | — |
| 19 | src/styles/19-presenter-ui-css.css:40-40 | body:not(.presenter-debug-open) #debugGlow | — | display, visibility, opacity, pointer-events | да |
| 19 | src/styles/19-presenter-ui-css.css:41-41 | body.presenter-debug-open #debugGlow | — | display, visibility, opacity, pointer-events, top, bottom, left, max-height, overflow-y | да |
| 19 | src/styles/19-presenter-ui-css.css:42-42 | #presenterDebugToggle[aria-pressed="true"],#presenterFullscreen[aria-pressed="true"] | — | background, border-color, box-shadow | — |
| 19 | src/styles/19-presenter-ui-css.css:43-43 | #presenterBar .presenterIconBtn | — | min-height | — |
| 19 | src/styles/19-presenter-ui-css.css:44-44 | #presenterBar .presenterKeys.lastKey | — | gap | — |
| 19 | src/styles/19-presenter-ui-css.css:45-45 | #presenterBar | @media (max-width:1400px) | gap, padding | — |
| 19 | src/styles/19-presenter-ui-css.css:45-45 | #presenterBar .presenterKeys | @media (max-width:1400px) | font-size, gap | — |
| 19 | src/styles/19-presenter-ui-css.css:45-45 | #presenterBar .presenterIconBtn | @media (max-width:1400px) | font-size, padding, gap | — |
| 19 | src/styles/19-presenter-ui-css.css:45-45 | #presenterCounter | @media (max-width:1400px) | min-width, font-size | — |
| 19 | src/styles/19-presenter-ui-css.css:46-46 | #presenterBar .presenterKeys | @media (max-width:1000px) | display | — |
| 19 | src/styles/19-presenter-ui-css.css:46-46 | #presenterBar .presenterRule | @media (max-width:1000px) | display | — |
| 19 | src/styles/19-presenter-ui-css.css:46-46 | #presenterBar | @media (max-width:1000px) | height, max-width, gap | — |
| 19 | src/styles/19-presenter-ui-css.css:46-46 | #presenterBar .presenterIconBtn | @media (max-width:1000px) | padding | — |
| 20 | src/styles/20-rag-architecture-reorder-css.css:2-2 | #architectureRagSlide | — | position, inset, width, height, z-index, background, overflow, color, font-family, opacity, visibility, pointer-events, transform, filter, transition | — |
| 20 | src/styles/20-rag-architecture-reorder-css.css:3-3 | #architectureRagSlide.show | — | opacity, visibility, pointer-events, transform, filter, transition-delay | — |
| 20 | src/styles/20-rag-architecture-reorder-css.css:4-4 | #architectureRagSlide.out | — | opacity, visibility, pointer-events, transform, filter | — |
| 20 | src/styles/20-rag-architecture-reorder-css.css:5-5 | #architectureRagSlide .rag-arch-title | — | position, z-index, left, top, width, display, flex-direction, gap, font-size, line-height, font-weight, letter-spacing, opacity, transform, filter, transition | — |
| 20 | src/styles/20-rag-architecture-reorder-css.css:6-6 | #architectureRagSlide.show .rag-arch-title | — | opacity, transform, filter | — |
| 20 | src/styles/20-rag-architecture-reorder-css.css:7-7 | #architectureRagSlide .rag-arch-accent | — | font-weight, background, -webkit-background-clip, background-clip, color | — |
| 20 | src/styles/20-rag-architecture-reorder-css.css:8-8 | #architectureRagSlide .scheme | — | left, top, opacity, transform, transition | — |
| 20 | src/styles/20-rag-architecture-reorder-css.css:9-9 | #architectureRagSlide.show .scheme.show | — | opacity, transform | — |
| 20 | src/styles/20-rag-architecture-reorder-css.css:10-10 | #architectureRagSlide .scheme-base | — | transition-delay | — |
| 20 | src/styles/20-rag-architecture-reorder-css.css:11-11 | #architectureRagSlide,#architectureRagSlide .rag-arch-title,#architectureRagSlide .scheme | @media(prefers-reduced-motion:reduce) | transition | да |
| 20 | src/styles/20-rag-architecture-reorder-css.css:11-11 | #architectureRagSlide .scheme-pieces | @media(prefers-reduced-motion:reduce) | display | — |
| 20 | src/styles/20-rag-architecture-reorder-css.css:11-11 | #architectureRagSlide .scheme-base | @media(prefers-reduced-motion:reduce) | opacity, filter, transform | да |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:4-7 | .pdfRestSlide.ee-slide:is(#pdfSlide10,#pdfSlide11,#pdfSlide12,#pdfSlide13,#pdfSlide14,#pdfSlide15,#pdfSlide16,#pdfSlide17,#pdfSlide18,#pdfSlide19,#pdfSlide20,#pdfSlide21,#pdfSlide22) | — | --rag-white, --rag-muted, --rag-green, --rag-teal, background | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:8-10 | .pdfRestSlide.ee-slide:is(#pdfSlide10,#pdfSlide11,#pdfSlide12,#pdfSlide13,#pdfSlide14,#pdfSlide15,#pdfSlide16,#pdfSlide17,#pdfSlide18,#pdfSlide19,#pdfSlide20,#pdfSlide21,#pdfSlide22) .pdf-stage | — | left, top, width, height | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:11-13 | .pdfRestSlide.ee-slide:is(#pdfSlide10,#pdfSlide11,#pdfSlide12,#pdfSlide13,#pdfSlide14,#pdfSlide15,#pdfSlide16,#pdfSlide17,#pdfSlide18,#pdfSlide19,#pdfSlide20,#pdfSlide21,#pdfSlide22) .ee-canvas | — | padding, background, overflow | да |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:14-16 | .pdfRestSlide.ee-slide:is(#pdfSlide10,#pdfSlide11,#pdfSlide12,#pdfSlide13,#pdfSlide14,#pdfSlide15,#pdfSlide16,#pdfSlide17,#pdfSlide18,#pdfSlide19,#pdfSlide20,#pdfSlide21,#pdfSlide22) .ee-header | — | margin-bottom, max-width | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:17-19 | .pdfRestSlide.ee-slide:is(#pdfSlide10,#pdfSlide11,#pdfSlide12,#pdfSlide13,#pdfSlide14,#pdfSlide15,#pdfSlide16,#pdfSlide17,#pdfSlide18,#pdfSlide19,#pdfSlide20,#pdfSlide21,#pdfSlide22) .ee-header h2 | — | max-width, font-size, line-height, letter-spacing, font-weight | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:20-22 | .pdfRestSlide.ee-slide:is(#pdfSlide10,#pdfSlide11,#pdfSlide12,#pdfSlide13,#pdfSlide14,#pdfSlide15,#pdfSlide16,#pdfSlide17,#pdfSlide18,#pdfSlide19,#pdfSlide20,#pdfSlide21,#pdfSlide22) .ee-header .ee-gradient | — | font-weight, background, -webkit-background-clip, background-clip | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:23-23 | .pdfRestSlide.ee-slide:is(#pdfSlide10,#pdfSlide11,#pdfSlide12,#pdfSlide13,#pdfSlide14,#pdfSlide15,#pdfSlide16,#pdfSlide17,#pdfSlide18,#pdfSlide19,#pdfSlide20,#pdfSlide21,#pdfSlide22) .ee-content | — | height | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:24-28 | .pdfRestSlide.ee-slide:is(#pdfSlide10,#pdfSlide11,#pdfSlide12,#pdfSlide13,#pdfSlide14,#pdfSlide15,#pdfSlide16,#pdfSlide17,#pdfSlide18,#pdfSlide19,#pdfSlide20,#pdfSlide21,#pdfSlide22) .ee-card, .pdfRestSlide.ee-slide:is(#pdfSlide10,#pdfSlide11,#pdfSlide12,#pdfSlide13,#pdfSlide14,#pdfSlide15,#pdfSlide16,#pdfSlide17,#pdfSlide18,#pdfSlide19,#pdfSlide20,#pdfSlide21,#pdfSlide22) .ee-block | — | background, border, border-radius, box-shadow | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:29-29 | .pdfRestSlide.ee-slide:is(#pdfSlide10,#pdfSlide11,#pdfSlide12,#pdfSlide13,#pdfSlide14,#pdfSlide15,#pdfSlide16,#pdfSlide17,#pdfSlide18,#pdfSlide19,#pdfSlide20,#pdfSlide21,#pdfSlide22) .ee-kicker | — | color, letter-spacing, font-size, font-weight | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:30-30 | .pdfRestSlide.ee-slide:is(#pdfSlide10,#pdfSlide11,#pdfSlide12,#pdfSlide13,#pdfSlide14,#pdfSlide15,#pdfSlide16,#pdfSlide17,#pdfSlide18,#pdfSlide19,#pdfSlide20,#pdfSlide21,#pdfSlide22) .ee-copy | — | font-size, line-height | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:31-31 | .pdfRestSlide.ee-slide:is(#pdfSlide10,#pdfSlide11,#pdfSlide12,#pdfSlide13,#pdfSlide14,#pdfSlide15,#pdfSlide16,#pdfSlide17,#pdfSlide18,#pdfSlide19,#pdfSlide20,#pdfSlide21,#pdfSlide22) .ee-block-body | — | font-size, line-height | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:33-33 | #pdfSlide10 .ee-traps | — | gap, grid-template-rows | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:34-34 | #pdfSlide10 .ee-trap | — | padding, position | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:35-35 | #pdfSlide10 .ee-trap + .ee-trap | — | border-top, padding-top | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:36-36 | #pdfSlide10 .ee-trap h3 | — | font-size, font-weight, line-height, margin-bottom, letter-spacing | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:37-37 | #pdfSlide10 .ee-trap h3 span | — | font-size, margin-right, font-weight, color | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:38-38 | #pdfSlide10 .ee-trap h3 small | — | font-size, color | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:39-39 | #pdfSlide10 .ee-trap-flow | — | height, min-height, grid-template-columns, gap, align-items | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:40-40 | #pdfSlide10 .ee-trap-sym,#pdfSlide10 .ee-trap-cure | — | min-height, padding, background, border, border-radius, box-sizing | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:41-41 | #pdfSlide10 .ee-trap-sym | — | border-left | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:42-42 | #pdfSlide10 .ee-trap-cure | — | border-left, background | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:43-43 | #pdfSlide10 .ee-trap-flow b | — | font-size | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:44-44 | #pdfSlide10 .ee-trap-flow p | — | font-size, line-height, margin-top | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:45-45 | #pdfSlide10 .ee-trap-arrow | — | font-size, color | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:47-47 | #pdfSlide11 .ee-prd-lead | — | font-size, line-height, margin, color | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:48-48 | #pdfSlide11 .ee-prd-lead strong | — | font-weight, color | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:49-49 | #pdfSlide11 .ee-prd-layout | — | height, grid-template-columns, gap | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:50-50 | #pdfSlide11 .ee-prd-sheet | — | min-height, margin, background, border, border-radius, padding, box-shadow | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:51-51 | #pdfSlide11 .ee-prd-tab | — | left, top, border, border-bottom, border-radius, background, font, padding | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:52-52 | #pdfSlide11 .ee-code-lines | — | gap | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:53-53 | #pdfSlide11 .ee-code-lines span | — | height, background, border-radius | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:54-54 | #pdfSlide11 .ee-prd-points | — | gap | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:55-55 | #pdfSlide11 .ee-prd-c | — | border, border-bottom, border-radius, background, padding | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:56-56 | #pdfSlide11 .ee-prd-c:last-child | — | border-bottom | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:57-57 | #pdfSlide11 .ee-prd-c .ee-kicker | — | font-size, margin | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:58-58 | #pdfSlide11 .ee-prd-c .ee-copy | — | font-size | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:60-60 | #pdfSlide12 .ee-adr-sub | — | font-size, margin, color | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:61-61 | #pdfSlide12 .ee-adr-layout | — | gap, height, grid-template-columns | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:62-62 | #pdfSlide12 .ee-adr-table,#pdfSlide12 .ee-adr-detail | — | background, border, border-radius | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:63-63 | #pdfSlide12 .ee-adr-table>div | — | min-height, font-size | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:64-64 | #pdfSlide12 .ee-adr-table>.ee-table-header | — | font-size, color | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:65-65 | #pdfSlide12 .ee-adr-detail | — | padding | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:66-66 | #pdfSlide12 .ee-detail-title | — | font-size, margin | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:67-67 | #pdfSlide12 .ee-decision | — | font-size, padding, grid-template-columns | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:68-68 | #pdfSlide12 .ee-decision b | — | font-size | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:69-69 | #pdfSlide12 .ee-adr-bot | — | margin-top, gap | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:70-70 | #pdfSlide12 .ee-adr-bot>div | — | padding, background, border, border-top, border-radius, font-size | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:71-71 | #pdfSlide12 .ee-adr-bot b | — | font-size, margin-bottom | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:73-73 | #pdfSlide13 .ee-layers | — | gap, height | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:74-74 | #pdfSlide13 .ee-layer | — | padding, background, border, border-bottom, border-radius, grid-template-columns | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:75-75 | #pdfSlide13 .ee-layer-name | — | font-size, font-weight, color | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:76-76 | #pdfSlide13 .ee-layer-nodes | — | gap | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:77-77 | #pdfSlide13 .ee-layer-node,#pdfSlide13 .ee-layer:nth-child(even) .ee-layer-node | — | font-size, line-height, min-height, background, border, border-radius | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:78-78 | #pdfSlide13 .ee-layer-node small | — | font-size | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:79-79 | #pdfSlide13 .ee-layer:last-child | — | border-bottom | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:81-81 | #pdfSlide14 .ee-verify-grid | — | grid-template-columns, gap | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:82-82 | #pdfSlide14 .ee-verify-side | — | padding, background, border, border-top, border-radius | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:83-83 | #pdfSlide14 .ee-verify-side:last-child | — | border-color | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:84-84 | #pdfSlide14 .ee-verify-kicker | — | font-size, margin-bottom | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:85-85 | #pdfSlide14 .ee-verify-name | — | font-size, font-weight, line-height, letter-spacing | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:86-86 | #pdfSlide14 .ee-verify-alias | — | font-size, margin-top | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:87-87 | #pdfSlide14 .ee-verify-info | — | font-size, line-height, margin-top, padding-top | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:88-88 | #pdfSlide14 .ee-verify-separator | — | border-left, font-size, letter-spacing | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:90-90 | #pdfSlide15 .ee-stack-layout | — | gap, grid-template-columns | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:91-91 | #pdfSlide15 .ee-stack-left>.ee-block | — | padding, border-color, background, border-radius | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:92-92 | #pdfSlide15 .ee-stack-left>.ee-block .ee-block-label | — | font-size | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:93-93 | #pdfSlide15 .ee-stack-left>.ee-block .ee-block-body | — | font-size | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:94-94 | #pdfSlide15 .ee-stack-link | — | color, font-size, line-height | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:95-95 | #pdfSlide15 .ee-stack-bottom | — | gap | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:96-96 | #pdfSlide15 .ee-stack-bottom .ee-block | — | padding, background | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:97-97 | #pdfSlide15 .ee-react | — | border, border-radius, padding, text-align, background | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:98-98 | #pdfSlide15 .ee-react-title | — | font-size | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:99-99 | #pdfSlide15 .ee-react-node | — | background, border, border-radius, font-size, padding | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:100-100 | #pdfSlide15 .ee-ring | — | border | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:101-101 | #pdfSlide15 .ee-react-foot | — | font-size, line-height | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:103-103 | #pdfSlide16 .ee-pipe | — | height, margin-top, gap | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:104-104 | #pdfSlide16 .ee-pipe-node,#pdfSlide16 .ee-pipe-node.tone-blue | — | padding, background, border, border-top, border-radius | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:105-105 | #pdfSlide16 .ee-pipe-node.tone-blue | — | border-top-color, background | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:106-106 | #pdfSlide16 .ee-pipe-label | — | font-size, line-height, margin-bottom, padding-bottom | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:107-107 | #pdfSlide16 .ee-pipe-copy | — | font-size, line-height | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:108-108 | #pdfSlide16 .ee-pipe-node:not(:last-child):after | — | font-size, top, color | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:109-109 | #pdfSlide16 .ee-pipe-tag | — | font-size, margin, color | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:111-111 | #pdfSlide17 .ee-explore-layout | — | gap | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:112-112 | #pdfSlide17 .ee-explorer | — | border, border-radius, background | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:113-113 | #pdfSlide17 .ee-terminal-bar | — | background | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:114-114 | #pdfSlide17 .ee-tree | — | font-size, line-height | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:115-115 | #pdfSlide17 .ee-explore-foot | — | font-size | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:116-116 | #pdfSlide17 .ee-orchestration | — | padding-top | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:117-117 | #pdfSlide17 .ee-orchestrator-main | — | font-size, background, border-color | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:118-118 | #pdfSlide17 .ee-workers>div | — | font-size, background | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:119-119 | #pdfSlide17 .ee-orchestrator-note | — | border, border-top, font-size, line-height, margin-top | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:121-121 | #pdfSlide18 .ee-pii-flow | — | margin-top, height, gap | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:122-122 | #pdfSlide18 .ee-pii-item | — | background, border, border-radius | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:123-123 | #pdfSlide18 .ee-pii-item b | — | font-size | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:124-124 | #pdfSlide18 .ee-pii-item small | — | font-size | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:125-125 | #pdfSlide18 .ee-pii-cloud | — | border, background, border-radius, box-shadow | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:126-126 | #pdfSlide18 .ee-connector | — | color, font-size | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:127-127 | #pdfSlide18 .ee-pii-descriptions | — | gap, margin-top | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:128-128 | #pdfSlide18 .ee-pii-descriptions .ee-card | — | min-height, background, border, border-top, border-radius, padding | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:129-129 | #pdfSlide18 .ee-pii-descriptions .ee-kicker | — | font-size | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:130-130 | #pdfSlide18 .ee-pii-descriptions .ee-copy | — | font-size | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:132-132 | #pdfSlide19 .ee-sandbox | — | gap, grid-template-columns | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:133-133 | #pdfSlide19 .ee-isol-level | — | border, background, border-radius | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:134-134 | #pdfSlide19 .ee-isol-level>label | — | font-size | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:135-135 | #pdfSlide19 .l4 | — | background, border-color | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:136-136 | #pdfSlide19 .ee-bridge | — | color | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:137-137 | #pdfSlide19 .ee-toolstack | — | gap | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:138-138 | #pdfSlide19 .ee-toolstack .ee-block | — | border, border-bottom, border-radius, background, padding | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:139-139 | #pdfSlide19 .ee-toolstack .ee-block-label | — | font-size, margin-bottom | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:140-140 | #pdfSlide19 .ee-toolstack .ee-block-body | — | font-size | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:142-142 | #pdfSlide20 .ee-observe | — | gap, grid-template-rows | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:143-143 | #pdfSlide20 .ee-ragui | — | width, padding, border-color, border-radius, background | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:144-144 | #pdfSlide20 .ee-ui-name | — | font-size, color | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:145-145 | #pdfSlide20 .ee-ui-chat | — | font-size, line-height | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:146-146 | #pdfSlide20 .ee-ui-caption | — | font-size, margin-top | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:147-147 | #pdfSlide20 .ee-observe-bottom | — | gap | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:148-148 | #pdfSlide20 .ee-observe-bottom .ee-block | — | padding, background, border, border-top, border-radius | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:149-149 | #pdfSlide20 .ee-observe-bottom .ee-block-label | — | font-size | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:150-150 | #pdfSlide20 .ee-observe-bottom .ee-block-body | — | font-size | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:152-152 | #pdfSlide21 .ee-delegation | — | height, border, border-radius, background | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:153-153 | #pdfSlide21 .ee-delegate-label | — | font-size, letter-spacing | да |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:154-154 | #pdfSlide21 .ee-delegate-conclusion | — | font-size, line-height, margin-top | да |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:156-156 | #pdfSlide22 .ee-roi-grid | — | margin-top, gap | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:157-157 | #pdfSlide22 .ee-roi-card | — | min-height, background, border, border-top, border-radius, padding | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:158-158 | #pdfSlide22 .ee-roi-card .ee-kicker | — | font-size, color, font-weight, margin-bottom | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:159-159 | #pdfSlide22 .ee-roi-card .ee-copy | — | font-size, line-height, letter-spacing | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:160-160 | #pdfSlide22 .ee-roi-card:last-child | — | border-top-color | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:161-161 | #pdfSlide22 .ee-roi-card:last-child .ee-copy | — | color | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:162-162 | #pdfSlide22 .ee-roi-insight | — | margin-top, padding, border, border-radius, background, font-size, line-height | да |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:163-163 | #pdfSlide10,#pdfSlide11,#pdfSlide12,#pdfSlide13,#pdfSlide14,#pdfSlide15,#pdfSlide16,#pdfSlide17,#pdfSlide18,#pdfSlide19,#pdfSlide20,#pdfSlide21,#pdfSlide22 | @media(prefers-reduced-motion:reduce) | transition | да |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:165-165 | #pdfSlide13 .ee-layer-node,#pdfSlide13 .ee-layer:nth-child(even) .ee-layer-node | — | min-height | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:166-166 | #pdfSlide13 .ee-layers | — | gap | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:167-167 | #pdfSlide19 .ee-toolstack .ee-block | — | padding | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:168-168 | #pdfSlide19 .ee-toolstack .ee-block-body | — | font-size | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:171-171 | #pdfSlide9 .ee-canvas | — | padding | да |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:172-172 | #pdfSlide9 .ee-header h2 | — | font-size, max-width, letter-spacing, line-height | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:173-173 | #pdfSlide9 .ee-discovery | — | border, background, padding | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:174-174 | #pdfSlide9 .ee-speedo-note | — | background, border, border-left, border-radius, padding-left | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:175-175 | #pdfSlide9 .ee-three | — | margin-top, gap | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:176-176 | #pdfSlide9 .ee-three .ee-card | — | min-height, border, border-top, border-radius, background, padding | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:177-177 | #pdfSlide9 .ee-three .ee-kicker | — | font-size, font-weight | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:178-178 | #pdfSlide9 .ee-three .ee-copy | — | font-size, line-height | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:180-180 | #pdfSlide13 .ee-content,#pdfSlide19 .ee-content | — | height | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:181-181 | #pdfSlide13 .ee-layer | — | min-height, padding | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:182-182 | #pdfSlide13 .ee-layer-node,#pdfSlide13 .ee-layer:nth-child(even) .ee-layer-node | — | min-height, padding, font-size, line-height | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:183-183 | #pdfSlide13 .ee-layer-name | — | font-size | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:184-184 | #pdfSlide13 .ee-layer-node small | — | font-size | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:185-185 | #pdfSlide19 .ee-toolstack | — | grid-template-rows, height | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:186-186 | #pdfSlide19 .ee-toolstack .ee-block | — | padding, min-height | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:187-187 | #pdfSlide19 .ee-toolstack .ee-block-label | — | font-size, margin-bottom | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:188-188 | #pdfSlide19 .ee-toolstack .ee-block-body | — | font-size, line-height | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:189-189 | #pdfSlide13 .ee-layers | — | grid-template-rows, height | — |
| 21 | src/styles/21-rag-refined-original-theme-10-22.css:190-190 | #pdfSlide13 .ee-layer-node small | — | display, margin-top, font-size, line-height, color | — |
| 22 | src/styles/22-aist-evolution-style.css:3-3 | #aistEvolutionSlide | — | position, inset, width, height, background, color, z-index, overflow, font-family, opacity, visibility, pointer-events, transform, filter, transition | — |
| 22 | src/styles/22-aist-evolution-style.css:4-4 | #aistEvolutionSlide.show | — | opacity, visibility, pointer-events, transform, filter, transition-delay | — |
| 22 | src/styles/22-aist-evolution-style.css:5-5 | #aistEvolutionSlide.out | — | opacity, visibility, pointer-events, transform, filter | — |
| 22 | src/styles/22-aist-evolution-style.css:6-6 | #aistEvolutionSlide .ev-halo | — | position, pointer-events, left, bottom, width, height, background, filter | — |
| 22 | src/styles/22-aist-evolution-style.css:7-7 | #aistEvolutionSlide .ev-intro | — | position, inset, display, flex-direction, justify-content, align-items, padding, box-sizing, opacity, filter, transform, transition | — |
| 22 | src/styles/22-aist-evolution-style.css:8-8 | #aistEvolutionSlide.show[data-ev-step="0"] .ev-intro | — | opacity, filter, transform | — |
| 22 | src/styles/22-aist-evolution-style.css:9-9 | #aistEvolutionSlide .ev-intro h2 | — | font-size, font-weight, line-height, letter-spacing, margin, max-width | — |
| 22 | src/styles/22-aist-evolution-style.css:10-10 | #aistEvolutionSlide .ev-intro h2 strong | — | display, font-weight, background, -webkit-background-clip, background-clip, color | — |
| 22 | src/styles/22-aist-evolution-style.css:11-11 | #aistEvolutionSlide .ev-intro p | — | font-size, color, font-weight, margin | — |
| 22 | src/styles/22-aist-evolution-style.css:12-12 | #aistEvolutionSlide .ev-display | — | position, inset, opacity, transform, filter, transition, pointer-events | — |
| 22 | src/styles/22-aist-evolution-style.css:13-13 | #aistEvolutionSlide.show:not([data-ev-step="0"]) .ev-display | — | opacity, transform, filter | — |
| 22 | src/styles/22-aist-evolution-style.css:14-14 | #aistEvolutionSlide .ev-head | — | position, top, left, right, display, justify-content, align-items, gap | — |
| 22 | src/styles/22-aist-evolution-style.css:15-15 | #aistEvolutionSlide .ev-smalltitle | — | font-size, letter-spacing, color, font-weight, text-transform, margin-bottom | — |
| 22 | src/styles/22-aist-evolution-style.css:16-16 | #aistEvolutionSlide .ev-title | — | font-size, line-height, font-weight, letter-spacing, margin | — |
| 22 | src/styles/22-aist-evolution-style.css:17-17 | #aistEvolutionSlide .ev-title .accent | — | font-weight, background, -webkit-background-clip, background-clip, color | — |
| 22 | src/styles/22-aist-evolution-style.css:18-18 | #aistEvolutionSlide .ev-caption | — | font-size, font-weight, color, max-width, text-align, line-height, padding-bottom | — |
| 22 | src/styles/22-aist-evolution-style.css:19-19 | #aistEvolutionSlide .ev-frame | — | position, top, left, width, height, border-radius, overflow, background, box-shadow | — |
| 22 | src/styles/22-aist-evolution-style.css:20-20 | #aistEvolutionSlide .ev-frame::before | — | content, white-space, position, inset, display, align-items, justify-content, text-align, padding, color, font, box-sizing | — |
| 22 | src/styles/22-aist-evolution-style.css:21-21 | #aistEvolutionSlide .ev-screen | — | position, inset, width, height, object-fit, display, opacity, transform, filter, transition, background | — |
| 22 | src/styles/22-aist-evolution-style.css:22-22 | #aistEvolutionSlide[data-ev-step="1"] .ev-screen[data-frame="1"],#aistEvolutionSlide[data-ev-step="2"] .ev-screen[data-frame="2"],#aistEvolutionSlide[data-ev-step="3"] .ev-screen[data-frame="3"],#aistEvolutionSlide[data-ev-step="4"] .ev-screen[data-frame="4"],#aistEvolutionSlide[data-ev-step="5"] .ev-screen[data-frame="5"],#aistEvolutionSlide[data-ev-step="6"] .ev-screen[data-frame="6"] | — | opacity, transform, filter | — |
| 22 | src/styles/22-aist-evolution-style.css:23-23 | #aistEvolutionSlide .ev-progress | — | position, bottom, right, display, gap, align-items | — |
| 22 | src/styles/22-aist-evolution-style.css:24-24 | #aistEvolutionSlide .ev-progress i | — | width, height, border-radius, background, transition | — |
| 22 | src/styles/22-aist-evolution-style.css:25-25 | #aistEvolutionSlide .ev-progress i.current | — | width, background, box-shadow | — |
| 22 | src/styles/22-aist-evolution-style.css:26-26 | #aistEvolutionSlide .ev-progress i.passed | — | background | — |
| 22 | src/styles/22-aist-evolution-style.css:27-27 | #aistEvolutionSlide .ev-stepmark | — | position, bottom, left, font-size, color, letter-spacing | — |
| 22 | src/styles/22-aist-evolution-style.css:28-28 | #aistEvolutionSlide,#aistEvolutionSlide .ev-screen,#aistEvolutionSlide .ev-intro,#aistEvolutionSlide .ev-display | @media(prefers-reduced-motion:reduce) | transition | да |
| 23 | src/styles/23-evolution-story-polish.css:2-2 | #aistEvolutionSlide .ev-intro h2 | — | font-size, line-height, max-width, letter-spacing | — |
| 23 | src/styles/23-evolution-story-polish.css:3-3 | #aistEvolutionSlide .ev-intro h2 strong | — | font-size, margin-top, letter-spacing | — |
| 23 | src/styles/23-evolution-story-polish.css:4-4 | #aistEvolutionSlide .ev-intro p | — | font-size, line-height, max-width | — |
| 23 | src/styles/23-evolution-story-polish.css:5-5 | #aistEvolutionSlide .ev-head | — | top, align-items | — |
| 23 | src/styles/23-evolution-story-polish.css:6-6 | #aistEvolutionSlide .ev-head>div:first-child | — | max-width, min-width | — |
| 23 | src/styles/23-evolution-story-polish.css:7-7 | #aistEvolutionSlide .ev-smalltitle | — | font-size, letter-spacing, margin-bottom | — |
| 23 | src/styles/23-evolution-story-polish.css:8-8 | #aistEvolutionSlide .ev-title | — | font-size, line-height, max-width | — |
| 23 | src/styles/23-evolution-story-polish.css:9-9 | #aistEvolutionSlide .ev-caption | — | max-width, padding-top, font-size, text-align, line-height, color | — |
| 23 | src/styles/23-evolution-story-polish.css:10-10 | #aistEvolutionSlide .ev-storyline | — | position, top, left, right, height, display, align-items, justify-content, gap, z-index, font, letter-spacing | — |
| 23 | src/styles/23-evolution-story-polish.css:11-11 | #aistEvolutionSlide .ev-storyline span[data-phase] | — | color, transition | — |
| 23 | src/styles/23-evolution-story-polish.css:12-12 | #aistEvolutionSlide .ev-storyline span[data-phase].current | — | color, text-shadow | — |
| 23 | src/styles/23-evolution-story-polish.css:13-13 | #aistEvolutionSlide .ev-storyline span[data-phase].passed | — | color | — |
| 23 | src/styles/23-evolution-story-polish.css:14-14 | #aistEvolutionSlide .ev-storyline .ev-bridge | — | color | — |
| 23 | src/styles/23-evolution-story-polish.css:15-15 | #aistEvolutionSlide .ev-frame | — | top, left, width, height | — |
| 23 | src/styles/23-evolution-story-polish.css:16-16 | #aistEvolutionSlide .ev-progress | — | bottom | — |
| 23 | src/styles/23-evolution-story-polish.css:17-17 | #aistEvolutionSlide .ev-stepmark | — | bottom | — |
| 23 | src/styles/23-evolution-story-polish.css:18-18 | #aistEvolutionSlide .ev-frame::before | — | content, white-space | — |
| 23 | src/styles/23-evolution-story-polish.css:19-19 | #aistEvolutionSlide.show .ev-head.story-enter .ev-title | — | animation | — |
| 23 | src/styles/23-evolution-story-polish.css:20-20 | #aistEvolutionSlide.show .ev-head.story-enter .ev-caption | — | animation | — |
| 23 | src/styles/23-evolution-story-polish.css:21-21 | @keyframes evStoryTextIn | — | opacity, filter, transform | — |
| 24 | src/styles/24-s7-figma-movie-style.css:3-3 | #figmaSlide7 .s7-figma-movie | — | position, inset, width, height, object-fit, object-position, background, display, z-index, opacity, pointer-events, transition | — |
| 24 | src/styles/24-s7-figma-movie-style.css:4-4 | #figmaSlide7.figma-movie-ready .s7-figma-movie | — | opacity | — |
| 24 | src/styles/24-s7-figma-movie-style.css:5-5 | #figmaSlide7 .s7-simple | — | opacity, transition | да |
| 24 | src/styles/24-s7-figma-movie-style.css:6-6 | #figmaSlide7 .s7-theses | — | left, top, width, height, gap, justify-content | — |
| 24 | src/styles/24-s7-figma-movie-style.css:7-7 | #figmaSlide7 .s7-thesis-2 | — | font-size, line-height, letter-spacing, font-weight, color, white-space | — |
| 24 | src/styles/24-s7-figma-movie-style.css:8-8 | #figmaSlide7 .s7-meme | — | left, top, width, height, border-radius, border, box-sizing, box-shadow, background, isolation | — |
| 24 | src/styles/24-s7-figma-movie-style.css:9-9 | #figmaSlide7 .s7-meme img | — | position, inset, width, height, z-index, object-fit, object-position | — |
| 24 | src/styles/24-s7-figma-movie-style.css:10-10 | #figmaSlide7.show .s7-thesis-2 | — | animation | — |
| 24 | src/styles/24-s7-figma-movie-style.css:11-11 | #figmaSlide7.show .s7-meme | — | animation | — |
| 25 | src/styles/25-ev2-storytelling-style.css:3-3 | #aistEvolutionSlide.ev2 | — | background, color, font-family | да |
| 25 | src/styles/25-ev2-storytelling-style.css:4-4 | #aistEvolutionSlide .ev2-ambient | — | position, inset, pointer-events, background, z-index | — |
| 25 | src/styles/25-ev2-storytelling-style.css:5-5 | #aistEvolutionSlide .ev2-screensource | — | display | да |
| 25 | src/styles/25-ev2-storytelling-style.css:6-6 | #aistEvolutionSlide .ev2-scene | — | position, inset, opacity, visibility, transform, filter, transition, pointer-events, z-index, overflow | — |
| 25 | src/styles/25-ev2-storytelling-style.css:7-7 | #aistEvolutionSlide.show .ev2-scene.is-active | — | opacity, visibility, transform, filter, transition-delay | — |
| 25 | src/styles/25-ev2-storytelling-style.css:8-8 | #aistEvolutionSlide .ev2-kicker,#aistEvolutionSlide .ev2-sectionid | — | position, left, top, color, font-size, font-weight, letter-spacing, z-index | — |
| 25 | src/styles/25-ev2-storytelling-style.css:9-9 | #aistEvolutionSlide .ev2-kicker | — | display, align-items, gap | — |
| 25 | src/styles/25-ev2-storytelling-style.css:10-10 | #aistEvolutionSlide .ev2-kicker i | — | width, height, background, display | — |
| 25 | src/styles/25-ev2-storytelling-style.css:11-11 | #aistEvolutionSlide .ev2-opening-rule | — | position, left, top, width, height, border-radius, background | — |
| 25 | src/styles/25-ev2-storytelling-style.css:12-12 | #aistEvolutionSlide .ev2-opening | — | position, left, top, max-width, margin, font-weight, font-size, letter-spacing, line-height | — |
| 25 | src/styles/25-ev2-storytelling-style.css:13-13 | #aistEvolutionSlide .ev2-opening em,#aistEvolutionSlide .ev2-hinge-title span,#aistEvolutionSlide .ev2-catalog-title em,#aistEvolutionSlide .ev2-assist-title em,#aistEvolutionSlide .ev2-summary-head em | — | font-style, font-weight, background, -webkit-background-clip, background-clip, color | — |
| 25 | src/styles/25-ev2-storytelling-style.css:14-14 | #aistEvolutionSlide .ev2-opening-point | — | color | — |
| 25 | src/styles/25-ev2-storytelling-style.css:15-15 | #aistEvolutionSlide .ev2-lead | — | position, left, bottom, font-size, font-weight, color, line-height, margin | — |
| 25 | src/styles/25-ev2-storytelling-style.css:16-16 | #aistEvolutionSlide .ev2-opening-corner | — | position, right, bottom, font-size, font-weight, color, letter-spacing | — |
| 25 | src/styles/25-ev2-storytelling-style.css:17-17 | #aistEvolutionSlide .ev2-opening-corner span | — | color, display, margin | — |
| 25 | src/styles/25-ev2-storytelling-style.css:18-18 | #aistEvolutionSlide .ev2-story-left | — | position, left, top, width, z-index | — |
| 25 | src/styles/25-ev2-storytelling-style.css:19-19 | #aistEvolutionSlide .ev2-hero | — | font-size, line-height, letter-spacing, font-weight, margin | — |
| 25 | src/styles/25-ev2-storytelling-style.css:20-20 | #aistEvolutionSlide .ev2-hero span | — | font-weight | — |
| 25 | src/styles/25-ev2-storytelling-style.css:21-21 | #aistEvolutionSlide .ev2-big-underline | — | width, height, border-radius, background, margin | — |
| 25 | src/styles/25-ev2-storytelling-style.css:22-22 | #aistEvolutionSlide .ev2-body | — | font-size, line-height, font-weight, color, margin | — |
| 25 | src/styles/25-ev2-storytelling-style.css:23-23 | #aistEvolutionSlide .ev2-body strong | — | font-weight, color | — |
| 25 | src/styles/25-ev2-storytelling-style.css:24-24 | #aistEvolutionSlide .ev2-subline | — | margin, font-size, color, line-height | — |
| 25 | src/styles/25-ev2-storytelling-style.css:25-25 | #aistEvolutionSlide .ev2-shot | — | overflow, position, background, box-shadow, border-radius, isolation | — |
| 25 | src/styles/25-ev2-storytelling-style.css:26-26 | #aistEvolutionSlide .ev2-shot img | — | display, position, inset, width, height, object-fit, object-position, background | — |
| 25 | src/styles/25-ev2-storytelling-style.css:27-27 | #aistEvolutionSlide .ev2-docmain | — | left, top, width, height, box-shadow | — |
| 25 | src/styles/25-ev2-storytelling-style.css:28-28 | #aistEvolutionSlide .ev2-docmain img | — | top, height | — |
| 25 | src/styles/25-ev2-storytelling-style.css:29-29 | #aistEvolutionSlide .ev2-window-label | — | position, left, right, top, z-index, height, background, color, font, letter-spacing, padding-left | — |
| 25 | src/styles/25-ev2-storytelling-style.css:30-30 | #aistEvolutionSlide .ev2-dots | — | position, left, top, display, gap | — |
| 25 | src/styles/25-ev2-storytelling-style.css:31-31 | #aistEvolutionSlide .ev2-dots i | — | display, width, height, border-radius, background | — |
| 25 | src/styles/25-ev2-storytelling-style.css:32-32 | #aistEvolutionSlide .ev2-cornerlabel | — | position, bottom, right, color, letter-spacing, font-size | — |
| 25 | src/styles/25-ev2-storytelling-style.css:33-33 | #aistEvolutionSlide .ev2-hinge-shade | — | position, right, top, width, height, background, filter | — |
| 25 | src/styles/25-ev2-storytelling-style.css:34-34 | #aistEvolutionSlide .ev2-hinge-title | — | position, top, left, width, font-size, line-height, letter-spacing, font-weight, margin | — |
| 25 | src/styles/25-ev2-storytelling-style.css:35-35 | #aistEvolutionSlide .ev2-hinge-caption | — | position, top, left, color, font-size, letter-spacing | — |
| 25 | src/styles/25-ev2-storytelling-style.css:36-36 | #aistEvolutionSlide .ev2-scenarios | — | position, bottom, left, right, display, gap, border-top, padding-top | — |
| 25 | src/styles/25-ev2-storytelling-style.css:37-37 | #aistEvolutionSlide .ev2-scenarios div | — | flex, display, align-items, gap | — |
| 25 | src/styles/25-ev2-storytelling-style.css:38-38 | #aistEvolutionSlide .ev2-scenarios span | — | font-size, color | — |
| 25 | src/styles/25-ev2-storytelling-style.css:39-39 | #aistEvolutionSlide .ev2-scenarios b | — | font-size, font-weight, letter-spacing | — |
| 25 | src/styles/25-ev2-storytelling-style.css:40-40 | #aistEvolutionSlide .ev2-aist-left | — | top | — |
| 25 | src/styles/25-ev2-storytelling-style.css:41-41 | #aistEvolutionSlide .ev2-smallword | — | display, color, font-size, letter-spacing, margin-bottom | — |
| 25 | src/styles/25-ev2-storytelling-style.css:42-42 | #aistEvolutionSlide .ev2-aist-title | — | font-weight, font-size, line-height, letter-spacing, margin | — |
| 25 | src/styles/25-ev2-storytelling-style.css:43-43 | #aistEvolutionSlide .ev2-aist-title span | — | color | — |
| 25 | src/styles/25-ev2-storytelling-style.css:44-44 | #aistEvolutionSlide .ev2-aist-home | — | left, top, width, height, box-shadow | — |
| 25 | src/styles/25-ev2-storytelling-style.css:45-45 | #aistEvolutionSlide .ev2-catalog-title | — | position, left, top, font-size, line-height, letter-spacing, font-weight, margin | — |
| 25 | src/styles/25-ev2-storytelling-style.css:46-46 | #aistEvolutionSlide .ev2-catalog-shot | — | left, top, width, height, transform, transform-origin | — |
| 25 | src/styles/25-ev2-storytelling-style.css:47-47 | #aistEvolutionSlide .ev2-agent-index | — | position, left, top, right, display, flex-direction, border-top | — |
| 25 | src/styles/25-ev2-storytelling-style.css:48-48 | #aistEvolutionSlide .ev2-agent-index div | — | border-bottom, font-size, line-height, padding, font-weight, display, align-items, gap | — |
| 25 | src/styles/25-ev2-storytelling-style.css:49-49 | #aistEvolutionSlide .ev2-agent-index small | — | color, font-size | — |
| 25 | src/styles/25-ev2-storytelling-style.css:50-50 | #aistEvolutionSlide .ev2-assist-left | — | top | — |
| 25 | src/styles/25-ev2-storytelling-style.css:51-51 | #aistEvolutionSlide .ev2-assist-title | — | font-size, line-height, letter-spacing, font-weight, margin | — |
| 25 | src/styles/25-ev2-storytelling-style.css:52-52 | #aistEvolutionSlide .ev2-assist-left .ev2-body | — | max-width, font-size, color | — |
| 25 | src/styles/25-ev2-storytelling-style.css:53-53 | #aistEvolutionSlide .ev2-chat-shot | — | left, top, width, height, box-shadow | — |
| 25 | src/styles/25-ev2-storytelling-style.css:54-54 | #aistEvolutionSlide .ev2-summary-head | — | position, top, left, font-size, line-height, letter-spacing, font-weight, margin | — |
| 25 | src/styles/25-ev2-storytelling-style.css:55-55 | #aistEvolutionSlide .ev2-comparison | — | position, left, right, top, display, grid-template-columns, gap, align-items | — |
| 25 | src/styles/25-ev2-storytelling-style.css:56-56 | #aistEvolutionSlide .ev2-comparison label | — | display, color, font-size, letter-spacing, margin-bottom | — |
| 25 | src/styles/25-ev2-storytelling-style.css:57-57 | #aistEvolutionSlide .ev2-comparison .ev2-shot | — | position, left, top, width, height, box-shadow | — |
| 25 | src/styles/25-ev2-storytelling-style.css:58-58 | #aistEvolutionSlide .ev2-comparison .ev2-compare-new .ev2-shot | — | box-shadow | — |
| 25 | src/styles/25-ev2-storytelling-style.css:59-59 | #aistEvolutionSlide .ev2-comparison p | — | margin, color, font-size, line-height | — |
| 25 | src/styles/25-ev2-storytelling-style.css:60-60 | #aistEvolutionSlide .ev2-compare-arrow | — | color, font-size, text-align, padding-top, font-weight | — |
| 25 | src/styles/25-ev2-storytelling-style.css:61-61 | #aistEvolutionSlide .ev2-navigation-track | — | position, bottom, left, right, z-index, display, align-items, gap, color, font, letter-spacing, pointer-events | — |
| 25 | src/styles/25-ev2-storytelling-style.css:62-62 | #aistEvolutionSlide .ev2-track-line | — | height, background, border-radius, position, flex, overflow | — |
| 25 | src/styles/25-ev2-storytelling-style.css:63-63 | #aistEvolutionSlide .ev2-track-line i | — | position, left, top, height, width, background, box-shadow, transition | — |
| 25 | src/styles/25-ev2-storytelling-style.css:64-64 | #aistEvolutionSlide .ev2-track-current | — | width, text-align, color, letter-spacing | — |
| 25 | src/styles/25-ev2-storytelling-style.css:65-65 | #aistEvolutionSlide .ev2-scene,#aistEvolutionSlide .ev2-track-line i | @media(prefers-reduced-motion:reduce) | transition | да |
| 26 | src/styles/26-layout-audit-fixes-2026-10-12.css:7-9 | #aistEvolutionSlide .ev2-navigation-track | — | bottom | да |
| 26 | src/styles/26-layout-audit-fixes-2026-10-12.css:10-13 | #aistEvolutionSlide .ev2-catalog-shot | — | top, transform | — |
| 26 | src/styles/26-layout-audit-fixes-2026-10-12.css:16-16 | #pdfSlide12 .ee-adr-sub | — | margin-bottom | — |
| 26 | src/styles/26-layout-audit-fixes-2026-10-12.css:17-17 | #pdfSlide12 .ee-adr-layout | — | height, gap | — |
| 26 | src/styles/26-layout-audit-fixes-2026-10-12.css:18-18 | #pdfSlide12 .ee-adr-table>div | — | min-height, font-size | — |
| 26 | src/styles/26-layout-audit-fixes-2026-10-12.css:19-19 | #pdfSlide12 .ee-adr-table>.ee-table-header | — | min-height | — |
| 26 | src/styles/26-layout-audit-fixes-2026-10-12.css:20-20 | #pdfSlide12 .ee-adr-detail | — | padding | — |
| 26 | src/styles/26-layout-audit-fixes-2026-10-12.css:21-21 | #pdfSlide12 .ee-decision | — | font-size, padding | — |
| 26 | src/styles/26-layout-audit-fixes-2026-10-12.css:22-22 | #pdfSlide12 .ee-decision b | — | font-size | — |
| 26 | src/styles/26-layout-audit-fixes-2026-10-12.css:23-23 | #pdfSlide12 .ee-adr-bot | — | margin-top, gap | — |
| 26 | src/styles/26-layout-audit-fixes-2026-10-12.css:24-24 | #pdfSlide12 .ee-adr-bot>div | — | padding, font-size, line-height | — |
| 26 | src/styles/26-layout-audit-fixes-2026-10-12.css:25-25 | #pdfSlide12 .ee-adr-bot b | — | font-size, margin-bottom | — |
| 26 | src/styles/26-layout-audit-fixes-2026-10-12.css:29-29 | #pdfSlide13 .ee-layers | — | gap, grid-template-rows | — |
| 26 | src/styles/26-layout-audit-fixes-2026-10-12.css:30-30 | #pdfSlide13 .ee-layer | — | min-height, grid-template-columns, padding, border-bottom-color | — |
| 26 | src/styles/26-layout-audit-fixes-2026-10-12.css:31-31 | #pdfSlide13 .ee-layer-name | — | font-size, line-height, overflow-wrap | — |
| 26 | src/styles/26-layout-audit-fixes-2026-10-12.css:32-32 | #pdfSlide13 .ee-layer-nodes | — | min-width, gap, align-items | — |
| 26 | src/styles/26-layout-audit-fixes-2026-10-12.css:33-41 | #pdfSlide13 .ee-layer-node, #pdfSlide13 .ee-layer:nth-child(even) .ee-layer-node | — | min-width, min-height, padding, flex, display, flex-direction, justify-content, align-items, text-align, font-size, line-height, overflow-wrap, hyphens, background | — |
| 26 | src/styles/26-layout-audit-fixes-2026-10-12.css:42-46 | #pdfSlide13 .ee-layer-node small | — | display, flex, width, margin-top, line-height, font-size, white-space, overflow-wrap | — |
| 26 | src/styles/26-layout-audit-fixes-2026-10-12.css:50-54 | #pdfSlide16 .ee-pipe | — | display, grid-template-columns, grid-template-rows, height, margin-top, gap | — |
| 26 | src/styles/26-layout-audit-fixes-2026-10-12.css:55-59 | #pdfSlide16 .ee-pipe-node, #pdfSlide16 .ee-pipe-node.tone-blue | — | min-width, min-height, padding, border-top-width | — |
| 26 | src/styles/26-layout-audit-fixes-2026-10-12.css:60-60 | #pdfSlide16 .ee-pipe-node:nth-child(-n+3) | — | grid-column | — |
| 26 | src/styles/26-layout-audit-fixes-2026-10-12.css:61-61 | #pdfSlide16 .ee-pipe-node:nth-child(n+4) | — | grid-column | — |
| 26 | src/styles/26-layout-audit-fixes-2026-10-12.css:62-66 | #pdfSlide16 .ee-pipe-label | — | font-size, line-height, margin-bottom, padding-bottom, overflow-wrap | — |
| 26 | src/styles/26-layout-audit-fixes-2026-10-12.css:67-70 | #pdfSlide16 .ee-pipe-copy | — | font-size, line-height, overflow-wrap | — |
| 26 | src/styles/26-layout-audit-fixes-2026-10-12.css:71-71 | #pdfSlide16 .ee-pipe-node:not(:last-child):after | — | display | — |
| 26 | src/styles/26-layout-audit-fixes-2026-10-12.css:72-72 | #pdfSlide16 .ee-pipe-tag | — | margin-top, font-size | — |
| 26 | src/styles/26-layout-audit-fixes-2026-10-12.css:76-76 | #pdfSlide19 .ee-sandbox | — | grid-template-columns, gap | — |
| 26 | src/styles/26-layout-audit-fixes-2026-10-12.css:77-77 | #pdfSlide19 .ee-isolation | — | min-width | — |
| 26 | src/styles/26-layout-audit-fixes-2026-10-12.css:78-82 | #pdfSlide19 .ee-bridge | — | top, right, width, z-index, text-align, white-space, line-height, font-size | — |
| 26 | src/styles/26-layout-audit-fixes-2026-10-12.css:83-83 | #pdfSlide19 .ee-bridge small | — | font-size | — |
| 26 | src/styles/26-layout-audit-fixes-2026-10-12.css:84-84 | #pdfSlide19 .ee-bridge span | — | font-size, line-height | — |
| 26 | src/styles/26-layout-audit-fixes-2026-10-12.css:85-85 | #pdfSlide19 .ee-toolstack | — | min-width | — |
| 26 | src/styles/26-layout-audit-fixes-2026-10-12.css:86-86 | #pdfSlide19 .ee-toolstack .ee-block | — | padding | — |
| 26 | src/styles/26-layout-audit-fixes-2026-10-12.css:87-87 | #pdfSlide19 .ee-toolstack .ee-block-label | — | font-size, margin-bottom | — |
| 26 | src/styles/26-layout-audit-fixes-2026-10-12.css:88-88 | #pdfSlide19 .ee-toolstack .ee-block-body | — | font-size, line-height | — |
| 27 | src/styles/27-slide8-editorial-simplify.css:3-3 | #aistEvolutionSlide.ev2 | — | background | да |
| 27 | src/styles/27-slide8-editorial-simplify.css:4-4 | #aistEvolutionSlide .ev2-scene | — | overflow | — |
| 27 | src/styles/27-slide8-editorial-simplify.css:5-5 | #aistEvolutionSlide .ev2-opening | — | top, left, font-size, line-height, max-width | — |
| 27 | src/styles/27-slide8-editorial-simplify.css:6-6 | #aistEvolutionSlide .ev2-lead | — | left, bottom, font-size, color, letter-spacing | — |
| 27 | src/styles/27-slide8-editorial-simplify.css:7-7 | #aistEvolutionSlide .ev2-story-left | — | left, top, width | — |
| 27 | src/styles/27-slide8-editorial-simplify.css:8-8 | #aistEvolutionSlide .ev2-hero | — | font-size, line-height | — |
| 27 | src/styles/27-slide8-editorial-simplify.css:9-9 | #aistEvolutionSlide .ev2-body | — | font-size, line-height, margin-top, color, max-width | — |
| 27 | src/styles/27-slide8-editorial-simplify.css:10-10 | #aistEvolutionSlide .ev2-body strong | — | color, font-weight | — |
| 27 | src/styles/27-slide8-editorial-simplify.css:11-11 | #aistEvolutionSlide .ev2-shot | — | border-radius, box-shadow | — |
| 27 | src/styles/27-slide8-editorial-simplify.css:12-14 | #aistEvolutionSlide .ev2-docmain, #aistEvolutionSlide .ev2-aist-home, #aistEvolutionSlide .ev2-chat-shot | — | left, top, width, height, box-shadow | — |
| 27 | src/styles/27-slide8-editorial-simplify.css:15-15 | #aistEvolutionSlide .ev2-docmain img | — | inset, width, height, object-fit | — |
| 27 | src/styles/27-slide8-editorial-simplify.css:16-16 | #aistEvolutionSlide .ev2-hinge-title | — | left, top, font-size, line-height, max-width | — |
| 27 | src/styles/27-slide8-editorial-simplify.css:17-17 | #aistEvolutionSlide .ev2-hinge-caption | — | left, top, font-size, color | — |
| 27 | src/styles/27-slide8-editorial-simplify.css:18-18 | #aistEvolutionSlide .ev2-aist-left | — | top | — |
| 27 | src/styles/27-slide8-editorial-simplify.css:19-19 | #aistEvolutionSlide .ev2-aist-title | — | font-size, line-height, margin | — |
| 27 | src/styles/27-slide8-editorial-simplify.css:20-20 | #aistEvolutionSlide .ev2-aist-left .ev2-body | — | max-width, margin-top, font-size | — |
| 27 | src/styles/27-slide8-editorial-simplify.css:21-21 | #aistEvolutionSlide .ev2-catalog-title | — | left, top, font-size, line-height | — |
| 27 | src/styles/27-slide8-editorial-simplify.css:22-22 | #aistEvolutionSlide .ev2-catalog-shot | — | left, top, width, height, transform, transform-origin | да |
| 27 | src/styles/27-slide8-editorial-simplify.css:23-23 | #aistEvolutionSlide .ev2-assist-left | — | top | — |
| 27 | src/styles/27-slide8-editorial-simplify.css:24-24 | #aistEvolutionSlide .ev2-assist-title | — | font-size, line-height, letter-spacing | — |
| 27 | src/styles/27-slide8-editorial-simplify.css:25-25 | #aistEvolutionSlide .ev2-summary-head | — | left, top, font-size, line-height, max-width | — |
| 27 | src/styles/27-slide8-editorial-simplify.css:26-26 | #aistEvolutionSlide .ev2-comparison | — | left, right, top, gap, grid-template-columns | — |
| 27 | src/styles/27-slide8-editorial-simplify.css:27-27 | #aistEvolutionSlide .ev2-comparison label | — | font-size, letter-spacing, color, margin | — |
| 27 | src/styles/27-slide8-editorial-simplify.css:28-28 | #aistEvolutionSlide .ev2-comparison .ev2-shot | — | height, border-radius | — |
| 27 | src/styles/27-slide8-editorial-simplify.css:29-29 | #aistEvolutionSlide .ev2-compare-arrow | — | padding-top, font-size | — |
| 28 | src/styles/28-konspektus-practice-style.css:3-3 | .pdfRestSlide.ee-slide.kx-section .ee-canvas | — | padding, background, box-shadow, border, border-radius | да |
| 28 | src/styles/28-konspektus-practice-style.css:4-4 | .pdfRestSlide.ee-slide.kx-section .ee-header | — | position, left, top, margin, z-index, max-width | — |
| 28 | src/styles/28-konspektus-practice-style.css:5-5 | .pdfRestSlide.ee-slide.kx-section .ee-header h2 | — | max-width, font-size, line-height, letter-spacing, font-weight | — |
| 28 | src/styles/28-konspektus-practice-style.css:6-6 | .pdfRestSlide.ee-slide.kx-section .ee-content | — | position, top, left, right, bottom, height, min-height, overflow | — |
| 28 | src/styles/28-konspektus-practice-style.css:7-7 | .kx-chapter | — | font, letter-spacing, text-transform, color, margin-bottom | — |
| 28 | src/styles/28-konspektus-practice-style.css:8-8 | .kx-two | — | width, height, display, grid-template-columns, gap, align-items | — |
| 28 | src/styles/28-konspektus-practice-style.css:9-9 | .kx-shot | — | position, overflow, border, border-radius, background, box-shadow, display, align-items, justify-content | — |
| 28 | src/styles/28-konspektus-practice-style.css:10-10 | .kx-shot img | — | display, width, height, object-fit, object-position | — |
| 28 | src/styles/28-konspektus-practice-style.css:11-11 | .kx-shine | — | position, left, top, width, height, background, filter, pointer-events | — |
| 28 | src/styles/28-konspektus-practice-style.css:12-12 | .kx-eyebrow | — | font-size, letter-spacing, text-transform, color, margin | — |
| 28 | src/styles/28-konspektus-practice-style.css:13-13 | .kx-large | — | font-weight, font-size, line-height, letter-spacing, color, margin | — |
| 28 | src/styles/28-konspektus-practice-style.css:14-14 | .kx-large strong | — | font-weight, color | — |
| 28 | src/styles/28-konspektus-practice-style.css:15-15 | .kx-notes | — | display, flex-direction, gap, margin-top | — |
| 28 | src/styles/28-konspektus-practice-style.css:16-16 | .kx-note | — | font-size, line-height, color, padding-left, border-left | — |
| 28 | src/styles/28-konspektus-practice-style.css:17-17 | .kx-label | — | display, font-size, color, letter-spacing, text-transform, margin-bottom, font-weight | — |
| 28 | src/styles/28-konspektus-practice-style.css:18-18 | .kx-screen-title | — | position, top, left, font-size, color, background, padding, border-radius, z-index | — |
| 28 | src/styles/28-konspektus-practice-style.css:19-19 | .kx-doc-window | — | background, border, border-radius, box-shadow, overflow, height, min-width | — |
| 28 | src/styles/28-konspektus-practice-style.css:20-20 | .kx-filebar | — | height, display, align-items, gap, padding, border-bottom, background, font, color | — |
| 28 | src/styles/28-konspektus-practice-style.css:21-21 | .kx-filebar:before | — | content, font-size, letter-spacing, color, margin-right | — |
| 28 | src/styles/28-konspektus-practice-style.css:22-22 | .kx-doc-lines | — | padding, font, color | — |
| 28 | src/styles/28-konspektus-practice-style.css:23-23 | .kx-doc-lines b | — | color, font-weight | — |
| 28 | src/styles/28-konspektus-practice-style.css:24-24 | .kx-doc-lines em | — | color, font-style | — |
| 28 | src/styles/28-konspektus-practice-style.css:25-25 | .kx-doc-lines .accent | — | color | — |
| 28 | src/styles/28-konspektus-practice-style.css:26-26 | .kx-doc-lines .line | — | white-space, display | — |
| 28 | src/styles/28-konspektus-practice-style.css:27-27 | .kx-doc-caption | — | font-size, line-height, color, margin-top | — |
| 28 | src/styles/28-konspektus-practice-style.css:28-28 | .kx-bottom-rail | — | position, bottom, left, right, display, gap, align-items, color, font-size | — |
| 28 | src/styles/28-konspektus-practice-style.css:29-29 | .kx-bottom-rail i | — | height, flex, background | — |
| 28 | src/styles/28-konspektus-practice-style.css:31-31 | #pdfSlide23 .ee-content | — | top, bottom | — |
| 28 | src/styles/28-konspektus-practice-style.css:32-32 | #pdfSlide23 .kx-two | — | grid-template-columns, gap | — |
| 28 | src/styles/28-konspektus-practice-style.css:33-33 | #pdfSlide23 .kx-shot | — | height | — |
| 28 | src/styles/28-konspektus-practice-style.css:34-34 | #pdfSlide23 .kx-visual | — | position, height, display, flex-direction, justify-content, gap | — |
| 28 | src/styles/28-konspektus-practice-style.css:35-35 | #pdfSlide23 .kx-visual .kx-caption | — | color, font-size, line-height | — |
| 28 | src/styles/28-konspektus-practice-style.css:37-37 | #pdfSlide24 .ee-content | — | top, bottom | — |
| 28 | src/styles/28-konspektus-practice-style.css:38-38 | #pdfSlide24 .kx-two | — | grid-template-columns, gap | — |
| 28 | src/styles/28-konspektus-practice-style.css:39-39 | #pdfSlide24 .kx-shot | — | height | — |
| 28 | src/styles/28-konspektus-practice-style.css:40-40 | #pdfSlide24 .kx-large | — | font-size | — |
| 28 | src/styles/28-konspektus-practice-style.css:41-41 | #pdfSlide24 .kx-notes | — | gap | — |
| 28 | src/styles/28-konspektus-practice-style.css:43-43 | #pdfSlide25 .ee-content | — | top, bottom | — |
| 28 | src/styles/28-konspektus-practice-style.css:44-44 | #pdfSlide25 .kx-two | — | grid-template-columns, gap | — |
| 28 | src/styles/28-konspektus-practice-style.css:45-45 | #pdfSlide25 .kx-shot | — | height | — |
| 28 | src/styles/28-konspektus-practice-style.css:46-46 | #pdfSlide25 .kx-large | — | font-size | — |
| 28 | src/styles/28-konspektus-practice-style.css:47-47 | #pdfSlide25 .kx-notes | — | gap | — |
| 28 | src/styles/28-konspektus-practice-style.css:49-49 | #pdfSlide26 .ee-header | — | top | — |
| 28 | src/styles/28-konspektus-practice-style.css:50-50 | #pdfSlide26 .ee-header h2 | — | font-size | — |
| 28 | src/styles/28-konspektus-practice-style.css:51-51 | #pdfSlide26 .ee-content | — | top, bottom | — |
| 28 | src/styles/28-konspektus-practice-style.css:52-52 | #pdfSlide26 .kx-cta | — | display, grid-template-columns, gap, height, align-items | — |
| 28 | src/styles/28-konspektus-practice-style.css:53-53 | #pdfSlide26 .kx-cta-text | — | font-size, line-height, color, max-width | — |
| 28 | src/styles/28-konspektus-practice-style.css:54-54 | #pdfSlide26 .kx-cta-text strong | — | color | — |
| 28 | src/styles/28-konspektus-practice-style.css:55-55 | #pdfSlide26 .kx-cta .kx-link | — | display, margin-top, font-size, color, text-decoration, word-break | — |
| 28 | src/styles/28-konspektus-practice-style.css:56-56 | #pdfSlide26 .kx-cta .kx-link:hover | — | text-decoration | — |
| 28 | src/styles/28-konspektus-practice-style.css:57-57 | #pdfSlide26 .kx-qr-wrap | — | display, align-items, justify-content, flex-direction, gap | — |
| 28 | src/styles/28-konspektus-practice-style.css:58-58 | #pdfSlide26 .kx-qr-link | — | display, background, padding, border-radius, box-shadow, transition, position, z-index | — |
| 28 | src/styles/28-konspektus-practice-style.css:59-59 | #pdfSlide26 .kx-qr-link:hover | — | transform | — |
| 28 | src/styles/28-konspektus-practice-style.css:60-60 | #pdfSlide26 .kx-qr-link img | — | width, height, image-rendering, display | — |
| 28 | src/styles/28-konspektus-practice-style.css:61-61 | #pdfSlide26 .kx-qr-under | — | font-size, letter-spacing, color | — |
| 28 | src/styles/28-konspektus-practice-style.css:63-63 | .kx-section .ee-content | @media(prefers-reduced-motion:reduce) | opacity, animation | да |
| 29 | src/styles/29-semenov-29-closing-style.css:3-3 | #pdfSlide28.ee-slide .ee-canvas | — | padding, background, border, border-radius, box-shadow | да |
| 29 | src/styles/29-semenov-29-closing-style.css:4-4 | #pdfSlide28.ee-slide .ee-canvas::before,#pdfSlide28.ee-slide .ee-canvas::after | — | display | да |
| 29 | src/styles/29-semenov-29-closing-style.css:5-5 | #pdfSlide28.ee-slide .ee-header | — | position, left, top, width, z-index, margin, transform-origin | — |
| 29 | src/styles/29-semenov-29-closing-style.css:6-6 | #pdfSlide28.ee-slide .ee-header h2 | — | font, letter-spacing, max-width, white-space, overflow-wrap | — |
| 29 | src/styles/29-semenov-29-closing-style.css:7-7 | #pdfSlide28.ee-slide .ee-header h2 span | — | display, margin-top, font-weight | — |
| 29 | src/styles/29-semenov-29-closing-style.css:8-8 | #pdfSlide28.ee-slide .ee-content | — | position, inset, width, height, overflow, z-index | да |
| 29 | src/styles/29-semenov-29-closing-style.css:9-9 | #pdfSlide28.ee-slide .sv29-line | — | position, top, left, width, height, background | — |
| 29 | src/styles/29-semenov-29-closing-style.css:10-10 | #pdfSlide28.ee-slide .sv29-speaker | — | position, left, top, max-width | — |
| 29 | src/styles/29-semenov-29-closing-style.css:11-11 | #pdfSlide28.ee-slide .sv29-name | — | font, color, letter-spacing | — |
| 29 | src/styles/29-semenov-29-closing-style.css:12-12 | #pdfSlide28.ee-slide .sv29-role | — | font, color, margin-top | — |
| 29 | src/styles/29-semenov-29-closing-style.css:13-13 | #pdfSlide28.ee-slide .sv29-link | — | display, align-items, gap, margin-top, text-decoration, color, font, position, z-index, pointer-events | да |
| 29 | src/styles/29-semenov-29-closing-style.css:14-14 | #pdfSlide28.ee-slide .sv29-link:hover | — | text-decoration, color | да |
| 29 | src/styles/29-semenov-29-closing-style.css:15-15 | #pdfSlide28.ee-slide .sv29-link svg | — | width, height, fill | — |
| 29 | src/styles/29-semenov-29-closing-style.css:16-16 | #pdfSlide28.ee-slide .sv29-photo | — | position, top, left, width, height, border-radius, overflow, background, border, box-shadow | — |
| 29 | src/styles/29-semenov-29-closing-style.css:17-17 | #pdfSlide28.ee-slide .sv29-photo img | — | width, height, object-fit, object-position, display | — |
| 29 | src/styles/29-semenov-29-closing-style.css:18-18 | #pdfSlide28.ee-slide .sv29-photo::after | — | content, position, inset, background, pointer-events | — |
| 29 | src/styles/29-semenov-29-closing-style.css:19-19 | #pdfSlide28.ee-slide .sv29-qr-group | — | position, left, top, z-index, display, flex-direction, align-items, width, gap | — |
| 29 | src/styles/29-semenov-29-closing-style.css:20-20 | #pdfSlide28.ee-slide .sv29-qr-link | — | display, padding, background, border-radius, box-shadow, pointer-events, transition | — |
| 29 | src/styles/29-semenov-29-closing-style.css:21-21 | #pdfSlide28.ee-slide .sv29-qr-link:hover | — | transform | — |
| 29 | src/styles/29-semenov-29-closing-style.css:22-22 | #pdfSlide28.ee-slide .sv29-qr-link img | — | width, height, display, image-rendering | — |
| 29 | src/styles/29-semenov-29-closing-style.css:23-23 | #pdfSlide28.ee-slide .sv29-qr-label | — | text-align, font, color, white-space | — |
| 29 | src/styles/29-semenov-29-closing-style.css:24-24 | #pdfSlide28.ee-slide .sv29-ambient | — | position, right, top, width, height, background, filter, z-index, pointer-events | — |
| 29 | src/styles/29-semenov-29-closing-style.css:25-25 | #pdfSlide28.ee-slide.show .sv29-speaker | — | animation | — |
| 29 | src/styles/29-semenov-29-closing-style.css:26-26 | #pdfSlide28.ee-slide.show .sv29-photo | — | animation | — |
| 29 | src/styles/29-semenov-29-closing-style.css:27-27 | #pdfSlide28.ee-slide.show .sv29-qr-group | — | animation | — |
| 29 | src/styles/29-semenov-29-closing-style.css:28-28 | @keyframes sv29Arrival | — | opacity, transform, filter | — |
| 29 | src/styles/29-semenov-29-closing-style.css:29-29 | #pdfSlide28.ee-slide.show .sv29-speaker,#pdfSlide28.ee-slide.show .sv29-photo,#pdfSlide28.ee-slide.show .sv29-qr-group | @media(prefers-reduced-motion:reduce) | animation, opacity, transform, filter | — |
| 30 | src/styles/30-sergei-overrides-oct12.css:3-3 | .ee-slide .ee-header | — | display, opacity, visibility, pointer-events | да |
| 30 | src/styles/30-sergei-overrides-oct12.css:4-4 | .ee-slide .ee-content | — | padding-top | да |
| 30 | src/styles/30-sergei-overrides-oct12.css:5-5 | .ee-slide .ee-reveal | — | animation, transform, opacity | да |
| 30 | src/styles/30-sergei-overrides-oct12.css:8-8 | #pdfSlide26 .ee-content, #pdfSlide28 .ee-content, #pdfSlide28 .ee-content | — | padding-top | да |
| 30 | src/styles/30-sergei-overrides-oct12.css:11-17 | .sv29-final .ee-content | — | display, grid-template-columns, align-items, gap, min-height | да |
| 30 | src/styles/30-sergei-overrides-oct12.css:18-18 | .sv29-final .sv29-line | — | display | да |
| 30 | src/styles/30-sergei-overrides-oct12.css:19-19 | .sv29-final .sv29-speaker | — | align-self, max-width | да |
| 30 | src/styles/30-sergei-overrides-oct12.css:20-20 | .sv29-final .sv29-name | — | font-size, line-height, letter-spacing | да |
| 30 | src/styles/30-sergei-overrides-oct12.css:21-21 | .sv29-final .sv29-role | — | margin-top, font-size, line-height | да |
| 30 | src/styles/30-sergei-overrides-oct12.css:22-22 | .sv29-final .sv29-link | — | margin-top, font-size, padding, display, align-items, gap | да |
| 30 | src/styles/30-sergei-overrides-oct12.css:23-23 | .sv29-final .sv29-photo | — | width, max-width, justify-self | да |
| 30 | src/styles/30-sergei-overrides-oct12.css:24-24 | .sv29-final .sv29-photo img | — | width, height, aspect-ratio, object-fit, border-radius | да |
| 30 | src/styles/30-sergei-overrides-oct12.css:25-25 | .sv29-final .sv29-qr-group | — | justify-self, align-self, max-width, width, display, flex-direction, align-items, gap | да |
| 30 | src/styles/30-sergei-overrides-oct12.css:26-26 | .sv29-final .sv29-qr-link | — | display, align-items, justify-content, padding, border-radius, background, box-shadow | да |
| 30 | src/styles/30-sergei-overrides-oct12.css:27-27 | .sv29-final .sv29-qr-link img | — | display, width, height, max-width, object-fit | да |
| 30 | src/styles/30-sergei-overrides-oct12.css:28-28 | .sv29-final .sv29-qr-label | — | font-size, line-height, text-align, max-width | да |
| 30 | src/styles/30-sergei-overrides-oct12.css:31-31 | .catwin-slide .pdf-stage | — | overflow | — |
| 30 | src/styles/30-sergei-overrides-oct12.css:32-35 | .catwin-slide .ee-canvas | — | position, background | — |
| 30 | src/styles/30-sergei-overrides-oct12.css:36-38 | .catwin-slide .catwin-bg, .catwin-slide .catwin-bg::before, .catwin-slide .catwin-bg::after | — | content, position, inset, pointer-events | — |
| 30 | src/styles/30-sergei-overrides-oct12.css:39-42 | .catwin-slide .catwin-bg::before | — | background, opacity | — |
| 30 | src/styles/30-sergei-overrides-oct12.css:43-45 | .catwin-slide .catwin-bg::after | — | background | — |
| 30 | src/styles/30-sergei-overrides-oct12.css:46-48 | .catwin-slide .catwin-layout | — | position, z-index, height, display, grid-template-columns, gap, padding | — |
| 30 | src/styles/30-sergei-overrides-oct12.css:49-49 | .catwin-slide .catwin-copy | — | display, flex-direction, justify-content, max-width | — |
| 30 | src/styles/30-sergei-overrides-oct12.css:50-56 | .catwin-slide .catwin-kicker | — | display, align-items, gap, align-self, padding, border-radius, background, border, color, font, letter-spacing, text-transform, box-shadow | — |
| 30 | src/styles/30-sergei-overrides-oct12.css:57-59 | .catwin-slide .catwin-title | — | margin, color, font, letter-spacing | — |
| 30 | src/styles/30-sergei-overrides-oct12.css:60-60 | .catwin-slide .catwin-title span | — | display, color | — |
| 30 | src/styles/30-sergei-overrides-oct12.css:61-63 | .catwin-slide .catwin-lead | — | margin, max-width, color, font | — |
| 30 | src/styles/30-sergei-overrides-oct12.css:64-64 | .catwin-slide .catwin-badges | — | display, flex-wrap, gap, margin | — |
| 30 | src/styles/30-sergei-overrides-oct12.css:65-68 | .catwin-slide .catwin-badge | — | padding, border-radius, background, border, color, font | — |
| 30 | src/styles/30-sergei-overrides-oct12.css:69-69 | .catwin-slide .catwin-badge strong | — | display, color, font-size, text-transform, letter-spacing, margin-bottom | — |
| 30 | src/styles/30-sergei-overrides-oct12.css:70-74 | .catwin-slide .catwin-note | — | display, align-items, gap, max-width, padding, border-radius, background, border, color, font | — |
| 30 | src/styles/30-sergei-overrides-oct12.css:75-75 | .catwin-slide .catwin-note .dot | — | width, height, border-radius, background, box-shadow, margin-top, flex | — |
| 30 | src/styles/30-sergei-overrides-oct12.css:76-76 | .catwin-slide .catwin-visual | — | position, display, align-items, justify-content | — |
| 30 | src/styles/30-sergei-overrides-oct12.css:77-77 | .catwin-slide .catwin-stage | — | position, width, height, min-height, max-width | — |
| 30 | src/styles/30-sergei-overrides-oct12.css:78-78 | .catwin-slide .catwin-stage img | — | position, display, user-select, -webkit-user-drag | — |
| 30 | src/styles/30-sergei-overrides-oct12.css:79-79 | .catwin-slide .catwin-battlefield | — | inset, width, height, object-fit, opacity, filter | да |
| 30 | src/styles/30-sergei-overrides-oct12.css:80-80 | .catwin-slide .catwin-dragon | — | left, top, width, opacity, transform, filter | — |
| 30 | src/styles/30-sergei-overrides-oct12.css:81-81 | .catwin-slide .catwin-kitty | — | right, top, width, z-index, filter | — |
| 30 | src/styles/30-sergei-overrides-oct12.css:82-82 | .catwin-slide .catwin-burst | — | position, right, top, width, height, border-radius, background, filter, z-index | — |
| 30 | src/styles/30-sergei-overrides-oct12.css:83-83 | .catwin-slide .catwin-ribbon | — | position, right, bottom, z-index, padding, border-radius, background, color, box-shadow | — |
| 30 | src/styles/30-sergei-overrides-oct12.css:84-84 | .catwin-slide .catwin-ribbon small | — | display, color, font, letter-spacing, text-transform, margin-bottom | — |
| 30 | src/styles/30-sergei-overrides-oct12.css:85-85 | .catwin-slide .catwin-ribbon strong | — | display, font, letter-spacing | — |
| 30 | src/styles/30-sergei-overrides-oct12.css:86-86 | .catwin-slide .catwin-ribbon span | — | display, margin-top, color, font | — |
| 30 | src/styles/30-sergei-overrides-oct12.css:87-87 | .catwin-slide .catwin-ko | — | position, left, bottom, z-index, padding, border-radius, background, border, box-shadow, color | — |
| 30 | src/styles/30-sergei-overrides-oct12.css:88-88 | .catwin-slide .catwin-ko small | — | display, font, letter-spacing, text-transform, color, margin-bottom | — |
| 30 | src/styles/30-sergei-overrides-oct12.css:89-89 | .catwin-slide .catwin-ko strong | — | display, font, letter-spacing, color | — |
| 30 | src/styles/30-sergei-overrides-oct12.css:90-90 | .catwin-slide .catwin-ko span | — | display, margin-top, font, color, max-width | — |
| 31 | src/styles/31-coverBookVideoStyles.css:3-3 | #cover .cover-icon.has-book-video | — | left, top, width, height, animation, pointer-events, overflow, display, align-items, justify-content | да |
| 31 | src/styles/31-coverBookVideoStyles.css:4-4 | #cover .cover-icon .cover-book-video | — | display, width, height, max-width, object-fit, pointer-events, background, filter | — |
| 31 | src/styles/31-coverBookVideoStyles.css:5-5 | #cover .cover-icon.has-book-video | @media(prefers-reduced-motion:reduce) | animation | да |
| 32 | src/styles/32-reliability-sharpness-fix.css:3-7 | #aistEvolutionSlide .ev2-scene | — | filter, transform, transition | да |
| 32 | src/styles/32-reliability-sharpness-fix.css:8-12 | #aistEvolutionSlide.show .ev2-scene.is-active | — | filter, transform, transition | да |
| 32 | src/styles/32-reliability-sharpness-fix.css:13-17 | #aistEvolutionSlide .ev2-scene img | — | filter, image-rendering, backface-visibility | да |
| 32 | src/styles/32-reliability-sharpness-fix.css:19-19 | .pdfRestSlide .ee-reveal | — | filter | да |
| 33 | src/styles/33-instant-slide-content-fix.css:3-8 | .pdfRestSlide.ee-slide.show>.pdf-stage .ee-content | — | animation, opacity, visibility, filter | да |
| 33 | src/styles/33-instant-slide-content-fix.css:9-13 | .pdfRestSlide.ee-slide.show .ee-content .ee-reveal | — | animation, opacity, filter | да |
| 33 | src/styles/33-instant-slide-content-fix.css:14-19 | .sv29-final.show .sv29-speaker,.sv29-final.show .sv29-photo,.sv29-final.show .sv29-qr-group | — | animation, opacity, transform, filter | да |
| 34 | src/styles/34-final-scan-ready-layout.css:3-6 | .pdfRestSlide.ee-slide.show>.pdf-stage | — | opacity, filter, transform, animation, transition | да |
| 34 | src/styles/34-final-scan-ready-layout.css:7-7 | .pdfRestSlide.ee-slide.show | — | opacity, filter | да |
| 34 | src/styles/34-final-scan-ready-layout.css:9-12 | #pdfSlide28.ee-slide .sv29-thanks | — | position, left, top, z-index, max-width, color, font, letter-spacing | — |
| 34 | src/styles/34-final-scan-ready-layout.css:13-16 | #pdfSlide28.ee-slide .sv29-thanks span | — | display, background, color, -webkit-background-clip, background-clip | — |
| 34 | src/styles/34-final-scan-ready-layout.css:17-17 | #pdfSlide28.ee-slide .sv29-speaker | — | left, top, max-width | да |
| 34 | src/styles/34-final-scan-ready-layout.css:18-18 | #pdfSlide28.ee-slide .sv29-name | — | font-size, line-height | да |
| 34 | src/styles/34-final-scan-ready-layout.css:19-19 | #pdfSlide28.ee-slide .sv29-role | — | font-size, margin-top | да |
| 34 | src/styles/34-final-scan-ready-layout.css:20-20 | #pdfSlide28.ee-slide .sv29-link | — | font-size, margin-top, padding | да |
| 34 | src/styles/34-final-scan-ready-layout.css:21-24 | #pdfSlide28.ee-slide .sv29-photo | — | left, top, width, height, border-radius, overflow | да |
| 34 | src/styles/34-final-scan-ready-layout.css:25-28 | #pdfSlide28.ee-slide .sv29-photo img | — | display, width, height, aspect-ratio, object-fit, object-position | да |
| 34 | src/styles/34-final-scan-ready-layout.css:29-32 | #pdfSlide28.ee-slide .sv29-qr-group | — | position, left, right, top, width, max-width, gap | да |
| 34 | src/styles/34-final-scan-ready-layout.css:33-33 | #pdfSlide28.ee-slide .sv29-qr-link | — | padding, border-radius | да |
| 34 | src/styles/34-final-scan-ready-layout.css:34-37 | #pdfSlide28.ee-slide .sv29-qr-link img | — | width, height, max-width, image-rendering | да |
| 34 | src/styles/34-final-scan-ready-layout.css:38-38 | #pdfSlide28.ee-slide .sv29-qr-label | — | font-size, white-space | да |
| 35 | src/styles/35-catwin-final-layout-fix.css:3-3 | #pdfSlide27 .ee-content | — | position, inset, padding, height, overflow | да |
| 35 | src/styles/35-catwin-final-layout-fix.css:4-8 | #pdfSlide27 .catwin-layout | — | height, min-height, box-sizing, padding, display, grid-template-columns, gap, align-items | да |
| 35 | src/styles/35-catwin-final-layout-fix.css:9-9 | #pdfSlide27 .catwin-copy | — | align-self, justify-content, width, max-width, min-height | да |
| 35 | src/styles/35-catwin-final-layout-fix.css:10-10 | #pdfSlide27 .catwin-kicker | — | margin-bottom, padding, font-size | да |
| 35 | src/styles/35-catwin-final-layout-fix.css:11-14 | #pdfSlide27 .catwin-title | — | margin, font-size, line-height, max-width, letter-spacing, word-break | да |
| 35 | src/styles/35-catwin-final-layout-fix.css:15-15 | #pdfSlide27 .catwin-lead | — | font-size, line-height, margin, max-width | да |
| 35 | src/styles/35-catwin-final-layout-fix.css:16-16 | #pdfSlide27 .catwin-badges | — | display | да |
| 35 | src/styles/35-catwin-final-layout-fix.css:17-17 | #pdfSlide27 .catwin-note | — | padding, font-size, max-width | да |
| 35 | src/styles/35-catwin-final-layout-fix.css:18-23 | #pdfSlide27 .catwin-visual | — | position, height, max-height, align-self, overflow, border-radius, background, border | да |
| 35 | src/styles/35-catwin-final-layout-fix.css:24-24 | #pdfSlide27 .catwin-stage | — | height, min-height, max-width, overflow | да |
| 35 | src/styles/35-catwin-final-layout-fix.css:25-25 | #pdfSlide27 .catwin-battlefield | — | inset, width, height, opacity, object-fit | да |
| 35 | src/styles/35-catwin-final-layout-fix.css:26-26 | #pdfSlide27 .catwin-dragon | — | left, top, width, opacity | да |
| 35 | src/styles/35-catwin-final-layout-fix.css:27-27 | #pdfSlide27 .catwin-kitty | — | right, top, width | да |
| 35 | src/styles/35-catwin-final-layout-fix.css:28-28 | #pdfSlide27 .catwin-burst | — | right, top, width, height | да |
| 35 | src/styles/35-catwin-final-layout-fix.css:29-29 | #pdfSlide27 .catwin-ko | — | left, bottom, padding, max-width | да |
| 35 | src/styles/35-catwin-final-layout-fix.css:30-30 | #pdfSlide27 .catwin-ribbon | — | right, bottom, padding, max-width | да |
| 35 | src/styles/35-catwin-final-layout-fix.css:31-31 | #pdfSlide27 .catwin-ribbon strong,#pdfSlide27 .catwin-ko strong | — | font-size | да |
| 35 | src/styles/35-catwin-final-layout-fix.css:32-32 | #pdfSlide27 .catwin-ribbon span,#pdfSlide27 .catwin-ko span | — | font-size | да |
| 36 | src/styles/36-speaker-qr-mirror-konspektus.css:3-3 | #pdfSlide28.ee-slide.sv30-refined .ee-canvas | — | padding, background, overflow | да |
| 36 | src/styles/36-speaker-qr-mirror-konspektus.css:4-9 | #pdfSlide28.ee-slide.sv30-refined .ee-content | — | position, top, left, right, bottom, inset, width, height, min-height, max-height, padding, overflow, display, z-index | да |
| 36 | src/styles/36-speaker-qr-mirror-konspektus.css:10-13 | #pdfSlide28 .sv30-cta | — | display, grid-template-columns, gap, height, align-items | да |
| 36 | src/styles/36-speaker-qr-mirror-konspektus.css:14-14 | #pdfSlide28 .sv30-left | — | display, grid-template-columns, gap, align-items, min-width, height | — |
| 36 | src/styles/36-speaker-qr-mirror-konspektus.css:15-18 | #pdfSlide28 .sv30-photo | — | width, height, max-height, position, overflow, border-radius, background, box-shadow, border | — |
| 36 | src/styles/36-speaker-qr-mirror-konspektus.css:19-19 | #pdfSlide28 .sv30-photo img | — | display, width, height, object-fit, object-position | — |
| 36 | src/styles/36-speaker-qr-mirror-konspektus.css:20-20 | #pdfSlide28 .sv30-info | — | display, flex-direction, align-items, justify-content, gap, min-width | — |
| 36 | src/styles/36-speaker-qr-mirror-konspektus.css:21-21 | #pdfSlide28 .sv30-thanks | — | font, letter-spacing, color, margin-bottom, white-space | — |
| 36 | src/styles/36-speaker-qr-mirror-konspektus.css:22-22 | #pdfSlide28 .sv30-thanks span | — | display, margin-top, background, color, -webkit-background-clip, background-clip | — |
| 36 | src/styles/36-speaker-qr-mirror-konspektus.css:23-23 | #pdfSlide28 .sv30-name | — | font, color, letter-spacing, margin-bottom | — |
| 36 | src/styles/36-speaker-qr-mirror-konspektus.css:24-24 | #pdfSlide28 .sv30-role | — | font, color, margin-bottom | — |
| 36 | src/styles/36-speaker-qr-mirror-konspektus.css:25-25 | #pdfSlide28 .sv30-tg | — | color, text-decoration, font, white-space, pointer-events | да |
| 36 | src/styles/36-speaker-qr-mirror-konspektus.css:26-26 | #pdfSlide28 .sv30-tg:hover | — | text-decoration | — |
| 36 | src/styles/36-speaker-qr-mirror-konspektus.css:28-28 | #pdfSlide28 .sv30-qr-wrap | — | display, align-items, justify-content, flex-direction, gap, height, min-width, position, top | — |
| 36 | src/styles/36-speaker-qr-mirror-konspektus.css:29-29 | #pdfSlide28 .sv30-qr-link | — | display, background, padding, border-radius, box-shadow, position, z-index, pointer-events | — |
| 36 | src/styles/36-speaker-qr-mirror-konspektus.css:30-30 | #pdfSlide28 .sv30-qr-link img | — | width, height, image-rendering, display, object-fit | — |
| 36 | src/styles/36-speaker-qr-mirror-konspektus.css:31-31 | #pdfSlide28 .sv30-qr-under | — | font-size, letter-spacing, color, text-align | — |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:3-3 | .pdfRestSlide.ee-slide.story-tech:not(#pdfSlide8) .ee-canvas | — | background, overflow, border, border-radius, padding | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:4-9 | .pdfRestSlide.ee-slide.story-tech:not(#pdfSlide8) .ee-header | — | display, visibility, opacity, filter, position, top, left, right, width, max-width, z-index, margin, pointer-events, animation, transform | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:10-16 | .pdfRestSlide.ee-slide.story-tech:not(#pdfSlide8) .ee-header h2 | — | display, opacity, visibility, filter, position, max-width, margin, padding, font, letter-spacing, color, text-wrap, background, text-shadow | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:17-17 | .pdfRestSlide.ee-slide.story-tech:not(#pdfSlide8) .ee-eyebrow | — | display | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:18-20 | .pdfRestSlide.ee-slide.story-tech:not(#pdfSlide8) .ee-header::before | — | content, position, left, top, width, height, border-radius, background | — |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:21-27 | .pdfRestSlide.ee-slide.story-tech:not(#pdfSlide8) .ee-content | — | position, top, left, right, bottom, width, height, min-height, max-width, overflow, margin, padding, opacity, visibility, filter, transform, animation | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:29-31 | .pdfRestSlide.story-tech.show.story-speed .ee-header h2, .pdfRestSlide.story-tech.show.story-roi .ee-header h2, .pdfRestSlide.story-tech.show.story-cta .ee-header h2 | — | animation | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:32-34 | .pdfRestSlide.story-tech.show.story-pair .ee-header h2, .pdfRestSlide.story-tech.show.story-record .ee-header h2, .pdfRestSlide.story-tech.show.story-boundary .ee-header h2 | — | animation | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:35-37 | .pdfRestSlide.story-tech.show.story-cards .ee-header h2, .pdfRestSlide.story-tech.show.story-prd .ee-header h2, .pdfRestSlide.story-tech.show.story-proof .ee-header h2 | — | animation | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:38-40 | .pdfRestSlide.story-tech.show.story-layers .ee-header h2, .pdfRestSlide.story-tech.show.story-flow .ee-header h2, .pdfRestSlide.story-tech.show.story-stack .ee-header h2 | — | animation | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:41-43 | .pdfRestSlide.story-tech.show.story-terminal .ee-header h2, .pdfRestSlide.story-tech.show.story-code .ee-header h2, .pdfRestSlide.story-tech.show.story-tools .ee-header h2 | — | animation | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:44-47 | .pdfRestSlide.story-tech.show.story-security .ee-header h2, .pdfRestSlide.story-tech.show.story-mirror .ee-header h2, .pdfRestSlide.story-tech.show.story-react .ee-header h2, .pdfRestSlide.story-tech.show.story-orchestration .ee-header h2 | — | animation | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:48-48 | @keyframes stHeadlineRise | — | opacity, transform, filter | — |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:49-49 | @keyframes stHeadlineWipe | — | clip-path | — |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:50-50 | @keyframes stHeadlineFade | — | opacity, filter | — |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:51-51 | @keyframes stHeadlineTrack | — | letter-spacing, opacity, transform | — |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:52-52 | @keyframes stHeadlineTerminal | — | clip-path | — |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:53-53 | @keyframes stHeadlineLeft | — | opacity, transform | — |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:55-55 | .pdfRestSlide.story-tech.show .ee-content .ee-reveal | — | opacity, transform, filter | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:56-63 | .pdfRestSlide.story-tech.show.story-cards .ee-card, .pdfRestSlide.story-tech.show.story-prd .ee-card, .pdfRestSlide.story-tech.show.story-roi .ee-card, .pdfRestSlide.story-tech.show.story-tools .ee-block, .pdfRestSlide.story-tech.show.story-layers .ee-layer, .pdfRestSlide.story-tech.show.story-flow .ee-pipe-node | — | animation | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:64-69 | .pdfRestSlide.story-tech.show.story-cards .ee-card:nth-child(2), .pdfRestSlide.story-tech.show.story-prd .ee-card:nth-child(2), .pdfRestSlide.story-tech.show.story-roi .ee-card:nth-child(2), .pdfRestSlide.story-tech.show.story-tools .ee-block:nth-child(2), .pdfRestSlide.story-tech.show.story-layers .ee-layer:nth-child(2), .pdfRestSlide.story-tech.show.story-flow .ee-pipe-node:nth-child(2) | — | animation-delay | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:70-74 | .pdfRestSlide.story-tech.show.story-cards .ee-card:nth-child(3), .pdfRestSlide.story-tech.show.story-prd .ee-card:nth-child(3), .pdfRestSlide.story-tech.show.story-roi .ee-card:nth-child(3), .pdfRestSlide.story-tech.show.story-tools .ee-block:nth-child(3), .pdfRestSlide.story-tech.show.story-flow .ee-pipe-node:nth-child(3) | — | animation-delay | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:75-75 | @keyframes stCardArrive | — | opacity, transform | — |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:76-76 | .pdfRestSlide.story-tech.show.story-pair .ee-trap:first-child | — | animation | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:77-77 | .pdfRestSlide.story-tech.show.story-pair .ee-trap:nth-child(2) | — | animation | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:78-78 | @keyframes stPanelLeft | — | opacity, transform | — |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:79-79 | @keyframes stPanelRight | — | opacity, transform | — |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:80-80 | .pdfRestSlide.story-tech.show.story-record .ee-adr-table | — | animation | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:81-81 | .pdfRestSlide.story-tech.show.story-record .ee-adr-detail | — | animation | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:82-82 | .pdfRestSlide.story-tech.show.story-security .ee-pii-item | — | animation | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:83-83 | .pdfRestSlide.story-tech.show.story-security .ee-pii-item:nth-child(3) | — | animation-delay | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:84-84 | .pdfRestSlide.story-tech.show.story-security .ee-pii-item:nth-child(7) | — | animation-delay | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:85-85 | .pdfRestSlide.story-tech.show.story-security .ee-pii-item:nth-child(11) | — | animation-delay | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:86-86 | .pdfRestSlide.story-tech.show.story-mirror .ee-content>div>div:nth-child(2) | — | animation | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:87-87 | .pdfRestSlide.story-tech.show.story-terminal .ee-tree | — | animation | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:88-88 | .pdfRestSlide.story-tech.show.story-react .ee-react-loop | — | animation | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:89-89 | .pdfRestSlide.story-tech.show.story-orchestration .ee-workers | — | animation | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:90-90 | .pdfRestSlide.story-tech.show.story-proof .ee-ragui | — | animation | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:91-91 | .pdfRestSlide.story-tech.show.story-observability .ee-block | — | animation | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:93-93 | .story-speed .ee-discovery | — | height, max-height, padding | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:94-94 | .story-speed .ee-speedometer | — | height | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:95-95 | .story-speed .ee-speedo-card | — | max-width | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:96-96 | .story-speed .ee-speedo-center b | — | font-size | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:97-97 | .story-cards.story-new .ee-three | — | display, grid-template-columns, gap, margin | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:98-98 | .story-cards.story-new .ee-three .ee-card | — | min-height, padding, border-radius, background | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:99-99 | .story-cards.story-new .ee-three .ee-copy | — | font-size, line-height | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:100-100 | .story-record .ee-adr-layout | — | display | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:101-101 | .story-record:not(.story-new) .ee-adr-table | — | max-width, width, min-height | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:102-102 | .story-record.story-new .story-focus-adr | — | display, grid-template-columns, gap, align-items, height | — |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:103-103 | .story-record.story-new .ee-adr-detail | — | height, min-height, padding, border-radius | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:104-104 | .story-record.story-new .ee-adr-bot | — | display, flex-direction, gap, max-width, margin | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:105-105 | .story-record.story-new .ee-adr-bot>div | — | font-size, line-height, padding | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:106-106 | .story-layers .ee-layers | — | display, grid-template-columns, align-content, gap, height | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:107-107 | .story-layers .ee-layer | — | padding, min-height, max-height, border-radius | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:108-108 | .story-layers .ee-layer-name | — | font-size, margin-bottom | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:109-109 | .story-layers .ee-layer-nodes | — | font-size, line-height, gap | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:110-110 | .story-layers.story-new:has(.ee-layer:only-child) .ee-layers | — | grid-template-columns, justify-content | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:111-111 | .story-layers.story-new:has(.ee-layer:only-child) .ee-layer | — | min-height, padding | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:112-112 | .story-stack .ee-stack-layout | — | display, grid-template-columns, justify-items | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:113-113 | .story-stack .ee-stack-left | — | width, max-width | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:114-114 | .story-react .story-single-react | — | display, justify-content, align-items | — |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:115-115 | .story-react .ee-react | — | width, min-height, padding | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:116-116 | .story-flow .ee-pipe | — | display, grid-template-columns, gap, align-content | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:117-117 | .story-flow .ee-pipe-node | — | min-height, height, max-width, padding | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:118-118 | .story-flow.story-new .ee-pipe | — | grid-template-columns, max-width, margin | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:119-119 | .story-flow.story-new .ee-pipe-tag | — | max-width, margin | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:120-120 | .story-terminal .ee-explore-layout | — | display, justify-content | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:121-121 | .story-terminal .ee-explorer | — | width, min-height | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:122-122 | .story-orchestration .story-orchestration-main | — | display, align-items, justify-content | — |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:123-123 | .story-orchestration .ee-orchestration | — | width, min-height | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:124-124 | .story-code .ee-sandbox | — | display, justify-content | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:125-125 | .story-code .ee-isolation | — | width, min-height | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:126-126 | .story-tools .story-tool-cards | — | display, align-items, justify-content | — |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:127-127 | .story-tools .ee-toolstack | — | display, grid-template-columns, gap, width, max-width | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:128-128 | .story-tools .ee-toolstack .ee-block | — | min-height, padding | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:129-129 | .story-proof .ee-observe | — | display, justify-content | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:130-130 | .story-proof .ee-ragui | — | width, min-height | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:131-131 | .story-observability .story-observe-main | — | display, align-items, justify-content | — |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:132-132 | .story-observability .ee-observe-bottom | — | display, grid-template-columns, gap, max-width, width | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:133-133 | .story-observability .ee-observe-bottom .ee-block | — | min-height, padding | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:135-135 | .story-tech.kx-section .ee-header | — | top, left | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:136-136 | .story-tech.kx-section .ee-header h2 | — | font-size | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:137-137 | .story-tech.kx-section .ee-content | — | top, left, right, bottom | да |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:139-139 | .story-tech .ee-content * | — | box-sizing | — |
| 37 | src/styles/37-storytelling-chapter-2026-10-13.css:140-140 | .story-tech.show .ee-header h2,.story-tech.show .ee-content .ee-reveal,.story-tech.show .ee-pipe-node,.story-tech.show .ee-card | @media(prefers-reduced-motion:reduce) | animation, opacity, transform | да |
| 38 | src/styles/38-storytelling-layout-corrections.css:3-8 | .pdfRestSlide.story-tech.story-flow .ee-pipe | — | display, grid-template-columns, grid-template-rows, grid-auto-rows, height, min-height, max-height, margin, width, max-width, gap | да |
| 38 | src/styles/38-storytelling-layout-corrections.css:9-14 | .pdfRestSlide.story-tech.story-flow .ee-pipe .ee-pipe-node | — | grid-column, grid-row, flex, position, min-height, height, max-height, margin, padding, transform, border-radius | да |
| 38 | src/styles/38-storytelling-layout-corrections.css:15-17 | .pdfRestSlide.story-tech.story-flow .ee-pipe .ee-pipe-node .ee-pipe-label | — | font-size, line-height, margin-bottom | да |
| 38 | src/styles/38-storytelling-layout-corrections.css:18-20 | .pdfRestSlide.story-tech.story-flow .ee-pipe .ee-pipe-node .ee-pipe-copy | — | font-size, line-height | да |
| 38 | src/styles/38-storytelling-layout-corrections.css:21-24 | .pdfRestSlide.story-tech.story-flow.story-new .ee-pipe | — | grid-template-columns, max-width, margin | да |
| 38 | src/styles/38-storytelling-layout-corrections.css:25-25 | .pdfRestSlide.story-tech.story-flow.story-new .ee-pipe .ee-pipe-node | — | min-height | да |
| 38 | src/styles/38-storytelling-layout-corrections.css:27-32 | .pdfRestSlide.story-tech.story-layers .ee-layers | — | display, grid-template-columns, grid-template-rows, grid-auto-flow, grid-auto-rows, height, max-height, margin, gap, align-content | да |
| 38 | src/styles/38-storytelling-layout-corrections.css:33-40 | .pdfRestSlide.story-tech.story-layers .ee-layer | — | display, flex-direction, justify-content, align-items, gap, grid-column, grid-row, min-height, height, max-height, padding, background, border, border-radius | да |
| 38 | src/styles/38-storytelling-layout-corrections.css:41-43 | .pdfRestSlide.story-tech.story-layers .ee-layer-name | — | font-size, line-height, margin | да |
| 38 | src/styles/38-storytelling-layout-corrections.css:44-47 | .pdfRestSlide.story-tech.story-layers .ee-layer-nodes | — | display, flex, align-items, justify-content, gap, min-width, font-size | да |
| 38 | src/styles/38-storytelling-layout-corrections.css:48-54 | .pdfRestSlide.story-tech.story-layers .ee-layer-node, .pdfRestSlide.story-tech.story-layers .ee-layer:nth-child(even) .ee-layer-node | — | font-size, line-height, flex, min-width, min-height, height, padding, border-radius, background, border | да |
| 38 | src/styles/38-storytelling-layout-corrections.css:55-55 | .pdfRestSlide.story-tech.story-layers .ee-layer-node small | — | display, font-size, line-height, margin-top | да |
| 38 | src/styles/38-storytelling-layout-corrections.css:56-58 | .pdfRestSlide.story-tech.story-layers.story-new:has(.ee-layer:only-child) .ee-layers | — | grid-template-columns, justify-content | да |
| 38 | src/styles/38-storytelling-layout-corrections.css:59-61 | .pdfRestSlide.story-tech.story-layers.story-new:has(.ee-layer:only-child) .ee-layer | — | min-height, padding | да |
| 38 | src/styles/38-storytelling-layout-corrections.css:63-66 | .pdfRestSlide.story-tech.story-speed .ee-discovery | — | width, margin, padding, min-height | да |
| 38 | src/styles/38-storytelling-layout-corrections.css:67-67 | .pdfRestSlide.story-tech.story-speed .ee-speedometer | — | height | да |
| 38 | src/styles/38-storytelling-layout-corrections.css:68-68 | .pdfRestSlide.story-tech.story-speed .ee-speedo-card | — | grid-template-columns, gap | да |
| 38 | src/styles/38-storytelling-layout-corrections.css:69-69 | .pdfRestSlide.story-tech.story-speed .ee-speedo-center | — | top | да |
| 38 | src/styles/38-storytelling-layout-corrections.css:71-73 | .pdfRestSlide.story-tech.story-record.story-new .story-focus-adr | — | margin, grid-template-columns | да |
| 38 | src/styles/38-storytelling-layout-corrections.css:74-74 | .pdfRestSlide.story-tech.story-record.story-new .ee-adr-detail | — | height, min-height | да |
| 38 | src/styles/38-storytelling-layout-corrections.css:75-75 | .pdfRestSlide.story-tech.story-record.story-new .ee-adr-bot | — | max-height | да |
| 38 | src/styles/38-storytelling-layout-corrections.css:76-76 | .pdfRestSlide.story-tech.story-record.story-new .ee-adr-bot >div | — | font-size, line-height | да |
| 38 | src/styles/38-storytelling-layout-corrections.css:78-80 | .pdfRestSlide.story-tech.story-record .ee-header h2, .pdfRestSlide.story-tech.story-react .ee-header h2, .pdfRestSlide.story-tech.story-proof .ee-header h2 | — | color | да |
| 38 | src/styles/38-storytelling-layout-corrections.css:81-81 | .pdfRestSlide.story-tech.story-cta .ee-header h2 | — | font-size | да |
| 39 | src/styles/39-storytelling-quality-pass.css:3-7 | .pdfRestSlide.story-tech.story-layers .ee-layer-node, .pdfRestSlide.story-tech.story-layers .ee-layer:nth-child(even) .ee-layer-node | — | display, flex-direction, align-items, justify-content, text-align, word-break, overflow-wrap | да |
| 39 | src/styles/39-storytelling-quality-pass.css:8-11 | .pdfRestSlide.story-tech.story-layers .ee-layer-node small | — | display, align-self, max-width, text-align, font-size, line-height | да |
| 39 | src/styles/39-storytelling-quality-pass.css:13-13 | .story-tech.story-flow .ee-pipe .ee-pipe-node:not(:last-child)::after | — | display | да |
| 39 | src/styles/39-storytelling-quality-pass.css:15-15 | .story-tech.story-stack .ee-block | — | margin-bottom | да |
| 40 | src/styles/40-storytelling-fix-tools-grid.css:2-2 | .pdfRestSlide.story-tech.story-tools .story-tool-cards | — | height, max-height, align-items | да |
| 40 | src/styles/40-storytelling-fix-tools-grid.css:3-8 | .pdfRestSlide.story-tech.story-tools .ee-toolstack | — | display, grid-template-columns, grid-template-rows, grid-auto-rows, height, min-height, max-height, align-items, margin, padding, gap | да |
| 40 | src/styles/40-storytelling-fix-tools-grid.css:9-13 | .pdfRestSlide.story-tech.story-tools .ee-toolstack .ee-block | — | height, min-height, max-height, margin, padding, border, background, border-radius | да |
| 41 | src/styles/41-storytelling-motion-final.css:4-7 | @keyframes storyTitleUp | — | clip-path, translate | — |
| 41 | src/styles/41-storytelling-motion-final.css:8-11 | @keyframes storyTitleWipe | — | clip-path, translate | — |
| 41 | src/styles/41-storytelling-motion-final.css:12-15 | @keyframes storyTitleRight | — | clip-path, translate | — |
| 41 | src/styles/41-storytelling-motion-final.css:16-19 | @keyframes storyTitleScan | — | clip-path | — |
| 41 | src/styles/41-storytelling-motion-final.css:20-23 | @keyframes storyTitleReveal | — | clip-path, translate | — |
| 41 | src/styles/41-storytelling-motion-final.css:24-27 | @keyframes storyContentRise | — | clip-path, translate | — |
| 41 | src/styles/41-storytelling-motion-final.css:28-31 | @keyframes storyContentFromLeft | — | clip-path, translate | — |
| 41 | src/styles/41-storytelling-motion-final.css:32-35 | @keyframes storyContentFromRight | — | clip-path, translate | — |
| 41 | src/styles/41-storytelling-motion-final.css:36-38 | .pdfRestSlide.ee-slide.story-tech.show:is(.story-speed,.story-roi,.story-cta) .ee-header h2 | — | animation | да |
| 41 | src/styles/41-storytelling-motion-final.css:39-41 | .pdfRestSlide.ee-slide.story-tech.show:is(.story-pair,.story-record,.story-boundary) .ee-header h2 | — | animation | да |
| 41 | src/styles/41-storytelling-motion-final.css:42-44 | .pdfRestSlide.ee-slide.story-tech.show:is(.story-cards,.story-prd,.story-proof) .ee-header h2 | — | animation | да |
| 41 | src/styles/41-storytelling-motion-final.css:45-47 | .pdfRestSlide.ee-slide.story-tech.show:is(.story-layers,.story-flow,.story-stack) .ee-header h2 | — | animation | да |
| 41 | src/styles/41-storytelling-motion-final.css:48-50 | .pdfRestSlide.ee-slide.story-tech.show:is(.story-terminal,.story-code,.story-tools) .ee-header h2 | — | animation | да |
| 41 | src/styles/41-storytelling-motion-final.css:51-53 | .pdfRestSlide.ee-slide.story-tech.show:is(.story-security,.story-mirror,.story-react,.story-orchestration,.story-observability) .ee-header h2 | — | animation | да |
| 41 | src/styles/41-storytelling-motion-final.css:55-60 | .pdfRestSlide.ee-slide.story-tech.show:is(.story-cards,.story-prd,.story-roi) .ee-card, .pdfRestSlide.ee-slide.story-tech.show.story-layers .ee-layer, .pdfRestSlide.ee-slide.story-tech.show.story-flow .ee-pipe-node, .pdfRestSlide.ee-slide.story-tech.show.story-tools .ee-block | — | animation | да |
| 41 | src/styles/41-storytelling-motion-final.css:61-64 | .pdfRestSlide.ee-slide.story-tech.show:is(.story-cards,.story-prd,.story-roi) .ee-card:nth-child(2), .pdfRestSlide.ee-slide.story-tech.show.story-layers .ee-layer:nth-child(2), .pdfRestSlide.ee-slide.story-tech.show.story-flow .ee-pipe-node:nth-child(2), .pdfRestSlide.ee-slide.story-tech.show.story-tools .ee-block:nth-child(2) | — | animation-delay | да |
| 41 | src/styles/41-storytelling-motion-final.css:65-67 | .pdfRestSlide.ee-slide.story-tech.show:is(.story-cards,.story-prd,.story-roi) .ee-card:nth-child(3), .pdfRestSlide.ee-slide.story-tech.show.story-flow .ee-pipe-node:nth-child(3), .pdfRestSlide.ee-slide.story-tech.show.story-tools .ee-block:nth-child(3) | — | animation-delay | да |
| 41 | src/styles/41-storytelling-motion-final.css:68-72 | .pdfRestSlide.ee-slide.story-tech.show.story-pair .ee-trap:first-child, .pdfRestSlide.ee-slide.story-tech.show.story-record .ee-adr-table, .pdfRestSlide.ee-slide.story-tech.show.story-terminal .ee-explorer | — | animation | да |
| 41 | src/styles/41-storytelling-motion-final.css:73-77 | .pdfRestSlide.ee-slide.story-tech.show.story-pair .ee-trap:nth-child(2), .pdfRestSlide.ee-slide.story-tech.show.story-record .ee-adr-detail, .pdfRestSlide.ee-slide.story-tech.show.story-mirror .ee-content >div>div:nth-child(2) | — | animation | да |
| 41 | src/styles/41-storytelling-motion-final.css:78-82 | .pdfRestSlide.ee-slide.story-tech.show.story-proof .ee-ragui, .pdfRestSlide.ee-slide.story-tech.show.story-security .ee-pii-flow, .pdfRestSlide.ee-slide.story-tech.show.story-code .ee-isolation | — | animation | да |
| 41 | src/styles/41-storytelling-motion-final.css:83-87 | .pdfRestSlide.ee-slide.story-tech.show.story-observability .ee-block, .pdfRestSlide.ee-slide.story-tech.show.story-react .ee-react, .pdfRestSlide.ee-slide.story-tech.show.story-orchestration .ee-orchestration | — | animation | да |
| 41 | src/styles/41-storytelling-motion-final.css:89-94 | .pdfRestSlide.ee-slide.story-tech.show .ee-header h2,  .pdfRestSlide.ee-slide.story-tech.show .ee-content .ee-reveal,  .pdfRestSlide.ee-slide.story-tech.show .ee-content .ee-card,  .pdfRestSlide.ee-slide.story-tech.show .ee-content .ee-block | @media(prefers-reduced-motion:reduce) | animation, clip-path, translate | да |
| 42 | src/styles/42-debug-panel.css:1-1 | #debugGlow | — | position, left, top, z-index, background, color, padding, border-radius, font, min-width, box-shadow | — |
| 42 | src/styles/42-debug-panel.css:1-1 | #debugGlow button | — | font | — |
| 42 | src/styles/42-debug-panel.css:1-1 | #glowStatus | — | margin, white-space | — |
| 42 | src/styles/42-debug-panel.css:3-8 | #pdfSlide8 #v8FighterIntro | — | position, inset, width, height, display, border, background, z-index, pointer-events, opacity, visibility, filter, transition | — |
| 42 | src/styles/42-debug-panel.css:9-12 | #pdfSlide8.show.v8-intro-2 #v8FighterIntro | — | visibility, opacity, filter, transition | — |
| 42 | src/styles/42-debug-panel.css:15-15 | #pdfSlide8:not(.v8-intro-2) #v8FighterIntro | — | visibility, opacity, pointer-events, transition | да |
| 43 | src/styles/43-slide-visual-polish.css:2-2 | #pdfSlide9 .ee-speedometer | — | margin-bottom | да |
| 43 | src/styles/43-slide-visual-polish.css:3-3 | #pdfSlide9 .ee-speedo-center | — | top, transform | да |
| 43 | src/styles/43-slide-visual-polish.css:4-4 | #pdfSlide9 .ee-speedo-needle line | — | stroke-width, filter | — |
| 43 | src/styles/43-slide-visual-polish.css:5-5 | #pdfSlide9.show .ee-speedo-needle | — | animation | да |
| 43 | src/styles/43-slide-visual-polish.css:6-6 | @keyframes semenovNeedleSweep | — | transform | — |
| 43 | src/styles/43-slide-visual-polish.css:7-7 | #pdfSlide26 .kx-cta | — | grid-template-columns, gap | да |
| 43 | src/styles/43-slide-visual-polish.css:8-8 | #pdfSlide26 .practice-macbook | — | width, align-self, filter | — |
| 43 | src/styles/43-slide-visual-polish.css:9-9 | #pdfSlide26 .practice-macbook-lid | — | width, margin, padding, border, border-radius, background, position, box-shadow | — |
| 43 | src/styles/43-slide-visual-polish.css:10-10 | #pdfSlide26 .practice-macbook-screen | — | aspect-ratio, background, border-radius, overflow, border | — |
| 43 | src/styles/43-slide-visual-polish.css:11-11 | #pdfSlide26 .practice-macbook-screen img | — | display, width, height, object-fit | — |
| 43 | src/styles/43-slide-visual-polish.css:12-12 | #pdfSlide26 .practice-macbook-camera | — | position, top, left, width, height, background, border, border-radius | — |
| 43 | src/styles/43-slide-visual-polish.css:13-13 | #pdfSlide26 .practice-macbook-brand | — | position, bottom, left, width, text-align, font, color, letter-spacing | — |
| 43 | src/styles/43-slide-visual-polish.css:14-14 | #pdfSlide26 .practice-macbook-base | — | height, position, border-radius, background, box-shadow | — |
| 43 | src/styles/43-slide-visual-polish.css:15-15 | #pdfSlide26 .practice-macbook-notch | — | position, top, left, width, height, border-radius, background | — |
| 43 | src/styles/43-slide-visual-polish.css:16-16 | #pdfSlide26 .practice-actions | — | display, flex-direction, align-items, gap | — |
| 43 | src/styles/43-slide-visual-polish.css:17-17 | #pdfSlide26 .kx-large | — | font-size, line-height | да |
| 43 | src/styles/43-slide-visual-polish.css:18-18 | #pdfSlide26 .kx-cta-text | — | font-size, line-height, margin | да |
| 43 | src/styles/43-slide-visual-polish.css:19-19 | #pdfSlide26 .kx-cta .kx-link | — | font-size, margin-top | да |
| 43 | src/styles/43-slide-visual-polish.css:20-20 | #pdfSlide26 .kx-qr-wrap | — | align-items, gap | да |
| 43 | src/styles/43-slide-visual-polish.css:21-21 | #pdfSlide26 .kx-qr-link | — | padding, border-radius | да |
| 43 | src/styles/43-slide-visual-polish.css:22-22 | #pdfSlide26 .kx-qr-link img | — | width, height | да |
| 43 | src/styles/43-slide-visual-polish.css:23-23 | #pdfSlide26 .kx-qr-under | — | font-size | да |
| 43 | src/styles/43-slide-visual-polish.css:24-24 | #pdfSlide28 .qr-scan-corners | — | position, inset, pointer-events, animation | — |
| 43 | src/styles/43-slide-visual-polish.css:25-25 | #pdfSlide28 .qr-scan-corners i | — | position, width, height, border-color, border-style, border-width, filter | — |
| 43 | src/styles/43-slide-visual-polish.css:26-26 | #pdfSlide28 .scan-tl | — | top, left, border-top-width, border-left-width, border-radius | да |
| 43 | src/styles/43-slide-visual-polish.css:27-27 | #pdfSlide28 .scan-tr | — | top, right, border-top-width, border-right-width, border-radius | да |
| 43 | src/styles/43-slide-visual-polish.css:28-28 | #pdfSlide28 .scan-bl | — | bottom, left, border-bottom-width, border-left-width, border-radius | да |
| 43 | src/styles/43-slide-visual-polish.css:29-29 | #pdfSlide28 .scan-br | — | bottom, right, border-bottom-width, border-right-width, border-radius | да |
| 43 | src/styles/43-slide-visual-polish.css:30-30 | @keyframes semenovQrScanFloat | — | transform | — |
| 43 | src/styles/43-slide-visual-polish.css:31-31 | #pdfSlide9.show .ee-speedo-needle | @media(prefers-reduced-motion:reduce) | animation, transform | да |
| 43 | src/styles/43-slide-visual-polish.css:31-31 | #pdfSlide28 .qr-scan-corners | @media(prefers-reduced-motion:reduce) | animation | — |

## Повторные точные селекторы в одном условном контексте

- `.glow` (без условия): src/styles/01-base-global.css:1-1 [position, overflow, z-index, pointer-events, left, top, width, height, bottom, background, background-size, background-position, filter, opacity, animation, transition] → src/styles/02-glow-position.css:1-1 [left, top, bottom, width, height, background, filter]
- `.glow.typing` (без условия): src/styles/01-base-global.css:1-1 [filter, transition] → src/styles/02-glow-position.css:1-1 [filter]
- `.glow:before` (без условия): src/styles/01-base-global.css:1-1 [content, position, left, bottom, width, height, border-radius, background, filter, opacity, transition] → src/styles/03-glow-hide-pseudo.css:1-1 [display]
- `.glow:after` (без условия): src/styles/01-base-global.css:1-1 [content, position, left, bottom, width, height, border-radius, background, filter, opacity, animation] → src/styles/03-glow-hide-pseudo.css:1-1 [display]
- `.glow.boost` (без условия): src/styles/01-base-global.css:1-1 [opacity, filter, transform, transform-origin, transition] → src/styles/02-glow-position.css:1-1 [filter]
- `50%` (без условия): src/styles/01-base-global.css:1-1 [background-position] → src/styles/01-base-global.css:1-1 [background-position]
- `.glow.fade` (без условия): src/styles/01-base-global.css:1-1 [opacity, filter, transition] → src/styles/02-glow-position.css:1-1 [opacity, filter]
- `#figmaSlide6.manual .s6-head` (без условия): src/styles/01-base-global.css:7-7 [opacity, transform, filter, transition] → src/styles/07-cover-style.css:18-18 [opacity, transform, filter, transition] → src/styles/09-coauthor-transition-style.css:13-13 [opacity, transform, filter, transition] → src/styles/10-figma-slide2-style.css:76-76 [opacity, transform, filter, transition] → src/styles/11-figma-slides34-style.css:124-124 [opacity, transform, filter, transition]
- `#figmaSlide6.manual .s6-range` (без условия): src/styles/01-base-global.css:7-7 [opacity, transform, filter, transition] → src/styles/01-base-global.css:17-17 [min-width, text-align] → src/styles/07-cover-style.css:18-18 [opacity, transform, filter, transition] → src/styles/07-cover-style.css:28-28 [min-width, text-align] → src/styles/09-coauthor-transition-style.css:13-13 [opacity, transform, filter, transition] → src/styles/09-coauthor-transition-style.css:23-23 [min-width, text-align] → src/styles/10-figma-slide2-style.css:76-76 [opacity, transform, filter, transition] → src/styles/10-figma-slide2-style.css:86-86 [min-width, text-align] → src/styles/11-figma-slides34-style.css:124-124 [opacity, transform, filter, transition] → src/styles/11-figma-slides34-style.css:134-134 [min-width, text-align]
- `#figmaSlide6.manual .s6-start` (без условия): src/styles/01-base-global.css:7-7 [opacity, transform, filter, transition] → src/styles/07-cover-style.css:18-18 [opacity, transform, filter, transition] → src/styles/09-coauthor-transition-style.css:13-13 [opacity, transform, filter, transition] → src/styles/10-figma-slide2-style.css:76-76 [opacity, transform, filter, transition] → src/styles/11-figma-slides34-style.css:124-124 [opacity, transform, filter, transition]
- `#figmaSlide6.manual .s6-era` (без условия): src/styles/01-base-global.css:8-8 [opacity, transition] → src/styles/07-cover-style.css:19-19 [opacity, transition] → src/styles/09-coauthor-transition-style.css:14-14 [opacity, transition] → src/styles/10-figma-slide2-style.css:77-77 [opacity, transition] → src/styles/11-figma-slides34-style.css:125-125 [opacity, transition]
- `#figmaSlide6.manual .s6-era.active` (без условия): src/styles/01-base-global.css:9-9 [opacity, color, text-shadow] → src/styles/07-cover-style.css:20-20 [opacity, color, text-shadow] → src/styles/09-coauthor-transition-style.css:15-15 [opacity, color, text-shadow] → src/styles/10-figma-slide2-style.css:78-78 [opacity, color, text-shadow] → src/styles/11-figma-slides34-style.css:126-126 [opacity, color, text-shadow]
- `#figmaSlide6.manual .s6-track` (без условия): src/styles/01-base-global.css:10-10 [transform, transition] → src/styles/07-cover-style.css:21-21 [transform, transition] → src/styles/09-coauthor-transition-style.css:16-16 [transform, transition] → src/styles/10-figma-slide2-style.css:79-79 [transform, transition] → src/styles/11-figma-slides34-style.css:127-127 [transform, transition]
- `#figmaSlide6.manual .s6-line-fill` (без условия): src/styles/01-base-global.css:11-11 [transform, transition] → src/styles/07-cover-style.css:22-22 [transform, transition] → src/styles/09-coauthor-transition-style.css:17-17 [transform, transition] → src/styles/10-figma-slide2-style.css:80-80 [transform, transition] → src/styles/11-figma-slides34-style.css:128-128 [transform, transition]
- `#figmaSlide6.manual .s6-runner` (без условия): src/styles/01-base-global.css:12-12 [opacity, transform, transition] → src/styles/07-cover-style.css:23-23 [opacity, transform, transition] → src/styles/09-coauthor-transition-style.css:18-18 [opacity, transform, transition] → src/styles/10-figma-slide2-style.css:81-81 [opacity, transform, transition] → src/styles/11-figma-slides34-style.css:129-129 [opacity, transform, transition]
- `#figmaSlide6.manual .s6-node.revealed` (без условия): src/styles/01-base-global.css:13-13 [opacity, transform, filter, transition] → src/styles/07-cover-style.css:24-24 [opacity, transform, filter, transition] → src/styles/09-coauthor-transition-style.css:19-19 [opacity, transform, filter, transition] → src/styles/10-figma-slide2-style.css:82-82 [opacity, transform, filter, transition] → src/styles/11-figma-slides34-style.css:130-130 [opacity, transform, filter, transition]
- `#figmaSlide6.manual .s6-node.active .s6-dot` (без условия): src/styles/01-base-global.css:14-14 [background, box-shadow] → src/styles/07-cover-style.css:25-25 [background, box-shadow] → src/styles/09-coauthor-transition-style.css:20-20 [background, box-shadow] → src/styles/10-figma-slide2-style.css:83-83 [background, box-shadow] → src/styles/11-figma-slides34-style.css:131-131 [background, box-shadow]
- `#figmaSlide6.manual .s6-node.active .s6-card` (без условия): src/styles/01-base-global.css:15-15 [background, box-shadow] → src/styles/07-cover-style.css:26-26 [background, box-shadow] → src/styles/09-coauthor-transition-style.css:21-21 [background, box-shadow] → src/styles/10-figma-slide2-style.css:84-84 [background, box-shadow] → src/styles/11-figma-slides34-style.css:132-132 [background, box-shadow]
- `#figmaSlide6.manual .s6-final.visible` (без условия): src/styles/01-base-global.css:16-16 [opacity, transform, transition] → src/styles/07-cover-style.css:27-27 [opacity, transform, transition] → src/styles/09-coauthor-transition-style.css:22-22 [opacity, transform, transition] → src/styles/10-figma-slide2-style.css:85-85 [opacity, transform, transition] → src/styles/11-figma-slides34-style.css:133-133 [opacity, transform, transition]
- `#figmaSlide7` (без условия): src/styles/01-base-global.css:22-22 [position, inset, width, height, z-index, background, opacity, visibility, pointer-events, transform, filter, transition, overflow, font-family, color] → src/styles/12-slide7-simple-152-896.css:3-3 [background]
- `.glow-svg` (без условия): src/styles/02-glow-position.css:1-1 [width, height, display, overflow] → src/styles/04-glow-inactive.css:1-1 [position, z-index] → src/styles/05-glow-svg.css:1-1 [opacity, transition]
- `.glow.typing .glow-svg` (без условия): src/styles/05-glow-svg.css:1-1 [opacity] → src/styles/06-glow-strength.css:1-1 [opacity]
- `.glow.boost .glow-svg` (без условия): src/styles/05-glow-svg.css:1-1 [opacity] → src/styles/06-glow-strength.css:1-1 [opacity]
- `#figmaSlide2 .s2-glow` (без условия): src/styles/10-figma-slide2-style.css:5-5 [position, left, right, bottom, height, background, filter, opacity, pointer-events] → src/styles/10-figma-slide2-style.css:41-41 [z-index] → src/styles/10-figma-slide2-style.css:74-74 [display]
- `#figmaSlide2 .s2-grid` (без условия): src/styles/10-figma-slide2-style.css:6-6 [position, left, top, width, height] → src/styles/10-figma-slide2-style.css:41-41 [z-index]
- `#figmaSlide2 .s2-card` (без условия): src/styles/10-figma-slide2-style.css:7-7 [position, border-radius, background, overflow, border, box-shadow] → src/styles/11-figma-slides34-style.css:3-3 [transition]
- `#figmaSlide2 .s2-russia` (без условия): src/styles/10-figma-slide2-style.css:13-13 [position, right, top, width, height, opacity] → src/styles/10-figma-slide2-style.css:74-74 [display]
- `#figmaSlide2 .s2-device` (без условия): src/styles/10-figma-slide2-style.css:19-19 [position, left, bottom, width, height, transform] → src/styles/10-figma-slide2-style.css:74-74 [display]
- `#figmaSlide2 .s2-brand` (без условия): src/styles/10-figma-slide2-style.css:23-23 [display, align-items, gap, font-size, font-weight, letter-spacing, color] → src/styles/10-figma-slide2-style.css:74-74 [display]
- `#figmaSlide2 .s2-routeicon` (без условия): src/styles/10-figma-slide2-style.css:29-29 [position, right, top, width, height, border, border-radius, transform] → src/styles/10-figma-slide2-style.css:74-74 [display]
- `#figmaSlide2 .s2-hero-core:after` (без условия): src/styles/10-figma-slide2-style.css:35-35 [content, position, inset, border, transform, border-radius] → src/styles/10-figma-slide2-style.css:36-36 [inset, border-color, border-radius]
- `#figmaSlide2 .s2-docs` (без условия): src/styles/10-figma-slide2-style.css:37-37 [left, top, width, height, padding] → src/styles/11-figma-slides34-style.css:4-4 [transform-origin, will-change, transition]
- `#figmaSlide2 .s2-docicon` (без условия): src/styles/10-figma-slide2-style.css:38-38 [position, right, top, width, height, border, border-radius, opacity] → src/styles/10-figma-slide2-style.css:74-74 [display]
- `#figmaSlide2 .s2-video-window` (без условия): src/styles/10-figma-slide2-style.css:42-42 [position, left, top, width, height, border-radius, overflow, z-index, pointer-events, background, box-shadow] → src/styles/11-figma-slides34-style.css:3-3 [transition]
- `#figmaSlide2 .s2-doc-img` (без условия): src/styles/10-figma-slide2-style.css:53-53 [position, left, top, width, height, max-width, pointer-events] → src/styles/11-figma-slides34-style.css:5-5 [transform-origin, transition]
- `#figmaSlide4 .s4t-percent` (без условия): src/styles/11-figma-slides34-style.css:26-26 [position, left, top, margin, color, font-weight, font-size, line-height, letter-spacing, white-space] → src/styles/11-figma-slides34-style.css:31-33 [opacity, will-change] → src/styles/11-figma-slides34-style.css:34-34 [transform, filter]
- `#figmaSlide4 .s4t-work` (без условия): src/styles/11-figma-slides34-style.css:27-27 [position, left, top, margin, font-size, line-height, font-weight, letter-spacing, white-space, background, -webkit-background-clip, background-clip, color, text-shadow] → src/styles/11-figma-slides34-style.css:31-33 [opacity, will-change] → src/styles/11-figma-slides34-style.css:35-35 [transform, filter, text-shadow]
- `#figmaSlide4 .s4t-search` (без условия): src/styles/11-figma-slides34-style.css:28-28 [position, left, right, top, bottom, color, font-weight, font-size, line-height, letter-spacing, text-align, white-space, display, align-items, justify-content] → src/styles/11-figma-slides34-style.css:31-33 [opacity, will-change] → src/styles/11-figma-slides34-style.css:36-36 [transform, filter]
- `#figmaSlide5` (без условия): src/styles/11-figma-slides34-style.css:59-59 [z-index] → src/styles/11-figma-slides34-style.css:61-61 [position, inset, width, height, z-index, background, opacity, visibility, pointer-events, transform, filter, transition, overflow, font-family]
- `#figmaSlide7 .s7-simple` (без условия): src/styles/12-slide7-simple-152-896.css:4-4 [position, inset, width, height, overflow] → src/styles/24-s7-figma-movie-style.css:5-5 [opacity, transition]
- `#figmaSlide7 .s7-theses` (без условия): src/styles/12-slide7-simple-152-896.css:5-5 [position, left, top, width, height, display, flex-direction, justify-content, gap, z-index] → src/styles/24-s7-figma-movie-style.css:6-6 [left, top, width, height, gap, justify-content]
- `#figmaSlide7 .s7-meme` (без условия): src/styles/12-slide7-simple-152-896.css:9-9 [position, left, top, width, height, border-radius, overflow, z-index, opacity, transform, filter, box-shadow, will-change] → src/styles/24-s7-figma-movie-style.css:8-8 [left, top, width, height, border-radius, border, box-sizing, box-shadow, background, isolation]
- `#figmaSlide7 .s7-meme img` (без условия): src/styles/12-slide7-simple-152-896.css:10-10 [display, width, height, object-fit, object-position] → src/styles/24-s7-figma-movie-style.css:9-9 [position, inset, width, height, z-index, object-fit, object-position]
- `#figmaSlide7.show .s7-thesis-2` (без условия): src/styles/12-slide7-simple-152-896.css:12-12 [animation] → src/styles/24-s7-figma-movie-style.css:10-10 [animation]
- `#figmaSlide7.show .s7-meme` (без условия): src/styles/12-slide7-simple-152-896.css:13-13 [animation] → src/styles/24-s7-figma-movie-style.css:11-11 [animation]
- `.pdfRestSlide.ee-slide.show` (без условия): src/styles/13-rag-reauthed-style.css:4-4 [opacity, pointer-events] → src/styles/34-final-scan-ready-layout.css:7-7 [opacity, filter]
- `.ee-slide .ee-header` (без условия): src/styles/13-rag-reauthed-style.css:14-14 [position, z-index, margin-bottom] → src/styles/30-sergei-overrides-oct12.css:3-3 [display, opacity, visibility, pointer-events]
- `.ee-slide .ee-content` (без условия): src/styles/13-rag-reauthed-style.css:19-19 [position, z-index, min-height, height] → src/styles/30-sergei-overrides-oct12.css:4-4 [padding-top]
- `.ee-slide .ee-reveal` (без условия): src/styles/13-rag-reauthed-style.css:21-21 [opacity, transform, filter] → src/styles/30-sergei-overrides-oct12.css:5-5 [animation, transform, opacity]
- `#pdfSlide9.show .ee-speedo-needle` (без условия): src/styles/13-rag-reauthed-style.css:76-76 [animation] → src/styles/43-slide-visual-polish.css:5-5 [animation]
- `.ee-slide .ee-trap-sym` (без условия): src/styles/13-rag-reauthed-style.css:87-87 [padding, border-radius, background, border] → src/styles/13-rag-reauthed-style.css:88-88 [border-left]
- `.ee-slide .ee-trap-cure` (без условия): src/styles/13-rag-reauthed-style.css:87-87 [padding, border-radius, background, border] → src/styles/13-rag-reauthed-style.css:88-88 [border-left]
- `.ee-slide .ee-trap-sym b` (без условия): src/styles/13-rag-reauthed-style.css:89-89 [color] → src/styles/13-rag-reauthed-style.css:90-90 [font-size]
- `.ee-slide .ee-trap-cure b` (без условия): src/styles/13-rag-reauthed-style.css:89-89 [color] → src/styles/13-rag-reauthed-style.css:90-90 [font-size]
- `.ee-slide .ee-pii-flow` (без условия): src/styles/13-rag-reauthed-style.css:124-124 [display, align-items, gap, margin-top, height] → src/styles/13-rag-reauthed-style.css:136-136 [margin-top]
- `.ee-slide .ee-pii-descriptions` (без условия): src/styles/13-rag-reauthed-style.css:124-124 [display, grid-template-columns, gap, margin-top] → src/styles/13-rag-reauthed-style.css:137-137 [margin-top]
- `.ee-slide .ee-delegate-human` (без условия): src/styles/13-rag-reauthed-style.css:130-130 [position, width, padding, box-sizing] → src/styles/13-rag-reauthed-style.css:130-130 [left, top]
- `.ee-slide .ee-delegate-ai` (без условия): src/styles/13-rag-reauthed-style.css:130-130 [position, width, padding, box-sizing] → src/styles/13-rag-reauthed-style.css:130-130 [right, bottom]
- `.ee-slide.show ~ #debugGlow` (без условия): src/styles/13-rag-reauthed-style.css:135-135 [display] → src/styles/19-presenter-ui-css.css:7-7 [display]
- `.pdfRestSlide.ee-slide .ee-index` (без условия): src/styles/14-cinematic-hero-titles-8-22.css:11-11 [opacity] → src/styles/17-rag-borderless-and-no-number.css:10-10 [display]
- `.pdfRestSlide.ee-slide.show .ee-content .ee-reveal` (без условия): src/styles/14-cinematic-hero-titles-8-22.css:24-26 [animation-delay] → src/styles/33-instant-slide-content-fix.css:9-13 [animation, opacity, filter]
- `#pdfSlide8 #v8FullChatWebsite` (без условия): src/styles/15-v8-fullsite-parent-styling.css:11-11 [display, position, inset, width, height, border, background, pointer-events, opacity, transform, filter, transition] → src/styles/16-v8-new-story-intro-css.css:16-16 [transition]
- `#pdfSlide8.v8-phase-3 .v8-result-label` (без условия): src/styles/15-v8-fullsite-parent-styling.css:18-18 [background, border-color, color, box-shadow] → src/styles/15-v8-fullsite-parent-styling.css:19-19 [border-color, background]
- `#prev.nav` (без условия): src/styles/19-presenter-ui-css.css:2-2 [position, display, align-items, justify-content, visibility, opacity, z-index, width, height, top, margin, transform, cursor, background, border, box-shadow, border-radius, color, font, transition, pointer-events] → src/styles/19-presenter-ui-css.css:3-3 [left]
- `#forward.nav` (без условия): src/styles/19-presenter-ui-css.css:2-2 [position, display, align-items, justify-content, visibility, opacity, z-index, width, height, top, margin, transform, cursor, background, border, box-shadow, border-radius, color, font, transition, pointer-events] → src/styles/19-presenter-ui-css.css:3-3 [right]
- `#debugGlow` (без условия): src/styles/19-presenter-ui-css.css:6-6 [position, top, left, display, visibility, opacity, z-index, min-width, background, border, box-shadow, border-radius, padding, backdrop-filter, pointer-events] → src/styles/42-debug-panel.css:1-1 [position, left, top, z-index, background, color, padding, border-radius, font, min-width, box-shadow]
- `#debugGlow button` (без условия): src/styles/19-presenter-ui-css.css:9-9 [border, border-radius, background, color, padding, cursor] → src/styles/42-debug-panel.css:1-1 [font]
- `#presenterGrid .thumbPlaceholder` (без условия): src/styles/19-presenter-ui-css.css:33-33 [position, inset, display, align-items, justify-content, font, color] → src/styles/19-presenter-ui-css.css:34-34 [display]
- `#pdfSlide10 .ee-trap-sym` (без условия): src/styles/21-rag-refined-original-theme-10-22.css:40-40 [min-height, padding, background, border, border-radius, box-sizing] → src/styles/21-rag-refined-original-theme-10-22.css:41-41 [border-left]
- `#pdfSlide10 .ee-trap-cure` (без условия): src/styles/21-rag-refined-original-theme-10-22.css:40-40 [min-height, padding, background, border, border-radius, box-sizing] → src/styles/21-rag-refined-original-theme-10-22.css:42-42 [border-left, background]
- `#pdfSlide12 .ee-adr-sub` (без условия): src/styles/21-rag-refined-original-theme-10-22.css:60-60 [font-size, margin, color] → src/styles/26-layout-audit-fixes-2026-10-12.css:16-16 [margin-bottom]
- `#pdfSlide12 .ee-adr-layout` (без условия): src/styles/21-rag-refined-original-theme-10-22.css:61-61 [gap, height, grid-template-columns] → src/styles/26-layout-audit-fixes-2026-10-12.css:17-17 [height, gap]
- `#pdfSlide12 .ee-adr-detail` (без условия): src/styles/21-rag-refined-original-theme-10-22.css:62-62 [background, border, border-radius] → src/styles/21-rag-refined-original-theme-10-22.css:65-65 [padding] → src/styles/26-layout-audit-fixes-2026-10-12.css:20-20 [padding]
- `#pdfSlide12 .ee-adr-table>div` (без условия): src/styles/21-rag-refined-original-theme-10-22.css:63-63 [min-height, font-size] → src/styles/26-layout-audit-fixes-2026-10-12.css:18-18 [min-height, font-size]
- `#pdfSlide12 .ee-adr-table>.ee-table-header` (без условия): src/styles/21-rag-refined-original-theme-10-22.css:64-64 [font-size, color] → src/styles/26-layout-audit-fixes-2026-10-12.css:19-19 [min-height]
- `#pdfSlide12 .ee-decision` (без условия): src/styles/21-rag-refined-original-theme-10-22.css:67-67 [font-size, padding, grid-template-columns] → src/styles/26-layout-audit-fixes-2026-10-12.css:21-21 [font-size, padding]
- `#pdfSlide12 .ee-decision b` (без условия): src/styles/21-rag-refined-original-theme-10-22.css:68-68 [font-size] → src/styles/26-layout-audit-fixes-2026-10-12.css:22-22 [font-size]
- `#pdfSlide12 .ee-adr-bot` (без условия): src/styles/21-rag-refined-original-theme-10-22.css:69-69 [margin-top, gap] → src/styles/26-layout-audit-fixes-2026-10-12.css:23-23 [margin-top, gap]
- `#pdfSlide12 .ee-adr-bot>div` (без условия): src/styles/21-rag-refined-original-theme-10-22.css:70-70 [padding, background, border, border-top, border-radius, font-size] → src/styles/26-layout-audit-fixes-2026-10-12.css:24-24 [padding, font-size, line-height]
- `#pdfSlide12 .ee-adr-bot b` (без условия): src/styles/21-rag-refined-original-theme-10-22.css:71-71 [font-size, margin-bottom] → src/styles/26-layout-audit-fixes-2026-10-12.css:25-25 [font-size, margin-bottom]
- `#pdfSlide13 .ee-layers` (без условия): src/styles/21-rag-refined-original-theme-10-22.css:73-73 [gap, height] → src/styles/21-rag-refined-original-theme-10-22.css:166-166 [gap] → src/styles/21-rag-refined-original-theme-10-22.css:189-189 [grid-template-rows, height] → src/styles/26-layout-audit-fixes-2026-10-12.css:29-29 [gap, grid-template-rows]
- `#pdfSlide13 .ee-layer` (без условия): src/styles/21-rag-refined-original-theme-10-22.css:74-74 [padding, background, border, border-bottom, border-radius, grid-template-columns] → src/styles/21-rag-refined-original-theme-10-22.css:181-181 [min-height, padding] → src/styles/26-layout-audit-fixes-2026-10-12.css:30-30 [min-height, grid-template-columns, padding, border-bottom-color]
- `#pdfSlide13 .ee-layer-name` (без условия): src/styles/21-rag-refined-original-theme-10-22.css:75-75 [font-size, font-weight, color] → src/styles/21-rag-refined-original-theme-10-22.css:183-183 [font-size] → src/styles/26-layout-audit-fixes-2026-10-12.css:31-31 [font-size, line-height, overflow-wrap]
- `#pdfSlide13 .ee-layer-nodes` (без условия): src/styles/21-rag-refined-original-theme-10-22.css:76-76 [gap] → src/styles/26-layout-audit-fixes-2026-10-12.css:32-32 [min-width, gap, align-items]
- `#pdfSlide13 .ee-layer-node` (без условия): src/styles/21-rag-refined-original-theme-10-22.css:77-77 [font-size, line-height, min-height, background, border, border-radius] → src/styles/21-rag-refined-original-theme-10-22.css:165-165 [min-height] → src/styles/21-rag-refined-original-theme-10-22.css:182-182 [min-height, padding, font-size, line-height] → src/styles/26-layout-audit-fixes-2026-10-12.css:33-41 [min-width, min-height, padding, flex, display, flex-direction, justify-content, align-items, text-align, font-size, line-height, overflow-wrap, hyphens, background]
- `#pdfSlide13 .ee-layer:nth-child(even) .ee-layer-node` (без условия): src/styles/21-rag-refined-original-theme-10-22.css:77-77 [font-size, line-height, min-height, background, border, border-radius] → src/styles/21-rag-refined-original-theme-10-22.css:165-165 [min-height] → src/styles/21-rag-refined-original-theme-10-22.css:182-182 [min-height, padding, font-size, line-height] → src/styles/26-layout-audit-fixes-2026-10-12.css:33-41 [min-width, min-height, padding, flex, display, flex-direction, justify-content, align-items, text-align, font-size, line-height, overflow-wrap, hyphens, background]
- `#pdfSlide13 .ee-layer-node small` (без условия): src/styles/21-rag-refined-original-theme-10-22.css:78-78 [font-size] → src/styles/21-rag-refined-original-theme-10-22.css:184-184 [font-size] → src/styles/21-rag-refined-original-theme-10-22.css:190-190 [display, margin-top, font-size, line-height, color] → src/styles/26-layout-audit-fixes-2026-10-12.css:42-46 [display, flex, width, margin-top, line-height, font-size, white-space, overflow-wrap]
- `#pdfSlide16 .ee-pipe` (без условия): src/styles/21-rag-refined-original-theme-10-22.css:103-103 [height, margin-top, gap] → src/styles/26-layout-audit-fixes-2026-10-12.css:50-54 [display, grid-template-columns, grid-template-rows, height, margin-top, gap]
- `#pdfSlide16 .ee-pipe-node` (без условия): src/styles/21-rag-refined-original-theme-10-22.css:104-104 [padding, background, border, border-top, border-radius] → src/styles/26-layout-audit-fixes-2026-10-12.css:55-59 [min-width, min-height, padding, border-top-width]
- `#pdfSlide16 .ee-pipe-node.tone-blue` (без условия): src/styles/21-rag-refined-original-theme-10-22.css:104-104 [padding, background, border, border-top, border-radius] → src/styles/21-rag-refined-original-theme-10-22.css:105-105 [border-top-color, background] → src/styles/26-layout-audit-fixes-2026-10-12.css:55-59 [min-width, min-height, padding, border-top-width]
- `#pdfSlide16 .ee-pipe-label` (без условия): src/styles/21-rag-refined-original-theme-10-22.css:106-106 [font-size, line-height, margin-bottom, padding-bottom] → src/styles/26-layout-audit-fixes-2026-10-12.css:62-66 [font-size, line-height, margin-bottom, padding-bottom, overflow-wrap]
- `#pdfSlide16 .ee-pipe-copy` (без условия): src/styles/21-rag-refined-original-theme-10-22.css:107-107 [font-size, line-height] → src/styles/26-layout-audit-fixes-2026-10-12.css:67-70 [font-size, line-height, overflow-wrap]
- `#pdfSlide16 .ee-pipe-node:not(:last-child):after` (без условия): src/styles/21-rag-refined-original-theme-10-22.css:108-108 [font-size, top, color] → src/styles/26-layout-audit-fixes-2026-10-12.css:71-71 [display]
- `#pdfSlide16 .ee-pipe-tag` (без условия): src/styles/21-rag-refined-original-theme-10-22.css:109-109 [font-size, margin, color] → src/styles/26-layout-audit-fixes-2026-10-12.css:72-72 [margin-top, font-size]
- `#pdfSlide19 .ee-sandbox` (без условия): src/styles/21-rag-refined-original-theme-10-22.css:132-132 [gap, grid-template-columns] → src/styles/26-layout-audit-fixes-2026-10-12.css:76-76 [grid-template-columns, gap]
- `#pdfSlide19 .ee-bridge` (без условия): src/styles/21-rag-refined-original-theme-10-22.css:136-136 [color] → src/styles/26-layout-audit-fixes-2026-10-12.css:78-82 [top, right, width, z-index, text-align, white-space, line-height, font-size]
- `#pdfSlide19 .ee-toolstack` (без условия): src/styles/21-rag-refined-original-theme-10-22.css:137-137 [gap] → src/styles/21-rag-refined-original-theme-10-22.css:185-185 [grid-template-rows, height] → src/styles/26-layout-audit-fixes-2026-10-12.css:85-85 [min-width]
- `#pdfSlide19 .ee-toolstack .ee-block` (без условия): src/styles/21-rag-refined-original-theme-10-22.css:138-138 [border, border-bottom, border-radius, background, padding] → src/styles/21-rag-refined-original-theme-10-22.css:167-167 [padding] → src/styles/21-rag-refined-original-theme-10-22.css:186-186 [padding, min-height] → src/styles/26-layout-audit-fixes-2026-10-12.css:86-86 [padding]
- `#pdfSlide19 .ee-toolstack .ee-block-label` (без условия): src/styles/21-rag-refined-original-theme-10-22.css:139-139 [font-size, margin-bottom] → src/styles/21-rag-refined-original-theme-10-22.css:187-187 [font-size, margin-bottom] → src/styles/26-layout-audit-fixes-2026-10-12.css:87-87 [font-size, margin-bottom]
- `#pdfSlide19 .ee-toolstack .ee-block-body` (без условия): src/styles/21-rag-refined-original-theme-10-22.css:140-140 [font-size] → src/styles/21-rag-refined-original-theme-10-22.css:168-168 [font-size] → src/styles/21-rag-refined-original-theme-10-22.css:188-188 [font-size, line-height] → src/styles/26-layout-audit-fixes-2026-10-12.css:88-88 [font-size, line-height]
- `#aistEvolutionSlide .ev-intro h2` (без условия): src/styles/22-aist-evolution-style.css:9-9 [font-size, font-weight, line-height, letter-spacing, margin, max-width] → src/styles/23-evolution-story-polish.css:2-2 [font-size, line-height, max-width, letter-spacing]
- `#aistEvolutionSlide .ev-intro h2 strong` (без условия): src/styles/22-aist-evolution-style.css:10-10 [display, font-weight, background, -webkit-background-clip, background-clip, color] → src/styles/23-evolution-story-polish.css:3-3 [font-size, margin-top, letter-spacing]
- `#aistEvolutionSlide .ev-intro p` (без условия): src/styles/22-aist-evolution-style.css:11-11 [font-size, color, font-weight, margin] → src/styles/23-evolution-story-polish.css:4-4 [font-size, line-height, max-width]
- `#aistEvolutionSlide .ev-head` (без условия): src/styles/22-aist-evolution-style.css:14-14 [position, top, left, right, display, justify-content, align-items, gap] → src/styles/23-evolution-story-polish.css:5-5 [top, align-items]
- `#aistEvolutionSlide .ev-smalltitle` (без условия): src/styles/22-aist-evolution-style.css:15-15 [font-size, letter-spacing, color, font-weight, text-transform, margin-bottom] → src/styles/23-evolution-story-polish.css:7-7 [font-size, letter-spacing, margin-bottom]
- `#aistEvolutionSlide .ev-title` (без условия): src/styles/22-aist-evolution-style.css:16-16 [font-size, line-height, font-weight, letter-spacing, margin] → src/styles/23-evolution-story-polish.css:8-8 [font-size, line-height, max-width]
- `#aistEvolutionSlide .ev-caption` (без условия): src/styles/22-aist-evolution-style.css:18-18 [font-size, font-weight, color, max-width, text-align, line-height, padding-bottom] → src/styles/23-evolution-story-polish.css:9-9 [max-width, padding-top, font-size, text-align, line-height, color]
- `#aistEvolutionSlide .ev-frame` (без условия): src/styles/22-aist-evolution-style.css:19-19 [position, top, left, width, height, border-radius, overflow, background, box-shadow] → src/styles/23-evolution-story-polish.css:15-15 [top, left, width, height]
- `#aistEvolutionSlide .ev-frame::before` (без условия): src/styles/22-aist-evolution-style.css:20-20 [content, white-space, position, inset, display, align-items, justify-content, text-align, padding, color, font, box-sizing] → src/styles/23-evolution-story-polish.css:18-18 [content, white-space]
- `#aistEvolutionSlide .ev-progress` (без условия): src/styles/22-aist-evolution-style.css:23-23 [position, bottom, right, display, gap, align-items] → src/styles/23-evolution-story-polish.css:16-16 [bottom]
- `#aistEvolutionSlide .ev-stepmark` (без условия): src/styles/22-aist-evolution-style.css:27-27 [position, bottom, left, font-size, color, letter-spacing] → src/styles/23-evolution-story-polish.css:17-17 [bottom]
- `#aistEvolutionSlide.ev2` (без условия): src/styles/25-ev2-storytelling-style.css:3-3 [background, color, font-family] → src/styles/27-slide8-editorial-simplify.css:3-3 [background]
- `#aistEvolutionSlide .ev2-scene` (без условия): src/styles/25-ev2-storytelling-style.css:6-6 [position, inset, opacity, visibility, transform, filter, transition, pointer-events, z-index, overflow] → src/styles/27-slide8-editorial-simplify.css:4-4 [overflow] → src/styles/32-reliability-sharpness-fix.css:3-7 [filter, transform, transition]
- `#aistEvolutionSlide.show .ev2-scene.is-active` (без условия): src/styles/25-ev2-storytelling-style.css:7-7 [opacity, visibility, transform, filter, transition-delay] → src/styles/32-reliability-sharpness-fix.css:8-12 [filter, transform, transition]
- `#aistEvolutionSlide .ev2-kicker` (без условия): src/styles/25-ev2-storytelling-style.css:8-8 [position, left, top, color, font-size, font-weight, letter-spacing, z-index] → src/styles/25-ev2-storytelling-style.css:9-9 [display, align-items, gap]
- `#aistEvolutionSlide .ev2-opening` (без условия): src/styles/25-ev2-storytelling-style.css:12-12 [position, left, top, max-width, margin, font-weight, font-size, letter-spacing, line-height] → src/styles/27-slide8-editorial-simplify.css:5-5 [top, left, font-size, line-height, max-width]
- `#aistEvolutionSlide .ev2-lead` (без условия): src/styles/25-ev2-storytelling-style.css:15-15 [position, left, bottom, font-size, font-weight, color, line-height, margin] → src/styles/27-slide8-editorial-simplify.css:6-6 [left, bottom, font-size, color, letter-spacing]
- `#aistEvolutionSlide .ev2-story-left` (без условия): src/styles/25-ev2-storytelling-style.css:18-18 [position, left, top, width, z-index] → src/styles/27-slide8-editorial-simplify.css:7-7 [left, top, width]
- `#aistEvolutionSlide .ev2-hero` (без условия): src/styles/25-ev2-storytelling-style.css:19-19 [font-size, line-height, letter-spacing, font-weight, margin] → src/styles/27-slide8-editorial-simplify.css:8-8 [font-size, line-height]
- `#aistEvolutionSlide .ev2-body` (без условия): src/styles/25-ev2-storytelling-style.css:22-22 [font-size, line-height, font-weight, color, margin] → src/styles/27-slide8-editorial-simplify.css:9-9 [font-size, line-height, margin-top, color, max-width]
- `#aistEvolutionSlide .ev2-body strong` (без условия): src/styles/25-ev2-storytelling-style.css:23-23 [font-weight, color] → src/styles/27-slide8-editorial-simplify.css:10-10 [color, font-weight]
- `#aistEvolutionSlide .ev2-shot` (без условия): src/styles/25-ev2-storytelling-style.css:25-25 [overflow, position, background, box-shadow, border-radius, isolation] → src/styles/27-slide8-editorial-simplify.css:11-11 [border-radius, box-shadow]
- `#aistEvolutionSlide .ev2-docmain` (без условия): src/styles/25-ev2-storytelling-style.css:27-27 [left, top, width, height, box-shadow] → src/styles/27-slide8-editorial-simplify.css:12-14 [left, top, width, height, box-shadow]
- `#aistEvolutionSlide .ev2-docmain img` (без условия): src/styles/25-ev2-storytelling-style.css:28-28 [top, height] → src/styles/27-slide8-editorial-simplify.css:15-15 [inset, width, height, object-fit]
- `#aistEvolutionSlide .ev2-hinge-title` (без условия): src/styles/25-ev2-storytelling-style.css:34-34 [position, top, left, width, font-size, line-height, letter-spacing, font-weight, margin] → src/styles/27-slide8-editorial-simplify.css:16-16 [left, top, font-size, line-height, max-width]
- `#aistEvolutionSlide .ev2-hinge-caption` (без условия): src/styles/25-ev2-storytelling-style.css:35-35 [position, top, left, color, font-size, letter-spacing] → src/styles/27-slide8-editorial-simplify.css:17-17 [left, top, font-size, color]
- `#aistEvolutionSlide .ev2-aist-left` (без условия): src/styles/25-ev2-storytelling-style.css:40-40 [top] → src/styles/27-slide8-editorial-simplify.css:18-18 [top]
- `#aistEvolutionSlide .ev2-aist-title` (без условия): src/styles/25-ev2-storytelling-style.css:42-42 [font-weight, font-size, line-height, letter-spacing, margin] → src/styles/27-slide8-editorial-simplify.css:19-19 [font-size, line-height, margin]
- `#aistEvolutionSlide .ev2-aist-home` (без условия): src/styles/25-ev2-storytelling-style.css:44-44 [left, top, width, height, box-shadow] → src/styles/27-slide8-editorial-simplify.css:12-14 [left, top, width, height, box-shadow]
- `#aistEvolutionSlide .ev2-catalog-title` (без условия): src/styles/25-ev2-storytelling-style.css:45-45 [position, left, top, font-size, line-height, letter-spacing, font-weight, margin] → src/styles/27-slide8-editorial-simplify.css:21-21 [left, top, font-size, line-height]
- `#aistEvolutionSlide .ev2-catalog-shot` (без условия): src/styles/25-ev2-storytelling-style.css:46-46 [left, top, width, height, transform, transform-origin] → src/styles/26-layout-audit-fixes-2026-10-12.css:10-13 [top, transform] → src/styles/27-slide8-editorial-simplify.css:22-22 [left, top, width, height, transform, transform-origin]
- `#aistEvolutionSlide .ev2-assist-left` (без условия): src/styles/25-ev2-storytelling-style.css:50-50 [top] → src/styles/27-slide8-editorial-simplify.css:23-23 [top]
- `#aistEvolutionSlide .ev2-assist-title` (без условия): src/styles/25-ev2-storytelling-style.css:51-51 [font-size, line-height, letter-spacing, font-weight, margin] → src/styles/27-slide8-editorial-simplify.css:24-24 [font-size, line-height, letter-spacing]
- `#aistEvolutionSlide .ev2-chat-shot` (без условия): src/styles/25-ev2-storytelling-style.css:53-53 [left, top, width, height, box-shadow] → src/styles/27-slide8-editorial-simplify.css:12-14 [left, top, width, height, box-shadow]
- `#aistEvolutionSlide .ev2-summary-head` (без условия): src/styles/25-ev2-storytelling-style.css:54-54 [position, top, left, font-size, line-height, letter-spacing, font-weight, margin] → src/styles/27-slide8-editorial-simplify.css:25-25 [left, top, font-size, line-height, max-width]
- `#aistEvolutionSlide .ev2-comparison` (без условия): src/styles/25-ev2-storytelling-style.css:55-55 [position, left, right, top, display, grid-template-columns, gap, align-items] → src/styles/27-slide8-editorial-simplify.css:26-26 [left, right, top, gap, grid-template-columns]
- `#aistEvolutionSlide .ev2-comparison label` (без условия): src/styles/25-ev2-storytelling-style.css:56-56 [display, color, font-size, letter-spacing, margin-bottom] → src/styles/27-slide8-editorial-simplify.css:27-27 [font-size, letter-spacing, color, margin]
- `#aistEvolutionSlide .ev2-comparison .ev2-shot` (без условия): src/styles/25-ev2-storytelling-style.css:57-57 [position, left, top, width, height, box-shadow] → src/styles/27-slide8-editorial-simplify.css:28-28 [height, border-radius]
- `#aistEvolutionSlide .ev2-compare-arrow` (без условия): src/styles/25-ev2-storytelling-style.css:60-60 [color, font-size, text-align, padding-top, font-weight] → src/styles/27-slide8-editorial-simplify.css:29-29 [padding-top, font-size]
- `#aistEvolutionSlide .ev2-navigation-track` (без условия): src/styles/25-ev2-storytelling-style.css:61-61 [position, bottom, left, right, z-index, display, align-items, gap, color, font, letter-spacing, pointer-events] → src/styles/26-layout-audit-fixes-2026-10-12.css:7-9 [bottom]
- `#pdfSlide26 .ee-content` (без условия): src/styles/28-konspektus-practice-style.css:51-51 [top, bottom] → src/styles/30-sergei-overrides-oct12.css:8-8 [padding-top]
- `#pdfSlide26 .kx-cta` (без условия): src/styles/28-konspektus-practice-style.css:52-52 [display, grid-template-columns, gap, height, align-items] → src/styles/43-slide-visual-polish.css:7-7 [grid-template-columns, gap]
- `#pdfSlide26 .kx-cta-text` (без условия): src/styles/28-konspektus-practice-style.css:53-53 [font-size, line-height, color, max-width] → src/styles/43-slide-visual-polish.css:18-18 [font-size, line-height, margin]
- `#pdfSlide26 .kx-cta .kx-link` (без условия): src/styles/28-konspektus-practice-style.css:55-55 [display, margin-top, font-size, color, text-decoration, word-break] → src/styles/43-slide-visual-polish.css:19-19 [font-size, margin-top]
- `#pdfSlide26 .kx-qr-wrap` (без условия): src/styles/28-konspektus-practice-style.css:57-57 [display, align-items, justify-content, flex-direction, gap] → src/styles/43-slide-visual-polish.css:20-20 [align-items, gap]
- `#pdfSlide26 .kx-qr-link` (без условия): src/styles/28-konspektus-practice-style.css:58-58 [display, background, padding, border-radius, box-shadow, transition, position, z-index] → src/styles/43-slide-visual-polish.css:21-21 [padding, border-radius]
- `#pdfSlide26 .kx-qr-link img` (без условия): src/styles/28-konspektus-practice-style.css:60-60 [width, height, image-rendering, display] → src/styles/43-slide-visual-polish.css:22-22 [width, height]
- `#pdfSlide26 .kx-qr-under` (без условия): src/styles/28-konspektus-practice-style.css:61-61 [font-size, letter-spacing, color] → src/styles/43-slide-visual-polish.css:23-23 [font-size]
- `#pdfSlide28.ee-slide .sv29-speaker` (без условия): src/styles/29-semenov-29-closing-style.css:10-10 [position, left, top, max-width] → src/styles/34-final-scan-ready-layout.css:17-17 [left, top, max-width]
- `#pdfSlide28.ee-slide .sv29-name` (без условия): src/styles/29-semenov-29-closing-style.css:11-11 [font, color, letter-spacing] → src/styles/34-final-scan-ready-layout.css:18-18 [font-size, line-height]
- `#pdfSlide28.ee-slide .sv29-role` (без условия): src/styles/29-semenov-29-closing-style.css:12-12 [font, color, margin-top] → src/styles/34-final-scan-ready-layout.css:19-19 [font-size, margin-top]
- `#pdfSlide28.ee-slide .sv29-link` (без условия): src/styles/29-semenov-29-closing-style.css:13-13 [display, align-items, gap, margin-top, text-decoration, color, font, position, z-index, pointer-events] → src/styles/34-final-scan-ready-layout.css:20-20 [font-size, margin-top, padding]
- `#pdfSlide28.ee-slide .sv29-photo` (без условия): src/styles/29-semenov-29-closing-style.css:16-16 [position, top, left, width, height, border-radius, overflow, background, border, box-shadow] → src/styles/34-final-scan-ready-layout.css:21-24 [left, top, width, height, border-radius, overflow]
- `#pdfSlide28.ee-slide .sv29-photo img` (без условия): src/styles/29-semenov-29-closing-style.css:17-17 [width, height, object-fit, object-position, display] → src/styles/34-final-scan-ready-layout.css:25-28 [display, width, height, aspect-ratio, object-fit, object-position]
- `#pdfSlide28.ee-slide .sv29-qr-group` (без условия): src/styles/29-semenov-29-closing-style.css:19-19 [position, left, top, z-index, display, flex-direction, align-items, width, gap] → src/styles/34-final-scan-ready-layout.css:29-32 [position, left, right, top, width, max-width, gap]
- `#pdfSlide28.ee-slide .sv29-qr-link` (без условия): src/styles/29-semenov-29-closing-style.css:20-20 [display, padding, background, border-radius, box-shadow, pointer-events, transition] → src/styles/34-final-scan-ready-layout.css:33-33 [padding, border-radius]
- `#pdfSlide28.ee-slide .sv29-qr-link img` (без условия): src/styles/29-semenov-29-closing-style.css:22-22 [width, height, display, image-rendering] → src/styles/34-final-scan-ready-layout.css:34-37 [width, height, max-width, image-rendering]
- `#pdfSlide28.ee-slide .sv29-qr-label` (без условия): src/styles/29-semenov-29-closing-style.css:23-23 [text-align, font, color, white-space] → src/styles/34-final-scan-ready-layout.css:38-38 [font-size, white-space]
- `#pdfSlide28 .ee-content` (без условия): src/styles/30-sergei-overrides-oct12.css:8-8 [padding-top] → src/styles/30-sergei-overrides-oct12.css:8-8 [padding-top]
- `.catwin-slide .catwin-bg::before` (без условия): src/styles/30-sergei-overrides-oct12.css:36-38 [content, position, inset, pointer-events] → src/styles/30-sergei-overrides-oct12.css:39-42 [background, opacity]
- `.catwin-slide .catwin-bg::after` (без условия): src/styles/30-sergei-overrides-oct12.css:36-38 [content, position, inset, pointer-events] → src/styles/30-sergei-overrides-oct12.css:43-45 [background]
- `.pdfRestSlide.story-tech.story-layers .ee-layer-node` (без условия): src/styles/38-storytelling-layout-corrections.css:48-54 [font-size, line-height, flex, min-width, min-height, height, padding, border-radius, background, border] → src/styles/39-storytelling-quality-pass.css:3-7 [display, flex-direction, align-items, justify-content, text-align, word-break, overflow-wrap]
- `.pdfRestSlide.story-tech.story-layers .ee-layer:nth-child(even) .ee-layer-node` (без условия): src/styles/38-storytelling-layout-corrections.css:48-54 [font-size, line-height, flex, min-width, min-height, height, padding, border-radius, background, border] → src/styles/39-storytelling-quality-pass.css:3-7 [display, flex-direction, align-items, justify-content, text-align, word-break, overflow-wrap]
- `.pdfRestSlide.story-tech.story-layers .ee-layer-node small` (без условия): src/styles/38-storytelling-layout-corrections.css:55-55 [display, font-size, line-height, margin-top] → src/styles/39-storytelling-quality-pass.css:8-11 [display, align-self, max-width, text-align, font-size, line-height]

## Изолированные iframe CSS

Строки относительно декодированного srcdoc, не исходного HTML. Место iframe: SLIDE_MAP, слайд 10.

- v8FighterIntro:L10-15: `:root` (без условия); --scale, --dragon-delay, --kitty-delay, --vs-delay
- v8FighterIntro:L16-16: `*, *::before, *::after` (без условия); box-sizing
- v8FighterIntro:L17-17: `html, body` (без условия); margin, width, height, background, overflow
- v8FighterIntro:L18-18: `body` (без условия); font-family
- v8FighterIntro:L19-23: `#viewport` (без условия); width, height, min-height, display, justify-content, align-items, overflow, background
- v8FighterIntro:L24-29: `#stage-shell` (без условия); width, height, flex, position, outline, overflow, touch-action, -webkit-tap-highlight-color
- v8FighterIntro:L30-30: `#stage-shell:focus-visible` (без условия); outline, outline-offset
- v8FighterIntro:L31-39: `#stage` (без условия); position, inset, width, height, overflow, background, transform, transform-origin, isolation, user-select, -webkit-user-select
- v8FighterIntro:L40-40: `.scene` (без условия); position, inset
- v8FighterIntro:L41-41: `.asset` (без условия); display, width, height, object-fit, user-select, -webkit-user-drag, pointer-events
- v8FighterIntro:L42-42: `.layer` (без условия); position, pointer-events
- v8FighterIntro:L45-45: `.battlefield` (без условия); left, top, width, height, z-index
- v8FighterIntro:L46-46: `.battlefield .asset` (без условия); object-fit
- v8FighterIntro:L47-51: `.blue-haze` (без условия); left, top, width, height, z-index, border-radius, mix-blend-mode, opacity, background
- v8FighterIntro:L52-55: `.vignette` (без условия); position, inset, z-index, pointer-events, background
- v8FighterIntro:L56-60: `.dragon` (без условия); left, top, width, height, z-index, opacity, transform, will-change
- v8FighterIntro:L61-65: `.kitty` (без условия); left, top, width, height, z-index, opacity, transform, will-change
- v8FighterIntro:L66-70: `.versus` (без условия); left, top, width, height, z-index, opacity, transform, transform-origin, will-change
- v8FighterIntro:L71-71: `.versus .asset` (без условия); filter
- v8FighterIntro:L72-79: `.name` (без условия); position, z-index, top, margin, color, font-size, font-weight, line-height, letter-spacing, white-space, opacity, transform, text-shadow, will-change
- v8FighterIntro:L80-80: `.name-left` (без условия); left
- v8FighterIntro:L81-81: `.name-right` (без условия); left
- v8FighterIntro:L82-88: `.vs-light` (без условия); left, top, width, height, z-index, opacity, background, mix-blend-mode, pointer-events
- v8FighterIntro:L89-94: `.flash` (без условия); position, inset, z-index, pointer-events, opacity, background, mix-blend-mode
- v8FighterIntro:L97-97: `.play .dragon` (без условия); animation
- v8FighterIntro:L98-98: `.play .kitty` (без условия); animation
- v8FighterIntro:L99-99: `.play .name-left` (без условия); animation
- v8FighterIntro:L100-100: `.play .name-right` (без условия); animation
- v8FighterIntro:L101-101: `.play .versus` (без условия); animation
- v8FighterIntro:L102-102: `.play .vs-light` (без условия); animation
- v8FighterIntro:L103-103: `.play .flash` (без условия); animation
- v8FighterIntro:L104-104: `.play .versus .asset` (без условия); animation
- v8FighterIntro:L106-110: `@keyframes dragon-arrive` (без условия); opacity, transform, filter
- v8FighterIntro:L111-115: `@keyframes kitty-arrive` (без условия); opacity, transform, filter
- v8FighterIntro:L116-119: `@keyframes name-appear` (без условия); opacity, transform, filter
- v8FighterIntro:L120-126: `@keyframes versus-explode` (без условия); opacity, transform, filter
- v8FighterIntro:L127-132: `@keyframes light-boom` (без условия); opacity, transform
- v8FighterIntro:L133-138: `@keyframes flash-boom` (без условия); opacity
- v8FighterIntro:L139-142: `@keyframes fire-flicker` (без условия); filter
- v8FighterIntro:L144-145: `.play .dragon, .play .kitty, .play .versus, .play .name, .play .flash, .play .vs-light,     .play .versus .asset` (@media (prefers-reduced-motion: reduce)); animation, filter
- v8FighterIntro:L146-146: `.dragon, .kitty, .versus, .name` (@media (prefers-reduced-motion: reduce)); opacity, transform
- v8FighterIntro:L147-147: `.flash, .vs-light` (@media (prefers-reduced-motion: reduce)); opacity
- v8FullChatWebsite:L2-2: `html,body` (без условия); margin, width, height, overflow, background, color, font-family
- v8FullChatWebsite:L3-3: `body` (без условия); position
- v8FullChatWebsite:L4-4: `.bgGlow` (без условия); position, left, right, bottom, height, filter, opacity, background
- v8FullChatWebsite:L5-5: `.chatWrap` (без условия); position, left, top, width, height, border, border-radius, background, overflow, box-sizing, opacity, transform, filter, transition, box-shadow
- v8FullChatWebsite:L6-6: `.chatWrap.show` (без условия); opacity, transform, filter
- v8FullChatWebsite:L7-7: `.topbar` (без условия); position, left, right, top, height, border-bottom, border-radius, box-sizing, background
- v8FullChatWebsite:L8-8: `.winControls` (без условия); position, right, top, width, height, display, align-items, justify-content, opacity
- v8FullChatWebsite:L9-9: `.winControls span` (без условия); display, position, width, height
- v8FullChatWebsite:L9-9: `.winControls .min:before` (без условия); content, position, left, right, top, height, background
- v8FullChatWebsite:L9-9: `.winControls .max` (без условия); border, box-sizing
- v8FullChatWebsite:L9-9: `.winControls .close:before,.winControls .close:after` (без условия); content, position, left, top, width, height, background
- v8FullChatWebsite:L9-9: `.winControls .close:before` (без условия); transform
- v8FullChatWebsite:L9-9: `.winControls .close:after` (без условия); transform
- v8FullChatWebsite:L10-10: `.promptBubble` (без условия); position, left, top, width, min-height, box-sizing, padding, border, border-radius, background, box-shadow, opacity, transform, filter, transition
- v8FullChatWebsite:L11-11: `.promptBubble.show` (без условия); opacity, transform, filter
- v8FullChatWebsite:L12-12: `.promptText` (без условия); font-size, line-height, font-weight, letter-spacing, color, white-space
- v8FullChatWebsite:L13-13: `.loading` (без условия); position, left, top, display, gap, opacity, filter, transform, transition
- v8FullChatWebsite:L14-14: `.loading.show` (без условия); opacity, filter, transform
- v8FullChatWebsite:L15-15: `.dot` (без условия); width, height, border-radius, background, box-shadow, animation
- v8FullChatWebsite:L15-15: `.dot:nth-child(2)` (без условия); animation-delay
- v8FullChatWebsite:L15-15: `.dot:nth-child(3)` (без условия); animation-delay
- v8FullChatWebsite:L18-18: `.inputBar` (без условия); position, left, right, bottom, height, border, border-radius, box-sizing, overflow, background, transition
- v8FullChatWebsite:L19-19: `.inputBar.expanded` (без условия); height
- v8FullChatWebsite:L20-20: `.inputText` (без условия); position, left, top, width, min-height, font-size, line-height, font-weight, letter-spacing, color, white-space, word-break, opacity
- v8FullChatWebsite:L21-21: `.inputCursor` (без условия); display, width, height, background, vertical-align, margin-left, animation
- v8FullChatWebsite:L23-23: `.send` (без условия); position, left, top, width, height, border-radius, box-sizing, background, box-shadow, transition, opacity
- v8FullChatWebsite:L24-24: `.inputBar.expanded .send` (без условия); top
- v8FullChatWebsite:L25-25: `.send.active` (без условия); background, box-shadow
- v8FullChatWebsite:L26-26: `.send.pressed` (без условия); transform, filter
- v8FullChatWebsite:L26-26: `.sendAsset` (без условия); position, inset, width, height, display, opacity, transition, pointer-events
- v8FullChatWebsite:L27-27: `.send .sendIcon.arrow` (без условия); opacity
- v8FullChatWebsite:L28-28: `.send.active:not(.sent)` (без условия); background, box-shadow
- v8FullChatWebsite:L29-29: `.send.active:not(.sent) .sendAsset` (без условия); opacity
- v8FullChatWebsite:L30-30: `.send.sent .sendAsset` (без условия); opacity, transform
- v8FullChatWebsite:L32-32: `.sendIcon` (без условия); position, inset, transition
- v8FullChatWebsite:L33-33: `.sendIcon.arrow:before,.sendIcon.arrow:after` (без условия); content, position, left, top, width, height, border-radius, background, transform-origin
- v8FullChatWebsite:L34-34: `.sendIcon.arrow:before` (без условия); transform
- v8FullChatWebsite:L35-35: `.sendIcon.arrow:after` (без условия); transform
- v8FullChatWebsite:L36-36: `.send.active .sendIcon.arrow:before,.send.active .sendIcon.arrow:after` (без условия); background
- v8FullChatWebsite:L37-37: `.sendIcon.cross` (без условия); opacity, transform
- v8FullChatWebsite:L38-38: `.sendIcon.cross:before,.sendIcon.cross:after` (без условия); content, position, left, top, width, height, border-radius, background
- v8FullChatWebsite:L39-39: `.sendIcon.cross:before` (без условия); transform
- v8FullChatWebsite:L39-39: `.sendIcon.cross:after` (без условия); transform
- v8FullChatWebsite:L40-40: `.send.sent .sendIcon.arrow` (без условия); opacity, transform
- v8FullChatWebsite:L41-41: `.send.sent .sendIcon.cross` (без условия); opacity, transform
- v8FullChatWebsite:L45-45: `.chatWrap` (без условия); transform-origin
- v8FullChatWebsite:L46-46: `.chatWrap.compose` (без условия); transform, filter
- v8FullChatWebsite:L47-47: `.codePane` (без условия); position, left, top, width, height, border, border-radius, background, box-shadow, opacity, transform, filter, transition, overflow, box-sizing
- v8FullChatWebsite:L48-48: `.codePane.show` (без условия); opacity, transform, filter
- v8FullChatWebsite:L49-49: `.codeTopAsset` (без условия); position, left, top, width, height, display, max-width, pointer-events
- v8FullChatWebsite:L50-50: `.codeBody` (без условия); position, left, top, width, height, overflow-y, overflow-x, scrollbar-width, scroll-behavior, overscroll-behavior, box-sizing, padding-bottom, font-family, font-size, line-height, font-weight, letter-spacing, color, white-space
- v8FullChatWebsite:L51-51: `.codeBody::-webkit-scrollbar` (без условия); display
- v8FullChatWebsite:L52-52: `.codeBody` (без условия); transition
- v8FullChatWebsite:L53-53: `.codeBody.complete` (без условия); opacity, filter
- v8FullChatWebsite:L54-54: `.codeLine` (без условия); position, display, width, max-width, min-height, opacity, filter
- v8FullChatWebsite:L55-55: `.codeChar` (без условия); display, opacity, transform, filter, will-change
- v8FullChatWebsite:L56-56: `.codeLine.show .codeChar` (без условия); animation, animation-delay
- v8FullChatWebsite:L57-57: `@keyframes charIn` (без условия); opacity, transform, filter
- v8FullChatWebsite:L58-58: `.doneMessage` (без условия); position, left, top, width, height, box-sizing, padding, border, border-radius, background, box-shadow, font-family, font-size, line-height, font-weight, letter-spacing, color, opacity, transform, filter, transition, display, align-items, justify-content
- v8FullChatWebsite:L59-59: `.chatWrap.compose .doneMessage` (без условия); left, top, width, height, padding, border-radius, font-size
- v8FullChatWebsite:L60-60: `.doneMessage.show` (без условия); opacity, transform, filter
- v8FullChatWebsite:L61-61: `.codeDone` (без условия); position, left, top, width, height, z-index, opacity, transform, filter, transition, pointer-events
- v8FullChatWebsite:L62-62: `.codeDone.show` (без условия); opacity, transform, filter
- v8FullChatWebsite:L63-63: `.codeDone .ring,.codeDone .check` (без условия); display
- v8FullChatWebsite:L64-64: `.codeDone .doneSvg` (без условия); display, width, height, overflow
- v8FullChatWebsite:L65-65: `.codeDone .doneCircle,.codeDone .doneCheck` (без условия); fill, stroke, stroke-linecap, stroke-linejoin
- v8FullChatWebsite:L66-66: `.codeDone .doneCircle` (без условия); stroke-width
- v8FullChatWebsite:L67-67: `.codeDone .doneCheck` (без условия); stroke-width
- v8FullChatWebsite:L68-68: `.codeDone .doneGlow` (без условия); filter
- v8FullChatWebsite:L70-70: `.codeDone.stage9Hidden` (без условия); display, opacity, transition
- v8FullChatWebsite:L71-71: `.chatWrap.stage9Slow` (без условия); transition
- v8FullChatWebsite:L72-72: `.codePane.stage9Slow` (без условия); transition
- v8FullChatWebsite:L73-73: `.ragScene.stage9Slow` (без условия); transition
- v8FullChatWebsite:L74-74: `.fanoutStack.stage9Slow .tabGhost` (без условия); transition
- v8FullChatWebsite:L75-75: `.chatWrap.offLeft` (без условия); opacity, transform, filter
- v8FullChatWebsite:L76-76: `.codePane.fanout` (без условия); left, transform, filter
- v8FullChatWebsite:L77-77: `.codePane.fanout .codeBody` (без условия); opacity, filter
- v8FullChatWebsite:L78-78: `.ragScene` (без условия); position, left, top, width, height, opacity, transform, filter, transition, pointer-events
- v8FullChatWebsite:L79-79: `.ragScene.show` (без условия); opacity, transform, filter
- v8FullChatWebsite:L80-80: `.ragBadgeRow` (без условия); display, gap, margin-bottom
- v8FullChatWebsite:L81-81: `.ragBadge` (без условия); padding, border-radius, border, background, font, color, letter-spacing
- v8FullChatWebsite:L82-82: `.ragTitle` (без условия); margin, font, color, letter-spacing
- v8FullChatWebsite:L83-83: `.ragGrid` (без условия); position, height, border-radius, border, background, overflow
- v8FullChatWebsite:L84-84: `.ragCol` (без условия); position, top, bottom, width, border-radius, border, background
- v8FullChatWebsite:L85-85: `.ragCol.c1` (без условия); left
- v8FullChatWebsite:L85-85: `.ragCol.c2` (без условия); left
- v8FullChatWebsite:L85-85: `.ragCol.c3` (без условия); right, width
- v8FullChatWebsite:L86-86: `.ragColTitle` (без условия); position, left, top, font, color, letter-spacing
- v8FullChatWebsite:L87-87: `.ragItem` (без условия); position, left, right, height, border-radius, background, border
- v8FullChatWebsite:L88-88: `.ragItem.i1` (без условия); top
- v8FullChatWebsite:L88-88: `.ragItem.i2` (без условия); top
- v8FullChatWebsite:L88-88: `.ragItem.i3` (без условия); top
- v8FullChatWebsite:L88-88: `.ragItem.i4` (без условия); top
- v8FullChatWebsite:L89-89: `.ragPill` (без условия); position, height, padding, border-radius, background, border, font, color
- v8FullChatWebsite:L90-90: `.ragPill.p1` (без условия); left, top
- v8FullChatWebsite:L90-90: `.ragPill.p2` (без условия); left, top
- v8FullChatWebsite:L90-90: `.ragPill.p3` (без условия); left, top
- v8FullChatWebsite:L90-90: `.ragPill.p4` (без условия); left, top
- v8FullChatWebsite:L90-90: `.ragPill.p5` (без условия); left, top
- v8FullChatWebsite:L91-91: `.ragNode` (без условия); position, border-radius, border, background
- v8FullChatWebsite:L92-92: `.ragNode.n1` (без условия); left, top, width, height
- v8FullChatWebsite:L92-92: `.ragNode.n2` (без условия); left, top, width, height
- v8FullChatWebsite:L92-92: `.ragNode.n3` (без условия); left, top, width, height
- v8FullChatWebsite:L93-93: `.ragNode.n4` (без условия); left, top, width, height
- v8FullChatWebsite:L93-93: `.ragNode.n5` (без условия); left, top, width, height
- v8FullChatWebsite:L94-94: `.ragNode.n6` (без условия); left, top, width, height
- v8FullChatWebsite:L94-94: `.ragNode.n7` (без условия); left, top, width, height
- v8FullChatWebsite:L94-94: `.ragNode.n8` (без условия); left, top, width, height
- v8FullChatWebsite:L95-95: `.ragNode::before` (без условия); content, position, left, top, width, height, border-radius, background
- v8FullChatWebsite:L96-96: `.ragNode::after` (без условия); content, position, left, right, bottom, height, border-radius, background
- v8FullChatWebsite:L97-97: `.ragLines` (без условия); position, inset, pointer-events, opacity
- v8FullChatWebsite:L98-98: `.ragLines svg` (без условия); width, height
- v8FullChatWebsite:L99-99: `.fanoutStack` (без условия); position, inset, pointer-events
- v8FullChatWebsite:L100-100: `.tabGhost` (без условия); position, left, top, width, height, border, border-radius, background, box-sizing, overflow, opacity, filter, transform, transition
- v8FullChatWebsite:L101-101: `.tabGhost::before` (без условия); content, position, left, right, top, height, border-bottom, background
- v8FullChatWebsite:L102-102: `.tabGhost::after` (без условия); content, position, right, top, width, height, background, border-radius
- v8FullChatWebsite:L103-103: `.tabGhost .mini` (без условия); position, left, right, top, bottom, border-radius, border, background
- v8FullChatWebsite:L104-104: `.tabGhost .mini .row` (без условия); position, left, right, height, border-radius, background
- v8FullChatWebsite:L105-105: `.tabGhost .mini .row.r1` (без условия); top
- v8FullChatWebsite:L105-105: `.tabGhost .mini .row.r2` (без условия); top
- v8FullChatWebsite:L105-105: `.tabGhost .mini .row.r3` (без условия); top
- v8FullChatWebsite:L106-106: `.tabGhost .mini .node` (без условия); position, width, height, border-radius, background, border
- v8FullChatWebsite:L107-107: `.tabGhost .mini .node.n1` (без условия); left, top
- v8FullChatWebsite:L107-107: `.tabGhost .mini .node.n2` (без условия); left, top
- v8FullChatWebsite:L107-107: `.tabGhost .mini .node.n3` (без условия); right, top
- v8FullChatWebsite:L108-108: `.tabGhost.g1` (без условия); z-index
- v8FullChatWebsite:L108-108: `.tabGhost.g2` (без условия); z-index
- v8FullChatWebsite:L108-108: `.tabGhost.g3` (без условия); z-index
- v8FullChatWebsite:L108-108: `.tabGhost.g4` (без условия); z-index
- v8FullChatWebsite:L109-109: `.tabGhost.g1.show` (без условия); opacity, filter, transform
- v8FullChatWebsite:L110-110: `.tabGhost.g2.show` (без условия); opacity, filter, transform
- v8FullChatWebsite:L111-111: `.tabGhost.g3.show` (без условия); opacity, filter, transform
- v8FullChatWebsite:L112-112: `.tabGhost.g4.show` (без условия); opacity, filter, transform
- v8FullChatWebsite:L113-113: `.errorLayer` (без условия); position, left, top, width, height, z-index, pointer-events, overflow
- v8FullChatWebsite:L113-113: `.solitaireTrail` (без условия); position, inset, z-index
- v8FullChatWebsite:L113-113: `.errorCard,.solitaireClone` (без условия); position, width, height, padding, border-radius, border, background, box-shadow, box-sizing, display, align-items, justify-content, text-align, left, top, will-change
- v8FullChatWebsite:L113-113: `.errorCard` (без условия); opacity, filter, z-index
- v8FullChatWebsite:L113-113: `.errorLayer.show .errorCard` (без условия); opacity, filter
- v8FullChatWebsite:L113-113: `.solitaireClone` (без условия); opacity, z-index, filter, transition
- v8FullChatWebsite:L113-113: `.solitaireClone.fading` (без условия); opacity
- v8FullChatWebsite:L113-113: `.errorTrail` (без условия); display
- v8FullChatWebsite:L113-113: `.errorCode` (без условия); font-family, font-size, line-height, font-weight, color, letter-spacing, margin
- v8FullChatWebsite:L113-113: `.errorLabel` (без условия); margin-top, font-family, font-size, line-height, font-weight, color, letter-spacing
- v8FullChatWebsite:L114-114: `.errorCard.outroLeft` (без условия); transform, opacity, filter
- v8FullChatWebsite:L117-117: `.chatWrap.outroLeft` (без условия); transform, opacity, filter
- v8FullChatWebsite:L118-118: `.codePane.outroLeft` (без условия); transform, opacity, filter
- v8FullChatWebsite:L119-119: `.ragScene.outroLeft,.fanoutStack.outroLeft,.errorLayer.outroLeft` (без условия); transform, opacity, filter
- v8FullChatWebsite:L120-120: `.outroTextScene` (без условия); position, inset, display, align-items, justify-content, padding, box-sizing, opacity, transform, filter, transition, pointer-events, z-index
- v8FullChatWebsite:L121-121: `.outroTextScene.show` (без условия); opacity, transform, filter
- v8FullChatWebsite:L122-122: `.outroTextWrap` (без условия); max-width, text-align
- v8FullChatWebsite:L123-123: `.outroLine` (без условия); display, font-family, font-weight, font-size, line-height, letter-spacing, color, margin, white-space
- v8FullChatWebsite:L124-124: `.outroLine.gradient` (без условия); color
- v8FullChatWebsite:L124-124: `.outroLine.gradient .outroChar` (без условия); background, -webkit-background-clip, background-clip, -webkit-text-fill-color, color
- v8FullChatWebsite:L124-124: `.outroLine.gradient .outroGap` (без условия); -webkit-text-fill-color, color, background
- v8FullChatWebsite:L125-125: `.outroChar` (без условия); display, opacity, transform, filter, animation, animation-delay, will-change
- v8FullChatWebsite:L126-126: `.outroGap` (без условия); display, width
- v8FullChatWebsite:L128-128: `.codeIndent` (без условия); display, width
- v8FullChatWebsite:L129-129: `.kw` (без условия); color
- v8FullChatWebsite:L129-129: `.name` (без условия); color
- v8FullChatWebsite:L129-129: `.str` (без условия); color
- v8FullChatWebsite:L129-129: `.func` (без условия); color
- v8FullChatWebsite:L129-129: `.cls` (без условия); color
- v8FullChatWebsite:L129-129: `.com` (без условия); color
- v8FullChatWebsite:L129-129: `.pun` (без условия); color
- v8FullChatWebsite:L129-129: `.decor` (без условия); color
- v8FullChatWebsite:L129-129: `.num` (без условия); color
- v8FullChatWebsite:L130-130: `@keyframes dotPulse` (без условия); transform, opacity
- v8FullChatWebsite:L131-131: `@keyframes blink` (без условия); opacity
- v8FullChatWebsite:L556-556: `.sendAsset,.codeTopAsset` (без условия); display
- v8FullChatWebsite:L557-557: `.codePane:before` (без условия); content, position, top, left, right, height, background, border-bottom, z-index, pointer-events
- v8FullChatWebsite:L558-558: `.codePane:after` (без условия); content, position, right, top, letter-spacing, font, color, z-index, pointer-events
- v8FullChatWebsite:L559-559: `#v8TimeStamp` (без условия); position, left, top, padding, border-radius, background, border, color, font, letter-spacing, opacity, transform, transition, pointer-events
- v8FullChatWebsite:L560-560: `#v8TimeStamp.show` (без условия); opacity, transform
- v8FullChatWebsite:L561-561: `#v8LostOutcome` (без условия); position, left, top, width, opacity, transform, filter, transition, pointer-events
- v8FullChatWebsite:L562-562: `#v8LostOutcome.show` (без условия); opacity, transform, filter
- v8FullChatWebsite:L563-563: `#v8LostOutcome .v8-overline` (без условия); color, font, margin-bottom
- v8FullChatWebsite:L564-564: `#v8LostOutcome .v8-statement` (без условия); font, letter-spacing, color
- v8FullChatWebsite:L565-565: `#v8LostOutcome .v8-statement span` (без условия); color
- v8FullChatWebsite:L566-566: `#v8LostOutcome .v8-detail` (без условия); max-width, color, font, margin-top
- v8FullChatWebsite:L567-567: `#v8NextPrompt` (без условия); position, left, top, width, min-height, box-sizing, padding, border, border-radius, background, color, font, letter-spacing, opacity, transform, transition, pointer-events
- v8FullChatWebsite:L568-568: `#v8NextPrompt.show` (без условия); opacity, transform
- v8FullChatWebsite:L569-569: `#v8LostReply` (без условия); position, left, top, width, min-height, box-sizing, padding, border-radius, background, border, color, font, opacity, transform, filter, transition, pointer-events
- v8FullChatWebsite:L570-570: `#v8LostReply.show` (без условия); opacity, transform, filter
- v8FullChatWebsite:L571-571: `#v8LostReply strong` (без условия); color, font-weight
- v8FullChatWebsite:L573-573: `body.v8-lost-context .chatWrap` (без условия); opacity, transform, filter
- v8FullChatWebsite:L574-575: `body.v8-lost-context .codePane,body.v8-lost-context .codeDone, body.v8-lost-context .fanoutStack` (без условия); opacity, pointer-events, transition
- v8FullChatWebsite:L576-577: `body.v8-lost-context .promptBubble,body.v8-lost-context .loading, body.v8-lost-context .doneMessage` (без условия); opacity, pointer-events
- v8FullChatWebsite:L634-634: `.inputBar,.inputBar.expanded` (без условия); height, max-height, transition
- v8FullChatWebsite:L635-635: `.inputBar .inputText` (без условия); width, min-height, height, white-space, overflow-wrap, word-break, top
- v8FullChatWebsite:L636-636: `.inputBar .send,.inputBar.expanded .send` (без условия); left, right, top, bottom, flex-shrink
- v8FullChatWebsite:L638-638: `.send` (без условия); background, box-shadow
- v8FullChatWebsite:L639-639: `.send .sendAsset` (без условия); display, opacity
- v8FullChatWebsite:L640-640: `.send.active:not(.sent) .sendAsset` (без условия); opacity
- v8FullChatWebsite:L641-641: `.send.sent .sendAsset` (без условия); opacity
- v8FullChatWebsite:L642-642: `.send .sendIcon.arrow` (без условия); display
- v8FullChatWebsite:L643-643: `.send.active:not(.sent)` (без условия); background, box-shadow
- v8FullChatWebsite:L644-644: `.send.sent` (без условия); background
