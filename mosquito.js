(() => {
  const brand = document.querySelector('.brandmark');
  if (!brand) return;

  brand.classList.add('brandmark-mascot-anchor');
  brand.textContent = '';
  brand.innerHTML = `
    <svg class="header-mosquito" viewBox="0 0 180 120" role="img" aria-label="小黑蚊吉祥物">
      <defs>
        <linearGradient id="abdomenGrad" x1="0" x2="1">
          <stop offset="0" stop-color="#11191c"/>
          <stop offset="0.5" stop-color="#0f474b"/>
          <stop offset="1" stop-color="#101517"/>
        </linearGradient>
        <radialGradient id="eyeGrad" cx="35%" cy="30%" r="75%">
          <stop offset="0" stop-color="#74e3dc"/>
          <stop offset="0.32" stop-color="#0e8f8a"/>
          <stop offset="1" stop-color="#071315"/>
        </radialGradient>
        <linearGradient id="wingGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#f5ffff" stop-opacity=".9"/>
          <stop offset=".48" stop-color="#a9e5e6" stop-opacity=".5"/>
          <stop offset="1" stop-color="#66aeb2" stop-opacity=".2"/>
        </linearGradient>
      </defs>

      <g class="wing wing-left">
        <path d="M80 49 C43 10 18 16 26 40 C34 62 58 65 84 59 Z" fill="url(#wingGrad)" stroke="#6fb8ba" stroke-width="2"/>
        <path d="M77 53 C56 35 43 30 29 31" fill="none" stroke="#79bfc1" stroke-width="1.6" opacity=".8"/>
        <path d="M76 55 C58 47 48 43 35 45" fill="none" stroke="#79bfc1" stroke-width="1.3" opacity=".65"/>
      </g>
      <g class="wing wing-right">
        <path d="M94 48 C130 8 159 15 153 39 C147 62 122 66 92 59 Z" fill="url(#wingGrad)" stroke="#6fb8ba" stroke-width="2"/>
        <path d="M97 53 C118 34 134 29 150 31" fill="none" stroke="#79bfc1" stroke-width="1.6" opacity=".8"/>
        <path d="M98 55 C119 46 133 43 145 45" fill="none" stroke="#79bfc1" stroke-width="1.3" opacity=".65"/>
      </g>

      <g class="mosquito-core">
        <ellipse cx="86" cy="64" rx="20" ry="17" fill="#182326" stroke="#0d1517" stroke-width="2"/>
        <ellipse cx="84" cy="58" rx="10" ry="9" fill="url(#eyeGrad)"/>
        <ellipse cx="103" cy="76" rx="28" ry="13" transform="rotate(14 103 76)" fill="url(#abdomenGrad)" stroke="#0b1618" stroke-width="2"/>
        <path d="M94 69 Q105 73 116 74 M101 77 Q112 81 123 81" stroke="#2f9696" stroke-width="3" opacity=".72" fill="none"/>
        <path d="M71 60 L35 76" stroke="#10191b" stroke-width="3" stroke-linecap="round"/>
        <path d="M79 48 Q66 32 57 25" stroke="#172124" stroke-width="2.3" fill="none" stroke-linecap="round"/>
        <path d="M90 47 Q102 31 112 24" stroke="#172124" stroke-width="2.3" fill="none" stroke-linecap="round"/>

        <!-- exactly six legs -->
        <g class="legs" fill="none" stroke="#172124" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M78 68 L58 82 L43 103"/>
          <path d="M82 72 L70 91 L66 111"/>
          <path d="M88 75 L86 96 L92 114"/>
          <path d="M96 67 L114 82 L132 101"/>
          <path d="M99 71 L122 88 L147 96"/>
          <path d="M103 75 L132 78 L160 83"/>
        </g>
      </g>
    </svg>`;
})();