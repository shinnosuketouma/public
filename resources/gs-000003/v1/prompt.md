# 余凪舎 — 住まいに、余白を。 — 編集欄つき・実装固定プロンプト v1

日本向けWebサイトを次の仕様・参照実装で制作してください。
このプロンプトはGENSEKI独自制作の gs-003 / v1 に対応します。
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
/* 編集できる文章・画像。キーとオブジェクトの構造は維持してください。 */
window.SITE_CONTENT = {
  "brand": "余凪舎",
  "wordmark": "YONAGISHA",
  "theme": "#292d2a",
  "description": "暮らしの余白から考える、鎌倉の住宅設計。光、素材、庭とのつながりを一つずつ形にします。",
  "skip": "本文へ移動",
  "nav": {
    "works": "住まいの実例",
    "approach": "家づくりの考え方",
    "process": "設計の進め方",
    "contact": "家づくりを相談する",
    "menu": "メニュー"
  },
  "hero": {
    "label": "Architecture / Kamakura, Japan",
    "line1": "住まいに、",
    "line2": "余白を。",
    "lead": "鎌倉を拠点に、光と風、家族の時間を設計する住宅設計事務所です。",
    "detail": "新築住宅・リノベーション / 神奈川・東京",
    "scroll": "住まいの実例へ",
    "index": "01 — 05"
  },
  "works": {
    "label": "Selected residences",
    "heading": "暮らしから生まれる、住まいの形。",
    "intro": "家族のかたちも、心地よさも、一つではありません。日々の過ごし方から、それぞれの住まいを考えます。",
    "all": "すべての住まい",
    "garden": "庭のある家",
    "compact": "小さな家",
    "renovation": "リノベーション",
    "detail": "設計の考え方を読む",
    "countSuffix": "つの住まい",
    "empty": "この条件の住まいはありません。"
  },
  "projects": [
    {
      "title": "庭と食卓をつなぐ家",
      "location": "神奈川県 鎌倉市",
      "type": "新築住宅",
      "category": "garden",
      "size": "延床 112㎡",
      "year": "Concept 01",
      "description": "大きな窓の先に、季節の庭。食卓を住まいの中心に置き、家族それぞれの場所がゆるやかにつながる家です。",
      "image": "work1"
    },
    {
      "title": "木の間にひらく家",
      "location": "神奈川県 逗子市",
      "type": "新築住宅",
      "category": "compact",
      "size": "延床 86㎡",
      "year": "Concept 02",
      "description": "必要な場所を、必要な広さで。天井の高さと窓の位置を調整し、コンパクトな敷地に奥行きのある居場所をつくりました。",
      "image": "work2"
    },
    {
      "title": "光を受け継ぐ住まい",
      "location": "東京都 世田谷区",
      "type": "リノベーション",
      "category": "renovation",
      "size": "専有 72㎡",
      "year": "Concept 03",
      "description": "既存の骨格を生かしながら、窓辺の光を部屋の奥まで。住み慣れた街で、これからの暮らしに合う間取りへ整えます。",
      "image": "work3"
    }
  ],
  "approach": {
    "label": "Our approach",
    "heading1": "余白とは、",
    "heading2": "これからの暮らしのための場所。",
    "body": "図面を描く前に、休日の朝や、帰宅してからの時間を聞かせてください。部屋の数だけでは決まらない心地よさを、対話を通じて探します。",
    "point1": "光を読む",
    "text1": "時間と季節によって変わる光を、窓の位置と軒の深さで受け止めます。",
    "point2": "素材に触れる",
    "text2": "無垢の木、左官の壁、足元の石。毎日触れる場所から素材を選びます。",
    "point3": "庭へつなぐ",
    "text3": "室内と外のあいだに居場所をつくり、住まいに自然の気配を取り込みます。"
  },
  "process": {
    "label": "From conversation to home",
    "heading": "対話から始める、家づくり。",
    "lead": "土地探しの段階から、住み替えや改修のご相談まで。まだ決まっていないことがあっても、一緒に整理するところから始めます。",
    "steps": [
      {
        "n": "01",
        "title": "暮らしを聞く",
        "text": "住まいへの思い、家族の習慣、ご予算や時期を伺います。初回はオンラインでもお話しいただけます。"
      },
      {
        "n": "02",
        "title": "敷地と計画を読む",
        "text": "敷地の光と風、周辺環境を確認。模型やスケッチで、暮らしの輪郭を一緒に確かめます。"
      },
      {
        "n": "03",
        "title": "設計を深める",
        "text": "間取り、素材、設備を選び、施工に向けた図面を整えます。予算とのバランスも並行して確認します。"
      },
      {
        "n": "04",
        "title": "現場から、暮らしへ",
        "text": "施工者と対話を重ね、設計の意図を現場へ。お引き渡し後も、住まいの変化に向き合います。"
      }
    ]
  },
  "footer": {
    "label": "Start your home",
    "heading": "どんな一日を、\nこの家で過ごしたいですか。",
    "lead": "言葉になっていない暮らしの思いから、お聞かせください。",
    "area": "神奈川県鎌倉市 / 予約制",
    "scope": "住宅設計・リノベーション",
    "copyright": "© 2026 YONAGISHA",
    "concept": "GENSEKI concept / 架空のブランド・外部送信なし",
    "credits": "Photographs via Unsplash"
  },
  "dialog": {
    "title": "住まいの設計について",
    "close": "閉じる",
    "label": "家づくりの考え方"
  },
  "assets": {
    "hero": {
      "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85",
      "alt": "大きな窓から自然光が入る、落ち着いた住宅のリビング",
      "position": "50% 60%"
    },
    "work1": {
      "url": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
      "alt": "庭へひらく明るい住宅のリビング",
      "position": "50% 50%"
    },
    "work2": {
      "url": "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85",
      "alt": "木の素材と自然光を生かした住宅のキッチン",
      "position": "50% 50%"
    },
    "work3": {
      "url": "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1000&q=85",
      "alt": "既存空間を生かした開放的な住宅の室内",
      "position": "50% 50%"
    },
    "approach": {
      "url": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85",
      "alt": "木の家具と植物がある、静かな住宅の一角",
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
  "genre_id": "G03",
  "seed_id": "G03-01",
  "title": "余凪舎 — 住まいに、余白を。",
  "kind": "service",
  "category": "注文住宅の住宅設計",
  "primary_action": "家づくりを相談する",
  "direction": "温かな灰白の地、墨色の文字。大きな明朝体の見出しと全幅の住宅写真、余白のある実例索引。",
  "sections": [
    {
      "id": "top",
      "purpose": "住宅設計と対応地域を伝える",
      "layout": "大きな明朝体見出しと紹介文の上段2列、下に全幅住宅写真"
    },
    {
      "id": "works",
      "purpose": "条件別に住宅実例を比較する",
      "layout": "横並び4フィルターと写真3列。スマートフォン1列"
    },
    {
      "id": "approach",
      "purpose": "設計で重視する光・素材・庭を説明する",
      "layout": "灰緑色の地、左に文章、右に縦長写真"
    },
    {
      "id": "process",
      "purpose": "相談から引き渡しまでを理解する",
      "layout": "番号、工程名、解説を開いた4本の行で表示"
    },
    {
      "id": "contact",
      "purpose": "設計相談へ進む",
      "layout": "墨色の全幅フッター、明朝体の大見出しと相談ボタン"
    }
  ],
  "tokens": {
    "paper": "#f5f4ee",
    "ink": "#292d2a",
    "surface": "#e8e9e2",
    "max_width": "1280px",
    "desktop_gutter": "56px",
    "mobile_gutter": "20px",
    "display_font": "Georgia, Yu Mincho, Hiragino Mincho ProN, serif",
    "body_font": "Helvetica Neue, Arial, Hiragino Kaku Gothic ProN, Yu Gothic, sans-serif"
  },
  "interactions": [
    "4つの条件ボタンで実例カードと件数が更新される",
    "実例画像を押すと設計説明をdialogで読める",
    "相談CTAは外部送信を伴わないデモdialog",
    "モバイルメニュー、写真hover 1.025倍、ボタンhover -2px"
  ],
  "mobile": "680px以下で1列。住まいフィルターは横スクロール、写真は360px高。最小44px操作領域、reduced-motionで動きを停止。",
  "editable_notes": "content.jsの全テキストとassetsを編集。projectsのcategory/all/garden/compact/renovationは操作契約のため維持。事例は架空のコンセプトであり実績を主張しない。画像はUnsplashの外部参照であり写真ファイルは同梱しない。"
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
<html lang="ja" data-type="service" data-radius="sharp" data-motion="gentle"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>余凪舎 — 住まいに、 余白を。</title>
<meta name="description" content="暮らしの余白から考える、鎌倉の住宅設計。光、素材、庭とのつながりを一つずつ形にします。">
<meta name="page-type" content="service"><meta name="site-kind" content="other">
<meta name="theme-color" content="#292d2a"><meta property="og:title" content="余凪舎 — 住まいに、 余白を。"><meta property="og:description" content="暮らしの余白から考える、鎌倉の住宅設計。光、素材、庭とのつながりを一つずつ形にします。"><meta property="og:type" content="website">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' fill='%23292d2a'/%3E%3Cpath d='M13 13h22v22H13z' fill='none' stroke='%23f7f4ec' stroke-width='2'/%3E%3C/svg%3E">
<link rel="stylesheet" href="style.css"><meta property="og:image" content="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&amp;fit=crop&amp;w=1800&amp;q=85"><meta name="twitter:card" content="summary_large_image"></head><body>
<a class="skip-link" data-content="skip" href="#main">本文へ移動</a>

<header class="site-header"><div class="wrap header-inner"><a class="brand" href="#top" aria-label="余凪舎 トップ"><span class="brand-jp serif" data-content="brand" >余凪舎</span><span class="brand-en" data-content="wordmark" >YONAGISHA</span></a><nav class="nav-links" aria-label="メインナビゲーション"><a class="" data-content="nav.works" href="#works">住まいの実例</a><a class="" data-content="nav.approach" href="#approach">家づくりの考え方</a><a class="" data-content="nav.process" href="#process">設計の進め方</a><button class="nav-contact" data-demo="家づくりを相談する"><span class="" data-content="nav.contact" >家づくりを相談する</span><span aria-hidden="true">↗</span></button></nav><button class="menu-toggle" data-menu-toggle aria-expanded="false" aria-controls="mobile-menu"><span class="" data-content="nav.menu" >メニュー</span></button></div></header>
<nav class="mobile-nav" id="mobile-menu" data-menu hidden aria-label="モバイルナビゲーション"><a class="" data-content="nav.works" href="#works">住まいの実例</a><a class="" data-content="nav.approach" href="#approach">家づくりの考え方</a><a class="" data-content="nav.process" href="#process">設計の進め方</a><button class="button" data-demo="家づくりを相談する"><span class="" data-content="nav.contact" >家づくりを相談する</span></button></nav>
<main id="main"><section class="hero" id="top" data-enter><div class="wrap hero-copy"><div class="hero-top"><p class="eyebrow" data-content="hero.label" >Architecture / Kamakura, Japan</p><span class="hero-index" data-content="hero.index" >01 — 05</span></div><div class="hero-heading"><h1 class="serif"><span class="" data-content="hero.line1" >住まいに、</span><span class="" data-content="hero.line2" >余白を。</span></h1><div class="hero-aside"><p class="body-copy" data-content="hero.lead" >鎌倉を拠点に、光と風、家族の時間を設計する住宅設計事務所です。</p><p class="hero-detail" data-content="hero.detail" >新築住宅・リノベーション / 神奈川・東京</p></div></div></div><div class="hero-photo photo-frame"><img class="" data-image="assets.hero" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&amp;fit=crop&amp;w=1800&amp;q=85" alt="大きな窓から自然光が入る、落ち着いた住宅のリビング" style="object-position:50% 60%" loading="eager" decoding="async"></div><a href="#works" class="hero-scroll"><span class="" data-content="hero.scroll" >住まいの実例へ</span><span aria-hidden="true">↓</span></a></section>
<section class="works section" id="works"><div class="wrap"><div class="section-top"><span class="section-index">01</span><p class="eyebrow" data-content="works.label" >Selected residences</p></div><div class="section-heading"><h2 class="serif section-title" data-content="works.heading" >暮らしから生まれる、住まいの形。</h2><p class="body-copy" data-content="works.intro" >家族のかたちも、心地よさも、一つではありません。日々の過ごし方から、それぞれの住まいを考えます。</p></div><div class="filter-row" role="group" aria-label="住まいの条件で絞り込む"><button class="filter active" data-filter="all" aria-pressed="true"><span class="" data-content="works.all" >すべての住まい</span></button><button class="filter" data-filter="garden" aria-pressed="false"><span class="" data-content="works.garden" >庭のある家</span></button><button class="filter" data-filter="compact" aria-pressed="false"><span class="" data-content="works.compact" >小さな家</span></button><button class="filter" data-filter="renovation" aria-pressed="false"><span class="" data-content="works.renovation" >リノベーション</span></button><span class="filter-count" id="project-count" aria-live="polite">3つの住まい</span></div><div class="project-grid"><article class="project" data-category="garden"><button class="project-visual photo-frame" data-project="0" aria-label="庭と食卓をつなぐ家の設計を見る"><img class="" data-image="assets.work1" src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&amp;fit=crop&amp;w=1000&amp;q=85" alt="庭へひらく明るい住宅のリビング" style="object-position:50% 50%" loading="lazy" decoding="async"><span class="project-open" aria-hidden="true">↗</span></button><div class="project-info"><div><h3 class="serif" data-content="projects.0.title" >庭と食卓をつなぐ家</h3><p class="project-location" data-content="projects.0.location" >神奈川県 鎌倉市</p></div><div class="project-detail"><span class="" data-content="projects.0.type" >新築住宅</span><span class="" data-content="projects.0.size" >延床 112㎡</span></div></div></article><article class="project" data-category="compact"><button class="project-visual photo-frame" data-project="1" aria-label="木の間にひらく家の設計を見る"><img class="" data-image="assets.work2" src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&amp;fit=crop&amp;w=1000&amp;q=85" alt="木の素材と自然光を生かした住宅のキッチン" style="object-position:50% 50%" loading="lazy" decoding="async"><span class="project-open" aria-hidden="true">↗</span></button><div class="project-info"><div><h3 class="serif" data-content="projects.1.title" >木の間にひらく家</h3><p class="project-location" data-content="projects.1.location" >神奈川県 逗子市</p></div><div class="project-detail"><span class="" data-content="projects.1.type" >新築住宅</span><span class="" data-content="projects.1.size" >延床 86㎡</span></div></div></article><article class="project" data-category="renovation"><button class="project-visual photo-frame" data-project="2" aria-label="光を受け継ぐ住まいの設計を見る"><img class="" data-image="assets.work3" src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&amp;fit=crop&amp;w=1000&amp;q=85" alt="既存空間を生かした開放的な住宅の室内" style="object-position:50% 50%" loading="lazy" decoding="async"><span class="project-open" aria-hidden="true">↗</span></button><div class="project-info"><div><h3 class="serif" data-content="projects.2.title" >光を受け継ぐ住まい</h3><p class="project-location" data-content="projects.2.location" >東京都 世田谷区</p></div><div class="project-detail"><span class="" data-content="projects.2.type" >リノベーション</span><span class="" data-content="projects.2.size" >専有 72㎡</span></div></div></article></div><p id="empty-state" hidden><span class="" data-content="works.empty" >この条件の住まいはありません。</span></p></div></section>
<section class="approach section" id="approach"><div class="wrap"><div class="section-top"><span class="section-index">02</span><p class="eyebrow" data-content="approach.label" >Our approach</p></div><div class="approach-grid"><div class="approach-copy"><h2 class="serif section-title"><span class="" data-content="approach.heading1" >余白とは、</span><span class="" data-content="approach.heading2" >これからの暮らしのための場所。</span></h2><p class="body-copy" data-content="approach.body" >図面を描く前に、休日の朝や、帰宅してからの時間を聞かせてください。部屋の数だけでは決まらない心地よさを、対話を通じて探します。</p><div class="approach-points"><div><h3 class="" data-content="approach.point1" >光を読む</h3><p class="body-copy" data-content="approach.text1" >時間と季節によって変わる光を、窓の位置と軒の深さで受け止めます。</p></div><div><h3 class="" data-content="approach.point2" >素材に触れる</h3><p class="body-copy" data-content="approach.text2" >無垢の木、左官の壁、足元の石。毎日触れる場所から素材を選びます。</p></div><div><h3 class="" data-content="approach.point3" >庭へつなぐ</h3><p class="body-copy" data-content="approach.text3" >室内と外のあいだに居場所をつくり、住まいに自然の気配を取り込みます。</p></div></div></div><figure class="approach-photo photo-frame"><img class="" data-image="assets.approach" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&amp;fit=crop&amp;w=1200&amp;q=85" alt="木の家具と植物がある、静かな住宅の一角" style="object-position:50% 50%" loading="lazy" decoding="async"></figure></div></div></section>
<section class="process section" id="process"><div class="wrap"><div class="section-top"><span class="section-index">03</span><p class="eyebrow" data-content="process.label" >From conversation to home</p></div><div class="section-heading"><h2 class="serif section-title" data-content="process.heading" >対話から始める、家づくり。</h2><p class="body-copy" data-content="process.lead" >土地探しの段階から、住み替えや改修のご相談まで。まだ決まっていないことがあっても、一緒に整理するところから始めます。</p></div><div class="process-list"><article class="process-row"><span class="step-n serif" data-content="process.steps.0.n" >01</span><h3 class="" data-content="process.steps.0.title" >暮らしを聞く</h3><p class="body-copy" data-content="process.steps.0.text" >住まいへの思い、家族の習慣、ご予算や時期を伺います。初回はオンラインでもお話しいただけます。</p></article><article class="process-row"><span class="step-n serif" data-content="process.steps.1.n" >02</span><h3 class="" data-content="process.steps.1.title" >敷地と計画を読む</h3><p class="body-copy" data-content="process.steps.1.text" >敷地の光と風、周辺環境を確認。模型やスケッチで、暮らしの輪郭を一緒に確かめます。</p></article><article class="process-row"><span class="step-n serif" data-content="process.steps.2.n" >03</span><h3 class="" data-content="process.steps.2.title" >設計を深める</h3><p class="body-copy" data-content="process.steps.2.text" >間取り、素材、設備を選び、施工に向けた図面を整えます。予算とのバランスも並行して確認します。</p></article><article class="process-row"><span class="step-n serif" data-content="process.steps.3.n" >04</span><h3 class="" data-content="process.steps.3.title" >現場から、暮らしへ</h3><p class="body-copy" data-content="process.steps.3.text" >施工者と対話を重ね、設計の意図を現場へ。お引き渡し後も、住まいの変化に向き合います。</p></article></div></div></section></main>
<footer class="closing" id="contact"><div class="wrap"><div class="footer-main"><div><p class="eyebrow" data-content="footer.label" >Start your home</p><h2 class="serif" data-content="footer.heading" >どんな一日を、
この家で過ごしたいですか。</h2><p class="body-copy" data-content="footer.lead" >言葉になっていない暮らしの思いから、お聞かせください。</p></div><button class="button button-light" data-demo="家づくりを相談する"><span class="" data-content="nav.contact" >家づくりを相談する</span><span class="arrow" aria-hidden="true">↗</span></button></div><div class="footer-bottom"><div class="footer-brand"><span class="serif" data-content="brand" >余凪舎</span><span class="" data-content="wordmark" >YONAGISHA</span></div><div class="footer-details"><p class="" data-content="footer.area" >神奈川県鎌倉市 / 予約制</p><p class="" data-content="footer.scope" >住宅設計・リノベーション</p></div><div class="footer-meta"><p class="" data-content="footer.copyright" >© 2026 YONAGISHA</p><p class="" data-content="footer.concept" >GENSEKI concept / 架空のブランド・外部送信なし</p><a class="credits" href="https://unsplash.com/license" target="_blank" rel="noopener"><span class="" data-content="footer.credits" >Photographs via Unsplash</span></a></div></div></div></footer>
<dialog id="project-dialog" aria-labelledby="project-dialog-title"><form method="dialog"><button class="dialog-close" aria-label="閉じる">×</button></form><p class="eyebrow" id="project-dialog-meta"></p><h2 class="serif" id="project-dialog-title"></h2><p class="body-copy" id="project-dialog-description"></p><button class="button" data-demo="家づくりを相談する"><span class="" data-content="nav.contact" >家づくりを相談する</span><span aria-hidden="true">↗</span></button></dialog>
<script src="content.js"></script><script src="genseki.js"></script><script src="app.js"></script></body></html>
```

### style.css

```css file=style.css
*{box-sizing:border-box}html{scroll-padding-top:84px;scroll-behavior:smooth}body{margin:0;-webkit-font-smoothing:antialiased}button,input,select{font:inherit}button,a{-webkit-tap-highlight-color:transparent}button{cursor:pointer}a{color:inherit;text-decoration:none}button,a,input,select{touch-action:manipulation}button{color:inherit}img{display:block;width:100%;height:100%;object-fit:cover}h1,h2,h3,p,figure{margin:0}button:focus-visible,a:focus-visible,input:focus-visible,select:focus-visible{outline:2px solid currentColor;outline-offset:5px}.skip-link{position:fixed;top:10px;left:20px;z-index:1000;transform:translateY(-150%);padding:12px 18px;background:#fff;color:#111}.skip-link:focus{transform:translateY(0)}[hidden]{display:none!important}.wrap{width:min(1280px,calc(100% - 112px));margin-inline:auto}.serif{font-family:Georgia,"Yu Mincho","Hiragino Mincho ProN",serif;font-weight:400}button{border:0;background:none}.arrow{font-family:Arial,sans-serif;font-weight:400}.button{display:inline-flex;min-height:52px;align-items:center;justify-content:space-between;gap:32px;padding:14px 24px;border:1px solid currentColor;transition:transform .2s,background .2s,color .2s}.button:hover{transform:translateY(-2px)}.button:active{transform:translateY(1px)}.button .arrow{transition:transform .2s}.button:hover .arrow{transform:translateX(4px)}.photo-frame{overflow:hidden}.photo-frame img{transition:transform .65s cubic-bezier(.22,.61,.36,1)}.photo-frame:hover img{transform:scale(1.025)}.eyebrow{font-size:11px;letter-spacing:.16em;line-height:1.7}.section-index{font-family:Georgia,serif;font-size:14px}.section-title{font-size:clamp(30px,3.4vw,48px);line-height:1.5;letter-spacing:.035em}.body-copy{font-size:15px;line-height:2.1;letter-spacing:.045em}.nav-links{display:flex;align-items:center;gap:28px;font-size:12px}.nav-links a{min-height:44px;display:flex;align-items:center;position:relative}.nav-links a:after{content:"";height:1px;background:currentColor;position:absolute;bottom:9px;left:0;width:100%;transform:scaleX(0);transform-origin:left;transition:transform .2s}.nav-links a:hover:after{transform:scaleX(1)}.menu-toggle{display:none;min-height:44px;min-width:44px;border:1px solid currentColor;font-size:11px}.mobile-nav{position:fixed;inset:76px 0 0;z-index:60;padding:36px 24px;background:var(--paper);color:var(--ink);display:flex;flex-direction:column;gap:8px}.mobile-nav a{padding:18px 0;border-bottom:1px solid var(--line);font-size:20px}.footer-meta{font-size:10px;letter-spacing:.08em;line-height:1.8}.credits{font-size:10px;opacity:.65;min-height:44px;display:inline-flex;align-items:center}dialog{border:0;padding:32px;max-width:min(560px,calc(100vw - 40px));background:var(--paper);color:var(--ink)}dialog::backdrop{background:rgba(0,0,0,.5)}@media(max-width:1000px){.wrap{width:calc(100% - 64px)}.nav-links{gap:18px}}@media(max-width:680px){html{scroll-padding-top:76px}.wrap{width:calc(100% - 40px)}.nav-links{display:none}.menu-toggle{display:block}.body-copy{font-size:15px}.button{min-height:52px;padding:14px 20px}.section-title{font-size:30px}.footer-meta{font-size:9px}}@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*,*::before,*::after{animation:none!important;transition:none!important}}

:root{--paper:#f5f4ee;--ink:#292d2a;--line:#d5d6cf;--muted:#767b74}body{background:var(--paper);color:var(--ink);font-family:"Helvetica Neue",Arial,"Hiragino Kaku Gothic ProN","Yu Gothic",sans-serif}.site-header{height:88px;background:var(--paper);position:relative;z-index:70}.header-inner{height:100%;display:flex;align-items:center;justify-content:space-between}.brand{display:flex;align-items:center;gap:16px;min-height:44px}.brand-jp{font-size:29px;letter-spacing:.12em}.brand-en{font-size:10px;letter-spacing:.2em}.nav-contact{min-height:44px;display:flex;align-items:center;gap:24px;padding:0 0 0 28px;border-left:1px solid var(--line);font-size:12px}.hero{position:relative;min-height:calc(100svh - 88px);padding-bottom:32px}.hero-copy{padding-top:35px}.hero-top{display:flex;align-items:center;justify-content:space-between}.hero-index{font-size:10px;letter-spacing:.12em}.hero-heading{display:grid;grid-template-columns:1.4fr 1fr;gap:72px;align-items:end;padding:26px 0 42px}.hero h1{font-size:clamp(52px,6.2vw,90px);line-height:1.2;letter-spacing:.06em;display:flex;flex-wrap:wrap;gap:0 .04em}.hero-aside{max-width:360px;margin-left:auto}.hero-detail{font-size:10px;letter-spacing:.08em;margin-top:16px;color:var(--muted)}.hero-photo{height:clamp(340px,48vh,620px);width:100%}.hero-scroll{display:flex;align-items:center;justify-content:space-between;width:min(1280px,calc(100% - 112px));margin:16px auto 0;font-size:10px;letter-spacing:.08em;min-height:30px}.hero-scroll span:last-child{font-size:22px}.section{padding:104px 0 110px}.section-top{display:flex;align-items:center;gap:24px;margin-bottom:36px}.section-heading{display:grid;grid-template-columns:1.5fr 1fr;gap:72px;align-items:start;margin-bottom:46px}.section-heading .body-copy{max-width:390px;justify-self:end}.filter-row{display:flex;align-items:center;gap:28px;border-bottom:1px solid var(--line);margin-bottom:36px}.filter{position:relative;padding:16px 0;font-size:12px;min-height:50px;color:var(--muted)}.filter.active{color:var(--ink)}.filter.active:after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:2px;background:var(--ink)}.filter-count{margin-left:auto;font-size:10px;color:var(--muted)}.project-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:28px}.project-visual{position:relative;display:block;width:100%;height:340px;padding:0;text-align:left}.project-open{position:absolute;right:14px;bottom:14px;background:var(--paper);width:40px;height:40px;display:grid;place-items:center;font-size:22px}.project-info{display:flex;justify-content:space-between;gap:12px;padding-top:22px}.project-info h3{font-size:21px;line-height:1.5}.project-location{font-size:10px;color:var(--muted);margin-top:8px}.project-detail{display:flex;flex-direction:column;gap:6px;text-align:right;flex-shrink:0;font-size:9px;color:var(--muted);line-height:1.8}.approach{background:#e8e9e2}.approach-grid{display:grid;grid-template-columns:1fr 1fr;gap:96px}.approach-copy h2 span{display:block}.approach-copy .body-copy{margin-top:28px;max-width:460px}.approach-points{margin-top:32px}.approach-points>div{display:grid;grid-template-columns:96px 1fr;gap:24px;padding:17px 0;border-top:1px solid #cdd0c6}.approach-points h3{font-size:13px;line-height:2.1;font-weight:500}.approach-points .body-copy{margin:0;font-size:15px;line-height:2}.approach-photo{height:605px}.process-list{margin-top:52px}.process-row{display:grid;grid-template-columns:80px 1fr 1fr;gap:28px;align-items:start;padding:28px 0;border-top:1px solid var(--line)}.step-n{font-size:28px;line-height:1.4}.process-row h3{font-size:19px;font-weight:400;padding-top:6px}.process-row .body-copy{font-size:15px}.closing{background:var(--ink);color:var(--paper);padding:88px 0 30px}.footer-main{display:flex;justify-content:space-between;gap:64px;align-items:center;padding-bottom:84px}.footer-main h2{font-size:clamp(30px,3.7vw,52px);line-height:1.65;white-space:pre-line;margin:20px 0}.footer-main .body-copy{color:#c7cbc2}.button-light{min-width:260px}.footer-bottom{border-top:1px solid #5c625a;padding-top:30px;display:grid;grid-template-columns:1fr 1fr 1.2fr;gap:36px;align-items:start}.footer-brand{display:flex;gap:20px;align-items:center}.footer-brand .serif{font-size:28px;letter-spacing:.12em}.footer-brand>span:last-child{font-size:10px;letter-spacing:.15em}.footer-details{font-size:11px;line-height:2.3;color:#c7cbc2}.footer-meta{color:#c7cbc2;text-align:right}#project-dialog{padding:48px}#project-dialog h2{font-size:30px;margin:20px 0}#project-dialog .body-copy{margin:20px 0 32px}.dialog-close{position:absolute;right:12px;top:10px;width:44px;height:44px;font-size:28px}
@media(min-width:1600px){.hero-photo{height:51vh}}@media(max-width:1100px){.hero-heading{gap:36px}.hero h1{font-size:64px}.hero-aside{max-width:320px}.project-visual{height:300px}.project-info{display:block}.project-detail{flex-direction:row;text-align:left;margin-top:12px}.approach-grid{gap:48px}.approach-photo{height:630px}.section-heading{gap:36px}.filter-row{gap:22px}}@media(max-width:800px){.hero-heading{grid-template-columns:1fr 1fr;gap:30px}.hero h1{font-size:52px}.hero-aside{max-width:none}.project-grid{gap:18px}.project-visual{height:260px}.project-info h3{font-size:18px}.approach-grid{gap:32px}.approach-points>div{grid-template-columns:1fr;gap:4px}.approach-photo{height:640px}.process-row{grid-template-columns:50px 1fr 1.2fr;gap:20px}.footer-main{gap:32px}.button-light{min-width:220px}.footer-bottom{grid-template-columns:1fr 1.3fr}.footer-details{display:none}}
@media(max-width:680px){.site-header{height:76px}.brand-jp{font-size:25px}.brand-en{font-size:9px}.hero{min-height:calc(100svh - 76px);padding-bottom:22px;display:flex;flex-direction:column}.hero-copy{padding-top:20px}.hero-top .eyebrow{font-size:9px;letter-spacing:.1em}.hero-index{font-size:9px}.hero-heading{grid-template-columns:1fr;gap:24px;padding:26px 0 28px}.hero h1{font-size:52px;line-height:1.25;letter-spacing:.02em}.hero-aside{max-width:330px;margin:0}.hero-aside .body-copy{font-size:15px;line-height:1.9}.hero-detail{font-size:9px;margin-top:10px}.hero-photo{height:auto;min-height:280px;flex:1}.hero-scroll{width:calc(100% - 40px);min-height:24px;font-size:9px}.section{padding:70px 0}.section-top{margin-bottom:28px;gap:16px}.section-top .eyebrow{font-size:10px}.section-heading{grid-template-columns:1fr;gap:22px;margin-bottom:30px}.section-title{font-size:29px}.section-heading .body-copy{justify-self:start;max-width:340px}.filter-row{gap:20px;overflow-x:auto;white-space:nowrap;scrollbar-width:none;margin-bottom:26px}.filter{font-size:11px;padding:15px 0;flex-shrink:0}.filter-count{display:none}.project-grid{grid-template-columns:1fr;gap:36px}.project-visual{height:360px}.project-info{display:flex;padding-top:18px}.project-info h3{font-size:22px}.project-detail{flex-direction:column;font-size:9px;margin-top:0;gap:2px}.approach-grid{grid-template-columns:1fr;gap:36px}.approach-copy .body-copy{max-width:none}.approach-points>div{grid-template-columns:80px 1fr;gap:16px}.approach-photo{height:410px}.process-list{margin-top:34px}.process-row{grid-template-columns:40px 1fr;gap:12px 18px;padding:24px 0}.process-row .body-copy{grid-column:2}.step-n{font-size:25px}.process-row h3{font-size:18px;padding-top:3px}.closing{padding:64px 0 24px}.footer-main{display:block;padding-bottom:56px}.footer-main h2{font-size:29px;line-height:1.75}.footer-main .body-copy{font-size:15px}.button-light{margin-top:32px;width:100%}.footer-bottom{grid-template-columns:1fr;gap:24px}.footer-details{display:block}.footer-meta{text-align:left}.footer-brand .serif{font-size:26px}#project-dialog{padding:36px 24px}#project-dialog h2{font-size:25px}}

@media(max-width:680px){body .body-copy{font-size:14px}body .hero-lead{font-size:13px}body .hero-aside .body-copy{font-size:14px}body .intro-copy .body-copy,body .roast-copy>.body-copy,body .story-copy>.body-copy,body .room-copy>.body-copy,body .stay-row .body-copy,body .approach-points .body-copy,body .booking-copy>.body-copy,body .section-heading>.body-copy,body .visit-note .body-copy,body .access-grid .body-copy,body .process-row .body-copy{font-size:14px}}
@media(max-width:680px){.filter-row{flex-wrap:wrap;gap:0 20px;overflow:visible;white-space:normal}.filter{white-space:nowrap}}
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
