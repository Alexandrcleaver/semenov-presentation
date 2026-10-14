import fs from 'node:fs';import path from 'node:path';import crypto from 'node:crypto';import {execFileSync} from 'node:child_process';import {pathToFileURL} from 'node:url';
import {root,read} from '../source-index.mjs';import {dependency,browserPath} from './runtime.mjs';import {select} from './selection.mjs';import {screenshot} from './visual.mjs';
process.chdir(root);
const args=process.argv.slice(2),full=args.includes('--full'),capture=full||args.includes('--capture'),selection=select(args),start=Date.now();
const runName=new Date().toISOString().replace(/[:.]/g,'-')+'-'+(full?'full':'quick'),dir=path.join(root,'regression/runs',runName),baseline=path.join(root,'regression/baselines');fs.mkdirSync(dir,{recursive:true});
const report={mode:full?'full':'quick',selection:selection.slides,reasons:selection.reasons,checks:[],errors:[],consoleErrors:[],requests:[],failedRequests:[],messages:[],screenshots:[],layoutWarnings:[],configuration:{viewport:{width:1920,height:1080},deviceScaleFactor:1,locale:'ru-RU',timezoneId:'Europe/Moscow',offline:true,colorScheme:'dark',reducedMotion:'no-preference',clock:'2026-10-13T09:00:00Z',seed:1729,profile:'chrome-1920x1080-dpr1-v1'}};
function check(name,value,details={}){if(typeof value==='object'&&value!==null){details=value;value=value.pass;}report.checks.push({name,status:value===null?'pending':value?'pass':'fail',...details});}
const save=()=>{report.durationSeconds=(Date.now()-start)/1000;report.counts=report.checks.reduce((r,c)=>(r[c.status]=(r[c.status]||0)+1,r),{});fs.writeFileSync(path.join(dir,'report.json'),JSON.stringify(report,null,2));fs.writeFileSync(path.join(root,'regression/latest-'+report.mode+'.json'),JSON.stringify({run:runName,...report},null,2));};
let browser;
try{
 execFileSync(process.execPath,['scripts/build.mjs'],{cwd:root,stdio:'pipe'});check('build',true);
 report.htmlSha256=crypto.createHash('sha256').update(fs.readFileSync('dist/presentation.html')).digest('hex');
 const reference=JSON.parse(read('src/reference.json'));check(args.includes('--allow-reference-change')?'intentional-build-hash-recorded':'reference-sha256',args.includes('--allow-reference-change')||report.htmlSha256===reference.sha256,{actual:report.htmlSha256,reference:reference.sha256,intentionalChange:args.includes('--allow-reference-change')});
 browser=await dependency('playwright').chromium.launch({headless:true,executablePath:browserPath()});report.configuration.browserVersion=browser.version();
 const context=await browser.newContext({viewport:report.configuration.viewport,deviceScaleFactor:1,locale:'ru-RU',timezoneId:'Europe/Moscow',offline:true,colorScheme:'dark',reducedMotion:'no-preference'});
 await context.addInitScript(()=>{let seed=1729;Math.random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};globalThis.__regressionMessages=[];addEventListener('message',e=>{if(e.data?.type)globalThis.__regressionMessages.push({type:e.data.type,n:e.data.n});});});
 context.on('request',r=>{if(!/^(file:|data:|blob:|about:)/.test(r.url()))report.requests.push({url:r.url(),type:r.resourceType()});});
 context.on('requestfailed',r=>report.failedRequests.push({url:r.url().slice(0,160),error:r.failure()?.errorText}));
 const page=await context.newPage();page.on('pageerror',e=>report.errors.push(e.message));page.on('console',m=>{if(m.type()==='error')report.consoleErrors.push(m.text().slice(0,300));});
 await page.clock.install({time:new Date(report.configuration.clock)});await page.clock.pauseAt(new Date(Date.parse(report.configuration.clock)+1000));
 const url=pathToFileURL(path.join(root,'dist/presentation.html')).href;
 await page.goto(url,{waitUntil:'load'});await page.evaluate(()=>document.fonts.ready);check('open-built-html',true);
 const tick=async(ms,exact=false)=>{if(exact)await page.clock.runFor(ms);else await page.clock.fastForward(ms);await page.evaluate(()=>new Promise(r=>queueMicrotask(r)));};
 const jump=async n=>{await page.evaluate(n=>window.__deckJump(n),n);await tick(6000);};
 const state=()=>page.evaluate(()=>({stage:window.__presentationStage,pdf:window.pdfDeckIndex,timeline:window.agentTimelineStep,evolution:window.aistEvolutionStep,v8:window.__v8ClickStep}));
 async function assertSlide(n,label){const s=selection.data.slides[n-1],a=await state();check(`${label}:slide-${n}:stage`,Number(a.stage)===Number(s.stage)&& (s.pdfIndex===null||a.pdf===s.pdfIndex),{actual:a,expected:{stage:s.stage,pdf:s.pdfIndex}});const dom=await page.evaluate(({id,n})=>{const e=document.getElementById(id),r=e?.getBoundingClientRect(),css=e&&getComputedStyle(e);return {exists:!!e,active:n===1?!document.body.classList.contains('cover-off'):e?.classList.contains('show'),display:css?.display,rect:r?{x:r.x,y:r.y,width:r.width,height:r.height}:null};},{id:s.id,n});check(`${label}:slide-${n}:DOM`,dom.exists&&dom.active&&dom.display!=='none'&&dom.rect.width>0&&dom.rect.height>0,{actual:dom});}
 async function assetCheck(n){
  const details=[];
  for(const frame of page.frames()){
   const a=await frame.evaluate(async()=>{await document.fonts.ready;const visible=e=>{const r=e.getBoundingClientRect(),s=getComputedStyle(e);return r.width>0&&r.height>0&&s.display!=='none'&&s.visibility!=='hidden'&&Number(s.opacity)>0;};const images=[...document.images].filter(i=>visible(i)&&i.getAttribute('src')&&i.loading!=='lazy');const broken=images.filter(i=>!i.complete||!i.naturalWidth).map(i=>i.id||i.alt||'image');const fonts=[...document.fonts].map(f=>({family:f.family,status:f.status}));const videos=[...document.querySelectorAll('video')].filter(v=>visible(v)).map(v=>({id:v.id,ready:v.readyState,error:v.error?{code:v.error.code,message:v.error.message}:null,paused:v.paused,currentTime:v.currentTime}));return {broken,fonts,videos};});details.push(a);
  }
  check(`slide-${n}:assets`,details.every(a=>!a.broken.length&&a.fonts.every(f=>f.status!=='error')&&a.videos.every(v=>!v.error)),{details});
 }
 async function snap(name,phase='settled'){if(!capture)return;await screenshot(page,name,dir,baseline,check,report.configuration,phase);report.screenshots.push(name);}
 // Decode every embedded image separately, including intentionally lazy thumbnails.
 for(const frame of page.frames()){
 const decoded=await frame.evaluate(async()=>{
 const urls=new Set([...document.querySelectorAll('img')].map(i=>i.getAttribute('src')||i.dataset.src).filter(s=>s?.startsWith('data:image/')));
 const walk=rules=>{for(const rule of rules){if(rule.cssRules)walk(rule.cssRules);if(rule.style)for(const property of rule.style){const value=rule.style.getPropertyValue(property);for(const m of value.matchAll(/url\(\s*["']?(data:image\/[^\s)'"<>]+)/g))urls.add(m[1]);}}};for(const sheet of document.styleSheets)walk(sheet.cssRules);
 const failures=[];await Promise.all([...urls].map(async(src,index)=>{const img=new Image();img.src=src;try{await img.decode();if(!img.naturalWidth)failures.push(index);}catch{failures.push(index);}}));return {count:urls.size,failures};});check('embedded-image-decode:'+(frame.name()||'main'),!decoded.failures.length,decoded);
 }
 for(const frame of page.frames()){const f=await frame.evaluate(async()=>{await Promise.all([...document.fonts].map(f=>f.load()));return [...document.fonts].map(f=>({family:f.family,status:f.status}));});check('fonts:'+frame.name(),f.every(f=>f.status==='loaded'),{faces:f});}
 for(const n of selection.slides){await jump(n);await assertSlide(n,'jump');await assetCheck(n);await snap(`slide-${String(n).padStart(2,'0')}-settled`);console.log('checked slide',n);}
 // Reentry uses another real slide before returning, rather than repeating jump in place.
 for(const n of selection.slides){await jump(n===39?38:n+1);await jump(n);await assertSlide(n,'reenter');}
 // Gallery and keyboard guard, lazy images become visible when opened.
 await jump(1);await page.keyboard.press('g');check('gallery-open',await page.locator('#presenterDrawer').evaluate(e=>e.classList.contains('open')));await page.keyboard.press('ArrowRight');await tick(1000);check('gallery-blocks-navigation',(await state()).stage===0);
 await page.locator('.deckThumb[data-slide="30"]').scrollIntoViewIfNeeded();await page.locator('.deckThumb[data-slide="30"]').click();await tick(6000);await assertSlide(30,'gallery');check('gallery-close',!(await page.locator('#presenterDrawer').evaluate(e=>e.classList.contains('open'))));
 // Every visible video must decode/play on entry and pause after leaving.
 for(const [n,id] of [[1,'coverBookVideo'],[2,'figmaSlide2Exact'],[9,'s7FigmaMovie']]){if(!selection.slides.includes(n))continue;await jump(n);const video=page.locator('#'+id);await video.evaluate(v=>{if(!v.getAttribute('src')&&v.dataset.src){v.src=v.dataset.src;v.load();}});try{await Promise.race([video.evaluate(v=>v.readyState>=2?Promise.resolve():new Promise((resolve,reject)=>{v.addEventListener('loadeddata',resolve,{once:true});v.addEventListener('error',()=>reject(Error('video decode error')),{once:true});})),new Promise((_,reject)=>setTimeout(()=>reject(Error('video readiness timeout')),10000))]);const initial=await video.evaluate(v=>v.currentTime);await page.waitForTimeout(200);const current=await video.evaluate(v=>({ready:v.readyState,paused:v.paused,time:v.currentTime,error:v.error?.code}));check(`video-${id}:play`,current.ready>=2&&!current.paused&&!current.error&&current.time!==initial,{initial,current});}catch(e){check(`video-${id}:play`,false,{error:e.message});}await jump(n===1?2:11);check(`video-${id}:pause`,await video.evaluate(v=>v.paused));}
 if(full){
  // Each edge is exercised from a settled source state via real keyboard events.
  for(let n=1;n<39;n++){if(!selection.slides.includes(n)&&!selection.slides.includes(n+1))continue;
   await jump(n);if(n===8){for(let k=0;k<6;k++){await page.keyboard.press('Enter');await tick(300);}}if(n===10){for(let k=0;k<10;k++){await page.keyboard.press('Enter');await tick(1000,true);}}
   if(n===1){await page.keyboard.press('Enter');await tick(350);await snap('transition-01-02-mid','mid');await tick(5000);}else{await page.keyboard.press(n%3===0?'Space':n%3===1?'Enter':'ArrowRight');await tick(6000);}
   await assertSlide(n+1,`forward-${n}-${n+1}`);if([2,3,4,5,7,9,10].includes(n+1))await snap(`transition-${n}-${n+1}-settled`);
   await page.keyboard.press('ArrowLeft');await tick(6000);await assertSlide(n,`back-${n+1}-${n}`);
  }
  if(selection.slides.includes(2)){await jump(1);await page.keyboard.press('Enter');await tick(350);check('bento-assemble',await page.locator('#figmaSlide2').evaluate(e=>e.classList.contains('assemble')));await tick(5000);check('bento-assemble-cleared',!(await page.locator('#figmaSlide2').evaluate(e=>e.classList.contains('assemble'))));await page.keyboard.press('Enter');await tick(100);await snap('transition-02-03-mid','mid');await tick(2000);await assertSlide(3,'documents-overlay');}
  if(selection.slides.includes(6)){await jump(5);await page.keyboard.press('Enter');await tick(1000);for(let k=0;k<=8;k++){check('timeline-step-'+k,(await state()).timeline===k);await snap('timeline-step-'+k);if(k<8){await page.keyboard.press('Enter');await tick(300);}}for(let k=7;k>=0;k--){await page.keyboard.press('ArrowLeft');await tick(300);check('timeline-back-'+k,(await state()).timeline===k);}}
  if(selection.slides.includes(8)){await jump(8);for(let k=0;k<=6;k++){check('evolution-step-'+k,(await state()).evolution===k);check('evolution-scene-'+k,await page.locator('#aistEvolutionSlide').evaluate((e,k)=>e.querySelectorAll('.ev2-scene.is-active').length===1&&e.querySelector('.ev2-scene.is-active')?.dataset.evScene===String(k),k));await snap('evolution-step-'+k);if(k<6){await page.keyboard.press('Enter');await tick(300);}}for(let k=5;k>=0;k--){await page.keyboard.press('ArrowLeft');await tick(300);check('evolution-back-'+k,(await state()).evolution===k);}}
  if(selection.slides.includes(10)){
   await jump(10);for(let k=0;k<=10;k++){check('v8-step-'+k,(await state()).v8===k);await tick(k===3?25000:k===4?10000:k===5?12000:2500,true);await snap('v8-step-'+k);if(k<10){await page.keyboard.press('Enter');await tick(100,true);}}
   for(let k=9;k>=0;k--){await page.keyboard.press('ArrowLeft');await tick(1000,true);check('v8-back-'+k,(await state()).v8===k);}
   await jump(11);await jump(10);check('v8-reentry-reset',(await state()).v8===0);
   const frame=page.frames().find(f=>f.name()==='v8FullChatWebsite');check('iframe-chat-exists',!!frame);
   if(frame){
    // Protocol branch retained by iframe, absent from current v8Advance route.
    for(let k=0;k<4;k++){await page.keyboard.press('Enter');await tick(1000,true);}await frame.evaluate(()=>window.postMessage({type:'fanout'},'*'));await tick(2200,true);
    const solitaire=await frame.evaluate(()=>({show:document.getElementById('errorLayer').classList.contains('show'),clones:document.querySelectorAll('.solitaireClone').length}));check('legacy-fanout-Solitaire',solitaire.show&&solitaire.clones>0,{actual:solitaire,scope:'explicit iframe message, not current slide route'});await snap('legacy-solitaire-fanout');
    await frame.evaluate(()=>window.postMessage({type:'backFanout'},'*'));await tick(2000,true);check('legacy-Solitaire-stop',await frame.evaluate(()=>!document.getElementById('errorLayer').classList.contains('show')&&document.querySelectorAll('.solitaireClone').length===0));
    await frame.evaluate(()=>window.postMessage({type:'reset'},'*'));await tick(500,true);check('iframe-chat-reset',await frame.evaluate(()=>!document.getElementById('wrap').classList.contains('show')));
   }
  }
  // postMessage navigation and glow are tested independently from keyboard.
  await jump(4);await page.evaluate(()=>window.postMessage({type:'next'},'*'));await tick(6000);await assertSlide(5,'message-next');await page.evaluate(()=>window.postMessage({type:'prev'},'*'));await tick(6000);await assertSlide(4,'message-prev');
  await page.evaluate(()=>window.postMessage({type:'glowTypingStart'},'*'));await tick(50);check('glow-typing-start',await page.locator('#glow').evaluate(e=>e.classList.contains('typing')));await snap('global-glow-typing');await page.evaluate(()=>window.postMessage({type:'glowTypingEnd'},'*'));await tick(50);check('glow-typing-stop',!(await page.locator('#glow').evaluate(e=>e.classList.contains('typing'))));
  const glow=await page.locator('#glow').evaluate(e=>{const s=getComputedStyle(e);return {zIndex:Number(s.zIndex),pointerEvents:s.pointerEvents,visibility:s.visibility,parent:e.parentElement?.id};});check('glow-overlay',glow.zIndex>=9999&&glow.pointerEvents==='none'&&glow.visibility==='visible',{actual:glow});
  await jump(39);await page.keyboard.press('Enter');await tick(6000);await assertSlide(39,'end-stops');
  // Check historical hash shortcut in a separate page; retain the observed failure.
  if(selection.slides.includes(10)){const legacy=await context.newPage();legacy.on('pageerror',e=>report.errors.push('legacy: '+e.message));await legacy.clock.install({time:new Date(report.configuration.clock)});await legacy.clock.pauseAt(new Date(Date.parse(report.configuration.clock)+1000));await legacy.goto(url+'#stage9');await legacy.clock.runFor(25000);const legacyState=await legacy.evaluate(()=>window.__presentationStage);check('historical-hash-stage9',legacyState===9,{actual:legacyState,expected:9,scope:'legacy shortcut, outside current deck'});await legacy.close();}
 }
 report.messages=[];for(const frame of page.frames())report.messages.push({frame:frame.name()||'main',messages:await frame.evaluate(()=>globalThis.__regressionMessages||[])});
 if(full&&selection.slides.includes(10)){
 const fighter=report.messages.find(f=>f.frame==='v8FighterIntro'),chat=report.messages.find(f=>f.frame==='v8FullChatWebsite');
 check('fighter-replay-message',fighter?.messages.some(m=>m.type==='replay-fighter'));
 check('chat-message-protocol',['start','compose','v8forget','reset','fanout','backFanout'].every(type=>chat?.messages.some(m=>m.type===type)));
 }
 check('no-JavaScript-errors',!report.errors.length,{errors:report.errors});check('no-console-errors',!report.consoleErrors.length,{errors:report.consoleErrors});check('no-external-requests',!report.requests.length,{requests:report.requests});check('no-request-failures',!report.failedRequests.length,{requests:report.failedRequests});
}catch(e){check('runner-error',false,{error:e.stack});}finally{if(browser)await browser.close();save();}
console.log(JSON.stringify({run:runName,counts:report.counts,durationSeconds:report.durationSeconds,report:path.join(dir,'report.json')}));process.exitCode=report.checks.some(c=>c.status==='fail')?1:report.checks.some(c=>c.status==='pending')?2:0;
