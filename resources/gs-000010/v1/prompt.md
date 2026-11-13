# SENQARI objects — 暮らしに、香りの時間を。 — 編集欄つき・実装固定プロンプト v1

日本向けWebサイトを次の仕様・参照実装で制作してください。
このプロンプトはGENSEKI独自制作の gs-010 / v1 に対応します。
下の「編集欄」だけを書き換えれば、同じ構成と動きを保って自分のサイトにできます。

## 1. 編集欄（ここだけ変更する）

ブランド名・キャッチコピー・説明・ボタン文言・価格・画像は次のオブジェクトに入っています。
キー名・配列の件数・オブジェクトの階層は維持し、値のみ変更してください。
headline / title はキャッチコピー、description / lead / body は説明文、
price は価格、cta はボタン文言、assets.*.url は写真の差し替え先です。
各キーの意味は内容と対応先の data-content / data-image から確認できます。
写真は原則同じ縦横比・被写体位置を使い、position で焦点を調整してください。
改行は文字列内の \n で指定できます。短い見出しは元の文字数の±20%を目安にし、
長文にする場合も文字の切り捨てや縮小をせず、折り返しとモバイル表示を確認してください。
JSONの構造を含むJavaScriptです。文字列の引用符とカンマを維持してください。

<!-- GENSEKI:EDITABLE:START -->
```javascript file=content.js
window.SITE_CONTENT = {
  "brand": "SENQARI",
  "brandSub": "objects for everyday rituals",
  "description": "暮らしに香りの時間を。植物由来ワックスのフレグランスキャンドル。",
  "nav": {
    "collection": "コレクション",
    "story": "香りのこと",
    "ritual": "使い方",
    "cart": "バッグ"
  },
  "hero": {
    "eyebrow": "The daily collection / No. 01–03",
    "headline": "暮らしに、\n香りの時間を。",
    "body": "火を灯す。ページをめくる。\nいつもの部屋で、自分に戻るひととき。",
    "cta": "香りを選ぶ",
    "detail": "Plant-based wax / 180g / Made for slow evenings",
    "word": "Everyday\nrituals."
  },
  "collection": {
    "eyebrow": "01 / Choose your scent",
    "headline": "今日の気分に、\n似合う香り。",
    "body": "木々の清々しさ、花の余韻、柑橘の明るさ。\n3つの香りと、暮らしを彩る器。",
    "product": "Fragrance candle",
    "size": "180g / 約35時間",
    "price": 4620,
    "tax": "税込・送料別",
    "quantity": "数量",
    "add": "バッグに加える",
    "notesLabel": "Scent notes",
    "detailLabel": "Product details",
    "details": "植物由来ワックス / コットン芯 / ガラス容器",
    "shipping": "通常3–5営業日で発送",
    "deliveryNote": "配送料はお届け先により異なります。"
  },
  "scents": [
    {
      "id": "hinoki",
      "name": "01 / HINOKI",
      "japanese": "檜と、雨のあと。",
      "body": "檜の落ち着いた木の香りに、ジュニパーの清涼感。深呼吸したくなる、森の空気をイメージしました。",
      "notes": "Hinoki / Juniper / Cedarwood",
      "asset": "hinoki"
    },
    {
      "id": "neroli",
      "name": "02 / NEROLI",
      "japanese": "花ひらく、午後。",
      "body": "ネロリのやわらかな花の香りに、プチグレンのほろ苦さ。静かな午後に馴染む、軽やかなフローラル。",
      "notes": "Neroli / Petitgrain / Musk",
      "asset": "neroli"
    },
    {
      "id": "yuzu",
      "name": "03 / YUZU",
      "japanese": "柚子の、明るさ。",
      "body": "果皮をひとつ剥いたような柚子の香り。ベルガモットと重ねて、部屋の空気を明るく感じるシトラスに。",
      "notes": "Yuzu / Bergamot / Vetiver",
      "asset": "yuzu"
    }
  ],
  "story": {
    "eyebrow": "02 / Thoughtfully made",
    "headline": "香りを楽しむために、\n引き算を重ねる。",
    "body": "手におさまるガラスの器。燃え方を考えて選ぶワックスと芯。香りが主役になるよう、佇まいはシンプルに。使い終わった器も、暮らしの中でお使いいただけます。",
    "detail": "Plant-based wax. Cotton wick. A glass to keep."
  },
  "ritual": {
    "eyebrow": "03 / A little ritual",
    "headline": "灯す前と、\n消したあとに。",
    "step1Title": "芯を整える",
    "step1Body": "点火前に芯を5mmほどに整えてください。平らで熱に強い場所で使用します。",
    "step2Title": "表面を溶かす",
    "step2Body": "初回は表面のワックスが均等に溶けるまで。1回の燃焼は2時間以内を目安にしてください。",
    "step3Title": "余韻を楽しむ",
    "step3Body": "火を消したあと、器が冷めるまで動かさずに。就寝時や外出時は必ず消火してください。",
    "warning": "燃焼中は目を離さず、子どもやペット、燃えやすいものから離してお使いください。"
  },
  "cart": {
    "title": "Your bag",
    "empty": "バッグにはまだ商品がありません。",
    "subtotal": "小計",
    "shipping": "送料は本番の購入手続きで計算されます。",
    "checkout": "購入内容を確認する",
    "remove": "取り除く",
    "close": "バッグを閉じる",
    "added": "バッグに加えました。",
    "demoNote": "このストアはデザイン作品です。注文・決済・外部送信は行いません。"
  },
  "footer": {
    "sign": "A moment,\njust for you.",
    "copyright": "© 2026 SENQARI objects",
    "note": "GENSEKI concept / 架空のブランド。注文・決済は行いません。",
    "photos": "Photographs via Unsplash"
  },
  "assets": {
    "hero": {
      "url": "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1600&q=85",
      "alt": "ガラス容器に入ったキャンドルと穏やかな光",
      "position": "50% 50%"
    },
    "hinoki": {
      "url": "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1200&q=85",
      "alt": "香りのあるキャンドルのガラス容器",
      "position": "50% 50%"
    },
    "neroli": {
      "url": "https://images.unsplash.com/photo-1662675120641-055370809192?auto=format&fit=crop&w=1200&q=85",
      "alt": "ガラスのキャンドルと淡い光",
      "position": "50% 50%",
      "source_url": "https://unsplash.com/photos/a-candle-next-to-a-glass-jar-with-a-candle-in-it-eQZVhjqbkxc"
    },
    "yuzu": {
      "url": "https://images.unsplash.com/photo-1757688525739-8d1e13daf44f?auto=format&fit=crop&w=1200&q=85",
      "alt": "白いガラス容器のキャンドル",
      "position": "50% 50%",
      "source_url": "https://unsplash.com/photos/a-white-candle-in-a-glass-jar-2QSsfflO51I"
    },
    "story": {
      "url": "https://images.unsplash.com/photo-1640095889747-2090ee12fa7d?auto=format&fit=crop&w=1600&q=85",
      "alt": "木のテーブルに置かれた灯のともるキャンドル",
      "position": "50% 50%",
      "source_url": "https://unsplash.com/photos/a-lit-candle-sitting-on-top-of-a-wooden-table-oDfeFV-Y2v0"
    }
  }
};
```
<!-- GENSEKI:EDITABLE:END -->

