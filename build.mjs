// Optional local static-output copy. Pages serves the repository root directly.
import fs from 'node:fs';
import path from 'node:path';
const root=process.cwd(),out=path.join(root,'dist');
const roots=['index.html','404.html','favicon.svg','_astro','works','help','terms','resources','previews','01-orvein','02-selquen-studio','03-yonagisha','04-neriqua','05-lisqe-atelier','06-arqo-movement','07-asanagi-roastery','08-sumika','09-forme-lab','10-senqari-objects'];
function copy(from,to){const info=fs.lstatSync(from);if(info.isSymbolicLink())throw new Error('Symlinks are not published');if(info.isDirectory()){fs.mkdirSync(to,{recursive:true});for(const name of fs.readdirSync(from))copy(path.join(from,name),path.join(to,name));}else if(info.isFile()){fs.mkdirSync(path.dirname(to),{recursive:true});fs.copyFileSync(from,to);}else throw new Error('Unexpected file type');}
for(const name of roots)if(fs.existsSync(path.join(root,name)))copy(path.join(root,name),path.join(out,name));
console.log('Static files copied to dist; existing unrelated files were not deleted.');
