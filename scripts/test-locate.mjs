import assert from 'node:assert/strict';
import {execFileSync,spawnSync} from 'node:child_process';
import {index,read,rules} from './source-index.mjs';
const data=index(),main=read('src/scripts/01-main-player.js');
const sequence=main.match(/const PDF_SLIDE_SEQUENCE=\[([^\]]+)\]/)[1].split(',').map(Number);
assert.deepEqual(data.slides.slice(9).map(s=>s.id),sequence.map(n=>'pdfSlide'+n));
for(let n=1;n<=9;n++){
 const match=main.match(new RegExp('(?:if|else if)\\(n==='+n+'\\)(?:\\{)?stage=([.0-9]+)'));
 assert.ok(match,'stage branch '+n);assert.equal(Number(data.slides[n-1].stage),Number(match[1]));
}
assert.equal(data.slides[3].id,'figmaSlide5');assert.equal(data.slides[3].document_index,5);
assert.equal(data.slides[4].id,'figmaSlide4');assert.equal(data.slides[4].document_index,4);
assert.equal(new Set(data.slides.map(s=>s.id)).size,39);
const jump=main.slice(main.indexOf('window.__deckJump ='));
for(const d of data.slides){
 const section=read(d.path).match(/<section\b[^>]*\bid="([^"]+)"/);assert.equal(section?.[1],d.id);
 if(d.slide>=2&&d.slide<=9){const branch=jump.match(new RegExp('else if\\(n==='+d.slide+'\\)\\{([^}]+)'));if(d.slide===6){assert.ok(branch?.[1].includes('playAgentTimeline()'));assert.ok(main.includes("function playAgentTimeline(){const s6=document.getElementById('figmaSlide6')"));}else assert.ok(branch?.[1].includes("get('"+d.id+"')"),'jump DOM id '+d.slide);}
}
for(const r of data.css){assert.ok(r.start>=1&&r.end>=r.start);assert.ok(r.end<=read(r.file).split('\n').length);}
const fixture=rules('/* x */\n@media (x) {\n.a{color:red}\n}\n.a{color:blue}', 'fixture',1);
assert.equal(fixture.length,2);assert.equal(fixture[0].context,'@media (x)');assert.equal(fixture[0].start,3);assert.equal(fixture[1].start,5);
for(const n of [1,4,5,7,10,30,39]){
 const out=execFileSync(process.execPath,['scripts/locate.mjs',String(n)],{encoding:'utf8'});
 assert.ok(out.includes(data.slides[n-1].path));assert.ok(out.includes('CSS-переопределения'));assert.ok(out.includes('таймеры'));assert.ok(!out.includes('base64,'));assert.ok(out.length<20000);
 if(n===10){assert.ok(out.includes('v8FighterIntro'));assert.ok(out.includes('v8FullChatWebsite'));assert.ok(out.includes('05-v8-fullsite-parent-runtime'));}
 if(n===30){assert.ok(out.includes('40-storytelling-fix-tools-grid.css'));assert.ok(out.includes('41-storytelling-motion-final.css'));assert.ok(out.includes('pdfDeckIndex=20'));assert.ok(!out.includes('04-cinematic-title-measure'));}
 console.log('locate',n,'OK',out.length,'characters');
}
assert.notEqual(spawnSync(process.execPath,['scripts/locate.mjs','0']).status,0);
assert.notEqual(spawnSync(process.execPath,['scripts/locate.mjs','40']).status,0);
console.log('Order, stages, CSS ranges, iframe dependencies, invalid input: OK');