## 2. 固定するデザインと動作

以下は編集せず、そのまま実装してください。独自のデザイン判断を足さないでください。
```json
{
  "genre_id": "G10",
  "seed_id": "G10-04",
  "title": "SENQARI objects — 暮らしに、香りの時間を。",
  "kind": "product",
  "category": "EC・D2Cブランド",
  "primary_action": "香りを選ぶ",
  "direction": "Warm ochre and ivory fragrance objects. Monumental candle photography beside Japanese serif, italic ritual wordmark, product detail stage and local cart drawer.",
  "sections": [
    {
      "id": "main",
      "purpose": "キャンドルの世界観と商品",
      "layout": "55:45 product photo / editorial copy"
    },
    {
      "id": "collection",
      "purpose": "香り・数量・購入内容を選ぶ",
      "layout": "large square photo plus three variant tabs and buy controls"
    },
    {
      "id": "story",
      "purpose": "素材と器の思想",
      "layout": "copy and large lifestyle photograph"
    },
    {
      "id": "ritual",
      "purpose": "使用手順と火の扱い",
      "layout": "three open numbered columns"
    }
  ],
  "tokens": {
    "background": "#f4efe5",
    "ink": "#53442e",
    "surface": "#e3d6c1",
    "accent": "#b38349",
    "line": "#cbbfa9",
    "font": "Georgia + system Japanese",
    "wrap": "1320px / 48px edges"
  },
  "interactions": [
    "three scent tabs update photo/name/notes/description",
    "arrow/Home/End keyboard tab controls",
    "quantity 1-5 adds to in-memory bag",
    "native modal cart with item removal/count/subtotal",
    "checkout opens summary-only demo, no payment or external submission"
  ],
  "mobile": "700px breakpoint: text-first hero with 450px product photo, stacked product details, full-width bag drawer and stacked numbered ritual rows. Hero overprint uses clamp(56px,20vw,78px), reducing to 64px at 320px viewport rather than overflowing.",
  "editable_notes": "Product copy and scents are in content.js, image metadata in assets. collection.price is the single numeric unit price in JPY; both product display and cart calculations use this value. Prices are fictional concepts; checkout is a demonstration."
}
```

## 3. 実装手順

1. 下の各コードブロックを、指定のファイル名で同じフォルダーに保存する。
2. content.js には第1節の編集後オブジェクトだけを保存する。
3. HTML・CSS・残りのJSは省略・要約・リファクタリング・ライブラリ置換をせず保存する。
4. data-content / data-image は編集値を反映する契約。削除・改名しない。
5. CSSの寸法・色・フォント・breakpoint・画像比率・object-position・余白とDOM順序を守る。
6. 生成AIが新しい写真を選んだり、文章を補ったり、配列の件数を増減したりしない。
7. プレビューの予約・問い合わせ・決済は外部送信しない。実運用への接続は別途実装し、
   接続前は送信成功を表示しない。実績・受賞・顧客レビューを生成しない。
