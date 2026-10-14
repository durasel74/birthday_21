'use strict';

/* ==========================================================
   Плейсхолдеры: если картинки из img/ ещё не положены —
   подставляются милые встроенные SVG-рисунки.
   ========================================================== */

const svgURI = s => 'data:image/svg+xml,' + encodeURIComponent(s);

const SVG_SRC = {
  'envelope.png':
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 160">
      <rect x="12" y="32" width="196" height="118" rx="16" fill="#fdeaf0" stroke="#dfa8ba" stroke-width="6"/>
      <path d="M18 136l70-40M202 136l-70-40" fill="none" stroke="#e9bcc9" stroke-width="5" stroke-linecap="round"/>
      <path d="M14 50q0-16 18-16h156q18 0 18 16l-96 62q-10 8-20 0z" fill="#fff6f8" stroke="#dfa8ba" stroke-width="6" stroke-linejoin="round"/>
      <path d="M110 52c-4-8-15-7-15 2 0 6 7 10 15 16 8-6 15-10 15-16 0-9-11-10-15-2z" fill="#ee7f9d" stroke="#d76f90" stroke-width="4" stroke-linejoin="round"/>
    </svg>`,

  'envelope_open.png':
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 180">
      <path d="M16 86l78-58q16-12 32 0l78 58" fill="#fff6f8" stroke="#dfa8ba" stroke-width="6" stroke-linejoin="round"/>
      <rect x="52" y="40" width="116" height="98" rx="10" fill="#fffdf4" stroke="#e3cfa8" stroke-width="5"/>
      <path d="M68 64h84M68 82h84M68 100h52" fill="none" stroke="#e9d8b6" stroke-width="6" stroke-linecap="round"/>
      <path d="M150 52c-2.5-5-9-4.5-9 1 0 3.5 4.5 6 9 9.5 4.5-3.5 9-6 9-9.5 0-5.5-6.5-6-9-1z" fill="#ee7f9d"/>
      <path d="M16 86v46q0 18 18 18h152q18 0 18-18V86l-96 54q-8 5-16 0z" fill="#fdeaf0" stroke="#dfa8ba" stroke-width="6" stroke-linejoin="round"/>
    </svg>`,

  'dog.png':
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 130">
      <path d="M24 86Q8 82 10 64" fill="none" stroke="#c9884f" stroke-width="11" stroke-linecap="round"/>
      <ellipse cx="56" cy="92" rx="35" ry="26" fill="#f2d3a7"/>
      <rect x="78" y="100" width="14" height="20" rx="7" fill="#f2d3a7"/>
      <rect x="96" y="100" width="14" height="20" rx="7" fill="#f2d3a7"/>
      <circle cx="103" cy="56" r="38" fill="#f2d3a7"/>
      <path d="M70 34q-16 4-13 32 3 12 13 8 6-14 4-40z" fill="#c9884f"/>
      <path d="M133 28q16 6 11 36-3 12-13 8-6-16-4-44z" fill="#c9884f"/>
      <ellipse cx="91" cy="33" rx="11" ry="8" fill="#e2b47e"/>
      <circle cx="90" cy="54" r="5" fill="#4a3b2e"/>
      <circle cx="114" cy="52" r="5" fill="#4a3b2e"/>
      <circle cx="91.7" cy="52.3" r="1.8" fill="#fff"/>
      <circle cx="115.7" cy="50.3" r="1.8" fill="#fff"/>
      <ellipse cx="127" cy="64" rx="7.5" ry="6" fill="#4a3b2e"/>
      <path d="M125 70q-4 7-13 6" fill="none" stroke="#4a3b2e" stroke-width="3.5" stroke-linecap="round"/>
      <ellipse cx="86" cy="67" rx="8" ry="5" fill="#f6b7c1" opacity=".8"/>
    </svg>`,

  'rabbit.png':
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 140">
      <g stroke="#dcae97" stroke-width="4">
        <ellipse cx="58" cy="32" rx="13" ry="29" fill="#f9eee4" transform="rotate(-9 58 32)"/>
        <ellipse cx="90" cy="29" rx="13" ry="31" fill="#f9eee4" transform="rotate(8 90 29)"/>
      </g>
      <ellipse cx="58" cy="36" rx="5.5" ry="17" fill="#f6c3ce" transform="rotate(-9 58 36)"/>
      <ellipse cx="90" cy="33" rx="5.5" ry="18" fill="#f6c3ce" transform="rotate(8 90 33)"/>
      <ellipse cx="74" cy="94" rx="45" ry="40" fill="#f9eee4" stroke="#dcae97" stroke-width="4"/>
      <circle cx="61" cy="89" r="5" fill="#4a3b2e"/>
      <circle cx="87" cy="89" r="5" fill="#4a3b2e"/>
      <circle cx="62.7" cy="87.3" r="1.8" fill="#fff"/>
      <circle cx="88.7" cy="87.3" r="1.8" fill="#fff"/>
      <path d="M70.5 99h7l-3.5 4.5z" fill="#e2849b"/>
      <path d="M74 104v3m0 0q-3 3.5-6.5 1.5M74 107q3 3.5 6.5 1.5" fill="none" stroke="#4a3b2e" stroke-width="2.5" stroke-linecap="round"/>
      <ellipse cx="50" cy="99" rx="8" ry="5" fill="#f6b7c1" opacity=".8"/>
      <ellipse cx="98" cy="99" rx="8" ry="5" fill="#f6b7c1" opacity=".8"/>
      <ellipse cx="60" cy="127" rx="10" ry="7" fill="#fff" stroke="#dcae97" stroke-width="3.5"/>
      <ellipse cx="88" cy="127" rx="10" ry="7" fill="#fff" stroke="#dcae97" stroke-width="3.5"/>
    </svg>`,

  'rabbit_sticker.png':
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 175">
      <g fill="#fff" stroke="#fff" stroke-width="18" stroke-linejoin="round">
        <ellipse cx="56" cy="42" rx="14" ry="27" transform="rotate(-9 56 42)"/>
        <ellipse cx="98" cy="40" rx="14" ry="28" transform="rotate(8 98 40)"/>
        <ellipse cx="77" cy="106" rx="47" ry="44"/>
      </g>
      <g stroke="#dcae97" stroke-width="4">
        <ellipse cx="56" cy="42" rx="12.5" ry="24" fill="#f9eee4" transform="rotate(-9 56 42)"/>
        <ellipse cx="98" cy="40" rx="12.5" ry="25" fill="#f9eee4" transform="rotate(8 98 40)"/>
      </g>
      <ellipse cx="56" cy="45" rx="5" ry="13" fill="#f6c3ce" transform="rotate(-9 56 45)"/>
      <ellipse cx="98" cy="43" rx="5" ry="14" fill="#f6c3ce" transform="rotate(8 98 43)"/>
      <ellipse cx="77" cy="106" rx="45" ry="42" fill="#f9eee4" stroke="#dcae97" stroke-width="4"/>
      <circle cx="62" cy="100" r="5.5" fill="#4a3b2e"/>
      <circle cx="92" cy="100" r="5.5" fill="#4a3b2e"/>
      <circle cx="63.8" cy="98.2" r="2" fill="#fff"/>
      <circle cx="93.8" cy="98.2" r="2" fill="#fff"/>
      <path d="M73.5 111h7l-3.5 4.5z" fill="#e2849b"/>
      <path d="M77 116v3m0 0q-3 3.5-6.5 1.5M77 119q3 3.5 6.5 1.5" fill="none" stroke="#4a3b2e" stroke-width="2.5" stroke-linecap="round"/>
      <ellipse cx="49" cy="110" rx="8.5" ry="5.5" fill="#f6b7c1" opacity=".85"/>
      <ellipse cx="105" cy="110" rx="8.5" ry="5.5" fill="#f6b7c1" opacity=".85"/>
      <path d="M77 162c-7-5-13-9-13-15 0-5 4-8.5 8.5-8.5 2 0 3.5 1 4.5 2.5 1-1.5 2.5-2.5 4.5-2.5 4.5 0 8.5 3.5 8.5 8.5 0 6-6 10-13 15z" fill="#f49ab2" stroke="#d76f90" stroke-width="4" stroke-linejoin="round"/>
      <ellipse cx="56" cy="150" rx="10" ry="8" fill="#fff" stroke="#dcae97" stroke-width="3.5"/>
      <ellipse cx="98" cy="150" rx="10" ry="8" fill="#fff" stroke="#dcae97" stroke-width="3.5"/>
    </svg>`,

  'heart.png':
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <path d="M60 104C26 80 10 60 10 40 10 24 22 12 37 12c10 0 18 5 23 13 5-8 13-13 23-13 15 0 27 12 27 28 0 20-16 40-50 64z" fill="#f49ab2" stroke="#d76f90" stroke-width="6" stroke-linejoin="round"/>
      <path d="M32 34c-6 3-9 9-9 15" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round" opacity=".75"/>
    </svg>`
};

