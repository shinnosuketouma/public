# FORME LAB — 考える。つくる。伝わる。 — 編集欄つき・実装固定プロンプト v1

日本向けWebサイトを次の仕様・参照実装で制作してください。
このプロンプトはGENSEKI独自制作の gs-009 / v1 に対応します。
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
  "brand": "FORME LAB",
  "skip": "本文へ移動",
  "nav": {
    "approach": "学び方",
    "course": "コース",
    "flow": "受講の流れ",
    "contact": "説明会を体験",
    "menu": "メニュー"
  },
  "hero": {
    "label": "A SCHOOL FOR DESIGN THINKING & MAKING",
    "headline": "考える。\nつくる。\n伝わる。",
    "body": "正解をなぞる、その先へ。\nFORME LABは、観察と言葉とかたちを行き来しながら、デザインの判断力を育てるオンラインスクールです。",
    "cta": "自分に合うコースを見る",
    "sub": "ONLINE / SMALL GROUP / PROJECT BASED",
    "posterTop": "FORME LAB / FIELD NOTES NO.01",
    "posterWords": "Observe.\nQuestion.\nMake.",
    "posterBottom": "GOOD DESIGN STARTS WITH A GOOD QUESTION.",
    "edition": "2026 AUTUMN / OPEN PROGRAMS"
  },
  "approach": {
    "label": "01 / OUR APPROACH",
    "headline": "センスの前に、\n問いを持とう。",
    "body": "なぜ、この色なのか。なぜ、この順番なのか。\nデザインを言葉にして確かめることから、つくる力は少しずつ育っていきます。",
    "steps": [
      {
        "number": "01",
        "title": "観察する",
        "en": "OBSERVE",
        "body": "身近なサービスや暮らしを観察。誰の、どんな課題に向き合うかを見つけます。"
      },
      {
        "number": "02",
        "title": "考えを組み立てる",
        "en": "THINK",
        "body": "集めた材料を整理し、仮説と構成をつくる。見た目を決める前の思考を磨きます。"
      },
      {
        "number": "03",
        "title": "つくって、確かめる",
        "en": "MAKE & REVIEW",
        "body": "手を動かして形にし、意図を説明する。レビューをもとに、もう一度つくります。"
      }
    ],
    "caption": "LEARN THROUGH THE PROCESS."
  },
  "course": {
    "label": "02 / FIND YOUR PROGRAM",
    "headline": "今の自分から、\n次の一歩を。",
    "intro": "基礎を学びたい人も、表現の幅を広げたい人も。目的と使える時間に合わせて選べる、3つのプログラム。",
    "selectLabel": "コースを選ぶ",
    "resultLabel": "選択中のカリキュラム",
    "priceLabel": "受講料（税込）",
    "formatLabel": "受講形式",
    "cta": "このコースの説明会を体験",
    "note": "料金・日程は架空スクールの設定です。実際の申込や決済は行いません。",
    "courses": [
      {
        "name": "Web design foundation",
        "jp": "Webデザイン基礎",
        "duration": "12 WEEKS",
        "level": "はじめて学ぶ方へ",
        "number": "01",
        "description": "情報の整理から画面設計、Webページの制作まで。ひとつのサイトをつくりながら、デザインの基本を身につけます。",
        "price": "¥96,000",
        "format": "オンライン / 週1回・120分",
        "outcome": "完成させるもの：小さな事業のブランドサイト",
        "modules": [
          {
            "week": "WEEK 01–03",
            "title": "観察と情報設計",
            "body": "課題の整理 / リサーチ / ワイヤーフレーム"
          },
          {
            "week": "WEEK 04–08",
            "title": "見え方と体験の設計",
            "body": "文字と余白 / 配色 / UIデザイン"
          },
          {
            "week": "WEEK 09–12",
            "title": "実装とプレゼンテーション",
            "body": "HTML・CSS / 表示確認 / 制作意図の発表"
          }
        ]
      },
      {
        "name": "Brand design practice",
        "jp": "ブランドデザイン実践",
        "duration": "8 WEEKS",
        "level": "基礎の次に進みたい方へ",
        "number": "02",
        "description": "ブランドの背景を読み解き、ひとつの考えを言葉とビジュアルへ。コンセプトづくりからガイドラインまでをつなげます。",
        "price": "¥72,000",
        "format": "オンライン / 週1回・120分",
        "outcome": "完成させるもの：ブランドの提案とVIガイド",
        "modules": [
          {
            "week": "WEEK 01–02",
            "title": "ブランドの問いを立てる",
            "body": "ヒアリング設計 / 価値の整理 / コンセプト"
          },
          {
            "week": "WEEK 03–05",
            "title": "視覚言語を組み立てる",
            "body": "ムードボード / ロゴ / 色と書体"
          },
          {
            "week": "WEEK 06–08",
            "title": "接点に展開して伝える",
            "body": "応用デザイン / ガイドライン / 提案発表"
          }
        ]
      },
      {
        "name": "Design review workshop",
        "jp": "デザインレビュー演習",
        "duration": "4 WEEKS",
        "level": "判断と言語化を磨きたい方へ",
        "number": "03",
        "description": "自分の制作を、もう一段よくするための演習。比較し、説明し、フィードバックを受けながら、判断の理由を深めます。",
        "price": "¥38,000",
        "format": "オンライン / 週1回・90分",
        "outcome": "完成させるもの：制作改善案とレビュー記録",
        "modules": [
          {
            "week": "WEEK 01",
            "title": "デザインを観察する",
            "body": "比較の視点 / 制作意図の言語化"
          },
          {
            "week": "WEEK 02–03",
            "title": "レビューと改善を繰り返す",
            "body": "相互レビュー / 優先順位 / 改善案の制作"
          },
          {
            "week": "WEEK 04",
            "title": "判断の軸をまとめる",
            "body": "変更理由の整理 / 発表 / 次の制作へ"
          }
        ]
      }
    ],
    "demoSuffix": "の説明会"
  },
  "flow": {
    "label": "03 / BEFORE YOU BEGIN",
    "headline": "学びの時間を、\n暮らしの中へ。",
    "intro": "無理のないペースで取り組めるように。始める前に、学び方と必要な準備を確認します。",
    "items": [
      {
        "title": "01 / オンライン説明会",
        "body": "学習の目的や、確保できる時間を整理します。コースの内容や課題の進め方も確認できます。"
      },
      {
        "title": "02 / 学習環境を準備",
        "body": "パソコン、インターネット環境、制作ツールを準備。コースに応じた事前案内に沿って始めます。"
      },
      {
        "title": "03 / 制作とレビューを始める",
        "body": "毎週のセッションと自習を組み合わせて進行。つくったものと考えたことを持ち寄って、学びを重ねます。"
      }
    ],
    "imageLabel": "LEARNING IS A PRACTICE, NOT A DESTINATION."
  },
  "contact": {
    "label": "YOUR NEXT CHAPTER",
    "headline": "つくる人に、\nなっていく。",
    "body": "まずは、自分の学びたいことを話すところから。\nコースの選び方を、説明会デモで確かめてみてください。",
    "cta": "オンライン説明会を体験する",
    "note": "所要時間の目安：30分 / オンライン"
  },
  "footer": {
    "tag": "OBSERVE. QUESTION. MAKE.",
    "copyright": "© 2026 FORME LAB",
    "legal": "GENSEKI concept / 架空のブランド・外部送信なし。実際の受講申込・説明会予約は行いません。写真：Unsplash。"
  },
  "assets": {
    "approach": {
      "url": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=85",
      "alt": "机の上で資料を広げながら考える学習風景のイメージ写真",
      "position": "center"
    },
    "flow": {
      "url": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=85",
      "alt": "机を囲んで制作について話し合う人々のイメージ写真。講師や受講生の実写真ではありません",
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
  "genre_id": "G09",
  "seed_id": "G09-03",
  "title": "FORME LAB — 考える。つくる。伝わる。",
  "kind": "service",
  "category": "オンラインデザインスクール",
  "primary_action": "オンライン説明会を体験する",
  "direction": "コバルトと淡い黄。デザイン教科書のようなタイポグラフィ、観察の円形図、学習過程の編集的な写真。",
  "sections": [
    {
      "id": "hero",
      "purpose": "思考と制作を行き来する価値",
      "layout": "左3line日本語・右cobalt typography poster"
    },
    {
      "id": "approach",
      "purpose": "学習の3段階",
      "layout": "写真左・3ruled steps右"
    },
    {
      "id": "course",
      "purpose": "3courseの内容と価格を比較",
      "layout": "blue band、左tab list・右syllabus paper"
    },
    {
      "id": "flow",
      "purpose": "受講前の確認",
      "layout": "左native details・右学習風景"
    },
    {
      "id": "contact",
      "purpose": "説明会体験",
      "layout": "yellow band、大きな日本語type・arrow"
    }
  ],
  "tokens": {
    "paper": "#f3f0d8",
    "ink": "#2646ba",
    "surface": "#e4e4d2",
    "accent_surface": "#dfe29d",
    "line": "#cbcbb0",
    "font": "system Japanese sans + Georgia",
    "max_width": 1296,
    "desktop_gutter": 48,
    "mobile_gutter": 20,
    "radius": 0
  },
  "interactions": [
    "3course tabでsyllabus・期間・税込価格・受講形式・CTAを更新",
    "tabは上下左右/Home/Endに対応",
    "受講の流れはnative detailsで開閉",
    "説明会は共通demo dialog、外部送信なし"
  ],
  "mobile": "760px以下heroとcourseをstack。コース比較tabは全3件を常時表示。590px写真は370pxへ。",
  "editable_notes": "content.jsでheadline・コース名・3module・価格・期間・素材URL/alt/焦点位置を編集。3course×3moduleが固定仕様。",
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
<html lang="ja" data-type="service"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>FORME LAB — 考える。 つくる。 伝わる。</title><meta name="description" content="正解をなぞる、その先へ。 FORME LABは、観察と言葉とかたちを行き来しながら、デザインの判断力を育てるオンラインスクールです。"><meta name="page-type" content="service"><meta name="site-kind" content="other"><meta name="theme-color" content="#f3f0d8"><meta property="og:title" content="FORME LAB — 考える。 つくる。 伝わる。"><meta property="og:description" content="正解をなぞる、その先へ。 FORME LABは、観察と言葉とかたちを行き来しながら、デザインの判断力を育てるオンラインスクールです。"><meta property="og:type" content="website"><link rel="stylesheet" href="style.css"><meta name="twitter:card" content="summary_large_image"></head><body><a data-content="skip" href="#main" class="skip">本文へ移動</a><header class="site-header wrap"><a data-content="brand" href="#hero" class="wordmark">FORME LAB</a><nav class="desktop-nav"><a data-content="nav.approach" href="#approach" class="">学び方</a><a data-content="nav.course" href="#course" class="">コース</a><a data-content="nav.flow" href="#flow" class="">受講の流れ</a></nav><button data-content="nav.contact" type="button" class="header-cta" data-demo="オンライン説明会">説明会を体験</button><button data-content="nav.menu" type="button" class="menu-toggle" data-menu-toggle aria-expanded="false" aria-controls="mobile-nav">メニュー</button><nav id="mobile-nav" class="mobile-menu" data-menu hidden><a data-content="nav.approach" href="#approach" class="">学び方</a><a data-content="nav.course" href="#course" class="">コース</a><a data-content="nav.flow" href="#flow" class="">受講の流れ</a></nav></header><main id="main"><section class="hero wrap" id="hero" data-enter><div class="hero-copy"><p data-content="hero.label" class="eyebrow">A SCHOOL FOR DESIGN THINKING &amp; MAKING</p><h1 data-content="hero.headline" >考える。
つくる。
伝わる。</h1><p data-content="hero.body" class="hero-body">正解をなぞる、その先へ。
FORME LABは、観察と言葉とかたちを行き来しながら、デザインの判断力を育てるオンラインスクールです。</p><a data-content="hero.cta" href="#course" class="button">自分に合うコースを見る</a></div><div class="poster" aria-label="学び方を表すポスター"><div class="poster-top"><p data-content="hero.posterTop" >FORME LAB / FIELD NOTES NO.01</p><span class="poster-cross" aria-hidden="true">+</span></div><p data-content="hero.posterWords" class="poster-words">Observe.
Question.
Make.</p><div class="target" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></div><p data-content="hero.posterBottom" class="poster-bottom">GOOD DESIGN STARTS WITH A GOOD QUESTION.</p></div><div class="hero-bottom"><span data-content="hero.sub" >ONLINE / SMALL GROUP / PROJECT BASED</span><span data-content="hero.edition" >2026 AUTUMN / OPEN PROGRAMS</span></div></section><section class="approach" id="approach"><div class="wrap"><div class="section-heading" data-reveal><div><p data-content="approach.label" class="eyebrow">01 / OUR APPROACH</p><h2 data-content="approach.headline" >センスの前に、
問いを持とう。</h2></div><p data-content="approach.body" >なぜ、この色なのか。なぜ、この順番なのか。
デザインを言葉にして確かめることから、つくる力は少しずつ育っていきます。</p></div><div class="approach-layout"><figure class="approach-photo photo" data-reveal><img class="" data-image="assets.approach" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&amp;fit=crop&amp;w=1400&amp;q=85" alt="机の上で資料を広げながら考える学習風景のイメージ写真" style="object-position:center" loading=lazy decoding="async" width="1200" height="900"></figure><div class="approach-steps"><article data-reveal><div class="step-top"><span data-content="approach.steps.0.number" >01</span><span data-content="approach.steps.0.en" >OBSERVE</span></div><h3 data-content="approach.steps.0.title" >観察する</h3><p data-content="approach.steps.0.body" >身近なサービスや暮らしを観察。誰の、どんな課題に向き合うかを見つけます。</p></article><article data-reveal><div class="step-top"><span data-content="approach.steps.1.number" >02</span><span data-content="approach.steps.1.en" >THINK</span></div><h3 data-content="approach.steps.1.title" >考えを組み立てる</h3><p data-content="approach.steps.1.body" >集めた材料を整理し、仮説と構成をつくる。見た目を決める前の思考を磨きます。</p></article><article data-reveal><div class="step-top"><span data-content="approach.steps.2.number" >03</span><span data-content="approach.steps.2.en" >MAKE &amp; REVIEW</span></div><h3 data-content="approach.steps.2.title" >つくって、確かめる</h3><p data-content="approach.steps.2.body" >手を動かして形にし、意図を説明する。レビューをもとに、もう一度つくります。</p></article></div></div></div></section><section class="course-section" id="course"><div class="wrap"><div class="section-heading" data-reveal><div><p data-content="course.label" class="eyebrow">02 / FIND YOUR PROGRAM</p><h2 data-content="course.headline" >今の自分から、
次の一歩を。</h2></div><p data-content="course.intro" >基礎を学びたい人も、表現の幅を広げたい人も。目的と使える時間に合わせて選べる、3つのプログラム。</p></div><div class="course-layout"><div class="course-options" role="tablist" aria-label="デザインコース"><button type="button" role="tab" id="course-tab-0" aria-controls="course-panel" aria-selected="true" tabindex="0" data-course="0" class="course-option active"><div class="option-top"><span data-content="course.courses.0.number" >01</span><span data-content="course.courses.0.duration" >12 WEEKS</span></div><span data-content="course.courses.0.name" class="course-name">Web design foundation</span><span data-content="course.courses.0.jp" class="course-jp">Webデザイン基礎</span><span data-content="course.courses.0.level" class="course-level">はじめて学ぶ方へ</span><span class="option-arrow" aria-hidden="true">↗</span></button><button type="button" role="tab" id="course-tab-1" aria-controls="course-panel" aria-selected="false" tabindex="-1" data-course="1" class="course-option "><div class="option-top"><span data-content="course.courses.1.number" >02</span><span data-content="course.courses.1.duration" >8 WEEKS</span></div><span data-content="course.courses.1.name" class="course-name">Brand design practice</span><span data-content="course.courses.1.jp" class="course-jp">ブランドデザイン実践</span><span data-content="course.courses.1.level" class="course-level">基礎の次に進みたい方へ</span><span class="option-arrow" aria-hidden="true">↗</span></button><button type="button" role="tab" id="course-tab-2" aria-controls="course-panel" aria-selected="false" tabindex="-1" data-course="2" class="course-option "><div class="option-top"><span data-content="course.courses.2.number" >03</span><span data-content="course.courses.2.duration" >4 WEEKS</span></div><span data-content="course.courses.2.name" class="course-name">Design review workshop</span><span data-content="course.courses.2.jp" class="course-jp">デザインレビュー演習</span><span data-content="course.courses.2.level" class="course-level">判断と言語化を磨きたい方へ</span><span class="option-arrow" aria-hidden="true">↗</span></button></div><div id="course-panel" class="course-panel" role="tabpanel" aria-labelledby="course-tab-0"><div class="panel-heading"><h3 data-content="course.courses.0.jp" id="course-title">Webデザイン基礎</h3><span data-content="course.courses.0.duration" id="course-duration">12 WEEKS</span></div><p data-content="course.courses.0.description" id="course-description">情報の整理から画面設計、Webページの制作まで。ひとつのサイトをつくりながら、デザインの基本を身につけます。</p><div class="modules" id="course-modules"><div class="module"><span data-content="course.courses.0.modules.0.week" >WEEK 01–03</span><h4 data-content="course.courses.0.modules.0.title" >観察と情報設計</h4><p data-content="course.courses.0.modules.0.body" >課題の整理 / リサーチ / ワイヤーフレーム</p></div><div class="module"><span data-content="course.courses.0.modules.1.week" >WEEK 04–08</span><h4 data-content="course.courses.0.modules.1.title" >見え方と体験の設計</h4><p data-content="course.courses.0.modules.1.body" >文字と余白 / 配色 / UIデザイン</p></div><div class="module"><span data-content="course.courses.0.modules.2.week" >WEEK 09–12</span><h4 data-content="course.courses.0.modules.2.title" >実装とプレゼンテーション</h4><p data-content="course.courses.0.modules.2.body" >HTML・CSS / 表示確認 / 制作意図の発表</p></div></div><p data-content="course.courses.0.outcome" id="course-outcome">完成させるもの：小さな事業のブランドサイト</p><div class="course-price"><div><small data-content="course.priceLabel" >受講料（税込）</small><strong data-content="course.courses.0.price" id="course-price" aria-live="polite">¥96,000</strong></div><p data-content="course.courses.0.format" id="course-format">オンライン / 週1回・120分</p></div><button data-content="course.cta" type="button" class="button" data-demo="Webデザイン基礎の説明会" id="course-cta">このコースの説明会を体験</button></div></div><p data-content="course.note" class="course-note">料金・日程は架空スクールの設定です。実際の申込や決済は行いません。</p></div></section><section class="flow wrap" id="flow"><div class="flow-copy" data-reveal><p data-content="flow.label" class="eyebrow">03 / BEFORE YOU BEGIN</p><h2 data-content="flow.headline" >学びの時間を、
暮らしの中へ。</h2><p data-content="flow.intro" class="flow-intro">無理のないペースで取り組めるように。始める前に、学び方と必要な準備を確認します。</p><div class="faq-list"><details open><summary><span data-content="flow.items.0.title" >01 / オンライン説明会</span><span aria-hidden="true">+</span></summary><p data-content="flow.items.0.body" >学習の目的や、確保できる時間を整理します。コースの内容や課題の進め方も確認できます。</p></details><details ><summary><span data-content="flow.items.1.title" >02 / 学習環境を準備</span><span aria-hidden="true">+</span></summary><p data-content="flow.items.1.body" >パソコン、インターネット環境、制作ツールを準備。コースに応じた事前案内に沿って始めます。</p></details><details ><summary><span data-content="flow.items.2.title" >03 / 制作とレビューを始める</span><span aria-hidden="true">+</span></summary><p data-content="flow.items.2.body" >毎週のセッションと自習を組み合わせて進行。つくったものと考えたことを持ち寄って、学びを重ねます。</p></details></div></div><figure class="flow-photo photo" data-reveal><img class="" data-image="assets.flow" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&amp;fit=crop&amp;w=1400&amp;q=85" alt="机を囲んで制作について話し合う人々のイメージ写真。講師や受講生の実写真ではありません" style="object-position:center" loading=lazy decoding="async" width="1200" height="900"></figure></section><section class="contact-section" id="contact"><div class="wrap contact" data-reveal><p data-content="contact.label" class="eyebrow">YOUR NEXT CHAPTER</p><h2 data-content="contact.headline">つくる人に、
なっていく。</h2><div class="contact-bottom"><p data-content="contact.body" >まずは、自分の学びたいことを話すところから。
コースの選び方を、説明会デモで確かめてみてください。</p><div><button data-content="contact.cta" type="button" class="button" data-demo="オンライン説明会">オンライン説明会を体験する</button><p data-content="contact.note" class="contact-note">所要時間の目安：30分 / オンライン</p></div></div><div class="contact-symbol" aria-hidden="true">↗</div></div></section></main><footer class="wrap"><div class="footer-brand"><a data-content="brand" href="#hero" class="wordmark">FORME LAB</a><p data-content="footer.tag" >OBSERVE. QUESTION. MAKE.</p></div><div class="footer-line"><small data-content="footer.copyright" >© 2026 FORME LAB</small><p data-content="footer.legal" class="legal">GENSEKI concept / 架空のブランド・外部送信なし。実際の受講申込・説明会予約は行いません。写真：Unsplash。</p></div></footer><script src="content.js"></script><script src="genseki.js"></script><script src="app.js"></script></body></html>
```

### style.css

```css file=style.css
*{box-sizing:border-box}html{scroll-behavior:smooth;scroll-padding-top:96px}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans JP","Hiragino Kaku Gothic ProN",Meiryo,sans-serif;-webkit-font-smoothing:antialiased}button,input,select{font:inherit}button,a{-webkit-tap-highlight-color:transparent}button{cursor:pointer}a{color:inherit;text-decoration:none}button:focus-visible,a:focus-visible,input:focus-visible{outline:3px solid currentColor;outline-offset:5px}img{width:100%;height:100%;object-fit:cover;display:block}h1,h2,h3,p,figure{margin:0}button{color:inherit}button:hover{transform:translateY(-2px)}button:active{transform:translateY(1px)}button,a{transition:transform .2s,background .2s,color .2s}section{scroll-margin-top:80px}.skip{position:fixed;top:8px;left:16px;z-index:1000;background:#fff;color:#171717;padding:14px;transform:translateY(-150%)}.skip:focus{transform:none}.wrap{width:min(1296px,calc(100% - 96px));margin:auto}.menu-toggle{display:none;min-width:48px;min-height:48px;background:none;border:1px solid currentColor;border-radius:50%;font-size:20px}.mobile-menu{position:absolute;top:76px;left:0;right:0;padding:24px;background:var(--paper);border-bottom:1px solid var(--line);z-index:99}.mobile-menu a{display:block;padding:16px 8px}.mobile-menu[hidden]{display:none!important}.eyebrow{font-size:11px;letter-spacing:.16em;font-weight:600;text-transform:uppercase}.button{display:inline-flex;align-items:center;justify-content:center;gap:18px;min-height:52px;padding:0 24px;border:0;white-space:nowrap}.button::after{content:"↗";font-size:18px}.photo{overflow:hidden}.photo img{transition:transform .7s}.photo:hover img{transform:scale(1.025)}.legal{font-size:10px;line-height:1.8;opacity:.65}.text-link{min-height:44px;display:inline-flex;align-items:center;gap:24px}.text-link::after{content:"↗"}.text-link:hover{transform:translateX(3px)}[data-content]{white-space:pre-line}.footer-line{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:24px 0;border-top:1px solid var(--line)}.footer-line .legal{max-width:560px}dialog{max-width:min(560px,calc(100% - 32px));border:0;padding:40px}dialog::backdrop{background:#1118}dialog button{min-height:44px} @media(max-width:760px){.wrap{width:calc(100% - 40px)}.desktop-nav{display:none!important}.menu-toggle{display:block}.footer-line{align-items:flex-start;flex-direction:column;gap:8px}.button{min-height:52px}.eyebrow{font-size:10px}}@media(prefers-reduced-motion:reduce){*,*::before,*::after{scroll-behavior:auto!important;animation:none!important;transition:none!important}}:root{--paper:#f3f0d8;--ink:#2646ba;--line:#cbcbb0;--surface:#e7e6ce}body{background:var(--paper);color:var(--ink)}.site-header{height:88px;display:flex;align-items:center;border-bottom:1px solid var(--ink);gap:44px;position:relative;z-index:10}.wordmark{font-weight:800;letter-spacing:-.07em;font-size:25px}.desktop-nav{display:flex;gap:35px;margin-left:auto;font-size:11px;font-weight:500}.desktop-nav a{padding:15px 0}.desktop-nav a:hover{text-decoration:underline;text-underline-offset:6px}.header-cta{background:var(--ink);border:0;color:var(--paper);padding:14px 20px;font-size:11px;min-height:44px}.hero{min-height:812px;display:grid;grid-template-columns:1fr .9fr;column-gap:100px;position:relative;align-items:center;padding-top:28px;padding-bottom:90px}.hero .eyebrow{font-size:8px;letter-spacing:.14em}.hero h1{font-size:76px;letter-spacing:-.055em;line-height:1.27;font-weight:650;margin:33px 0 26px}.hero-body{font-size:12px;line-height:2.1;max-width:390px}.button{border:1px solid var(--ink);background:var(--ink);color:var(--paper);font-size:11px;padding:0 23px;gap:28px}.button:hover{background:#1f3a9b}.hero .button{margin-top:27px}.poster{background:var(--ink);color:var(--paper);height:585px;padding:29px 30px;position:relative;overflow:hidden;box-shadow:14px 14px 0 #d6d7ba}.poster-top{display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #a5add3;padding-bottom:18px}.poster-top p{font-size:7px;letter-spacing:.13em}.poster-cross{font-size:25px;font-weight:300}.poster-words{font-family:Georgia,serif;font-size:62px;line-height:1.06;letter-spacing:-.06em;margin-top:38px;position:relative;z-index:1}.poster-bottom{position:absolute;bottom:24px;left:30px;right:30px;border-top:1px solid #a5add3;padding-top:17px;font-size:7px;letter-spacing:.06em}.target{position:absolute;right:21px;bottom:65px;width:235px;height:235px;border:1px solid #b3bada;border-radius:50%;display:grid;place-items:center}.target::before,.target::after{content:'';position:absolute;background:#b3bada}.target::before{width:1px;height:270px}.target::after{height:1px;width:270px}.target i{position:absolute;border:1px solid #b3bada;border-radius:50%;width:calc(100% - 30px);height:calc(100% - 30px)}.target i:nth-child(2){width:calc(100% - 60px);height:calc(100% - 60px)}.target i:nth-child(3){width:calc(100% - 90px);height:calc(100% - 90px)}.target i:nth-child(4){width:calc(100% - 120px);height:calc(100% - 120px)}.target i:nth-child(5){width:calc(100% - 150px);height:calc(100% - 150px)}.target i:nth-child(6){width:calc(100% - 180px);height:calc(100% - 180px)}.hero-bottom{position:absolute;bottom:25px;left:0;right:0;border-top:1px solid var(--line);padding-top:22px;display:flex;align-items:center;justify-content:space-between;font-size:8px;letter-spacing:.09em}.approach{background:#e4e4d2;min-height:900px;padding:90px 0;display:flex;align-items:center}.section-heading{display:flex;align-items:flex-end;justify-content:space-between;gap:80px;margin-bottom:60px}.section-heading .eyebrow{font-size:9px}h2{font-size:42px;line-height:1.45;letter-spacing:-.045em;font-weight:500}.section-heading h2{margin-top:25px}.section-heading>p{max-width:390px;font-size:12px;line-height:2.1;color:#556482}.approach-layout{display:grid;grid-template-columns:1.1fr 1fr;gap:85px;align-items:stretch}.approach-photo{height:430px}.approach-photo img{filter:saturate(.6)}.approach-steps{display:flex;flex-direction:column;justify-content:space-between}.approach-steps article{padding:0 0 23px;border-bottom:1px solid #b5bdc2}.step-top{display:flex;justify-content:space-between;font-size:8px;letter-spacing:.07em}.approach-steps h3{font-size:22px;letter-spacing:-.04em;font-weight:500;margin:13px 0 10px}.approach-steps article>p{font-size:11px;line-height:1.9;color:#556482;max-width:400px}.course-section{background:#2646ba;color:var(--paper);padding:90px 0;min-height:1100px;display:flex;align-items:center}.course-section .section-heading>p{color:#b7bde0}.course-layout{display:grid;grid-template-columns:.9fr 1.1fr;gap:80px}.course-options{display:flex;flex-direction:column}.course-option{background:transparent;color:#aeb9e4;border:0;border-top:1px solid #8798d6;padding:26px 28px 26px 0;text-align:left;position:relative;min-height:164px}.course-option:last-child{border-bottom:1px solid #8798d6}.course-option.active{color:var(--paper)}.course-option:hover{transform:translateX(3px)}.option-top{display:flex;align-items:center;justify-content:space-between;font-size:8px;letter-spacing:.12em;margin-bottom:17px}.course-name{font-family:Georgia,serif;letter-spacing:-.045em;font-size:27px;display:block}.course-jp{display:block;font-size:12px;margin-top:11px}.course-level{display:block;font-size:9px;margin-top:18px;opacity:.7}.option-arrow{position:absolute;right:2px;bottom:30px;font-size:29px;opacity:0}.course-option.active .option-arrow{opacity:1}.course-panel{background:#f5f1d9;color:#2745ad;padding:34px 35px;min-width:0}.panel-heading{display:flex;justify-content:space-between;align-items:flex-start;gap:14px}.panel-heading h3{font-size:21px;font-weight:550;line-height:1.5;letter-spacing:-.04em}.panel-heading>span{font-size:9px;padding-top:7px;white-space:nowrap}.course-panel>p:first-of-type{font-size:11px;line-height:2;color:#556482;margin-top:20px}.modules{margin-top:25px;border-top:1px solid #b6bed3}.module{padding:18px 0;border-bottom:1px solid #c3c8d3}.module>span{font-size:8px;letter-spacing:.07em}.module h4{font-size:14px;font-weight:550;margin:9px 0}.module p{font-size:9px;color:#556482;line-height:1.8}.course-panel>p#course-outcome{font-size:9px;line-height:1.8;margin-top:18px;color:#556482}.course-price{display:flex;align-items:flex-end;justify-content:space-between;margin-top:24px;gap:20px}.course-price small{font-size:8px;display:block;margin-bottom:8px;color:#556482}.course-price strong{font-size:35px;font-weight:450;line-height:1.1;letter-spacing:-.05em}.course-price>p{font-size:8px;color:#556482;line-height:1.8;text-align:right;margin-bottom:4px}.course-panel .button{width:100%;margin-top:25px;justify-content:space-between;font-size:11px}.course-note{font-size:9px;line-height:1.8;color:#a9b7df;margin-top:24px;max-width:600px;margin-left:auto}.flow{min-height:900px;padding-top:90px;padding-bottom:90px;display:grid;grid-template-columns:1fr 1fr;gap:95px;align-items:center}.flow-copy .eyebrow{font-size:9px}.flow h2{margin-top:25px}.flow-intro{font-size:12px;color:#556482;line-height:2;max-width:400px;margin:25px 0 40px}.flow-photo{height:590px}.flow-photo img{filter:saturate(.65)}.faq-list{border-top:1px solid #b6bfd0}details{border-bottom:1px solid #b6bfd0}summary{display:flex;justify-content:space-between;align-items:center;gap:14px;min-height:65px;font-size:12px;cursor:pointer;list-style:none;padding:15px 0}summary::-webkit-details-marker{display:none}summary>span:last-child{font-size:20px;line-height:1}details[open] summary>span:last-child{transform:rotate(45deg)}details>p{font-size:11px;line-height:2;color:#556482;padding:0 28px 22px 0}.contact-section{background:#dfe29d}.contact{min-height:780px;position:relative;display:flex;flex-direction:column;justify-content:center;padding-top:80px;padding-bottom:85px}.contact>.eyebrow{font-size:9px}.contact h2{font-size:82px;line-height:1.2;letter-spacing:-.06em;font-weight:550;margin:40px 0}.contact-bottom{display:flex;align-items:center;justify-content:space-between;gap:70px}.contact-bottom>p{font-size:12px;line-height:2;color:#556482}.contact-bottom .button{min-width:300px}.contact-note{text-align:right;font-size:9px;color:#556482;margin-top:13px}.contact-symbol{position:absolute;right:35px;top:165px;font-size:185px;line-height:1;font-weight:300;opacity:.85}.footer-brand{display:flex;align-items:center;justify-content:space-between;padding:35px 0}.footer-brand p{font-size:9px;letter-spacing:.13em}.footer-line{font-size:9px}.footer-line .legal{font-size:9px;opacity:.65}@media(max-width:1100px){.hero{gap:65px}.hero h1{font-size:65px}.poster{height:560px;padding:25px}.poster-words{font-size:52px}.target{width:200px;height:200px;bottom:75px}.target::before{height:225px}.target::after{width:225px}.approach-layout{gap:55px}.course-layout{gap:45px}.course-name{font-size:23px}.course-panel{padding:28px}.flow{gap:55px}.contact h2{font-size:72px}.contact-symbol{font-size:160px;right:15px}}@media(max-width:760px){.site-header{height:76px;gap:15px}.wordmark{font-size:20px}.header-cta{margin-left:auto;font-size:9px;padding:12px}.menu-toggle{font-size:8px;border-radius:0;min-width:44px;min-height:44px}.hero{min-height:auto;display:flex;flex-direction:column;gap:44px;align-items:stretch;padding-top:40px;padding-bottom:100px}.hero .eyebrow{font-size:7px;letter-spacing:.08em}.hero h1{font-size:64px;line-height:1.2;margin:28px 0}.hero-body{font-size:11px;line-height:2}.hero .button{margin-top:24px;width:100%;justify-content:space-between;font-size:11px}.poster{height:430px;max-width:480px;width:calc(100% - 9px);padding:24px;box-shadow:9px 9px 0 #d6d7ba}.poster-top{padding-bottom:14px}.poster-top p{font-size:6px}.poster-words{font-size:54px;margin-top:26px;line-height:1.03}.target{width:165px;height:165px;right:25px;bottom:50px}.target::before{height:190px}.target::after{width:190px}.target i{width:calc(100% - 23px);height:calc(100% - 23px)}.target i:nth-child(2){width:calc(100% - 46px);height:calc(100% - 46px)}.target i:nth-child(3){width:calc(100% - 69px);height:calc(100% - 69px)}.target i:nth-child(4){width:calc(100% - 92px);height:calc(100% - 92px)}.target i:nth-child(5){width:calc(100% - 115px);height:calc(100% - 115px)}.target i:nth-child(6){width:calc(100% - 138px);height:calc(100% - 138px)}.poster-bottom{font-size:6px;bottom:18px;left:24px;right:24px;padding-top:12px}.hero-bottom{font-size:6px;bottom:25px;letter-spacing:.02em;gap:15px}.hero-bottom>span:first-child{max-width:57%}.hero-bottom>span:last-child{text-align:right;max-width:42%}.approach{min-height:auto;padding:70px 0}.section-heading{display:block;margin-bottom:35px}.section-heading .eyebrow{font-size:8px}.section-heading h2{margin-top:22px}h2{font-size:32px}.section-heading>p{max-width:none;font-size:11px;margin-top:25px;line-height:2}.approach-layout{grid-template-columns:1fr;gap:35px}.approach-photo{height:270px}.approach-steps{gap:25px}.approach-steps h3{font-size:22px}.approach-steps article>p{font-size:11px}.course-section{padding:70px 0;min-height:auto}.course-layout{grid-template-columns:1fr;gap:35px}.course-option{padding:20px 25px 20px 0;min-height:145px}.course-name{font-size:27px}.course-jp{font-size:11px}.course-level{font-size:9px;margin-top:12px}.option-top{font-size:8px;margin-bottom:13px}.option-arrow{bottom:20px;font-size:25px}.course-panel{padding:25px 22px}.panel-heading h3{font-size:19px}.panel-heading>span{font-size:8px}.course-panel>p:first-of-type{font-size:11px;margin-top:17px}.module h4{font-size:14px}.module p{font-size:9px}.course-price{gap:10px}.course-price strong{font-size:33px}.course-price>p{font-size:8px;max-width:130px}.course-panel .button{font-size:10px;padding:0 16px;gap:14px}.course-note{font-size:8px;max-width:none;margin-top:20px}.flow{min-height:auto;padding-top:70px;padding-bottom:65px;grid-template-columns:1fr;gap:40px}.flow h2{margin-top:23px}.flow-intro{font-size:11px;margin:23px 0 30px}.flow-photo{height:370px}.flow-copy .eyebrow{font-size:8px}summary{font-size:11px;min-height:62px}details>p{font-size:11px;line-height:2}.contact{min-height:660px;padding-top:70px;padding-bottom:65px}.contact h2{font-size:53px;line-height:1.3;position:relative;z-index:1;margin:35px 0}.contact-symbol{font-size:100px;top:140px;right:0;opacity:.35}.contact-bottom{display:block}.contact-bottom>p{font-size:11px;line-height:2;position:relative;z-index:1}.contact-bottom .button{min-width:0;width:100%;margin-top:32px;font-size:11px;padding:0 18px;justify-content:space-between}.contact-note{font-size:8px}.footer-brand{padding:30px 0;gap:25px}.footer-brand p{font-size:7px;text-align:right;max-width:150px;line-height:1.8}.footer-line,.footer-line .legal{font-size:8px}.footer-line{padding-top:22px;padding-bottom:25px}}

/* Keep content visible when JavaScript or a browser motion API is unavailable. */
[data-reveal]{opacity:1} .legal{opacity:1}

.hero{min-height:calc(100svh - 88px)}@media(max-width:760px){.hero{min-height:calc(100svh - 76px)}}
.hero-body,.section-heading>p,.flow-intro,.contact-bottom>p{font-size:14px}.approach-steps article>p,.course-panel>p:first-of-type,details>p{font-size:13px}.module p{font-size:11px}.course-panel>p#course-outcome,.course-price small,.course-price>p,.course-note,.contact-note{font-size:10px}.course-name{font-size:26px}.course-level{font-size:10px}.course-jp{font-size:13px}@media(max-width:760px){.hero-body,.section-heading>p,.flow-intro,.contact-bottom>p,.approach-steps article>p,.course-panel>p:first-of-type,details>p{font-size:12px}.module p{font-size:11px}.course-panel>p#course-outcome,.course-price small,.course-price>p,.course-note,.contact-note{font-size:9px}.course-name{font-size:26px}}
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
(()=>{const courses=window.SITE_CONTENT.course.courses;const tabs=[...document.querySelectorAll('[data-course]')];const panel=document.getElementById('course-panel');const fields={title:'jp',duration:'duration',description:'description',outcome:'outcome',price:'price',format:'format'};function select(index){const course=courses[index];tabs.forEach((tab,i)=>{tab.setAttribute('aria-selected',String(i===index));tab.tabIndex=i===index?0:-1;tab.classList.toggle('active',i===index)});panel.setAttribute('aria-labelledby',`course-tab-${index}`);Object.entries(fields).forEach(([id,key])=>{const node=document.getElementById(`course-${id}`);node.textContent=course[key];node.dataset.content=`course.courses.${index}.${key}`});const list=document.getElementById('course-modules');list.replaceChildren();course.modules.forEach((m,i)=>{const row=document.createElement('div');row.className='module';for(const [tag,key]of[['span','week'],['h4','title'],['p','body']]){const el=document.createElement(tag);el.textContent=m[key];el.dataset.content=`course.courses.${index}.modules.${i}.${key}`;row.append(el)}list.append(row)});document.getElementById('course-cta').dataset.demo=`${course.jp}${window.SITE_CONTENT.course.demoSuffix}`}tabs.forEach((tab,i)=>{tab.addEventListener('click',()=>select(i));tab.addEventListener('keydown',e=>{let target;if(['ArrowRight','ArrowDown'].includes(e.key))target=(i+1)%tabs.length;if(['ArrowLeft','ArrowUp'].includes(e.key))target=(i-1+tabs.length)%tabs.length;if(e.key==='Home')target=0;if(e.key==='End')target=tabs.length-1;if(target!==undefined){e.preventDefault();select(target);tabs[target].focus()}})})})();
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