8. 第1節の初期値で保存した場合、GENSEKI公開版と同じ実装になる。
   ブラウザー・OSのフォント描画・外部画像の可用性による差はあり得る。
9. 編集後の公開前に `node prepare.mjs` を実行し、文章・写真・地図・title/OGを静的HTMLへ反映する。

## 4. 参照実装（固定）

### index.html

```html file=index.html
<!doctype html>
<html lang="ja" data-type="product">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>SENQARI — 暮らしに、 香りの時間を。</title><meta name="description" content="暮らしに香りの時間を。植物由来ワックスのフレグランスキャンドル。"><meta name="theme-color" content="#f4efe5"><meta name="page-type" content="product"><meta name="site-kind" content="other"><meta property="og:title" content="SENQARI — 暮らしに、 香りの時間を。"><meta property="og:description" content="暮らしに香りの時間を。植物由来ワックスのフレグランスキャンドル。"><meta property="og:type" content="website"><link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='32' fill='%231f3830'/%3E%3Cpath d='M20 44V20h24v24Z' fill='none' stroke='%23fff' stroke-width='3'/%3E%3C/svg%3E"><link rel="stylesheet" href="style.css"><meta property="og:image" content="https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&amp;fit=crop&amp;w=1600&amp;q=85"><meta name="twitter:card" content="summary_large_image"></head>
<body><a class="skip" href="#main">本文へ移動</a><header class="wrap site-header"><a class="wordmark" href="#main"><span data-content="brand">SENQARI</span><small data-content="brandSub">objects for everyday rituals</small></a><nav class="nav" aria-label="主なナビゲーション"><a href="#collection" data-content="nav.collection">コレクション</a><a href="#story" data-content="nav.story">香りのこと</a><a href="#ritual" data-content="nav.ritual">使い方</a></nav><div class="header-actions"><button type="button" class="cart-toggle" id="cart-toggle" aria-haspopup="dialog"><span data-content="nav.cart">バッグ</span><span id="bag-count" aria-live="polite">0</span></button><button class="menu-toggle" data-menu-toggle aria-controls="mobile-menu" aria-expanded="false">Menu ＋</button></div></header><nav class="mobile-menu" data-menu id="mobile-menu" hidden aria-label="モバイルナビゲーション"><a href="#collection" data-content="nav.collection">コレクション</a><a href="#story" data-content="nav.story">香りのこと</a><a href="#ritual" data-content="nav.ritual">使い方</a></nav><main id="main"><section class="hero" data-enter><figure class="photo hero-photo"><img data-image="assets.hero" src="https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&amp;fit=crop&amp;w=1600&amp;q=85" alt="ガラス容器に入ったキャンドルと穏やかな光" class="" style="object-position:50% 50%" loading="eager" decoding="async"></figure><div class="hero-copy"><p class="eyebrow" data-content="hero.eyebrow">The daily collection / No. 01–03</p><h1 class="serif" data-content="hero.headline">暮らしに、
香りの時間を。</h1><p class="hero-body" data-content="hero.body">火を灯す。ページをめくる。
いつもの部屋で、自分に戻るひととき。</p><a class="button" href="#collection"><span data-content="hero.cta">香りを選ぶ</span><span aria-hidden="true">↗</span></a><p class="hero-detail" data-content="hero.detail">Plant-based wax / 180g / Made for slow evenings</p></div><p class="hero-word serif" aria-hidden="true" data-content="hero.word">Everyday
rituals.</p></section><section class="collection wrap" id="collection"><div class="section-head"><div><p class="eyebrow" data-content="collection.eyebrow">01 / Choose your scent</p><h2 class="serif" data-content="collection.headline">今日の気分に、
似合う香り。</h2></div><p data-content="collection.body">木々の清々しさ、花の余韻、柑橘の明るさ。
3つの香りと、暮らしを彩る器。</p></div><div class="product-layout"><figure class="photo product-photo"><img id="product-image" src="https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1200&q=85" alt="香りのあるキャンドルのガラス容器"></figure><div class="product-copy"><p class="eyebrow" data-content="collection.product">Fragrance candle</p><h3 id="scent-name" class="serif">檜と、雨のあと。</h3><div class="scent-options" role="tablist" aria-label="香りを選ぶ" id="scent-options"></div><div id="scent-description" role="tabpanel" aria-live="polite"><p id="scent-body"></p><div class="notes"><span class="eyebrow" data-content="collection.notesLabel">Scent notes</span><p id="scent-notes"></p></div></div><div class="product-price"><p class="price" data-content="collection.price" data-format="jpy">¥4,620</p><p data-content="collection.tax">税込・送料別</p><p data-content="collection.size">180g / 約35時間</p></div><div class="purchase-row"><label class="quantity"><span data-content="collection.quantity">数量</span><select id="quantity"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></label><button type="button" class="button add" id="add-to-cart"><span data-content="collection.add">バッグに加える</span><span aria-hidden="true">＋</span></button></div><p class="status" id="cart-status" aria-live="polite"></p><details><summary data-content="collection.detailLabel">Product details</summary><p data-content="collection.details">植物由来ワックス / コットン芯 / ガラス容器</p><p data-content="collection.shipping">通常3–5営業日で発送</p><p data-content="collection.deliveryNote">配送料はお届け先により異なります。</p></details></div></div></section><section class="story" id="story" data-reveal><div class="wrap story-grid"><div class="story-copy"><p class="eyebrow" data-content="story.eyebrow">02 / Thoughtfully made</p><h2 class="serif" data-content="story.headline">香りを楽しむために、
引き算を重ねる。</h2><p data-content="story.body">手におさまるガラスの器。燃え方を考えて選ぶワックスと芯。香りが主役になるよう、佇まいはシンプルに。使い終わった器も、暮らしの中でお使いいただけます。</p><p class="story-detail serif" data-content="story.detail">Plant-based wax. Cotton wick. A glass to keep.</p></div><figure class="photo story-photo"><img data-image="assets.story" src="https://images.unsplash.com/photo-1640095889747-2090ee12fa7d?auto=format&amp;fit=crop&amp;w=1600&amp;q=85" alt="木のテーブルに置かれた灯のともるキャンドル" class="" style="object-position:50% 50%" loading="lazy" decoding="async"></figure></div></section><section class="ritual wrap" id="ritual"><div class="section-head"><div><p class="eyebrow" data-content="ritual.eyebrow">03 / A little ritual</p><h2 class="serif" data-content="ritual.headline">灯す前と、
消したあとに。</h2></div></div><div class="ritual-grid"><article><span class="step-num serif">01</span><h3 data-content="ritual.step1Title">芯を整える</h3><p data-content="ritual.step1Body">点火前に芯を5mmほどに整えてください。平らで熱に強い場所で使用します。</p></article><article><span class="step-num serif">02</span><h3 data-content="ritual.step2Title">表面を溶かす</h3><p data-content="ritual.step2Body">初回は表面のワックスが均等に溶けるまで。1回の燃焼は2時間以内を目安にしてください。</p></article><article><span class="step-num serif">03</span><h3 data-content="ritual.step3Title">余韻を楽しむ</h3><p data-content="ritual.step3Body">火を消したあと、器が冷めるまで動かさずに。就寝時や外出時は必ず消火してください。</p></article></div><p class="warning" data-content="ritual.warning">燃焼中は目を離さず、子どもやペット、燃えやすいものから離してお使いください。</p></section></main><footer class="footer"><div class="wrap"><p class="footer-sign serif" data-content="footer.sign">A moment,
just for you.</p><div class="footer-bottom"><p class="footnote" data-content="footer.copyright">© 2026 SENQARI objects</p><p class="footnote" data-content="footer.note">GENSEKI concept / 架空のブランド。注文・決済は行いません。</p><a class="footnote" href="https://unsplash.com/license" data-content="footer.photos">Photographs via Unsplash</a></div></div></footer><dialog class="bag-dialog" id="bag-dialog" aria-labelledby="bag-title"><div class="bag-heading"><h2 class="serif" id="bag-title" data-content="cart.title">Your bag</h2><button class="bag-close" id="bag-close" data-content="cart.close">バッグを閉じる</button></div><div id="bag-items"></div><div class="bag-total"><span data-content="cart.subtotal">小計</span><span id="subtotal"></span></div><p class="bag-shipping" data-content="cart.shipping">送料は本番の購入手続きで計算されます。</p><button class="button checkout" id="checkout" data-demo="バッグの購入内容を確認"><span data-content="cart.checkout">購入内容を確認する</span><span aria-hidden="true">↗</span></button><p class="bag-demo" data-content="cart.demoNote">このストアはデザイン作品です。注文・決済・外部送信は行いません。</p></dialog><script src="content.js"></script><script src="genseki.js"></script><script src="app.js"></script></body></html>
```

