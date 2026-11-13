# Sound Studies 01 / v5

2026-11-14 JST。第5版は、v4の実ナビゲーションで見つかった状態不一致だけを修正した候補。v1〜v4は変更していない。v4の画面・素材・shaderはbyte一致で維持した。合格と公開状態は親/Verifierの読戻しを参照する。

## 改版理由と修正

v4でHaloの設定（preset2/tone64/motion72/volume18）を読み込み再生し、別ページへ移動して戻ると、再生は正しく停止する一方、preset名/outputsはEmber38/45/25、range valuesだけ64/72/18になる事象を親IABで観測した。新しいdocumentのJS初期stateに対し、ブラウザが履歴のフォーム値だけを復元していた。

v5ではpageshow後の次RAFで、browserによるフォーム値の復元後にcanonical JS stateからupdateLabels・motion/audio UI・graphicsを再同期する。bfcacheなら保持された既存state、新documentならinitialを使う。state自体をrange値から推測して上書きしない。pagehideでは保留同期RAFを取り消し、連続pageshowは一つへまとめる。保存済みlocalStorageは消去・初期化しない。音の自動再開はしない。

## 追加した事実計測

新UIや閾値を増やさず、既存diagnosticsへlongtaskのsupported、count、total_duration_ms、max_duration_msを追加した。buffered PerformanceObserverでdocument navigation以降の通知を集計する。対応して初期観測0件のときだけ0を使い、非対応/不明なら数値はnull。observer callback一回につき表示更新一回とし、記録だけを行う。新しい合格閾値は定義していない。

## 維持した範囲

index.html、style.css、mark.svg、3つのsculpture SVG、generate-fallback.pyはv4とbyte一致。音声合成、保存/復帰、JSON/WAV、projection、形、モーション、toolbar、PC/縦画面構成は変更していない。

PCは文字/操作が左、同じ大きさの彫刻が右。900px以下は上に大きいsticky preview、下に操作。3層がscrollに連動して開き、attached toolbarでpreset/pauseを操作する。viewport/低モーションの契約はmotion-contract.jsonを参照する。

## 起動

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

通常 `/`、`?graphics=static` は自作SVG代替、`?motion=reduce` はOS reduceへ追加する同じ低モーション経路。外部依存・CDN・外部送信なし。設定file schema/keyは互換version2。

## Builder検証

- node --check app.js、全JSON、ID39一意、相対asset/anchor10参照: PASS。
- 実updateLabels/pageshow/pagehide/longtaskのsourceを使った限定simulation42assertion: PASS。
- 検査した状態: new documentのinitial優先、bfcache既存state優先、pagehideの同期取消、重複pageshow抑止、longtask非対応/不明のnull、対応時のcount/total/max集計、observe失敗時のnull。
- 表示7ファイルのv4とのbyte一致: PASS。

simulationはブラウザの履歴タイミングやbfcache実動作を証明しない。Halo64/72/18→別ページ→Back後のslider/output/preset一致、音停止、保存設定保持の実ブラウザ再検証は親担当。新しいlongtask値は実ブラウザのdiagnosticsで読戻す。

## 制約

v4と同じOS書体の差、SVGは静止代替、context lost後のWebGL再開に再読み込みが必要。実スマートフォン/Safari/Firefox/聴感は別検証。日次常駐・会員・決済・実問い合わせ・SNSは対象外。初期50・日次3件に未計上。
