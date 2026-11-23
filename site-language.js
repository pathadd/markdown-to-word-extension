'use strict';

(() => {
  const key = 'pathadd.language.v1';
  function resolveLanguage(languages, saved, pageLanguage) {
    if (pageLanguage === 'en' || pageLanguage === 'zh-CN') return pageLanguage;
    if (saved === 'zh-CN' || saved === 'en') return saved;
    return String(languages?.[0] || 'en').toLowerCase().startsWith('zh') ? 'zh-CN' : 'en';
  }
  function translate(text, language, dictionary) {
    if (language !== 'en' || typeof text !== 'string') return text;
    const source = text.trim();
    return Object.hasOwn(dictionary, source) ? text.replace(source, () => dictionary[source]) : text;
  }
  if (typeof document === 'undefined') {
    module.exports = { resolveLanguage, translate };
    return;
  }
  let saved;
  try { saved = localStorage.getItem(key); } catch {}
  const pageLanguage = document.documentElement.dataset.pathaddPageLanguage;
  let language = resolveLanguage(navigator.languages || [navigator.language], saved, pageLanguage);
  document.documentElement.lang = language;
  function change(value) {
    language = value;
    document.documentElement.lang = language;
    window.dispatchEvent(new CustomEvent('pathadd:languagechange', { detail: { language } }));
  }
  function field(item, name) {
    const english = item[name + 'En'];
    return language === 'en' && typeof english === 'string' && english.trim() ? english : item[name];
  }
  window.PathaddLanguage = {
    getLanguage: () => language,
    setLanguage(value) {
      if (value !== 'en' && value !== 'zh-CN') return;
      try { localStorage.setItem(key, value); } catch {}
      change(value);
    },
    createTranslator: dictionary => text => translate(text, language, dictionary),
    menuName: item => field(item, 'name'),
    menuRemark: item => field(item, 'remark')
  };
  window.addEventListener('storage', event => {
    if (event.key === key || event.key === null) change(resolveLanguage(navigator.languages || [navigator.language], event.newValue));
  });
})();