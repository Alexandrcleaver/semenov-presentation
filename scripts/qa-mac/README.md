# QA на Mac (локальный Chrome через DevTools, без зависимостей)

- `node scripts/qa-mac/walk.mjs dist/presentation.html` — проход пультом по всем слайдам, ошибки JS, PageUp/ArrowDown, нет перезагрузки.
- `node scripts/qa-mac/v8size.mjs dist/presentation.html /tmp/p out.jpg 1` — слайд «Vibe vs SDD» после смены размера окна (картинка не должна сжиматься).
