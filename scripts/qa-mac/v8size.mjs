import {launch,sleep} from './cdp.mjs';import fs from 'node:fs';
const [,,file,profile,out,resize='1']=process.argv;const s=await launch({headless:true,profile});
await s.send('Emulation.setDeviceMetricsOverride',{width:1280,height:760,deviceScaleFactor:1,mobile:false});
await s.send('Page.navigate',{url:'file://'+file});await sleep(3500);
if(resize==='1'){await s.send('Emulation.setDeviceMetricsOverride',{width:1920,height:1080,deviceScaleFactor:1,mobile:false});await sleep(800);}
await s.evaluate('window.__deckJump(12)');await sleep(1500);
const key=async()=>{const b={key:'PageDown',code:'PageDown',windowsVirtualKeyCode:34,nativeVirtualKeyCode:34};await s.send('Input.dispatchKeyEvent',{type:'keyDown',...b});await s.send('Input.dispatchKeyEvent',{type:'keyUp',...b});};
await key();await sleep(1800);await key();await sleep(2500);
const r=await s.send('Page.captureScreenshot',{format:'jpeg',quality:60});fs.writeFileSync(out,Buffer.from(r.data,'base64'));
console.log(await s.evaluate(`(()=>{const f=document.getElementById('v8FighterIntro');return 'counter '+document.querySelector('#presenterCounter').textContent+' iframe '+f.clientWidth+'x'+f.clientHeight+' inner '+f.contentWindow.innerWidth+'x'+f.contentWindow.innerHeight})()`));
s.close();process.exit(0);
