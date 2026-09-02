/**
 * Theme Toggle - Dark / Light Mode
 * Detects Android/browser system preference, persists user choice
 */

const THEME_KEY = 'efr-theme';
const DARK  = 'dark';
const LIGHT = 'light';

function getInitialTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === DARK || stored === LIGHT) return stored;
  if (!window.matchMedia) return LIGHT;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK : LIGHT;
}

function applyTheme(theme) {
  const html = document.documentElement;
  html.setAttribute('data-theme', theme);
  html.style.colorScheme = theme;
  localStorage.setItem(THEME_KEY, theme);
  updateToggleButton(theme);
}

function updateToggleButton(theme) {
  const btn = document.getElementById('theme-toggle-btn');
  if (!btn) return;
  const isDark = theme === DARK;
  btn.setAttribute('aria-label', isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode');
  btn.title = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
  btn.innerHTML = isDark ? getSunIcon() : getMoonIcon();
}

function getMoonIcon() {
  return '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
}

function getSunIcon() {
  return '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
}

export function injectThemeToggle() {
  const theme = getInitialTheme();
  applyTheme(theme);
  if (!document.getElementById('theme-toggle-btn')) {
    const btn = document.createElement('button');
    btn.id = 'theme-toggle-btn';
    btn.className = 'theme-toggle-fab';
    updateToggleButton(theme);
    btn.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme') || LIGHT;
      applyTheme(cur === DARK ? LIGHT : DARK);
    });
    document.body.appendChild(btn);
  }
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(THEME_KEY)) applyTheme(e.matches ? DARK : LIGHT);
    });
  }
}

export function getCurrentTheme() {
  return document.documentElement.getAttribute('data-theme') || LIGHT;
}
