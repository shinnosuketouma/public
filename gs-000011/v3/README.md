# Sound Studies 01 / v3

2026-11-14 JST。品質改善実験の第3版。v1/v2の凍結ソースは変更していない。独立レビューsound-v2.jsonの携帯中間軌道FAILを修正した候補。ブラウザ合格・MotionSites比較の到達を、このREADMEだけで宣言しない。

## 起動

buildless、外部依存・CDN・外部素材なし。このフォルダーを静的HTTP配信する。

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

通常 `/`。`?graphics=static` は3preset別の自作SVG、`?motion=reduce` はOS reduceに追加する同じ低モーション経路。両方指定も可能。OS側reduceを解除する機能はない。

## v3で修正したこと

v2は390×844、p=.64988で大きな彫刻を見出し・本文の上に通していた。安全な始点/終点だけでなく、経路そのものを設計し直した。

- p0〜.15: hero slotを維持。
- p.15〜.35: smoothstepで小さな通路へ縮小しながら移動。
- p.35〜.65: 小さいまま通路を進み、見出し下の最終slotのtopへ到達。
- p.65〜1: slotのtopを保ち、left/width/heightを最終サイズへsmoothstepで拡大。

携帯は右端16px余白の92×120px通路。見出しは右104pxを空け、h2は26〜32px、本文16pxで自然に折り返す。デスクトップは実測heading.right+24pxからpanel.left-24pxまでの通路を使う。途中のspec/axis/shadowは減衰するが、主役の彫刻は消さない。逆scrollも同じ関数で戻る。pause/reduceは近いslotへ即配置。

最終slotは固定margin-topを使わず、自然な見出し高さ＋24pxの後へ配置した。PCではinstrument-column内、携帯ではdisplay:contentsによって同じsectionのsticky専用表示域になる。本文を大きな不透明板で隠して衝突を処理するものではない。

CSSはv1/v2の追記連鎖をbase＋breakpointへ整理。js-activeの前後でflow領域を表示/非表示にする規則を撤去。2slotの領域は初期HTMLから予約される。fixedの彫刻だけを位置計算後に表示する。CLS原値は変えず、直近最大20件のlayout-shift entryとsourceの前後rectを診断へ追加した。v2で観測されたCLSの差を、修正済みと決めつけない。

## 維持した機能

独自WebGL1の金属薄層、3preset、WebAudioの実合成、tone/motion/volume、明示pause、OS/URL reduce、hidden時停止、pending resumeの世代取消、pageshowのtimer/描画復帰、ブラウザ内の保存/復帰、JSON実import/export、8秒WAV実export/cancel、native dialog/mobile menu/key操作を維持した。

JSONデータ形式は互換性のあるversion2のまま。保存keyもv2から維持し、作品revision番号と設定file schema番号を混同しない。WAVはlive再生と同じcreateAudioGraphからOfflineAudioContextで生成する、44.1kHz/mono/16bit PCM/8秒/705,644bytes。取消はdownload抑止と生成結果破棄であり、ブラウザのnative offline計算の強制中断を保証しない。

3種のSVGは同じ独自parametric geometryをgenerate-fallback.pyから描く。各約657KB、初期取得は選択中の1種のみ。外部メディア・第三者原文・会員/顧客/秘密データなし。

## 診断

LCP/CLS、実draw間隔20秒のcount/span/FPS/median/p95、renderer/frame/motion/resolution/mesh数、WAV実bufferのduration/bytes/peak/RMS。採点ではない。未対応はnull。アニメーション計算だけdt上限を設け、frame計測を短縮しない。pause/hidden時間をFPSへ混ぜない。

## Builder検証

- node --check app.js: PASS。
- JSON parse、ID41一意、相対asset/anchor11参照: PASS。
- 実placeSculpture関数を抽出し、6幅の**合成rect**で分岐境界の連続性・通路余白・着地の見出し下24px・motion-off即配置を4,020assertion: PASS。

合成rectの検査は実際の文字幅・sticky・ブラウザ描画の確認ではない。1280/1440/1024/768/390/320の実表示、中間p=.64988を含むforward/reverse、性能20秒、既存音声/保存/fileの回帰、独立競合評価は親/Verifier担当の証跡を参照する。

## 制約

OS書体の環境差、SVGの静止代替、context lost後のWebGL再開に再読み込みが必要、実スマートフォン/Safari/Firefox/音の聴感は別検証、日次常駐・会員・決済・実問い合わせ・SNSは対象外。初期50・日次3件に未計上。
