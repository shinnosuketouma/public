'use strict';
const list=document.querySelector('#revision-list');
const el=(tag,text,className)=>{const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(className)n.className=className;return n};
const safePath=p=>typeof p==='string'&&/^\.\.\/gs-[0-9]{6,}\/v[1-9][0-9]*\/$/.test(p);
const safeLink=u=>{try{const p=new URL(u);return p.protocol==='https:'&&['github.com','motionsites.ai'].includes(p.hostname)}catch{return false}};
fetch('data.json').then(r=>{if(!r.ok)throw Error('記録を取得できませんでした。');return r.json()}).then(data=>{
 document.querySelector('#overall').textContent=data.status;
 list.replaceChildren();
 if(!data.revisions.length)list.append(el('p','初版を制作しています。まだ公開された改版はありません。'));
 const selectors=[document.querySelector('#left-version'),document.querySelector('#right-version')];
 for(const rev of data.revisions){
  if(!safePath(rev.path))throw Error('記録の経路が不正です。');
  const card=el('article',undefined,'revision');card.id=rev.id;
  const top=el('div',undefined,'rev-top'),title=el('div',undefined,'rev-title');title.append(el('h3',rev.title),el('span',rev.date));top.append(title,el('span',rev.verdict,`badge ${rev.gate==='PASS'?'pass':rev.gate==='FAIL'?'fail':''}`));card.append(top,el('p',rev.summary,'rev-copy'));
  const links=el('div',undefined,'rev-links'),open=el('a','作品を開く ↗','button');open.href=rev.path;open.target='_blank';open.rel='noopener';links.append(open);
  if(safeLink(rev.code)){const code=el('a','この版のコード ↗','button secondary');code.href=rev.code;code.target='_blank';code.rel='noopener';links.append(code)}
  const manifest=el('a','ファイルhash ↗','button secondary');manifest.href=rev.path+'frozen-manifest.json';links.append(manifest);card.append(links);
  const body=el('div',undefined,'rev-body');
  for(const [heading,items] of [['変更・確認したこと',rev.changes],['残る欠点・制約',rev.issues]]){const col=el('div'),ul=el('ul');col.append(el('h4',heading));for(const item of items)ul.append(el('li',item));col.append(ul);body.append(col)}card.append(body);
  const detail=el('details'),summary=el('summary','検証と評価の詳細');detail.append(summary);
  const table=el('table'),thead=el('thead'),tr=el('tr');for(const t of ['項目','結果','証拠・範囲'])tr.append(el('th',t));thead.append(tr);table.append(thead);const tbody=el('tbody');for(const check of rev.checks){const row=el('tr');row.append(el('td',check.name),el('td',check.result),el('td',check.evidence));tbody.append(row)}table.append(tbody);detail.append(table);if(rev.commit)detail.append(el('p','Public source commit: '+rev.commit,'mono'));card.append(detail);list.append(card);
  for(const select of selectors){const opt=el('option',rev.title);opt.value=rev.path;select.append(opt)}
 }
 if(data.revisions.length)selectors[1].selectedIndex=data.revisions.length-1;
 const openItems=document.querySelector('#open-items');openItems.replaceChildren(...data.openItems.map(t=>el('li',t)));
 const refs=document.querySelector('#references');for(const ref of data.references){if(!safeLink(ref.url))continue;const a=el('a',ref.title+' ↗');a.href=ref.url;a.target='_blank';a.rel='noopener';refs.append(a)}
 const clear=document.querySelector('#clear-compare');
 const load=()=>{for(const [i,id]of ['left-frame','right-frame'].entries()){const val=selectors[i].value;if(safePath(val))document.querySelector('#'+id).src=val}clear.hidden=false};
 clear.addEventListener('click',()=>{for(const id of ['left-frame','right-frame'])document.querySelector('#'+id).removeAttribute('src');clear.hidden=true;document.querySelector('#load-compare').focus()});
 document.querySelector('#load-compare').addEventListener('click',load);for(const s of selectors)s.addEventListener('change',()=>{if(document.querySelector('#left-frame').getAttribute('src'))load()});
 const observer=new ResizeObserver(entries=>{for(const entry of entries)entry.target.querySelector('iframe').style.transform=`scale(${entry.contentRect.width/1280})`});document.querySelectorAll('.frame-shell').forEach(n=>observer.observe(n));
}).catch(error=>{list.replaceChildren(el('p',error.message+' ページを再読み込みしてください。'));document.querySelector('#load-compare').disabled=true});
