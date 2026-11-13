(() => {
  const c = window.SITE_CONTENT;
  const filters = [...document.querySelectorAll('[data-filter]')];
  const projects = [...document.querySelectorAll('.project')];
  const count = document.getElementById('project-count');
  const empty = document.getElementById('empty-state');
  function filter(value) {
    let visible = 0;
    projects.forEach(card => { card.hidden = value !== 'all' && card.dataset.category !== value; if (!card.hidden) visible++; });
    filters.forEach(button => { const active = button.dataset.filter === value; button.classList.toggle('active', active); button.setAttribute('aria-pressed', String(active)); });
    count.textContent = String(visible) + c.works.countSuffix;
    empty.hidden = visible !== 0;
  }
  filters.forEach(button => button.addEventListener('click', () => filter(button.dataset.filter)));
  document.querySelectorAll('[data-project]').forEach(button => { button.setAttribute('aria-label',c.projects[Number(button.dataset.project)].title+'の設計を見る'); });
  const dialog = document.getElementById('project-dialog');
  document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
    const p = c.projects[Number(button.dataset.project)];
    document.getElementById('project-dialog-title').textContent = p.title;
    document.getElementById('project-dialog-meta').textContent = p.location + ' / ' + p.type + ' / ' + p.size;
    document.getElementById('project-dialog-description').textContent = p.description;
    dialog.showModal();
  }));
  dialog.addEventListener('click', event => { if (event.target === dialog) { const r=dialog.getBoundingClientRect(); if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close(); }});
  dialog.querySelector('[data-demo]').addEventListener('click', () => dialog.close());
  filter('all');
})();
