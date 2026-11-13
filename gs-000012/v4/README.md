# 綴目 — グラフィックと編集のデザイン / v4

GENSEKI concept / `gs-000012`。体験できるデザイン参考として制作した、**単一ページのポートフォリオ**です。架空スタジオの自主企画で、実在する顧客・受賞・受託実績は主張しません。

主役は『あいだの設計 — 伝える順序のつくり方』の表紙と見開き。入口、読む距離、相談の余白を扱うオリジナル原稿と、意味のある模式図を使います。heroと同ページの作品詳細は同じ原稿/紙面rendererを参照します。

## 起動と範囲

ビルド・npm・外部API・フォント取得は不要。このフォルダーをHTTP配信し `index.html` を開きます。GitHub Pagesにも同じsourceを配置できます。追加費用0円。参照は相対パスです。

公開HTMLは `index.html` のみ。別の読書ページ、ボタン押下先の別ページ、実送信先の設計・実装は今回の範囲に含めません。旧v1/v2の別ページは過去の実験であり、現版の完成範囲と区別します。

- `index.html`: 作品、同ページの詳細、相談ノート
- `app.js`: 原稿data/紙面renderer、冊子モーション、探索、詳細、既存ノート処理
- `telemetry.js`: 20秒の有界性能観測
- `style.css`: 単一ページと紙面/詳細のレスポンシブ構成
- `assets/*.svg`: オリジナル図版。OSフォント本体は配布しません
- `asset-manifest.json`: 各素材のhashと出所

## 既存の操作

冊子は表紙/見開き、click/touch/左右keyで開閉し、自動再生を停止/再開できます。reduce、非表示タブ、画面外、pagehideでは継続RAFを止めます。「紙面を見る」は同じindexの既存詳細を開き、閉じる/Escapeで戻ります。

4作品の検索/媒体filterと追加/取消、相談ノートの入力/確認、ローカル保存/復元、TXT/JSON書出し、JSON読込、ノート印刷は、既存の単一ページ内の体験として維持しています。追加機能は加えていません。実送信はありません。入力を外部へ送らず、個人情報を要求しません。

書出し名は `tsuzume-project-note-v4.txt` / `tsuzume-project-note-v4.json`。JSON schemaはversion1。保存は同じorigin/ブラウザ内です。作品変更も未保存表示になり、同ページの入力と確認結果を同期します。

file dialogの開始/取消/新file、pagehideは前の読込世代を無効化。await後の適用は世代/編集revision/activeが一致する時だけ。error表示はstatus revisionも一致する時だけ。後の選択・保存・復帰の結果を古い処理で消しません。

## 代替表示と観測

JavaScript無効時は、index上の作品説明と静止紙面を閲覧できます。動的な選択・保存は利用できず、制作の目的や媒体などは手元にメモできます。別ページや空のindex印刷を代替成功経路として案内しません。

hidden output `#motion-diagnostics` は時刻付きraw interval、20秒active窓、遅いframe、LCP、CLS max-session、有界longTasksを表示します。未対応値はnull。通常snapshotは最大1Hz、状態/Observer受信は即時。pause/hiddenの静止cadenceをfpsに含めません。実機や別環境の性能保証ではありません。

作成者は品質合格を宣言しません。固定前preview、独立A/B検査、公開読戻しは別工程です。OSフォントの見え方は端末により異なります。

## v4の調整

320px幅の表紙内だけ、タイトル前後・edition・目次の上下余白とタイトル行送りを整理し、目次3項目を紙面内へ収めました。紙面の文字内容、冊子の占有と軌道、390px以上の構図、既存機能は維持します。v3の実測/評価をv4の総合合格へ読み替えません。

## 共通reduce経路のQA入口

`?motion=reduce` は実ブラウザで共通reduce処理を検査するための入口です。実OSの `prefers-reduced-motion` とORし、同じ冊子停止・手動切替即時・CSS transition/animation停止を通します。通常のOS設定への追従は維持します。UIや別ページは追加しません。これはOS設定を実際に変更した検査とは区別してください。hidden diagnosticsには `reduced`、`osReduced`、`forcedReduced` を分けて表示します。

`visibility_events` は実際のdocument visibilitychangeだけを最大12件記録します。hidden側は停止後、visible側は再schedule前のupdates/RAF/時刻/pageActiveです。UAやqueryでhidden状態を偽装せず、native tab切替後に継続描画が無かったかを読戻すための観測値です。