const FALLBACK = {};
for (const key in SVG_SRC) FALLBACK[key] = svgURI(SVG_SRC[key]);

/* Вспомогательный <img>: грузит img/<файл>, при ошибке — плейсхолдер */
function makeImage(file, alt) {
  const img = new Image();
  img.alt = alt || '';
  img.draggable = false;
  img.addEventListener('error', () => { img.src = FALLBACK[file]; }, { once: true });
  img.src = 'img/' + file;
  return img;
}

/* Фоллбэк для статических <img data-fb="..."> в разметке */
document.querySelectorAll('img[data-fb]').forEach(img => {
  const file = img.dataset.fb;
  const swap = () => { img.src = FALLBACK[file]; };
  if (img.complete && img.naturalWidth === 0) swap();
  else img.addEventListener('error', swap, { once: true });
});

/* ==========================================================
   Движок летающих зверят (общий для обеих сцен)
   ========================================================== */

const flyers = new Set();
let flyLayer = null;

const flyCfg = {
  gapMin: 4200, gapMax: 8500,   // пауза между появлениями, мс
  boost: 1, boostTarget: 1,     // множитель скорости и частоты
  kinds: [['dog.png', .44], ['rabbit.png', .44], ['heart.png', .12]], // кто летит СЗАДИ
  frontLayer: null,             // слой ПЕРЕД письмом
  frontKinds: [],               // кто летит СПЕРЕДИ
  frontChance: 0,               // вероятность спавна спереди, 0..1
  prefill: 0
};

