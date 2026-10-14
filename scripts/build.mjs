#!/usr/bin/env node
// Build one self-contained HTML while preserving the exact original order.
// The project starts as a lossless extraction of the reference presentation.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = p => fs.readFileSync(path.join(root, p), 'utf8');
const parts = JSON.parse(read('src/parts.json'));
const assets = JSON.parse(read('src/assets.json'));
const expected = JSON.parse(read('src/reference.json'));
let html = read('src/shell.html');
for (const part of parts) {
  const content = read(part.path);
  const replacement = part.kind === 'slide' ? content : `${part.opening}${content}${part.closing}`;
  if (!html.includes(part.token)) throw Error(`Missing code slot: ${part.token}`);
  html = html.replace(part.token, () => replacement);
}
for (const asset of assets) {
  const buf = fs.readFileSync(path.join(root, asset.path));
  const hash = crypto.createHash('sha256').update(buf).digest('hex');
  if (hash !== asset.sha256) throw Error(`Asset checksum mismatch: ${asset.path}`);
  const url = `data:${asset.mime};base64,${buf.toString('base64')}`;
  if (!html.includes(asset.token)) throw Error(`Missing asset slot: ${asset.token}`);
  html = html.replaceAll(asset.token, () => url);
}
if (/@@(?:CODE_PART|EMBED_ASSET)_\d+@@/.test(html)) throw Error('Unresolved part/asset placeholder');
const out = path.join(root,'dist','presentation.html');
fs.mkdirSync(path.dirname(out), {recursive:true});
fs.writeFileSync(out, html, 'utf8');
const buffer=fs.readFileSync(out);
const sha=crypto.createHash('sha256').update(buffer).digest('hex');
const match=sha===expected.sha256 && buffer.length===expected.bytes;
console.log(`Built: ${path.relative(root,out)} (${buffer.length} bytes, SHA-256: ${sha})`);
console.log(`Reference parity: ${match?'MATCH (byte-for-byte)':'CHANGED (expected after editing)'}`);
if (process.argv.includes('--verify-reference') && !match) process.exitCode=1;
