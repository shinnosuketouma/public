# Sound Studies 01 / v7

2026-11-14 JST。第7版は、既存diagnosticsへ実visibilityイベントの履歴を加える観測性だけの修正。画面・形・描画・音声・状態管理はv6から変更していない。v1〜v6は変更していない。

## 追加した理由

親のnative-only Chromeで、実タブ離脱後の自動音停止メッセージは観測できた。一方、そのnative AXは描画frame総数を露出せず、hidden区間の描画回数差が0かを後から読戻せなかった。停止していないと断定するものではなく、必要な証跡の不足を埋める。

実document.visibilitychangeの既存handlerに、最大12件のvisibility_eventsを加えた。hidden時は既存stopAudio/renderer.suspendの後、visible復帰時はrenderer.wakeの直前に記録する。hidden=document.hidden、frame=その時点のcanvas.dataset.frameを数値化、playing=既存の再生state、at_ms=performance.now()、pageInactive=既存のpage lifecycle state。引数やqueryで状態を強制せず、UA/native APIのmonkeypatchを行わない。

同じdocumentでhiddenと次のvisibleのframeが同じなら、その2記録間の描画増分が0だったという範囲で読める。最大12件より古い記録は捨てる。実タブ切替の前後差は親が実ブラウザで確認する。SOURCE_VMだけで実hiddenを観測したと扱わない。

既存diagnosticsへ表示し、新control・別ページ・自動送信・intervalは追加しない。描画関数/audio graph/canonical state、v6の色・import競合修正・pageshow同期は維持する。初期段階のv6不合格記録は以下に残す。

## v7 Builder検証と状態

node --check app.js成功。HTML/CSS/素材7ファイル、audio・state/storage/import/export・rendererの処理区間がv6とbyte一致。独立SOURCE_VM監査は33ケース・177assertion全PASS。旧31ケース回帰に加え、停止/suspend後とwake前の記録順序、native値読取、最新12件の保持とdiagnostics一致を検査した。SOURCE_VMを実hiddenの観測と扱わず、親の実タブ切替検証は別工程。ローカルfreezeの結果はfrozen-manifestを参照し、public copy/commitはこの担当では行わない。

## v6の修正記録（保持）

2026-11-14 JST。第6版は、v5の低コントラストと遅延JSON読込の競合を修正する候補。v1〜v5は変更していない。背景・構図・形・モーション・toolbar・音声/出力の仕様は維持する。freezeと親/独立QAの状態はmanifestとレポートを参照する。

## 色の修正

v5の親IAB検査で、muted文字#68655dがinstrument背景#dedbd2上で4.204、active preset番号#bb3d20が#e3e0d7上で4.185となり、通常文字4.5を下回った。

CSSの変更はrootの2変数だけ。

| token | v5 | v6 |
|---|---|---|
| muted | #68655d | #5e5b53 |
| accent | #bb3d20 | #ad351b |

sRGBを線形化した相対輝度で計算した、新しい通常文字の比率:

| 背景 | muted | accent |
|---|---:|---:|
| paper #ebe9e2 | 5.581 | 5.235 |
| instrument #dedbd2 | 4.898 | 4.594 |
| panel #eeece5 | 5.736 | 5.380 |
| active preset #e3e0d7 | 5.137 | 4.818 |
| diagnostics #e7e3d9 | 5.291 | 4.963 |

白文字/新accentボタン6.360、白文字/hoverボタン7.459、play通常12.946、play hover8.358、error文字/panel6.050も4.5以上。新しい閾値ではなく既存の通常文字基準を満たす修正。静的source色の計算であり、DOM実色と実表示の親検証は別工程。全15組の新旧値と計算法はinteraction-contract.jsonへ保存した。

## 遅延importの修正

v5ではFile.text()の完了を待つ間にslider・preset・reset・保存設定の復帰を操作しても、その後で古いJSONが完了すると後編集を上書きできた。

v6はcanonical stateの編集revisionを持ち、tone/motion/volume input・preset・reset・成功restore・成功importで増やす。読込開始時のimport generationとedit revisionが両方一致し、pageが有効な場合だけ適用する。新しいdialogを開く時点・cancel・fileなしchange・離脱でもgenerationを進め、前のreadを無効化する。cancelはcanonical stateを変えない。

古いcatchが後操作のstatusを消さないよう、statusのrevisionも確認する。後編集で現在のimportを破棄し、より新しいメッセージがない場合は、後編集を優先して読込を破棄した旨を短く表示する。保存済みの設定を消さない。v5のpageshow後canonical同期、実JSON/WAV、音声停止/復帰、longtaskの事実計測は維持する。

## 起動と検証範囲

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

通常 `/`、`?graphics=static`、`?motion=reduce` は従来どおり。外部依存・CDN・外部送信なし。設定file schema/keyは互換version2。

freeze前の最初の独立検査31例では30PASS/1FAIL。pending read中に新dialogを開いてcancelすると旧readが適用される例が残ったため、新dialog開始/cancelでも世代を進める修正を追加した。追加修正後の最終独立SOURCE_VMは31例・162assertion全PASS。未freeze1FAIL候補の履歴は独立証跡にも保持された。

Builder検査: JS構文、全JSON、ID/相対参照、15組のcontrast計算、CSSが2tokenのみの差であることを確認。独立SOURCE_VMは元24例、後編集後reject/status6例、新dialog取消後の旧read完了1例を検査した。親ブラウザの正常import/Back/exportは別工程であり、SOURCE_VMのPASSを実ブラウザ合格と扱わない。

## 制約

OS書体の差、SVGは静止代替、context lost後の描画再開に再読み込みが必要。実スマートフォン/Safari/Firefox/聴感は別検証。日次常駐・会員・決済・実問い合わせ・SNSは対象外。初期50・日次3件に未計上。
