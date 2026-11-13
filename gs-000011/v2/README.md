# Sound Studies 01 / v2

2026-11-14 JST。GENSEKI品質改善実験の第2版。v1は変更していない。独立ブラウザQA・競合比較は親担当の証跡を参照し、この実装説明だけで合格と扱わない。初期50作品・日次3作品へ未計上。

## 起動

ビルド・npm依存・外部画像・動画・CDNなし。静的HTTPサーバーでこのフォルダーを配信する。

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

- `/` 通常動作。
- `/?graphics=static` WebGLを作らず、3プリセット別SVGと実際の音色操作を確認する。
- `/?motion=reduce` OSの低モーション設定と同じ抑制経路を追加で有効にする。OS側のreduceを解除する機能ではない。
- `/?graphics=static&motion=reduce` 両方の代替。

## v1からの変更

1. heroの固定min-heightを撤廃。高さに応じる文字寸法とgrid flowで、見出し・副題・説明・CTA・dockを配置。1280×720、1440×900、390×844、320×740を修正対象にした。高さ620px以下では内容を潰さず自然に縦へ伸ばす。これらの実表示合格はブラウザQA待ち。
2. 同じcanvas hostをfixed overlayへ移動。hero/instrumentの2つのslotの実rectを、native scroll進捗から補間。逆scrollも同じ状態から戻る。到着後はinstrument slotを追従する。薄層も進捗に応じて少し開く。instrument側の専用域はstickyで、音を調整しながら形を確認できる設計。本文/操作を前面へ配置。pause/reduceでは近いslotへ即時配置し、travel補間を行わない。
3. AudioContext.resume()中のhidden/pagehideをgeneration tokenで中止。pending contextも破棄する。pageshowではtimer/描画/UIを復帰し、音は自動再生しない。
4. 実JSON importを追加。v1/v2の作品format・version・preset・数値境界・16KB上限を検査し、必要な値だけ適用する。キャンセル/不正ファイルで現在値を変えない。
5. 8秒WAV書出し。live再生と同じcreateAudioGraphからOfflineAudioContextで生成。44.1kHz・mono・16bit PCM・705,644bytes。現在のpreset/filter/LFO/delay/volumeを反映し、冒頭/末尾だけfadeを付ける。書出し中止はダウンロードを中止し、生成結果を破棄する（ブラウザのnative offline処理自体の強制停止を保証しない）。
6. 3preset別の自作SVG代替。generate-fallback.pyは同じ独自parametric geometryから不透明な金属面を投影して描く再生成正本。競合素材なし。
7. mobileでもpause/resumeの名前を常時aria-labelへ出す。意味のあるラベル13px以上、主要本文16px、操作44pxを基準に再調整。

## 変わらない実装

独自WebGL1 mesh/GLSLで金属の薄層を生成。PC49,575vertices/95,040triangles、初期600px以下27,279vertices/51,840triangles。DPR上限1.6/1.35。drawing bufferの大きさを2slotの最大寸法に固定してscroll中の再確保を避ける。3presetで形・材質・和音を同じstateから変更する。

WebAudioの4oscillator/lowpass/LFO/delay。ユーザークリック後だけ音を開始。volume/tone/motionは実信号へ反映。localStorageへ1設定保存/復帰、JSON download、初期値へ戻す。新保存keyはv2用。

pause/reduce/非表示時にcontinuous graphics RAFを止める。明示入力は必要な1frameを描く。native dialog/Escape/focus return、mobile menu、rangeのkeyboard操作。外部送信・会員・販売・実問い合わせなし。

## 動作データ

診断detailsにraw telemetryを表示する。採点ではない。

- LCPとCLS（max session window。直近入力によるshiftは除外）。未対応はnull。
- 通常の実draw間隔の20秒窓: count/span/effective_fps/median/p95。dtは描画測定時にはclampせず、アニメーション計算だけ0.05秒でclampする。pause/hidden時間をFPSに含めない。
- canvas data-renderer/frame/motion/resolution/vertices/triangles。frameは実draw時だけ増える。
- WAV生成後は実AudioBufferのsample rate/frame/duration/bytes/peak/RMS。無音設定ならpeak/RMSが0になることも正常。

初期に取得するSVGは現在の1種だけで、約657KB。全3種の合計と初期転送量を混同しない。性能の合否は実ブラウザの観測を参照する。

## ファイルと再生成

index.html/style.cssが文章と構図、app.jsがpreset・shape/audio・操作・telemetry。mark.svgとsculpture-ember/tidal/halo.svgは自作。素材再生成:

```sh
python3 generate-fallback.py
```

公開対象はsource-manifest.jsonの一覧。競合の添付prompt・素材・private台帳は含まない。metadataは契約とhashを記録するもので、ブラウザ確認済みの宣言ではない。

## 制約・未検証

- v1で見つかったhero衝突と操作中に立体が見えない問題は、この版で修正を実装した。合格へ継承したものではなく、親/Verifierの実表示検査待ち。
- OS書体を使い、フォントファイルは同梱しない。環境で形/幅が変わる。
- SVG代替は各presetの静止画。tone/motionによる連続変形はWebGLが必要。
- context lostではSVGへ戻り、描画再開は再読み込みが必要。
- WAV保存中止は結果破棄。native offline renderingを強制終了できないブラウザでは短い処理が最後まで走る。
- 実スマートフォン、Safari/Firefox、音の聴感・スピーカー安全性、ダウンロードした実ファイルの独立読戻しは親担当のQAを参照。
- 通常/低モーション/viewport/機能/性能の最終ブラウザQAはNOT_RUN（Builder自身は実施していない）。初回プレビューは親担当が実施する。

Builder検証: node --check app.js、JSON parse、相対asset/anchorとID重複の静的検査。検証結果をsource-manifestへ記録する。
