(() => {
  const brand = document.querySelector('.brandmark');
  if (!brand) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const pet = document.createElement('div');
  pet.id = 'mosquitoPet';
  pet.className = 'mosquito-pet idle';
  pet.setAttribute('aria-hidden', 'true');
  pet.innerHTML = `
    <svg class="mosquito-svg" viewBox="0 0 120 90" role="presentation" focusable="false">
      <g class="mosquito-wing mosquito-wing-left">
        <ellipse cx="45" cy="34" rx="26" ry="12" transform="rotate(-28 45 34)" />
      </g>
      <g class="mosquito-wing mosquito-wing-right">
        <ellipse cx="75" cy="34" rx="26" ry="12" transform="rotate(28 75 34)" />
      </g>
      <g class="mosquito-legs" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
        <path d="M52 53 L28 69 L17 78" />
        <path d="M55 57 L38 76 L34 85" />
        <path d="M68 53 L92 69 L103 78" />
        <path d="M65 57 L82 76 L86 85" />
      </g>
      <g class="mosquito-body">
        <ellipse cx="60" cy="53" rx="12" ry="22" />
        <circle cx="60" cy="27" r="9" />
        <path d="M60 18 L60 5" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
        <path d="M55 22 Q45 13 39 10" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
        <path d="M65 22 Q75 13 81 10" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
      </g>
    </svg>`;
  document.body.appendChild(pet);
  brand.classList.add('brandmark-mascot-anchor');

  let flying = false;
  let flightTimer = null;
  let routeTimer = null;
  let inputActive = false;

  function anchorPoint() {
    const r = brand.getBoundingClientRect();
    return {
      x: r.left + r.width / 2,
      y: r.top + r.height / 2
    };
  }

  function placeAt(x, y, immediate = false) {
    if (immediate) pet.classList.add('no-transition');
    pet.style.transform = `translate3d(${Math.round(x - 30)}px, ${Math.round(y - 23)}px, 0)`;
    if (immediate) requestAnimationFrame(() => pet.classList.remove('no-transition'));
  }

  function returnHome() {
    flying = false;
    pet.classList.remove('flying');
    pet.classList.add('idle');
    const p = anchorPoint();
    placeAt(p.x, p.y);
    scheduleFlight();
  }

  function perimeterRoute() {
    const pad = 38;
    const w = window.innerWidth;
    const h = window.innerHeight;
    const left = pad;
    const right = Math.max(pad, w - pad);
    const top = pad;
    const bottom = Math.max(pad, h - pad);

    const candidates = [
      {x: left, y: top + h * .18},
      {x: right, y: top + h * .22},
      {x: right, y: bottom - h * .18},
      {x: left, y: bottom - h * .16},
      {x: w * .72, y: top},
      {x: w * .28, y: bottom}
    ];

    const count = 3 + Math.floor(Math.random() * 2);
    const points = [];
    while (points.length < count && candidates.length) {
      const i = Math.floor(Math.random() * candidates.length);
      points.push(candidates.splice(i, 1)[0]);
    }
    return points;
  }

  function flyRoute(points, i = 0) {
    if (!flying) return;
    if (inputActive) {
      returnHome();
      return;
    }
    if (i >= points.length) {
      returnHome();
      return;
    }
    const p = points[i];
    const duration = 1100 + Math.floor(Math.random() * 650);
    pet.style.setProperty('--flight-duration', `${duration}ms`);
    placeAt(p.x, p.y);
    routeTimer = window.setTimeout(() => flyRoute(points, i + 1), duration + 80);
  }

  function launch() {
    if (prefersReducedMotion || inputActive || flying || document.hidden) {
      scheduleFlight();
      return;
    }
    flying = true;
    pet.classList.remove('idle');
    pet.classList.add('flying');
    flyRoute(perimeterRoute());
  }

  function scheduleFlight() {
    window.clearTimeout(flightTimer);
    if (prefersReducedMotion) return;
    const delay = 9000 + Math.floor(Math.random() * 12000);
    flightTimer = window.setTimeout(launch, delay);
  }

  function syncHome() {
    if (!flying) {
      const p = anchorPoint();
      placeAt(p.x, p.y, true);
    }
  }

  document.addEventListener('focusin', e => {
    if (e.target.matches('input, textarea, select, [contenteditable="true"]')) {
      inputActive = true;
      if (flying) {
        window.clearTimeout(routeTimer);
        returnHome();
      }
    }
  });

  document.addEventListener('focusout', e => {
    if (e.target.matches('input, textarea, select, [contenteditable="true"]')) {
      inputActive = false;
      scheduleFlight();
    }
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      window.clearTimeout(flightTimer);
      window.clearTimeout(routeTimer);
    } else {
      syncHome();
      scheduleFlight();
    }
  });

  window.addEventListener('resize', syncHome, {passive: true});
  window.addEventListener('scroll', syncHome, {passive: true});

  syncHome();
  scheduleFlight();
})();