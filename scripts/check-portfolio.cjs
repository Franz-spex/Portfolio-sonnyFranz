const fs=require('fs'),path=require('path'),assert=require('assert');const root=path.resolve(__dirname,'../dist');
const projects=JSON.parse(fs.readFileSync(path.join(root,'projects.json'),'utf8'));
const expected=JSON.parse(fs.readFileSync(path.resolve(__dirname,'../content/portfolio-import-config.json'))).length+JSON.parse(fs.readFileSync(path.resolve(__dirname,'../content/reference-projects.json'))).length;assert.equal(projects.length,expected);assert.equal(new Set(projects.map(p=>p.id)).size,expected);
for(const p of projects){assert(fs.existsSync(path.join(root,'work-'+p.slug+'.html')));assert(fs.existsSync(path.join(root,p.coverSrc)),p.title);for(const n of p.selected||[])assert(fs.existsSync(path.join(root,`assets/projects/${p.id}/page-${n}.jpg`)),p.title+' page '+n);}
const crypto=require('crypto'),illustrations=[...projects.map(p=>p.slug),'photo-portrait-stories','photo-product-studies','photo-everyday-details'];
const hashes=illustrations.map(slug=>{const file=path.join(root,'assets/project-illustrations',slug+'.png');assert(fs.existsSync(file),'Missing unique illustration: '+slug);return crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');});
assert.equal(new Set(hashes).size,illustrations.length,'Project illustrations must not reuse identical images');
let checked=0;
for(const file of fs.readdirSync(root).filter(f=>f.endsWith('.html'))){const html=fs.readFileSync(path.join(root,file),'utf8');for(const match of html.matchAll(/(?:src|href)="([^\"]+)"/g)){const url=match[1];if(/^(?:https?:|data:|mailto:|tel:|#)/.test(url))continue;const target=url.split(/[?#]/)[0];assert(fs.existsSync(path.join(root,target)),file+' missing '+target);checked++;}}
console.log(`Verified ${projects.length} projects, ${illustrations.length} unique illustrations, all preview images, and ${checked} local references.`);
