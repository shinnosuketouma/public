# NERIQUA — 東京の住まいに、自分の余白を。 — 編集欄つき・実装固定プロンプト v1

日本向けWebサイトを次の仕様・参照実装で制作してください。
このプロンプトはGENSEKI独自制作の gs-004 / v1 に対応します。
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
  "brand": "NERIQUA",
  "description": "東京の賃貸住宅を、暮らし方から選ぶ。",
  "nav": {
    "homes": "住まいを探す",
    "journal": "暮らしの視点",
    "contact": "内覧を相談する"
  },
  "hero": {
    "eyebrow": "Tokyo living, thoughtfully selected.",
    "headline": "東京の住まいに、\n自分の余白を。",
    "body": "光の入り方、窓からの景色、街との距離。\n間取りの先にある、あなたらしい暮らしを探します。",
    "location": "東京・目黒 / 世田谷 / 渋谷",
    "cta": "住まいを探す",
    "scroll": "Scroll to find your place"
  },
  "search": {
    "title": "暮らしの条件を選ぶ",
    "rent": "月額賃料",
    "layout": "間取り",
    "rentAll": "すべての賃料",
    "layoutAll": "すべての間取り",
    "submit": "条件に合う住まいを見る",
    "count": "件の住まい",
    "rentThreshold": 180000,
    "rentLowSuffix": "以下",
    "rentHighSuffix": "超"
  },
  "homes": {
    "eyebrow": "01 / Selected residences",
    "headline": "窓の向こうから、\n暮らしを選ぶ。",
    "body": "数を並べるより、一室ごとの居心地を。\n街の空気まで伝わる住まいを紹介します。",
    "empty": "選択した条件の住まいはありません。条件を変えてお試しください。",
    "favorite": "住まいを保存",
    "saved": "保存済み",
    "details": "この住まいの内覧を相談",
    "rentUnit": "円 / 月"
  },
  "residences": [
    {
      "id": "a",
      "title": "光をあつめる、角の部屋。",
      "area": "目黒区・祐天寺",
      "rent": 178000,
      "layout": "1LDK",
      "size": "43.2㎡",
      "detail": "南東向き / 2階 / バルコニー",
      "asset": "home1"
    },
    {
      "id": "b",
      "title": "仕事の合間に、緑の時間。",
      "area": "世田谷区・松陰神社前",
      "rent": 215000,
      "layout": "2LDK",
      "size": "58.6㎡",
      "detail": "ワークスペース / 3階 / 緑道沿い",
      "asset": "home2"
    },
    {
      "id": "c",
      "title": "好きなものが、似合う部屋。",
      "area": "渋谷区・幡ヶ谷",
      "rent": 162000,
      "layout": "1LDK",
      "size": "38.5㎡",
      "detail": "無垢床 / 4階 / 独立キッチン",
      "asset": "home3"
    }
  ],
  "journal": {
    "eyebrow": "02 / A note on living",
    "headline": "好きな街に、\n帰る理由がある。",
    "body": "駅までの分数だけでは見つからない、住まいの魅力があります。朝のコーヒーを買う店。夕方の散歩道。窓を開けたときの音。NERIQUAは、部屋と街をひとつの暮らしとして紹介します。",
    "cta": "暮らしの相談をする"
  },
  "contact": {
    "eyebrow": "Your next chapter",
    "headline": "次の暮らしを、\n一緒に見つけましょう。",
    "body": "気になる住まいがあれば、まずは内覧から。\n引越しの時期や希望のエリアもお聞かせください。",
    "cta": "内覧を相談する",
    "area": "Tokyo, Japan"
  },
  "footer": {
    "copyright": "© 2026 NERIQUA",
    "note": "GENSEKI concept / 架空のブランド・物件。内覧申込の外部送信は行いません。",
    "photos": "Photographs via Unsplash"
  },
  "assets": {
    "hero": {
      "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
      "alt": "大きな窓と木の家具がある明るいリビング",
      "position": "50% 50%"
    },
    "home1": {
      "url": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
      "alt": "白い壁と広い窓のあるリビング",
      "position": "50% 50%"
    },
    "home2": {
      "url": "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1000&q=85",
      "alt": "木のテーブルと植物がある室内",
      "position": "50% 50%"
    },
    "home3": {
      "url": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85",
      "alt": "柔らかい光が入る住空間",
      "position": "50% 50%"
    },
    "journal": {
      "url": "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1600&q=85",
      "alt": "窓辺の椅子と植物のある居住空間",
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
  "genre_id": "G04",
  "seed_id": "G04-01",
  "title": "NERIQUA — 東京の住まいに、自分の余白を。",
  "kind": "service",
  "category": "不動産・物件紹介",
  "primary_action": "内覧を相談する",
  "direction": "Ink blue and ivory editorial property journal. Split typographic hero, full-height residential photography, ruled search form, three-column residences and soft green journal.",
  "sections": [
    {
      "id": "main",
      "purpose": "東京の賃貸住宅探し",
      "layout": "44:56 typography/photo, first viewport"
    },
    {
      "id": "homes",
      "purpose": "賃料・間取り検索と保存",
      "layout": "ruled search then three properties"
    },
    {
      "id": "journal",
      "purpose": "街と暮らしを伝える",
      "layout": "55:45 large portrait image and editorial copy"
    },
    {
      "id": "contact",
      "purpose": "内覧相談",
      "layout": "open split copy then giant wordmark"
    }
  ],
  "tokens": {
    "background": "#f4f3ee",
    "ink": "#213342",
    "surface": "#e5e8e6",
    "line": "#b8c0c3",
    "font": "Georgia + system Japanese",
    "wrap": "1320px / 48px edges"
  },
  "interactions": [
    "search.rentThreshold is the single numeric boundary for rent option labels and low/high filtering",
    "layout filtering 1LDK/2LDK, AND relation",
    "favorite state in memory",
    "property-specific demo dialog"
  ],
  "mobile": "700px breakpoint: stacked hero, full-width CTA, one property per row, mobile menu.",
  "editable_notes": "All visible editorial copy in content.js; property cards generated from residences; image URLs/alt/focal point in assets. Contacts are demos, prices/locations are fictional concepts. search.rentThreshold is the numeric JPY boundary; low/high option labels are derived by app.js from this number and the suffixes."
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
<html lang="ja" data-type="service">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>NERIQUA — 東京の住まいに、 自分の余白を。</title><meta name="description" content="東京の賃貸住宅を、暮らし方から選ぶ。"><meta name="theme-color" content="#f4f3ee"><meta name="page-type" content="service"><meta name="site-kind" content="other"><meta property="og:title" content="NERIQUA — 東京の住まいに、 自分の余白を。"><meta property="og:description" content="東京の賃貸住宅を、暮らし方から選ぶ。"><meta property="og:type" content="website"><link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='32' fill='%231f3830'/%3E%3Cpath d='M20 44V20h24v24Z' fill='none' stroke='%23fff' stroke-width='3'/%3E%3C/svg%3E"><link rel="stylesheet" href="style.css"><meta property="og:image" content="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&amp;fit=crop&amp;w=1600&amp;q=85"><meta name="twitter:card" content="summary_large_image"></head>
<body><a class="skip" href="#main">本文へ移動</a><header class="wrap site-header"><a class="wordmark" href="#main" data-content="brand">NERIQUA</a><nav class="nav" aria-label="主なナビゲーション"><a href="#homes" data-content="nav.homes">住まいを探す</a><a href="#journal" data-content="nav.journal">暮らしの視点</a><a href="#contact" data-content="nav.contact">内覧を相談する</a></nav><button class="menu-toggle" data-menu-toggle aria-expanded="false" aria-controls="mobile-menu">Menu ＋</button></header><nav class="mobile-menu" id="mobile-menu" data-menu hidden aria-label="モバイルナビゲーション"><a href="#homes" data-content="nav.homes">住まいを探す</a><a href="#journal" data-content="nav.journal">暮らしの視点</a><a href="#contact" data-content="nav.contact">内覧を相談する</a></nav><main id="main"><section class="hero" data-enter><div class="hero-type"><p class="eyebrow" data-content="hero.eyebrow">Tokyo living, thoughtfully selected.</p><h1 class="serif" data-content="hero.headline">東京の住まいに、
自分の余白を。</h1><p class="hero-body" data-content="hero.body">光の入り方、窓からの景色、街との距離。
間取りの先にある、あなたらしい暮らしを探します。</p><p class="hero-location" data-content="hero.location">東京・目黒 / 世田谷 / 渋谷</p><a class="button" href="#homes"><span data-content="hero.cta">住まいを探す</span><span aria-hidden="true">↗</span></a></div><figure class="hero-photo photo"><img data-image="assets.hero" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&amp;fit=crop&amp;w=1600&amp;q=85" alt="大きな窓と木の家具がある明るいリビング" class="" style="object-position:50% 50%" loading="eager" decoding="async"></figure><span class="hero-side" data-content="hero.scroll">Scroll to find your place</span></section><section class="homes wrap" id="homes"><div class="section-head"><div><p class="eyebrow" data-content="homes.eyebrow">01 / Selected residences</p><h2 class="serif" data-content="homes.headline">窓の向こうから、
暮らしを選ぶ。</h2></div><p data-content="homes.body">数を並べるより、一室ごとの居心地を。
街の空気まで伝わる住まいを紹介します。</p></div><form class="search" id="search-form"><p data-content="search.title">暮らしの条件を選ぶ</p><label><span data-content="search.rent">月額賃料</span><select id="rent-filter"><option value="all" data-content="search.rentAll">すべての賃料</option><option value="low" data-rent-label="low">18万円以下</option><option value="high" data-rent-label="high">18万円超</option></select></label><label><span data-content="search.layout">間取り</span><select id="layout-filter"><option value="all" data-content="search.layoutAll">すべての間取り</option><option>1LDK</option><option>2LDK</option></select></label><button type="submit" class="button"><span data-content="search.submit">条件に合う住まいを見る</span><span aria-hidden="true">↗</span></button></form><p class="result-status status" id="result-count" aria-live="polite"></p><div class="home-grid" id="home-grid"></div><p id="empty-state" hidden data-content="homes.empty">選択した条件の住まいはありません。条件を変えてお試しください。</p></section><section id="journal" class="journal" data-reveal><div class="wrap journal-grid"><figure class="photo journal-photo"><img data-image="assets.journal" src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&amp;fit=crop&amp;w=1600&amp;q=85" alt="窓辺の椅子と植物のある居住空間" class="" style="object-position:50% 50%" loading="lazy" decoding="async"></figure><div class="journal-copy"><p class="eyebrow" data-content="journal.eyebrow">02 / A note on living</p><h2 class="serif" data-content="journal.headline">好きな街に、
帰る理由がある。</h2><p data-content="journal.body">駅までの分数だけでは見つからない、住まいの魅力があります。朝のコーヒーを買う店。夕方の散歩道。窓を開けたときの音。NERIQUAは、部屋と街をひとつの暮らしとして紹介します。</p><button class="link-line" data-demo="暮らしの相談"><span data-content="journal.cta">暮らしの相談をする</span><span aria-hidden="true">↗</span></button></div></div></section><section class="contact wrap" id="contact"><p class="eyebrow" data-content="contact.eyebrow">Your next chapter</p><div class="contact-row"><h2 class="serif" data-content="contact.headline">次の暮らしを、
一緒に見つけましょう。</h2><div><p data-content="contact.body">気になる住まいがあれば、まずは内覧から。
引越しの時期や希望のエリアもお聞かせください。</p><button class="button" data-demo="内覧の相談"><span data-content="contact.cta">内覧を相談する</span><span aria-hidden="true">↗</span></button></div></div><p class="giant-brand" aria-hidden="true" data-content="brand">NERIQUA</p></section></main><footer class="wrap"><div class="footer-bottom"><p class="footnote" data-content="footer.copyright">© 2026 NERIQUA</p><p class="footnote" data-content="footer.note">GENSEKI concept / 架空のブランド・物件。内覧申込の外部送信は行いません。</p><a class="footnote" href="https://unsplash.com/license" data-content="footer.photos">Photographs via Unsplash</a></div></footer><script src="content.js"></script><script src="genseki.js"></script><script src="app.js"></script></body></html>
```

### style.css

```css file=style.css
*{box-sizing:border-box}html{scroll-behavior:smooth;scroll-padding-top:90px}body{margin:0;-webkit-font-smoothing:antialiased}body,button,input,select{font-family:"Helvetica Neue",Arial,"Hiragino Kaku Gothic ProN","Noto Sans JP",sans-serif}button,a,input,select{-webkit-tap-highlight-color:transparent}button,input,select{font:inherit}button,a{touch-action:manipulation}button{cursor:pointer}a{color:inherit;text-decoration:none}img{display:block;width:100%;object-fit:cover}button,a,input,select{outline-offset:5px}button:focus-visible,a:focus-visible,input:focus-visible,select:focus-visible{outline:2px solid currentColor}button{color:inherit}h1,h2,h3,p,figure{margin:0}h1,h2,h3{font-weight:400}p{line-height:1.9}button{border-radius:0}main{display:block}[hidden]{display:none!important}.skip{position:fixed;z-index:100;top:10px;left:10px;padding:12px;background:#fff;color:#111;transform:translateY(-150%)}.skip:focus{transform:none}.wrap{width:min(1320px,calc(100% - 96px));margin:auto}.eyebrow{font-size:11px;letter-spacing:.17em;font-weight:500}.serif{font-family:Georgia,"Times New Roman","Hiragino Mincho ProN","Yu Mincho",serif}.photo{overflow:hidden}.photo img{height:100%;transition:transform .7s cubic-bezier(.2,.7,.2,1)}.photo:hover img{transform:scale(1.025)}.arrow{font-family:Arial,sans-serif;font-size:22px}.button{min-height:48px;display:inline-flex;gap:32px;justify-content:space-between;align-items:center;padding:14px 24px;border:1px solid currentColor;background:transparent;font-size:13px;line-height:1.5;transition:transform .2s,background .2s,color .2s}.button:hover{transform:translateY(-2px)}.button:active{transform:translateY(1px)}.menu-toggle{display:none;min-width:44px;min-height:44px;border:0;background:transparent;font-size:13px}.mobile-menu{position:fixed;z-index:30;inset:80px 0 0;background:var(--bg,#faf8f4);padding:40px 24px;display:flex;flex-direction:column;gap:20px}.mobile-menu a{min-height:48px;display:flex;align-items:center;font-size:24px}.footnote{font-size:10px;letter-spacing:.035em;line-height:1.7}.footer-bottom{display:flex;justify-content:space-between;align-items:end;gap:20px;border-top:1px solid currentColor;padding-top:22px;margin-top:48px;opacity:.65}.footer-bottom a{text-decoration:underline;min-height:44px;display:inline-flex;align-items:center}.section-num{font:italic 18px Georgia,serif}.link-line{display:inline-flex;align-items:center;gap:24px;min-height:44px;font-size:13px;border-bottom:1px solid currentColor}.site-header{height:88px;display:flex;align-items:center;justify-content:space-between;gap:24px}.nav{display:flex;align-items:center;gap:36px;font-size:12px}.nav a{display:flex;align-items:center;min-height:44px}.nav a:hover{text-decoration:underline;text-underline-offset:6px}.wordmark{font-family:Georgia,serif;letter-spacing:.04em;font-size:27px;line-height:1;white-space:nowrap}.wordmark small{font:9px Arial,sans-serif;display:block;letter-spacing:.19em;margin-top:7px}.section-head{display:flex;align-items:end;justify-content:space-between;gap:36px;margin-bottom:50px}.section-head h2{font-size:clamp(32px,4vw,56px);line-height:1.35}.section-head p{font-size:13px;max-width:360px}.status{font-size:12px;min-height:24px}.mobile-menu:not([hidden])~main{pointer-events:none}@media(max-width:1000px){.wrap{width:calc(100% - 56px)}.nav{gap:20px}.site-header{height:80px}}@media(max-width:700px){.wrap{width:calc(100% - 40px)}.nav{display:none}.menu-toggle{display:block}.site-header{height:76px}.section-head{align-items:start;flex-direction:column;gap:20px;margin-bottom:30px}.section-head h2{font-size:32px}.footer-bottom{align-items:start;flex-direction:column;margin-top:30px}.button{min-height:48px}.mobile-menu{top:76px}.wordmark{font-size:24px}}@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*,*::before,*::after{animation:none!important;transition:none!important}}
:root{--bg:#f4f3ee;--ink:#213342;--line:#b8c0c3}body{background:var(--bg);color:var(--ink)}.hero{height:calc(100svh - 88px);min-height:660px;max-height:1000px;display:grid;grid-template-columns:44% 56%;position:relative}.hero-type{padding:72px 8% 60px max(48px,calc((100vw - 1320px)/2));display:flex;align-items:start;flex-direction:column;justify-content:center}.hero h1{font-size:clamp(38px,4.05vw,65px);line-height:1.55;letter-spacing:.045em;white-space:pre-line;margin:35px 0}.hero-body{font-size:13px;white-space:pre-line}.hero-location{font-size:11px;letter-spacing:.08em;margin:26px 0 36px}.hero .button{width:240px;background:var(--ink);color:var(--bg);border-color:var(--ink)}.hero-photo{height:100%;min-width:0}.hero-side{position:absolute;right:20px;bottom:28px;writing-mode:vertical-rl;color:#fff;font-size:10px;letter-spacing:.12em}.homes{padding-top:112px;padding-bottom:120px;min-height:900px}.section-head .eyebrow{margin-bottom:24px}.section-head h2{white-space:pre-line;letter-spacing:.03em}.section-head p{white-space:pre-line}.search{display:grid;grid-template-columns:1fr 1fr 1fr auto;border-top:1px solid var(--line);border-bottom:1px solid var(--line);gap:24px;align-items:center;padding:24px 0}.search>p{font-size:12px}.search label{font-size:10px;display:flex;flex-direction:column;gap:10px}.search select{border:0;border-bottom:1px solid var(--line);padding:8px 0;background:transparent;min-height:44px;color:var(--ink);font-size:13px;width:100%}.search .button{background:var(--ink);color:var(--bg);font-size:11px;gap:14px}.result-status{margin:20px 0}.home-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:26px}.home-card{min-width:0;position:relative}.home-photo{height:280px;position:relative}.favorite{position:absolute;right:14px;top:14px;min-width:44px;min-height:44px;border:0;background:var(--bg);font-size:22px;border-radius:50%;z-index:1}.favorite[aria-pressed=true]{color:#fff;background:var(--ink)}.home-info{padding:22px 0}.home-info .area{font-size:10px;letter-spacing:.07em}.home-info h3{font:22px/1.6 Georgia,"Yu Mincho",serif;margin:8px 0 14px}.home-facts{display:flex;gap:18px;font-size:12px}.home-detail{font-size:11px;opacity:.7;margin-top:12px}.home-info .link-line{font-size:11px;margin-top:18px}.journal{background:#e5e8e6;padding:90px 0}.journal-grid{display:grid;grid-template-columns:55% 1fr;gap:10%;align-items:center}.journal-photo{height:630px}.journal-copy h2{font-size:clamp(32px,3.3vw,52px);line-height:1.6;white-space:pre-line;margin:40px 0}.journal-copy>p:not(.eyebrow){font-size:13px;line-height:2.25}.journal-copy .link-line{margin-top:30px;background:none;border-top:0;border-left:0;border-right:0;padding:0}.contact{padding-top:110px}.contact-row{display:flex;justify-content:space-between;gap:70px;align-items:end;margin:32px 0 60px}.contact h2{font-size:clamp(32px,3.7vw,58px);line-height:1.6;white-space:pre-line}.contact-row p{font-size:13px;white-space:pre-line;margin-bottom:28px}.giant-brand{font-family:Georgia,serif;letter-spacing:-.055em;font-size:clamp(60px,18.2vw,276px);line-height:1;margin-left:-.012em}.footer-bottom{margin-top:20px;padding-bottom:26px;border-color:var(--line)}@media(max-width:1000px){.hero{height:auto;min-height:680px;grid-template-columns:46% 54%}.hero-type{padding:45px 28px}.hero h1{font-size:38px}.search{grid-template-columns:1fr 1fr}.search>p{grid-column:1/-1}.search .button{grid-column:1/-1;justify-content:center}.home-grid{gap:16px}.home-photo{height:220px}.home-info h3{font-size:17px}.home-facts{flex-wrap:wrap;gap:5px 10px}.journal-grid{gap:7%}.journal-photo{height:530px}.contact-row{align-items:start;gap:40px}.contact-row h2{font-size:36px}}@media(max-width:700px){.hero{display:flex;flex-direction:column;min-height:0;height:auto;max-height:none}.hero-type{padding:36px 20px 40px}.hero .eyebrow{font-size:9px}.hero h1{font-size:36px;margin:22px 0;line-height:1.5}.hero-body{font-size:12px}.hero-location{margin:16px 0 24px}.hero .button{width:100%}.hero-photo{height:400px}.hero-side{display:none}.homes{padding-top:65px;padding-bottom:65px;min-height:0}.search{gap:14px}.search>p{font-size:11px}.search .button{font-size:12px}.home-grid{grid-template-columns:1fr;gap:28px}.home-photo{height:330px}.home-info h3{font-size:22px}.home-facts{gap:18px}.home-info{padding-bottom:0}.journal{padding:45px 0}.journal-grid{grid-template-columns:1fr;gap:36px}.journal-photo{height:400px}.journal-copy h2{font-size:32px;margin:25px 0}.journal-copy p{font-size:12px}.contact{padding-top:65px}.contact-row{flex-direction:column;gap:28px;margin:24px 0 42px}.contact h2{font-size:31px}.contact-row p{font-size:12px}.contact-row>div,.contact-row .button{width:100%}.giant-brand{font-size:18vw}.footer-bottom{margin-top:26px}.footnote{font-size:9px}}
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
(() => { 'use strict'; const c=window.SITE_CONTENT; const saved=new Set(); const threshold=Number(c.search.rentThreshold); const rentLabel=threshold>=10000 ? (threshold/10000).toLocaleString('ja-JP')+'万円' : threshold.toLocaleString('ja-JP')+'円'; document.querySelector('[data-rent-label="low"]').textContent=rentLabel+c.search.rentLowSuffix; document.querySelector('[data-rent-label="high"]').textContent=rentLabel+c.search.rentHighSuffix; const grid=document.querySelector('#home-grid'); const esc=s=>String(s).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch])); function render(){const rent=document.querySelector('#rent-filter').value,layout=document.querySelector('#layout-filter').value;const homes=c.residences.filter(h=>(rent==='all'||(rent==='low'?h.rent<=threshold:h.rent>threshold))&&(layout==='all'||h.layout===layout));grid.innerHTML=homes.map(h=>{const a=c.assets[h.asset];return `<article class="home-card"><figure class="photo home-photo"><img src="${esc(a.url)}" alt="${esc(a.alt)}" style="object-position:${esc(a.position)}" loading="lazy"><button class="favorite" type="button" data-save="${esc(h.id)}" aria-label="${esc(saved.has(h.id)?c.homes.saved:c.homes.favorite)}: ${esc(h.title)}" aria-pressed="${saved.has(h.id)}">${saved.has(h.id)?'♥':'♡'}</button></figure><div class="home-info"><p class="area">${esc(h.area)}</p><h3>${esc(h.title)}</h3><div class="home-facts"><span>${h.rent.toLocaleString('ja-JP')}${esc(c.homes.rentUnit)}</span><span>${esc(h.layout)} / ${esc(h.size)}</span></div><p class="home-detail">${esc(h.detail)}</p><button class="link-line" style="background:none;border-width:0 0 1px;padding:0" data-demo="${esc(h.title)} / ${esc(h.area)} / ${h.rent.toLocaleString('ja-JP')}円・内覧相談">${esc(c.homes.details)} <span aria-hidden="true">↗</span></button></div></article>`}).join('');document.querySelector('#result-count').textContent=homes.length+' '+c.search.count;document.querySelector('#empty-state').hidden=homes.length!==0;} document.querySelector('#search-form').addEventListener('submit',e=>{e.preventDefault();render()}); document.querySelectorAll('#rent-filter,#layout-filter').forEach(s=>s.addEventListener('change',render));grid.addEventListener('click',e=>{const b=e.target.closest('[data-save]');if(!b)return;saved.has(b.dataset.save)?saved.delete(b.dataset.save):saved.add(b.dataset.save);render()});render();})();
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
