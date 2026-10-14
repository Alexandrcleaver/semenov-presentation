import assert from 'node:assert/strict';import fs from 'node:fs';import os from 'node:os';import path from 'node:path';
import {dependency} from './runtime.mjs';import {comparePNG} from './visual.mjs';import {select} from './selection.mjs';
assert.deepEqual(select(['--slide=30']).slides,[29,30,31]);assert.ok(select(['--slide=2']).slides.includes(3));assert.equal(select(['--changed=src/scripts/01-main-player.js']).slides.length,39);assert.equal(select(['--changed=not-known']).slides.length,39);
const css=select(['--changed=src/styles/40-storytelling-fix-tools-grid.css']);assert.ok(css.slides.includes(30));assert.ok(css.slides.includes(29)&&css.slides.includes(31));
const {PNG}=dependency('pngjs'),png=new PNG({width:20,height:20});png.data.fill(255);const original=PNG.sync.write(png),temp=fs.mkdtempSync(path.join(os.tmpdir(),'semenov-regression-'));const diff=path.join(temp,'diff.png');
assert.equal(comparePNG(original,original,diff).pass,true);png.data.fill(0);assert.equal(comparePNG(PNG.sync.write(png),original,diff).pass,false);assert.ok(fs.existsSync(diff));
// Only remove the exact two test files and directory created above.
fs.unlinkSync(diff);fs.rmdirSync(temp);
const canvas=new PNG({width:200,height:100});canvas.data.fill(255);
for(let y=20;y<80;y++)for(let x=30;x<100;x++){const i=(y*canvas.width+x)*4;canvas.data[i]=canvas.data[i+1]=canvas.data[i+2]=0;}
const block=PNG.sync.write(canvas),empty=new PNG({width:200,height:100});empty.data.fill(255);assert.equal(comparePNG(PNG.sync.write(empty),block,path.join(temp+'-missing.png')).pass,false);
const shifted=new PNG({width:200,height:100});shifted.data.fill(255);for(let y=20;y<80;y++)for(let x=36;x<106;x++){const i=(y*shifted.width+x)*4;shifted.data[i]=shifted.data[i+1]=shifted.data[i+2]=0;}assert.equal(comparePNG(PNG.sync.write(shifted),block,path.join(temp+'-shift.png')).pass,false);
fs.unlinkSync(temp+'-missing.png');fs.unlinkSync(temp+'-shift.png');
console.log('Selective scope, conservative fallback, identical and changed PNG comparisons: OK');
