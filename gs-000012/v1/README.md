# 綴目 — グラフィックと編集のデザイン

GENSEKI concept / `gs-000012` / revision `v1`。本作は、独立した制作スタジオを想定したオリジナル作品です。掲載4件は自主企画であり、実在する顧客・受賞・受託実績を主張しません。

## 起動

ビルド・npm・外部APIは不要。このフォルダーをHTTP配信して `index.html` を開いてください。例: `python3 -m http.server 8172 --bind 127.0.0.1`。GitHub Pagesにもそのまま配置できます。すべての参照は相対パスです。追加費用0円。CSS3D、native dialog、localStorage、File API、Blob、IntersectionObserverを利用します。OS書体をフォールバックし、外部フォントを取得しません。

## 利用できる操作

- 冊子の表紙/見開き切替、冊子click/touch/左右key、自動再生の停止/再開。通常時の自動開閉、reduce時の静止、非表示/画面外停止。
- 4作品を媒体と検索語で探索。0件表示と条件解除、詳細dialog（Escape/閉じる/元focusへ復帰）。
- 気になる作品を相談ノートへ追加/取消。目的・媒体・時期・メモを編集し、確認紙面へ反映。
- ローカル保存・同一origin再訪時の復元。TXT/JSONダウンロード、JSON読込、印刷。
- TXTと印刷は、作品1件以上と制作の目的を入力後に利用できます。JSONは途中の状態でも書き出せます。

入力は外部へ送信しません。ブラウザの保存は同一origin内です。公開URLとローカルURL、別ブラウザ間では共有しません。JSONを持ち帰れば別端末で編集できます。個人情報は収集しません。通信・実送信・契約・見積のバックエンドはありません。

## 編集

作品データは `app.js` の `PROJECTS`、静的一覧/フォームは `index.html`、色・構図・冊子の見え方は `style.css`。自作の印刷グラフィックは `assets/*.svg`。紙面の文字・図形はすべて本作の新規制作です。OSフォント本体は配布しません。

## 計測と未検証

`#motion-diagnostics`（hidden output）のtextContentに、現在state、progress、reduced/paused/hidden、更新数、active interval raw配列、activeMs、interval中央値/95%点、実効fps、最新LCP、CLS、long taskをJSONで表示します。自動開閉の可視変化があるframeだけを計上し、pause/非表示/画面外の静止時間はactiveMsに含めません。初回描画から開始されるので、20秒以上のactiveMsが貯まった時点の値を用いてください。これは検証用観測値であり、実機スマホや他環境の性能保証ではありません。

作成者は品質の合格を宣言しません。通常/reduce、1440/1024/768/390/320幅、touch/key、保存/失敗/復元、同寸法の比較作例観察を独立Verifierが検証します。古いブラウザでdialog非対応なら詳細を開けない旨を案内し、静的な作品一覧からノートを作れます。JS無効時は作品と相談整理項目を読み、ブラウザ印刷で持ち帰れます。SNSや問い合わせ送信の機能はありません。
