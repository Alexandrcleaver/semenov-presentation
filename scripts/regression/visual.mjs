import fs from 'node:fs';import path from 'node:path';import crypto from 'node:crypto';
import {dependency} from './runtime.mjs';
async function bounded(promise,ms,label){let timer;try{return await Promise.race([promise,new Promise((_,reject)=>{timer=setTimeout(()=>reject(Error(label)),ms);})]);}finally{clearTimeout(timer);}}
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');
export async function prepareCapture(page,phase){
 for(const frame of page.frames()){
 await bounded(frame.evaluate(async()=>{
 const active=v=>{const r=v.getBoundingClientRect();return r.width>0&&r.height>0&&getComputedStyle(v).visibility!=='hidden'&&(v.getAttribute('src')||v.querySelector('source[src]'));};
 await Promise.all([...document.querySelectorAll('video')].filter(active).map(v=>v.readyState>=2?Promise.resolve():new Promise((resolve,reject)=>{const done=()=>{if(v.readyState>=2)resolve();};for(const event of ['loadeddata','canplay','seeked'])v.addEventListener(event,done,{once:true});v.addEventListener('error',()=>reject(Error('video failed before snapshot')),{once:true});})));
 }),10000,'snapshot video readiness timeout');
 await bounded(frame.evaluate(async phase=>{
  const animations=document.getAnimations();globalThis.__regressionSnapshot={animations:animations.map(a=>[a,a.currentTime,a.playState]),svg:[...document.querySelectorAll('svg')].filter(s=>s.pauseAnimations).map(s=>[s,s.getCurrentTime()]),videos:[...document.querySelectorAll('video')].filter(v=>{const r=v.getBoundingClientRect();return r.width>0&&r.height>0&&getComputedStyle(v).visibility!=='hidden'&&v.readyState>=2;}).map(v=>[v,v.currentTime,v.paused])};
  for(const a of animations){try{const effect=a.effect.getComputedTiming();a.pause();a.currentTime=phase==='mid'?350:Number.isFinite(effect.endTime)?effect.endTime:0;}catch{}}
  for(const [s] of globalThis.__regressionSnapshot.svg){s.pauseAnimations();s.setCurrentTime(0);}
  await Promise.all(globalThis.__regressionSnapshot.videos.map(async([v])=>{v.pause();const target=Math.min(.5,v.duration/2);if(Math.abs(v.currentTime-target)<.001&&!v.seeking)return;await new Promise(resolve=>{v.addEventListener('seeked',resolve,{once:true});v.currentTime=target;});}));
 },phase),10000,'snapshot seek timeout');
 }
}
export async function restoreCapture(page){for(const frame of page.frames())await frame.evaluate(()=>{const s=globalThis.__regressionSnapshot;if(!s)return;for(const[a,time,state]of s.animations){try{a.currentTime=time;if(state==='running')a.play();}catch{}}for(const[svg,time]of s.svg){svg.setCurrentTime(time);svg.unpauseAnimations();}for(const[v,time,paused]of s.videos){try{v.currentTime=time;if(!paused)v.play().catch(()=>{});}catch{}}delete globalThis.__regressionSnapshot;});}
export function comparePNG(actual,baseline,diffPath){
 const {PNG}=dependency('pngjs'),module=dependency('pixelmatch'),pixelmatch=module.default||module,a=PNG.sync.read(actual),b=PNG.sync.read(baseline);
 if(a.width!==b.width||a.height!==b.height)return {pass:false,reason:'dimension mismatch'};
 const diff=new PNG({width:a.width,height:a.height});const raw=pixelmatch(a.data,b.data,diff.data,a.width,a.height,{threshold:.1,includeAA:false,diffMask:true});
 // Symmetric 1px neighbourhood tolerance for compositor/subpixel rasterization.
 // Both directions are required: missing text cannot match only the background.
 const near=(from,to,x,y)=>{const i=(y*from.width+x)*4;for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++){const nx=x+dx,ny=y+dy;if(nx<0||ny<0||nx>=to.width||ny>=to.height)continue;const j=(ny*to.width+nx)*4;let match=true;for(let c=0;c<4;c++)if(Math.abs(from.data[i+c]-to.data[j+c])>32){match=false;break;}if(match)return true;}return false;};
 let count=0;for(let y=0;y<a.height;y++)for(let x=0;x<a.width;x++){const i=(y*a.width+x)*4;if(diff.data[i+3]&&diff.data[i]===255&&diff.data[i+1]===0){if(!near(a,b,x,y)||!near(b,a,x,y))count++;else diff.data[i+3]=0;}}
 const ratio=count/(a.width*a.height),pass=ratio<=.0015;if(!pass)fs.writeFileSync(diffPath,PNG.sync.write(diff));
 return {pass,changedPixels:count,rawPixelmatchPixels:raw,ratio,threshold:.1,includeAA:false,neighbourhoodPixels:1,neighbourChannelTolerance:32,maxPixelRatio:.0015};
}
export async function screenshot(page,name,directory,baseline,check,config,phase='settled'){
 const target=path.join(directory,name+'.png');await prepareCapture(page,phase);
 try{await page.screenshot({path:target,animations:phase==='mid'?'allow':'disabled',caret:'hide'});}finally{await restoreCapture(page);}
 const expected=path.join(baseline,name+'.png');if(fs.existsSync(expected)){
  const metaPath=path.join(baseline,'manifest.json');const meta=fs.existsSync(metaPath)?JSON.parse(fs.readFileSync(metaPath)):null;
  if(!meta||meta.browserVersion!==config.browserVersion||meta.profile!==config.profile){check('visual:'+name,false,{reason:'baseline browser/profile mismatch'});return;}
  const bytes=fs.readFileSync(expected);if(meta.files?.[name]!==sha(bytes)){check('visual:'+name,false,{reason:'baseline checksum mismatch'});return;}
  check('visual:'+name,comparePNG(fs.readFileSync(target),bytes,path.join(directory,name+'.diff.png')));
  }else{const metaPath=path.join(baseline,'manifest.json'),meta=fs.existsSync(metaPath)?JSON.parse(fs.readFileSync(metaPath)):null;const decision=meta?.reviews?.flatMap(r=>r.files).find(f=>f.name===name&&f.decision==='defer');check('visual:'+name,null,{reason:'baseline not approved; candidate saved',reviewNote:decision?.note});}
}
