# LISQÉ — 代官山のヘアアトリエ — 編集欄つき・実装固定プロンプト v1

日本向けWebサイトを次の仕様・参照実装で制作してください。
このプロンプトはGENSEKI独自制作の gs-005 / v1 に対応します。
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
  "brand": "LISQÉ",
  "description": "代官山のヘアアトリエ。カットと色で、毎日に馴染む髪へ。",
  "brandSub": "hair atelier / Daikanyama",
  "nav": {
    "concept": "アトリエについて",
    "menu": "メニュー",
    "visit": "アクセス",
    "booking": "予約内容を選ぶ"
  },
  "hero": {
    "eyebrow": "Hair, in your own rhythm.",
    "headline": "代官山のヘアアトリエ。\n毎日に馴染む髪へ。",
    "body": "伸びていく時間まで、美しく。\n髪の質感と、いつもの装いから考えるヘアデザイン。",
    "cta": "予約内容を選ぶ",
    "detail": "Daikanyama, Tokyo / By appointment"
  },
  "concept": {
    "eyebrow": "01 / Our approach",
    "headline": "髪の話から、\nいつもの私の話まで。",
    "body": "朝、髪にかけられる時間。よく着る服。好きな街。カウンセリングでは、仕上がりの写真だけでなく、あなたの日々をお聞きします。髪質と骨格を見ながら、無理なく続くスタイルをご提案します。",
    "detail": "Cut / Color / Care"
  },
  "menu": {
    "eyebrow": "02 / Menu & care",
    "headline": "次の髪を、\nここから。",
    "body": "すべてのメニューにカウンセリングと\nシャンプー・ブローを含みます。",
    "reserve": "このメニューで予約内容を確認",
    "tax": "表示価格は税込です。髪の長さによる追加料金はありません。",
    "duration": "所要時間",
    "price": "料金",
    "included": "メニューに含まれるもの"
  },
  "menus": [
    {
      "id": "cut",
      "tab": "Cut",
      "title": "カット",
      "body": "顔まわりの数ミリから、全体のシルエットまで。乾かしただけでも形が整う、日常に合わせたカット。",
      "duration": "約75分",
      "price": "¥7,700",
      "included": "カウンセリング / シャンプー / カット / ブロー",
      "asset": "menuCut"
    },
    {
      "id": "color",
      "tab": "Cut + Color",
      "title": "カット ＋ カラー",
      "body": "肌の色と、光が当たったときの透け方から選ぶ色。髪の状態に合わせて薬剤を選定します。",
      "duration": "約150分",
      "price": "¥16,500",
      "included": "カウンセリング / カラー / シャンプー / カット / ブロー",
      "asset": "menuColor"
    },
    {
      "id": "care",
      "tab": "Cut + Care",
      "title": "カット ＋ トリートメント",
      "body": "手触りとまとまりを整える集中ケアをカットと一緒に。仕上げには、ご自宅での扱い方もお伝えします。",
      "duration": "約105分",
      "price": "¥12,100",
      "included": "カウンセリング / シャンプー / カット / トリートメント / ブロー",
      "asset": "menuCare"
    }
  ],
  "visit": {
    "eyebrow": "03 / Visit the atelier",
    "headline": "街の喧騒から、\n少し離れて。",
    "body": "明るい窓辺と、余白のあるセット面。\n次の予定を気にせず過ごせるよう、完全予約制でお迎えします。",
    "locationLabel": "Location",
    "location": "東京都渋谷区・代官山",
    "hoursLabel": "Opening hours",
    "hours": "水–金 11:00–20:00 / 土–日 10:00–19:00",
    "closed": "月・火 定休",
    "appointment": "完全予約制 / 最終受付はメニューにより異なります",
    "cta": "予約内容を選ぶ"
  },
  "footer": {
    "sign": "See you at the atelier.",
    "copyright": "© 2026 LISQÉ hair atelier",
    "note": "GENSEKI concept / 架空のサロン。予約の外部送信は行いません。",
    "photos": "Photographs via Unsplash"
  },
  "assets": {
    "hero": {
      "url": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1600&q=85",
      "alt": "柔らかな光のヘアサロン空間",
      "position": "50% 55%"
    },
    "concept": {
      "url": "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1600&q=85",
      "alt": "鏡と椅子が並ぶ明るい美容室",
      "position": "50% 50%"
    },
    "menuCut": {
      "url": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1000&q=85",
      "alt": "ヘアサロンの鏡と椅子",
      "position": "50% 50%"
    },
    "menuColor": {
      "url": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=85",
      "alt": "ヘアケアのために整えられたサロン空間",
      "position": "50% 50%"
    },
    "menuCare": {
      "url": "https://images.unsplash.com/photo-1633681926022-84c23e8cb2b4?auto=format&fit=crop&w=1000&q=85",
      "alt": "ヘアケア製品とアトリエの道具",
      "position": "50% 50%"
    },
    "visit": {
      "url": "https://images.unsplash.com/photo-1633681926022-84c23e8cb2b4?auto=format&fit=crop&w=1600&q=85",
      "alt": "落ち着いたサロンのインテリア",
      "position": "50% 50%"
    }
  }
};
```
<!-- GENSEKI:EDITABLE:END -->

## 2. 固定するデザインと動作

以下は編集せず、そのまま実装してください。独自のデザイン判断を足さないでください。
```json
{
  "genre_id": "G05",
  "seed_id": "G05-01",
  "title": "LISQÉ — 代官山のヘアアトリエ",
  "kind": "place",
  "category": "美容・サロン",
  "primary_action": "予約内容を選ぶ",
  "direction": "Blush and burgundy hair atelier. Editorial Japanese serif, panoramic interior hero under spacious split header, portrait salon photograph, large ruled treatment tabs.",
  "sections": [
    {
      "id": "main",
      "purpose": "代官山の美容室の世界観",
      "layout": "wide type above panoramic photo"
    },
    {
      "id": "concept",
      "purpose": "施術方針",
      "layout": "editorial copy and tall photograph"
    },
    {
      "id": "menu",
      "purpose": "メニューと料金比較",
      "layout": "three tabs and photo/copy panel"
    },
    {
      "id": "visit",
      "purpose": "地区・時間・予約案内",
      "layout": "three ruled information columns"
    }
  ],
  "tokens": {
    "background": "#f2e8e4",
    "ink": "#522b35",
    "surface": "#e3d3cf",
    "line": "#cbb6b6",
    "font": "Georgia + system Japanese",
    "wrap": "1320px / 48px edges"
  },
  "interactions": [
    "cut/color/care tabs update image, text, duration and price",
    "arrow/Home/End keyboard tab navigation",
    "selected treatment passes to demo modal"
  ],
  "mobile": "700px breakpoint: stacked title, 560px photo hero, full-width CTA, stacked menu panel and visit information.",
  "editable_notes": "All copy and menu arrays in content.js. Photo assets are remote stand-ins. Salon/price/hours are fictional; no real reservation or customer information transmission."
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
<html lang="ja" data-type="place">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>LISQÉ — 代官山のヘアアトリエ。 毎日に馴染む髪へ。</title><meta name="description" content="代官山のヘアアトリエ。カットと色で、毎日に馴染む髪へ。"><meta name="theme-color" content="#f2e8e4"><meta name="page-type" content="place"><meta name="site-kind" content="other"><meta property="og:title" content="LISQÉ — 代官山のヘアアトリエ。 毎日に馴染む髪へ。"><meta property="og:description" content="代官山のヘアアトリエ。カットと色で、毎日に馴染む髪へ。"><meta property="og:type" content="website"><link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='32' fill='%231f3830'/%3E%3Cpath d='M20 44V20h24v24Z' fill='none' stroke='%23fff' stroke-width='3'/%3E%3C/svg%3E"><link rel="stylesheet" href="style.css"><meta property="og:image" content="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&amp;fit=crop&amp;w=1600&amp;q=85"><meta name="twitter:card" content="summary_large_image"></head>
<body><a class="skip" href="#main">本文へ移動</a><header class="wrap site-header"><a class="wordmark" href="#main"><span data-content="brand">LISQÉ</span><small data-content="brandSub">hair atelier / Daikanyama</small></a><nav class="nav" aria-label="主なナビゲーション"><a href="#concept" data-content="nav.concept">アトリエについて</a><a href="#menu" data-content="nav.menu">メニュー</a><a href="#visit" data-content="nav.visit">アクセス</a><a class="booking-link" href="#menu" data-content="nav.booking">予約内容を選ぶ</a></nav><button class="menu-toggle" data-menu-toggle aria-controls="mobile-menu" aria-expanded="false">Menu ＋</button></header><nav class="mobile-menu" id="mobile-menu" data-menu hidden aria-label="モバイルナビゲーション"><a href="#concept" data-content="nav.concept">アトリエについて</a><a href="#menu" data-content="nav.menu">メニュー</a><a href="#visit" data-content="nav.visit">アクセス</a></nav><main id="main"><section class="hero" data-enter><div class="hero-top wrap"><p class="eyebrow" data-content="hero.eyebrow">Hair, in your own rhythm.</p><h1 class="serif" data-content="hero.headline">代官山のヘアアトリエ。
毎日に馴染む髪へ。</h1></div><div class="hero-image-wrap"><figure class="photo hero-photo"><img data-image="assets.hero" src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&amp;fit=crop&amp;w=1600&amp;q=85" alt="柔らかな光のヘアサロン空間" class="" style="object-position:50% 55%" loading="eager" decoding="async"></figure><div class="hero-lower wrap"><p data-content="hero.body">伸びていく時間まで、美しく。
髪の質感と、いつもの装いから考えるヘアデザイン。</p><a href="#menu" class="button"><span data-content="hero.cta">予約内容を選ぶ</span><span aria-hidden="true">↗</span></a><p class="hero-detail" data-content="hero.detail">Daikanyama, Tokyo / By appointment</p></div></div></section><section class="concept wrap" id="concept" data-reveal><div class="concept-copy"><p class="eyebrow" data-content="concept.eyebrow">01 / Our approach</p><h2 class="serif" data-content="concept.headline">髪の話から、
いつもの私の話まで。</h2><p class="body-copy" data-content="concept.body">朝、髪にかけられる時間。よく着る服。好きな街。カウンセリングでは、仕上がりの写真だけでなく、あなたの日々をお聞きします。髪質と骨格を見ながら、無理なく続くスタイルをご提案します。</p><p class="small-type" data-content="concept.detail">Cut / Color / Care</p></div><figure class="photo concept-photo"><img data-image="assets.concept" src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&amp;fit=crop&amp;w=1600&amp;q=85" alt="鏡と椅子が並ぶ明るい美容室" class="" style="object-position:50% 50%" loading="lazy" decoding="async"></figure></section><section class="menu-section" id="menu"><div class="wrap"><div class="section-head"><div><p class="eyebrow" data-content="menu.eyebrow">02 / Menu &amp; care</p><h2 class="serif" data-content="menu.headline">次の髪を、
ここから。</h2></div><p data-content="menu.body">すべてのメニューにカウンセリングと
シャンプー・ブローを含みます。</p></div><div class="menu-tabs" role="tablist" aria-label="ヘアメニュー" id="menu-tabs"></div><div class="menu-panel" id="menu-panel" role="tabpanel" aria-live="polite"></div><p class="menu-tax" data-content="menu.tax">表示価格は税込です。髪の長さによる追加料金はありません。</p></div></section><section class="visit wrap" id="visit"><div class="section-head"><div><p class="eyebrow" data-content="visit.eyebrow">03 / Visit the atelier</p><h2 class="serif" data-content="visit.headline">街の喧騒から、
少し離れて。</h2></div><p data-content="visit.body">明るい窓辺と、余白のあるセット面。
次の予定を気にせず過ごせるよう、完全予約制でお迎えします。</p></div><div class="visit-details"><div><span class="eyebrow" data-content="visit.locationLabel">Location</span><p data-content="visit.location">東京都渋谷区・代官山</p></div><div><span class="eyebrow" data-content="visit.hoursLabel">Opening hours</span><p data-content="visit.hours">水–金 11:00–20:00 / 土–日 10:00–19:00</p><p data-content="visit.closed">月・火 定休</p></div><div><p data-content="visit.appointment">完全予約制 / 最終受付はメニューにより異なります</p><a class="link-line" href="#menu"><span data-content="visit.cta">予約内容を選ぶ</span><span aria-hidden="true">↗</span></a></div></div></section></main><footer class="footer"><div class="wrap"><p class="footer-sign serif" data-content="footer.sign">See you at the atelier.</p><div class="footer-bottom"><p class="footnote" data-content="footer.copyright">© 2026 LISQÉ hair atelier</p><p class="footnote" data-content="footer.note">GENSEKI concept / 架空のサロン。予約の外部送信は行いません。</p><a class="footnote" href="https://unsplash.com/license" data-content="footer.photos">Photographs via Unsplash</a></div></div></footer><script src="content.js"></script><script src="genseki.js"></script><script src="app.js"></script></body></html>
```

### style.css

```css file=style.css
*{box-sizing:border-box}html{scroll-behavior:smooth;scroll-padding-top:90px}body{margin:0;-webkit-font-smoothing:antialiased}body,button,input,select{font-family:"Helvetica Neue",Arial,"Hiragino Kaku Gothic ProN","Noto Sans JP",sans-serif}button,a,input,select{-webkit-tap-highlight-color:transparent}button,input,select{font:inherit}button,a{touch-action:manipulation}button{cursor:pointer}a{color:inherit;text-decoration:none}img{display:block;width:100%;object-fit:cover}button,a,input,select{outline-offset:5px}button:focus-visible,a:focus-visible,input:focus-visible,select:focus-visible{outline:2px solid currentColor}button{color:inherit}h1,h2,h3,p,figure{margin:0}h1,h2,h3{font-weight:400}p{line-height:1.9}button{border-radius:0}main{display:block}[hidden]{display:none!important}.skip{position:fixed;z-index:100;top:10px;left:10px;padding:12px;background:#fff;color:#111;transform:translateY(-150%)}.skip:focus{transform:none}.wrap{width:min(1320px,calc(100% - 96px));margin:auto}.eyebrow{font-size:11px;letter-spacing:.17em;font-weight:500}.serif{font-family:Georgia,"Times New Roman","Hiragino Mincho ProN","Yu Mincho",serif}.photo{overflow:hidden}.photo img{height:100%;transition:transform .7s cubic-bezier(.2,.7,.2,1)}.photo:hover img{transform:scale(1.025)}.arrow{font-family:Arial,sans-serif;font-size:22px}.button{min-height:48px;display:inline-flex;gap:32px;justify-content:space-between;align-items:center;padding:14px 24px;border:1px solid currentColor;background:transparent;font-size:13px;line-height:1.5;transition:transform .2s,background .2s,color .2s}.button:hover{transform:translateY(-2px)}.button:active{transform:translateY(1px)}.menu-toggle{display:none;min-width:44px;min-height:44px;border:0;background:transparent;font-size:13px}.mobile-menu{position:fixed;z-index:30;inset:80px 0 0;background:var(--bg,#faf8f4);padding:40px 24px;display:flex;flex-direction:column;gap:20px}.mobile-menu a{min-height:48px;display:flex;align-items:center;font-size:24px}.footnote{font-size:10px;letter-spacing:.035em;line-height:1.7}.footer-bottom{display:flex;justify-content:space-between;align-items:end;gap:20px;border-top:1px solid currentColor;padding-top:22px;margin-top:48px;opacity:.65}.footer-bottom a{text-decoration:underline;min-height:44px;display:inline-flex;align-items:center}.section-num{font:italic 18px Georgia,serif}.link-line{display:inline-flex;align-items:center;gap:24px;min-height:44px;font-size:13px;border-bottom:1px solid currentColor}.site-header{height:88px;display:flex;align-items:center;justify-content:space-between;gap:24px}.nav{display:flex;align-items:center;gap:36px;font-size:12px}.nav a{display:flex;align-items:center;min-height:44px}.nav a:hover{text-decoration:underline;text-underline-offset:6px}.wordmark{font-family:Georgia,serif;letter-spacing:.04em;font-size:27px;line-height:1;white-space:nowrap}.wordmark small{font:9px Arial,sans-serif;display:block;letter-spacing:.19em;margin-top:7px}.section-head{display:flex;align-items:end;justify-content:space-between;gap:36px;margin-bottom:50px}.section-head h2{font-size:clamp(32px,4vw,56px);line-height:1.35}.section-head p{font-size:13px;max-width:360px}.status{font-size:12px;min-height:24px}.mobile-menu:not([hidden])~main{pointer-events:none}@media(max-width:1000px){.wrap{width:calc(100% - 56px)}.nav{gap:20px}.site-header{height:80px}}@media(max-width:700px){.wrap{width:calc(100% - 40px)}.nav{display:none}.menu-toggle{display:block}.site-header{height:76px}.section-head{align-items:start;flex-direction:column;gap:20px;margin-bottom:30px}.section-head h2{font-size:32px}.footer-bottom{align-items:start;flex-direction:column;margin-top:30px}.button{min-height:48px}.mobile-menu{top:76px}.wordmark{font-size:24px}}@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*,*::before,*::after{animation:none!important;transition:none!important}}
:root{--bg:#f2e8e4;--ink:#522b35;--line:#cbb6b6}body{background:var(--bg);color:var(--ink)}.wordmark{font-size:34px;letter-spacing:.17em}.booking-link{border-bottom:1px solid var(--ink)}.hero{min-height:calc(100svh - 88px)}.hero-top{padding-top:30px;padding-bottom:42px;display:flex;align-items:start;justify-content:space-between;gap:35px}.hero-top .eyebrow{padding-top:12px;font-size:10px}.hero h1{font-size:clamp(34px,4.15vw,64px);line-height:1.55;letter-spacing:.035em;white-space:pre-line;width:68%}.hero-image-wrap{position:relative;height:570px}.hero-photo{height:100%;width:100%}.hero-photo img{object-position:center 55%}.hero-photo:after{content:"";position:absolute;inset:0;background:linear-gradient(0deg,rgba(22,17,16,.64),transparent 58%);pointer-events:none}.hero-lower{position:absolute;bottom:40px;left:0;right:0;display:flex;align-items:end;justify-content:space-between;color:#fff;gap:30px;flex-wrap:wrap}.hero-lower>p:first-child{font-size:13px;line-height:2;white-space:pre-line;max-width:480px}.hero-lower .button{background:var(--bg);color:var(--ink);border-color:var(--bg);min-width:230px}.hero-detail{flex-basis:100%;font-size:9px;letter-spacing:.12em}.concept{min-height:850px;padding-top:100px;padding-bottom:100px;display:grid;grid-template-columns:1fr 48%;gap:11%;align-items:center}.concept h2{font-size:clamp(32px,3.5vw,52px);line-height:1.65;white-space:pre-line;margin:36px 0}.body-copy{font-size:13px;line-height:2.35;max-width:390px}.small-type{font:italic 20px Georgia,serif;margin-top:30px}.concept-photo{height:620px}.menu-section{background:#e3d3cf;padding:100px 0 90px;min-height:900px}.section-head .eyebrow{margin-bottom:24px}.section-head h2{white-space:pre-line}.section-head p{white-space:pre-line}.menu-tabs{display:flex;gap:0;border-bottom:1px solid var(--line);margin:0 0 36px}.menu-tab{background:none;border:0;padding:18px 32px;font-family:Georgia,serif;font-size:21px;min-height:60px;flex:1;color:var(--ink);border-bottom:2px solid transparent;transition:background .2s}.menu-tab[aria-selected=true]{border-bottom-color:var(--ink);background:#dac5c0}.menu-tab:hover{background:#dcc9c4}.menu-panel{display:grid;grid-template-columns:46% 1fr;gap:8%;align-items:center}.menu-photo{height:410px}.menu-copy h3{font:30px/1.5 Georgia,"Yu Mincho",serif;margin:5px 0 20px}.menu-copy>p{font-size:13px;line-height:2}.menu-meta{display:grid;grid-template-columns:1fr 1fr;gap:24px;border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:22px 0;margin:26px 0}.menu-meta dt{font-size:10px;margin-bottom:8px}.menu-meta dd{font:22px Georgia,serif;margin:0}.menu-included{font-size:10px!important;margin-bottom:22px}.menu-copy .button{font-size:12px;background:var(--ink);color:var(--bg)}.menu-tax{font-size:10px;margin-top:28px;text-align:right}.visit{padding-top:110px;padding-bottom:100px;min-height:620px}.visit-details{display:grid;grid-template-columns:1fr 1.3fr 1fr;gap:50px;border-top:1px solid var(--line);padding-top:35px}.visit-details p{font-size:12px;white-space:pre-line;margin-top:16px}.visit-details .link-line{margin-top:18px}.footer{background:var(--ink);color:var(--bg);padding:65px 0 25px}.footer-sign{font-size:clamp(30px,5.1vw,76px);font-style:italic}.footer-bottom{border-color:#89666c}@media(max-width:1000px){.hero-top{flex-direction:column;gap:20px}.hero h1{width:auto;font-size:42px}.hero-image-wrap{height:510px}.concept{gap:7%;grid-template-columns:1fr 46%}.concept h2{font-size:35px}.concept-photo{height:540px}.visit-details{gap:26px}.menu-panel{gap:6%}.menu-copy .button{gap:14px;padding:14px}}@media(max-width:700px){.hero{min-height:0}.hero-top{padding-top:18px;padding-bottom:28px;gap:20px}.hero-top .eyebrow{font-size:9px}.hero h1{font-size:29px;line-height:1.7}.hero-image-wrap{height:560px}.hero-photo img{object-position:48% 50%}.hero-lower{bottom:24px;gap:20px;flex-direction:column;align-items:start}.hero-lower>p:first-child{font-size:12px}.hero-lower .button{width:100%}.hero-detail{flex-basis:auto}.concept{min-height:0;padding:65px 0;grid-template-columns:1fr;gap:35px}.concept-copy{order:0}.concept h2{font-size:31px;margin:25px 0}.concept-photo{height:430px}.menu-section{padding:60px 0;min-height:0}.menu-tabs{margin-bottom:25px}.menu-tab{padding:16px 6px;font-size:16px;min-height:58px}.menu-panel{grid-template-columns:1fr;gap:30px}.menu-photo{height:330px}.menu-copy h3{font-size:27px}.menu-copy .button{width:100%;justify-content:space-between}.menu-tax{text-align:left;line-height:1.9}.visit{padding:65px 0;min-height:0}.visit-details{grid-template-columns:1fr;gap:30px}.visit-details p{margin-top:10px}.footer{padding-top:45px}.footer-sign{font-size:33px}.footer-bottom{margin-top:35px}}
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
(() => {'use strict'; const c=window.SITE_CONTENT;const tabs=document.querySelector('#menu-tabs'),panel=document.querySelector('#menu-panel');let active=0;const esc=s=>String(s).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));function render(){tabs.innerHTML=c.menus.map((m,i)=>`<button type="button" class="menu-tab" role="tab" id="tab-${m.id}" aria-controls="menu-panel" aria-selected="${i===active}" tabindex="${i===active?0:-1}" data-index="${i}">${esc(m.tab)}</button>`).join('');const m=c.menus[active],a=c.assets[m.asset];panel.setAttribute('aria-labelledby','tab-'+m.id);panel.innerHTML=`<figure class="photo menu-photo"><img src="${esc(a.url)}" alt="${esc(a.alt)}" style="object-position:${esc(a.position)}"></figure><div class="menu-copy"><h3>${esc(m.title)}</h3><p>${esc(m.body)}</p><dl class="menu-meta"><div><dt>${esc(c.menu.duration)}</dt><dd>${esc(m.duration)}</dd></div><div><dt>${esc(c.menu.price)}</dt><dd>${esc(m.price)}</dd></div></dl><p class="menu-included">${esc(m.included)}</p><button class="button" data-demo="${esc(m.title)} / ${esc(m.duration)} / ${esc(m.price)}"><span>${esc(c.menu.reserve)}</span><span aria-hidden="true">↗</span></button></div>`;}tabs.addEventListener('click',e=>{const b=e.target.closest('[data-index]');if(!b)return;active=Number(b.dataset.index);render();tabs.children[active].focus()});tabs.addEventListener('keydown',e=>{let next=active;if(e.key==='ArrowRight')next=(active+1)%c.menus.length;else if(e.key==='ArrowLeft')next=(active+c.menus.length-1)%c.menus.length;else if(e.key==='Home')next=0;else if(e.key==='End')next=c.menus.length-1;else return;e.preventDefault();active=next;render();tabs.children[active].focus()});render();})();
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
