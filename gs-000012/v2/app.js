'use strict';
(() => {
  document.documentElement.classList.add('js-ready');
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const PROJECTS = {
    aida: { name:'あいだの設計', number:'01', category:'Editorial study', medium:'編集設計 / 冊子 / 組版', image:'assets/aida-cover.svg', description:'「入口を決める」「読む距離を分ける」「問いを残す」の3章からなる、自主制作の編集ノート。原稿、図版、目次、注記を同じ読む順序で組み立てています。', purpose:'制作を考えはじめた人へ、伝える内容と読む順序の関係を渡す。', idea:'表紙の目次、章の見出し、短い要点、本文、模式図、注記に異なる役割を持たせる。', outcome:'全3章のオリジナル原稿と図版、表紙、見開き、全文を読むWeb表示。' },
    kutou: { name:'句読', number:'02', category:'Graphic study', medium:'キービジュアル / ポスター / サイン', image:'assets/kutou-poster.svg', description:'まちで立ち止まる時間を、句点と読点に置き換えたビジュアルの研究。大きな記号と少ない言葉で、遠くからも読める構成を考えました。', purpose:'イベントの入口で、一つの印象を共有する。', idea:'「、」「。」の二つだけを拡大し、視認性と親しみやすさを両立する。', outcome:'ポスターから案内サインへ、同じ句読点のルールで展開する自主企画。' },
    layers: { name:'積層', number:'03', category:'Editorial study', medium:'情報設計 / 年次レポート / 図版', image:'assets/layers-cover.svg', description:'一年の活動を積み重なった層として見せる、年次レポートの編集研究。活動の多さを数字の羅列にせず、読む入口をつくります。', purpose:'活動の全体像と、一つひとつの取り組みをつなぐ。', idea:'層の反復を章の区切りや図版へ使い、ページをまたぐ共通の手がかりにする。', outcome:'企業・団体の活動報告を想定した表紙と編集ルールの自主企画。' },
    outline: { name:'未完の輪郭', number:'04', category:'Identity study', medium:'ロゴ / 展示ビジュアル / 展開ルール', image:'assets/outline-poster.svg', description:'展示内容が変わっても、一つの企画として見える仕組みの研究。重なり合う楕円を、固定されたマークではなく、展開できる輪郭として扱います。', purpose:'複数の展示や告知に、共通する見え方をつくる。', idea:'同じ中心を持つ楕円の幅を変え、比率のルールを残して媒体へ広げる。', outcome:'展示告知とアイデンティティの関係を考えた自主企画。' }
  };
  const purposes = [...$('#purpose').options].map(o => o.value);
  const media = [...$('#medium').options].map(o => o.value);
  const STORAGE_KEY = 'tsuzume-project-note-v1';
  let editRevision=0, savedRevision=0, importGeneration=0;
  function markDirty(){editRevision++;$('#storage-note').textContent='変更はまだ保存していません。「この端末に保存する」で続きを残せます。';}
  function invalidateImports(){importGeneration++;}
  const newDraft = () => ({schema:'tsuzume-project-note',version:1,selected:[],purpose:'',medium:'未定・相談したい',timing:'',notes:''});
  let draft = newDraft();
  let dialogProject = null;
  let dialogOpener = null;
  let currentFilter = 'all';
  const status = (message, error = false) => { $('#note-status').textContent = message; $('#note-status').classList.toggle('error',error); };
  const text = (tag, value, className) => { const el = document.createElement(tag); el.textContent = value; if(className) el.className = className; return el; };
  const projectImage = (project) => { const img = document.createElement('img'); img.src=project.image; img.alt=''; img.width=42; img.height=56; return img; };
  function validDraft(value) {
    if (!value || value.schema !== 'tsuzume-project-note' || value.version !== 1) throw new Error('綴目の編集データ（version 1）を選んでください。');
    if (!Array.isArray(value.selected) || value.selected.length > 4 || new Set(value.selected).size !== value.selected.length || value.selected.some(id => typeof id !== 'string' || !Object.hasOwn(PROJECTS,id))) throw new Error('作品の選択データを読み取れませんでした。現在のノートは保持しています。');
    if (typeof value.purpose !== 'string' || !purposes.includes(value.purpose) || typeof value.medium !== 'string' || !media.includes(value.medium) || typeof value.timing !== 'string' || value.timing.length > 60 || typeof value.notes !== 'string' || value.notes.length > 1200) throw new Error('入力項目の形式か文字数が合いません。現在のノートは保持しています。');
    return {schema:'tsuzume-project-note',version:1,selected:[...value.selected],purpose:value.purpose,medium:value.medium,timing:value.timing,notes:value.notes};
  }
  function populateInputs() { for (const field of ['purpose','medium','timing','notes']) $('#'+field).value=draft[field]; }
  function sync() {
    $$('[data-count]').forEach(el => {el.textContent=draft.selected.length;});
    $$('[data-select]').forEach(button => {
      const id=button.dataset.select, selected=draft.selected.includes(id);
      button.setAttribute('aria-pressed',String(selected));
      $('.select-label',button).textContent=selected?'ノートから外す':'ノートに追加';
      button.firstElementChild.textContent=selected?'✓':'＋';
      button.setAttribute('aria-label',PROJECTS[id].name+(selected?'をノートから外す':'をノートに追加'));
    });
    const list=$('#selected-list'), summary=$('#summary-projects'); list.replaceChildren(); summary.replaceChildren();
    if(!draft.selected.length) {
      list.append(text('p','作品の「ノートに追加」から選んでください。','selection-empty'));
      summary.append(text('p','気になる作品が、ここに並びます。'));
    }
    draft.selected.forEach(id => {
      const project=PROJECTS[id], row=document.createElement('div'); row.className='selected-row'; row.append(projectImage(project));
      const name=text('span',project.name,'selected-name'); name.append(text('small',project.medium)); row.append(name);
      const remove=text('button','×','remove-selected'); remove.type='button'; remove.setAttribute('aria-label',project.name+'をノートから外す'); remove.addEventListener('click',()=>toggleProject(id,remove)); row.append(remove); list.append(row);
      const paperRow=document.createElement('div'); paperRow.className='paper-project-row'; paperRow.append(projectImage(project));
      const paperName=text('span',project.name); paperName.append(text('small',project.medium)); paperRow.append(paperName); summary.append(paperRow);
    });
    $('#summary-purpose').textContent=draft.purpose||'まだ選択されていません';
    $('#summary-medium').textContent=draft.medium;
    $('#summary-timing').textContent=draft.timing.trim()||'未定';
    $('#summary-notes').textContent=draft.notes.trim()||'まだ記入されていません';
    $('#notes-length').textContent=draft.notes.length;
    if(draft.selected.length) $('#selection-error').textContent='';
    if(draft.purpose) {$('#purpose-error').textContent='';$('#purpose').removeAttribute('aria-invalid');}
    if(dialogProject) syncDialogButton();
  }
  function toggleProject(id, control) {
    const included=draft.selected.includes(id);
    draft.selected=included?draft.selected.filter(value=>value!==id):[...draft.selected,id];
    markDirty();sync();
    status(PROJECTS[id].name+(included?'をノートから外しました。':'をノートに追加しました。'));
    if(included && control && !document.contains(control)) {
      const next=$('.remove-selected'); if(next) next.focus(); else $('a[href="#works"]',$('.note-selected')).focus();
    }
  }
  $$('[data-select]').forEach(button=>button.addEventListener('click',()=>toggleProject(button.dataset.select,button)));
  for(const field of ['purpose','medium','timing','notes']) $('#'+field).addEventListener('input',event=>{draft[field]=event.target.value;markDirty();sync();});
  $('#note-form').addEventListener('submit',event=>event.preventDefault());
  function validateForNote() {
    let first=null;
    $('#selection-error').textContent=''; $('#purpose-error').textContent=''; $('#purpose').removeAttribute('aria-invalid');
    if(!draft.selected.length) {$('#selection-error').textContent='作品を1件以上、ノートに追加してください。';first=$('a[href="#works"]',$('.note-selected'));}
    if(!draft.purpose) {$('#purpose-error').textContent='制作の目的を選んでください。';$('#purpose').setAttribute('aria-invalid','true');if(!first)first=$('#purpose');}
    if(first) {status('作品と制作の目的を確認してください。入力した内容は残っています。',true);first.focus();return false;}
    return true;
  }
  function noteText() {
    return ['綴目 / TSUZUME — ご相談の整理','','選んだ作品',...draft.selected.map(id=>`${PROJECTS[id].number}. ${PROJECTS[id].name}（${PROJECTS[id].medium}）`),'','制作の目的',draft.purpose||'未選択','','考えている媒体',draft.medium,'','希望する時期',draft.timing.trim()||'未定','','相談したいこと',draft.notes.trim()||'未記入','','このノートは送信されていません。ご自身の検討や相談の準備にお使いください。','GENSEKI concept / gs-000012 / v2'].join('\n');
  }
  function download(contents, type, filename) {
    const blob=new Blob([contents],{type});
    const url=URL.createObjectURL(blob); const anchor=document.createElement('a'); anchor.href=url;anchor.download=filename;document.body.append(anchor);anchor.click();anchor.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
  }
  $('#download-note').addEventListener('click',()=>{if(!validateForNote()) return;try{download('\uFEFF'+noteText(),'text/plain;charset=utf-8','tsuzume-project-note-v2.txt');status('メモのダウンロードを開始しました。ブラウザの保存先をご確認ください。');}catch{status('メモファイルを作成できませんでした。ノートを印刷して持ち帰れます。',true);}});
  $('#export-json').addEventListener('click',()=>{try{download(JSON.stringify({...draft,exportedAt:new Date().toISOString()},null,2),'application/json;charset=utf-8','tsuzume-project-note-v2.json');status('編集データのダウンロードを開始しました。ブラウザの保存先をご確認ください。');}catch{status('編集データを作成できませんでした。入力はこの画面に残っています。',true);}});
  $('#import-json').addEventListener('change',async event=>{
    const file=event.target.files[0]; const generation=++importGeneration; const startedRevision=editRevision; if(!file)return;
    status('編集データを読み込んでいます。編集中の変更があれば、古い読込みは適用しません。');
    try {
      if(file.size>100000)throw new Error('100KB以下の編集データを選んでください。');
      const raw=await file.text();
      if(generation!==importGeneration)return;
      if(startedRevision!==editRevision){status('読み込み中にノートが変更されたため、ファイルを適用しませんでした。現在の編集を保持しています。',true);return;}
      let data;try{data=JSON.parse(raw);}catch{throw new Error('JSONファイルを読み取れませんでした。現在のノートは保持しています。');}
      const next=validDraft(data);draft=next;markDirty();populateInputs();sync();status('編集データを読み込みました。この端末への保存はまだ行っていません。');
    }catch(error){if(generation===importGeneration)status(error.message||'編集データを読み込めませんでした。現在のノートは保持しています。',true);}
    finally{if(generation===importGeneration)event.target.value='';}
  });
  $('#save-note').addEventListener('click',()=>{
    try {const savedAt=new Date().toISOString();localStorage.setItem(STORAGE_KEY,JSON.stringify({...draft,savedAt}));savedRevision=editRevision;$('#storage-note').textContent='この端末に保存しました。'+new Date(savedAt).toLocaleString('ja-JP')+'。';status('この端末にノートを保存しました。同じブラウザで再訪すると続きを編集できます。');}
    catch {status('このブラウザでは保存できませんでした。JSONを書き出すと、編集内容を持ち帰れます。',true);$('#storage-note').textContent='端末への保存に失敗しました。入力は画面に残っています。';}
  });
  $('#print-note').addEventListener('click',()=>{if(!validateForNote())return;try{window.print();status('印刷画面を開きました。保存や印刷の完了はブラウザで確認してください。');}catch{status('印刷画面を開けませんでした。メモをダウンロードして持ち帰れます。',true);}});
  $('#reset-note').addEventListener('click',()=>{
    if(!window.confirm('ノートの入力と、この端末に保存した内容を空にしますか？書き出したファイルは削除されません。'))return;
    invalidateImports();draft=newDraft();markDirty();populateInputs();sync();$('#purpose-error').textContent='';$('#selection-error').textContent='';$('#purpose').removeAttribute('aria-invalid');
    try{localStorage.removeItem(STORAGE_KEY);$('#storage-note').textContent='保存内容を空にしました。';status('ノートを空にしました。作品を選んで、また始められます。');}
    catch{status('画面のノートを空にしました。端末の保存内容は削除できなかったため、再訪で戻る可能性があります。',true);}
  });
  try {
    const saved=localStorage.getItem(STORAGE_KEY);
    if(saved) {const parsed=JSON.parse(saved);draft=validDraft(parsed);savedRevision=editRevision;populateInputs();$('#storage-note').textContent='この端末に保存したノートを復元しました。';status('保存したノートの続きを編集できます。');}
  } catch {status('保存済みデータを復元できませんでした。元の保存値は上書きしていません。JSONをお持ちの場合は読み込めます。',true);}
  sync();
  function filterWorks() {
    const query=$('#work-search').value.trim().toLocaleLowerCase('ja'); let count=0;
    $$('[data-work]').forEach(card=>{const project=PROJECTS[card.dataset.work];const matchesFilter=currentFilter==='all'||card.dataset.kind.split(' ').includes(currentFilter);const matchesQuery=(project.name+project.medium+project.description).toLocaleLowerCase('ja').includes(query);card.hidden=!(matchesFilter&&matchesQuery);if(!card.hidden)count++;});
    $('#results-meta').textContent=count+'件の作品'+(query?' / 「'+query+'」の検索結果':'');$('#empty-state').hidden=count!==0;
  }
  $$('[data-filter]').forEach(button=>button.addEventListener('click',()=>{currentFilter=button.dataset.filter;$$('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));filterWorks();}));
  $('#work-search').addEventListener('input',filterWorks);
  $('#clear-search').addEventListener('click',()=>{$('#work-search').value='';currentFilter='all';$$('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter==='all')));filterWorks();$('#work-search').focus();});
  const dialog=$('#work-dialog');
  function syncDialogButton(){const selected=draft.selected.includes(dialogProject);$('#dialog-select').replaceChildren(text('span',selected?'ノートから外す':'ノートに追加'),text('span',selected?'✓':'＋'));$('#dialog-select').lastElementChild.setAttribute('aria-hidden','true');$('#dialog-select').setAttribute('aria-pressed',String(selected));}
  function openProject(id, opener){
    if(typeof dialog.showModal!=='function'){status('このブラウザでは作品詳細を開けません。作品一覧の説明からノートに追加できます。',true);return;}
    dialogProject=id;dialogOpener=opener;const project=PROJECTS[id];
    $('#dialog-title').textContent=project.name;$('#dialog-kicker').textContent=project.number+' / '+project.category;$('#dialog-description').textContent=project.description;
    const art=$('#dialog-art');if(id==='aida'&&window.TsuzumePublication){art.replaceChildren(window.TsuzumePublication.makePreview());}else{art.replaceChildren(projectImage(project));art.firstElementChild.alt=project.name+'の自主企画ビジュアル';}art.dataset.project=id;$('#dialog-reader').hidden=id!=='aida';
    const details=$('#dialog-details');details.replaceChildren();for(const [label,value] of [['想定した課題',project.purpose],['設計の考え方',project.idea],['制作の範囲',project.outcome]]){const row=document.createElement('div');row.append(text('dt',label),text('dd',value));details.append(row);}
    syncDialogButton();dialog.showModal();document.body.style.overflow='hidden';$('#dialog-close').focus();
  }
  function closeProject(){if(dialog.open)dialog.close();}
  $$('[data-detail]').forEach(button=>button.addEventListener('click',()=>openProject(button.dataset.detail,button)));
  $('#dialog-close').addEventListener('click',closeProject);
  dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)closeProject();}});
  dialog.addEventListener('close',()=>{document.body.style.overflow='';dialogProject=null;if(dialogOpener?.isConnected)dialogOpener.focus();});
  $('#dialog-select').addEventListener('click',()=>toggleProject(dialogProject));
  $('#dialog-to-note').addEventListener('click',()=>{closeProject();requestAnimationFrame(()=>{$('#brief-title').focus({preventScroll:true});$('#brief-title').scrollIntoView({block:'start'});});});
  const menuToggle=$('#menu-toggle'), nav=$('#site-nav');
  function setMenu(open){menuToggle.setAttribute('aria-expanded',String(open));menuToggle.lastElementChild.textContent=open?'−':'＋';nav.classList.toggle('menu-open',open);document.body.classList.toggle('menu-open',open);$('#main').inert=open;$('.site-footer').inert=open;if(open)$('a',nav).focus();else menuToggle.focus();}
  $('.site-header .brand').addEventListener('click',()=>{if(menuToggle.getAttribute('aria-expanded')==='true')setMenu(false);});
  menuToggle.addEventListener('click',()=>setMenu(menuToggle.getAttribute('aria-expanded')!=='true'));
  $$('a',nav).forEach(link=>link.addEventListener('click',()=>{if(menuToggle.getAttribute('aria-expanded')==='true')setMenu(false);}));
  document.addEventListener('keydown',event=>{if(menuToggle.getAttribute('aria-expanded')!=='true')return;if(event.key==='Escape'){setMenu(false);return;}if(event.key==='Tab'){const links=$$('a',nav);const focusables=[menuToggle,...links];const i=focusables.indexOf(document.activeElement);if(event.shiftKey&&i===0){event.preventDefault();focusables.at(-1).focus();}else if(!event.shiftKey&&i===focusables.length-1){event.preventDefault();menuToggle.focus();}}});
  const phone=matchMedia('(max-width:639px)');phone.addEventListener('change',()=>{if(!phone.matches&&menuToggle.getAttribute('aria-expanded')==='true')setMenu(false);});

  // One normalized folio state drives every transform. RAF is scheduled only while a visible state changes.
  window.TsuzumePublication?.fillHero();
  const book=$('#book'), hero=$('#home'), reduced=matchMedia('(prefers-reduced-motion:reduce)');
  const motion={progress:reduced.matches?1:0,target:1,mode:reduced.matches?'reduced':'entering',userPaused:false,visible:true,raf:0,last:0,elapsed:0,entry:0};
  const telemetry=window.TsuzumeTelemetry?.create({windowMs:20000,maxSamples:8192,maxLongTasks:128})||{recordFrame(){},recordLcp(){},recordLayoutShift(){},recordLongTask(){},setSupported(){},snapshot(){return {protocol:'telemetry-unavailable',activeMs:null,intervals:null,lcpMs:null,cls:null,longTasks:null,medianFrameMs:null,p95FrameMs:null,effectiveFps:null,supported:{lcp:false,cls:false,longtask:false}};}};
  const metrics={revision:'v2',updates:0,startedAt:new Date().toISOString()};
  const diagnostics=document.createElement('output');diagnostics.id='motion-diagnostics';diagnostics.hidden=true;document.body.append(diagnostics);
  let lastSnapshot=0;
  function snapshot(force=false){const now=performance.now();if(!force&&now-lastSnapshot<1000)return;lastSnapshot=now;diagnostics.textContent=JSON.stringify({mode:motion.mode,progress:motion.progress,userPaused:motion.userPaused,reduced:reduced.matches,visible:motion.visible,hidden:document.hidden,scheduledFrames:motion.raf?1:0,...metrics,...telemetry.snapshot()});}
  function observeMetric(type,key,accept){try{if(!PerformanceObserver.supportedEntryTypes?.includes(type))return;const observer=new PerformanceObserver(list=>{for(const entry of list.getEntries())accept(entry);snapshot(true);});observer.observe({type,buffered:true});telemetry.setSupported({[key]:true});}catch{telemetry.setSupported({[key]:false});}}
  observeMetric('largest-contentful-paint','lcp',entry=>telemetry.recordLcp(entry.startTime));
  observeMetric('layout-shift','cls',entry=>telemetry.recordLayoutShift(entry));
  observeMetric('longtask','longtask',entry=>telemetry.recordLongTask(entry));
  function render(){book.style.setProperty('--p',motion.progress.toFixed(6));book.style.setProperty('--scale',(1-.12*Math.sin(motion.progress*Math.PI)).toFixed(6));metrics.updates++;const opened=motion.progress>=.5;$('#close-book').setAttribute('aria-pressed',String(!opened));$('#open-book').setAttribute('aria-pressed',String(opened));$('#folio-hit').setAttribute('aria-pressed',String(opened));$('#folio-hit').setAttribute('aria-label',opened?'冊子を閉じる':'冊子をひらく');}
  function pauseUI(){const paused=motion.userPaused||reduced.matches;$('#motion-pause').setAttribute('aria-pressed',String(paused));$('#pause-label').textContent=reduced.matches?'動きは停止中':paused?'動きを再生':'動きを止める';$('.pause-icon').textContent=paused?'▷':'Ⅱ';$('#motion-pause').disabled=reduced.matches;document.documentElement.classList.toggle('motion-paused',motion.userPaused);document.documentElement.classList.toggle('motion-reduced',reduced.matches);}
  function stop(){if(motion.raf)cancelAnimationFrame(motion.raf);motion.raf=0;motion.last=0;snapshot(true);}
  function canRun(){return !document.hidden&&motion.visible&&!reduced.matches&&((!motion.userPaused&&(motion.mode==='playing'||motion.mode==='entering'))||motion.mode==='manual');}
  function schedule(){if(canRun()&&!motion.raf)motion.raf=requestAnimationFrame(tick);snapshot();}
  function tick(time){
    motion.raf=0;if(!canRun()){motion.last=0;snapshot();return;}
    const raw=motion.last?time-motion.last:0;const dt=Math.min(raw/1000,.05);motion.last=time;const before=motion.progress;
    if(motion.mode==='entering'){motion.entry+=dt;if(motion.entry>.35){motion.progress=Math.min(1,1-Math.pow(1-Math.min(1,(motion.entry-.35)/1.7),3));}if(motion.entry>=2.05){motion.progress=1;motion.mode='playing';motion.elapsed=0;}}
    else if(motion.mode==='playing'){motion.elapsed+=dt;motion.target=.56+.41*Math.cos(motion.elapsed*Math.PI/4);motion.progress+=(motion.target-motion.progress)*(1-Math.exp(-10*dt));}
    else if(motion.mode==='manual'){motion.progress+=(motion.target-motion.progress)*(1-Math.exp(-7*dt));if(Math.abs(motion.target-motion.progress)<.0003){motion.progress=motion.target;motion.mode='paused';}}
    const changed=Math.abs(motion.progress-before)>.000001;
    if(changed){if(raw>0)telemetry.recordFrame(raw,time);render();}
    if(canRun())schedule();else{motion.last=0;snapshot(true);}
  }
  function manual(target){stop();motion.userPaused=true;motion.target=target;motion.mode=reduced.matches?'reduced':'manual';pauseUI();if(reduced.matches){motion.progress=target;render();}else schedule();snapshot(true);}
  $('#close-book').addEventListener('click',()=>manual(0));$('#open-book').addEventListener('click',()=>manual(1));$('#folio-hit').addEventListener('click',()=>manual(motion.progress>=.5?0:1));
  $('#folio-hit').addEventListener('keydown',event=>{if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();manual(event.key==='ArrowLeft'?0:1);}});
  $('#motion-pause').addEventListener('click',()=>{if(reduced.matches)return;motion.userPaused=!motion.userPaused;if(motion.userPaused){motion.mode='paused';stop();}else{motion.mode='playing';motion.elapsed=Math.acos(Math.max(-1,Math.min(1,(motion.progress-.56)/.41)))*4/Math.PI;schedule();}pauseUI();snapshot(true);});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();else{motion.last=0;schedule();}snapshot(true);});
  if('IntersectionObserver' in window)new IntersectionObserver(entries=>{motion.visible=entries[0].isIntersecting;if(!motion.visible)stop();else{motion.last=0;schedule();}snapshot(true);},{threshold:.05}).observe(hero);
  reduced.addEventListener('change',()=>{stop();if(reduced.matches){motion.mode='reduced';motion.progress=1;render();}else{motion.mode=motion.userPaused?'paused':'playing';schedule();}pauseUI();snapshot(true);});
  window.addEventListener('pagehide',stop);
  window.addEventListener('pageshow',()=>{populateInputs();sync();motion.last=0;schedule();snapshot(true);});
  $('#folio-hit').disabled=false;render();pauseUI();schedule();snapshot(true);
  // Image failures leave the surrounding DOM project information and note controls available.
  $$('img').forEach(img=>img.addEventListener('error',()=>img.classList.add('image-failed')));
})();