### style.css

```css file=style.css
*{box-sizing:border-box}html{scroll-behavior:smooth;scroll-padding-top:90px}body{margin:0;-webkit-font-smoothing:antialiased}body,button,input,select{font-family:"Helvetica Neue",Arial,"Hiragino Kaku Gothic ProN","Noto Sans JP",sans-serif}button,a,input,select{-webkit-tap-highlight-color:transparent}button,input,select{font:inherit}button,a{touch-action:manipulation}button{cursor:pointer}a{color:inherit;text-decoration:none}img{display:block;width:100%;object-fit:cover}button,a,input,select{outline-offset:5px}button:focus-visible,a:focus-visible,input:focus-visible,select:focus-visible{outline:2px solid currentColor}button{color:inherit}h1,h2,h3,p,figure{margin:0}h1,h2,h3{font-weight:400}p{line-height:1.9}button{border-radius:0}main{display:block}[hidden]{display:none!important}.skip{position:fixed;z-index:100;top:10px;left:10px;padding:12px;background:#fff;color:#111;transform:translateY(-150%)}.skip:focus{transform:none}.wrap{width:min(1320px,calc(100% - 96px));margin:auto}.eyebrow{font-size:11px;letter-spacing:.17em;font-weight:500}.serif{font-family:Georgia,"Times New Roman","Hiragino Mincho ProN","Yu Mincho",serif}.photo{overflow:hidden}.photo img{height:100%;transition:transform .7s cubic-bezier(.2,.7,.2,1)}.photo:hover img{transform:scale(1.025)}.arrow{font-family:Arial,sans-serif;font-size:22px}.button{min-height:48px;display:inline-flex;gap:32px;justify-content:space-between;align-items:center;padding:14px 24px;border:1px solid currentColor;background:transparent;font-size:13px;line-height:1.5;transition:transform .2s,background .2s,color .2s}.button:hover{transform:translateY(-2px)}.button:active{transform:translateY(1px)}.menu-toggle{display:none;min-width:44px;min-height:44px;border:0;background:transparent;font-size:13px}.mobile-menu{position:fixed;z-index:30;inset:80px 0 0;background:var(--bg,#faf8f4);padding:40px 24px;display:flex;flex-direction:column;gap:20px}.mobile-menu a{min-height:48px;display:flex;align-items:center;font-size:24px}.footnote{font-size:10px;letter-spacing:.035em;line-height:1.7}.footer-bottom{display:flex;justify-content:space-between;align-items:end;gap:20px;border-top:1px solid currentColor;padding-top:22px;margin-top:48px;opacity:.65}.footer-bottom a{text-decoration:underline;min-height:44px;display:inline-flex;align-items:center}.section-num{font:italic 18px Georgia,serif}.link-line{display:inline-flex;align-items:center;gap:24px;min-height:44px;font-size:13px;border-bottom:1px solid currentColor}.site-header{height:88px;display:flex;align-items:center;justify-content:space-between;gap:24px}.nav{display:flex;align-items:center;gap:36px;font-size:12px}.nav a{display:flex;align-items:center;min-height:44px}.nav a:hover{text-decoration:underline;text-underline-offset:6px}.wordmark{font-family:Georgia,serif;letter-spacing:.04em;font-size:27px;line-height:1;white-space:nowrap}.wordmark small{font:9px Arial,sans-serif;display:block;letter-spacing:.19em;margin-top:7px}.section-head{display:flex;align-items:end;justify-content:space-between;gap:36px;margin-bottom:50px}.section-head h2{font-size:clamp(32px,4vw,56px);line-height:1.35}.section-head p{font-size:13px;max-width:360px}.status{font-size:12px;min-height:24px}.mobile-menu:not([hidden])~main{pointer-events:none}@media(max-width:1000px){.wrap{width:calc(100% - 56px)}.nav{gap:20px}.site-header{height:80px}}@media(max-width:700px){.wrap{width:calc(100% - 40px)}.nav{display:none}.menu-toggle{display:block}.site-header{height:76px}.section-head{align-items:start;flex-direction:column;gap:20px;margin-bottom:30px}.section-head h2{font-size:32px}.footer-bottom{align-items:start;flex-direction:column;margin-top:30px}.button{min-height:48px}.mobile-menu{top:76px}.wordmark{font-size:24px}}@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*,*::before,*::after{animation:none!important;transition:none!important}}
:root{--bg:#f4efe5;--ink:#53442e;--surface:#e3d6c1;--accent:#b38349;--line:#cbbfa9}body{background:var(--bg);color:var(--ink)}.wordmark{font-size:26px;letter-spacing:.13em}.wordmark small{font-size:8px;letter-spacing:.09em}.header-actions{display:flex;align-items:center;gap:15px}.cart-toggle{border:0;background:none;min-height:44px;font-size:11px;display:flex;align-items:center;gap:13px}.cart-toggle span:last-child{width:24px;height:24px;border:1px solid var(--ink);border-radius:50%;display:grid;place-items:center;font-size:10px}.hero{position:relative;display:grid;grid-template-columns:55% 45%;min-height:720px;height:calc(100svh - 88px);max-height:1000px;background:var(--surface)}.hero-photo{height:100%;min-width:0}.hero-copy{padding:70px max(48px,calc((100vw - 1320px)/2)) 75px 12%;display:flex;align-items:start;flex-direction:column;justify-content:center}.hero h1{font-size:clamp(38px,4.4vw,67px);line-height:1.55;letter-spacing:.04em;white-space:pre-line;margin:36px 0 30px}.hero-body{font-size:13px;white-space:pre-line;line-height:2.15}.hero .button{min-width:240px;background:var(--ink);color:var(--bg);border-color:var(--ink);margin-top:36px}.hero-detail{font-size:9px;letter-spacing:.04em;line-height:1.8;margin-top:22px;max-width:290px}.hero-word{position:absolute;left:45px;bottom:30px;font-size:clamp(70px,8vw,120px);font-style:italic;white-space:pre-line;line-height:.92;color:var(--bg);pointer-events:none;letter-spacing:-.045em}.collection{padding-top:110px;padding-bottom:110px;min-height:950px}.section-head .eyebrow{margin-bottom:25px}.section-head h2{white-space:pre-line;line-height:1.55}.section-head p{white-space:pre-line}.product-layout{display:grid;grid-template-columns:53% 1fr;gap:9%;align-items:center}.product-photo{height:620px;background:#e5ddcd}.product-copy h3{font-size:36px;line-height:1.5;margin:22px 0 25px}.scent-options{display:flex;gap:8px;margin-bottom:26px}.scent-option{font-size:10px;background:none;border:1px solid var(--line);padding:12px 10px;min-height:44px;flex:1;white-space:nowrap}.scent-option[aria-selected=true]{background:var(--ink);border-color:var(--ink);color:var(--bg)}#scent-body{font-size:13px;line-height:2.05;min-height:80px}.notes{padding-top:24px}.notes>p{font:italic 17px/1.5 Georgia,serif;margin-top:10px}.notes>.eyebrow{font-size:9px}.product-price{display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;margin:28px 0 24px}.product-price .price{font:32px Georgia,serif}.product-price>p:not(.price){font-size:10px}.product-price>p:last-child{margin-left:auto}.purchase-row{display:flex;gap:12px}.quantity{font-size:10px;display:flex;align-items:center;gap:12px;border:1px solid var(--ink);padding:0 12px}.quantity select{background:none;border:0;min-height:48px;min-width:40px;color:var(--ink);padding:5px}.add{flex:1;background:var(--ink);color:var(--bg);font-size:12px;gap:16px}.product-copy>.status{font-size:10px;margin-top:10px}.product-copy details{border-top:1px solid var(--line);padding-top:5px;margin-top:15px}.product-copy summary{font:17px Georgia,serif;cursor:pointer;min-height:44px;padding:12px 0;list-style-position:inside}.product-copy details p{font-size:11px;line-height:2.1}.story{background:#e7dece;padding:90px 0}.story-grid{display:grid;grid-template-columns:1fr 52%;gap:10%;align-items:center}.story h2{font-size:clamp(30px,3.3vw,48px);line-height:1.6;white-space:pre-line;margin:35px 0 27px}.story-copy>p:not(.eyebrow){font-size:13px;line-height:2.25}.story-detail{font-style:italic;margin-top:32px;font-size:19px!important}.story-photo{height:590px}.ritual{padding-top:110px;padding-bottom:105px;min-height:700px}.ritual-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:48px}.ritual-grid article{border-top:1px solid var(--line);padding-top:24px}.step-num{font-size:48px;font-style:italic}.ritual h3{font-size:18px;margin:28px 0 16px}.ritual-grid p{font-size:12px;line-height:2}.warning{font-size:10px;margin-top:42px;border-top:1px solid var(--line);padding-top:20px}.footer{background:var(--ink);color:var(--bg);padding:70px 0 25px}.footer-sign{font-size:clamp(44px,7vw,100px);line-height:1.15;font-style:italic;white-space:pre-line;letter-spacing:-.025em}.footer-bottom{border-color:#8d7e68}.bag-dialog{position:fixed;inset:0 0 0 auto;width:min(520px,100%);height:100svh;max-height:100svh;max-width:100%;margin:0;border:0;padding:36px;background:var(--bg);color:var(--ink);overflow:auto}.bag-dialog::backdrop{background:#211b1480}.bag-heading{display:flex;justify-content:space-between;gap:20px;align-items:center;margin-bottom:40px}.bag-heading h2{font-size:32px}.bag-close{background:none;border:0;font-size:11px;min-height:44px;text-decoration:underline}.bag-item{display:grid;grid-template-columns:85px 1fr;gap:20px;border-top:1px solid var(--line);padding:24px 0}.bag-item img{width:85px;height:110px}.bag-item h3{font:22px Georgia,serif;margin-bottom:12px}.bag-item p{font-size:11px}.bag-remove{border:0;background:none;text-decoration:underline;font-size:10px;min-height:44px;padding:5px 0}.bag-empty{font-size:13px;padding-bottom:35px}.bag-total{display:flex;justify-content:space-between;align-items:center;border-top:1px solid var(--ink);padding:22px 0;font-size:13px}.bag-total span:last-child{font:28px Georgia,serif}.bag-shipping{font-size:11px}.checkout{background:var(--ink);color:var(--bg);width:100%;margin-top:24px;font-size:12px}.checkout:disabled{opacity:.4;cursor:default}.bag-demo{font-size:10px;margin-top:20px}@media(max-width:1100px){.hero{grid-template-columns:52% 48%;min-height:680px}.hero-copy{padding:45px 28px}.hero h1{font-size:42px}.hero-word{left:28px;font-size:80px}.product-layout{gap:6%;grid-template-columns:50% 1fr}.product-photo{height:570px}.scent-option{font-size:9px;padding:12px 7px}.product-copy h3{font-size:30px}.product-price{gap:8px}.product-price>p:last-child{margin-left:0}.story-grid{gap:7%;grid-template-columns:1fr 48%}.story-photo{height:530px}.story h2{font-size:32px}.ritual-grid{gap:30px}}@media(max-width:700px){.hero{display:flex;flex-direction:column;height:auto;max-height:none;min-height:0}.hero-copy{order:0;padding:36px 20px 42px}.hero h1{font-size:36px;margin:24px 0}.hero-body{font-size:12px}.hero .button{width:100%;margin-top:26px}.hero-photo{order:1;height:450px}.hero-word{font-size:clamp(56px,20vw,78px);left:20px;bottom:26px}.hero-detail{font-size:9px}.collection{padding-top:65px;padding-bottom:65px;min-height:0}.product-layout{grid-template-columns:1fr;gap:35px}.product-photo{height:430px}.product-copy h3{font-size:31px;margin:20px 0}.scent-option{font-size:10px;padding:13px 8px}#scent-body{min-height:0;font-size:12px}.product-price .price{font-size:31px}.product-price>p:last-child{margin-left:auto}.purchase-row{gap:10px}.quantity{padding:0 10px;gap:5px}.add{padding:13px 15px}.story{padding:55px 0}.story-grid{grid-template-columns:1fr;gap:35px}.story h2{font-size:29px;margin:25px 0}.story-copy>p:not(.eyebrow){font-size:12px}.story-photo{height:430px}.ritual{padding-top:65px;padding-bottom:65px;min-height:0}.ritual-grid{grid-template-columns:1fr;gap:28px}.ritual-grid article{display:grid;grid-template-columns:60px 1fr;gap:0 20px;padding-top:22px}.step-num{grid-row:1/3;font-size:42px}.ritual h3{font-size:17px;margin:4px 0 12px}.ritual-grid p{grid-column:2}.warning{font-size:10px;line-height:2;margin-top:30px}.footer{padding-top:50px}.footer-sign{font-size:53px}.bag-dialog{padding:24px}.bag-heading{margin-bottom:25px}.header-actions{gap:7px}.cart-toggle{gap:7px}.wordmark{font-size:23px}.wordmark small{font-size:7px}.menu-toggle{font-size:11px}.nav{gap:24px}}
```

