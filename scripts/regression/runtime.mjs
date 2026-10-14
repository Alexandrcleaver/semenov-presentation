import {createRequire} from 'node:module';
import path from 'node:path';
const locations=[process.env.REGRESSION_MODULES,path.join(process.env.USERPROFILE||'','.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules')].filter(Boolean);
export function dependency(name){try{return createRequire(import.meta.url)(name);}catch{}for(const directory of locations){try{return createRequire(path.join(directory,'__regression__.cjs'))(name);}catch{}}throw Error(`Dependency ${name} unavailable. Set REGRESSION_MODULES to existing bundled node_modules; see docs/REGRESSION_PLAN.md. No automatic installation.`);}
export function browserPath(){return process.env.REGRESSION_BROWSER||'C:/Program Files/Google/Chrome/Application/chrome.exe';}
