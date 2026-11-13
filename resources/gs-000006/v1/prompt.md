# ARQO — 自分のペースで、動く時間を。 — 編集欄つき・実装固定プロンプト v1

日本向けWebサイトを次の仕様・参照実装で制作してください。
このプロンプトはGENSEKI独自制作の gs-006 / v1 に対応します。
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
  "brand": "ARQO",
  "brandSub": "movement studio",
  "description": "中目黒の少人数ピラティススタジオ。自分のペースで動く時間を。",
  "nav": {
    "about": "スタジオのこと",
    "classes": "クラスを選ぶ",
    "visit": "通い方",
    "trial": "体験クラスを選ぶ"
  },
  "hero": {
    "eyebrow": "Pilates / Nakameguro, Tokyo",
    "headline": "自分のペースで、\n動く時間を。",
    "large": "Move\nat your pace.",
    "body": "呼吸を整え、ひとつずつ身体を動かす。\n中目黒の少人数ピラティススタジオ。",
    "cta": "体験クラスを選ぶ",
    "fact": "1クラス 6名まで / 体験 50分 ¥3,300"
  },
  "about": {
    "eyebrow": "01 / The way we move",
    "headline": "大切にしているのは、\n動きのひとつずつ。",
    "body": "初めての日も、久しぶりの日も。まわりに合わせて急ぐ必要はありません。呼吸と姿勢を確認しながら、一人ひとりの経験に合わせて進める少人数のレッスンです。",
    "detail": "マット・リフォーマー / 50分 / 少人数制",
    "aTitle": "はじめてでも",
    "aBody": "用具の使い方と基本の姿勢から。動きの難しさを調整しながら進めます。",
    "bTitle": "通うペースも",
    "bBody": "月4回、月8回、都度利用。生活のリズムに合わせてプランを選べます。"
  },
  "classes": {
    "eyebrow": "02 / Class schedule",
    "headline": "今週のクラスから、\nあなたの時間を。",
    "body": "曜日と経験レベルからクラスを選べます。\n体験も通常クラスの中で行います。",
    "dayLabel": "曜日",
    "levelLabel": "経験レベル",
    "allDays": "すべての曜日",
    "allLevels": "すべてのレベル",
    "beginner": "はじめて",
    "open": "経験あり",
    "book": "このクラスで体験内容を確認",
    "count": "件のクラス",
    "empty": "条件に合うクラスがありません。曜日かレベルを変更してください。",
    "duration": "50分",
    "weekday": "平日",
    "weekend": "土日"
  },
  "sessions": [
    {
      "id": "m1",
      "day": "月",
      "time": "10:00",
      "title": "Foundation",
      "subtitle": "呼吸と基本の動き",
      "level": "はじめて",
      "format": "Mat",
      "group": "平日"
    },
    {
      "id": "m2",
      "day": "月",
      "time": "19:30",
      "title": "Reformer Flow",
      "subtitle": "流れのある全身の動き",
      "level": "経験あり",
      "format": "Reformer",
      "group": "平日"
    },
    {
      "id": "w1",
      "day": "水",
      "time": "11:00",
      "title": "Foundation",
      "subtitle": "呼吸と基本の動き",
      "level": "はじめて",
      "format": "Mat",
      "group": "平日"
    },
    {
      "id": "f1",
      "day": "金",
      "time": "19:00",
      "title": "Evening Reset",
      "subtitle": "一日の終わりに整える",
      "level": "はじめて",
      "format": "Mat",
      "group": "平日"
    },
    {
      "id": "s1",
      "day": "土",
      "time": "09:00",
      "title": "Morning Reformer",
      "subtitle": "週末のはじまりに動く",
      "level": "経験あり",
      "format": "Reformer",
      "group": "土日"
    },
    {
      "id": "s2",
      "day": "日",
      "time": "10:30",
      "title": "Foundation",
      "subtitle": "呼吸と基本の動き",
      "level": "はじめて",
      "format": "Mat",
      "group": "土日"
    }
  ],
  "visit": {
    "eyebrow": "03 / Make room for movement",
    "headline": "まずは、一度。\nスタジオで会いましょう。",
    "body": "動きやすい服と、いつものあなたで。\nマット・用具はスタジオでご用意しています。",
    "location": "東京都目黒区・中目黒",
    "hours": "平日 9:00–21:00 / 土日 8:30–18:00",
    "planLabel": "Trial class",
    "price": "¥3,300",
    "priceNote": "50分 / 税込 / お一人さま1回",
    "cta": "体験クラスを選ぶ"
  },
  "footer": {
    "copyright": "© 2026 ARQO movement studio",
    "note": "GENSEKI concept / 架空のスタジオ。申込の外部送信は行いません。",
    "photos": "Photographs via Unsplash"
  },
  "assets": {
    "hero": {
      "url": "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=85",
      "alt": "明るいスタジオでピラティスの動きを行う様子",
      "position": "50% 42%"
    },
    "about": {
      "url": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=85",
      "alt": "マットの上で身体を伸ばすレッスン風景",
      "position": "50% 45%"
    },
    "visit": {
      "url": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=85",
      "alt": "柔らかな自然光の中で動く時間",
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
  "genre_id": "G06",
  "seed_id": "G06-02",
  "title": "ARQO — 自分のペースで、動く時間を。",
  "kind": "place",
  "category": "フィットネス・ウェルネス",
  "primary_action": "体験クラスを選ぶ",
  "direction": "Sage movement studio with strong grotesk typography, monumental Move at your pace lettering and arch-topped photographic hero. Open ruled schedule instead of cards.",
  "sections": [
    {
      "id": "main",
      "purpose": "少人数ピラティスと体験料金",
      "layout": "57:43 oversized typographic hero and arch photo"
    },
    {
      "id": "about",
      "purpose": "少人数レッスンの進め方",
      "layout": "portrait image and explanatory rows"
    },
    {
      "id": "classes",
      "purpose": "曜日・レベルからクラスを探す",
      "layout": "two select filters and open timetable"
    },
    {
      "id": "visit",
      "purpose": "体験料金とアクセス",
      "layout": "deep green closing band with trial pricing"
    }
  ],
  "tokens": {
    "background": "#f6f6ed",
    "ink": "#2d493e",
    "surface": "#dfe7d9",
    "line": "#b6c5b5",
    "font": "Arial + Georgia + system Japanese",
    "wrap": "1320px / 48px edges"
  },
  "interactions": [
    "weekday/weekend AND experience-level filtering",
    "class count live status and empty state",
    "selected session passes date/time/name/price to demo modal"
  ],
  "mobile": "700px breakpoint stacks hero and arch photo; schedule becomes paired time/title with full-width booking row; accessible mobile menu.",
  "editable_notes": "All editorial copy and sessions in content.js, remote stand-in assets. Prices/hours and studio are fictional concepts. No claims of health outcomes or actual reservation."
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
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>ARQO — 自分のペースで、 動く時間を。</title><meta name="description" content="中目黒の少人数ピラティススタジオ。自分のペースで動く時間を。"><meta name="theme-color" content="#f6f6ed"><meta name="page-type" content="place"><meta name="site-kind" content="other"><meta property="og:title" content="ARQO — 自分のペースで、 動く時間を。"><meta property="og:description" content="中目黒の少人数ピラティススタジオ。自分のペースで動く時間を。"><meta property="og:type" content="website"><link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='32' fill='%231f3830'/%3E%3Cpath d='M20 44V20h24v24Z' fill='none' stroke='%23fff' stroke-width='3'/%3E%3C/svg%3E"><link rel="stylesheet" href="style.css"><meta property="og:image" content="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&amp;fit=crop&amp;w=1600&amp;q=85"><meta name="twitter:card" content="summary_large_image"></head>
<body><a class="skip" href="#main">本文へ移動</a><header class="wrap site-header"><a class="wordmark" href="#main"><span data-content="brand">ARQO</span><small data-content="brandSub">movement studio</small></a><nav class="nav" aria-label="主なナビゲーション"><a href="#about" data-content="nav.about">スタジオのこと</a><a href="#classes" data-content="nav.classes">クラスを選ぶ</a><a href="#visit" data-content="nav.visit">通い方</a><a class="button" href="#classes" data-content="nav.trial">体験クラスを選ぶ</a></nav><button class="menu-toggle" data-menu-toggle aria-controls="mobile-menu" aria-expanded="false">Menu ＋</button></header><nav class="mobile-menu" data-menu id="mobile-menu" hidden aria-label="モバイルナビゲーション"><a href="#about" data-content="nav.about">スタジオのこと</a><a href="#classes" data-content="nav.classes">クラスを選ぶ</a><a href="#visit" data-content="nav.visit">通い方</a></nav><main id="main"><section class="hero wrap" data-enter><div class="hero-heading"><p class="eyebrow" data-content="hero.eyebrow">Pilates / Nakameguro, Tokyo</p><h1 data-content="hero.headline">自分のペースで、
動く時間を。</h1><p class="hero-large" aria-hidden="true" data-content="hero.large">Move
at your pace.</p><div class="hero-bottom"><p data-content="hero.body">呼吸を整え、ひとつずつ身体を動かす。
中目黒の少人数ピラティススタジオ。</p><a class="button" href="#classes"><span data-content="hero.cta">体験クラスを選ぶ</span><span aria-hidden="true">↗</span></a><p class="hero-fact" data-content="hero.fact">1クラス 6名まで / 体験 50分 ¥3,300</p></div></div><figure class="photo hero-photo"><img data-image="assets.hero" src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&amp;fit=crop&amp;w=1600&amp;q=85" alt="明るいスタジオでピラティスの動きを行う様子" class="" style="object-position:50% 42%" loading="eager" decoding="async"></figure></section><section class="about" id="about" data-reveal><div class="wrap about-grid"><figure class="photo about-photo"><img data-image="assets.about" src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&amp;fit=crop&amp;w=1600&amp;q=85" alt="マットの上で身体を伸ばすレッスン風景" class="" style="object-position:50% 45%" loading="lazy" decoding="async"></figure><div class="about-copy"><p class="eyebrow" data-content="about.eyebrow">01 / The way we move</p><h2 data-content="about.headline">大切にしているのは、
動きのひとつずつ。</h2><p class="body-copy" data-content="about.body">初めての日も、久しぶりの日も。まわりに合わせて急ぐ必要はありません。呼吸と姿勢を確認しながら、一人ひとりの経験に合わせて進める少人数のレッスンです。</p><p class="about-detail" data-content="about.detail">マット・リフォーマー / 50分 / 少人数制</p><div class="about-point"><h3 data-content="about.aTitle">はじめてでも</h3><p data-content="about.aBody">用具の使い方と基本の姿勢から。動きの難しさを調整しながら進めます。</p></div><div class="about-point"><h3 data-content="about.bTitle">通うペースも</h3><p data-content="about.bBody">月4回、月8回、都度利用。生活のリズムに合わせてプランを選べます。</p></div></div></div></section><section class="classes wrap" id="classes"><div class="section-head"><div><p class="eyebrow" data-content="classes.eyebrow">02 / Class schedule</p><h2 data-content="classes.headline">今週のクラスから、
あなたの時間を。</h2></div><p data-content="classes.body">曜日と経験レベルからクラスを選べます。
体験も通常クラスの中で行います。</p></div><div class="filters"><label><span data-content="classes.dayLabel">曜日</span><select id="day-filter"><option value="all" data-content="classes.allDays">すべての曜日</option><option value="平日" data-content="classes.weekday">平日</option><option value="土日" data-content="classes.weekend">土日</option></select></label><label><span data-content="classes.levelLabel">経験レベル</span><select id="level-filter"><option value="all" data-content="classes.allLevels">すべてのレベル</option><option value="はじめて" data-content="classes.beginner">はじめて</option><option value="経験あり" data-content="classes.open">経験あり</option></select></label><p id="class-count" class="status" aria-live="polite"></p></div><div class="schedule" id="schedule"></div><p class="empty" id="empty" hidden data-content="classes.empty">条件に合うクラスがありません。曜日かレベルを変更してください。</p></section><section class="visit" id="visit"><div class="wrap visit-grid"><div class="visit-copy"><p class="eyebrow" data-content="visit.eyebrow">03 / Make room for movement</p><h2 data-content="visit.headline">まずは、一度。
スタジオで会いましょう。</h2><p data-content="visit.body">動きやすい服と、いつものあなたで。
マット・用具はスタジオでご用意しています。</p><div class="visit-location"><p data-content="visit.location">東京都目黒区・中目黒</p><p data-content="visit.hours">平日 9:00–21:00 / 土日 8:30–18:00</p></div></div><div class="trial"><p class="eyebrow" data-content="visit.planLabel">Trial class</p><p class="trial-price" data-content="visit.price">¥3,300</p><p class="trial-note" data-content="visit.priceNote">50分 / 税込 / お一人さま1回</p><a class="button" href="#classes"><span data-content="visit.cta">体験クラスを選ぶ</span><span aria-hidden="true">↗</span></a></div></div></section></main><footer class="wrap"><p class="footer-word" aria-hidden="true" data-content="brand">ARQO</p><div class="footer-bottom"><p class="footnote" data-content="footer.copyright">© 2026 ARQO movement studio</p><p class="footnote" data-content="footer.note">GENSEKI concept / 架空のスタジオ。申込の外部送信は行いません。</p><a class="footnote" href="https://unsplash.com/license" data-content="footer.photos">Photographs via Unsplash</a></div></footer><script src="content.js"></script><script src="genseki.js"></script><script src="app.js"></script></body></html>
```

### style.css

```css file=style.css
*{box-sizing:border-box}html{scroll-behavior:smooth;scroll-padding-top:90px}body{margin:0;-webkit-font-smoothing:antialiased}body,button,input,select{font-family:"Helvetica Neue",Arial,"Hiragino Kaku Gothic ProN","Noto Sans JP",sans-serif}button,a,input,select{-webkit-tap-highlight-color:transparent}button,input,select{font:inherit}button,a{touch-action:manipulation}button{cursor:pointer}a{color:inherit;text-decoration:none}img{display:block;width:100%;object-fit:cover}button,a,input,select{outline-offset:5px}button:focus-visible,a:focus-visible,input:focus-visible,select:focus-visible{outline:2px solid currentColor}button{color:inherit}h1,h2,h3,p,figure{margin:0}h1,h2,h3{font-weight:400}p{line-height:1.9}button{border-radius:0}main{display:block}[hidden]{display:none!important}.skip{position:fixed;z-index:100;top:10px;left:10px;padding:12px;background:#fff;color:#111;transform:translateY(-150%)}.skip:focus{transform:none}.wrap{width:min(1320px,calc(100% - 96px));margin:auto}.eyebrow{font-size:11px;letter-spacing:.17em;font-weight:500}.serif{font-family:Georgia,"Times New Roman","Hiragino Mincho ProN","Yu Mincho",serif}.photo{overflow:hidden}.photo img{height:100%;transition:transform .7s cubic-bezier(.2,.7,.2,1)}.photo:hover img{transform:scale(1.025)}.arrow{font-family:Arial,sans-serif;font-size:22px}.button{min-height:48px;display:inline-flex;gap:32px;justify-content:space-between;align-items:center;padding:14px 24px;border:1px solid currentColor;background:transparent;font-size:13px;line-height:1.5;transition:transform .2s,background .2s,color .2s}.button:hover{transform:translateY(-2px)}.button:active{transform:translateY(1px)}.menu-toggle{display:none;min-width:44px;min-height:44px;border:0;background:transparent;font-size:13px}.mobile-menu{position:fixed;z-index:30;inset:80px 0 0;background:var(--bg,#faf8f4);padding:40px 24px;display:flex;flex-direction:column;gap:20px}.mobile-menu a{min-height:48px;display:flex;align-items:center;font-size:24px}.footnote{font-size:10px;letter-spacing:.035em;line-height:1.7}.footer-bottom{display:flex;justify-content:space-between;align-items:end;gap:20px;border-top:1px solid currentColor;padding-top:22px;margin-top:48px;opacity:.65}.footer-bottom a{text-decoration:underline;min-height:44px;display:inline-flex;align-items:center}.section-num{font:italic 18px Georgia,serif}.link-line{display:inline-flex;align-items:center;gap:24px;min-height:44px;font-size:13px;border-bottom:1px solid currentColor}.site-header{height:88px;display:flex;align-items:center;justify-content:space-between;gap:24px}.nav{display:flex;align-items:center;gap:36px;font-size:12px}.nav a{display:flex;align-items:center;min-height:44px}.nav a:hover{text-decoration:underline;text-underline-offset:6px}.wordmark{font-family:Georgia,serif;letter-spacing:.04em;font-size:27px;line-height:1;white-space:nowrap}.wordmark small{font:9px Arial,sans-serif;display:block;letter-spacing:.19em;margin-top:7px}.section-head{display:flex;align-items:end;justify-content:space-between;gap:36px;margin-bottom:50px}.section-head h2{font-size:clamp(32px,4vw,56px);line-height:1.35}.section-head p{font-size:13px;max-width:360px}.status{font-size:12px;min-height:24px}.mobile-menu:not([hidden])~main{pointer-events:none}@media(max-width:1000px){.wrap{width:calc(100% - 56px)}.nav{gap:20px}.site-header{height:80px}}@media(max-width:700px){.wrap{width:calc(100% - 40px)}.nav{display:none}.menu-toggle{display:block}.site-header{height:76px}.section-head{align-items:start;flex-direction:column;gap:20px;margin-bottom:30px}.section-head h2{font-size:32px}.footer-bottom{align-items:start;flex-direction:column;margin-top:30px}.button{min-height:48px}.mobile-menu{top:76px}.wordmark{font-size:24px}}@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*,*::before,*::after{animation:none!important;transition:none!important}}
:root{--bg:#f6f6ed;--ink:#2d493e;--surface:#dfe7d9;--line:#b6c5b5}body{background:var(--bg);color:var(--ink)}.wordmark{font-family:Arial,sans-serif;font-weight:700;font-size:32px;letter-spacing:-.07em}.wordmark small{font-weight:400;letter-spacing:.13em}.nav .button{min-height:44px;font-size:11px;background:var(--ink);color:var(--bg);padding:10px 18px}.hero{display:grid;grid-template-columns:1fr 43%;min-height:calc(100svh - 88px);padding-top:28px;padding-bottom:50px;gap:6%}.hero-heading{display:flex;flex-direction:column;align-items:start}.hero h1{font-size:clamp(26px,2.6vw,40px);font-weight:500;line-height:1.55;white-space:pre-line;margin:24px 0 30px;letter-spacing:.04em}.hero-large{font-family:Arial,sans-serif;font-size:clamp(62px,7.5vw,116px);line-height:.93;letter-spacing:-.075em;font-weight:500;white-space:pre-line;margin-left:-.04em}.hero-bottom{margin-top:auto;padding-top:34px}.hero-bottom>p{font-size:12px;white-space:pre-line}.hero .button{background:var(--ink);color:var(--bg);margin-top:26px;min-width:250px}.hero-fact{font-size:10px!important;letter-spacing:.025em;margin-top:15px}.hero-photo{height:100%;min-height:660px;border-radius:48% 48% 0 0;min-width:0}.about{background:var(--surface);padding:85px 0}.about-grid{display:grid;grid-template-columns:48% 1fr;gap:10%;align-items:center}.about-photo{height:660px}.about-copy h2{font-size:clamp(30px,3vw,44px);line-height:1.6;letter-spacing:.035em;white-space:pre-line;margin:32px 0 24px}.body-copy{font-size:13px;line-height:2.2}.about-detail{font-size:10px;margin-top:22px;border-bottom:1px solid var(--line);padding-bottom:26px}.about-point{display:grid;grid-template-columns:110px 1fr;gap:22px;padding:22px 0;border-bottom:1px solid var(--line)}.about-point h3{font-size:13px;line-height:1.8}.about-point p{font-size:11px;line-height:1.9}.classes{padding-top:110px;padding-bottom:100px;min-height:850px}.section-head .eyebrow{margin-bottom:22px}.section-head h2{font-size:clamp(30px,3.5vw,50px);font-weight:400;line-height:1.55;white-space:pre-line}.section-head p{white-space:pre-line}.filters{border-top:1px solid var(--line);padding-top:24px;display:flex;gap:24px;align-items:end;margin-bottom:30px}.filters label{display:flex;flex-direction:column;gap:12px;min-width:200px;font-size:11px}.filters select{border:0;border-bottom:1px solid var(--line);background:none;color:var(--ink);min-height:44px;padding:10px 0;font-size:13px}.filters .status{margin-left:auto;white-space:nowrap}.session{display:grid;grid-template-columns:90px 1fr 100px 130px 250px;gap:24px;align-items:center;border-top:1px solid var(--line);padding:22px 0}.session:last-child{border-bottom:1px solid var(--line)}.session-time{display:flex;flex-direction:column;gap:7px}.session-time .day{font-size:11px}.session-time .time{font:24px Georgia,serif}.session h3{font:25px/1.3 Georgia,serif;margin-bottom:6px}.session .subtitle{font-size:11px}.session .format{font:italic 17px Georgia,serif}.session .level{font-size:11px}.session .button{font-size:11px;gap:14px;min-height:44px;padding:12px 15px}.session .button:hover{background:var(--ink);color:var(--bg)}.empty{padding:40px 0;font-size:13px}.visit{background:var(--ink);color:var(--bg);padding:90px 0}.visit-grid{display:grid;grid-template-columns:1fr 350px;gap:80px;align-items:center}.visit h2{font-size:clamp(30px,3.4vw,48px);white-space:pre-line;line-height:1.6;margin:25px 0}.visit-copy>p:not(.eyebrow){font-size:13px;white-space:pre-line}.visit-location{font-size:11px;line-height:2;margin-top:34px}.trial{border-left:1px solid #7d9386;padding:25px 0 25px 60px}.trial-price{font:70px/1.3 Georgia,serif;letter-spacing:-.05em;margin:14px 0}.trial-note{font-size:10px}.trial .button{background:var(--bg);color:var(--ink);border-color:var(--bg);margin-top:30px;width:100%;font-size:12px}.footer-word{font-family:Arial,sans-serif;font-size:clamp(80px,24vw,360px);line-height:.9;letter-spacing:-.075em;font-weight:500;margin-top:65px;margin-left:-.04em}.footer-bottom{border-color:var(--line);padding-bottom:30px;margin-top:30px}@media(max-width:1100px){.hero{gap:5%;grid-template-columns:1fr 44%}.hero-large{font-size:8vw}.hero-photo{min-height:620px}.hero h1{font-size:28px}.about-grid{gap:7%}.about-copy h2{font-size:32px}.about-photo{height:600px}.session{grid-template-columns:65px 1fr 85px 210px;gap:15px}.session .format{display:none}.session .button{font-size:10px;gap:7px}.visit-grid{gap:45px;grid-template-columns:1fr 290px}.trial{padding-left:40px}}@media(max-width:700px){.hero{display:flex;flex-direction:column;gap:35px;padding-top:18px;padding-bottom:45px;min-height:0}.hero .eyebrow{font-size:10px}.hero h1{font-size:27px;margin:20px 0 25px}.hero-large{font-size:19vw}.hero-bottom{padding-top:28px;width:100%}.hero .button{width:100%;margin-top:22px}.hero-photo{height:480px;min-height:0;border-radius:46% 46% 0 0}.hero-fact{font-size:10px}.about{padding:50px 0}.about-grid{grid-template-columns:1fr;gap:35px}.about-photo{height:390px;order:1}.about-copy h2{font-size:28px;margin:25px 0 20px}.body-copy{font-size:12px}.about-point{grid-template-columns:85px 1fr;gap:18px}.classes{padding-top:65px;padding-bottom:65px;min-height:0}.section-head h2{font-size:28px}.filters{gap:16px;flex-wrap:wrap}.filters label{min-width:0;flex:1}.filters select{font-size:12px;width:100%}.filters .status{margin:0;flex-basis:100%;font-size:11px}.session{grid-template-columns:64px 1fr;gap:15px;padding:22px 0}.session h3{font-size:24px}.session .level{grid-column:2;grid-row:2}.session .button{grid-column:1/-1;font-size:12px;justify-content:space-between}.session-time{grid-row:1/3;align-self:start}.visit{padding:60px 0}.visit-grid{grid-template-columns:1fr;gap:35px}.visit h2{font-size:27px}.visit-copy>p:not(.eyebrow){font-size:12px}.trial{border-left:0;border-top:1px solid #7d9386;padding:30px 0 0}.trial-price{font-size:64px}.footer-word{margin-top:45px;font-size:24vw}.footer-bottom{margin-top:28px}}
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
(()=>{'use strict';const c=window.SITE_CONTENT;const esc=s=>String(s).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));function render(){const day=document.querySelector('#day-filter').value,level=document.querySelector('#level-filter').value;const rows=c.sessions.filter(s=>(day==='all'||s.group===day)&&(level==='all'||s.level===level));document.querySelector('#schedule').innerHTML=rows.map(s=>`<article class="session"><div class="session-time"><span class="day">${esc(s.day)}曜日</span><span class="time">${esc(s.time)}</span></div><div><h3>${esc(s.title)}</h3><p class="subtitle">${esc(s.subtitle)}</p></div><p class="format">${esc(s.format)}</p><p class="level">${esc(s.level)} / ${esc(c.classes.duration)}</p><button class="button" data-demo="${esc(s.day)}曜日 ${esc(s.time)} / ${esc(s.title)} / 体験 ${esc(c.visit.price)}"><span>${esc(c.classes.book)}</span><span aria-hidden="true">↗</span></button></article>`).join('');document.querySelector('#class-count').textContent=rows.length+' '+c.classes.count;document.querySelector('#empty').hidden=rows.length!==0;}document.querySelectorAll('#day-filter,#level-filter').forEach(el=>el.addEventListener('change',render));render();})();
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
