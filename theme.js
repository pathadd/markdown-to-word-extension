(function () {
  'use strict';
  const pagePath = location.pathname.replace(/\/index\.html$/i, '/').replace(/\/+$/, '') || '/';
  const key = 'pathadd.theme.v2:' + pagePath;
  const themes = new Map([['office', '办公浅色'], ['paper', '暖纸护眼'], ['dark', '深色专注']]);
  const root = document.documentElement;
  const defaultTheme = themes.has(root.dataset.pathaddDefaultTheme) ? root.dataset.pathaddDefaultTheme : 'office';
  let storageWarning = '';
  function apply(value) {
    const theme = value === null ? defaultTheme : value;
    if (!themes.has(theme)) console.warn('忽略无效的 PathAdd 外观设置：', theme);
    root.dataset.pathaddTheme = themes.has(theme) ? theme : defaultTheme;
    document.querySelectorAll('[data-pathadd-theme-select]').forEach(select => { select.value = root.dataset.pathaddTheme; });
    document.dispatchEvent(new CustomEvent('pathadd:themechange', { detail: { theme: root.dataset.pathaddTheme } }));
  }
  try { apply(localStorage.getItem(key)); }
  catch (error) {
    storageWarning = '浏览器不允许读取外观设置，本次使用页面默认外观。';
    console.warn(storageWarning, error);
    apply(null);
  }
  window.addEventListener('storage', event => {
    if (event.key === key || event.key === null) apply(event.newValue);
  });
  function mount() {
    if (window.self !== window.top) return;
    const host = document.querySelector('.topbar-actions, .tool-topbar, .palette-topbar, .secure-top, .topbar, .td-top, .top, .navbar .flex-none, main > header') ||
      document.querySelector('.pathadd-site-brand')?.closest('header');
    const label = document.createElement('label');
    label.className = 'pathadd-theme-control';
    const caption = document.createElement('span');
    caption.textContent = '外观';
    const select = document.createElement('select');
    select.dataset.pathaddThemeSelect = '';
    select.setAttribute('aria-label', '网站外观');
    for (const [value, name] of themes) {
      const option = document.createElement('option');
      option.value = value; option.textContent = name;
      select.append(option);
    }
    select.value = root.dataset.pathaddTheme;
    const notice = document.createElement('span');
    notice.className = 'pathadd-theme-notice';
    notice.id = 'pathadd-theme-notice';
    notice.setAttribute('role', 'status');
    notice.setAttribute('aria-live', 'polite');
    select.setAttribute('aria-describedby', notice.id);
    if (storageWarning) label.title = storageWarning;
    select.addEventListener('change', () => {
      apply(select.value);
      notice.textContent = '';
      try { localStorage.setItem(key, select.value); }
      catch (error) {
        notice.textContent = '外观已切换，但无法保存。离开页面后可能恢复默认外观。';
        console.warn(notice.textContent, error);
      }
    });
    label.append(caption, select, notice);
    if (host) host.append(label);
    else {
      label.classList.add('pathadd-theme-floating');
      document.body.append(label);
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount, { once: true });
  else mount();
})();