### genseki.js

```javascript file=genseki.js
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
```

### app.js

```javascript file=app.js
(()=>{'use strict';const c=window.SITE_CONTENT;const esc=s=>String(s).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));let selected=0;const cart=new Map(),tabs=document.querySelector('#scent-options'),dialog=document.querySelector('#bag-dialog');const price=Number(c.collection.price);document.querySelector('[data-content="collection.price"]').textContent="¥"+price.toLocaleString("ja-JP");function scent(){tabs.innerHTML=c.scents.map((s,i)=>`<button class="scent-option" type="button" role="tab" id="scent-${s.id}" aria-controls="scent-description" aria-selected="${i===selected}" tabindex="${i===selected?0:-1}" data-scent="${i}">${esc(s.name)}</button>`).join('');const s=c.scents[selected],a=c.assets[s.asset];document.querySelector('#scent-name').textContent=s.japanese;document.querySelector('#scent-body').textContent=s.body;document.querySelector('#scent-notes').textContent=s.notes;document.querySelector('#scent-description').setAttribute('aria-labelledby','scent-'+s.id);const im=document.querySelector('#product-image');im.src=a.url;im.alt=a.alt;im.style.objectPosition=a.position;}function bag(){let count=0,total=0;document.querySelector('#bag-items').innerHTML=cart.size?Array.from(cart).map(([id,n])=>{const s=c.scents.find(s=>s.id===id),a=c.assets[s.asset];count+=n;total+=n*price;return `<article class="bag-item"><img src="${esc(a.url)}" alt="${esc(a.alt)}"><div><h3>${esc(s.name)}</h3><p>${esc(s.japanese)}</p><p>${esc(c.collection.quantity)} ${n} / ¥${(n*price).toLocaleString('ja-JP')}</p><button class="bag-remove" data-remove="${esc(id)}">${esc(c.cart.remove)}</button></div></article>`}).join(''):`<p class="bag-empty">${esc(c.cart.empty)}</p>`;document.querySelector('#bag-count').textContent=count;document.querySelector('#subtotal').textContent='¥'+total.toLocaleString('ja-JP');const co=document.querySelector('#checkout');co.disabled=cart.size===0;co.dataset.demo=Array.from(cart).map(([id,n])=>c.scents.find(s=>s.id===id).name+' × '+n).join(' / ')+' / 小計 ¥'+total.toLocaleString('ja-JP');}tabs.addEventListener('click',e=>{const b=e.target.closest('[data-scent]');if(!b)return;selected=Number(b.dataset.scent);scent();tabs.children[selected].focus()});tabs.addEventListener('keydown',e=>{let n=selected;if(e.key==='ArrowRight')n=(selected+1)%c.scents.length;else if(e.key==='ArrowLeft')n=(selected+c.scents.length-1)%c.scents.length;else if(e.key==='Home')n=0;else if(e.key==='End')n=c.scents.length-1;else return;e.preventDefault();selected=n;scent();tabs.children[selected].focus()});document.querySelector('#add-to-cart').addEventListener('click',()=>{const s=c.scents[selected],n=Number(document.querySelector('#quantity').value);cart.set(s.id,(cart.get(s.id)||0)+n);bag();document.querySelector('#cart-status').textContent=s.name+' / '+n+'点 '+c.cart.added;dialog.showModal()});document.querySelector('#cart-toggle').addEventListener('click',()=>{bag();dialog.showModal()});document.querySelector('#bag-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{const b=e.target.closest('[data-remove]');if(b){cart.delete(b.dataset.remove);bag()}});document.querySelector('#checkout').addEventListener('click',()=>dialog.close());scent();bag();})();
```

