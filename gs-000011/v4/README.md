# Sound Studies 01 / v4

2026-11-14 JST。品質改善実験の第4版。v1〜v3は変更していない。v3は本文衝突を避けたものの、途中で主役を約80pxへ縮める構成が独立評価で不合格になった。v4では縮小通路を廃止し、大きい主役を保つページ構成へ変更した。ブラウザ合格・競合比較の到達は親/Verifierの証跡を参照する。

## 起動

buildless。外部依存・CDN・外部素材なし。このフォルダーを静的HTTP配信する。

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

`/` 通常動作、`?graphics=static` は自作のpreset別SVG、`?motion=reduce` はOS reduceに追加する同じ低モーション経路。併用可。OS側reduceを解除する機能はない。

## v4の構成

PCはheroの文字/CTAを左、彫刻を右へ配置。instrumentも左に見出しと操作パネル、右に大きなsticky彫刻を置く。同じ右列に留まるので、主役が文字を横切る必要がない。両slotは近い幅・同じ高さ。native scrollで位置をつなぎ、中間で小さくしない。

900px以下の縦構成では、heroのh1・説明・CTAをすべて立体より上へ置く。390×844のstageは約420px、320×740では340px。instrumentは最初に同じ大stageを置き、その24px下から見出し/操作を始める。上の大きいpreviewと下の操作が一つの作業UIになる。previewは紙色の不透明な背景を持ち、スクロールした本文が透けて混ざらない。focus用scroll-padding/scroll-marginを設けた。短い横画面は内容を潰さず自然に縦へ伸ばす。

主preset/pauseは彫刻hostの底部60px toolbarへ統合。canvas/fallback/shadowは別render-areaへ入れ、操作ラベルと重ねない。浮遊した大きい01/03番号と旧hero dock、重複preset群は削除した。toolbarは同じ彫刻と一緒に移る。

## 主役の変化

三つの金属薄層を、閉じた編み込みから開いた構造へ変える。scrollからsmoothstepで導くu_travelが、layer差のbinormal最大±0.52world、depth±0.42world、回転±0.23/±0.28rad、twistの18%緩和へ作用する。位置だけが移るループでなく、薄い面・断面・層間が読めることを狙う。同じsurfaceから法線を再計算し、同じcamera位置で材質を反射させる。逆scrollも同じ式で戻す。

projectionはtoolbarを除くrender-areaの実aspectを使う。半径2.4worldのcontain sphereと92%の余白からcamera距離を決め、near0.1/far40で描く。camera距離はvertex/fragmentで共通。原形と展開形をサンプルした半径最大約2.131worldに、変形の余裕を設けた。実際のGPU表示と全preset途中の欠けはブラウザQAで確認する。

## 維持した機能

WebAudio実合成、tone/motion/volume、明示pause、OS/URL reduce、hidden時停止、pending resume取消、pageshow復帰、保存/復帰、JSON import/export、実8秒WAV export/cancel、dialog/menu/key操作は維持した。

**audio処理区間とsave/import/JSON/WAV処理区間はv3とbyte一致**を確認した。設定file schema/keyは互換version2を維持し、作品revisionと混同しない。WAVは同じcreateAudioGraphから44.1kHz/mono/16bit PCM/8秒/705,644bytesを生成する。取消はdownload抑止/結果破棄であり、native offline計算の強制停止は保証しない。

3SVGは同じ独自geometryからgenerate-fallback.pyで作る静止代替。各約657KB、初期取得は選択中の1種のみ。展開モーションはWebGLが必要。第三者素材/添付原文/秘密値/顧客情報なし。

## 診断

LCP/CLS、実draw20秒のcount/span/FPS/median/p95、renderer/frame/motion/resolution/mesh数、projectionの実aspect/camera、WAV bufferのduration/bytes/peak/RMS。raw telemetryであり採点ではない。未対応はnull。CLS max-session原値と最大20件のshift source記録を維持する。アニメーション計算だけdtを制限し、frame計測を短縮しない。

## Builder検証

- node --check app.js: PASS。
- JSON parse、ID39一意、相対asset/anchor10参照: PASS。
- 実placeSculpture関数を合成6幅×1001進捗で検査。主役を縮小しない、stage高一定、PC左の文字/縦画面の下側本文の保護、contain sphereの解析を計24,029assertion: PASS。
- audio、save/import/JSON/WAVのv3とのbyte一致: PASS。

合成rectや解析は実際の文字組・sticky/focus・GPUの表示を証明しない。6幅の初期CTA/stage/toolbar、中間/逆方向、低モーション、操作/保存/実ファイル、20秒性能とCLS、fresh visualの競合比較は親/Verifier担当。

## 制約

OS書体の環境差、SVGは閉じた形の静止代替、context lost後の描画再開は再読み込みが必要。実スマートフォン/Safari/Firefox/聴感は別検証。日次常駐・会員・課金・実問い合わせ・SNSは対象外。初期50・日次3件に未計上。
