'use strict';

(() => {
  const chineseKnowledge = document.getElementById('knowledge-zh');
  if (chineseKnowledge) document.getElementById('knowledge-content').replaceChildren(chineseKnowledge.content.cloneNode(true));
  for (const element of document.querySelectorAll('[data-seo-text]')) {
    const nodes = [...element.childNodes].filter(node => node.nodeType === Node.TEXT_NODE);
    for (const [index, source] of JSON.parse(element.dataset.seoText)) {
      if (nodes[index]) nodes[index].textContent = source;
    }
    element.removeAttribute('data-seo-text');
  }
  for (const element of document.querySelectorAll('[data-seo-attributes]')) {
    for (const [name, source] of Object.entries(JSON.parse(element.dataset.seoAttributes))) element.setAttribute(name, source);
    element.removeAttribute('data-seo-attributes');
  }
  const config = JSON.parse(document.getElementById('document-seo-data').textContent);
  function update() {
    const language = window.PathaddLanguage.getLanguage() === 'en' ? 'en' : 'zh-CN';
    const content = config[language];
    if (document.title !== content.title) document.title = content.title;
    for (const meta of document.querySelectorAll('[data-seo-meta]')) meta.content = content[meta.dataset.seoMeta];
    for (const element of document.querySelectorAll('[data-seo-copy]')) element.textContent = content[element.dataset.seoCopy];
    for (const element of document.querySelectorAll('[data-seo-step]')) element.textContent = content.steps[Number(element.dataset.seoStep)];
    for (const script of document.querySelectorAll('[data-document-seo][type="application/ld+json"]')) {
      const schema = JSON.parse(script.textContent);
      schema.name = content.heading;
      schema.description = content.description;
      schema.inLanguage = language;
      if (schema.mainEntityOfPage) {
        schema.mainEntityOfPage.name = content.title;
        schema.mainEntityOfPage.inLanguage = language;
        schema.mainEntityOfPage.breadcrumb.itemListElement[1].name = content.heading;
      }
      const value = JSON.stringify(schema).replace(/</g, '\\u003c');
      // JSON-LD is inert data; keep the existing text node under Trusted Types.
      const text = script.firstChild;
      if (!text || text.nodeType !== Node.TEXT_NODE) throw new Error('Missing JSON-LD text node');
      if (text.nodeValue !== value) text.nodeValue = value;
    }
    const prefix = location.protocol === 'chrome-extension:' ? 'https://pathadd.com' : '';
    for (const link of document.querySelectorAll('[data-seo-sibling]')) {
      const sibling = config.siblings[Number(link.dataset.seoSibling)];
      link.textContent = sibling[language];
      link.href = prefix + (language === 'en' ? '/en' : '/zh') + (sibling.path || '/tools/' + sibling.slug + '/');
    }
    for (const link of document.querySelectorAll('[data-tab]')) {
      const sibling = config.siblings.find(item => item.slug === link.dataset.tab);
      if (sibling?.path) link.href = prefix + (language === 'en' ? '/en' : '/zh') + sibling.path;
    }
    for (const link of document.querySelectorAll('[data-domain-navigation] a')) {
      const path = new URL(link.href).pathname.replace(/^\/(?:en|zh)\//, '/');
      const sibling = config.siblings.find(item => item.path === path);
      if (sibling) link.href = prefix + (language === 'en' ? '/en' : '/zh') + sibling.path;
    }
    const languageLink = document.querySelector('[data-seo-language]');
    languageLink.hreflang = language === 'en' ? 'zh-CN' : 'en';
    languageLink.lang = languageLink.hreflang;
    languageLink.textContent = language === 'en' ? '\u4e2d\u6587' : 'English';
    const canonical = document.querySelector('link[rel=canonical]');
    const toolPath = canonical
      ? new URL(canonical.href).pathname.replace(/^\/(?:en|zh)\//, '/')
      : (config.siblings?.[0]?.path || '/tools/markdown2word/');
    languageLink.href = prefix + (language === 'en' ? '/zh' : '/en') + toolPath;
    for (const brand of document.querySelectorAll('a.brand')) brand.href = prefix + (language === 'en' ? '/en/' : '/zh/');
  }
  window.addEventListener('pathadd:languagechange', update);
  document.addEventListener('pathadd:languagechange', update);
  document.addEventListener('DOMContentLoaded', update);
  new MutationObserver(update).observe(document.querySelector('title'), { childList: true, subtree: true, characterData: true });
  document.querySelector('[data-seo-language]')?.addEventListener('click', event => {
    if (location.protocol === 'chrome-extension:') return;
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const target = event.currentTarget.href;
    window.PathaddLanguage.setLanguage(event.currentTarget.hreflang);
    location.assign(target);
  });
  for (const link of document.querySelectorAll('[data-domain-navigation] a')) {
    link.addEventListener('click', () => window.PathaddLanguage.setLanguage(window.PathaddLanguage.getLanguage()));
  }
  update();
})();