### prepare.mjs

```javascript file=prepare.mjs
/* Bake editable content into HTML before publishing, including non-JS share metadata. */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
const directory = path.dirname(fileURLToPath(import.meta.url));
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(directory, 'content.js'), 'utf8'), context, { timeout: 1000 });
const c = context.window.SITE_CONTENT;
const get = key => key.split('.').reduce((value, part) => value == null ? undefined : value[part], c);
const escape = value => String(value).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
const format = (value, attrs) => typeof value !== 'number' ? value : /data-format=["']currency["']/.test(attrs) ? new Intl.NumberFormat('ja-JP',{style:'currency',currency:'JPY',maximumFractionDigits:0}).format(value) + (attrs.match(/data-price-suffix=["']([^"']*)["']/)?.[1] || '') : /data-format=["']jpy["']/.test(attrs) ? '¥' + value.toLocaleString('ja-JP') : value;
let html = fs.readFileSync(path.join(directory, 'index.html'), 'utf8');
html = html.replace(/<([\w-]+)(\s[^>]*?data-content=["']([^"']+)["'][^>]*)>([\s\S]*?)<\/\1>/g, (tag, name, attrs, key) => {
  const value = get(key);
  return ['string', 'number'].includes(typeof value) ? `<${name}${attrs}>${escape(format(value, attrs))}</${name}>` : tag;
});
const attr = (tag, key, value) => {
  const pattern = new RegExp('\\b' + key + '=["\'][^"\']*["\']');
  const next = `${key}="${escape(value)}"`;
  return pattern.test(tag) ? tag.replace(pattern, next) : tag.replace(/\s*\/?>$/, ' ' + next + '>');
};
html = html.replace(/<img\b[^>]*data-image=["']([^"']+)["'][^>]*>/g, (tag, key) => {
  const value = get(key);
  if (!value?.url) return tag;
  return attr(attr(tag, 'src', value.url), 'alt', value.alt || '');
});
html = html.replace(/<a\b[^>]*data-map=["']([^"']+)["'][^>]*>/g, (tag, key) => typeof get(key) === 'string' ? attr(tag, 'href', 'https://www.openstreetmap.org/search?query=' + encodeURIComponent(get(key))) : tag);
const brand = typeof c.brand === 'string' ? c.brand : c.brand?.name || '';
const headline = [c.headline, c.hero?.headline].find(value => typeof value === 'string') || [c.hero?.line1, c.hero?.line2].filter(Boolean).join(' ');
const title = [brand, headline.replace(/\n/g, ' ')].filter(Boolean).join(' — ');
const description = ([c.description,c.intro,c.hero?.body,c.hero?.lead,headline].find(value => typeof value === 'string') || '').replace(/\n/g, ' ');
html = html.replace(/<title>[\s\S]*?<\/title>/i, '<title>' + escape(title) + '</title>');
function meta(key, value, property = false) {
  const type = property ? 'property' : 'name';
  const pattern = new RegExp('<meta\\b[^>]*' + type + '=["\']' + key.replaceAll(':', '\\:') + '["\'][^>]*>', 'i');
  const tag = `<meta ${type}="${key}" content="${escape(value)}">`;
  html = pattern.test(html) ? html.replace(pattern, tag) : html.replace('</head>', tag + '</head>');
}
meta('description', description);
meta('og:title', title, true);
meta('og:description', description, true);
meta('og:type', 'website', true);
if (c.assets?.hero?.url) meta('og:image', c.assets.hero.url, true);
meta('twitter:card', 'summary_large_image');
fs.writeFileSync(path.join(directory, 'index.html'), html);
console.log('Applied editable content and share metadata to index.html');
```

## 5. 完了時に確認すること

- 1440×900、1024×768、768×1024、390×844、320×780で横スクロール・文字の切れがない。
- 編集値が対応する全表示箇所・写真・操作結果へ反映される。初期値のコピーが残らない。
- ナビゲーション・絞り込み・切り替え・主要CTAをキーボードでも操作できる。
- prefers-reduced-motionでは不要な動きを止め、JS無効時も主要な文章が読める。
- 外部への予約・購入・個人情報送信が発生しない。写真の権利を自分の用途で確認する。
- ファイル名・参照関係・内容を変えず納品する。変更が必要なら差分と理由を報告する。

プロンプトの指示に従わないモデル出力や未検証の生成環境まで完全一致を保証しない。
確実に同じサイトから始める場合は、同梱コードをそのまま使いcontent.jsのみを編集する。
