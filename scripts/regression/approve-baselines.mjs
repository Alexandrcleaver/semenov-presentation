import fs from 'node:fs';import path from 'node:path';import crypto from 'node:crypto';
import {root} from '../source-index.mjs';
const filename=process.argv[2];if(!filename)throw Error('Usage: approve-baselines.mjs <explicit-review.json> [--replace-reviewed]');
const review=JSON.parse(fs.readFileSync(filename,'utf8'));if(!review.reviewer||!review.run||!Array.isArray(review.files)||!review.files.length)throw Error('Review must identify reviewer, run and per-file decisions');
if(!/^[\w.-]+$/.test(review.run))throw Error('Unsafe run name');
const candidate=path.join(root,'regression/runs',review.run),report=JSON.parse(fs.readFileSync(path.join(candidate,'report.json'))),directory=path.join(root,'regression/baselines');
fs.mkdirSync(directory,{recursive:true});const manifestPath=path.join(directory,'manifest.json'),old=fs.existsSync(manifestPath)?JSON.parse(fs.readFileSync(manifestPath)):null;
if(old&&(old.browserVersion!==report.configuration.browserVersion||old.profile!==report.configuration.profile))throw Error('Baseline profile differs. Use a separately reviewed profile; do not mix configurations.');
const manifest=old||{browserVersion:report.configuration.browserVersion,profile:report.configuration.profile,configuration:report.configuration,htmlSha256:report.htmlSha256,files:{},reviews:[]};
const sha=b=>crypto.createHash('sha256').update(b).digest('hex'),approved=review.files.filter(f=>f.decision==='approve');
// Preflight the entire transaction before writing any baseline.
for(const item of approved){if(!/^[\w-]+$/.test(item.name)||!report.screenshots.includes(item.name)||!item.note)throw Error('Invalid/unreviewed name '+item.name);const bytes=fs.readFileSync(path.join(candidate,item.name+'.png'));if(item.sha256!==sha(bytes))throw Error('Candidate changed after review: '+item.name);const previous=manifest.files[item.name];if(previous&&previous!==item.sha256&&!process.argv.includes('--replace-reviewed'))throw Error('Existing baseline differs: explicit --replace-reviewed required.');}
for(const item of approved){const target=path.join(directory,item.name+'.png');if(fs.existsSync(target)&&manifest.files[item.name]!==item.sha256){const history=path.join(directory,'history',new Date().toISOString().replace(/[:.]/g,'-'));fs.mkdirSync(history,{recursive:true});fs.copyFileSync(target,path.join(history,item.name+'.png'));}fs.copyFileSync(path.join(candidate,item.name+'.png'),target);manifest.files[item.name]=item.sha256;}
manifest.reviews.push({reviewer:review.reviewer,run:review.run,date:new Date().toISOString(),files:review.files});fs.writeFileSync(manifestPath,JSON.stringify(manifest,null,2));console.log('Explicitly reviewed baselines:',approved.length,'; deferred:',review.files.length-approved.length);
