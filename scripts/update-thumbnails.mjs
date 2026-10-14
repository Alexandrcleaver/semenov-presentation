import fs from 'node:fs';import path from 'node:path';import crypto from 'node:crypto';import {pathToFileURL} from 'node:url';
import {dependency,browserPath} from './regression/runtime.mjs';import {prepareCapture,restoreCapture} from './regression/visual.mjs';
const root=path.resolve('.'),shellPath='src/shell.html',shell=fs.readFileSync(shellPath,'utf8'),assets=JSON.parse(fs.readFileSync('src/assets.json','utf8'));
const bindings=[...shell.matchAll(/<img\b[^>]*\bdata-index="(\d+)"[^>]*\bsrc="(@@EMBED_ASSET_\d+@@)"[^>]*>/g)].map(m=>({slide:Number(m[1]),token:m[2]}));if(bindings.length!==39)throw Error('Expected 39 gallery thumbnails');
const browser=await dependency('playwright').chromium.launch({headless:true,executablePath:browserPath()}),context=await browser.newContext({viewport:{width:1920,height:1080},deviceScaleFactor:1,locale:'ru-RU',timezoneId:'Europe/Moscow',offline:true}),page=await context.newPage(),sharp=dependency('sharp');
try{
 await page.clock.install({time:new Date('2026-10-14T09:00:00Z')});await page.clock.pauseAt(new Date('2026-10-14T09:00:01Z'));
 await page.goto(pathToFileURL(path.join(root,'dist/presentation.html')).href);await page.evaluate(()=>document.fonts.ready);
 await page.addStyleTag({content:'#presenterBar,#presenterDrawer,#debugGlow,#prev,#forward{visibility:hidden!important;}'});
 for(const binding of bindings){
  await page.evaluate(n=>window.__deckJump(n),binding.slide);await page.clock.fastForward(8000);
  await prepareCapture(page,'settled');let buffer;try{buffer=await page.screenshot({animations:'disabled',type:'png'});}finally{await restoreCapture(page);}
  const webp=await sharp(buffer).resize(480,270).webp({quality:82}).toBuffer(),sha=crypto.createHash('sha256').update(webp).digest('hex'),assetPath='src/assets/'+sha.slice(0,24)+'.webp';
  fs.writeFileSync(assetPath,webp);const asset=assets.find(a=>a.token===binding.token);if(!asset)throw Error('Thumbnail asset missing');Object.assign(asset,{path:assetPath,mime:'image/webp',sha256:sha,bytes:webp.length});
 }
 fs.writeFileSync('src/assets.json',JSON.stringify(assets,null,2)+'\n');console.log('Updated gallery thumbnails: 39 (480x270 WEBP).');
}finally{await browser.close();}
