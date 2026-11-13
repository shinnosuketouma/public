# 朝凪焙煎所 — 朝の余韻を、一杯に。 — 編集欄つき・実装固定プロンプト v1

日本向けWebサイトを次の仕様・参照実装で制作してください。
このプロンプトはGENSEKI独自制作の gs-007 / v1 に対応します。
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
  "brand": "朝凪焙煎所",
  "wordmark": "ASANAGI",
  "theme": "#493c30",
  "description": "鎌倉・長谷の小さなコーヒー焙煎所。浅煎りから深煎りまで、その日の気分に合う一杯をご用意しています。",
  "skip": "本文へ移動",
  "nav": {
    "coffee": "コーヒー",
    "story": "焙煎所について",
    "visit": "店舗案内",
    "menu": "メニュー",
    "main": "メニューを見る"
  },
  "hero": {
    "label": "Coffee roastery & slow mornings",
    "region": "Kamakura / Hase",
    "line1": "朝の余韻を、",
    "line2": "一杯に。",
    "lead": "鎌倉・長谷の、小さな焙煎所。\n豆の個性を引き出して、毎日にひらくコーヒーを。",
    "hours": "9:00 — 17:00 / 水曜定休",
    "stamp1": "Small batch",
    "stamp2": "Daily coffee",
    "index": "01 / Morning at ASANAGI"
  },
  "coffee": {
    "label": "Our coffee",
    "heading": "いまの気分で、選ぶコーヒー。",
    "intro": "果実のような明るさも、ほっとする苦みも。焙煎によって変わる味わいから、今日の一杯を選んでみてください。",
    "tabLight": "浅煎り",
    "tabMedium": "中煎り",
    "tabDark": "深煎り",
    "originLabel": "Origin",
    "roastLabel": "Roast",
    "notesLabel": "Tasting notes",
    "beansLabel": "Coffee beans / 200g",
    "brewAction": "おいしい淹れ方を見る",
    "brewHeading": "この豆をハンドドリップで",
    "tax": "すべて税込価格",
    "menuTitle": "店内のメニュー",
    "menuIntro": "ハンドドリップは、ご注文ごとに一杯ずつ。コーヒーに合うお菓子もご用意しています。",
    "drink1": "ハンドドリップコーヒー",
    "price1": "¥580〜",
    "drink2": "カフェラテ",
    "price2": "¥640",
    "drink3": "水出しコーヒー",
    "price3": "¥620",
    "drink4": "季節のパウンドケーキ",
    "price4": "¥480",
    "menuNote": "豆の種類により、ハンドドリップの価格は変わります。"
  },
  "roasts": [
    {
      "name": "花ひらく、朝。",
      "english": "Morning bloom",
      "origin": "Ethiopia / Yirgacheffe",
      "roast": "Light roast",
      "notes": "ベルガモット / 白桃 / 紅茶",
      "description": "湯気の中にふわりと広がる、華やかな香り。すっきりとした飲み口が、朝の時間によく合います。",
      "price": "¥1,680",
      "image": "light",
      "brew": "豆 15g、お湯 240ml、湯温 90℃。最初に30mlを注いで30秒蒸らし、残りを3回に分けて注ぎます。抽出の目安は2分30秒です。"
    },
    {
      "name": "まろやかな、午後。",
      "english": "Afternoon mellow",
      "origin": "Guatemala / Antigua",
      "roast": "Medium roast",
      "notes": "ミルクチョコレート / アーモンド / 柑橘",
      "description": "香ばしいナッツと、ほどよい甘み。お菓子をひと切れ添えて、ゆっくり味わいたくなるコーヒーです。",
      "price": "¥1,480",
      "image": "medium",
      "brew": "豆 15g、お湯 225ml、湯温 88℃。30秒の蒸らしのあと、中心から小さく円を描いて注ぎます。抽出の目安は2分30秒です。"
    },
    {
      "name": "深くほどける、夜。",
      "english": "Evening slow",
      "origin": "Brazil / Cerrado",
      "roast": "Dark roast",
      "notes": "カカオ / ローストナッツ / 黒糖",
      "description": "しっかりとしたコクの奥に、落ち着いた甘み。ミルクを少し加えても、豆の味わいを楽しめます。",
      "price": "¥1,380",
      "image": "dark",
      "brew": "豆 16g、お湯 220ml、湯温 85℃。最初に40mlで30秒蒸らし、2回に分けて静かに注ぎます。抽出の目安は2分45秒です。"
    }
  ],
  "story": {
    "label": "A little about us",
    "heading1": "豆と向き合い、",
    "heading2": "日々に寄り添う。",
    "body1": "朝凪は、海辺で風が静まる時間のこと。慌ただしい毎日のなかにも、そんなひとときをつくれたらと考えています。",
    "body2": "産地ごとに異なる豆の香りを確かめながら、少量ずつ焙煎。ご自宅でも楽しめるように、お好みや淹れ方を伺いながら豆をご案内します。",
    "detail": "豆選びや挽き方は、店頭でお気軽にご相談ください。",
    "since": "A small roastery,\na slower moment."
  },
  "space": {
    "label": "At the roastery",
    "heading": "長谷の街で、ひと息。",
    "body": "散歩の途中に立ち寄る一杯。窓辺で本を読む一杯。肩の力を抜いて過ごせる時間と、焼きたての香りをお届けします。"
  },
  "visit": {
    "label": "Visit ASANAGI",
    "heading": "コーヒーのある、いつもの朝へ。",
    "addressLabel": "Location",
    "address": "神奈川県鎌倉市 長谷",
    "hoursLabel": "Opening hours",
    "hours": "9:00 — 17:00",
    "closed": "水曜定休",
    "accessLabel": "Access",
    "access": "江ノ電・長谷駅周辺",
    "takeaway": "テイクアウト / コーヒー豆販売",
    "map": "周辺の地図を見る",
    "contact": "ご来店前のご案内",
    "note": "店内は小さな空間です。大きなお荷物は足元に収まる範囲でお持ちください。豆は100g単位でもご用意します。"
  },
  "footer": {
    "tagline": "Coffee for the everyday.",
    "copyright": "© 2026 ASANAGI ROASTERY",
    "concept": "GENSEKI concept / 架空のブランド・外部送信なし",
    "credits": "Photographs via Unsplash"
  },
  "assets": {
    "hero": {
      "url": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1500&q=85",
      "alt": "木のテーブルと落ち着いた光のあるコーヒー店",
      "position": "50% 55%"
    },
    "light": {
      "url": "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1000&q=85",
      "alt": "ハンドドリップで楽しむ一杯のコーヒー",
      "position": "50% 50%"
    },
    "medium": {
      "url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=85",
      "alt": "コーヒーの香りを楽しむカップのあるテーブル",
      "position": "50% 50%"
    },
    "dark": {
      "url": "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1000&q=85",
      "alt": "じっくり焙煎されたコーヒー豆",
      "position": "50% 50%"
    },
    "story": {
      "url": "https://images.unsplash.com/photo-1511081692775-05d0f180a065?auto=format&fit=crop&w=1300&q=85",
      "alt": "手仕事でコーヒーを淹れる焙煎所の風景",
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
  "genre_id": "G07",
  "seed_id": "G07-01",
  "title": "朝凪焙煎所 — 朝の余韻を、一杯に。",
  "kind": "place",
  "category": "スペシャルティコーヒー焙煎所",
  "primary_action": "メニューを見る",
  "direction": "温かなクリームと珈琲色、控えめなテラコッタ。大きな英文ワードマークと喫茶店写真、豆の味を選ぶ編集的なメニュー。",
  "sections": [
    {
      "id": "top",
      "purpose": "焙煎所の空気感と所在地を伝える",
      "layout": "大きなASANAGIワードマーク、左店舗写真と右明朝体見出しの2列"
    },
    {
      "id": "coffee",
      "purpose": "味わい別に豆と店内メニューを選ぶ",
      "layout": "3焙煎タブ。写真と商品情報、下に開いたメニューの行"
    },
    {
      "id": "story",
      "purpose": "焙煎への考え方を読む",
      "layout": "濃いクリーム地に文章と縦写真。下部に英文タイポグラフィー"
    },
    {
      "id": "space",
      "purpose": "店舗で過ごす時間を想像する",
      "layout": "短い説明の下に大きさの異なる2写真"
    },
    {
      "id": "visit",
      "purpose": "営業情報と周辺地図を確認する",
      "layout": "珈琲色の地に店舗案内と来店前の案内、全幅フッター"
    }
  ],
  "tokens": {
    "paper": "#f4eee2",
    "ink": "#493c30",
    "surface": "#e8ddc9",
    "accent": "#b4623e",
    "max_width": "1280px",
    "desktop_gutter": "56px",
    "mobile_gutter": "20px",
    "display_font": "Georgia, Yu Mincho, Hiragino Mincho ProN, serif",
    "body_font": "Helvetica Neue, Arial, Hiragino Kaku Gothic ProN, Yu Gothic, sans-serif"
  },
  "interactions": [
    "浅煎り・中煎り・深煎りのtabで写真、商品名、産地、味わい、価格が更新",
    "tabは左右矢印/Home/Endに対応",
    "淹れ方ボタンで選択中の豆に対応する抽出レシピを開閉",
    "周辺地図はOpenStreetMapの地区検索を新しいタブで開く",
    "モバイルメニュー、写真hoverとボタンpress"
  ],
  "mobile": "680px以下は1列、ヒーローは文章→写真。和文見出しはclamp(33px,10vw,39px)・行高1.4、2つのspanをblockで縦に並べ、読み順を維持。焙煎tabは3等分、写真360px、店舗情報2列。reduced-motionで動きを停止。",
  "editable_notes": "content.jsの全テキストとassetsを編集。3つのroasts配列の順序を維持。価格・メニュー・所在地・営業時間は架空ブランドのコンセプト。画像は外部参照のみ。実店舗公開時は所在地や地図URL、写真を自社のものへ置換する。"
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
<html lang="ja" data-type="place" data-radius="sharp" data-motion="gentle"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>朝凪焙煎所 — 朝の余韻を、 一杯に。</title>
<meta name="description" content="鎌倉・長谷の小さなコーヒー焙煎所。浅煎りから深煎りまで、その日の気分に合う一杯をご用意しています。">
<meta name="page-type" content="place"><meta name="site-kind" content="other"><meta name="page-kind" content="place">
<meta name="theme-color" content="#493c30"><meta property="og:title" content="朝凪焙煎所 — 朝の余韻を、 一杯に。"><meta property="og:description" content="鎌倉・長谷の小さなコーヒー焙煎所。浅煎りから深煎りまで、その日の気分に合う一杯をご用意しています。"><meta property="og:type" content="website">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' fill='%23493c30'/%3E%3Cpath d='M13 13h22v22H13z' fill='none' stroke='%23f7f4ec' stroke-width='2'/%3E%3C/svg%3E">
<link rel="stylesheet" href="style.css"><meta property="og:image" content="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&amp;fit=crop&amp;w=1500&amp;q=85"><meta name="twitter:card" content="summary_large_image"></head><body>
<a class="skip-link" data-content="skip" href="#main">本文へ移動</a>

<header class="site-header"><div class="wrap header-inner"><a href="#top" class="brand" aria-label="朝凪焙煎所 トップ"><span class="serif" data-content="brand" >朝凪焙煎所</span></a><nav class="nav-links" aria-label="メインナビゲーション"><a class="" data-content="nav.coffee" href="#coffee">コーヒー</a><a class="" data-content="nav.story" href="#story">焙煎所について</a><a class="" data-content="nav.visit" href="#visit">店舗案内</a></nav><button class="menu-toggle" data-menu-toggle aria-expanded="false" aria-controls="mobile-menu"><span class="" data-content="nav.menu" >メニュー</span></button></div></header><nav class="mobile-nav" id="mobile-menu" data-menu hidden aria-label="モバイルナビゲーション"><a class="" data-content="nav.coffee" href="#coffee">コーヒー</a><a class="" data-content="nav.story" href="#story">焙煎所について</a><a class="" data-content="nav.visit" href="#visit">店舗案内</a></nav>
<main id="main"><section class="hero" id="top" data-enter><div class="wrap"><div class="hero-wordmark-row"><p class="hero-wordmark" data-content="wordmark" >ASANAGI</p><span class="hero-region" data-content="hero.region" >Kamakura / Hase</span></div><div class="hero-grid"><div class="hero-photo photo-frame"><img class="" data-image="assets.hero" src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&amp;fit=crop&amp;w=1500&amp;q=85" alt="木のテーブルと落ち着いた光のあるコーヒー店" style="object-position:50% 55%" loading="eager" decoding="async"></div><div class="hero-copy"><div class="coffee-seal" aria-hidden="true"><span class="" data-content="hero.stamp1" >Small batch</span><span class="" data-content="hero.stamp2" >Daily coffee</span></div><p class="eyebrow" data-content="hero.label" >Coffee roastery &amp; slow mornings</p><h1 class="serif"><span class="" data-content="hero.line1" >朝の余韻を、</span><span class="" data-content="hero.line2" >一杯に。</span></h1><p class="hero-lead" data-content="hero.lead" >鎌倉・長谷の、小さな焙煎所。
豆の個性を引き出して、毎日にひらくコーヒーを。</p><a class="button" href="#coffee"><span class="" data-content="nav.main" >メニューを見る</span><span class="arrow" aria-hidden="true">↗</span></a><p class="hero-hours" data-content="hero.hours" >9:00 — 17:00 / 水曜定休</p></div></div><div class="hero-foot"><span class="eyebrow" data-content="hero.index" >01 / Morning at ASANAGI</span><span aria-hidden="true">↓</span></div></div></section>
<section class="coffee section" id="coffee"><div class="wrap"><div class="section-heading"><div><p class="eyebrow" data-content="coffee.label" >Our coffee</p><h2 class="serif section-title" data-content="coffee.heading" >いまの気分で、選ぶコーヒー。</h2></div><p class="body-copy" data-content="coffee.intro" >果実のような明るさも、ほっとする苦みも。焙煎によって変わる味わいから、今日の一杯を選んでみてください。</p></div><div class="roast-tabs" role="tablist" aria-label="焙煎度を選ぶ"><button id="roast-tab-0" class="roast-tab active" role="tab" aria-selected="true" aria-controls="roast-panel" tabindex="0" data-roast="0"><span class="" data-content="coffee.tabLight" >浅煎り</span></button><button id="roast-tab-1" class="roast-tab" role="tab" aria-selected="false" aria-controls="roast-panel" tabindex="-1" data-roast="1"><span class="" data-content="coffee.tabMedium" >中煎り</span></button><button id="roast-tab-2" class="roast-tab" role="tab" aria-selected="false" aria-controls="roast-panel" tabindex="-1" data-roast="2"><span class="" data-content="coffee.tabDark" >深煎り</span></button></div><div class="roast-panel" id="roast-panel" role="tabpanel" aria-labelledby="roast-tab-0" tabindex="0"><div class="roast-photo photo-frame"><img class="" data-image="assets.light" src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&amp;fit=crop&amp;w=1000&amp;q=85" alt="ハンドドリップで楽しむ一杯のコーヒー" style="object-position:50% 50%" loading="lazy" decoding="async"></div><div class="roast-copy"><p class="roast-english" id="roast-english"><span class="" data-content="roasts.0.english" >Morning bloom</span></p><h3 class="serif" id="roast-name"><span class="" data-content="roasts.0.name" >花ひらく、朝。</span></h3><p class="body-copy" id="roast-description"><span class="" data-content="roasts.0.description" >湯気の中にふわりと広がる、華やかな香り。すっきりとした飲み口が、朝の時間によく合います。</span></p><dl class="roast-details"><div><dt class="" data-content="coffee.originLabel" >Origin</dt><dd id="roast-origin"><span class="" data-content="roasts.0.origin" >Ethiopia / Yirgacheffe</span></dd></div><div><dt class="" data-content="coffee.roastLabel" >Roast</dt><dd id="roast-level"><span class="" data-content="roasts.0.roast" >Light roast</span></dd></div><div><dt class="" data-content="coffee.notesLabel" >Tasting notes</dt><dd id="roast-notes"><span class="" data-content="roasts.0.notes" >ベルガモット / 白桃 / 紅茶</span></dd></div></dl><div class="bean-price"><span class="" data-content="coffee.beansLabel" >Coffee beans / 200g</span><span id="roast-price"><span class="" data-content="roasts.0.price" >¥1,680</span></span></div><button class="brew-button" id="brew-toggle" aria-expanded="false" aria-controls="brew-detail"><span class="" data-content="coffee.brewAction" >おいしい淹れ方を見る</span><span aria-hidden="true">＋</span></button><div id="brew-detail" class="brew-detail" hidden><h4 class="" data-content="coffee.brewHeading" >この豆をハンドドリップで</h4><p id="brew-description" class="body-copy"><span class="" data-content="roasts.0.brew" >豆 15g、お湯 240ml、湯温 90℃。最初に30mlを注いで30秒蒸らし、残りを3回に分けて注ぎます。抽出の目安は2分30秒です。</span></p></div></div></div><div class="menu-grid"><div><h3 class="serif" data-content="coffee.menuTitle" >店内のメニュー</h3><p class="body-copy" data-content="coffee.menuIntro" >ハンドドリップは、ご注文ごとに一杯ずつ。コーヒーに合うお菓子もご用意しています。</p></div><div class="menu-list"><div class="menu-row"><span class="" data-content="coffee.drink1" >ハンドドリップコーヒー</span><span class="" data-content="coffee.price1" >¥580〜</span></div><div class="menu-row"><span class="" data-content="coffee.drink2" >カフェラテ</span><span class="" data-content="coffee.price2" >¥640</span></div><div class="menu-row"><span class="" data-content="coffee.drink3" >水出しコーヒー</span><span class="" data-content="coffee.price3" >¥620</span></div><div class="menu-row"><span class="" data-content="coffee.drink4" >季節のパウンドケーキ</span><span class="" data-content="coffee.price4" >¥480</span></div><div class="menu-note"><span class="" data-content="coffee.menuNote" >豆の種類により、ハンドドリップの価格は変わります。</span><span class="" data-content="coffee.tax" >すべて税込価格</span></div></div></div></div></section>
<section class="story section" id="story"><div class="wrap"><div class="story-grid"><div class="story-copy"><p class="eyebrow" data-content="story.label" >A little about us</p><h2 class="serif section-title"><span class="" data-content="story.heading1" >豆と向き合い、</span><span class="" data-content="story.heading2" >日々に寄り添う。</span></h2><p class="body-copy" data-content="story.body1" >朝凪は、海辺で風が静まる時間のこと。慌ただしい毎日のなかにも、そんなひとときをつくれたらと考えています。</p><p class="body-copy" data-content="story.body2" >産地ごとに異なる豆の香りを確かめながら、少量ずつ焙煎。ご自宅でも楽しめるように、お好みや淹れ方を伺いながら豆をご案内します。</p><p class="story-detail" data-content="story.detail" >豆選びや挽き方は、店頭でお気軽にご相談ください。</p></div><div class="story-photo photo-frame"><img class="" data-image="assets.story" src="https://images.unsplash.com/photo-1511081692775-05d0f180a065?auto=format&amp;fit=crop&amp;w=1300&amp;q=85" alt="手仕事でコーヒーを淹れる焙煎所の風景" style="object-position:50% 50%" loading="lazy" decoding="async"></div></div><div class="type-moment"><p class="serif" data-content="story.since" >A small roastery,
a slower moment.</p><span class="" data-content="wordmark" >ASANAGI</span></div></div></section>
<section class="space section" id="space"><div class="wrap"><div class="section-heading"><div><p class="eyebrow" data-content="space.label" >At the roastery</p><h2 class="serif section-title" data-content="space.heading" >長谷の街で、ひと息。</h2></div><p class="body-copy" data-content="space.body" >散歩の途中に立ち寄る一杯。窓辺で本を読む一杯。肩の力を抜いて過ごせる時間と、焼きたての香りをお届けします。</p></div><div class="space-gallery"><div class="space-big photo-frame"><img class="" data-image="assets.medium" src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&amp;fit=crop&amp;w=1000&amp;q=85" alt="コーヒーの香りを楽しむカップのあるテーブル" style="object-position:50% 50%" loading="lazy" decoding="async"></div><div class="space-small photo-frame"><img class="" data-image="assets.dark" src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&amp;fit=crop&amp;w=1000&amp;q=85" alt="じっくり焙煎されたコーヒー豆" style="object-position:50% 50%" loading="lazy" decoding="async"></div></div></div></section></main>
<footer class="closing" id="visit"><div class="wrap"><div class="visit-heading"><p class="eyebrow" data-content="visit.label" >Visit ASANAGI</p><h2 class="serif section-title" data-content="visit.heading" >コーヒーのある、いつもの朝へ。</h2></div><div class="visit-grid"><div class="visit-info"><div><p class="eyebrow" data-content="visit.addressLabel" >Location</p><p class="visit-value" data-content="visit.address" >神奈川県鎌倉市 長谷</p><p class="visit-detail" data-content="visit.access" >江ノ電・長谷駅周辺</p></div><div><p class="eyebrow" data-content="visit.hoursLabel" >Opening hours</p><p class="visit-value" data-content="visit.hours" >9:00 — 17:00</p><p class="visit-detail" data-content="visit.closed" >水曜定休</p></div><div><p class="eyebrow" data-content="visit.accessLabel" >Access</p><p class="visit-value" data-content="visit.takeaway" >テイクアウト / コーヒー豆販売</p></div><a class="button" data-map="visit.address" href="https://www.openstreetmap.org/search?query=%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E9%8E%8C%E5%80%89%E5%B8%82%20%E9%95%B7%E8%B0%B7" target="_blank" rel="noopener"><span class="" data-content="visit.map" >周辺の地図を見る</span><span class="arrow" aria-hidden="true">↗</span></a></div><div class="visit-note"><h3 class="serif" data-content="visit.contact" >ご来店前のご案内</h3><p class="body-copy" data-content="visit.note" >店内は小さな空間です。大きなお荷物は足元に収まる範囲でお持ちください。豆は100g単位でもご用意します。</p><p class="serif footer-tagline" data-content="footer.tagline" >Coffee for the everyday.</p></div></div><div class="footer-bottom"><div class="footer-brand"><span class="serif" data-content="brand" >朝凪焙煎所</span><span class="" data-content="wordmark" >ASANAGI</span></div><div class="footer-meta"><p class="" data-content="footer.copyright" >© 2026 ASANAGI ROASTERY</p><p class="" data-content="footer.concept" >GENSEKI concept / 架空のブランド・外部送信なし</p><a class="credits" href="https://unsplash.com/license" target="_blank" rel="noopener"><span class="" data-content="footer.credits" >Photographs via Unsplash</span></a></div></div></div></footer>
<script src="content.js"></script><script src="genseki.js"></script><script src="app.js"></script></body></html>
```

### style.css

```css file=style.css
*{box-sizing:border-box}html{scroll-padding-top:84px;scroll-behavior:smooth}body{margin:0;-webkit-font-smoothing:antialiased}button,input,select{font:inherit}button,a{-webkit-tap-highlight-color:transparent}button{cursor:pointer}a{color:inherit;text-decoration:none}button,a,input,select{touch-action:manipulation}button{color:inherit}img{display:block;width:100%;height:100%;object-fit:cover}h1,h2,h3,p,figure{margin:0}button:focus-visible,a:focus-visible,input:focus-visible,select:focus-visible{outline:2px solid currentColor;outline-offset:5px}.skip-link{position:fixed;top:10px;left:20px;z-index:1000;transform:translateY(-150%);padding:12px 18px;background:#fff;color:#111}.skip-link:focus{transform:translateY(0)}[hidden]{display:none!important}.wrap{width:min(1280px,calc(100% - 112px));margin-inline:auto}.serif{font-family:Georgia,"Yu Mincho","Hiragino Mincho ProN",serif;font-weight:400}button{border:0;background:none}.arrow{font-family:Arial,sans-serif;font-weight:400}.button{display:inline-flex;min-height:52px;align-items:center;justify-content:space-between;gap:32px;padding:14px 24px;border:1px solid currentColor;transition:transform .2s,background .2s,color .2s}.button:hover{transform:translateY(-2px)}.button:active{transform:translateY(1px)}.button .arrow{transition:transform .2s}.button:hover .arrow{transform:translateX(4px)}.photo-frame{overflow:hidden}.photo-frame img{transition:transform .65s cubic-bezier(.22,.61,.36,1)}.photo-frame:hover img{transform:scale(1.025)}.eyebrow{font-size:11px;letter-spacing:.16em;line-height:1.7}.section-index{font-family:Georgia,serif;font-size:14px}.section-title{font-size:clamp(30px,3.4vw,48px);line-height:1.5;letter-spacing:.035em}.body-copy{font-size:15px;line-height:2.1;letter-spacing:.045em}.nav-links{display:flex;align-items:center;gap:28px;font-size:12px}.nav-links a{min-height:44px;display:flex;align-items:center;position:relative}.nav-links a:after{content:"";height:1px;background:currentColor;position:absolute;bottom:9px;left:0;width:100%;transform:scaleX(0);transform-origin:left;transition:transform .2s}.nav-links a:hover:after{transform:scaleX(1)}.menu-toggle{display:none;min-height:44px;min-width:44px;border:1px solid currentColor;font-size:11px}.mobile-nav{position:fixed;inset:76px 0 0;z-index:60;padding:36px 24px;background:var(--paper);color:var(--ink);display:flex;flex-direction:column;gap:8px}.mobile-nav a{padding:18px 0;border-bottom:1px solid var(--line);font-size:20px}.footer-meta{font-size:10px;letter-spacing:.08em;line-height:1.8}.credits{font-size:10px;opacity:.65;min-height:44px;display:inline-flex;align-items:center}dialog{border:0;padding:32px;max-width:min(560px,calc(100vw - 40px));background:var(--paper);color:var(--ink)}dialog::backdrop{background:rgba(0,0,0,.5)}@media(max-width:1000px){.wrap{width:calc(100% - 64px)}.nav-links{gap:18px}}@media(max-width:680px){html{scroll-padding-top:76px}.wrap{width:calc(100% - 40px)}.nav-links{display:none}.menu-toggle{display:block}.body-copy{font-size:15px}.button{min-height:52px;padding:14px 20px}.section-title{font-size:30px}.footer-meta{font-size:9px}}@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*,*::before,*::after{animation:none!important;transition:none!important}}

:root{--paper:#f4eee2;--ink:#493c30;--line:#d6cab8;--surface:#e8ddc9;--orange:#b4623e}body{background:var(--paper);color:var(--ink);font-family:"Helvetica Neue",Arial,"Hiragino Kaku Gothic ProN","Yu Gothic",sans-serif}.site-header{height:82px;position:relative;z-index:70}.header-inner{height:100%;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--line)}.brand{font-size:25px;letter-spacing:.18em;min-height:44px;display:flex;align-items:center}.hero{padding-top:22px;padding-bottom:26px}.hero-wordmark-row{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:30px}.hero-wordmark{font-family:Georgia,"Times New Roman",serif;letter-spacing:-.065em;font-weight:400;font-size:clamp(92px,12.7vw,183px);line-height:.95;margin-left:-.035em}.hero-region{font-size:10px;letter-spacing:.13em;padding-bottom:9px}.hero-grid{display:grid;grid-template-columns:1.2fr 1fr;gap:0;min-height:490px}.hero-photo{height:490px}.hero-copy{position:relative;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;padding:48px 64px;background:var(--surface)}.hero-copy>.eyebrow{font-size:9px;letter-spacing:.15em}.hero h1{font-size:51px;line-height:1.5;letter-spacing:.06em;margin:20px 0 18px}.hero h1>span{display:block}.hero-lead{font-size:12px;line-height:2.1;letter-spacing:.05em;white-space:pre-line}.hero .button{font-size:12px;margin-top:28px;min-width:220px}.hero-hours{margin-top:20px;font-size:10px;letter-spacing:.08em}.coffee-seal{position:absolute;right:24px;top:24px;border:1px solid var(--orange);color:var(--orange);height:77px;width:77px;border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;transform:rotate(-12deg);font-family:Georgia,serif;font-size:10px}.coffee-seal span:last-child{font-style:italic}.hero-foot{display:flex;align-items:center;justify-content:space-between;margin-top:18px}.hero-foot .eyebrow{font-size:9px;letter-spacing:.08em}.hero-foot>span:last-child{font-size:22px}.section{padding:100px 0}.section-heading{display:grid;grid-template-columns:1.4fr 1fr;gap:80px;align-items:end;margin-bottom:48px}.section-heading .eyebrow{margin-bottom:22px;color:var(--orange)}.section-heading>.body-copy{max-width:390px;justify-self:end}.coffee{padding-top:110px}.roast-tabs{display:flex;gap:0;width:390px;margin-bottom:32px;border-bottom:1px solid var(--line)}.roast-tab{width:130px;min-height:52px;border-bottom:2px solid transparent;font-size:13px;color:#8c7b67}.roast-tab.active{border-color:var(--ink);color:var(--ink)}.roast-panel{display:grid;grid-template-columns:1fr 1fr;gap:88px;align-items:start}.roast-photo{height:510px}.roast-copy{padding-top:6px}.roast-english{font-family:Georgia,serif;font-style:italic;color:var(--orange);font-size:17px;margin-bottom:16px}.roast-copy h3{font-size:39px;line-height:1.6;letter-spacing:.04em}.roast-copy>.body-copy{margin:18px 0 26px;max-width:460px;font-size:15px}.roast-details{margin:0}.roast-details>div{display:grid;grid-template-columns:110px 1fr;gap:10px;padding:12px 0;border-top:1px solid var(--line);align-items:start}.roast-details dt{font-size:10px;letter-spacing:.05em;line-height:1.8;color:#8c7b67}.roast-details dd{margin:0;font-size:12px;line-height:1.8}.bean-price{display:flex;justify-content:space-between;align-items:center;margin-top:22px;padding:20px 0;border-block:1px solid var(--line);font-size:11px}.bean-price>span:last-child{font-size:24px;font-family:Georgia,serif}.brew-button{display:flex;justify-content:space-between;align-items:center;width:100%;min-height:52px;font-size:11px;padding:16px 0}.brew-button>span:last-child{font-size:18px}.brew-detail{padding:18px 22px;background:var(--surface)}.brew-detail h4{font-size:12px;font-weight:500;margin:0 0 10px}.brew-detail .body-copy{font-size:15px}.menu-grid{display:grid;grid-template-columns:1fr 1fr;gap:88px;margin-top:88px;padding-top:38px;border-top:1px solid var(--line)}.menu-grid h3{font-size:29px;margin-bottom:20px}.menu-grid .body-copy{max-width:340px;font-size:15px}.menu-row{display:flex;justify-content:space-between;gap:24px;font-size:13px;padding:16px 0;border-bottom:1px solid var(--line)}.menu-row>span:last-child{font-family:Georgia,serif;font-size:17px}.menu-note{display:flex;justify-content:space-between;gap:18px;margin-top:16px;color:#8c7b67;font-size:9px;line-height:1.8}.story{background:#e8ddc9}.story-grid{display:grid;grid-template-columns:1fr 1fr;gap:88px;align-items:start}.story-copy{padding-top:14px}.story-copy>.eyebrow{margin-bottom:28px;color:var(--orange)}.story-copy h2>span{display:block}.story-copy>.body-copy{margin-top:26px;max-width:450px;font-size:15px}.story-detail{margin-top:32px;font-size:10px;line-height:2;letter-spacing:.04em;border-left:1px solid var(--orange);padding-left:16px}.story-photo{height:570px}.type-moment{display:flex;align-items:end;justify-content:space-between;gap:40px;padding-top:72px}.type-moment p{font-size:clamp(38px,5vw,72px);line-height:1.18;letter-spacing:-.025em;white-space:pre-line}.type-moment>span{font-size:11px;letter-spacing:.2em;padding-bottom:5px}.space-gallery{display:grid;grid-template-columns:1.4fr 1fr;gap:28px;height:480px}.space-small{height:100%}.closing{padding:80px 0 26px;background:var(--ink);color:var(--paper)}.visit-heading>.eyebrow{color:#c7af8b;margin-bottom:22px}.visit-grid{display:grid;grid-template-columns:1fr 1fr;gap:88px;margin-top:48px}.visit-info{display:grid;grid-template-columns:1fr 1fr;gap:30px 36px}.visit-info .eyebrow{font-size:9px;color:#c7af8b;margin-bottom:12px}.visit-value{font-size:13px;line-height:1.8}.visit-detail{font-size:11px;color:#c7bbab;margin-top:8px}.visit-info .button{font-size:11px;align-self:end}.visit-note{border-left:1px solid #73614e;padding-left:48px}.visit-note h3{font-size:23px;margin-bottom:20px}.visit-note .body-copy{font-size:15px;color:#d5c9b9;max-width:400px}.footer-tagline{font-size:35px;line-height:1.35;font-style:italic;margin-top:34px;color:#d6c6ad}.footer-bottom{border-top:1px solid #73614e;margin-top:70px;padding-top:28px;display:flex;justify-content:space-between;gap:32px;align-items:start}.footer-brand{display:flex;flex-direction:column;gap:12px}.footer-brand .serif{font-size:28px;letter-spacing:.14em}.footer-brand>span:last-child{font-family:Georgia,serif;letter-spacing:.04em;font-size:42px;line-height:1}.footer-meta{text-align:right;color:#c7bbab}
@media(min-width:1600px){.hero-grid{min-height:540px}.hero-photo{height:540px}}@media(max-width:1100px){.hero-copy{padding:42px 40px}.hero h1{font-size:44px}.coffee-seal{right:16px;top:16px;width:65px;height:65px;font-size:9px}.hero-copy>.eyebrow{max-width:190px}.section-heading{gap:40px}.roast-panel,.story-grid,.menu-grid,.visit-grid{gap:48px}.roast-photo{height:500px}.roast-copy h3{font-size:34px}.roast-details>div{grid-template-columns:86px 1fr}.menu-note{display:block}.menu-note>span{display:block;margin-top:4px}.story-photo{height:600px}.visit-info{gap:26px 24px}.visit-note{padding-left:32px}.visit-info .button{grid-column:1/-1;max-width:250px}.space-gallery{height:420px}}
@media(max-width:800px){.hero-wordmark{font-size:13vw}.hero-region{font-size:9px;letter-spacing:.08em}.hero-grid{grid-template-columns:1fr 1fr}.hero-photo{height:500px}.hero-copy{padding:42px 28px}.hero h1{font-size:38px}.coffee-seal{display:none}.hero-copy>.eyebrow{font-size:8px;max-width:none}.hero-lead{font-size:11px}.hero .button{min-width:0;width:100%;font-size:11px}.hero-hours{font-size:9px}.section-title{font-size:34px}.roast-panel{gap:32px}.roast-photo{height:470px}.roast-copy h3{font-size:30px}.roast-details>div{grid-template-columns:1fr;gap:3px;padding:9px 0}.roast-details dd{font-size:11px}.roast-copy>.body-copy{font-size:15px}.story-grid{gap:32px}.story-photo{height:650px}.story-copy>.body-copy{font-size:15px}.menu-grid{gap:32px}.visit-grid{gap:32px}.visit-info{grid-template-columns:1fr}.visit-note{padding-left:28px}.footer-tagline{font-size:30px}.space-gallery{height:360px;gap:20px}}
@media(max-width:680px){.site-header{height:76px}.brand{font-size:23px}.hero{padding-top:20px;padding-bottom:25px}.hero-wordmark-row{margin-bottom:22px}.hero-wordmark{font-size:17vw}.hero-region{font-size:8px;max-width:75px;line-height:1.7;padding-bottom:3px}.hero-grid{grid-template-columns:1fr;min-height:0}.hero-copy{order:-1;padding:26px 25px 30px;background:var(--surface)}.hero-photo{height:300px}.hero h1{font-size:clamp(33px,10vw,39px);line-height:1.4;margin:15px 0;display:block}.hero-copy>.eyebrow{font-size:9px}.hero-lead{font-size:11px;line-height:1.9}.hero .button{margin-top:22px;max-width:260px}.hero-hours{font-size:9px;margin-top:16px}.hero-foot{margin-top:14px}.hero-foot .eyebrow{font-size:8px}.section{padding:68px 0}.section-heading{grid-template-columns:1fr;gap:22px;margin-bottom:32px}.section-heading .eyebrow{font-size:10px;margin-bottom:16px}.section-heading>.body-copy{justify-self:start;max-width:340px;font-size:15px}.section-title{font-size:30px}.roast-tabs{width:100%;margin-bottom:24px}.roast-tab{flex:1;font-size:12px}.roast-panel{grid-template-columns:1fr;gap:28px}.roast-photo{height:360px}.roast-copy{padding:0}.roast-english{font-size:16px;margin-bottom:10px}.roast-copy h3{font-size:33px}.roast-copy>.body-copy{margin:16px 0 24px;font-size:15px}.roast-details>div{grid-template-columns:94px 1fr;padding:12px 0}.roast-details dd{font-size:11px}.bean-price{margin-top:18px;padding:18px 0}.menu-grid{grid-template-columns:1fr;gap:24px;margin-top:54px;padding-top:32px}.menu-grid h3{font-size:27px;margin-bottom:14px}.menu-grid .body-copy{font-size:15px}.menu-row{font-size:12px;padding:15px 0}.menu-note{font-size:9px}.story-grid{grid-template-columns:1fr;gap:34px}.story-copy{padding:0}.story-copy>.eyebrow{margin-bottom:22px;font-size:10px}.story-copy>.body-copy{margin-top:22px;font-size:15px}.story-photo{height:390px}.type-moment{padding-top:45px;gap:24px}.type-moment p{font-size:39px}.type-moment>span{font-size:9px}.space-gallery{grid-template-columns:1.2fr 1fr;gap:14px;height:300px}.closing{padding:64px 0 24px}.visit-heading>.eyebrow{font-size:10px;margin-bottom:18px}.visit-heading .section-title{font-size:29px;max-width:310px}.visit-grid{grid-template-columns:1fr;gap:38px;margin-top:32px}.visit-info{grid-template-columns:1fr 1fr;gap:28px 20px}.visit-value{font-size:12px}.visit-detail{font-size:10px}.visit-info .button{grid-column:1/-1;width:100%;max-width:none;font-size:12px}.visit-note{border:0;border-top:1px solid #73614e;padding:30px 0 0}.visit-note h3{font-size:23px;margin-bottom:18px}.footer-tagline{font-size:32px;margin-top:28px}.footer-bottom{display:block;margin-top:48px;padding-top:26px}.footer-brand .serif{font-size:25px}.footer-brand>span:last-child{font-size:38px}.footer-meta{text-align:left;margin-top:28px}}

@media(max-width:680px){body .body-copy{font-size:14px}body .hero-lead{font-size:13px}body .hero-aside .body-copy{font-size:14px}body .intro-copy .body-copy,body .roast-copy>.body-copy,body .story-copy>.body-copy,body .room-copy>.body-copy,body .stay-row .body-copy,body .approach-points .body-copy,body .booking-copy>.body-copy,body .section-heading>.body-copy,body .visit-note .body-copy,body .access-grid .body-copy,body .process-row .body-copy{font-size:14px}}
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
