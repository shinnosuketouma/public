(() => {
  const c = window.SITE_CONTENT;
  const tabs = [...document.querySelectorAll('[data-roast]')];
  const panel = document.getElementById('roast-panel');
  const photo = panel.querySelector('img');
  const brewToggle = document.getElementById('brew-toggle');
  const brewDetail = document.getElementById('brew-detail');
  function setRoast(index, focus = false) {
    const roast = c.roasts[index];
    tabs.forEach((tab, i) => { const active=i===index; tab.classList.toggle('active',active); tab.setAttribute('aria-selected',String(active)); tab.tabIndex=active?0:-1; });
    panel.setAttribute('aria-labelledby',tabs[index].id);
    const fields={english:'english',name:'name',description:'description',origin:'origin',level:'roast',notes:'notes',price:'price'};
    Object.entries(fields).forEach(([id,key]) => {document.getElementById('roast-'+id).textContent=roast[key];});
    const asset=c.assets[roast.image]; photo.src=asset.url;photo.alt=asset.alt;photo.style.objectPosition=asset.position;
    document.getElementById('brew-description').textContent=roast.brew;
    brewDetail.hidden=true;brewToggle.setAttribute('aria-expanded','false');brewToggle.lastElementChild.textContent='＋';
    if(focus) tabs[index].focus();
  }
  tabs.forEach((tab,index) => {tab.addEventListener('click',()=>setRoast(index));tab.addEventListener('keydown',event=>{let next;if(event.key==='ArrowRight')next=(index+1)%tabs.length;if(event.key==='ArrowLeft')next=(index+tabs.length-1)%tabs.length;if(event.key==='Home')next=0;if(event.key==='End')next=tabs.length-1;if(next!==undefined){event.preventDefault();setRoast(next,true);}});});
  brewToggle.addEventListener('click',()=>{const open=brewToggle.getAttribute('aria-expanded')!=='true';brewToggle.setAttribute('aria-expanded',String(open));brewDetail.hidden=!open;brewToggle.lastElementChild.textContent=open?'−':'＋';});
  setRoast(0);
})();
