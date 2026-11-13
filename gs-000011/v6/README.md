# Sound Studies 01 / v6

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