function pickKind(list) {
  let r = Math.random();
  for (const [kind, w] of list) { if ((r -= w) <= 0) return kind; }
  return list[0][0];
}

function spawnFlyer(opts = {}) {
  const anywhere = !!opts.anywhere;   // true — появиться сразу на экране (предзаполнение)

  /* иногда объект летит не за письмом, а перед ним
     (при предзаполнении — всегда в заднем слое) */
  const useFront = !anywhere && !!flyCfg.frontLayer && Math.random() < flyCfg.frontChance;
  const layer = useFront ? flyCfg.frontLayer : flyLayer;
  if (!layer) return;

  const depth = Math.random();                       // 0 — далеко, 1 — близко
  const size  = Math.round(useFront ? 40 + depth * 48 : 52 + depth * 62);
  const dir   = Math.random() < .5 ? 1 : -1;
  const kind  = opts.kind || pickKind(useFront ? flyCfg.frontKinds : flyCfg.kinds);
  const el    = makeImage(kind);
  el.className = 'flyer';
  el.style.width = size + 'px';

  const f = {
    el, dir, size,
    x: dir === 1 ? -size * 1.6 : innerWidth + size * .6,
    baseY: (8 + Math.random() * 66) * innerHeight / 100,
    y: 0,
    speed: 26 + depth * 36,                          // ближе — быстрее (параллакс)
    amp: 8 + Math.random() * 22,
    freq: .5 + Math.random() * .9,
    phase: Math.random() * 6.28,
    t: 0
  };

  /* предзаполнение: размещаем уже в полёте, по всей ширине экрана */
  if (anywhere) {
    const minX = innerWidth * .12;
    const maxX = innerWidth * .88 - size;
    f.x = minX + (opts.slot !== undefined ? opts.slot : Math.random())
              * Math.max(40, maxX - minX);
    f.t = Math.random() * 10;    // у каждого своя фаза волнистости
  }

  el.style.opacity = '0';
  /* сердечки над текстом чуть прозрачнее, чтобы не мешать чтению */
  const finalOp = useFront ? .72 + depth * .18 : .82 + depth * .18;
  setTimeout(() => { el.style.opacity = String(finalOp); }, 40);

  flyers.add(f);
  layer.appendChild(el);
}

