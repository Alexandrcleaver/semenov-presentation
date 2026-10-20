// Проход пультом (PageDown) по всей презентации в локальном Chrome: номера слайдов, JS-ошибки, PageUp/ArrowDown, отсутствие перезагрузки.
// Запуск: node scripts/qa-mac/walk.mjs dist/presentation.html /tmp/qa-profile
import {launch,sleep} from './cdp.mjs';import path from 'node:path';
const [,,file,profile='/tmp/qa-walk-profile']=process.argv;
const K={PageDown:34,PageUp:33,ArrowDown:40,Digit3:51,KeyR:82};
async function press(s,k){const key=k==='Digit3'?'3':k==='KeyR'?'r':k;const b={key,code:k,windowsVirtualKeyCode:K[k],nativeVirtualKeyCode:K[k]};await s.send('Input.dispatchKeyEvent',{type:'keyDown',...b});await s.send('Input.dispatchKeyEvent',{type:'keyUp',...b});}
const s=await launch({headless:true,profile});await s.send('Runtime.enable');
const errs=[];s.on('Runtime.exceptionThrown',p=>errs.push(p.exceptionDetails.text));
await s.send('Emulation.setDeviceMetricsOverride',{width:1920,height:1080,deviceScaleFactor:1,mobile:false});
await s.send('Page.navigate',{url:'file://'+path.resolve(file)});await sleep(4000);
const st=()=>s.evaluate('document.querySelector("#presenterCounter")?.textContent||""');
const seen=new Set();let same=0;
for(let i=0;i<120;i++){const c=await st();seen.add(c);if(/^(\d+) \/ \1$/.test(c)){if(++same>=2)break}await press(s,'PageDown');await sleep(i<2?5200:2400);}
const last=await st();await press(s,'PageUp');await sleep(1500);const up=await st();await press(s,'ArrowDown');await sleep(1500);const down=await st();
const t0=await s.evaluate('performance.timeOrigin');await press(s,'Digit3');await sleep(1200);await press(s,'KeyR');await sleep(1200);const reloaded=(await s.evaluate('performance.timeOrigin'))!==t0;
const total=Number(last.split('/')[1]);const all=[...Array(total)].every((_,i)=>[...seen].some(x=>x.startsWith(String(i+1).padStart(2,'0')+' /')));
console.log(JSON.stringify({total,всеСлайды:all,последний:last,PageUp:up,ArrowDown:down,перезагрузка:reloaded,ошибки:errs},null,1));
s.close();process.exit(errs.length||!all||reloaded?1:0);
