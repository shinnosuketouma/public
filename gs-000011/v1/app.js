(() => {
  'use strict';
  const $ = selector => document.querySelector(selector);
  const presets = [
    { name: 'Ember', material: 'Copper / warm', description: '折り重なる銅の輪郭。低い和音に、丸い響きを重ねる。', tone: 38, motion: 45, base: 55, ratios: [1, 1.5, 2, 2.5], weights: [1, 0, 0] },
    { name: 'Tidal', material: 'Silver / flowing', description: '広がる銀の波。ゆるやかなうねりに、澄んだ倍音を重ねる。', tone: 64, motion: 72, base: 65.406, ratios: [1, 1.333333, 2, 3], weights: [0, 1, 0] },
    { name: 'Halo', material: 'Pearl / open', description: '開いた薄い環。浮かぶような和音を、長い余韻へほどく。', tone: 78, motion: 28, base: 73.416, ratios: [1, 1.25, 1.5, 2], weights: [0, 0, 1] }
  ];
  const initial = { preset: 0, tone: 38, motion: 45, volume: 25 };
  let state = { ...initial };
  const storageKey = 'genseki-sound-studies-01-v1';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let paused = false;
  let playing = false;
  let audio = null;
  let audioStartedAt = 0;
  let elapsedAudio = 0;
  let lastHelpTrigger = null;
  const metrics = {
    environment: 'Current browser; viewport simulation is not a physical device test',
    viewport: [innerWidth, innerHeight],
    renderer: 'pending',
    lcp_ms: null,
    cls: null,
    lcp_supported: false,
    cls_supported: false,
    active_render: { count: 0, span_seconds: 0, effective_fps: null, median_ms: null, p95_ms: null },
    note: 'Raw browser observations. Not a quality score.'
  };
  const writeMetrics = () => {
    metrics.viewport = [innerWidth, innerHeight];
    $('#diagnostics-json').textContent = JSON.stringify(metrics, null, 2);
  };
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver(list => {
        const entries = list.getEntries();
        if (entries.length) metrics.lcp_ms = Math.round(entries[entries.length - 1].startTime);
        writeMetrics();
      });
      observer.observe({ type: 'largest-contentful-paint', buffered: true });
      metrics.lcp_supported = true;
    } catch { /* Unsupported metric stays null. */ }
    try {
      let maximumSession = 0, sessionValue = 0, firstShift = 0, lastShift = 0;
      const observer = new PerformanceObserver(list => {
        list.getEntries().forEach(entry => {
          if (entry.hadRecentInput) return;
          if (sessionValue && entry.startTime - lastShift < 1000 && entry.startTime - firstShift < 5000) sessionValue += entry.value;
          else { sessionValue = entry.value; firstShift = entry.startTime; }
          lastShift = entry.startTime;
          maximumSession = Math.max(maximumSession, sessionValue);
        });
        metrics.cls = Number(maximumSession.toFixed(6)); writeMetrics();
      });
      observer.observe({ type: 'layout-shift', buffered: true });
      metrics.cls_supported = true; metrics.cls = 0;
    } catch { /* Unsupported metric stays null. */ }
  }
  writeMetrics();
  const status = (message, isError = false) => {
    $('#status-message').textContent = message;
    $('#status-message').classList.toggle('error', isError);
  };

  function updateLabels() {
    const preset = presets[state.preset];
    document.querySelectorAll('[data-preset]').forEach(button => {
      const active = Number(button.dataset.preset) === state.preset;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    const number = document.createElement('span');
    number.textContent = String(state.preset + 1).padStart(2, '0');
    $('#preset-name').replaceChildren(document.createTextNode(preset.name), number);
    $('#preset-description').textContent = preset.description;
    $('#object-index').textContent = String(state.preset + 1).padStart(2, '0');
    $('#object-material').textContent = preset.material;
    ['tone', 'motion', 'volume'].forEach(key => {
      const input = $(`#${key}`);
      input.value = String(state[key]);
      input.style.setProperty('--fill', `${state[key]}%`);
      $(`#${key}-output`).textContent = String(state[key]);
    });
    $('.mini-form').style.color = state.preset === 1 ? '#4c625f' : state.preset === 2 ? '#776c50' : '#bb3d20';
    $('.mini-form').style.transform = `rotate(${state.preset * 24}deg)`;
  }
  document.querySelectorAll('[data-preset]').forEach(button => button.addEventListener('click', () => {
    state.preset = Number(button.dataset.preset);
    state.tone = presets[state.preset].tone;
    state.motion = presets[state.preset].motion;
    updateLabels();
    updateAudio();
    renderer?.setPreset();
    status(`${presets[state.preset].name}を選びました。明るさとゆらぎを調整できます。`);
  }));
  ['tone', 'motion', 'volume'].forEach(key => $(`#${key}`).addEventListener('input', event => {
    state[key] = Number(event.target.value);
    $(`#${key}-output`).textContent = String(state[key]);
    event.target.style.setProperty('--fill', `${state[key]}%`);
    updateAudio();
    renderer?.wake();
  }));

  function validSettings(value) {
    return value && typeof value === 'object' && !Array.isArray(value) &&
      Number.isInteger(value.preset) && value.preset >= 0 && value.preset < presets.length &&
      ['tone', 'motion', 'volume'].every(key => Number.isFinite(value[key]) && value[key] >= 0 && value[key] <= 100);
  }
  $('#save').addEventListener('click', () => {
    try {
      localStorage.setItem(storageKey, JSON.stringify({ version: 1, settings: { ...state } }));
      status('現在の設定をこのブラウザに保存しました。');
    } catch {
      status('設定を保存できませんでした。ブラウザの保存許可を確認するか、JSONを書き出してください。', true);
    }
  });
  $('#restore').addEventListener('click', () => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (!raw) { status('保存された設定はありません。気に入った響きができたら「設定を保存」を押してください。'); return; }
      const saved = JSON.parse(raw);
      if (saved.version !== 1 || !validSettings(saved.settings)) throw new Error('invalid-settings');
      state = { preset: saved.settings.preset, tone: Math.round(saved.settings.tone), motion: Math.round(saved.settings.motion), volume: Math.round(saved.settings.volume) };
      updateLabels(); updateAudio(); renderer?.setPreset();
      status('保存した設定を戻しました。再生ボタンを押すと音を確認できます。');
    } catch {
      status('保存した設定を読み込めませんでした。初期設定へ戻すか、新しい設定を保存してください。', true);
    }
  });
  $('#reset').addEventListener('click', () => {
    state = { ...initial };
    updateLabels(); updateAudio(); renderer?.setPreset();
    status('Emberの初期設定に戻しました。保存済みの設定は残っています。');
  });
  $('#export').addEventListener('click', () => {
    try {
      const data = JSON.stringify({ format: 'genseki-sound-studies', version: 1, presetName: presets[state.preset].name, settings: { ...state } }, null, 2);
      const blob = new Blob([data + '\n'], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url; link.download = `sound-studies-${presets[state.preset].name.toLowerCase()}.json`;
      document.body.append(link); link.click(); link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 10000);
      status('設定JSONのダウンロードを開始しました。ブラウザのダウンロード先を確認してください。');
    } catch {
      status('JSONを書き出せませんでした。このブラウザでのファイル保存が許可されているか確認してください。', true);
    }
  });

  function setAudioUI() {
    const button = $('#play-toggle');
    button.setAttribute('aria-pressed', String(playing));
    button.querySelector('span').textContent = playing ? '音を停止する' : '音を再生する';
    button.querySelector('path').setAttribute('d', playing ? 'M4 3h8v10H4Z' : 'm5 3 8 5-8 5Z');
    $('#signal-status').classList.toggle('playing', playing);
    $('#signal-status').replaceChildren(Object.assign(document.createElement('i'), { ariaHidden: 'true' }), document.createTextNode(playing ? ' Playing' : ' Stopped'));
  }
  async function startAudio() {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) throw new Error('unsupported-audio');
    const ctx = new AudioContextClass();
    const master = ctx.createGain(); master.gain.value = 0;
    const filter = ctx.createBiquadFilter(); filter.type = 'lowpass'; filter.Q.value = 0.45;
    const compressor = ctx.createDynamicsCompressor(); compressor.threshold.value = -18; compressor.ratio.value = 4;
    const analyser = ctx.createAnalyser(); analyser.fftSize = 256; analyser.smoothingTimeConstant = 0.85;
    const delay = ctx.createDelay(2); delay.delayTime.value = .37;
    const feedback = ctx.createGain(); feedback.gain.value = .24;
    const wet = ctx.createGain(); wet.gain.value = .14;
    filter.connect(master); master.connect(compressor); compressor.connect(analyser); analyser.connect(ctx.destination);
    filter.connect(delay); delay.connect(feedback); feedback.connect(delay); delay.connect(wet); wet.connect(master);
    const voices = presets[state.preset].ratios.map((ratio, index) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain(); gain.gain.value = [0.24, .115, .075, .035][index];
      osc.type = index === 3 ? 'triangle' : 'sine'; osc.frequency.value = presets[state.preset].base * ratio;
      osc.detune.value = index % 2 ? -3 : 3;
      osc.connect(gain); gain.connect(filter); osc.start();
      return { osc, gain };
    });
    const lfo = ctx.createOscillator(); lfo.frequency.value = .13;
    const lfoDepth = ctx.createGain(); lfoDepth.gain.value = 2;
    lfo.connect(lfoDepth); voices.forEach(voice => lfoDepth.connect(voice.osc.detune)); lfo.start();
    audio = { ctx, master, filter, compressor, analyser, delay, feedback, wet, voices, lfo, lfoDepth, frequency: new Uint8Array(analyser.frequencyBinCount) };
    await ctx.resume();
    if (ctx.state !== 'running') throw new Error('audio-not-running');
    playing = true; elapsedAudio = 0; audioStartedAt = performance.now();
    updateAudio(); setAudioUI(); renderer?.wake();
    status(`${presets[state.preset].name}を再生しています。音量はいつでも調整できます。`);
  }
  function updateAudio() {
    if (!audio || !playing) return;
    const now = audio.ctx.currentTime;
    audio.master.gain.setTargetAtTime(Math.pow(state.volume / 100, 1.6) * .65, now, .08);
    audio.filter.frequency.setTargetAtTime(180 + Math.pow(state.tone / 100, 2) * 5800, now, .25);
    const preset = presets[state.preset];
    audio.voices.forEach((voice, index) => voice.osc.frequency.setTargetAtTime(preset.base * preset.ratios[index], now, .3));
    audio.lfo.frequency.setTargetAtTime(.06 + state.motion / 100 * .32, now, .3);
    audio.lfoDepth.gain.setTargetAtTime(state.motion / 100 * 11, now, .3);
    audio.wet.gain.setTargetAtTime(.09 + state.motion / 100 * .2, now, .3);
  }
  function stopAudio(message) {
    const old = audio;
    playing = false; audio = null;
    if (old) {
      elapsedAudio = Math.floor((performance.now() - audioStartedAt) / 1000);
      try { old.master.gain.setTargetAtTime(0, old.ctx.currentTime, .035); } catch { /* Context may already be closed. */ }
      setTimeout(() => {
        try { old.voices.forEach(voice => voice.osc.stop()); old.lfo.stop(); } catch { /* Nodes may already be stopped. */ }
        old.ctx.close().catch(() => {});
      }, 180);
    }
    setAudioUI(); renderer?.wake();
    if (message) status(message);
  }
  $('#play-toggle').addEventListener('click', async () => {
    if (playing) { stopAudio('音を停止しました。設定を調整して、もう一度再生できます。'); return; }
    const button = $('#play-toggle'); button.disabled = true;
    try { await startAudio(); }
    catch {
      stopAudio();
      status('この環境では音声を開始できませんでした。ブラウザの音声設定を確認して、もう一度お試しください。', true);
    } finally { button.disabled = false; }
  });
  const levelBars = Array.from({ length: 27 }, (_, index) => {
    const bar = document.createElement('span'); bar.dataset.index = String(index); $('#level-bars').append(bar); return bar;
  });
  function updateAudioVisuals() {
    let energy = 0;
    if (playing && audio) {
      audio.analyser.getByteFrequencyData(audio.frequency);
      for (let index = 0; index < 32; index++) energy += audio.frequency[index];
      energy /= 32 * 255;
      levelBars.forEach((bar, index) => { bar.style.height = `${3 + audio.frequency[index * 2] / 255 * 27}px`; });
      elapsedAudio = Math.floor((performance.now() - audioStartedAt) / 1000);
    } else levelBars.forEach(bar => { bar.style.height = '3px'; });
    $('#audio-time').textContent = `${String(Math.floor(elapsedAudio / 60)).padStart(2, '0')}:${String(elapsedAudio % 60).padStart(2, '0')}`;
    return energy;
  }
  // Audio UI also updates when graphics are paused or unavailable, without a continuous graphics RAF.
  const audioUITimer = setInterval(() => { if (playing && (!renderer || paused || reduced.matches)) updateAudioVisuals(); }, 120);
  window.addEventListener('pagehide', () => { stopAudio(); clearInterval(audioUITimer); renderer?.suspend(); });

  $('#motion-toggle').addEventListener('click', () => {
    paused = !paused;
    updateMotionUI(); renderer?.wake();
  });
  function updateMotionUI() {
    const stopped = paused || reduced.matches;
    $('#motion-toggle').setAttribute('aria-pressed', String(stopped));
    $('#motion-toggle').querySelector('span').textContent = stopped ? '動きを再開する' : '動きを止める';
    $('#motion-toggle').querySelector('path').setAttribute('d', stopped ? 'm5 3 8 5-8 5Z' : 'M5 3v10M11 3v10');
    $('#motion-toggle').querySelector('svg').style.fill = stopped ? 'currentColor' : 'none';
    $('#motion-label').textContent = reduced.matches ? 'Reduced motion' : paused ? 'Motion paused' : 'Motion on';
    if (reduced.matches) {
      $('#motion-toggle').setAttribute('aria-label', 'OSの設定により動きを抑えています');
      $('#motion-toggle').disabled = true;
    } else {
      $('#motion-toggle').removeAttribute('aria-label'); $('#motion-toggle').disabled = false;
    }
  }
  reduced.addEventListener('change', () => { updateMotionUI(); renderer?.wake(); });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (playing) stopAudio('タブを離れたため音を停止しました。再生ボタンで再開できます。');
      renderer?.suspend();
    } else renderer?.wake();
  });

  const help = $('#help-dialog');
  function closeMenu() { $('#mobile-menu').hidden = true; $('.menu-toggle').setAttribute('aria-expanded', 'false'); }
  $('.menu-toggle').addEventListener('click', () => {
    const expanded = $('.menu-toggle').getAttribute('aria-expanded') === 'true';
    $('.menu-toggle').setAttribute('aria-expanded', String(!expanded)); $('#mobile-menu').hidden = expanded;
  });
  $('#mobile-menu').querySelector('a').addEventListener('click', closeMenu);
  document.querySelectorAll('[data-help]').forEach(button => button.addEventListener('click', () => {
    lastHelpTrigger = button; closeMenu(); help.showModal(); $('#help-close').focus();
  }));
  $('#help-close').addEventListener('click', () => help.close());
  help.addEventListener('click', event => {
    if (event.target !== help) return;
    const rect = help.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) help.close();
  });
  help.addEventListener('close', () => {
    if (lastHelpTrigger && lastHelpTrigger.offsetParent !== null) lastHelpTrigger.focus();
    else $('.menu-toggle').focus();
  });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && !$('#mobile-menu').hidden) { closeMenu(); $('.menu-toggle').focus(); } });

  const vertexSource = `
precision highp float;
attribute vec2 a_uv;
attribute float a_layer;
uniform vec3 u_weights;
uniform float u_time;
uniform float u_motion;
uniform float u_energy;
uniform float u_aspect;
uniform float u_intro;
uniform vec2 u_pointer;
varying vec3 v_position;
varying vec3 v_normal;
varying vec2 v_uv;
varying float v_layer;
const float PI=3.141592653589793;
mat3 rx(float a){float s=sin(a),c=cos(a);return mat3(1.,0.,0.,0.,c,s,0.,-s,c);}
mat3 ry(float a){float s=sin(a),c=cos(a);return mat3(c,0.,-s,0.,1.,0.,s,0.,c);}
mat3 rz(float a){float s=sin(a),c=cos(a);return mat3(c,s,0.,-s,c,0.,0.,0.,1.);}
vec3 surface(vec2 uv,float layer){
 float t=uv.x*PI*2.;
 float a=uv.y*PI*2.;
 float phase=(layer-1.)*.34;
 float breathe=sin(t*3.+u_time*.65+layer)*u_motion*.055;
 vec3 ember=vec3((1.32+.22*cos(t*3.))*cos(t),1.25*sin(t),.49*sin(t*2.));
 vec3 tidal=vec3(1.63*cos(t),.89*sin(t)+.14*sin(t*2.),.43*sin(t*3.));
 vec3 halo=vec3(1.6*cos(t),1.45*sin(t),.12*cos(t*2.));
 vec3 center=ember*u_weights.x+tidal*u_weights.y+halo*u_weights.z;
 center*=1.-layer*.075;
 vec3 normal=normalize(vec3(cos(t),sin(t),.14*cos(2.*t)));
 vec3 tangent=normalize(vec3(-sin(t),cos(t),.45*cos(t*2.)));
 vec3 binormal=normalize(cross(tangent,normal));
 float twist=t*(1.5*u_weights.x+.72*u_weights.y+.28*u_weights.z)+layer*.9;
 vec3 broad=normal*cos(twist)+binormal*sin(twist);
 vec3 thin=-normal*sin(twist)+binormal*cos(twist);
 float width=(.44+.08*sin(t*3.+layer))*(1.-.25*u_weights.z);
 float rib=pow(.5+.5*cos(t*118.+layer*.9),2.2)*.025;
 float pulse=1.+u_energy*.09*sin(t*4.+u_time);
 vec3 p=center+broad*(cos(a)*(width+rib+breathe)*pulse)+thin*(sin(a)*(.055+rib*.32));
 p=rz(phase)*ry((layer-1.)*.22)*p;
 return p;
}
void main(){
 vec3 p=surface(a_uv,a_layer);
 vec3 du=surface(a_uv+vec2(.00005,0.),a_layer)-surface(a_uv-vec2(.00005,0.),a_layer);
 vec3 dv=surface(a_uv+vec2(0.,.0001),a_layer)-surface(a_uv-vec2(0.,.0001),a_layer);
 vec3 n=normalize(cross(du,dv));
 float drift=sin(u_time*.31)*.06*u_motion;
 mat3 rotation=rz(-.29+drift)*ry(-.36+u_pointer.x)*rx(.50+u_pointer.y);
 p=rotation*p; n=rotation*n;
 p*=mix(.92,1.,u_intro);
 p.y+=.04;
 v_position=p;v_normal=n;v_uv=a_uv;v_layer=a_layer;
 float cameraZ=6.45;
 vec3 view=p-vec3(0.,0.,cameraZ);
 float f=2.52;
 gl_Position=vec4(view.x*f/u_aspect,view.y*f,-1.02*view.z-.202,-view.z);
}`;
  const fragmentSource = `
precision highp float;
uniform vec3 u_weights;
uniform float u_tone;
varying vec3 v_position;
varying vec3 v_normal;
varying vec2 v_uv;
varying float v_layer;
float softbox(vec3 r,vec3 direction,float wide,float sharp){return smoothstep(wide,sharp,dot(r,normalize(direction)));}
void main(){
 vec3 n=normalize(v_normal);if(!gl_FrontFacing)n=-n;
 vec3 view=normalize(vec3(0.,0.,6.45)-v_position);
 vec3 r=reflect(-view,n);
 vec3 copper=vec3(.59,.24,.105);
 vec3 silver=vec3(.68,.72,.70);
 vec3 pearl=vec3(.76,.71,.58);
 vec3 metal=copper*u_weights.x+silver*u_weights.y+pearl*u_weights.z;
 float key=softbox(r,vec3(-1.,1.8,1.1),.55,.95);
 float strip=softbox(r,vec3(1.6,.35,1.),.91,.99);
 float top=softbox(r,vec3(.15,2.,-.4),.65,.94);
 float rim=pow(1.-max(dot(n,view),0.),3.);
 float ambient=.10+.17*max(n.y,0.);
 float foldShade=.72+.28*max(dot(n,normalize(vec3(-1.,1.,2.))),0.);
 float groove=.83+.17*pow(.5+.5*cos(v_uv.x*6.2831853*118.+v_layer*.9),.35);
 vec3 color=metal*(ambient+key*.78+top*.33)*foldShade*groove;
 color+=vec3(1.,.96,.86)*pow(key,6.)*.9;
 color+=vec3(.98,.98,.91)*strip*.8;
 color+=vec3(.29,.16,.08)*max(-r.y,0.)*.30;
 color+=vec3(.68,.70,.65)*rim*.38;
 color*=.91+u_tone*.16;
 color=color/(color+vec3(.62));
 color=pow(color,vec3(.91));
 gl_FragColor=vec4(color,1.);
}`;

  function createRenderer() {
    const canvas = $('#form-canvas');
    const host = $('#sculpture');
    let gl;
    try { gl = new URLSearchParams(location.search).get('graphics') === 'static' ? null : canvas.getContext('webgl', { alpha: true, antialias: true, depth: true, powerPreference: 'low-power' }); } catch { gl = null; }
    canvas.dataset.frame = '0'; canvas.dataset.renderer = 'fallback';
    function setMode() { canvas.dataset.motion = document.hidden ? 'hidden' : reduced.matches ? 'reduced' : paused ? 'paused' : 'running'; }
    setMode();
    const fallback = () => {
      canvas.dataset.renderer = 'fallback';
      metrics.renderer = 'fallback'; writeMetrics();
      host.classList.remove('webgl-ready'); canvas.classList.remove('ready');
      $('#graphics-notice').hidden = false;
    };
    if (!gl) { fallback(); return null; }
    let program;
    try {
      const compile = (type, source) => {
        const shader = gl.createShader(type); gl.shaderSource(shader, source); gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) { gl.deleteShader(shader); throw new Error('shader-compilation'); }
        return shader;
      };
      const vs = compile(gl.VERTEX_SHADER, vertexSource); const fs = compile(gl.FRAGMENT_SHADER, fragmentSource);
      program = gl.createProgram(); gl.attachShader(program, vs); gl.attachShader(program, fs); gl.linkProgram(program);
      gl.deleteShader(vs); gl.deleteShader(fs);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error('shader-link');
    } catch { fallback(); return null; }
    gl.useProgram(program);
    const uniforms = Object.fromEntries(['weights', 'time', 'motion', 'energy', 'aspect', 'intro', 'pointer', 'tone'].map(key => [key, gl.getUniformLocation(program, `u_${key}`)]));
    const narrow = innerWidth <= 600;
    const rings = narrow ? 432 : 660; const sides = narrow ? 20 : 24;
    const vertex = []; const indices = [];
    for (let layer = 0; layer < 3; layer++) {
      const start = vertex.length / 3;
      for (let i = 0; i <= rings; i++) for (let j = 0; j <= sides; j++) vertex.push(i / rings, j / sides, layer);
      for (let i = 0; i < rings; i++) for (let j = 0; j < sides; j++) {
        const a = start + i * (sides + 1) + j, b = a + sides + 1;
        indices.push(a, b, a + 1, b, b + 1, a + 1);
      }
    }
    const vertices = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, vertices); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertex), gl.STATIC_DRAW);
    const uv = gl.getAttribLocation(program, 'a_uv'); gl.enableVertexAttribArray(uv); gl.vertexAttribPointer(uv, 2, gl.FLOAT, false, 12, 0);
    const layerAttribute = gl.getAttribLocation(program, 'a_layer'); gl.enableVertexAttribArray(layerAttribute); gl.vertexAttribPointer(layerAttribute, 1, gl.FLOAT, false, 12, 8);
    const elements = gl.createBuffer(); gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elements); gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
    gl.enable(gl.DEPTH_TEST); gl.depthFunc(gl.LEQUAL); gl.disable(gl.CULL_FACE); gl.clearColor(0, 0, 0, 0);
    let frame = 0, request = 0, last = 0, startTime = 0, clock = 0, intro = reduced.matches ? 1 : 0;
    let currentWeights = [...presets[state.preset].weights], transitionFrom = [...currentWeights], transitionAt = 0, transitionActive = false;
    let pointer = [0, 0], targetPointer = [0, 0], contextLost = false;
    let samples = [];
    function size() {
      const rect = host.getBoundingClientRect(); const dpr = Math.min(devicePixelRatio || 1, innerWidth <= 600 ? 1.35 : 1.6);
      const width = Math.max(1, Math.round(rect.width * dpr)), height = Math.max(1, Math.round(rect.height * dpr));
      if (canvas.width !== width || canvas.height !== height) { canvas.width = width; canvas.height = height; gl.viewport(0, 0, width, height); }
      canvas.dataset.resolution = `${width}x${height}`;
      return width / height;
    }
    function draw(now) {
      request = 0; setMode();
      if (document.hidden || contextLost) return;
      if (!startTime) startTime = now;
      const rawInterval = last ? now - last : 0;
      const dt = Math.min(rawInterval / 1000, .05); last = now;
      const resting = paused || reduced.matches;
      if (!resting) clock += dt;
      intro = resting ? 1 : Math.min(1, (now - startTime) / 1100);
      const easedIntro = 1 - Math.pow(1 - intro, 3);
      if (transitionActive) {
        const progress = resting ? 1 : Math.min(1, (now - transitionAt) / 900);
        const eased = progress * progress * (3 - 2 * progress);
        currentWeights = currentWeights.map((value, index) => transitionFrom[index] + (presets[state.preset].weights[index] - transitionFrom[index]) * eased);
        if (progress === 1) transitionActive = false;
      }
      if (!resting) { const follow = 1 - Math.exp(-8 * dt); pointer[0] += (targetPointer[0] - pointer[0]) * follow; pointer[1] += (targetPointer[1] - pointer[1]) * follow; }
      const energy = updateAudioVisuals();
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      gl.uniform3fv(uniforms.weights, currentWeights); gl.uniform1f(uniforms.time, clock); gl.uniform1f(uniforms.motion, state.motion / 100);
      gl.uniform1f(uniforms.energy, resting ? 0 : energy); gl.uniform1f(uniforms.aspect, size()); gl.uniform1f(uniforms.intro, easedIntro);
      gl.uniform2fv(uniforms.pointer, reduced.matches ? [0, 0] : pointer); gl.uniform1f(uniforms.tone, state.tone / 100);
      gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
      frame++; canvas.dataset.frame = String(frame); canvas.dataset.renderer = 'webgl';
      metrics.renderer = 'webgl'; metrics.frames = frame; metrics.motion = canvas.dataset.motion;
      metrics.resolution = canvas.dataset.resolution;
      if (frame === 1) { canvas.classList.add('ready'); host.classList.add('webgl-ready'); }
      if (rawInterval > 0 && !resting) {
        samples.push({ time: now, interval: rawInterval });
        while (samples.length && samples[0].time < now - 20000) samples.shift();
      }
      if ((frame % 30 === 0 || resting) && samples.length) {
        const sorted = samples.map(sample => sample.interval).sort((a, b) => a - b);
        const span = samples.reduce((total, sample) => total + sample.interval, 0);
        metrics.active_render = {
          count: samples.length, span_seconds: Number((span / 1000).toFixed(3)),
          effective_fps: Number((samples.length / span * 1000).toFixed(2)),
          median_ms: Number(sorted[Math.floor(sorted.length * .5)].toFixed(2)),
          p95_ms: Number(sorted[Math.min(sorted.length - 1, Math.floor(sorted.length * .95))].toFixed(2))
        };
        canvas.dataset.frameMedianMs = String(metrics.active_render.median_ms);
        canvas.dataset.frameP95Ms = String(metrics.active_render.p95_ms);
        writeMetrics();
      }
      if (!resting) request = requestAnimationFrame(draw);
    }
    function wake() { setMode(); if (!request && !document.hidden && !contextLost) { last = 0; if (!paused && !reduced.matches) samples = []; request = requestAnimationFrame(draw); } }
    function suspend() { setMode(); if (request) cancelAnimationFrame(request); request = 0; last = 0; metrics.motion = canvas.dataset.motion; writeMetrics(); }
    function setPreset() { transitionFrom = [...currentWeights]; transitionAt = performance.now(); transitionActive = true; wake(); }
    host.addEventListener('pointermove', event => {
      if (event.pointerType === 'touch' || paused || reduced.matches) return;
      const rect = host.getBoundingClientRect();
      targetPointer = [(event.clientX - rect.left) / rect.width * .32 - .16, (event.clientY - rect.top) / rect.height * .2 - .1]; wake();
    });
    host.addEventListener('pointerleave', () => { targetPointer = [0, 0]; });
    window.addEventListener('resize', wake);
    canvas.addEventListener('webglcontextlost', event => { event.preventDefault(); contextLost = true; suspend(); fallback(); });
    canvas.addEventListener('webglcontextrestored', () => { status('立体の描画を再開するにはページを再読み込みしてください。音色操作は使えます。'); });
    canvas.dataset.vertices = String(vertex.length / 3); canvas.dataset.triangles = String(indices.length / 3);
    wake();
    return { wake, suspend, setPreset };
  }
  let renderer = null;
  updateLabels(); updateMotionUI();
  renderer = createRenderer();
})();
