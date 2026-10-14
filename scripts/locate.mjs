#!/usr/bin/env node
import {select} from './regression/selection.mjs';
import {index,groups,ranges,duplicates,globals} from './source-index.mjs';
const n=Number(process.argv[2]);if(!Number.isInteger(n)||n<1||n>39){console.error('Usage: npm run locate -- <slide 1..39>');process.exit(2);}
const data=index(),s=data.slides[n-1],list=a=>a.map(x=>`${x.name}:${x.line}`).filter((x,i,a)=>a.indexOf(x)===i).join(', ')||'не установлены';
console.log(`Слайд ${n}/39 | ${s.id} | секция документа ${s.document_index}\nHTML: ${s.path}\nstage=${s.stage}${s.pdfIndex===null?'':`; pdfDeckIndex=${s.pdfIndex}`} | ${s.steps}`);
console.log('CSS: кандидаты по ID/классам и глобальные правила; применимость сложных селекторов не установлена:');
for(const g of groups(s))console.log(`  ${g.file}:${ranges(g.rules)} (${g.rules.length} правил)`);
if(!s.css.length)console.log('  связь не установлена');
console.log('JS локальный:');if(!s.js.length)console.log('  отдельная локальная логика не установлена; используется общий контроллер');
for(const j of s.js){console.log('  '+j.file+' | функции: '+(j.functions.map(f=>`${f.name}:${f.start}-${f.end}`).join(', ')||'именованные не установлены'));for(const key of ['events','timers','observers','messages'])console.log('    '+key+': '+list(j[key]));}
console.log('Общие зависимости — менять только с проверкой других слайдов:\n  '+globals);
const c=data.js[0];console.log('  функции: '+c.functions.filter(f=>['fit','advance','back','showPdfSlideByIndex','hidePdfSlides','window.__deckJump',...(n===6?['playAgentTimeline','setAgentTimelineStep']:n===8?['showAistStep','ev2ActivateScreens']:n===7?['setupSchemePieces']:[])].includes(f.name)).map(f=>`${f.name}:${f.start}-${f.end}`).join(', '));
console.log('  события: '+list(c.events));console.log('  таймеры (весь контроллер; принадлежность конкретному слайду не установлена): '+list(c.timers));
for(const j of data.js.filter(j=>/(02-stage-debug|06-presenter-ui)/.test(j.file)))console.log('  '+j.file+' | функции: '+(j.functions.map(f=>f.name+':'+f.start+'-'+f.end).join(', ')||'именованные не установлены')+' | события: '+list(j.events)+' | таймеры: '+list(j.timers));
console.log('  CSS shared: body/html, шрифты, ee-/story-*; слайд 3 совместно показывает figmaSlide2.');
if(n===7)console.log('  Динамический DOM: setupSchemePieces создаёт scheme-piece; читать CSS scheme-piece и scheme-base в 01-base-global.css.');
if(n===3)console.log('  Совместный показ: читать HTML/CSS/ассеты слайда 2 из SLIDE_MAP.');
console.log('Ассеты HTML: '+([...new Set(s.assets.map(a=>a.path))].join(', ')||'прямая связь не установлена'));
console.log('Ассеты CSS-кандидатов: '+([...new Set(s.cssAssets.map(a=>a.path))].join(', ')||'не установлены'));
console.log('iframe/postMessage: '+(s.iframes.map(f=>`${f.id} (${s.path}:${f.start}-${f.end})`).join(', ')||'локальная связь не установлена; глобальный message-handler в 01-main-player.js'));
console.log(`CSS-переопределения: ${duplicates(s.css).length} групп повторных точных селекторов; ${s.css.filter(r=>r.body.includes('!important')).length} правил с !important. Разные селекторы тоже могут конфликтовать. См. docs/CSS_MAP.md; каскад не переставлять.`);
console.log('Подробности: docs/SLIDE_MAP.md, docs/ANIMATION_MAP.md. Статический индекс не заменяет браузерную проверку.');

const regression=select(['--slide='+n,...process.argv.slice(3).filter(a=>a.startsWith('--changed='))],data);
console.log('Браузерная регрессия: слайды '+regression.slides.join(', ')+'. Причина: '+regression.reasons.join('; '));
console.log('Команды: npm run regression:quick -- --slide='+n+'; npm run regression:full -- --slide='+n+'; для общей правки добавьте --changed=src/styles/FILE.css или --changed=src/scripts/FILE.js.');
