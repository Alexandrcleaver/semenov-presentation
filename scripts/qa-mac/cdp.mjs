// Minimal CDP helper: launches local Chrome, returns page session. No external deps.
import {spawn} from 'node:child_process';import fs from 'node:fs';import path from 'node:path';
export async function launch({headless=true, profile, extraArgs=[]}={}) {
  fs.rmSync(profile,{recursive:true,force:true});fs.mkdirSync(profile,{recursive:true});
  const exe='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  const args=[`--user-data-dir=${profile}`,'--remote-debugging-port=0','--no-first-run','--no-default-browser-check','--disable-extensions','--disable-sync','--disable-background-networking','--autoplay-policy=no-user-gesture-required','--window-size=1920,1080','--window-position=0,0',...(headless?['--headless=new']:[]),...extraArgs,'about:blank'];
  const child=spawn(exe,args,{stdio:['ignore','ignore','pipe']});
  const portFile=path.join(profile,'DevToolsActivePort');
  for(let i=0;i<200&&!fs.existsSync(portFile);i++)await new Promise(r=>setTimeout(r,100));
  const port=fs.readFileSync(portFile,'utf8').split('\n')[0];
  const list=await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
  const pageT=list.find(t=>t.type==='page');const ws=new WebSocket(pageT.webSocketDebuggerUrl);
  await new Promise((res,rej)=>{ws.onopen=res;ws.onerror=rej});
  let id=0;const pending=new Map();const listeners=new Map();
  ws.onmessage=ev=>{const m=JSON.parse(ev.data);if(m.id&&pending.has(m.id)){const {res,rej}=pending.get(m.id);pending.delete(m.id);m.error?rej(new Error(JSON.stringify(m.error))):res(m.result)}else if(m.method){for(const f of listeners.get(m.method)||[])f(m.params)}};
  const send=(method,params={})=>new Promise((res,rej)=>{const i=++id;pending.set(i,{res,rej});ws.send(JSON.stringify({id:i,method,params}))});
  const on=(method,f)=>{if(!listeners.has(method))listeners.set(method,[]);listeners.get(method).push(f)};
  const evaluate=async(expr,awaitPromise=true)=>{const r=await send('Runtime.evaluate',{expression:expr,awaitPromise,returnByValue:true});if(r.exceptionDetails)throw new Error(JSON.stringify(r.exceptionDetails).slice(0,500));return r.result.value};
  const close=()=>{try{ws.close()}catch{};try{child.kill('SIGTERM')}catch{}};
  return {send,on,evaluate,close,child};
}
export const sleep=ms=>new Promise(r=>setTimeout(r,ms));
