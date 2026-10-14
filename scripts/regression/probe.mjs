import {dependency,browserPath} from './runtime.mjs';import {pathToFileURL} from 'node:url';import path from 'node:path';
const browser=await dependency('playwright').chromium.launch({headless:true,executablePath:browserPath()});
console.log('Browser',browser.version());
const context=await browser.newContext({viewport:{width:1920,height:1080},deviceScaleFactor:1,locale:'ru-RU',timezoneId:'Europe/Moscow',offline:true});
const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
await page.clock.install({time:new Date('2026-10-13T09:00:00Z')});
await page.goto(pathToFileURL(path.resolve('dist/presentation.html')).href);await page.evaluate(()=>document.fonts.ready);await page.waitForTimeout(800);
for(const n of [1,2,3,4,5,7,9,10,30,39]){await page.evaluate(n=>window.__deckJump(n),n);await page.clock.runFor(6000);console.log(n,await page.evaluate(()=>({stage:window.__presentationStage,index:window.pdfDeckIndex,v8:window.__v8ClickStep,images:[...document.images].filter(i=>i.getAttribute('src')&&(!i.complete||!i.naturalWidth)).map(i=>i.id||i.alt),videos:[...document.querySelectorAll('video')].map(v=>({id:v.id,ready:v.readyState,error:v.error?.message,paused:v.paused})),fonts:document.fonts.status})));}
console.log('errors',errors);await browser.close();
