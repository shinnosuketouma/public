# ORVEIN — 会話の先に、仕事が進む。 — 編集欄つき・実装固定プロンプト v1

日本向けWebサイトを次の仕様・参照実装で制作してください。
このプロンプトはGENSEKI独自制作の gs-001 / v1 に対応します。
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
  "brand": "ORVEIN",
  "skip": "本文へ移動",
  "nav": {
    "product": "プロダクト",
    "workflow": "使い方",
    "pricing": "料金",
    "cta": "デモを体験する",
    "menu": "メニュー"
  },
  "eyebrow": "MEETINGS END. WORK BEGINS.",
  "headline": "会話の先に、\n仕事が進む。",
  "intro": "議事録を、読むだけで終わらせない。\nORVEINは会議の記録から、決定事項と次の仕事を整理するAIワークスペースです。",
  "heroCta": "ワークスペースを体験",
  "heroNote": "登録不要のインタラクティブデモ",
  "heroFoot": "会話からタスクまで、ひとつの流れに。",
  "heroFootRight": "MEETING → DECISION → ACTION",
  "app": {
    "workspace": "Product team",
    "space": "ワークスペース",
    "nav1": "ミーティング",
    "nav2": "アクション",
    "nav3": "ナレッジ",
    "bottom": "チーム設定",
    "initial": "P",
    "label": "AI WORKSPACE",
    "status": "整理済み",
    "source": "ミーティングノート",
    "result": "NEXT ACTIONS",
    "date": "11月13日（金） 10:00–10:30",
    "note": "デモ用の会議データです",
    "tabs": [
      "商品開発",
      "営業商談",
      "採用面談"
    ],
    "presets": [
      {
        "title": "新機能リリースの定例",
        "transcript": "佐藤：先行公開は来週の火曜にしましょう。\n田中：オンボーディングの画面は月曜までに調整します。\n佐藤：では利用ガイドの公開も火曜に揃えてください。",
        "summary": "先行公開日を11月17日（火）に決定。体験導線と利用ガイドを同じ日程で揃える。",
        "tasks": [
          {
            "title": "オンボーディング画面を調整",
            "owner": "田中",
            "due": "11/16"
          },
          {
            "title": "利用ガイドを公開",
            "owner": "佐藤",
            "due": "11/17"
          },
          {
            "title": "先行公開の案内を準備",
            "owner": "チーム",
            "due": "11/17"
          }
        ]
      },
      {
        "title": "新規導入のご相談",
        "transcript": "担当：まずは制作チーム5名で試したいです。\n営業：権限設定の資料を本日お送りします。\n担当：来週水曜に、実際の運用を一緒に確認できますか。",
        "summary": "制作チーム5名での検証を計画。権限資料を共有し、11月18日に運用確認を行う。",
        "tasks": [
          {
            "title": "権限設定の資料を共有",
            "owner": "営業",
            "due": "11/13"
          },
          {
            "title": "検証メンバー5名を確定",
            "owner": "担当",
            "due": "11/17"
          },
          {
            "title": "運用確認の場を設定",
            "owner": "営業",
            "due": "11/18"
          }
        ]
      },
      {
        "title": "デザイナー採用の面談",
        "transcript": "面接官：次回は制作プロセスを詳しく聞かせてください。\n候補者：ポートフォリオの資料を月曜までに共有します。\n面接官：木曜の14時から次の面談にしましょう。",
        "summary": "次回は制作プロセスを中心に確認。資料共有の後、11月19日14時に面談を行う。",
        "tasks": [
          {
            "title": "制作資料を共有",
            "owner": "候補者",
            "due": "11/16"
          },
          {
            "title": "面談の確認項目を整理",
            "owner": "面接官",
            "due": "11/18"
          },
          {
            "title": "次回面談の案内を送付",
            "owner": "面接官",
            "due": "11/19"
          }
        ]
      }
    ],
    "summaryLabel": "決まったこと",
    "taskCta": "タスクを確認",
    "taskDone": "確認済み",
    "progress": "0 / 3 確認済み"
  },
  "workflow": {
    "label": "01 / FROM NOTES TO NEXT",
    "headline": "記録と実行の、\nあいだをなくす。",
    "intro": "会議の後に必要なのは、もう一度内容を読み直す時間より、次に動ける見通しです。",
    "steps": [
      {
        "number": "01",
        "title": "会話を置く",
        "body": "会議のメモや文字起こしを貼り付け。文脈をひとつにまとめます。",
        "tag": "INPUT",
        "detail": "会議メモ・文字起こし"
      },
      {
        "number": "02",
        "title": "決定を見つける",
        "body": "決まったこと、保留のこと、次に確認することを分けて整理。",
        "tag": "UNDERSTAND",
        "detail": "決定事項・検討事項"
      },
      {
        "number": "03",
        "title": "次の仕事にする",
        "body": "担当と期限を確認して、チームのアクションに。最後の判断は、人の手で。",
        "tag": "TAKE ACTION",
        "detail": "担当者・期限・タスク"
      }
    ]
  },
  "clarity": {
    "label": "02 / DESIGNED FOR CLARITY",
    "headline": "仕事の輪郭が、\nひと目でわかる。",
    "intro": "会話の量を増やすのではなく、行き先を揃える。チームが同じ判断に立ち戻れる、小さな仕組みをつくりました。",
    "features": [
      {
        "title": "文脈ごと、残す。",
        "body": "タスクの出どころを会議メモと一緒に確認。どうして決まったのかを見失いません。"
      },
      {
        "title": "確認してから、動く。",
        "body": "AIの整理は提案です。担当者や期限を人が確認し、次の一歩を決められます。"
      },
      {
        "title": "仕事の場所を、分ける。",
        "body": "商品開発・営業・採用。会議の目的に合わせて、必要な情報に集中できます。"
      }
    ],
    "quote": "Less searching.\nMore doing.",
    "quoteNote": "チームの時間を、前に進む仕事へ。"
  },
  "pricing": {
    "label": "03 / SIMPLE PRICING",
    "headline": "チームの大きさに、\nちょうどいいプラン。",
    "note": "すべて税抜。以下は架空サービスの料金設定です。",
    "plans": [
      {
        "name": "Personal",
        "price": "¥0",
        "period": "/ 月",
        "description": "自分の会議から、整理をはじめる。",
        "features": "月5件のミーティング\n個人ワークスペース\nアクションの確認・整理",
        "cta": "Personalを体験"
      },
      {
        "name": "Team",
        "price": "¥1,480",
        "period": "/ 人・月",
        "description": "チームで、次の仕事までつなげる。",
        "features": "月50件 / 人のミーティング\nチームワークスペース\nメンバー・閲覧権限の管理",
        "cta": "Teamを体験"
      }
    ],
    "recommend": "FOR YOUR TEAM"
  },
  "contact": {
    "label": "START WITH ONE MEETING",
    "headline": "次の会議から、\n一歩先へ。",
    "body": "まずはサンプルの会議で、ORVEINの整理を体験してください。",
    "cta": "デモを体験する"
  },
  "footer": {
    "tag": "Turn conversations into momentum.",
    "copyright": "© 2026 ORVEIN",
    "legal": "GENSEKI concept / 架空のブランド・外部送信なし。デモは会議データの分析・保存を行いません。"
  },
  "assets": {}
};
```
<!-- GENSEKI:EDITABLE:END -->

## 2. 固定するデザインと動作

以下は編集せず、そのまま実装してください。独自のデザイン判断を足さないでください。
```json
{
  "genre_id": "G01",
  "seed_id": "G01-01",
  "title": "ORVEIN — 会話の先に、仕事が進む。",
  "kind": "software",
  "category": "議事録・業務整理AI",
  "primary_action": "デモを体験する",
  "direction": "白と冷たい青の精密なプロダクトUI。split heroと大きなserif type momentで仕事の整理を視覚化。",
  "sections": [
    {
      "id": "product",
      "purpose": "製品の用途理解と実操作",
      "layout": "左見出し40%・右live app60%、下部細罫"
    },
    {
      "id": "workflow",
      "purpose": "3段階の処理理解",
      "layout": "淡青ground、3column flow diagrams"
    },
    {
      "id": "clarity",
      "purpose": "設計思想・人の確認",
      "layout": "左巨大italic type・右3ruled features"
    },
    {
      "id": "pricing",
      "purpose": "プラン比較",
      "layout": "2price cards、Team outline"
    },
    {
      "id": "contact",
      "purpose": "デモ再体験",
      "layout": "左大見出し・右asterisk"
    }
  ],
  "tokens": {
    "paper": "#f9faff",
    "ink": "#18243b",
    "accent": "#3151d3",
    "surface": "#ecf1fa",
    "line": "#dbe2f0",
    "font": "system Japanese sans + Georgia",
    "max_width": 1296,
    "desktop_gutter": 48,
    "mobile_gutter": 20,
    "radius": 7
  },
  "interactions": [
    "商品開発/営業商談/採用面談のtabで会議・要約・タスクを切替",
    "タスク確認buttonでcheck状態と進捗を更新",
    "tabの左右キー/Home/Endに対応",
    "CTAは共通デモdialog、外部送信なし"
  ],
  "mobile": "760px以下はhero stack。sidebarを1100pxで隠す。390pxでも会議メモとtaskを全て読める。",
  "editable_notes": "content.jsの全表示文・会議例・料金を編集。assetsなし。UIの階層・寸法・配色は固定仕様。",
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
<html lang="ja" data-type="software"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>ORVEIN — 会話の先に、 仕事が進む。</title><meta name="description" content="議事録を、読むだけで終わらせない。 ORVEINは会議の記録から、決定事項と次の仕事を整理するAIワークスペースです。"><meta name="page-type" content="software"><meta name="site-kind" content="software"><meta name="theme-color" content="#f4f7fe"><meta property="og:title" content="ORVEIN — 会話の先に、 仕事が進む。"><meta property="og:description" content="議事録を、読むだけで終わらせない。 ORVEINは会議の記録から、決定事項と次の仕事を整理するAIワークスペースです。"><meta property="og:type" content="website"><link rel="stylesheet" href="style.css"><meta name="twitter:card" content="summary_large_image"></head><body><a data-content="skip" href="#main" class="skip">本文へ移動</a><header class="site-header wrap"><a data-content="brand" href="#product" class="wordmark">ORVEIN</a><nav class="desktop-nav"><a data-content="nav.product" href="#product" class="">プロダクト</a><a data-content="nav.workflow" href="#workflow" class="">使い方</a><a data-content="nav.pricing" href="#pricing" class="">料金</a></nav><a data-content="nav.cta" href="#product" class="nav-cta">デモを体験する</a><button data-content="nav.menu" type="button" class="menu-toggle" data-menu-toggle aria-expanded="false" aria-controls="mobile-nav">メニュー</button><nav id="mobile-nav" class="mobile-menu" data-menu hidden><a data-content="nav.product" href="#product" class="">プロダクト</a><a data-content="nav.workflow" href="#workflow" class="">使い方</a><a data-content="nav.pricing" href="#pricing" class="">料金</a></nav></header><main id="main"><section class="hero wrap" id="product" data-enter><div class="hero-copy"><p data-content="eyebrow" class="eyebrow">MEETINGS END. WORK BEGINS.</p><h1 data-content="headline" >会話の先に、
仕事が進む。</h1><p data-content="intro" class="intro">議事録を、読むだけで終わらせない。
ORVEINは会議の記録から、決定事項と次の仕事を整理するAIワークスペースです。</p><a data-content="heroCta" href="#workspace" class="button primary">ワークスペースを体験</a><p data-content="heroNote" class="hero-note">登録不要のインタラクティブデモ</p></div><div class="app-shell" id="workspace"><div class="app-chrome"><div class="dots" aria-hidden="true"><i></i><i></i><i></i></div><span data-content="app.label" >AI WORKSPACE</span><span class="app-mark" aria-hidden="true">✳</span></div><div class="app-layout"><aside class="app-sidebar"><div class="space-title"><b data-content="app.initial" >P</b><span data-content="app.workspace" >Product team</span></div><small data-content="app.space" >ワークスペース</small><div class="side-active"><span data-content="app.nav1" >ミーティング</span></div><div><span data-content="app.nav2" >アクション</span></div><div><span data-content="app.nav3" >ナレッジ</span></div><p data-content="app.bottom" class="sidebar-bottom">チーム設定</p></aside><div class="app-main"><div class="app-tabbar" role="tablist" aria-label="会議の用途"><button data-content="app.tabs.0" type="button" class="case-tab active" role="tab" id="case-tab-0" aria-controls="case-panel" aria-selected="true" tabindex="0" data-case="0">商品開発</button><button data-content="app.tabs.1" type="button" class="case-tab" role="tab" id="case-tab-1" aria-controls="case-panel" aria-selected="false" tabindex="-1" data-case="1">営業商談</button><button data-content="app.tabs.2" type="button" class="case-tab" role="tab" id="case-tab-2" aria-controls="case-panel" aria-selected="false" tabindex="-1" data-case="2">採用面談</button></div><div id="case-panel" role="tabpanel" aria-labelledby="case-tab-0"><div class="app-title"><h2 data-content="app.presets.0.title" id="meeting-title">新機能リリースの定例</h2><span data-content="app.status" class="status">整理済み</span></div><p data-content="app.date" class="meeting-date">11月13日（金） 10:00–10:30</p><div class="note-row"><div class="meeting-note"><h3 data-content="app.source" >ミーティングノート</h3><p data-content="app.presets.0.transcript" id="meeting-transcript">佐藤：先行公開は来週の火曜にしましょう。
田中：オンボーディングの画面は月曜までに調整します。
佐藤：では利用ガイドの公開も火曜に揃えてください。</p></div><div class="decision"><h3 data-content="app.summaryLabel" >決まったこと</h3><p data-content="app.presets.0.summary" id="meeting-summary">先行公開日を11月17日（火）に決定。体験導線と利用ガイドを同じ日程で揃える。</p></div></div><div class="task-head"><h3 data-content="app.result" >NEXT ACTIONS</h3><span data-content="app.progress" id="task-progress" aria-live="polite">0 / 3 確認済み</span></div><div class="tasks" id="meeting-tasks"><button class="task" type="button" aria-pressed="false" data-task="0"><span class="checkbox" aria-hidden="true"></span><span class="task-name"><span data-content="app.presets.0.tasks.0.title" >オンボーディング画面を調整</span></span><small data-content="app.presets.0.tasks.0.owner" >田中</small><small data-content="app.presets.0.tasks.0.due" >11/16</small></button><button class="task" type="button" aria-pressed="false" data-task="1"><span class="checkbox" aria-hidden="true"></span><span class="task-name"><span data-content="app.presets.0.tasks.1.title" >利用ガイドを公開</span></span><small data-content="app.presets.0.tasks.1.owner" >佐藤</small><small data-content="app.presets.0.tasks.1.due" >11/17</small></button><button class="task" type="button" aria-pressed="false" data-task="2"><span class="checkbox" aria-hidden="true"></span><span class="task-name"><span data-content="app.presets.0.tasks.2.title" >先行公開の案内を準備</span></span><small data-content="app.presets.0.tasks.2.owner" >チーム</small><small data-content="app.presets.0.tasks.2.due" >11/17</small></button></div><p data-content="app.note" class="app-note">デモ用の会議データです</p></div></div></div></div><div class="hero-rule"><span data-content="heroFoot" >会話からタスクまで、ひとつの流れに。</span><span data-content="heroFootRight" >MEETING → DECISION → ACTION</span></div></section><section id="workflow" class="workflow"><div class="wrap"><div class="section-heading" data-reveal><div><p data-content="workflow.label" class="eyebrow">01 / FROM NOTES TO NEXT</p><h2 data-content="workflow.headline" >記録と実行の、
あいだをなくす。</h2></div><p data-content="workflow.intro" >会議の後に必要なのは、もう一度内容を読み直す時間より、次に動ける見通しです。</p></div><div class="workflow-grid"><article class="flow" data-reveal><span data-content="workflow.steps.0.number" class="step-number">01</span><div class="flow-visual" aria-hidden="true"><div class="flow-lines"><i></i><i></i><i></i></div><span class="flow-orb"></span><div class="flow-mini"><i></i><i></i></div></div><p data-content="workflow.steps.0.tag" class="eyebrow">INPUT</p><h3 data-content="workflow.steps.0.title" >会話を置く</h3><p data-content="workflow.steps.0.body" >会議のメモや文字起こしを貼り付け。文脈をひとつにまとめます。</p><span data-content="workflow.steps.0.detail" class="step-detail">会議メモ・文字起こし</span></article><article class="flow" data-reveal><span data-content="workflow.steps.1.number" class="step-number">02</span><div class="flow-visual" aria-hidden="true"><div class="flow-lines"><i></i><i></i><i></i></div><span class="flow-orb"></span><div class="flow-mini"><i></i><i></i></div></div><p data-content="workflow.steps.1.tag" class="eyebrow">UNDERSTAND</p><h3 data-content="workflow.steps.1.title" >決定を見つける</h3><p data-content="workflow.steps.1.body" >決まったこと、保留のこと、次に確認することを分けて整理。</p><span data-content="workflow.steps.1.detail" class="step-detail">決定事項・検討事項</span></article><article class="flow" data-reveal><span data-content="workflow.steps.2.number" class="step-number">03</span><div class="flow-visual" aria-hidden="true"><div class="flow-lines"><i></i><i></i><i></i></div><span class="flow-orb"></span><div class="flow-mini"><i></i><i></i></div></div><p data-content="workflow.steps.2.tag" class="eyebrow">TAKE ACTION</p><h3 data-content="workflow.steps.2.title" >次の仕事にする</h3><p data-content="workflow.steps.2.body" >担当と期限を確認して、チームのアクションに。最後の判断は、人の手で。</p><span data-content="workflow.steps.2.detail" class="step-detail">担当者・期限・タスク</span></article></div></div></section><section class="clarity wrap" id="clarity"><div class="clarity-type" data-reveal><p data-content="clarity.label" class="eyebrow">02 / DESIGNED FOR CLARITY</p><p data-content="clarity.quote" class="type-moment">Less searching.
More doing.</p><p data-content="clarity.quoteNote" class="quote-note">チームの時間を、前に進む仕事へ。</p></div><div class="clarity-content" data-reveal><h2 data-content="clarity.headline" >仕事の輪郭が、
ひと目でわかる。</h2><p data-content="clarity.intro" class="clarity-intro">会話の量を増やすのではなく、行き先を揃える。チームが同じ判断に立ち戻れる、小さな仕組みをつくりました。</p><article><h3 data-content="clarity.features.0.title" >文脈ごと、残す。</h3><p data-content="clarity.features.0.body" >タスクの出どころを会議メモと一緒に確認。どうして決まったのかを見失いません。</p></article><article><h3 data-content="clarity.features.1.title" >確認してから、動く。</h3><p data-content="clarity.features.1.body" >AIの整理は提案です。担当者や期限を人が確認し、次の一歩を決められます。</p></article><article><h3 data-content="clarity.features.2.title" >仕事の場所を、分ける。</h3><p data-content="clarity.features.2.body" >商品開発・営業・採用。会議の目的に合わせて、必要な情報に集中できます。</p></article></div></section><section class="pricing" id="pricing"><div class="wrap"><div class="section-heading" data-reveal><div><p data-content="pricing.label" class="eyebrow">03 / SIMPLE PRICING</p><h2 data-content="pricing.headline" >チームの大きさに、
ちょうどいいプラン。</h2></div><p data-content="pricing.note" class="price-note">すべて税抜。以下は架空サービスの料金設定です。</p></div><div class="price-grid"><article class="price-card " data-reveal><h3 data-content="pricing.plans.0.name" >Personal</h3><p data-content="pricing.plans.0.description" >自分の会議から、整理をはじめる。</p><div class="price"><strong data-content="pricing.plans.0.price" >¥0</strong><span data-content="pricing.plans.0.period" >/ 月</span></div><p data-content="pricing.plans.0.features" class="plan-features">月5件のミーティング
個人ワークスペース
アクションの確認・整理</p><button data-content="pricing.plans.0.cta" type="button" class="button secondary" data-demo="Personalプランの体験">Personalを体験</button></article><article class="price-card featured" data-reveal><div class="plan-tag"><span data-content="pricing.recommend" >FOR YOUR TEAM</span></div><h3 data-content="pricing.plans.1.name" >Team</h3><p data-content="pricing.plans.1.description" >チームで、次の仕事までつなげる。</p><div class="price"><strong data-content="pricing.plans.1.price" >¥1,480</strong><span data-content="pricing.plans.1.period" >/ 人・月</span></div><p data-content="pricing.plans.1.features" class="plan-features">月50件 / 人のミーティング
チームワークスペース
メンバー・閲覧権限の管理</p><button data-content="pricing.plans.1.cta" type="button" class="button primary" data-demo="Teamプランの体験">Teamを体験</button></article></div></div></section><section class="closing wrap" id="contact" data-reveal><p data-content="contact.label" class="eyebrow">START WITH ONE MEETING</p><h2 data-content="contact.headline" >次の会議から、
一歩先へ。</h2><p data-content="contact.body" >まずはサンプルの会議で、ORVEINの整理を体験してください。</p><a data-content="contact.cta" href="#workspace" class="button primary">デモを体験する</a><div class="closing-mark" aria-hidden="true">✳</div></section></main><footer class="wrap"><div class="footer-top"><a data-content="brand" href="#product" class="wordmark">ORVEIN</a><p data-content="footer.tag" >Turn conversations into momentum.</p></div><div class="footer-line"><small data-content="footer.copyright" >© 2026 ORVEIN</small><p data-content="footer.legal" class="legal">GENSEKI concept / 架空のブランド・外部送信なし。デモは会議データの分析・保存を行いません。</p></div></footer><script src="content.js"></script><script src="genseki.js"></script><script src="app.js"></script></body></html>
```

### style.css

```css file=style.css
*{box-sizing:border-box}html{scroll-behavior:smooth;scroll-padding-top:96px}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans JP","Hiragino Kaku Gothic ProN",Meiryo,sans-serif;-webkit-font-smoothing:antialiased}button,input,select{font:inherit}button,a{-webkit-tap-highlight-color:transparent}button{cursor:pointer}a{color:inherit;text-decoration:none}button:focus-visible,a:focus-visible,input:focus-visible{outline:3px solid currentColor;outline-offset:5px}img{width:100%;height:100%;object-fit:cover;display:block}h1,h2,h3,p,figure{margin:0}button{color:inherit}button:hover{transform:translateY(-2px)}button:active{transform:translateY(1px)}button,a{transition:transform .2s,background .2s,color .2s}section{scroll-margin-top:80px}.skip{position:fixed;top:8px;left:16px;z-index:1000;background:#fff;color:#52647f;padding:14px;transform:translateY(-150%)}.skip:focus{transform:none}.wrap{width:min(1296px,calc(100% - 96px));margin:auto}.menu-toggle{display:none;min-width:48px;min-height:48px;background:none;border:1px solid currentColor;border-radius:50%;font-size:20px}.mobile-menu{position:absolute;top:76px;left:0;right:0;padding:24px;background:var(--paper);border-bottom:1px solid var(--line);z-index:99}.mobile-menu a{display:block;padding:16px 8px}.mobile-menu[hidden]{display:none!important}.eyebrow{font-size:11px;letter-spacing:.16em;font-weight:600;text-transform:uppercase}.button{display:inline-flex;align-items:center;justify-content:center;gap:18px;min-height:52px;padding:0 24px;border:0;white-space:nowrap}.button::after{content:"↗";font-size:18px}.photo{overflow:hidden}.photo img{transition:transform .7s}.photo:hover img{transform:scale(1.025)}.legal{font-size:10px;line-height:1.8;opacity:.65}.text-link{min-height:44px;display:inline-flex;align-items:center;gap:24px}.text-link::after{content:"↗"}.text-link:hover{transform:translateX(3px)}[data-content]{white-space:pre-line}.footer-line{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:24px 0;border-top:1px solid var(--line)}.footer-line .legal{max-width:560px}dialog{max-width:min(560px,calc(100% - 32px));border:0;padding:40px}dialog::backdrop{background:#1118}dialog button{min-height:44px} @media(max-width:760px){.wrap{width:calc(100% - 40px)}.desktop-nav{display:none!important}.menu-toggle{display:block}.footer-line{align-items:flex-start;flex-direction:column;gap:8px}.button{min-height:52px}.eyebrow{font-size:10px}}@media(prefers-reduced-motion:reduce){*,*::before,*::after{scroll-behavior:auto!important;animation:none!important;transition:none!important}}:root{--paper:#f9faff;--ink:#18243b;--muted:#67748c;--violet:#3151d3;--line:#dbe2f0}body{background:var(--paper);color:var(--ink)}.site-header{height:88px;display:flex;align-items:center;gap:48px;position:relative;z-index:20}.wordmark{font-size:24px;letter-spacing:-1.5px;font-weight:750}.desktop-nav{display:flex;gap:32px;font-size:12px;margin-left:auto}.desktop-nav a{padding:14px 0}.desktop-nav a:hover{color:var(--violet)}.nav-cta{font-size:12px;border:1px solid var(--line);border-radius:7px;padding:13px 18px}.hero{min-height:812px;display:grid;grid-template-columns:.83fr 1.25fr;gap:36px;align-items:center;position:relative;padding-bottom:96px}.hero-copy{padding-bottom:16px}.hero .eyebrow{color:var(--violet)}h1{font-size:clamp(44px,4.6vw,70px);line-height:1.32;letter-spacing:-.07em;font-weight:600;margin:28px 0}.intro{font-size:14px;line-height:2;letter-spacing:.02em;color:var(--muted);max-width:410px}.hero .button{margin-top:32px}.button{font-size:13px;border-radius:7px}.primary{background:var(--violet);color:#fff;box-shadow:0 4px 0 #213ba5}.primary:hover{background:#2646c2}.secondary{background:white;border:1px solid var(--line)}.hero-note{font-size:10px;margin-top:17px;color:var(--muted)}.hero-rule{position:absolute;bottom:25px;left:0;right:0;display:flex;justify-content:space-between;padding-top:26px;border-top:1px solid var(--line);font-size:10px;letter-spacing:.07em;color:var(--muted)}.hero-rule span:last-child{font-size:9px;letter-spacing:.15em}.app-shell{border:1px solid #d8e0ef;border-radius:13px;background:white;box-shadow:0 30px 90px -25px #9aaed565,0 0 0 9px #eaf0fb;min-width:0;transform:translateY(6px)}.app-chrome{height:37px;border-bottom:1px solid #e9eef8;display:flex;align-items:center;padding:0 15px;gap:16px;font-size:7px;letter-spacing:.15em;color:#52647f}.app-mark{margin-left:auto;font-size:20px;color:#52647f}.dots{display:flex;gap:4px}.dots i{width:5px;height:5px;background:#dfe6f2;border-radius:50%}.app-layout{display:grid;grid-template-columns:120px minmax(0,1fr);min-height:440px}.app-sidebar{background:#fafbfe;border-right:1px solid #e9eef8;padding:17px 10px;position:relative;font-size:8px;color:#52647f}.space-title{display:flex;align-items:center;gap:7px;color:#52647f;font-size:7px;margin-bottom:27px}.space-title b{display:grid;place-items:center;width:20px;height:20px;border-radius:5px;background:#d3def7;color:#52647f}.app-sidebar small{font-size:6px;padding:0 7px}.app-sidebar>div:not(.space-title){padding:10px 7px;margin-top:4px}.side-active{background:#e7edfb;color:#52647f;border-radius:4px}.sidebar-bottom{position:absolute;bottom:18px;left:17px;font-size:7px}.app-main{padding:20px 22px;min-width:0}.app-tabbar{display:flex;border-bottom:1px solid #e9eef8;gap:17px;margin-bottom:23px}.case-tab{border:0;border-bottom:2px solid transparent;background:transparent;padding:5px 0 13px;font-size:9px;color:#52647f;min-height:44px}.case-tab.active{color:#52647f;border-color:#5378d3}.app-title{display:flex;align-items:center;gap:10px}.app-title h2{font-size:15px;letter-spacing:-.03em;font-weight:650;line-height:1.6}.status{font-size:6px;color:#52647f;background:#edf6ed;padding:4px 5px;border-radius:3px;white-space:nowrap}.meeting-date{font-size:7px;color:#52647f;margin-top:7px}.note-row{display:grid;grid-template-columns:1fr;margin-top:23px;gap:14px}.meeting-note h3,.decision h3{font-size:8px;font-weight:600;margin-bottom:8px}.meeting-note p{font-size:7px;color:#52647f;line-height:2.05}.decision{background:#f1f5fd;border:1px solid #dde7fc;border-radius:6px;padding:12px}.decision h3{color:#52647f}.decision p{font-size:8px;line-height:1.8;color:#52647f}.task-head{display:flex;justify-content:space-between;align-items:center;margin:20px 0 9px}.task-head h3{font-size:7px;letter-spacing:.13em;color:#52647f}.task-head span{font-size:7px;color:#52647f}.task{border:0;border-top:1px solid #edf2fa;background:white;display:flex;align-items:center;gap:8px;width:100%;padding:7px 0;min-height:44px;text-align:left}.task:hover{background:#f6f9ff;transform:none}.checkbox{height:11px;width:11px;border:1px solid #c9d5e9;border-radius:3px;flex-shrink:0}.task[aria-pressed="true"] .checkbox{background:#5478cd;border-color:#5478cd;position:relative}.task[aria-pressed="true"] .checkbox::after{content:'✓';font-size:9px;position:absolute;color:white;top:-2px;left:1px}.task[aria-pressed="true"] .task-name{text-decoration:line-through;color:#52647f}.task-name{font-size:8px;flex:1;min-width:0}.task small{font-size:6px;color:#52647f;white-space:nowrap}.app-note{font-size:6px;color:#52647f;margin-top:10px}.workflow{background:#ecf1fa;min-height:900px;display:flex;align-items:center;padding:90px 0}.section-heading{display:flex;justify-content:space-between;align-items:flex-end;gap:60px;margin-bottom:75px}h2{font-size:40px;line-height:1.45;letter-spacing:-.055em;font-weight:550}.section-heading .eyebrow{margin-bottom:26px;color:#52647f}.section-heading>p{font-size:13px;line-height:2;max-width:350px;color:#52647f}.workflow-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:42px}.flow{position:relative}.step-number{font-size:12px;font-variant-numeric:tabular-nums;color:#52647f}.flow-visual{height:160px;display:flex;align-items:center;justify-content:center;position:relative;gap:16px}.flow-lines{width:50px;display:grid;gap:8px;transform:rotate(-6deg);padding:18px 8px;background:#fff;border:1px solid #d6e0f0;box-shadow:0 8px 15px #6a89b015}.flow-lines i{height:3px;background:#cbd9ef}.flow-lines i:last-child{width:60%}.flow-orb{width:52px;height:52px;border-radius:50%;border:1px solid #6d8dce;background:#cedbf6;box-shadow:0 0 0 8px #dee7f7}.flow-mini{width:60px;display:grid;gap:8px}.flow-mini i{height:18px;background:#fff;border:1px solid #d5e0f2;border-radius:4px}.flow:nth-child(2) .flow-orb{background:#90abe7}.flow:nth-child(3) .flow-orb{background:#4167c3}.flow .eyebrow{font-size:9px;color:#52647f}.flow h3{font-size:23px;letter-spacing:-.03em;margin:15px 0}.flow>p:not(.eyebrow){font-size:13px;line-height:2;color:#52647f}.step-detail{display:block;border-top:1px solid #d0ddef;margin-top:26px;padding-top:16px;font-size:10px;color:#52647f}.clarity{min-height:900px;display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:100px;padding-top:90px;padding-bottom:90px}.clarity-type .eyebrow{color:#52647f}.type-moment{font-family:Georgia,serif;font-style:italic;font-size:clamp(50px,5.8vw,84px);line-height:1.08;letter-spacing:-.065em;margin:50px 0 25px;color:#3156bf}.quote-note{font-size:12px;color:#52647f}.clarity h2{font-size:34px}.clarity-intro{font-size:13px;line-height:2;color:#52647f;margin:25px 0 38px}.clarity-content article{border-top:1px solid var(--line);padding:21px 0;display:grid;grid-template-columns:150px 1fr;gap:15px}.clarity-content article h3{font-size:13px;font-weight:600}.clarity-content article p{font-size:11px;line-height:1.9;color:#52647f}.pricing{min-height:900px;padding:90px 0;background:#ecf1fa;display:flex;align-items:center}.pricing .section-heading{margin-bottom:52px}.price-note{font-size:10px!important}.price-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;max-width:920px;margin:auto}.price-card{background:#fafbff;border:1px solid #d5e1f0;padding:36px 38px;position:relative;border-radius:9px}.price-card.featured{border:1px solid #7898d8;background:white}.price-card h3{font-size:18px;font-weight:550}.price-card>p:not(.plan-features){font-size:12px;color:#52647f;margin-top:13px}.price{display:flex;align-items:baseline;gap:8px;margin:35px 0 25px}.price strong{font-size:44px;font-weight:500;letter-spacing:-.06em}.price span{font-size:10px;color:#52647f}.plan-features{font-size:12px;line-height:2.7;border-top:1px solid #dce5f3;padding-top:18px;color:#52647f}.price-card .button{width:100%;margin-top:25px}.plan-tag{position:absolute;top:0;right:28px;transform:translateY(-50%);font-size:8px;letter-spacing:.13em;color:white;background:#3151a9;padding:7px 13px;border-radius:3px}.closing{min-height:700px;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;position:relative}.closing .eyebrow{color:#52647f}.closing h2{font-size:58px;margin:30px 0 20px}.closing>p:not(.eyebrow){font-size:13px;color:#52647f}.closing .button{margin-top:28px}.closing-mark{position:absolute;right:6%;top:44%;font-size:220px;line-height:1;color:#52647f}.footer-top{display:flex;align-items:center;justify-content:space-between;padding:28px 0}.footer-top p{font-family:Georgia,serif;font-size:17px;font-style:italic;color:#52647f}.footer-line{font-size:10px;color:#52647f}@media(min-width:1600px){.hero{min-height:calc(100svh - 88px)}}@media(max-width:1100px){.hero{grid-template-columns:.85fr 1.15fr;gap:28px}.app-sidebar{display:none}.app-layout{grid-template-columns:1fr}.app-main{padding:16px}.hero h1{font-size:52px}.clarity{gap:50px}.clarity-content article{grid-template-columns:1fr;gap:8px}}@media(max-width:760px){.site-header{height:76px;gap:15px}.wordmark{font-size:23px}.nav-cta{margin-left:auto;font-size:10px;padding:11px 12px}.menu-toggle{font-size:10px;border-radius:6px}.hero{display:flex;flex-direction:column;min-height:auto;padding-top:42px;padding-bottom:100px;gap:48px;align-items:stretch}.hero h1{font-size:47px;line-height:1.3;margin:24px 0}.intro{font-size:12px;line-height:2}.hero .button{margin-top:24px}.hero-copy{padding:0}.hero-note{font-size:9px}.app-shell{box-shadow:0 20px 60px -20px #a9bddc60,0 0 0 5px #eaf0fb}.app-main{padding:13px}.app-chrome{height:30px}.app-title h2{font-size:13px}.app-layout{min-height:425px}.case-tab{font-size:10px;padding-bottom:10px}.app-tabbar{margin-bottom:17px}.meeting-date{font-size:8px}.meeting-note h3,.decision h3{font-size:9px}.meeting-note p{font-size:9px}.decision p{font-size:9px}.task-name{font-size:9px}.task small{font-size:8px}.task-head h3,.task-head span{font-size:8px}.app-note{font-size:8px}.hero-rule{bottom:26px;font-size:9px}.hero-rule span:last-child{display:none}.workflow{min-height:auto;padding:75px 0}.section-heading{display:block;margin-bottom:45px}.section-heading>p{font-size:12px;margin-top:22px;max-width:100%}h2{font-size:31px}.section-heading .eyebrow{margin-bottom:20px}.workflow-grid{grid-template-columns:1fr;gap:42px}.flow{display:grid;grid-template-columns:65px 1fr;column-gap:20px;align-items:center}.step-number{grid-column:1;align-self:start}.flow-visual{grid-column:1;grid-row:2/6;height:160px;flex-direction:column;gap:12px}.flow-lines{width:43px;padding:12px 8px;gap:5px}.flow-orb{width:26px;height:26px;box-shadow:0 0 0 4px #dee7f7}.flow-mini{width:45px;gap:4px}.flow-mini i{height:11px}.flow h3{grid-column:2;font-size:22px;margin:8px 0 12px}.flow>.eyebrow{grid-column:2}.flow>p:not(.eyebrow){grid-column:2;font-size:12px}.step-detail{grid-column:2;font-size:9px;margin-top:18px;padding-top:12px}.clarity{min-height:auto;grid-template-columns:1fr;padding-top:75px;padding-bottom:70px;gap:65px}.type-moment{font-size:64px;margin:35px 0 20px}.clarity h2{font-size:31px}.clarity-content article{grid-template-columns:1fr;gap:10px}.clarity-content article p{font-size:12px}.clarity-intro{font-size:12px}.pricing{min-height:auto;padding:75px 0}.price-grid{grid-template-columns:1fr;gap:35px}.price-card{padding:30px}.price strong{font-size:42px}.closing{min-height:600px;padding-top:60px;padding-bottom:60px}.closing h2{font-size:43px;z-index:1}.closing>p:not(.eyebrow){font-size:12px;max-width:230px;z-index:1}.closing-mark{font-size:145px;right:0;top:48%;opacity:.55}.footer-top{align-items:flex-start;gap:20px}.footer-top p{font-size:12px;text-align:right;max-width:150px}.legal{font-size:9px}}

/* Keep content visible when JavaScript or a browser motion API is unavailable. */
[data-reveal]{opacity:1} .legal{opacity:1}

.hero{min-height:calc(100svh - 88px)}.intro,.hero-note,.hero-rule,.section-heading>p,.flow>p:not(.eyebrow),.clarity-intro,.clarity-content article p,.plan-features,.price-card>p,.closing>p:not(.eyebrow),.footer-top p,.footer-line{color:#52647f}.app-chrome,.app-sidebar,.space-title,.app-sidebar small,.sidebar-bottom,.case-tab,.meeting-date,.meeting-note p,.decision p,.task-head span,.task small,.app-note{font-size:11px!important;color:#52647f}.app-title h2{font-size:17px}.meeting-note h3,.decision h3,.task-head h3{font-size:11px!important}.decision p,.task-name,.case-tab{font-size:12px!important}.task{gap:8px}.task small{font-size:10px!important}.app-main{padding:18px}.app-layout{min-height:600px}.app-note{font-size:10px!important}.app-sidebar{padding-left:9px;padding-right:9px}.space-title{align-items:flex-start;line-height:1.5}.space-title b{flex-shrink:0}.space-title span{font-size:10px}.task[aria-pressed="true"] .task-name{color:#6a7690}.plan-tag{color:#fff}.primary{color:#fff}.status{color:#386443}.app-tabbar{gap:18px}.app-main .meeting-date{line-height:1.7}.hero .eyebrow,.flow .eyebrow,.section-heading .eyebrow,.clarity-type .eyebrow,.closing .eyebrow{color:#52647f}.type-moment{color:#3156bf}.footer-line{color:#52647f}.hero-note{font-size:11px}.hero-rule{font-size:11px}.hero-rule span:last-child{font-size:10px}@media(max-width:760px){.hero{min-height:calc(100svh - 76px)}.app-main{padding:14px}.app-layout{min-height:615px}.hero h1{font-size:47px}.task-name{font-size:11px!important}.task small{font-size:9px!important}.app-title{flex-wrap:wrap;gap:5px}.app-title h2{font-size:15px}.app-title .status{font-size:9px}.case-tab{font-size:11px!important}.app-tabbar{gap:20px}.hero-rule{font-size:10px}.app-main .meeting-note p{font-size:11px!important;line-height:1.9}}
.closing-mark{color:#d1dff8}
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
(() => {const data=window.SITE_CONTENT.app;let current=0;const done=new Set();const panel=document.getElementById('case-panel');const tabs=[...document.querySelectorAll('[data-case]')];const get=(tag,text)=>{const node=document.createElement(tag);node.textContent=text;return node};function render(){const p=data.presets[current];document.getElementById('meeting-title').textContent=p.title;document.getElementById('meeting-transcript').textContent=p.transcript;document.getElementById('meeting-summary').textContent=p.summary;for(const [id,path] of [['meeting-title','title'],['meeting-transcript','transcript'],['meeting-summary','summary']])document.getElementById(id).dataset.content=`app.presets.${current}.${path}`;panel.setAttribute('aria-labelledby',`case-tab-${current}`);const list=document.getElementById('meeting-tasks');list.replaceChildren();p.tasks.forEach((task,i)=>{const b=document.createElement('button');b.type='button';b.className='task';b.dataset.task=i;b.setAttribute('aria-pressed',String(done.has(i)));const check=get('span','');check.className='checkbox';check.setAttribute('aria-hidden','true');b.append(check);const name=get('span',task.title);name.className='task-name';name.dataset.content=`app.presets.${current}.tasks.${i}.title`;b.append(name);for(const k of ['owner','due']){const small=get('small',task[k]);small.dataset.content=`app.presets.${current}.tasks.${i}.${k}`;b.append(small)}b.addEventListener('click',()=>{done.has(i)?done.delete(i):done.add(i);render();document.querySelector(`[data-task="${i}"]`).focus()});list.append(b)});document.getElementById('task-progress').textContent=`${done.size} / ${p.tasks.length} ${data.taskDone}`;tabs.forEach((t,i)=>{t.classList.toggle('active',i===current);t.setAttribute('aria-selected',String(i===current));t.tabIndex=i===current?0:-1})}tabs.forEach((tab,i)=>{tab.addEventListener('click',()=>{current=i;done.clear();render()});tab.addEventListener('keydown',event=>{let target;if(event.key==='ArrowRight')target=(i+1)%tabs.length;if(event.key==='ArrowLeft')target=(i-1+tabs.length)%tabs.length;if(event.key==='Home')target=0;if(event.key==='End')target=tabs.length-1;if(target!==undefined){event.preventDefault();current=target;done.clear();render();tabs[target].focus()}})});render()})();
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
