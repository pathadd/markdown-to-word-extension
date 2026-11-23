'use strict';

(() => {
  const key = 'pathadd.network.v1';
  const policy = "connect-src 'none'; form-action 'none'";
  let saved = false;
  let storageAvailable = true;
  let storageError = false;
  let blocked = 0;
  let host;
  let link;
  let notice;
  let pendingNotice;
  let testButton;
  let testLabel;
  let testBusyLabel;
  let detailNotice;
  let feedback;
  let testResult;
  let testWarning;
  let testState;
  let testSuccessTimer;
  let appBadge;
  let appMode;
  let appLanguageControl;
  let appLanguageCaption;
  let appLanguageSelect;
  let appLanguageNotice;
  let appLanguageStorageError = false;
  let demoVideoButton;
  let demoVideoConfig;
  let demoVideoDialog;
  let demoVideoPlayer;
  let demoVideoTitle;
  let demoVideoClose;
  // 按路由与语言精确匹配同源演示视频（仅当前语言存在对应视频时显示按钮）
  const DEMO_VIDEOS = {
    '/tools/markdown2word/': { 'zh-CN': '/shared/demos/markdown2word-zh.mp4', en: '/shared/demos/markdown2word-en.mp4', zhTitle: 'Markdown 转 Word · 操作演示', enTitle: 'Markdown to Word · Demo' },
    '/tools/ai2word/': { 'zh-CN': '/shared/demos/ai2word-zh.mp4', en: '/shared/demos/ai2word-en.mp4', zhTitle: 'AI 转 Word · 操作演示', enTitle: 'AI to Word · Demo' },
    '/tools/codelit/': { 'zh-CN': '/shared/demos/codelit-zh.mp4', en: '/shared/demos/codelit-en.mp4', zhTitle: 'CodeLit · 操作演示', enTitle: 'CodeLit · Demo' },
    '/tools/log-redaction/': { 'zh-CN': '/shared/demos/log-redaction-zh.mp4', en: '/shared/demos/log-redaction-en.mp4', zhTitle: '日志脱敏 · 操作演示', enTitle: 'Log Redaction · Demo' },
    '/tools/ai-collision/': { 'zh-CN': '/shared/demos/ai-collision-zh.mp4', en: '/shared/demos/ai-collision-en.mp4', zhTitle: '撞点 · 操作演示', enTitle: 'SparkPoint · Demo' },
    '/tools/text-diff/': { 'zh-CN': '/shared/demos/text-diff-zh.mp4', en: '/shared/demos/text-diff-en.mp4', zhTitle: '文本差异对比 · 操作演示', enTitle: 'Text Diff · Demo' },
    '/tools/json-format/': { en: '/shared/demos/json-format-en.mp4', enTitle: 'JSON Format · Demo' },
    '/tools/html2html/': { 'zh-CN': '/shared/demos/html2html-zh.mp4', zhTitle: 'HTML 文档编辑 · 操作演示' }
  };
  const appLabels = {
    local: ['本地处理 · 内容不上传', 'Local processing · No content uploads'],
    beacon: ['本地处理 · 解密需联网', 'Local processing · Decryption needs a connection'],
    authorization: ['本地加密 · 授权需联网', 'Local encryption · Authorization needs a connection'],
    submission: ['提交内容需联网', 'Submitting content needs a connection']
  };
  function readPreference() {
    try {
      const value = localStorage.getItem(key);
      if (value !== null && value !== 'strict' && value !== 'off') throw new Error('Invalid network preference');
      saved = value === 'strict';
      storageAvailable = true;
      storageError = false;
    } catch (error) {
      storageAvailable = false;
      storageError = true;
      console.warn('Pathadd network preference could not be read.', error);
    }
  }
  readPreference();
  const active = storageAvailable && saved;
  if (active) {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = policy;
    document.head.append(meta);
  }
  function state() {
    return { active, saved, storageAvailable, pending: storageAvailable && saved !== active, blocked };
  }
  function english() {
    return window.PathaddLanguage?.getLanguage() === 'en' ||
      (!window.PathaddLanguage && document.documentElement.lang === 'en');
  }
  function positionFeedback() {
    feedback.dataset.align = testButton.getBoundingClientRect().left > innerWidth / 2 ? 'end' : 'start';
  }
  function render() {
    if (appLanguageControl) {
      const en = english();
      appLanguageCaption.textContent = en ? 'Language' : '语言';
      appLanguageSelect.value = en ? 'en' : 'zh-CN';
      appLanguageSelect.setAttribute('aria-label', en ? 'Interface language' : '界面语言');
      appLanguageNotice.textContent = appLanguageStorageError
        ? (en ? 'Language changed, but the preference could not be saved.' : '语言已切换，但无法保存设置。')
        : '';
    }
    if (appBadge) {
      const label = appLabels[appMode][english() ? 1 : 0];
      const text = appBadge.querySelector('strong') || appBadge.querySelector('[data-pa-badge-text]');
      text.textContent = label;
    }
    if (demoVideoButton && demoVideoConfig) {
      const en = english();
      const rawSrc = en ? demoVideoConfig.en : demoVideoConfig['zh-CN'];
      const src = rawSrc && location.protocol === 'chrome-extension:' ? 'https://pathadd.com' + rawSrc : rawSrc;
      demoVideoButton.hidden = !src;
      const label = demoVideoButton.querySelector('.pa-demo-video-label');
      if (label) label.textContent = en ? 'Demo' : '演示视频';
      demoVideoButton.title = en ? 'Watch local demo video' : '观看本地演示视频';
      if (demoVideoDialog && demoVideoDialog.open) {
        if (!src) {
          demoVideoDialog.close();
        } else {
          if (demoVideoTitle) demoVideoTitle.textContent = en ? (demoVideoConfig.enTitle || 'Demo') : (demoVideoConfig.zhTitle || '操作演示');
          if (demoVideoClose) demoVideoClose.setAttribute('aria-label', en ? 'Close' : '关闭');
          if (demoVideoPlayer && demoVideoPlayer.getAttribute('src') !== src) {
            demoVideoPlayer.src = src;
            demoVideoPlayer.play().catch(() => {
              demoVideoPlayer.muted = true;
              demoVideoPlayer.play().catch(() => {});
            });
          }
        }
      }
    }
    if (!host) {
      window.dispatchEvent(new CustomEvent('pathadd:networkchange', { detail: state() }));
      return;
    }
    const en = english();
    host.setAttribute('aria-label', en ? 'Pathadd privacy' : 'Pathadd 隐私与联网');
    const pending = storageAvailable && saved !== active;
    link.href = (en ? '/en' : '/zh') + '/privacy/';
    link.textContent = en ? 'Privacy & networking' : '隐私与联网';
    const message = active ? (en ? 'This page: limits active' : '本页：限制已生效') : (en ? 'This page: limits off' : '本页：未启用限制');
    pendingNotice.hidden = !pending;
    pendingNotice.textContent = pending
      ? (saved
        ? (en ? 'Limits will turn on after reload. Save your work first.' : '刷新后开启限制。请先保存内容。')
        : (en ? 'Limits will turn off after reload. Save your work first.' : '刷新后关闭限制。请先保存内容。'))
      : '';
    notice.textContent = message;
    const details = [];
    if (storageError) details.push(en ? 'Preference unavailable; check settings' : '无法读写设置，请查看说明');
    if (blocked) details.push(en ? `${blocked} restricted operations blocked (not upload counts)` : `已阻止 ${blocked} 次受限操作（并非上传次数）`);
    detailNotice.textContent = details.join(' · ');
    detailNotice.hidden = !details.length;
    testButton.disabled = testState?.kind === 'pending';
    testButton.setAttribute('aria-busy', String(testButton.disabled));
    testLabel.textContent = en ? 'Test connection' : '测试联网';
    testBusyLabel.textContent = en ? 'Testing…' : '测试中…';
    testLabel.setAttribute('aria-hidden', String(testButton.disabled));
    testBusyLabel.setAttribute('aria-hidden', String(!testButton.disabled));
    testButton.title = en
      ? 'Send one GET request to /gw/pathadd-check-test. No input, files or cookies.'
      : '发起一次 GET /gw/pathadd-check-test，不携带输入、文件或 Cookie。';
    testResult.hidden = !testState || testState.kind === 'pending';
    let result = '';
    if (testState?.kind === 'blocked') result = en ? 'This test request was blocked by the browser.' : '本次测试请求已被浏览器拦截。';
    if (testState?.kind === 'response') {
      result = en ? `Response received (HTTP ${testState.status})` : `已收到响应（HTTP ${testState.status}）`;
      if (testState.body) result += (en ? ': ' : '：') + testState.body;
    }
    if (testState?.kind === 'failure') result = en ? 'Request failed; blocking by connection limits was not confirmed.' : '请求失败，未确认被联网限制拦截。';
    if (testState?.kind === 'timeout') result = en ? 'Request timed out; blocking by connection limits was not confirmed.' : '请求超时，未确认被联网限制拦截。';
    testResult.textContent = result;
    testResult.dataset.tone = testState?.kind === 'response' && testState.validation === 'match' ? 'success' : 'error';
    testWarning.hidden = testState?.kind !== 'response' || testState.validation === 'match';
    testWarning.textContent = testWarning.hidden ? '' : testState.validation === 'mismatch'
      ? (en ? `Warning: ${location.origin} is not in the allowed addresses returned by this API. Check the URL before entering sensitive content.` : `警告：当前地址 ${location.origin} 不在接口返回的允许地址中，请核对网址，勿输入敏感内容。`)
      : (en ? 'Warning: the API response is invalid or unsuccessful. The current website address could not be checked.' : '警告：接口响应异常，无法核对当前网站地址。');
    feedback.hidden = [detailNotice, testResult, testWarning, pendingNotice].every(element => element.hidden);
    positionFeedback();
    host.dataset.active = String(active);
    host.dataset.pending = String(pending || storageError);
    window.dispatchEvent(new CustomEvent('pathadd:networkchange', { detail: state() }));
  }
  window.PathaddNetwork = Object.freeze({
    getState: state,
    setPreference(value) {
      if (typeof value !== 'boolean') throw new TypeError('Network preference must be a boolean');
      try {
        localStorage.setItem(key, value ? 'strict' : 'off');
        saved = value;
        storageAvailable = true;
        storageError = false;
      } catch (error) {
        storageAvailable = false;
        storageError = true;
        console.warn('Pathadd network preference could not be saved.', error);
        render();
        throw error;
      }
      render();
    }
  });
  document.addEventListener('securitypolicyviolation', event => {
    if (!active || event.disposition !== 'enforce' || event.originalPolicy.replace(/;\s*$/, '') !== policy) return;
    blocked++;
    render();
  });
  async function testConnection() {
    if (testState?.kind === 'pending') return;
    clearTimeout(testSuccessTimer);
    testState = { kind: 'pending' };
    render();
    const target = new URL('/gw/pathadd-check-test', location.href);
    const controller = new AbortController();
    let requestError;
    testState = await new Promise(resolve => {
      let finished = false;
      let timeout;
      const finish = result => {
        if (finished) return;
        finished = true;
        clearTimeout(timeout);
        document.removeEventListener('securitypolicyviolation', onViolation);
        resolve(result);
      };
      const onViolation = event => {
        if (event.disposition === 'enforce' && event.effectiveDirective === 'connect-src' && event.blockedURI === target.href) {
          finish({ kind: 'blocked' });
        }
      };
      document.addEventListener('securitypolicyviolation', onViolation);
      timeout = setTimeout(() => {
        finish({ kind: requestError ? 'failure' : 'timeout' });
        controller.abort();
      }, 5000);
      fetch(target.href, {
        method: 'GET',
        mode: 'same-origin',
        credentials: 'omit',
        referrerPolicy: 'no-referrer',
        cache: 'no-store',
        redirect: 'error',
        signal: controller.signal
      }).then(async response => {
        const body = (await response.text()).trim();
        let validation = 'invalid';
        if (response.ok) {
          try {
            const data = JSON.parse(body);
            if (data && data.code === '000000' && typeof data.message === 'string') {
              validation = data.message.split(',').some(address => address.trim() === location.origin) ? 'match' : 'mismatch';
            }
          } catch (error) {
            if (!(error instanceof SyntaxError)) throw error;
          }
        }
        finish({ kind: 'response', status: response.status, validation, body: body.slice(0, 160) + (body.length > 160 ? '…' : '') });
      }).catch(error => {
        // A CSP violation event can arrive after fetch rejects.
        requestError = error;
      });
    });
    if (testState.kind === 'failure') console.warn('Pathadd connection test failed.', requestError);
    if (testState.kind === 'timeout') console.warn('Pathadd connection test timed out.');
    render();
    if (testState.kind === 'response' && testState.validation === 'match') {
      testSuccessTimer = setTimeout(() => {
        testState = undefined;
        render();
      }, 5000);
    }
  }
  function mount() {
    if (window.self !== window.top) return;
    const homeActions = document.querySelector('.main-shell > .topbar .topbar-actions');
    if (!homeActions) {
      const isExtension = location.protocol === 'chrome-extension:';
      const rawRoute = location.pathname.replace(/^\/(?:en|zh)(?=\/)/, '').replace(/index\.html$/, '');
      const route = isExtension && rawRoute.includes('/workspace/') ? '/tools/markdown2word/' : rawRoute;
      if (/^\/tools\/(?:ai-collision|ai2word|character-encoding|codelit|color-palette|html2html|json-format|log-redaction|markdown2markdown|markdown2word|number-system|text-diff|time-system)\/$/.test(route) ||
          /^\/security\/key-system\/(?:asymmetric|authenticator|digest|encoding|symmetric)\/$/.test(route) ||
          route === '/security/geek-communication/personal-vault/') appMode = 'local';
      else if (route === '/security/geek-communication/future-promise/') appMode = 'beacon';
      else if (/^\/security\/geek-communication\/(?:passwd-crypto|sensitive-files|time-seal)\/(?:receive\/)?$/.test(route) ||
               route === '/security/geek-communication/shared/setup/') appMode = 'authorization';
      else if (route === '/security/geek-communication/geek-vote/') appMode = 'submission';
      if (appMode) {
        const header = document.querySelector('.pathadd-site-brand')?.closest('header') ||
          document.querySelector('.tool-topbar, .palette-topbar, .secure-top, .topbar, .top, main > header');
        if (header) {
          appBadge = header.querySelector('.privacy-line, .privacy, .privacy-tag') || document.createElement('span');
          appBadge.classList.remove('privacy', 'privacy-line', 'privacy-tag');
          appBadge.classList.add('pa-app-network-badge');
          appBadge.dataset.mode = appMode;
          if (!appBadge.querySelector('strong')) {
            appBadge.removeAttribute('data-i18n');
            appBadge.replaceChildren();
            const shield = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            shield.setAttribute('viewBox', '0 0 24 24');
            shield.setAttribute('fill', 'none');
            shield.setAttribute('stroke', 'currentColor');
            shield.setAttribute('stroke-width', '2');
            shield.setAttribute('stroke-linecap', 'round');
            shield.setAttribute('stroke-linejoin', 'round');
            shield.setAttribute('aria-hidden', 'true');
            for (const d of ['M12 3 20 6v6c0 5-4 8-8 10-4-2-8-5-8-10V6Z', 'm8 12 3 3 5-5']) {
              const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
              path.setAttribute('d', d);
              shield.append(path);
            }
            const text = document.createElement('span');
            text.dataset.paBadgeText = '';
            appBadge.append(shield, text);
          }
          const preferences = document.createElement('div');
          preferences.className = 'pa-app-preferences';
          if (!header.querySelector('#interface-language, #geek-language')) {
            appLanguageControl = document.createElement('label');
            appLanguageControl.className = 'pa-app-language-control';
            appLanguageCaption = document.createElement('span');
            appLanguageSelect = document.createElement('select');
            appLanguageSelect.id = 'pa-app-language';
            for (const [value, name] of [['zh-CN', '中文'], ['en', 'English']]) {
              const option = document.createElement('option');
              option.value = value;
              option.textContent = name;
              appLanguageSelect.append(option);
            }
            appLanguageNotice = document.createElement('span');
            appLanguageNotice.className = 'pathadd-theme-notice';
            appLanguageNotice.id = 'pa-app-language-notice';
            appLanguageNotice.setAttribute('role', 'status');
            appLanguageSelect.setAttribute('aria-describedby', appLanguageNotice.id);
            appLanguageSelect.addEventListener('change', () => {
              appLanguageStorageError = false;
              window.PathaddLanguage.setLanguage(appLanguageSelect.value);
              try {
                if (localStorage.getItem('pathadd.language.v1') !== appLanguageSelect.value) throw new Error('Language preference was not saved');
              } catch (error) {
                appLanguageStorageError = true;
                console.warn('Pathadd language preference could not be saved.', error);
              }
              render();
            });
            appLanguageControl.append(appLanguageCaption, appLanguageSelect, appLanguageNotice);
            preferences.append(appLanguageControl);
          }
          demoVideoConfig = DEMO_VIDEOS[route];
          if (demoVideoConfig) {
            demoVideoButton = document.createElement('button');
            demoVideoButton.type = 'button';
            demoVideoButton.id = 'pa-demo-video-btn';
            demoVideoButton.className = 'pa-demo-video-btn';
            demoVideoButton.setAttribute('aria-haspopup', 'dialog');
            const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            icon.setAttribute('width', '13');
            icon.setAttribute('height', '13');
            icon.setAttribute('viewBox', '0 0 24 24');
            icon.setAttribute('fill', 'currentColor');
            icon.setAttribute('aria-hidden', 'true');
            const playPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            playPath.setAttribute('d', 'M8 5v14l11-7z');
            icon.append(playPath);
            const btnText = document.createElement('span');
            btnText.className = 'pa-demo-video-label';
            demoVideoButton.append(icon, btnText);
            demoVideoButton.addEventListener('click', () => {
              const en = english();
              const rawSrc = en ? demoVideoConfig.en : demoVideoConfig['zh-CN'];
              const src = rawSrc && location.protocol === 'chrome-extension:' ? 'https://pathadd.com' + rawSrc : rawSrc;
              if (!src) return;
              if (!demoVideoDialog) {
                demoVideoDialog = document.createElement('dialog');
                demoVideoDialog.id = 'pa-demo-video-dialog';
                demoVideoDialog.className = 'pa-demo-video-dialog';
                demoVideoDialog.setAttribute('aria-labelledby', 'pa-demo-video-title');
                const dlgHeader = document.createElement('header');
                dlgHeader.className = 'pa-demo-video-header';
                demoVideoTitle = document.createElement('h2');
                demoVideoTitle.id = 'pa-demo-video-title';
                demoVideoClose = document.createElement('button');
                demoVideoClose.type = 'button';
                demoVideoClose.className = 'pa-demo-video-close';
                demoVideoClose.textContent = '×';
                dlgHeader.append(demoVideoTitle, demoVideoClose);
                const dlgBody = document.createElement('div');
                dlgBody.className = 'pa-demo-video-body';
                demoVideoPlayer = document.createElement('video');
                demoVideoPlayer.id = 'pa-demo-video-player';
                demoVideoPlayer.controls = true;
                demoVideoPlayer.playsInline = true;
                demoVideoPlayer.preload = 'none';
                dlgBody.append(demoVideoPlayer);
                demoVideoDialog.append(dlgHeader, dlgBody);
                document.body.append(demoVideoDialog);
                demoVideoClose.addEventListener('click', () => demoVideoDialog.close());
                demoVideoDialog.addEventListener('click', event => {
                  if (event.target === demoVideoDialog) demoVideoDialog.close();
                });
                demoVideoDialog.addEventListener('close', () => {
                  demoVideoPlayer.pause();
                  demoVideoPlayer.removeAttribute('src');
                  demoVideoPlayer.load();
                });
              }
              demoVideoTitle.textContent = en ? (demoVideoConfig.enTitle || 'Demo') : (demoVideoConfig.zhTitle || '操作演示');
              demoVideoClose.setAttribute('aria-label', en ? 'Close' : '关闭');
              demoVideoPlayer.muted = false;
              demoVideoPlayer.src = src;
              demoVideoDialog.showModal();
              demoVideoPlayer.play().catch(() => {
                // 若浏览器限制带音轨自动播放，自动降级为静音立即起播
                demoVideoPlayer.muted = true;
                demoVideoPlayer.play().catch(() => {});
              });
            });
          }
          const isPreference = element => element.matches('.pathadd-theme-control, .pa-app-language-control, .geek-language-controls, #interface-language') ||
            (element.matches('.topbar-actions') && Boolean(element.querySelector('#interface-language')));
          const groupPreferences = () => {
            if (appLanguageControl && header.querySelector('#interface-language, #geek-language')) {
              appLanguageControl.remove();
              appLanguageControl = undefined;
            }
            const controls = [...preferences.children, ...header.children].filter(isPreference);
            controls.sort((a, b) => Number(a.matches('.pathadd-theme-control')) - Number(b.matches('.pathadd-theme-control')));
            for (const element of controls) preferences.append(element);
            if (demoVideoButton) preferences.append(demoVideoButton);
            preferences.append(appBadge);
          };
          header.append(preferences);
          groupPreferences();
          new MutationObserver(records => {
            if (records.some(record => [...record.addedNodes].some(node => node instanceof Element && isPreference(node)))) groupPreferences();
          }).observe(header, { childList: true });
          render();
        }
      }
      return;
    }
    host = document.createElement('nav');
    host.className = 'pa-network-control';
    host.setAttribute('aria-label', 'Pathadd privacy');
    link = document.createElement('a');
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    notice = document.createElement('span');
    notice.className = 'pa-network-state';
    notice.setAttribute('role', 'status');
    notice.setAttribute('aria-live', 'polite');
    pendingNotice = document.createElement('span');
    pendingNotice.className = 'pa-network-pending';
    pendingNotice.hidden = true;
    pendingNotice.setAttribute('role', 'status');
    pendingNotice.setAttribute('aria-live', 'polite');
    testButton = document.createElement('button');
    testButton.type = 'button';
    testButton.className = 'pa-network-test';
    testButton.addEventListener('click', testConnection);
    testLabel = document.createElement('span');
    testLabel.className = 'pa-network-test-label';
    testBusyLabel = document.createElement('span');
    testBusyLabel.className = 'pa-network-test-busy';
    testButton.append(testLabel, testBusyLabel);
    testResult = document.createElement('span');
    testResult.className = 'pa-network-test-result';
    testResult.hidden = true;
    testResult.setAttribute('role', 'status');
    testResult.setAttribute('aria-live', 'polite');
    testWarning = document.createElement('span');
    testWarning.className = 'pa-network-test-warning';
    testWarning.hidden = true;
    testWarning.setAttribute('role', 'alert');
    detailNotice = document.createElement('span');
    detailNotice.className = 'pa-network-details';
    detailNotice.hidden = true;
    detailNotice.setAttribute('role', 'status');
    detailNotice.setAttribute('aria-live', 'polite');
    const testArea = document.createElement('div');
    testArea.className = 'pa-network-test-area';
    feedback = document.createElement('div');
    feedback.className = 'pa-network-feedback';
    feedback.hidden = true;
    feedback.append(testResult, testWarning, detailNotice, pendingNotice);
    testArea.append(testButton, feedback);
    host.append(link, notice);
    homeActions.append(host, testArea);
    render();
  }
  window.addEventListener('pathadd:languagechange', render);
  window.addEventListener('resize', () => { if (host) positionFeedback(); });
  window.addEventListener('storage', event => {
    if (event.key === key || event.key === null) {
      readPreference();
      render();
    }
  });
  window.addEventListener('pageshow', () => { readPreference(); render(); });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => setTimeout(mount, 0), { once: true });
  else setTimeout(mount, 0);
})();