function setFlyLayer(el, cfg) {
  for (const f of flyers) f.el.remove();
  flyers.clear();
  flyLayer = el;
  Object.assign(flyCfg, {
    kinds: [['dog.png', .44], ['rabbit.png', .44], ['heart.png', .12]],
    frontLayer: null,
    frontKinds: [],
    frontChance: 0,
    prefill: 0
  }, cfg);
  spawnIn = 600 + Math.random() * 600;

  /* предзаполнение: небо обжито с первой секунды */
  const n = flyCfg.prefill | 0;
  if (n > 0) {
    const list = flyCfg.kinds.map(k => k[0]);
    for (let i = list.length - 1; i > 0; i--) {          // перемешаем виды
      const j = (Math.random() * (i + 1)) | 0;
      [list[i], list[j]] = [list[j], list[i]];
    }
    for (let i = 0; i < n; i++) {
      const slot = (i + .5) / n + (Math.random() - .5) * (.7 / n);
      spawnFlyer({ anywhere: true, slot, kind: list[i % list.length] });
    }
  }
}

let lastT = performance.now();
let spawnIn = 500;

function frame(now) {
  const dt = Math.min((now - lastT) / 1000, .06);
  lastT = now;

  /* плавный разгон во время «наезда камеры» */
  flyCfg.boost += (flyCfg.boostTarget - flyCfg.boost) * Math.min(1, dt * 1.9);

  if (flyLayer) {
    spawnIn -= dt * 1000 * flyCfg.boost;
    if (spawnIn <= 0) {
      spawnFlyer();
      spawnIn = flyCfg.gapMin + Math.random() * (flyCfg.gapMax - flyCfg.gapMin);
    }
  }

  for (const f of flyers) {
    f.t += dt;
    f.x += f.dir * f.speed * flyCfg.boost * dt;
    f.y = f.baseY + Math.sin(f.t * f.freq + f.phase) * f.amp;
    f.el.style.transform =
      `translate3d(${f.x}px, ${f.y}px, 0) scaleX(${f.dir})`;

    const out = f.dir === 1 ? f.x > innerWidth + f.size * 1.6 : f.x < -f.size * 2;
    if (out) { flyers.delete(f); f.el.remove(); }
  }
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

/* Сменить сцену полётов и её настройки */
function setFlyLayer(el, cfg) {
  for (const f of flyers) f.el.remove();
  flyers.clear();
  flyLayer = el;
  Object.assign(flyCfg, {
    kinds: [['dog.png', .44], ['rabbit.png', .44], ['heart.png', .12]],
    frontLayer: null,
    frontKinds: [],
    frontChance: 0
  }, cfg);
  spawnIn = 400;
}

/* ==========================================================
   Сердечки-эффект
   ========================================================== */

function burstHearts(x, y, n = 9, small = false) {
  for (let i = 0; i < n; i++) {
    const img = makeImage('heart.png');
    img.className = 'burst-heart';
    const size = (small ? 14 : 20) + Math.random() * (small ? 12 : 26);
    img.style.width = size + 'px';
    img.style.left = x + 'px';
    img.style.top = y + 'px';
    document.body.appendChild(img);

    const ang  = -Math.PI / 2 + (Math.random() - .5) * 2.4;
    const dist = 70 + Math.random() * 130;
    const dx = Math.cos(ang) * dist;
    const dy = Math.sin(ang) * dist - 30;
    const rot = (Math.random() - .5) * 260;

    img.animate([
      { transform: 'translate(-50%,-50%) scale(.3) rotate(0deg)', opacity: 1 },
      { transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(1) rotate(${rot}deg)`, opacity: 0 }
    ], { duration: 850 + Math.random() * 550, easing: 'cubic-bezier(.16,.6,.4,1)', fill: 'forwards' })
      .onfinish = () => img.remove();
  }
}

/* ==========================================================
   Сценарий открытки
   ========================================================== */

const $ = s => document.querySelector(s);

const zone        = $('#letterZone'),
      stage       = $('#envelopeStage'),
      hint        = $('#tapHint'),
      glow        = $('#glow'),
      flash       = $('#flash'),
      sceneIntro  = $('#sceneIntro'),
      sceneLetter = $('#sceneLetter'),
      scrollHint  = $('#scrollHint'),
      letterScroll= $('#letterScroll'),
      sticker     = $('#sticker');

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Сцена 1: спокойные редкие полёты */
setFlyLayer($('#flyLayer1'), {
  gapMin: reduceMotion ? 7000 : 4200,
  gapMax: reduceMotion ? 13000 : 8500,
  prefill: 6        /* уже летят, когда страница открылась */
});
flyCfg.boostTarget = 1;

function setFlash(on, fast) {
  flash.style.transition = `opacity ${fast ? .22 : .45}s ease`;
  flash.style.opacity = on ? '1' : '0';
}

let opened = false;

zone.addEventListener('click', openLetter);

function openLetter() {
  if (opened) return;
  opened = true;

  hint.classList.add('gone');

  /* Фаза 1: замах — письмо резко сжимается */
  zone.classList.add('squash');

  /* Фаза 2: подмена на открытый конверт в пик сжатия
     + резкий щелчок с одним отскоком + сердечки */
  setTimeout(() => {
    zone.classList.add('opened');
    const r = stage.getBoundingClientRect();
    burstHearts(r.left + r.width / 2, r.top + r.height / 2, 10);
  }, 120);

  /* Фаза 3: наезд камеры, свет, зверята быстрее (щелчок уже отыграл) */
  setTimeout(() => {
    stage.classList.add('zoom');
    glow.classList.add('on');
    flyCfg.boostTarget = reduceMotion ? 2.2 : 3.6;
  }, 950);

  /* Фаза 4: вспышка добела */
  setTimeout(() => setFlash(true, false), 2050);

  /* Фаза 5: под белой вспышкой гасим свет и показываем письмо */
  setTimeout(() => {
    glow.style.transition = 'none';
    glow.classList.remove('on');
    glow.style.opacity = '0';

    sceneIntro.style.display = 'none';
    sceneLetter.hidden = false;
    sceneLetter.classList.add('enter');
    setFlyLayer($('#flyLayer2'), {
      gapMin: reduceMotion ? 3800 : 2400,
      gapMax: reduceMotion ? 7500 : 5200,
      kinds: [['dog.png', .5], ['rabbit.png', .5]],
      frontLayer: $('#flyLayer2Front'),
      frontKinds: [['heart.png', 1]],
      frontChance: .15,
      prefill: 4        /* письмо открывается в уже живом небе */
    });
    flyCfg.boostTarget = 1.45;
  }, 2600);

  /* Фаза 6: вспышка уходит */
  setTimeout(() => setFlash(false, true), 2750);
}

/* Подсказка «листай» исчезает после первого скролла */
letterScroll.addEventListener('scroll', () => {
  scrollHint.classList.add('gone');
}, { once: true, passive: true });

/* Пасхалки: тап по фону и по стикеру выпускают сердечки */
sceneLetter.addEventListener('pointerdown', e => {
  if (e.target.closest('.letter-column')) return;
  burstHearts(e.clientX, e.clientY, 4, true);
});

function stickerBurst() {
  const r = sticker.getBoundingClientRect();
  burstHearts(r.left + r.width / 2, r.top + r.height / 2, 8);
}
sticker.addEventListener('click', stickerBurst);
sticker.addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); stickerBurst(); }
});