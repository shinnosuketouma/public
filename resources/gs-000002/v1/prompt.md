# SELQUEN STUDIO — そのらしさを、次の可能性に。 — 編集欄つき・実装固定プロンプト v1

日本向けWebサイトを次の仕様・参照実装で制作してください。
このプロンプトはGENSEKI独自制作の gs-002 / v1 に対応します。
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
  "brand": "SELQUEN STUDIO",
  "skip": "本文へ移動",
  "nav": {
    "work": "制作事例",
    "service": "できること",
    "studio": "スタジオ",
    "contact": "プロジェクトの相談",
    "menu": "メニュー"
  },
  "hero": {
    "label": "INDEPENDENT DESIGN STUDIO / TOKYO",
    "headline": "Good change,\nstarts here.",
    "lead": "そのらしさを、\n次の可能性に。",
    "body": "事業の背景を聞くことから、ブランドの見え方を変えることまで。SELQUENは戦略とデザインをつなぐ、小さなクリエイティブスタジオです。",
    "cta": "私たちの仕事を見る",
    "number": "SC / 001",
    "photoTag": "A FRESH PERSPECTIVE",
    "down": "SCROLL TO EXPLORE"
  },
  "work": {
    "label": "SELECTED CONCEPTS / 2026",
    "headline": "つくるのは、\n変わるきっかけ。",
    "intro": "名前、佇まい、触れたときの体験。\nひとつの考えを、いくつもの接点に。",
    "filters": [
      "すべて",
      "ブランド",
      "Webサイト"
    ],
    "count": "4 PROJECTS",
    "projects": [
      {
        "name": "NOMA HOUSE",
        "category": "BRAND DESIGN",
        "year": "2026",
        "title": "余白から考える、暮らしの輪郭。",
        "detail": "住まいのブランドコンセプト / ビジュアルアイデンティティ",
        "group": "brand",
        "cta": "NOMA HOUSEの制作内容"
      },
      {
        "name": "DAY FORM",
        "category": "WEB DESIGN",
        "year": "2026",
        "title": "日々の道具に、新しい出会いを。",
        "detail": "ライフスタイルストア / Webサイト設計",
        "group": "web",
        "cta": "DAY FORMの制作内容"
      },
      {
        "name": "CALM NOTES",
        "category": "BRAND DESIGN",
        "year": "2026",
        "title": "静かな時間を、手に取れるかたちに。",
        "detail": "エディトリアル企画 / アートディレクション",
        "group": "brand",
        "cta": "CALM NOTESの制作内容"
      },
      {
        "name": "KINU COFFEE",
        "category": "WEB DESIGN",
        "year": "2026",
        "title": "一杯の背景まで、届ける。",
        "detail": "コーヒーブランド / ブランドサイト設計",
        "group": "web",
        "cta": "KINU COFFEEの制作内容"
      }
    ],
    "note": "SELF-INITIATED CONCEPTS / 掲載事例はすべて自主制作です。",
    "countSuffix": "PROJECTS"
  },
  "service": {
    "label": "WHAT WE DO",
    "headline": "考えを揃え、\nかたちをつくる。",
    "intro": "必要なのは、何を変え、何を残すかを一緒に考えること。事業の段階に合わせて、必要なチームと取り組み方を組み立てます。",
    "items": [
      {
        "number": "01",
        "name": "Brand strategy",
        "jp": "ブランドの土台を考える",
        "body": "対話とリサーチから、事業の価値・届けたい相手・伝え方を整理。判断の軸になるブランドの言葉をつくります。",
        "deliverables": "ブランドコンセプト / ポジショニング / ネーミング",
        "price": "¥300,000〜"
      },
      {
        "number": "02",
        "name": "Identity design",
        "jp": "らしさが伝わる姿へ",
        "body": "ロゴ、色、書体、写真の方向性。使うほどに一貫性が育つ、ブランドの視覚言語と運用ルールを設計します。",
        "deliverables": "VI / アートディレクション / ガイドライン",
        "price": "¥500,000〜"
      },
      {
        "number": "03",
        "name": "Digital experience",
        "jp": "伝えるだけで、終わらない",
        "body": "Webサイトを、ブランドと人が出会う場所として。情報設計からデザイン、実装までをひとつの流れで考えます。",
        "deliverables": "情報設計 / Webデザイン / フロントエンド実装",
        "price": "¥800,000〜"
      }
    ],
    "note": "料金は税抜の参考設定です。内容・規模に合わせて個別にご提案します。"
  },
  "studio": {
    "label": "THE STUDIO",
    "headline": "まず、\nよく聞く。",
    "body": "答えを急ぐ前に、事業のこと、人のこと、これからのことを聞かせてください。\n\n見栄えを整えるだけでは届かない価値を、一緒に見つけたい。私たちは、問いを立て、試し、対話を重ねながらつくるスタジオです。",
    "signature": "Curiosity is our first tool.",
    "location": "BASED IN TOKYO / WORKING EVERYWHERE",
    "cta": "進め方を相談する"
  },
  "contact": {
    "label": "HAVE SOMETHING IN MIND?",
    "headline": "Let's make\na good change.",
    "body": "まだ輪郭のない構想も、立ち止まっている課題も。\nまずは、あなたの話を聞かせてください。",
    "cta": "プロジェクトの相談をはじめる",
    "email": "HELLO@SELQUEN.EXAMPLE"
  },
  "footer": {
    "copyright": "© 2026 SELQUEN STUDIO",
    "tag": "Small studio. Open possibilities.",
    "legal": "GENSEKI concept / 架空のブランド・外部送信なし。掲載事例は自主制作のコンセプトです。写真：Unsplash。"
  },
  "assets": {
    "hero": {
      "url": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1500&q=85",
      "alt": "自然光が入るワークスペースのイメージ写真",
      "position": "center 55%"
    },
    "house": {
      "url": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
      "alt": "落ち着いた素材の住宅空間を使った自主制作のイメージ",
      "position": "center"
    },
    "object": {
      "url": "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1000&q=85",
      "alt": "本と日用品のある静物写真",
      "position": "center"
    },
    "notes": {
      "url": "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1100&q=85",
      "alt": "ノートに考えを書き留める様子のイメージ",
      "position": "center"
    },
    "coffee": {
      "url": "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1400&q=85",
      "alt": "コーヒー豆のディテールを写したイメージ写真",
      "position": "center"
    },
    "studio": {
      "url": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1500&q=85",
      "alt": "テーブルと椅子が並ぶデザインスタジオのイメージ写真",
      "position": "center"
    }
  }
};
```
<!-- GENSEKI:EDITABLE:END -->

## 2. 固定するデザインと動作

以下は編集せず、そのまま実装してください。独自のデザイン判断を足さないでください。
```json
{
  "genre_id": "G02",
  "seed_id": "G02-01",
  "title": "SELQUEN STUDIO — そのらしさを、次の可能性に。",
  "kind": "service",
  "category": "ブランドデザインスタジオ",
  "primary_action": "プロジェクトの相談",
  "direction": "朱赤・生成り・Georgiaの大きなserif。非対称の写真と余白を持つ編集的ブランドサイト。",
  "sections": [
    {
      "id": "hero",
      "purpose": "スタジオの姿勢を伝える",
      "layout": "巨大serif左、右写真、左下日本語紹介"
    },
    {
      "id": "work",
      "purpose": "自主制作の見せ方と業務領域",
      "layout": "7/5・5/7の非対称grid、手動filter"
    },
    {
      "id": "service",
      "purpose": "支援内容と価格理解",
      "layout": "3ruled rows、番号・名称・説明・価格"
    },
    {
      "id": "studio",
      "purpose": "対話から始める姿勢",
      "layout": "大きな写真左、type momentと本文右"
    },
    {
      "id": "contact",
      "purpose": "相談の入口",
      "layout": "巨大serif headline、朱赤button"
    }
  ],
  "tokens": {
    "paper": "#f3f0e9",
    "ink": "#b33526",
    "surface": "#e9e5dc",
    "line": "#cabbad",
    "font": "system Japanese sans + Georgia",
    "max_width": 1296,
    "desktop_gutter": 48,
    "mobile_gutter": 20,
    "radius": 0
  },
  "interactions": [
    "すべて/ブランド/Webサイトで4自主制作をfilter",
    "表示件数をaria-live更新",
    "各制作内容と相談CTAは共通demo dialog",
    "image hover zoom1.025"
  ],
  "mobile": "760px以下hero写真をflow内へ。projectsは1column、各projectに44px以上の操作域。serviceは2columnで説明・価格を本文列へ。",
  "editable_notes": "content.jsで全文章、架空価格、4自主制作、固定画像URL/alt/焦点位置を編集。人物を架空スタッフと紹介しない。",
  "quality_notes": "kitのdata-momentマークのみの擬似実装は除去。hero入口アニメーションとhoverは実装済み。gateはarm済み、完全PASS未確認。"
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
<html lang="ja" data-type="service"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>SELQUEN STUDIO — Good change, starts here.</title><meta name="description" content="事業の背景を聞くことから、ブランドの見え方を変えることまで。SELQUENは戦略とデザインをつなぐ、小さなクリエイティブスタジオです。"><meta name="page-type" content="service"><meta name="site-kind" content="other"><meta name="theme-color" content="#f3f0e9"><meta property="og:title" content="SELQUEN STUDIO — Good change, starts here."><meta property="og:description" content="事業の背景を聞くことから、ブランドの見え方を変えることまで。SELQUENは戦略とデザインをつなぐ、小さなクリエイティブスタジオです。"><meta property="og:type" content="website"><link rel="stylesheet" href="style.css"><meta property="og:image" content="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&amp;fit=crop&amp;w=1500&amp;q=85"><meta name="twitter:card" content="summary_large_image"></head><body><a data-content="skip" href="#main" class="skip">本文へ移動</a><header class="site-header wrap"><a data-content="brand" href="#hero" class="wordmark">SELQUEN STUDIO</a><nav class="desktop-nav"><a data-content="nav.work" href="#work" class="">制作事例</a><a data-content="nav.service" href="#service" class="">できること</a><a data-content="nav.studio" href="#studio" class="">スタジオ</a></nav><a data-content="nav.contact" href="#contact" class="header-contact">プロジェクトの相談</a><button data-content="nav.menu" type="button" class="menu-toggle" data-menu-toggle aria-expanded="false" aria-controls="mobile-nav">メニュー</button><nav id="mobile-nav" class="mobile-menu" data-menu hidden><a data-content="nav.work" href="#work" class="">制作事例</a><a data-content="nav.service" href="#service" class="">できること</a><a data-content="nav.studio" href="#studio" class="">スタジオ</a><a data-content="nav.contact" href="#contact" class="">プロジェクトの相談</a></nav></header><main id="main"><section class="hero wrap" id="hero" data-enter><p data-content="hero.label" class="eyebrow">INDEPENDENT DESIGN STUDIO / TOKYO</p><h1 data-content="hero.headline" >Good change,
starts here.</h1><figure class="hero-photo photo"><img class="" data-image="assets.hero" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&amp;fit=crop&amp;w=1500&amp;q=85" alt="自然光が入るワークスペースのイメージ写真" style="object-position:center 55%" fetchpriority=high decoding="async" width="1200" height="900"><span class="photo-stamp" aria-hidden="true">S.</span></figure><div class="hero-about"><h2 data-content="hero.lead" >そのらしさを、
次の可能性に。</h2><p data-content="hero.body" >事業の背景を聞くことから、ブランドの見え方を変えることまで。SELQUENは戦略とデザインをつなぐ、小さなクリエイティブスタジオです。</p><a data-content="hero.cta" href="#work" class="text-link">私たちの仕事を見る</a></div><div class="hero-meta"><span data-content="hero.number" >SC / 001</span><span data-content="hero.down" >SCROLL TO EXPLORE</span></div></section><section class="work-section" id="work"><div class="wrap"><div class="work-heading" data-reveal><div><p data-content="work.label" class="eyebrow">SELECTED CONCEPTS / 2026</p><h2 data-content="work.headline" >つくるのは、
変わるきっかけ。</h2></div><p data-content="work.intro" >名前、佇まい、触れたときの体験。
ひとつの考えを、いくつもの接点に。</p></div><div class="work-toolbar"><div class="filters" role="group" aria-label="制作事例を絞り込む"><button data-content="work.filters.0" type="button" class="filter active" data-filter="all" aria-pressed="true">すべて</button><button data-content="work.filters.1" type="button" class="filter" data-filter="brand" aria-pressed="false">ブランド</button><button data-content="work.filters.2" type="button" class="filter" data-filter="web" aria-pressed="false">Webサイト</button></div><p data-content="work.count" id="project-count" aria-live="polite">4 PROJECTS</p></div><div class="project-grid"><article class="project project-1" data-project="brand" data-reveal><div class="project-top"><h3 data-content="work.projects.0.name" >NOMA HOUSE</h3><span data-content="work.projects.0.category" >BRAND DESIGN</span></div><button type="button" class="project-image photo" data-demo="NOMA HOUSEの制作内容" aria-label="NOMA HOUSEの制作内容"><img class="" data-image="assets.house" src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&amp;fit=crop&amp;w=1400&amp;q=85" alt="落ち着いた素材の住宅空間を使った自主制作のイメージ" style="object-position:center" loading=lazy decoding="async" width="1200" height="900"><span class="project-over"><span class="project-title"><span data-content="work.projects.0.title" >余白から考える、暮らしの輪郭。</span></span><span class="project-arrow" aria-hidden="true">↗</span></span></button></article><article class="project project-2" data-project="web" data-reveal><div class="project-top"><h3 data-content="work.projects.1.name" >DAY FORM</h3><span data-content="work.projects.1.category" >WEB DESIGN</span></div><button type="button" class="project-image photo" data-demo="DAY FORMの制作内容" aria-label="DAY FORMの制作内容"><img class="" data-image="assets.object" src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&amp;fit=crop&amp;w=1000&amp;q=85" alt="本と日用品のある静物写真" style="object-position:center" loading=lazy decoding="async" width="1200" height="900"><span class="project-over"><span class="project-title"><span data-content="work.projects.1.title" >日々の道具に、新しい出会いを。</span></span><span class="project-arrow" aria-hidden="true">↗</span></span></button></article><article class="project project-3" data-project="brand" data-reveal><div class="project-top"><h3 data-content="work.projects.2.name" >CALM NOTES</h3><span data-content="work.projects.2.category" >BRAND DESIGN</span></div><button type="button" class="project-image photo" data-demo="CALM NOTESの制作内容" aria-label="CALM NOTESの制作内容"><img class="" data-image="assets.notes" src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&amp;fit=crop&amp;w=1100&amp;q=85" alt="ノートに考えを書き留める様子のイメージ" style="object-position:center" loading=lazy decoding="async" width="1200" height="900"><span class="project-over"><span class="project-title"><span data-content="work.projects.2.title" >静かな時間を、手に取れるかたちに。</span></span><span class="project-arrow" aria-hidden="true">↗</span></span></button></article><article class="project project-4" data-project="web" data-reveal><div class="project-top"><h3 data-content="work.projects.3.name" >KINU COFFEE</h3><span data-content="work.projects.3.category" >WEB DESIGN</span></div><button type="button" class="project-image photo" data-demo="KINU COFFEEの制作内容" aria-label="KINU COFFEEの制作内容"><img class="" data-image="assets.coffee" src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&amp;fit=crop&amp;w=1400&amp;q=85" alt="コーヒー豆のディテールを写したイメージ写真" style="object-position:center" loading=lazy decoding="async" width="1200" height="900"><span class="project-over"><span class="project-title"><span data-content="work.projects.3.title" >一杯の背景まで、届ける。</span></span><span class="project-arrow" aria-hidden="true">↗</span></span></button></article></div><p data-content="work.note" class="work-note">SELF-INITIATED CONCEPTS / 掲載事例はすべて自主制作です。</p></div></section><section class="services wrap" id="service"><div class="service-heading" data-reveal><div><p data-content="service.label" class="eyebrow">WHAT WE DO</p><h2 data-content="service.headline" >考えを揃え、
かたちをつくる。</h2></div><p data-content="service.intro" >必要なのは、何を変え、何を残すかを一緒に考えること。事業の段階に合わせて、必要なチームと取り組み方を組み立てます。</p></div><div class="service-list"><article class="service-row" data-reveal><span data-content="service.items.0.number" class="service-number">01</span><div class="service-name"><h3 data-content="service.items.0.name" >Brand strategy</h3><p data-content="service.items.0.jp" >ブランドの土台を考える</p></div><div class="service-detail"><p data-content="service.items.0.body" >対話とリサーチから、事業の価値・届けたい相手・伝え方を整理。判断の軸になるブランドの言葉をつくります。</p><small data-content="service.items.0.deliverables" >ブランドコンセプト / ポジショニング / ネーミング</small></div><span data-content="service.items.0.price" class="service-price">¥300,000〜</span></article><article class="service-row" data-reveal><span data-content="service.items.1.number" class="service-number">02</span><div class="service-name"><h3 data-content="service.items.1.name" >Identity design</h3><p data-content="service.items.1.jp" >らしさが伝わる姿へ</p></div><div class="service-detail"><p data-content="service.items.1.body" >ロゴ、色、書体、写真の方向性。使うほどに一貫性が育つ、ブランドの視覚言語と運用ルールを設計します。</p><small data-content="service.items.1.deliverables" >VI / アートディレクション / ガイドライン</small></div><span data-content="service.items.1.price" class="service-price">¥500,000〜</span></article><article class="service-row" data-reveal><span data-content="service.items.2.number" class="service-number">03</span><div class="service-name"><h3 data-content="service.items.2.name" >Digital experience</h3><p data-content="service.items.2.jp" >伝えるだけで、終わらない</p></div><div class="service-detail"><p data-content="service.items.2.body" >Webサイトを、ブランドと人が出会う場所として。情報設計からデザイン、実装までをひとつの流れで考えます。</p><small data-content="service.items.2.deliverables" >情報設計 / Webデザイン / フロントエンド実装</small></div><span data-content="service.items.2.price" class="service-price">¥800,000〜</span></article></div><p data-content="service.note" class="service-note">料金は税抜の参考設定です。内容・規模に合わせて個別にご提案します。</p></section><section class="studio-section" id="studio"><div class="wrap studio-grid"><figure class="studio-photo photo" data-reveal><img class="" data-image="assets.studio" src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&amp;fit=crop&amp;w=1500&amp;q=85" alt="テーブルと椅子が並ぶデザインスタジオのイメージ写真" style="object-position:center" loading=lazy decoding="async" width="1200" height="900"></figure><div class="studio-copy" data-reveal><p data-content="studio.label" class="eyebrow">THE STUDIO</p><h2 data-content="studio.headline">まず、
よく聞く。</h2><p data-content="studio.body" class="studio-body">答えを急ぐ前に、事業のこと、人のこと、これからのことを聞かせてください。

見栄えを整えるだけでは届かない価値を、一緒に見つけたい。私たちは、問いを立て、試し、対話を重ねながらつくるスタジオです。</p><p data-content="studio.signature" class="signature">Curiosity is our first tool.</p><p data-content="studio.location" class="eyebrow studio-location">BASED IN TOKYO / WORKING EVERYWHERE</p><button data-content="studio.cta" type="button" class="text-link" data-demo="プロジェクトの進め方">進め方を相談する</button></div></div></section><section class="contact wrap" id="contact" data-reveal><p data-content="contact.label" class="eyebrow">HAVE SOMETHING IN MIND?</p><h2 data-content="contact.headline" >Let&#39;s make
a good change.</h2><div class="contact-bottom"><p data-content="contact.body" >まだ輪郭のない構想も、立ち止まっている課題も。
まずは、あなたの話を聞かせてください。</p><button data-content="contact.cta" type="button" class="contact-button" data-demo="プロジェクト相談">プロジェクトの相談をはじめる</button></div><p data-content="contact.email" class="contact-email">HELLO@SELQUEN.EXAMPLE</p></section></main><footer class="wrap"><div class="footer-line"><small data-content="footer.copyright" >© 2026 SELQUEN STUDIO</small><span data-content="footer.tag" >Small studio. Open possibilities.</span></div><p data-content="footer.legal" class="legal footer-legal">GENSEKI concept / 架空のブランド・外部送信なし。掲載事例は自主制作のコンセプトです。写真：Unsplash。</p></footer><script src="content.js"></script><script src="genseki.js"></script><script src="app.js"></script></body></html>
```

### style.css

```css file=style.css
*{box-sizing:border-box}html{scroll-behavior:smooth;scroll-padding-top:96px}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans JP","Hiragino Kaku Gothic ProN",Meiryo,sans-serif;-webkit-font-smoothing:antialiased}button,input,select{font:inherit}button,a{-webkit-tap-highlight-color:transparent}button{cursor:pointer}a{color:inherit;text-decoration:none}button:focus-visible,a:focus-visible,input:focus-visible{outline:3px solid currentColor;outline-offset:5px}img{width:100%;height:100%;object-fit:cover;display:block}h1,h2,h3,p,figure{margin:0}button{color:inherit}button:hover{transform:translateY(-2px)}button:active{transform:translateY(1px)}button,a{transition:transform .2s,background .2s,color .2s}section{scroll-margin-top:80px}.skip{position:fixed;top:8px;left:16px;z-index:1000;background:#fff;color:#171717;padding:14px;transform:translateY(-150%)}.skip:focus{transform:none}.wrap{width:min(1296px,calc(100% - 96px));margin:auto}.menu-toggle{display:none;min-width:48px;min-height:48px;background:none;border:1px solid currentColor;border-radius:50%;font-size:20px}.mobile-menu{position:absolute;top:76px;left:0;right:0;padding:24px;background:var(--paper);border-bottom:1px solid var(--line);z-index:99}.mobile-menu a{display:block;padding:16px 8px}.mobile-menu[hidden]{display:none!important}.eyebrow{font-size:11px;letter-spacing:.16em;font-weight:600;text-transform:uppercase}.button{display:inline-flex;align-items:center;justify-content:center;gap:18px;min-height:52px;padding:0 24px;border:0;white-space:nowrap}.button::after{content:"↗";font-size:18px}.photo{overflow:hidden}.photo img{transition:transform .7s}.photo:hover img{transform:scale(1.025)}.legal{font-size:10px;line-height:1.8;opacity:.65}.text-link{min-height:44px;display:inline-flex;align-items:center;gap:24px}.text-link::after{content:"↗"}.text-link:hover{transform:translateX(3px)}[data-content]{white-space:pre-line}.footer-line{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:24px 0;border-top:1px solid var(--line)}.footer-line .legal{max-width:560px}dialog{max-width:min(560px,calc(100% - 32px));border:0;padding:40px}dialog::backdrop{background:#1118}dialog button{min-height:44px} @media(max-width:760px){.wrap{width:calc(100% - 40px)}.desktop-nav{display:none!important}.menu-toggle{display:block}.footer-line{align-items:flex-start;flex-direction:column;gap:8px}.button{min-height:52px}.eyebrow{font-size:10px}}@media(prefers-reduced-motion:reduce){*,*::before,*::after{scroll-behavior:auto!important;animation:none!important;transition:none!important}}:root{--paper:#f3f0e9;--ink:#b33526;--line:#cabbad;--muted:#8b6f60}body{background:var(--paper);color:var(--ink)}.site-header{height:96px;display:flex;align-items:center;position:relative;gap:40px;border-bottom:1px solid var(--line);z-index:10}.wordmark{font-size:17px;font-weight:650;letter-spacing:-.055em}.desktop-nav{display:flex;gap:36px;margin-left:auto;font-size:11px}.desktop-nav a{padding:16px 0}.desktop-nav a:hover{text-decoration:underline;text-underline-offset:5px}.header-contact{font-size:11px;border-bottom:1px solid var(--ink);padding:12px 0}.hero{min-height:804px;position:relative;padding-top:42px}.hero>.eyebrow{font-size:9px;letter-spacing:.17em}.hero h1{font-family:Georgia,"Times New Roman",serif;font-weight:400;font-size:clamp(88px,9.1vw,134px);line-height:.94;letter-spacing:-.075em;position:relative;z-index:2;margin-top:48px;pointer-events:none}.hero-photo{position:absolute;right:0;top:155px;width:44%;height:465px;background:#ded4c8}.hero-photo img{filter:saturate(.58)}.photo-stamp{position:absolute;left:-46px;bottom:32px;background:var(--ink);color:var(--paper);width:120px;height:120px;display:grid;place-items:center;font-family:Georgia,serif;font-size:82px;line-height:1;letter-spacing:-.1em;padding-right:14px}.hero-about{width:40%;display:grid;grid-template-columns:1fr;gap:20px;margin-top:42px}.hero-about h2{font-size:22px;line-height:1.5;letter-spacing:-.03em;font-weight:450}.hero-about p{font-size:11px;line-height:2;color:#75604e;max-width:350px}.text-link{font-size:11px;background:none;border:0;padding:0;align-self:flex-start;color:var(--ink)}.hero-meta{position:absolute;bottom:26px;left:0;right:0;display:flex;justify-content:space-between;font-size:8px;letter-spacing:.14em}.hero-meta span:last-child::after{content:'↓';margin-left:20px;font-size:15px}.work-section{padding:105px 0 70px;background:#e9e5dc;color:#413a31}.work-heading{display:flex;justify-content:space-between;align-items:flex-end;gap:70px;margin-bottom:48px}.work-heading .eyebrow{font-size:9px;letter-spacing:.15em}.work-heading h2{font-size:43px;font-weight:400;line-height:1.45;letter-spacing:-.05em;margin-top:26px;color:#4a4037}.work-heading>p{font-size:12px;line-height:2;color:#75604e;margin-bottom:8px}.work-toolbar{display:flex;align-items:center;justify-content:space-between;margin-bottom:45px;border-bottom:1px solid #cfc6ba;padding-bottom:12px}.filters{display:flex;gap:20px}.filter{background:none;border:0;padding:10px 0;min-height:44px;font-size:10px;color:#75604e;position:relative}.filter.active{color:#b33526}.filter.active::after{content:'';position:absolute;bottom:0;left:0;right:0;height:2px;background:#b33526}.work-toolbar>p{font-size:8px;letter-spacing:.12em}.project-grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));column-gap:54px;row-gap:75px}.project{min-width:0}.project-1,.project-4{grid-column:span 7}.project-2,.project-3{grid-column:span 5}.project-2{padding-top:110px}.project-4{padding-top:100px}.project-top{display:flex;justify-content:space-between;gap:10px;align-items:center;margin-bottom:15px}.project-top h3{font-family:Georgia,serif;font-size:22px;font-weight:400;letter-spacing:-.04em}.project-top>span{font-size:7px;letter-spacing:.1em}.project-image{position:relative;border:0;padding:0;display:block;width:100%;height:435px;background:#ded5c9;text-align:left;color:white}.project-2 .project-image,.project-3 .project-image{height:470px}.project-image img{filter:saturate(.5);transition:transform .7s,filter .7s}.project-image:hover img{filter:saturate(.9);transform:scale(1.025)}.project-image:hover{transform:translateY(-2px)}.project-over{position:absolute;left:0;right:0;bottom:0;min-height:110px;padding:50px 26px 22px;display:flex;justify-content:space-between;align-items:flex-end;gap:15px;background:linear-gradient(transparent,#16110c85)}.project-title{font-size:12px;line-height:1.7;max-width:80%}.project-arrow{font-size:25px}.project[hidden]{display:none!important}.project-grid.filtered{grid-template-columns:repeat(2,minmax(0,1fr));align-items:start}.project-grid.filtered .project{grid-column:auto;padding-top:0}.work-note{font-size:8px;color:#75604e;margin-top:50px;letter-spacing:.05em}.services{padding-top:105px;padding-bottom:65px;min-height:900px;display:flex;flex-direction:column;justify-content:center}.service-heading{display:flex;align-items:flex-end;justify-content:space-between;gap:70px;margin-bottom:55px}.service-heading .eyebrow{font-size:9px}.service-heading h2{font-size:40px;line-height:1.5;font-weight:400;margin-top:26px;letter-spacing:-.04em}.service-heading>p{font-size:12px;line-height:2;color:#75604e;max-width:360px;margin-bottom:8px}.service-row{border-top:1px solid var(--line);display:grid;grid-template-columns:40px 1fr 1.15fr 120px;gap:30px;padding:34px 0}.service-number{font-size:10px;padding-top:10px;color:#75604e}.service-name h3{font-family:Georgia,serif;font-size:31px;font-weight:400;line-height:1.1;letter-spacing:-.045em}.service-name p{font-size:10px;margin-top:14px;color:#75604e}.service-detail>p{font-size:11px;line-height:2;color:#75604e}.service-detail small{display:block;font-size:8px;color:#75604e;margin-top:15px}.service-price{font-family:Georgia,serif;font-size:18px;padding-top:3px;text-align:right;white-space:nowrap}.service-note{font-size:9px;text-align:right;border-top:1px solid var(--line);padding-top:22px;color:#75604e}.studio-section{background:#ded8cc;padding:100px 0;min-height:900px;display:flex;align-items:center;color:#675749}.studio-grid{display:grid;grid-template-columns:1.06fr 1fr;gap:115px;align-items:center}.studio-photo{height:620px}.studio-photo img{filter:saturate(.4)}.studio-copy .eyebrow{font-size:9px;color:#75604e}.studio-copy h2{font-size:76px;font-weight:400;line-height:1.13;letter-spacing:-.06em;color:#7e4e37;margin:35px 0}.studio-body{font-size:12px;line-height:2.2;color:#75604e;max-width:370px}.signature{font-family:Georgia,serif;font-style:italic;font-size:22px;color:#75604e;margin-top:30px}.studio-location{margin-top:28px;letter-spacing:.13em}.studio-copy .text-link{margin-top:15px;color:#7e4e37}.contact{min-height:830px;padding-top:110px;padding-bottom:90px;display:flex;flex-direction:column;justify-content:center}.contact .eyebrow{font-size:9px}.contact h2{font-family:Georgia,serif;font-size:clamp(75px,9vw,132px);font-weight:400;line-height:.95;letter-spacing:-.07em;margin:45px 0}.contact-bottom{display:flex;align-items:center;justify-content:space-between;gap:60px;margin-top:20px}.contact-bottom>p{font-size:12px;line-height:2;color:#75604e}.contact-button{border:1px solid var(--ink);border-radius:0;background:var(--ink);color:var(--paper);padding:22px 25px;min-height:64px;font-size:12px;display:flex;align-items:center;gap:50px}.contact-button::after{content:'↗';font-size:24px}.contact-button:hover{background:#97281d}.contact-email{font-size:9px;letter-spacing:.13em;margin-top:45px;color:#75604e}.footer-line{font-size:9px;color:#75604e}.footer-line>span{font-family:Georgia,serif;font-size:14px;font-style:italic}.footer-legal{padding-bottom:25px;font-size:9px;color:#75604e}@media(max-width:1100px){.hero-photo{width:44%;top:170px;height:430px}.hero h1{font-size:100px}.hero-about{width:43%}.hero-about p{font-size:11px}.project-grid{gap:35px}.project-image{height:380px}.project-2 .project-image,.project-3 .project-image{height:410px}.studio-grid{gap:65px}.service-row{grid-template-columns:25px .95fr 1.1fr 90px;gap:20px}.service-name h3{font-size:25px}.service-price{font-size:16px}}@media(max-width:760px){.site-header{height:76px;gap:15px}.wordmark{font-size:14px;letter-spacing:-.06em}.header-contact{margin-left:auto;font-size:9px}.menu-toggle{font-size:8px;min-width:44px;min-height:44px;border-color:#cfae9e}.hero{min-height:auto;padding-top:30px;padding-bottom:70px}.hero>.eyebrow{font-size:7px;letter-spacing:.1em}.hero h1{font-size:clamp(56px,15.5vw,105px);margin-top:35px;line-height:1.02;letter-spacing:-.072em}.hero-photo{position:relative;top:auto;right:auto;width:calc(100% - 18px);margin:35px 0 0 18px;height:280px}.photo-stamp{left:-18px;bottom:18px;width:75px;height:75px;font-size:53px;padding-right:10px}.hero-about{width:100%;gap:18px;margin-top:32px;display:grid;grid-template-columns:.85fr 1.15fr;column-gap:20px;align-items:start}.hero-about h2{font-size:19px;line-height:1.6}.hero-about p{font-size:10px;line-height:2}.hero-about .text-link{grid-column:2;font-size:10px}.hero-meta{bottom:22px;font-size:7px}.work-section{padding:70px 0 50px}.work-heading{display:block;margin-bottom:28px}.work-heading .eyebrow{font-size:8px}.work-heading h2{font-size:32px;margin-top:22px}.work-heading>p{font-size:11px;margin:24px 0 0}.work-toolbar{margin-bottom:32px;padding-bottom:8px}.filters{gap:24px}.filter{font-size:10px}.work-toolbar>p{font-size:7px}.project-grid,.project-grid.filtered{grid-template-columns:1fr;gap:40px}.project,.project-grid.filtered .project{grid-column:1;padding-top:0}.project-top{margin-bottom:12px}.project-top h3{font-size:23px}.project-top>span{font-size:7px}.project-image,.project-2 .project-image,.project-3 .project-image{height:360px}.project-2 .project-image{height:390px}.project-over{padding:45px 20px 20px}.project-title{font-size:11px}.work-note{font-size:8px;line-height:1.8;margin-top:30px}.services{padding-top:70px;padding-bottom:60px;min-height:auto}.service-heading{display:block;margin-bottom:35px}.service-heading h2{font-size:32px;margin-top:20px}.service-heading>p{font-size:11px;max-width:none;margin-top:24px}.service-row{grid-template-columns:25px 1fr;gap:12px;padding:26px 0}.service-number{font-size:9px}.service-name h3{font-size:28px}.service-name p{margin-top:10px}.service-detail{grid-column:2}.service-detail>p{font-size:11px}.service-detail small{font-size:8px;line-height:1.8;margin-top:12px}.service-price{grid-column:2;text-align:left;font-size:17px;padding-top:5px}.service-note{text-align:left;font-size:9px;line-height:1.9}.studio-section{padding:65px 0;min-height:auto}.studio-grid{grid-template-columns:1fr;gap:45px}.studio-photo{height:340px}.studio-copy h2{font-size:65px;margin:25px 0}.studio-body{font-size:12px;max-width:100%}.signature{font-size:21px;margin-top:25px}.studio-location{font-size:8px!important}.contact{min-height:650px;padding:75px 0}.contact h2{font-size:clamp(58px,16.2vw,95px);margin:35px 0;line-height:1.02}.contact-bottom{display:block;margin:0}.contact-bottom>p{font-size:11px}.contact-button{margin-top:30px;width:100%;justify-content:space-between;font-size:11px;min-height:60px;padding:17px 20px;gap:20px}.contact-email{font-size:8px;margin-top:25px}.footer-line{font-size:8px}.footer-line>span{font-size:13px}.footer-legal{font-size:8px;line-height:1.9}}

/* Keep content visible when JavaScript or a browser motion API is unavailable. */
[data-reveal]{opacity:1} .legal{opacity:1}

.hero{min-height:calc(100svh - 96px)}.footer-legal{color:#75604e}@media(max-width:760px){.hero{min-height:calc(100svh - 76px)}}
.hero-about p{font-size:14px}.work-heading>p,.service-heading>p,.contact-bottom>p{font-size:14px}.service-detail>p,.studio-body{font-size:13px}.service-detail small{font-size:10px}.service-note,.work-note,.footer-legal{font-size:10px}.signature{color:#75604e}@media(max-width:760px){.hero-about p{font-size:11px}.work-heading>p,.service-heading>p,.contact-bottom>p,.service-detail>p,.studio-body{font-size:12px}.service-detail small,.service-note,.work-note,.footer-legal{font-size:9px}}
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
(()=>{const buttons=[...document.querySelectorAll('[data-filter]')];const projects=[...document.querySelectorAll('[data-project]')];const grid=document.querySelector('.project-grid');buttons.forEach(b=>b.addEventListener('click',()=>{const filter=b.dataset.filter;buttons.forEach(x=>{const selected=x===b;x.classList.toggle('active',selected);x.setAttribute('aria-pressed',String(selected))});let count=0;projects.forEach(p=>{p.hidden=filter!=='all'&&p.dataset.project!==filter;if(!p.hidden)count++});grid.classList.toggle('filtered',filter!=='all');document.getElementById('project-count').textContent=`${count} ${window.SITE_CONTENT.work.countSuffix}`}))})();
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
