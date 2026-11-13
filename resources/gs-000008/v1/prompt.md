# 澄間 — 鎌倉で、ほどける滞在。 — 編集欄つき・実装固定プロンプト v1

日本向けWebサイトを次の仕様・参照実装で制作してください。
このプロンプトはGENSEKI独自制作の gs-008 / v1 に対応します。
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
  "brand": "澄間",
  "wordmark": "SUMIKA",
  "theme": "#263e36",
  "description": "鎌倉の緑に包まれるブティックホテル、澄間。客室と過ごし方を選び、自分のペースで滞在するための場所。",
  "skip": "本文へ移動",
  "nav": {
    "rooms": "客室",
    "stay": "過ごし方",
    "access": "アクセス",
    "booking": "宿泊プランを見る",
    "menu": "メニュー"
  },
  "hero": {
    "label": "A stay between the sea and the trees.",
    "line1": "鎌倉で、",
    "line2": "ほどける滞在。",
    "lead": "緑を眺め、街を歩き、何もしない時間を。\nいつもと少し違う一日が、ここから始まります。",
    "location": "Kamakura, Japan",
    "scroll": "澄間での滞在へ",
    "roomNote": "一泊朝食付 / 2名1室"
  },
  "intro": {
    "label": "Stay at your own pace",
    "heading1": "旅の予定に、",
    "heading2": "余白をひとつ。",
    "body": "海へ向かう前に、庭を眺めてもう一杯。気になる路地があれば、少し遠回り。澄間は、鎌倉で過ごす時間そのものを楽しむための小さなホテルです。",
    "detail": "チェックイン 15:00 / チェックアウト 11:00",
    "word": "Less hurry,\nmore here."
  },
  "roomsSection": {
    "label": "Rooms & quiet corners",
    "heading": "窓の先から、客室を選ぶ。",
    "intro": "木のぬくもりと、やわらかな自然光。異なる眺めの客室から、今の気分に合う一室を。",
    "sizeLabel": "Room size",
    "capacityLabel": "Guests",
    "bedLabel": "Bed",
    "priceLabel": "1泊・2名 / 朝食付・税込",
    "amenitiesLabel": "客室に備わるもの",
    "action": "この客室の滞在を計画する"
  },
  "rooms": [
    {
      "name": "山庭の客室",
      "english": "Garden room",
      "size": "38㎡",
      "capacity": "1–2名",
      "bed": "セミダブル × 2",
      "description": "庭の緑を近くに感じる、落ち着いた客室。窓辺の椅子に腰を下ろすと、時間の流れも少しゆっくりに。",
      "price": 34000,
      "amenities": "庭の眺め / 独立バス / コーヒーセット / Wi-Fi",
      "image": "garden",
      "maxGuests": 2
    },
    {
      "name": "木立の客室",
      "english": "Woodland room",
      "size": "46㎡",
      "capacity": "1–3名",
      "bed": "キング × 1 / エキストラベッド可",
      "description": "木立を望む広い窓と、読書のためのデイベッド。朝は自然の光で目を覚まし、静かな部屋で一日を始められます。",
      "price": 42000,
      "amenities": "木立の眺め / デイベッド / 独立バス / Wi-Fi",
      "image": "woodland",
      "maxGuests": 3
    },
    {
      "name": "空庭のスイート",
      "english": "Terrace suite",
      "size": "58㎡ + テラス",
      "capacity": "1–3名",
      "bed": "キング × 1 / エキストラベッド可",
      "description": "空へひらくテラスを備えたスイート。風を感じながら朝食をとり、夕方には空の色が変わるのを眺める滞在を。",
      "price": 48000,
      "amenities": "専用テラス / リビング / 独立バス / Wi-Fi",
      "image": "terrace",
      "maxGuests": 3
    }
  ],
  "stay": {
    "label": "A day at SUMIKA",
    "heading": "予定を、詰め込まない一日。",
    "intro": "ホテルの中も、街の中も。気になる場所で足を止めながら、自分だけの鎌倉を見つけてください。",
    "morningTime": "08:00",
    "morningTitle": "庭を眺めて、朝ごはん。",
    "morningBody": "パンと季節のスープ、淹れたてのコーヒー。朝食は7:30から10:00まで、ご自身のペースで。",
    "dayTime": "11:00",
    "dayTitle": "路地の先へ、散歩に。",
    "dayBody": "海へ続く道や、緑の多い散歩道へ。フロントでは、歩いて巡れる周辺の見どころをご案内します。",
    "eveningTime": "17:00",
    "eveningTitle": "部屋で過ごす、夕暮れ。",
    "eveningBody": "旅先で買った本を開いたり、窓の外をただ眺めたり。何もしない時間も、滞在の楽しみのひとつです。"
  },
  "booking": {
    "label": "Plan your stay",
    "heading": "次の休日を、澄間で。",
    "intro": "日程と客室を選んで、ご滞在の目安をご確認ください。",
    "arrivalLabel": "チェックイン",
    "departureLabel": "チェックアウト",
    "guestsLabel": "宿泊人数",
    "roomLabel": "客室タイプ",
    "guest1": "1名",
    "guest2": "2名",
    "guest3": "3名",
    "submit": "宿泊料金の目安を見る",
    "note": "料金は1室あたり・税込。表示額はコンセプト上の目安で、実際の空室照会や予約は行いません。",
    "defaultArrival": "2026-12-10",
    "defaultDeparture": "2026-12-11",
    "extraGuestPrice": 6000,
    "errorDates": "チェックアウト日は、チェックイン日より後の日付を選んでください。",
    "errorPast": "チェックイン日は、本日以降の日付を選んでください。",
    "errorCapacity": "選択した客室の定員を超えています。客室か人数を変更してください。",
    "errorNights": "宿泊日数は1〜30泊の範囲で選んでください。",
    "resultTitle": "ご滞在の目安",
    "resultRoom": "客室",
    "resultDates": "ご宿泊日",
    "resultGuests": "人数・泊数",
    "resultPrice": "料金の目安",
    "resultBreakfast": "朝食付 / 税込",
    "resultNote": "料金計算の体験用画面です。予約・空室照会・決済は行われません。入力した内容は外部へ送信・保存しません。",
    "close": "閉じる",
    "guestUnit": "名",
    "nightUnit": "泊"
  },
  "access": {
    "label": "Location",
    "heading": "海と緑のあいだ、鎌倉へ。",
    "address": "神奈川県鎌倉市 長谷",
    "description": "江ノ電のある街並みを抜け、緑の気配が深まる方へ。周辺の散策も、滞在の時間に。",
    "checkin": "Check-in 15:00 / Check-out 11:00",
    "map": "周辺の地図を見る"
  },
  "footer": {
    "copyright": "© 2026 SUMIKA",
    "concept": "GENSEKI concept / 架空のブランド・外部送信なし",
    "credits": "Photographs via Unsplash",
    "signature": "A little room for yourself."
  },
  "assets": {
    "hero": {
      "url": "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=2000&q=85",
      "alt": "自然光の入る静かなホテルの客室",
      "position": "50% 55%"
    },
    "garden": {
      "url": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1500&q=85",
      "alt": "落ち着いた木の色で整えたホテルの客室",
      "position": "50% 50%"
    },
    "woodland": {
      "url": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1500&q=85",
      "alt": "明るい大きな窓とベッドのあるホテルの客室",
      "position": "50% 50%"
    },
    "terrace": {
      "url": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1500&q=85",
      "alt": "緑の景色へひらく滞在施設のテラス",
      "position": "50% 50%"
    },
    "morning": {
      "url": "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1400&q=85",
      "alt": "緑の木々に包まれた滞在の風景",
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
  "genre_id": "G08",
  "seed_id": "G08-01",
  "title": "澄間 — 鎌倉で、ほどける滞在。",
  "kind": "place",
  "category": "ブティックホテル",
  "primary_action": "宿泊プランを見る",
  "direction": "深い緑と温かな白。大きな客室写真を背景とするヒーロー、明朝体の和文と英文イタリック、開いた客室紹介と滞在見積。",
  "sections": [
    {
      "id": "top",
      "purpose": "ホテルの滞在イメージと宿泊導線を伝える",
      "layout": "1画面の全幅客室写真、左下寄りの明朝体見出しとCTA"
    },
    {
      "id": "intro",
      "purpose": "自分のペースで滞在する考え方を読む",
      "layout": "見出しと本文の2列、英文タイポグラフィー"
    },
    {
      "id": "rooms",
      "purpose": "眺めや広さから客室を比較する",
      "layout": "3客室タブ。左写真と右の設備・価格一覧"
    },
    {
      "id": "stay",
      "purpose": "ホテルと街での過ごし方を知る",
      "layout": "緑の写真と3時刻の過ごし方"
    },
    {
      "id": "booking",
      "purpose": "選択した日程と人数から料金の目安を計算する",
      "layout": "左見出し・右4フィールドの宿泊フォーム"
    },
    {
      "id": "access",
      "purpose": "所在地、チェックイン情報を確認する",
      "layout": "深緑の地、大きなSUMIKAと地区検索の地図リンク"
    }
  ],
  "tokens": {
    "paper": "#f6f4ec",
    "ink": "#263e36",
    "surface": "#e8ece1",
    "muted": "#777e72",
    "max_width": "1280px",
    "desktop_gutter": "56px",
    "mobile_gutter": "20px",
    "display_font": "Georgia, Yu Mincho, Hiragino Mincho ProN, serif",
    "body_font": "Helvetica Neue, Arial, Hiragino Kaku Gothic ProN, Yu Gothic, sans-serif"
  },
  "interactions": [
    "3客室のtab切替で写真・客室名・広さ・定員・設備・価格を更新",
    "tabは左右矢印/Home/Endに対応",
    "選択した客室を宿泊フォームへ反映",
    "日付の前後・過去日・最大30泊・定員を検証して料金の目安をdialog表示",
    "3人目は1泊6,000円を加算し、日付差から泊数を計算",
    "モバイルメニュー、写真hover、ボタンpress"
  ],
  "mobile": "680px以下は1列。ヒーローはclamp(36px,10.7vw,44px)明朝体で全幅写真上。左右20px余白に対し、320px幅で7文字×36px×1.08=272.16pxとなり2行の見出しを維持。客室写真330px、フォームは日付と人数/客室を各2列。reduced-motion対応。",
  "editable_notes": "content.jsの文字・assets・客室価格を変更。roomsの3項目と価格数値priceを維持。画面表示・概要・見積価格はpriceから生成する。宿泊見積はブラウザ内計算のみで予約/空室/決済接続なし、入力を送信保存しない。デモの将来初期日付は2026-12-10/11で、経過後は閲覧日の7日後へ更新。外部参照写真は実在ホテルの提供素材とは主張しない。"
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
<title>澄間 — 鎌倉で、 ほどける滞在。</title>
<meta name="description" content="鎌倉の緑に包まれるブティックホテル、澄間。客室と過ごし方を選び、自分のペースで滞在するための場所。">
<meta name="page-type" content="place"><meta name="site-kind" content="other"><meta name="page-kind" content="place">
<meta name="theme-color" content="#263e36"><meta property="og:title" content="澄間 — 鎌倉で、 ほどける滞在。"><meta property="og:description" content="鎌倉の緑に包まれるブティックホテル、澄間。客室と過ごし方を選び、自分のペースで滞在するための場所。"><meta property="og:type" content="website">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' fill='%23263e36'/%3E%3Cpath d='M13 13h22v22H13z' fill='none' stroke='%23f7f4ec' stroke-width='2'/%3E%3C/svg%3E">
<link rel="stylesheet" href="style.css"><meta property="og:image" content="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&amp;fit=crop&amp;w=2000&amp;q=85"><meta name="twitter:card" content="summary_large_image"></head><body>
<a class="skip-link" data-content="skip" href="#main">本文へ移動</a>

<header class="site-header"><div class="wrap header-inner"><a class="brand" href="#top" aria-label="澄間 トップ"><span class="brand-jp serif" data-content="brand" >澄間</span><span class="brand-en" data-content="wordmark" >SUMIKA</span></a><nav class="nav-links" aria-label="メインナビゲーション"><a class="" data-content="nav.rooms" href="#rooms">客室</a><a class="" data-content="nav.stay" href="#stay">過ごし方</a><a class="" data-content="nav.access" href="#access">アクセス</a><a class="nav-booking" href="#booking"><span class="" data-content="nav.booking" >宿泊プランを見る</span><span aria-hidden="true">↗</span></a></nav><button class="menu-toggle" data-menu-toggle aria-expanded="false" aria-controls="mobile-menu"><span class="" data-content="nav.menu" >メニュー</span></button></div></header><nav class="mobile-nav" id="mobile-menu" data-menu hidden aria-label="モバイルナビゲーション"><a class="" data-content="nav.rooms" href="#rooms">客室</a><a class="" data-content="nav.stay" href="#stay">過ごし方</a><a class="" data-content="nav.access" href="#access">アクセス</a><a class="" data-content="nav.booking" href="#booking">宿泊プランを見る</a></nav>
<main id="main"><section class="hero" id="top" data-enter><div class="hero-background"><img class="" data-image="assets.hero" src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&amp;fit=crop&amp;w=2000&amp;q=85" alt="自然光の入る静かなホテルの客室" style="object-position:50% 55%" loading="eager" decoding="async"></div><div class="hero-shade"></div><div class="wrap hero-inner"><div class="hero-copy"><p class="eyebrow" data-content="hero.label" >A stay between the sea and the trees.</p><h1 class="serif"><span class="" data-content="hero.line1" >鎌倉で、</span><span class="" data-content="hero.line2" >ほどける滞在。</span></h1><p class="hero-lead" data-content="hero.lead" >緑を眺め、街を歩き、何もしない時間を。
いつもと少し違う一日が、ここから始まります。</p><a class="button" href="#booking"><span class="" data-content="nav.booking" >宿泊プランを見る</span><span class="arrow" aria-hidden="true">↗</span></a></div><div class="hero-bottom"><span class="eyebrow" data-content="hero.location" >Kamakura, Japan</span><span class="hero-note"><span data-content="hero.roomNote">一泊朝食付 / 2名1室</span> <span id="hero-room-price">¥34,000〜</span></span><a href="#intro" class="hero-scroll"><span class="" data-content="hero.scroll" >澄間での滞在へ</span><span aria-hidden="true">↓</span></a></div></div></section>
<section class="intro section" id="intro"><div class="wrap intro-grid"><div><p class="eyebrow" data-content="intro.label" >Stay at your own pace</p><h2 class="serif section-title"><span class="" data-content="intro.heading1" >旅の予定に、</span><span class="" data-content="intro.heading2" >余白をひとつ。</span></h2></div><div class="intro-copy"><p class="body-copy" data-content="intro.body" >海へ向かう前に、庭を眺めてもう一杯。気になる路地があれば、少し遠回り。澄間は、鎌倉で過ごす時間そのものを楽しむための小さなホテルです。</p><p class="intro-detail" data-content="intro.detail" >チェックイン 15:00 / チェックアウト 11:00</p><p class="serif intro-word" data-content="intro.word" >Less hurry,
more here.</p></div></div></section>
<section class="rooms section" id="rooms"><div class="wrap"><div class="section-heading"><div><p class="eyebrow" data-content="roomsSection.label" >Rooms &amp; quiet corners</p><h2 class="serif section-title" data-content="roomsSection.heading" >窓の先から、客室を選ぶ。</h2></div><p class="body-copy" data-content="roomsSection.intro" >木のぬくもりと、やわらかな自然光。異なる眺めの客室から、今の気分に合う一室を。</p></div><div class="room-tabs" role="tablist" aria-label="客室タイプを選ぶ"><button class="room-tab active" id="room-tab-0" role="tab" aria-selected="true" aria-controls="room-panel" tabindex="0" data-room="0"><span class="" data-content="rooms.0.name" >山庭の客室</span></button><button class="room-tab " id="room-tab-1" role="tab" aria-selected="false" aria-controls="room-panel" tabindex="-1" data-room="1"><span class="" data-content="rooms.1.name" >木立の客室</span></button><button class="room-tab " id="room-tab-2" role="tab" aria-selected="false" aria-controls="room-panel" tabindex="-1" data-room="2"><span class="" data-content="rooms.2.name" >空庭のスイート</span></button></div><div class="room-panel" id="room-panel" role="tabpanel" aria-labelledby="room-tab-0" tabindex="0"><div class="room-photo photo-frame"><img class="" data-image="assets.garden" src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&amp;fit=crop&amp;w=1500&amp;q=85" alt="落ち着いた木の色で整えたホテルの客室" style="object-position:50% 50%" loading="lazy" decoding="async"></div><div class="room-copy"><p class="room-english" id="room-english"><span class="" data-content="rooms.0.english" >Garden room</span></p><h3 class="serif" id="room-name"><span class="" data-content="rooms.0.name" >山庭の客室</span></h3><p class="body-copy" id="room-description"><span class="" data-content="rooms.0.description" >庭の緑を近くに感じる、落ち着いた客室。窓辺の椅子に腰を下ろすと、時間の流れも少しゆっくりに。</span></p><dl class="room-details"><div><dt class="" data-content="roomsSection.sizeLabel" >Room size</dt><dd id="room-size"><span class="" data-content="rooms.0.size" >38㎡</span></dd></div><div><dt class="" data-content="roomsSection.capacityLabel" >Guests</dt><dd id="room-capacity"><span class="" data-content="rooms.0.capacity" >1–2名</span></dd></div><div><dt class="" data-content="roomsSection.bedLabel" >Bed</dt><dd id="room-bed"><span class="" data-content="rooms.0.bed" >セミダブル × 2</span></dd></div></dl><div class="room-amenities"><p class="eyebrow" data-content="roomsSection.amenitiesLabel" >客室に備わるもの</p><p id="room-amenities"><span class="" data-content="rooms.0.amenities" >庭の眺め / 独立バス / コーヒーセット / Wi-Fi</span></p></div><div class="room-price"><span class="" data-content="roomsSection.priceLabel" >1泊・2名 / 朝食付・税込</span><span id="room-price"><span class="" data-content="rooms.0.price" data-format="currency" data-price-suffix="〜" >￥34,000〜</span></span></div><a class="button button-green" href="#booking" id="plan-selected-room"><span class="" data-content="roomsSection.action" >この客室の滞在を計画する</span><span class="arrow" aria-hidden="true">↗</span></a></div></div></div></section>
<section class="stay section" id="stay"><div class="wrap"><div class="section-heading"><div><p class="eyebrow" data-content="stay.label" >A day at SUMIKA</p><h2 class="serif section-title" data-content="stay.heading" >予定を、詰め込まない一日。</h2></div><p class="body-copy" data-content="stay.intro" >ホテルの中も、街の中も。気になる場所で足を止めながら、自分だけの鎌倉を見つけてください。</p></div><div class="stay-grid"><div class="stay-photo photo-frame"><img class="" data-image="assets.morning" src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&amp;fit=crop&amp;w=1400&amp;q=85" alt="緑の木々に包まれた滞在の風景" style="object-position:50% 50%" loading="lazy" decoding="async"></div><div class="stay-timeline"><article class="stay-row"><span class="stay-time serif" data-content="stay.morningTime" >08:00</span><div><h3 class="serif" data-content="stay.morningTitle" >庭を眺めて、朝ごはん。</h3><p class="body-copy" data-content="stay.morningBody" >パンと季節のスープ、淹れたてのコーヒー。朝食は7:30から10:00まで、ご自身のペースで。</p></div></article><article class="stay-row"><span class="stay-time serif" data-content="stay.dayTime" >11:00</span><div><h3 class="serif" data-content="stay.dayTitle" >路地の先へ、散歩に。</h3><p class="body-copy" data-content="stay.dayBody" >海へ続く道や、緑の多い散歩道へ。フロントでは、歩いて巡れる周辺の見どころをご案内します。</p></div></article><article class="stay-row"><span class="stay-time serif" data-content="stay.eveningTime" >17:00</span><div><h3 class="serif" data-content="stay.eveningTitle" >部屋で過ごす、夕暮れ。</h3><p class="body-copy" data-content="stay.eveningBody" >旅先で買った本を開いたり、窓の外をただ眺めたり。何もしない時間も、滞在の楽しみのひとつです。</p></div></article></div></div></div></section>
<section class="booking section" id="booking"><div class="wrap booking-grid"><div class="booking-copy"><p class="eyebrow" data-content="booking.label" >Plan your stay</p><h2 class="serif section-title" data-content="booking.heading" >次の休日を、澄間で。</h2><p class="body-copy" data-content="booking.intro" >日程と客室を選んで、ご滞在の目安をご確認ください。</p></div><form id="booking-form" class="booking-form"><div class="date-fields"><label for="arrival"><span class="" data-content="booking.arrivalLabel" >チェックイン</span><input type="date" id="arrival" name="arrival" value="2026-12-10" required></label><label for="departure"><span class="" data-content="booking.departureLabel" >チェックアウト</span><input type="date" id="departure" name="departure" value="2026-12-11" required></label></div><div class="select-fields"><label for="guests"><span class="" data-content="booking.guestsLabel" >宿泊人数</span><select id="guests" name="guests"><option value="1">1名</option><option value="2" selected>2名</option><option value="3">3名</option></select></label><label for="booking-room"><span class="" data-content="booking.roomLabel" >客室タイプ</span><select id="booking-room" name="room"><option value="0">山庭の客室</option><option value="1">木立の客室</option><option value="2">空庭のスイート</option></select></label></div><p id="booking-error" class="form-error" aria-live="polite" hidden></p><button class="button button-green" type="submit"><span class="" data-content="booking.submit" >宿泊料金の目安を見る</span><span class="arrow" aria-hidden="true">↗</span></button><p class="booking-note" data-content="booking.note" >料金は1室あたり・税込。表示額はコンセプト上の目安で、実際の空室照会や予約は行いません。</p></form></div></section></main>
<footer class="closing" id="access"><div class="wrap"><div class="access-grid"><div><p class="eyebrow" data-content="access.label" >Location</p><h2 class="serif section-title" data-content="access.heading" >海と緑のあいだ、鎌倉へ。</h2><p class="body-copy" data-content="access.description" >江ノ電のある街並みを抜け、緑の気配が深まる方へ。周辺の散策も、滞在の時間に。</p></div><div class="access-details"><p class="access-address serif" data-content="access.address" >神奈川県鎌倉市 長谷</p><p class="access-checkin" data-content="access.checkin" >Check-in 15:00 / Check-out 11:00</p><a class="button" data-map="access.address" href="https://www.openstreetmap.org/search?query=%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E9%8E%8C%E5%80%89%E5%B8%82%20%E9%95%B7%E8%B0%B7" target="_blank" rel="noopener"><span class="" data-content="access.map" >周辺の地図を見る</span><span class="arrow" aria-hidden="true">↗</span></a></div></div><div class="footer-signature"><span class="serif" data-content="wordmark" >SUMIKA</span><p class="serif" data-content="footer.signature" >A little room for yourself.</p></div><div class="footer-bottom"><div class="footer-brand"><span class="serif" data-content="brand" >澄間</span><span class="" data-content="wordmark" >SUMIKA</span></div><div class="footer-meta"><p class="" data-content="footer.copyright" >© 2026 SUMIKA</p><p class="" data-content="footer.concept" >GENSEKI concept / 架空のブランド・外部送信なし</p><a class="credits" href="https://unsplash.com/license" target="_blank" rel="noopener"><span class="" data-content="footer.credits" >Photographs via Unsplash</span></a></div></div></div></footer>
<dialog id="booking-dialog" aria-labelledby="booking-dialog-title"><form method="dialog"><button class="dialog-close" aria-label="閉じる">×</button></form><p class="eyebrow" data-content="booking.label" >Plan your stay</p><h2 class="serif" data-content="booking.resultTitle" id="booking-dialog-title">ご滞在の目安</h2><dl class="estimate"><div><dt class="" data-content="booking.resultRoom" >客室</dt><dd id="estimate-room"></dd></div><div><dt class="" data-content="booking.resultDates" >ご宿泊日</dt><dd id="estimate-dates"></dd></div><div><dt class="" data-content="booking.resultGuests" >人数・泊数</dt><dd id="estimate-guests"></dd></div><div class="estimate-total"><dt class="" data-content="booking.resultPrice" >料金の目安</dt><dd id="estimate-price"></dd></div></dl><p class="estimate-breakfast" data-content="booking.resultBreakfast" >朝食付 / 税込</p><p class="body-copy estimate-note" data-content="booking.resultNote" >料金計算の体験用画面です。予約・空室照会・決済は行われません。入力した内容は外部へ送信・保存しません。</p><form method="dialog"><button class="button button-green"><span class="" data-content="booking.close" >閉じる</span></button></form></dialog>
<script src="content.js"></script><script src="genseki.js"></script><script src="app.js"></script></body></html>
```

### style.css

```css file=style.css
*{box-sizing:border-box}html{scroll-padding-top:84px;scroll-behavior:smooth}body{margin:0;-webkit-font-smoothing:antialiased}button,input,select{font:inherit}button,a{-webkit-tap-highlight-color:transparent}button{cursor:pointer}a{color:inherit;text-decoration:none}button,a,input,select{touch-action:manipulation}button{color:inherit}img{display:block;width:100%;height:100%;object-fit:cover}h1,h2,h3,p,figure{margin:0}button:focus-visible,a:focus-visible,input:focus-visible,select:focus-visible{outline:2px solid currentColor;outline-offset:5px}.skip-link{position:fixed;top:10px;left:20px;z-index:1000;transform:translateY(-150%);padding:12px 18px;background:#fff;color:#111}.skip-link:focus{transform:translateY(0)}[hidden]{display:none!important}.wrap{width:min(1280px,calc(100% - 112px));margin-inline:auto}.serif{font-family:Georgia,"Yu Mincho","Hiragino Mincho ProN",serif;font-weight:400}button{border:0;background:none}.arrow{font-family:Arial,sans-serif;font-weight:400}.button{display:inline-flex;min-height:52px;align-items:center;justify-content:space-between;gap:32px;padding:14px 24px;border:1px solid currentColor;transition:transform .2s,background .2s,color .2s}.button:hover{transform:translateY(-2px)}.button:active{transform:translateY(1px)}.button .arrow{transition:transform .2s}.button:hover .arrow{transform:translateX(4px)}.photo-frame{overflow:hidden}.photo-frame img{transition:transform .65s cubic-bezier(.22,.61,.36,1)}.photo-frame:hover img{transform:scale(1.025)}.eyebrow{font-size:11px;letter-spacing:.16em;line-height:1.7}.section-index{font-family:Georgia,serif;font-size:14px}.section-title{font-size:clamp(30px,3.4vw,48px);line-height:1.5;letter-spacing:.035em}.body-copy{font-size:15px;line-height:2.1;letter-spacing:.045em}.nav-links{display:flex;align-items:center;gap:28px;font-size:12px}.nav-links a{min-height:44px;display:flex;align-items:center;position:relative}.nav-links a:after{content:"";height:1px;background:currentColor;position:absolute;bottom:9px;left:0;width:100%;transform:scaleX(0);transform-origin:left;transition:transform .2s}.nav-links a:hover:after{transform:scaleX(1)}.menu-toggle{display:none;min-height:44px;min-width:44px;border:1px solid currentColor;font-size:11px}.mobile-nav{position:fixed;inset:76px 0 0;z-index:60;padding:36px 24px;background:var(--paper);color:var(--ink);display:flex;flex-direction:column;gap:8px}.mobile-nav a{padding:18px 0;border-bottom:1px solid var(--line);font-size:20px}.footer-meta{font-size:10px;letter-spacing:.08em;line-height:1.8}.credits{font-size:10px;opacity:.65;min-height:44px;display:inline-flex;align-items:center}dialog{border:0;padding:32px;max-width:min(560px,calc(100vw - 40px));background:var(--paper);color:var(--ink)}dialog::backdrop{background:rgba(0,0,0,.5)}@media(max-width:1000px){.wrap{width:calc(100% - 64px)}.nav-links{gap:18px}}@media(max-width:680px){html{scroll-padding-top:76px}.wrap{width:calc(100% - 40px)}.nav-links{display:none}.menu-toggle{display:block}.body-copy{font-size:15px}.button{min-height:52px;padding:14px 20px}.section-title{font-size:30px}.footer-meta{font-size:9px}}@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*,*::before,*::after{animation:none!important;transition:none!important}}

:root{--paper:#f6f4ec;--ink:#263e36;--line:#d0d3c7;--muted:#777e72;--surface:#e8ece1;--gold:#c4b58b}body{background:var(--paper);color:var(--ink);font-family:"Helvetica Neue",Arial,"Hiragino Kaku Gothic ProN","Yu Gothic",sans-serif}.site-header{position:absolute;inset:0 0 auto;height:94px;color:var(--paper);z-index:70}.header-inner{height:100%;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,.28)}.brand{display:flex;align-items:center;gap:18px;min-height:44px}.brand-jp{font-size:31px;letter-spacing:.22em}.brand-en{font-size:10px;letter-spacing:.2em}.nav-links{gap:30px}.nav-booking{border:1px solid rgba(255,255,255,.6);padding:0 18px;gap:24px;font-size:11px}.nav-booking:after{display:none}.hero{position:relative;height:100svh;min-height:760px;color:var(--paper);background:#344d42}.hero-background,.hero-shade{position:absolute;inset:0}.hero-background img{object-position:50% 55%;filter:brightness(.78)}.hero-shade{background:linear-gradient(90deg,rgba(11,27,18,.52) 0%,rgba(14,26,19,.12) 65%),linear-gradient(0deg,rgba(13,28,20,.35),transparent 35%)}.hero-inner{position:relative;height:100%;display:flex;flex-direction:column;justify-content:space-between;padding-top:190px;padding-bottom:34px}.hero-copy>.eyebrow{font-size:10px;letter-spacing:.14em}.hero h1{font-size:clamp(58px,6vw,88px);line-height:1.45;letter-spacing:.1em;margin:25px 0}.hero h1>span{display:block}.hero-lead{font-size:13px;line-height:2.2;letter-spacing:.07em;white-space:pre-line}.hero .button{margin-top:30px;min-width:250px;font-size:12px;background:rgba(246,244,236,.08);border-color:rgba(255,255,255,.6)}.hero .button:hover{background:var(--paper);color:var(--ink)}.hero-bottom{display:flex;align-items:center;gap:40px;font-size:10px}.hero-bottom .eyebrow{font-size:10px}.hero-note{font-size:10px;letter-spacing:.06em}.hero-scroll{margin-left:auto;display:flex;align-items:center;gap:28px;min-height:44px;font-size:10px}.hero-scroll>span:last-child{font-size:24px}.section{padding:108px 0}.intro-grid{display:grid;grid-template-columns:1fr 1fr;gap:110px}.intro .eyebrow{font-size:10px;color:var(--muted);margin-bottom:32px}.intro h2>span{display:block}.intro h2{font-size:45px;line-height:1.75;letter-spacing:.04em}.intro-copy .body-copy{font-size:15px;max-width:490px}.intro-detail{font-size:10px;color:var(--muted);margin-top:24px;letter-spacing:.05em}.intro-word{font-size:58px;line-height:1.15;margin-top:35px;white-space:pre-line;color:#9ba58c;font-style:italic;letter-spacing:-.03em}.rooms{background:var(--surface)}.section-heading{display:grid;grid-template-columns:1.4fr 1fr;gap:80px;align-items:end;margin-bottom:45px}.section-heading .eyebrow{font-size:10px;color:var(--muted);margin-bottom:22px}.section-heading>.body-copy{font-size:15px;max-width:390px;justify-self:end}.room-tabs{display:flex;width:570px;border-bottom:1px solid #bac5b3;margin-bottom:34px}.room-tab{width:190px;min-height:54px;font-size:13px;border-bottom:2px solid transparent;color:var(--muted)}.room-tab.active{border-color:var(--ink);color:var(--ink)}.room-panel{display:grid;grid-template-columns:1.25fr 1fr;gap:64px;align-items:stretch}.room-photo{min-height:590px}.room-copy{padding-top:7px}.room-english{font-size:12px;font-family:Georgia,serif;font-style:italic;color:var(--muted);margin-bottom:10px}.room-copy h3{font-size:34px;line-height:1.5;letter-spacing:.04em}.room-copy>.body-copy{font-size:15px;line-height:2.1;margin:20px 0 24px}.room-details{margin:0}.room-details>div{padding:12px 0;border-top:1px solid #c5cebc;display:grid;grid-template-columns:90px 1fr;gap:16px;align-items:start}.room-details dt{font-size:10px;color:var(--muted);line-height:1.8}.room-details dd{margin:0;font-size:12px;line-height:1.8}.room-amenities{margin-top:20px}.room-amenities .eyebrow{font-size:9px;color:var(--muted);letter-spacing:.04em;margin-bottom:9px}.room-amenities>p:last-child{font-size:10px;line-height:2}.room-price{display:flex;align-items:center;justify-content:space-between;gap:18px;border-top:1px solid #c5cebc;padding-top:24px;margin-top:22px}.room-price>span:first-child{font-size:9px;line-height:1.8}.room-price>span:last-child{font-family:Georgia,serif;font-size:29px;white-space:nowrap}.button-green{background:var(--ink);color:var(--paper);border-color:var(--ink)}.room-copy .button{margin-top:25px;width:100%;font-size:11px}.stay-grid{display:grid;grid-template-columns:1.1fr 1fr;gap:80px}.stay-photo{height:575px}.stay-timeline{display:flex;flex-direction:column;justify-content:space-between}.stay-row{display:grid;grid-template-columns:65px 1fr;gap:24px;padding:28px 0;border-top:1px solid var(--line)}.stay-row:first-child{padding-top:18px}.stay-time{font-size:24px;line-height:1.5}.stay-row h3{font-size:22px;line-height:1.6;margin-bottom:16px}.stay-row .body-copy{font-size:15px;max-width:390px}.booking{background:#e6e8dd}.booking-grid{display:grid;grid-template-columns:1fr 1fr;gap:100px;align-items:start}.booking-copy>.eyebrow{font-size:10px;color:var(--muted);margin-bottom:24px}.booking-copy>.body-copy{font-size:15px;max-width:390px;margin-top:26px}.booking-form{padding-top:3px}.date-fields,.select-fields{display:grid;grid-template-columns:1fr 1fr;gap:20px}.select-fields{margin-top:24px}.booking-form label{font-size:11px;display:flex;flex-direction:column;gap:12px;min-width:0}.booking-form input,.booking-form select{display:block;width:100%;min-width:0;background:transparent;color:var(--ink);border:0;border-bottom:1px solid #a7b09d;border-radius:0;min-height:48px;padding:8px 2px;font-size:15px}.booking-form .button{margin-top:32px;width:100%;font-size:12px}.booking-note{font-size:10px;line-height:1.9;color:var(--muted);margin-top:18px}.form-error{color:#8f382c;font-size:12px;line-height:1.8;margin-top:18px}.closing{background:var(--ink);color:var(--paper);padding:86px 0 28px}.access-grid{display:grid;grid-template-columns:1fr 1fr;gap:100px}.access-grid .eyebrow{font-size:10px;color:#b4c1ae;margin-bottom:24px}.access-grid h2{font-size:35px}.access-grid .body-copy{margin-top:24px;font-size:15px;max-width:440px;color:#c1cbb9}.access-details{padding-top:48px}.access-address{font-size:26px;letter-spacing:.06em}.access-checkin{font-size:10px;color:#c1cbb9;letter-spacing:.05em;margin-top:20px}.access-details .button{margin-top:28px;font-size:11px;min-width:270px}.footer-signature{display:flex;justify-content:space-between;align-items:end;gap:50px;padding:74px 0 36px}.footer-signature>span{font-size:clamp(70px,12vw,170px);line-height:.9;letter-spacing:-.05em;opacity:.85}.footer-signature>p{font-size:25px;font-style:italic;color:#b4c1ae;padding-bottom:5px}.footer-bottom{display:flex;justify-content:space-between;gap:40px;border-top:1px solid #63776a;padding-top:28px}.footer-brand{display:flex;align-items:center;gap:18px;align-self:start}.footer-brand .serif{font-size:28px;letter-spacing:.2em}.footer-brand>span:last-child{font-size:10px;letter-spacing:.15em}.footer-meta{text-align:right;color:#b4c1ae}#booking-dialog{width:520px;padding:44px}#booking-dialog h2{font-size:30px;line-height:1.6;margin:18px 0 28px}.dialog-close{position:absolute;right:12px;top:10px;width:44px;height:44px;font-size:28px}.estimate{margin:0}.estimate>div{display:grid;grid-template-columns:110px 1fr;gap:18px;padding:15px 0;border-top:1px solid var(--line);font-size:12px;line-height:1.8}.estimate dt{color:var(--muted)}.estimate dd{margin:0}.estimate-total dd{font-family:Georgia,serif;font-size:30px;line-height:1.1}.estimate-breakfast{font-size:10px;text-align:right;color:var(--muted);margin:6px 0 20px}.estimate-note{font-size:11px;margin:22px 0 28px;color:var(--muted)}#booking-dialog .button{width:100%;font-size:12px}
@media(max-width:1100px){.hero-inner{padding-top:175px}.hero h1{font-size:70px}.intro-grid,.booking-grid,.access-grid{gap:60px}.intro h2{font-size:39px}.room-panel{grid-template-columns:1.15fr 1fr;gap:40px}.room-photo{min-height:610px}.room-details>div{grid-template-columns:75px 1fr;gap:10px}.stay-grid{gap:45px}.stay-row{grid-template-columns:55px 1fr;gap:18px}.stay-time{font-size:21px}.stay-row h3{font-size:21px}.stay-photo{height:620px}.footer-signature>p{font-size:23px}}
@media(max-width:800px){.nav-links{gap:18px}.nav-booking{padding:0 12px;gap:16px}.brand-en{display:none}.hero-inner{padding-top:180px}.hero h1{font-size:64px}.hero-bottom{gap:24px}.hero-note{font-size:9px}.intro-grid{gap:40px}.intro h2{font-size:35px}.intro-copy .body-copy{font-size:15px}.intro-word{font-size:50px}.section-title{font-size:34px}.section-heading{gap:40px}.room-tabs{width:100%}.room-tab{flex:1}.room-panel{grid-template-columns:1fr 1fr;gap:30px}.room-photo{min-height:640px}.room-price{display:block}.room-price>span{display:block}.room-price>span:last-child{margin-top:8px}.room-copy>.body-copy{font-size:15px}.room-details>div{grid-template-columns:1fr;gap:3px;padding:9px 0}.room-details dd{font-size:11px}.stay-grid{gap:30px;grid-template-columns:1fr 1fr}.stay-photo{height:650px}.stay-row{grid-template-columns:1fr;gap:10px;padding:22px 0}.stay-row h3{font-size:20px;margin-bottom:12px}.stay-row .body-copy{font-size:15px}.booking-grid{gap:40px}.booking-copy>.body-copy{font-size:15px}.date-fields,.select-fields{gap:14px}.booking-form input,.booking-form select{font-size:13px}.access-grid{gap:45px}.access-grid h2{font-size:31px}.access-address{font-size:23px}.footer-signature>p{font-size:20px}.hero-scroll{font-size:9px;gap:16px}}
@media(max-width:680px){.site-header{height:76px}.brand-jp{font-size:28px}.brand-en{display:block;font-size:9px}.mobile-nav{background:var(--paper)}.hero{height:100svh;min-height:740px}.hero-background img{object-position:60% 50%;filter:brightness(.65)}.hero-shade{background:linear-gradient(90deg,rgba(11,27,18,.45),rgba(11,27,18,.08)),linear-gradient(0deg,rgba(13,28,20,.4),transparent 40%)}.hero-inner{padding-top:166px;padding-bottom:24px}.hero-copy>.eyebrow{font-size:8px;letter-spacing:.1em;max-width:270px}.hero h1{font-size:clamp(36px,10.7vw,44px);line-height:1.5;letter-spacing:.08em;margin:24px 0}.hero-lead{font-size:11px;line-height:2.15;letter-spacing:.04em}.hero .button{width:100%;min-width:0;max-width:300px;margin-top:28px;font-size:12px}.hero-bottom{flex-wrap:wrap;gap:10px 20px;align-items:center}.hero-bottom .eyebrow{font-size:9px}.hero-note{font-size:8px}.hero-scroll{width:100%;margin-left:0;justify-content:space-between;font-size:9px;min-height:32px}.section{padding:68px 0}.intro-grid{grid-template-columns:1fr;gap:28px}.intro .eyebrow{font-size:9px;margin-bottom:22px}.intro h2{font-size:32px;line-height:1.75}.intro-copy .body-copy{font-size:15px}.intro-detail{font-size:9px;margin-top:22px}.intro-word{font-size:48px;margin-top:30px}.section-heading{grid-template-columns:1fr;gap:22px;margin-bottom:28px}.section-heading .eyebrow{font-size:9px;margin-bottom:18px}.section-title{font-size:30px}.section-heading>.body-copy{justify-self:start;font-size:15px;max-width:340px}.room-tabs{margin-bottom:26px}.room-tab{font-size:11px;min-height:52px;padding:10px 4px}.room-panel{grid-template-columns:1fr;gap:28px}.room-photo{height:330px;min-height:0}.room-copy{padding:0}.room-english{font-size:12px}.room-copy h3{font-size:31px}.room-copy>.body-copy{font-size:15px;margin:18px 0 24px}.room-details>div{grid-template-columns:90px 1fr;gap:16px;padding:12px 0}.room-details dd{font-size:12px}.room-amenities{margin-top:20px}.room-price{display:flex;margin-top:22px;padding-top:22px}.room-price>span:last-child{margin:0;font-size:28px}.room-price>span:first-child{font-size:8px}.room-copy .button{font-size:11px}.stay-grid{grid-template-columns:1fr;gap:30px}.stay-photo{height:390px}.stay-timeline{display:block}.stay-row{grid-template-columns:55px 1fr;gap:18px;padding:25px 0}.stay-row:first-child{padding-top:25px}.stay-row h3{font-size:20px}.stay-row .body-copy{font-size:15px}.booking-grid{grid-template-columns:1fr;gap:32px}.booking-copy>.eyebrow{font-size:9px;margin-bottom:20px}.booking-copy>.body-copy{margin-top:20px;font-size:15px}.date-fields,.select-fields{gap:20px}.booking-form input,.booking-form select{font-size:14px;min-height:48px}.booking-note{font-size:9px}.closing{padding:65px 0 24px}.access-grid{grid-template-columns:1fr;gap:30px}.access-grid h2{font-size:29px}.access-grid .eyebrow{font-size:9px;margin-bottom:20px}.access-grid .body-copy{font-size:15px;margin-top:22px}.access-details{padding:0}.access-address{font-size:24px}.access-checkin{font-size:9px;margin-top:17px}.access-details .button{width:100%;min-width:0;font-size:12px}.footer-signature{display:block;padding:55px 0 30px}.footer-signature>span{font-size:22vw}.footer-signature>p{font-size:22px;margin-top:26px}.footer-bottom{display:block;padding-top:25px}.footer-brand .serif{font-size:26px}.footer-meta{text-align:left;margin-top:25px}#booking-dialog{padding:36px 24px}#booking-dialog h2{font-size:26px;margin:18px 0 24px}.estimate>div{grid-template-columns:85px 1fr;gap:10px;font-size:11px}.estimate-total dd{font-size:28px}.estimate-note{font-size:10px}}

@media(max-width:680px){body .body-copy{font-size:14px}body .hero-lead{font-size:13px}body .hero-aside .body-copy{font-size:14px}body .intro-copy .body-copy,body .roast-copy>.body-copy,body .story-copy>.body-copy,body .room-copy>.body-copy,body .stay-row .body-copy,body .approach-points .body-copy,body .booking-copy>.body-copy,body .section-heading>.body-copy,body .visit-note .body-copy,body .access-grid .body-copy,body .process-row .body-copy{font-size:14px}}
.stay-time{white-space:nowrap;font-variant-numeric:tabular-nums}
@media(min-width:801px){.stay-row{grid-template-columns:max-content minmax(0,1fr)}}
@media(max-width:680px){.stay-row{grid-template-columns:max-content minmax(0,1fr)}}
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
  const c=window.SITE_CONTENT;
  const tabs=[...document.querySelectorAll('[data-room]')];
  const panel=document.getElementById('room-panel');
  const photo=panel.querySelector('img');
  const roomSelect=document.getElementById('booking-room');
  const guests=document.getElementById('guests');
  const arrival=document.getElementById('arrival');
  const departure=document.getElementById('departure');
  const error=document.getElementById('booking-error');
  const dialog=document.getElementById('booking-dialog');
  const currency=new Intl.NumberFormat('ja-JP',{style:'currency',currency:'JPY',maximumFractionDigits:0});
  [...roomSelect.options].forEach((option,i)=>{option.textContent=c.rooms[i].name;});
  [...guests.options].forEach((option,i)=>{option.textContent=c.booking['guest'+String(i+1)];});
  document.getElementById('hero-room-price').textContent=currency.format(Math.min(...c.rooms.map(room=>room.price)))+'〜';
  let selectedRoom=0;
  function setRoom(index,focus=false){
    selectedRoom=index;const room=c.rooms[index];
    tabs.forEach((tab,i)=>{const active=i===index;tab.classList.toggle('active',active);tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1;});
    panel.setAttribute('aria-labelledby',tabs[index].id);
    ['english','name','description','size','capacity','bed','amenities'].forEach(key=>document.getElementById('room-'+key).textContent=room[key]);
    document.getElementById('room-price').textContent=currency.format(room.price)+'〜';
    const asset=c.assets[room.image];photo.src=asset.url;photo.alt=asset.alt;photo.style.objectPosition=asset.position;
    roomSelect.value=String(index);error.hidden=true;
    if(focus)tabs[index].focus();
  }
  tabs.forEach((tab,index)=>{tab.addEventListener('click',()=>setRoom(index));tab.addEventListener('keydown',event=>{let next;if(event.key==='ArrowRight')next=(index+1)%tabs.length;if(event.key==='ArrowLeft')next=(index+tabs.length-1)%tabs.length;if(event.key==='Home')next=0;if(event.key==='End')next=tabs.length-1;if(next!==undefined){event.preventDefault();setRoom(next,true);}});});
  roomSelect.addEventListener('change',()=>setRoom(Number(roomSelect.value)));
  document.getElementById('plan-selected-room').addEventListener('click',()=>{roomSelect.value=String(selectedRoom);});
  function isoLocal(date){return [date.getFullYear(),String(date.getMonth()+1).padStart(2,'0'),String(date.getDate()).padStart(2,'0')].join('-');}
  const today=isoLocal(new Date());arrival.min=today;departure.min=today;
  if(c.booking.defaultArrival>=today){arrival.value=c.booking.defaultArrival;departure.value=c.booking.defaultDeparture;}else{const start=new Date();start.setDate(start.getDate()+7);arrival.value=isoLocal(start);start.setDate(start.getDate()+1);departure.value=isoLocal(start);}
  arrival.addEventListener('change',()=>{if(arrival.value){departure.min=arrival.value;if(departure.value<=arrival.value){const next=new Date(arrival.value+'T12:00:00');next.setDate(next.getDate()+1);departure.value=isoLocal(next);}}error.hidden=true;});
  function showError(message){error.textContent=message;error.hidden=false;error.setAttribute('tabindex','-1');error.focus();}
  document.getElementById('booking-form').addEventListener('submit',event=>{
    event.preventDefault();error.hidden=true;
    const a=arrival.value,d=departure.value,people=Number(guests.value),room=c.rooms[Number(roomSelect.value)];
    if(!a||!d||d<=a){showError(c.booking.errorDates);return;}
    if(a<today){showError(c.booking.errorPast);return;}
    const nights=Math.round((Date.parse(d+'T00:00:00Z')-Date.parse(a+'T00:00:00Z'))/86400000);
    if(!Number.isFinite(nights)||nights<1||nights>30){showError(c.booking.errorNights);return;}
    if(people>room.maxGuests){showError(c.booking.errorCapacity);return;}
    const total=(room.price+Math.max(0,people-2)*c.booking.extraGuestPrice)*nights;
    document.getElementById('estimate-room').textContent=room.name;
    document.getElementById('estimate-dates').textContent=a.replaceAll('-',' / ')+' — '+d.replaceAll('-',' / ');
    document.getElementById('estimate-guests').textContent=String(people)+c.booking.guestUnit+' / '+String(nights)+c.booking.nightUnit;
    document.getElementById('estimate-price').textContent=currency.format(total);
    dialog.showModal();
  });
  dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
  setRoom(0);
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
