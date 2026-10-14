import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
export const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
export const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const json=p=>JSON.parse(read('src/'+p+'.json'));
const line=(s,i)=>1+(s.slice(0,i).match(/\n/g)||[]).length;
const clean=s=>s.replace(/\/\*[\s\S]*?\*\/|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`/g,m=>m.replace(/[^\n]/g,' '));
export function rules(s,file,order){
 const c=clean(s),out=[];
 function walk(start,end,context=''){
 let cursor=start;
 while(cursor<end){const open=c.indexOf('{',cursor);if(open<0||open>=end)break;
 let depth=1,i=open+1;while(i<end&&depth){if(c[i]==='{')depth++;if(c[i]==='}')depth--;i++;}
 let begin=cursor;while(begin<open&&/\s/.test(c[begin]))begin++;
 const selector=s.slice(begin,open).replace(/\/\*[\s\S]*?\*\//g,'').trim();
 if(/^@(media|supports|layer|container)\b/.test(selector))walk(open+1,i-1,context+' '+selector);
 else if(selector)out.push({file,order,selector,context:context.trim(),start:line(s,begin),end:line(s,i-1),body:s.slice(open+1,i-1)});
 cursor=i;}}
 walk(0,c.length);return out;
}
function js(s,file){
 const c=clean(s).replace(/\/\/[^\n]*/g,m=>' '.repeat(m.length)),functions=[];
 for(const re of [/\bfunction\s+([\w$]+)\s*\([^)]*\)\s*\{/g,/((?:window\.)?[\w$]+)\s*=\s*(?:function\s*\([^)]*\)|\([^)]*\)\s*=>|[\w$]+\s*=>)\s*\{/g])for(const m of c.matchAll(re)){
 const open=c.indexOf('{',m.index);let i=open+1,d=1;while(i<c.length&&d){if(c[i]==='{')d++;if(c[i]==='}')d--;i++;}functions.push({name:m[1],start:line(s,m.index),end:line(s,i-1)});}
 const occurrences=re=>[...s.matchAll(re)].map(m=>({name:m[1]||m[2]||m[0],line:line(s,m.index)}));
 return {file,source:s,functions,events:occurrences(/(?:addEventListener\(\s*['"]([^'"]+)['"]|\.(onclick|onload)\s*=)/g),timers:occurrences(/\b(setTimeout|setInterval|requestAnimationFrame|clearTimeout)\s*\(/g),observers:occurrences(/new (MutationObserver)/g),messages:occurrences(/(?:postMessage\(|type\s*:\s*['"]([^'"]+)['"])/g)};
}
const decode=s=>s.replace(/&quot;/g,'"').replace(/&#39;|&apos;/g,"'").replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
function splitSelectors(s){let depth=0,start=0,out=[];for(let i=0;i<s.length;i++){if(s[i]==='('||s[i]==='[')depth++;if(s[i]===')'||s[i]===']')depth--;if(s[i]===','&&depth===0){out.push(s.slice(start,i));start=i+1;}}out.push(s.slice(start));return out;}
function candidate(sel,ids,classes){
 const dynamic=new Set(['show','out','in','assemble','focus-docs','manual','play','cover-off','typing','boost','fade','moved','figma-movie-ready','is-active','active','visible']);
 sel=sel.replace(/:not\(([^()]*)\)/g,'');
 let impossible=false;
 sel=sel.replace(/:(?:is|where)\(([^()]*)\)/g,(_,options)=>{if(!splitSelectors(options).some(o=>candidate(o,ids,classes)))impossible=true;return '';});
 if(impossible)return false;
 const id=[...sel.matchAll(/#([\w-]+)/g)].map(m=>m[1]);if(id.some(x=>!ids.has(x)))return false;
 const cls=[...sel.matchAll(/\.([a-zA-Z_][\w-]*)/g)].map(m=>m[1]);
 if(cls.some(x=>!classes.has(x)&&!dynamic.has(x)))return false;
 return id.length>0||cls.some(x=>classes.has(x))||/(^|[\s>+~])(?:html|body|\*)(?=[\s:.#>+~]|$)/.test(sel);
}
export function index(){
 const deck=json('deck_order'),css=json('styles').flatMap((x,i)=>rules(read(x.path),x.path,i+1)),scripts=json('scripts').map(x=>js(read(x.path),x.path)),assets=json('assets');
 const stages=['0','.5','.75','.85','.9','.95','.96','.965','.97'];
 const slides=deck.map((d,i)=>{
 const source=read(d.path),iframes=[...source.matchAll(/<iframe\b([^>]*?)\bsrcdoc="([^"]*)"/g)].map(m=>({id:m[1].match(/id="([^"]+)"/)?.[1]||'не установлена',start:line(source,m.index),end:line(source,m.index+m[0].length),source:decode(m[2])}));
 let parent=source.replace(/\bsrcdoc="[^"]*"/g,'');if(i===2)parent+=read(deck[1].path);
 const ids=new Set([...parent.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1])),classes=new Set([...parent.matchAll(/\bclass="([^"]+)"/g)].flatMap(m=>m[1].split(/\s+/)));
 for(const j of scripts.filter(j=>!/(01-main-player|02-stage-debug|06-presenter-ui)/.test(j.file)&&[...ids].some(id=>j.source.includes("'"+id+"'"))))for(const m of j.source.matchAll(/['"]((?:v8-|figma-movie-)[\w-]+)['"]/g))classes.add(m[1]);
 const relevant=css.filter(r=>!r.selector.startsWith('@keyframes')&&(r.selector.startsWith('@font-face')||splitSelectors(r.selector).some(sel=>candidate(sel,ids,classes))));
 const animationText=relevant.map(r=>r.body).join('\n');
 for(const r of css.filter(r=>r.selector.startsWith('@keyframes'))){const name=r.selector.split(/\s+/)[1];if(name&&new RegExp('\\b'+name+'\\b').test(animationText))relevant.push(r);}
 relevant.sort((a,b)=>a.order-b.order||a.start-b.start);
 const local=scripts.filter(j=>!/(01-main-player|02-stage-debug|06-presenter-ui)/.test(j.file)&&[...ids].some(id=>j.source.includes("'"+id+"'")||j.source.includes('"'+id+'"')));
 if(/^pdfSlide/.test(d.id)&&Number(d.id.slice(8))>=8&&Number(d.id.slice(8))<=22&&!local.some(j=>j.file.includes('04-cinematic')))local.push(scripts.find(j=>j.file.includes('04-cinematic')));
 const tokens=s=>new Set([...s.matchAll(/@@EMBED_ASSET_\d+@@/g)].map(m=>m[0])),own=tokens(source),ct=tokens(relevant.map(r=>r.body).join('\n'));
 return {...d,source,stage:stages[i]||'.98',pdfIndex:i>=9?i-9:null,steps:i===5?'agentTimelineStep 0..8; галерея начинает с 8':i===7?'aistEvolutionStep 0..6':i===9?'__v8ClickStep 0..10':'нет подтверждённых внутренних шагов',css:relevant,js:local,iframes,assets:assets.filter(a=>own.has(a.token)),cssAssets:assets.filter(a=>ct.has(a.token))};
 });return {slides,css,js:scripts};
}
export function ranges(rules){const out=[];for(const r of rules.map(r=>[r.start,r.end]).sort((a,b)=>a[0]-b[0])){const last=out.at(-1);if(last&&r[0]<=last[1]+1)last[1]=Math.max(last[1],r[1]);else out.push([...r]);}return out.map(([a,b])=>a===b?String(a):`${a}-${b}`).join(',');}
export const groups=s=>[...new Set(s.css.map(r=>r.file))].map(file=>({file,rules:s.css.filter(r=>r.file===file)}));
export function duplicates(rules){const map=new Map();for(const r of rules){if(r.selector.startsWith('@'))continue;for(const selector of splitSelectors(r.selector)){const key=r.context+'|'+selector.trim().replace(/\s+/g,' ');if(!map.has(key))map.set(key,[]);map.get(key).push({...r,selector:selector.trim()});}}return [...map.values()].filter(a=>a.length>1);}
export const globals='src/scripts/01-main-player.js (fit, advance, back, showPdfSlideByIndex, hidePdfSlides, __deckJump); src/scripts/02-stage-debug.js; src/scripts/06-presenter-ui-script.js (getCurrent, refresh, галерея, fullscreen); src/shell.html (glow, навигация, presenterDrawer).';
