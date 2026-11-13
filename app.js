(() => {
  'use strict';
  const portraits = {
    'gs-001': { bg: '#e9edff', ink: '#2942b6', name: 'ORVEIN', line: 'Work in a clearer flow.' },
    'gs-002': { bg: '#d9462d', ink: '#fff7e7', name: 'SELQUEN', image: 'photo-1497366811353-6870744d04b2' },
    'gs-003': { bg: '#e7e3d9', ink: '#fff', name: '余凪舎', image: 'photo-1600210492486-724fe5c67fb0' },
    'gs-004': { bg: '#dfe4e8', ink: '#fff', name: 'NERIQUA', image: 'photo-1600607687920-4e2a09cf159d' },
    'gs-005': { bg: '#eadedb', ink: '#713d46', name: 'LISQÉ', image: 'photo-1600948836101-f9ffda59d250' },
    'gs-006': { bg: '#dfe5d8', ink: '#fff', name: 'ARQO', image: 'photo-1518611012118-696072aa579a' },
    'gs-007': { bg: '#d1b796', ink: '#fff', name: '朝凪焙煎所', image: 'photo-1442512595331-e89e73853f31' },
    'gs-008': { bg: '#234539', ink: '#fff', name: '澄間', image: 'photo-1611892440504-42a792e24d32' },
    'gs-009': { bg: '#2548d9', ink: '#fff2b9', name: 'FORME LAB', line: 'Design. Make. Repeat.' },
    'gs-010': { bg: '#d2b78e', ink: '#3d3329', name: 'SENQARI', image: 'photo-1602874801006-e26c3d4c8e4f' }
  };
  const groups = { business: ['G01', 'G02', 'G09'], place: ['G03', 'G04', 'G05', 'G06', 'G07', 'G08'], brand: ['G10'] };
  const grid = document.getElementById('work-grid');
  for (const item of window.COLLECTION || []) {
    const visual = portraits[item.id];
    const link = document.createElement('a');
    link.className = 'work';
    link.href = item.path;
    link.dataset.genre = item.genre_id;
    link.setAttribute('aria-label', item.title + 'のサイトを見る');
    const frame = document.createElement('div');
    frame.className = 'work-visual';
    frame.style.backgroundColor = visual.bg;
    frame.style.color = visual.ink;
    {
      const img = document.createElement('img');
      img.src = 'previews/' + item.id + '.jpg';
      img.alt = '';
      img.loading = 'lazy';
      frame.append(img);
      // Name stays on a solid surface, keeping contrast independent of the crop.
    }
    const type = document.createElement('span');
    type.className = 'work-type';
    type.textContent = item.genre_id + ' / ' + item.category;
    if (visual.image) { type.style.background = visual.bg; type.style.color = '#252722'; type.style.padding = '8px 10px'; type.style.alignSelf = 'flex-start'; }
    const name = document.createElement('strong');
    name.className = 'work-name';
    name.textContent = visual.name;
    if (visual.image) { name.style.background = visual.bg; name.style.color = '#252722'; name.style.padding = '10px 14px'; name.style.alignSelf = 'flex-start'; }
    const arrow = document.createElement('span');
    arrow.className = 'screen-arrow';
    arrow.textContent = '↗';
    frame.append(arrow);
    const label = document.createElement('div');
    label.className = 'work-label';
    const words = document.createElement('div');
    const heading = document.createElement('h3');
    heading.textContent = item.title;
    const category = document.createElement('p');
    category.textContent = item.category;
    const number = document.createElement('span');
    number.textContent = item.id.slice(-3);
    words.append(heading, category);
    label.append(words, number);
    link.append(frame, label);
    grid.append(link);
  }
  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
    const group = groups[button.dataset.filter];
    let count = 0;
    grid.querySelectorAll('.work').forEach(work => { work.hidden = !!group && !group.includes(work.dataset.genre); if (!work.hidden) count++; });
    document.querySelectorAll('[data-filter]').forEach(other => { const active = other === button; other.classList.toggle('active', active); other.setAttribute('aria-pressed', String(active)); });
    document.getElementById('count').textContent = count + ' works';
  }));
})();
