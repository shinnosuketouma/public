# Sound Studies 01 / v1

2026-11-14 JST。GENSEKIの品質改善実験用の初版。初期50作品・日次3作品の実績へは未計上。高品質到達の判定は独立評価を参照し、このREADMEだけで合格と扱わない。

## 起動

このディレクトリを静的HTTPサーバーで配信する。ビルド・npm依存・外部画像・動画・CDNはない。

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

`http://127.0.0.1:8765/` を開く。`?graphics=static` はWebGLを作らず、同じフォールバックと音色操作を確認する経路。ファイルを直接開くよりHTTPを使用する。

## 実装

- 外部ライブラリを使わずWebGL1の独自parametric mesh/GLSLで薄い金属層の彫刻を生成。3プリセットが形・材質・和音を同じ設定から変更する。
- 初回はSVGを表示し、WebGLの実draw後だけcanvasへ切り替える。PCは49,575 vertices/95,040 triangles、初期600px以下は27,279 vertices/51,840 triangles。解像度はDPR1.6/1.35上限。
- 明示クリック後にWeb Audioの4 oscillator・lowpass・LFO・delayで音を生成。音量/明るさ/ゆらぎが実信号へ反映。タブを離れると停止し、自動再開しない。
- localStorageへ1件保存、保存値検証、復帰、設定JSON download、初期値へ戻す。外部へ送信しない。
- 通常動作・明示pause・OSのreduced-motion・非表示停止。停止中の設定操作は必要な1frameだけ描画する。
- native dialog、Escape、focus return、mobile menu、rangeのkey操作。
- `動作データを表示する` は実測raw telemetry。LCP、CLS、通常動作直近20秒のframe間隔。pause/hidden区間を動作FPSへ混ぜない。unsupportedはnull。`canvas.dataset`にもrenderer/frame/motion/resolution/mesh数を記録。

## 編集と公開対象

文章・レイアウトはindex.html/style.css、プリセットと形・音はapp.jsのpresetsとshader、代替の自作SVGはsculpture.svg。全ファイルは相対パス。競合素材・第三者プロンプトは含まない。

公開可能ファイル: index.html、style.css、app.js、mark.svg、sculpture.svg、README.md、motion-contract.json、interaction-contract.json、asset-manifest.json、source-manifest.json。台帳・秘密値はない。

## v1の制約・未検証

- スクロールで同一彫刻が操作画面へ移るscoped momentは初版で未実装。heroの立体と下部の楽器UIが離れている。
- 親による初回1280×720確認で、hero-jpと下部説明の重なりを観測。min-heightとabsolute bottom配置の競合。v1の欠点として保存し、v2で修正する。
- OS書体へフォールバックし、フォントファイルは同梱していない。環境で文字の形・幅が変わる。
- SVG代替は1つの静止彫刻。3プリセットごとの異なる代替画像はない。音色・入力は使える。
- WebGL context lost時は静止画へ戻り、再描画には再読み込みが必要。音声操作は継続可能。
- 8秒WAV書出しは後版候補で未実装。JSON書出しは実装。
- 初版のブラウザQA・性能値・独立品質の最終判定は親担当。実スマートフォン、音の聴感、Safari/Firefoxは未検証。
- 日次常駐運用・会員・支払・実問い合わせ・SNSは対象外。

検証: `node --check app.js` 成功。静的相対リンク・ローカルasset存在確認はsource-manifest生成時に実施。実ブラウザの確認結果は別のQA記録へ。
