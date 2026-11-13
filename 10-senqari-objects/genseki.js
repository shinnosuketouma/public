/* GENSEKI preview runtime v1.0.0 — no analytics, requests, or personal-data storage. */
(() => {
  'use strict';
  const content = window.SITE_CONTENT || {};
  const get = path => path.split('.').reduce((value, key) => value == null ? undefined : value[key], content);
  const format = (value, element) => typeof value !== 'number' ? String(value) : element.dataset.format === 'currency' ? new Intl.NumberFormat('ja-JP',{style:'currency',currency:'JPY',maximumFractionDigits:0}).format(value) + (element.dataset.priceSuffix || '') : element.dataset.format === 'jpy' ? '¥' + value.toLocaleString('ja-JP') : String(value);
  function apply(root = document) {
    root.querySelectorAll('[data-content]').forEach(element => {
      const value = get(element.dataset.content);
      if (['string', 'number'].includes(typeof value)) element.textContent = format(value, element);
    });
    root.querySelectorAll('[data-image]').forEach(element => {
      const value = get(element.dataset.image);
      if (!value) return;
      const asset = typeof value === 'string' ? { url: value } : value;
      if (element instanceof HTMLImageElement) {
        element.src = asset.url;
        if (asset.alt !== undefined) element.alt = asset.alt;
        element.decoding = 'async';
      }
      if (asset.position) element.style.objectPosition = asset.position;
    });
    root.querySelectorAll('[data-map]').forEach(element => {
      const query = get(element.dataset.map);
      if (typeof query === 'string') element.href = 'https://www.openstreetmap.org/search?query=' + encodeURIComponent(query);
    });
    // Metadata uses editable values too: a customized site must not share the old brand.
    const brand = typeof content.brand === 'string' ? content.brand : content.brand?.name || '';
    const headline = typeof content.headline === 'string' ? content.headline : content.hero?.headline || [content.hero?.line1,content.hero?.line2].filter(Boolean).join(' ');
    const title = [brand, headline.replace(/\n/g, ' ')].filter(Boolean).join(' — ');
    const description = [content.description,content.intro,content.hero?.body,content.hero?.description,content.hero?.intro,content.hero?.lead,headline].find(value => typeof value === 'string') || '';
    if (title) document.title = title;
    for (const [selector, value] of [['meta[name="description"]', description], ['meta[property="og:title"]', title], ['meta[property="og:description"]', description]]) {
      const element = document.querySelector(selector);
      if (element && typeof value === 'string') element.content = value.replace(/\n/g, ' ');
    }
    const firstAsset = content.assets?.hero;
    const shareImage = document.querySelector('meta[property="og:image"]');
    if (shareImage && firstAsset?.url) shareImage.content = firstAsset.url;
  }
  apply();
  const style = document.createElement('style');
  style.textContent = `
    [hidden]{display:none!important}
    :focus-visible{outline:2px solid #d84a26;outline-offset:5px}
    .gs-dialog{width:min(520px,calc(100% - 32px));max-height:calc(100svh - 48px);overflow:auto;border:0;padding:36px;background:#faf9f6;color:#252725;border-radius:4px;font:16px/1.8 -apple-system,BlinkMacSystemFont,"Hiragino Kaku Gothic ProN",Meiryo,sans-serif}
    .gs-dialog::backdrop{background:rgb(20 24 22 / .56)}
    .gs-dialog h2{font-size:25px;font-weight:500;line-height:1.5;margin:0 44px 20px 0}
    .gs-dialog p{margin:14px 0}.gs-dialog .gs-note{font-size:14px;color:#535851;border-top:1px solid #d5d8d1;padding-top:18px}
    .gs-dialog .gs-close{position:absolute;right:12px;top:12px;width:44px;height:44px;border:0;background:transparent;color:inherit;font-size:28px;cursor:pointer}
    .gs-dialog .gs-finish{min-height:48px;width:100%;border:1px solid #252725;background:#252725;color:#fff;font:inherit;cursor:pointer;margin-top:12px}
    @media(prefers-reduced-motion:reduce){html{scroll-behavior:auto!important}*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}}
  `;
  document.head.append(style);
  const dialog = document.createElement('dialog');
  dialog.className = 'gs-dialog';
  dialog.setAttribute('aria-labelledby', 'gs-dialog-title');
  dialog.innerHTML = '<button type="button" class="gs-close" aria-label="閉じる">×</button><h2 id="gs-dialog-title"></h2><p class="gs-summary"></p><p class="gs-note">GENSEKIのコンセプトサイトです。選択内容の確認のみ行い、予約・購入・問い合わせは送信されません。個人情報の入力は不要です。</p><button type="button" class="gs-finish">サイトに戻る</button>';
  document.body.append(dialog);
  let previousFocus;
  function openDemo(title, summary = '') {
    previousFocus = document.activeElement;
    dialog.querySelector('h2').textContent = title;
    dialog.querySelector('.gs-summary').textContent = summary || 'ページで選んだ内容をもとに、ご相談へ進む流れを体験できます。';
    if (!dialog.open) dialog.showModal();
  }
  dialog.querySelectorAll('button').forEach(button => button.addEventListener('click', () => dialog.close()));
  dialog.addEventListener('click', event => { if (event.target === dialog) { const box = dialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); } });
  dialog.addEventListener('close', () => previousFocus?.focus());
  document.addEventListener('click', event => {
    const button = event.target.closest('[data-demo]');
    if (!button) return;
    event.preventDefault();
    openDemo(button.dataset.demo || button.textContent.trim(), button.dataset.summary);
  });
  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-menu]');
  if (toggle && menu) {
    if (!menu.id) menu.id = 'gs-mobile-menu';
    toggle.setAttribute('aria-controls', menu.id);
    toggle.setAttribute('aria-expanded', 'false');
    const close = () => { menu.hidden = true; toggle.setAttribute('aria-expanded', 'false'); };
    toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; menu.hidden = !open; toggle.setAttribute('aria-expanded', String(open)); });
    menu.addEventListener('click', event => { if (event.target.closest('a,button')) close(); });
    document.addEventListener('keydown', event => { if (event.key === 'Escape' && !menu.hidden) { close(); toggle.focus(); } });
    matchMedia('(min-width: 901px)').addEventListener('change', close);
  }
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('[data-enter] h1,[data-enter] .hero-lead,[data-enter] .hero__lead').forEach((element, index) => {
      element.animate([{ transform: 'translateY(14px)', opacity: .45 }, { transform: 'translateY(0)', opacity: 1 }], { duration: 700, delay: Math.min(index * 80, 160), easing: 'cubic-bezier(.22,1,.36,1)' });
    });
  }
  window.GENSEKI = { get, apply, openDemo, version: '1.0.0' };
})();
