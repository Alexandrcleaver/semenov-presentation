import {index} from '../source-index.mjs';
export function select(args,data=index()){
 const slideArg=args.find(a=>a.startsWith('--slide=')),changed=args.filter(a=>a.startsWith('--changed=')).map(a=>a.slice(10).replaceAll('\\','/'));
 const selected=new Set();const all=()=>data.slides.forEach(s=>selected.add(s.slide));
 if(!slideArg&&!changed.length)all();
 if(slideArg){const n=Number(slideArg.split('=')[1]);if(!Number.isInteger(n)||n<1||n>39)throw Error('slide must be 1..39');selected.add(n);}
 const reasons=[];
 for(const file of changed){
  if(/(?:shell\.html|deck_order\.json|parts\.json|01-main-player|02-stage-debug|06-presenter-ui|01-base-global|0[2-6]-glow|08-cover-fonts|19-presenter-ui|42-debug-panel)/.test(file)){all();reasons.push(file+': global');continue;}
  const affected=data.slides.filter(s=>s.path===file||s.css.some(r=>r.file===file)||s.js.some(j=>j.file===file)||[...s.assets,...s.cssAssets].some(a=>a.path===file));
  if(!affected.length){all();reasons.push(file+': relationship unknown, conservative all');}else{affected.forEach(s=>selected.add(s.slide));reasons.push(file+': static dependencies (conservative file scope)');}
 }
 for(const pair of [[2,3],[8,9],[9,10]])if(pair.some(n=>selected.has(n)))pair.forEach(n=>selected.add(n));
 const direct=[...selected];for(const n of direct){if(n>1)selected.add(n-1);if(n<39)selected.add(n+1);}
 return {slides:[...selected].sort((a,b)=>a-b),reasons:reasons.length?reasons:[slideArg?'HTML-only slide + linked slides + transition neighbours':'all slides'],data};
}
