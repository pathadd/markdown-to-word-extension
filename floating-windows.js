(function () {
  'use strict';
  const selector = 'dialog, [role="dialog"], [role="alertdialog"], [data-floating-window]';
  const windows = new Map();
  const mounted = new WeakMap();
  const interactive = 'button, a, input, select, textarea, summary, [contenteditable="true"]';
  let frame = 0;

  function viewport() {
    const visual = window.visualViewport;
    return {
      left: (visual?.offsetLeft || 0) + 8,
      top: (visual?.offsetTop || 0) + 8,
      width: Math.max(1, Math.min(innerWidth, visual?.width || innerWidth) - 16),
      height: Math.max(1, Math.min(innerHeight, visual?.height || innerHeight) - 16)
    };
  }
  function visible(element) {
    return element.isConnected && element.getClientRects().length > 0 &&
      getComputedStyle(element).visibility !== 'hidden';
  }
  function write(element, name, value) {
    if (element.style.getPropertyValue(name) !== value) element.style.setProperty(name, value);
  }
  function place(element, rect) {
    const view = viewport();
    const width = Math.min(view.width, Math.max(Math.min(280, view.width), rect.width));
    const height = Math.min(view.height, Math.max(Math.min(160, view.height), rect.height));
    const left = Math.max(view.left, Math.min(rect.left, view.left + view.width - width));
    const top = Math.max(view.top, Math.min(rect.top, view.top + view.height - height));
    element.dataset.floatingPositioned = '';
    for (const [name, value] of Object.entries({ left, top, width, height })) write(element, name, `${value}px`);
    write(element, '--floating-max-width', `${view.left + view.width - left}px`);
    write(element, '--floating-max-height', `${view.top + view.height - top}px`);
  }
  function constrain(element) {
    if (!visible(element)) return;
    const view = viewport();
    if (!element.hasAttribute('data-floating-positioned')) {
      write(element, '--floating-max-width', `${view.width}px`);
      write(element, '--floating-max-height', `${view.height}px`);
    }
    const rect = element.getBoundingClientRect();
    if (rect.left < view.left - 1 || rect.top < view.top - 1 ||
        rect.right > view.left + view.width + 1 || rect.bottom > view.top + view.height + 1) {
      place(element, rect);
    } else if (element.hasAttribute('data-floating-positioned')) {
      write(element, '--floating-max-width', `${view.left + view.width - rect.left}px`);
      write(element, '--floating-max-height', `${view.top + view.height - rect.top}px`);
    }
  }
  function refresh() {
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      for (const [element, state] of windows) {
        if (!element.isConnected) {
          state.resize.disconnect();
          windows.delete(element);
        } else constrain(element);
      }
    });
  }
  function mount(element) {
    if (windows.has(element) || element.hasAttribute('data-floating-disabled')) return;
    if (mounted.has(element)) {
      const state = mounted.get(element);
      windows.set(element, state);
      state.resize.observe(element);
      return;
    }
    const header = element.querySelector('header, .dialog-heading, .modal-header, [data-floating-header]');
    if (!header) return;
    const state = { pointer: null, resize: new ResizeObserver(refresh) };
    windows.set(element, state);
    mounted.set(element, state);
    element.classList.add('pa-floating-window');
    header.classList.add('pa-window-drag-handle');
    if (!header.hasAttribute('tabindex')) header.tabIndex = 0;
    const help = '拖动标题栏移动，拖动右下角调整大小；方向键移动，Alt + 方向键调整大小，Shift 微调。';
    header.title = help;
    if (!header.hasAttribute('aria-label')) header.setAttribute('aria-label', help);
    header.addEventListener('pointerdown', event => {
      if (event.button !== 0 || event.target.closest(interactive)) return;
      const rect = element.getBoundingClientRect();
      place(element, rect);
      state.pointer = { id: event.pointerId, x: event.clientX, y: event.clientY, rect };
      header.setPointerCapture(event.pointerId);
      event.preventDefault();
    });
    header.addEventListener('pointermove', event => {
      if (!state.pointer || state.pointer.id !== event.pointerId) return;
      const { x, y, rect } = state.pointer;
      place(element, { left: rect.left + event.clientX - x, top: rect.top + event.clientY - y, width: rect.width, height: rect.height });
    });
    const finish = event => {
      if (!state.pointer || state.pointer.id !== event.pointerId) return;
      state.pointer = null;
      if (header.hasPointerCapture(event.pointerId)) header.releasePointerCapture(event.pointerId);
    };
    for (const type of ['pointerup', 'pointercancel', 'lostpointercapture']) header.addEventListener(type, finish);
    element.addEventListener('pointerdown', event => {
      const rect = element.getBoundingClientRect();
      // Freeze centered dialogs before the browser's native corner resizer starts.
      if (event.button === 0 && event.target === element &&
          event.clientX >= rect.right - 20 && event.clientY >= rect.bottom - 20) place(element, rect);
    });
    header.addEventListener('keydown', event => {
      if (event.target !== header && !event.target.matches('[data-floating-drag]')) return;
      if (event.ctrlKey || event.metaKey) return;
      const direction = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[event.key];
      if (!direction) return;
      event.preventDefault();
      const rect = element.getBoundingClientRect();
      const step = event.shiftKey ? 1 : 10;
      place(element, {
        left: rect.left + (event.altKey ? 0 : direction[0] * step),
        top: rect.top + (event.altKey ? 0 : direction[1] * step),
        width: rect.width + (event.altKey ? direction[0] * step : 0),
        height: rect.height + (event.altKey ? direction[1] * step : 0)
      });
    });
    element.addEventListener('close', () => {
      if (state.pointer) finish({ pointerId: state.pointer.id });
    });
    state.resize.observe(element);
  }
  function scan() {
    document.querySelectorAll(selector).forEach(mount);
    refresh();
  }
  function start() {
    scan();
    new MutationObserver(scan).observe(document.body, {
      subtree: true, childList: true, attributes: true,
      attributeFilter: ['open', 'hidden', 'aria-hidden']
    });
    window.addEventListener('resize', refresh);
    window.visualViewport?.addEventListener('resize', refresh);
    window.visualViewport?.addEventListener('scroll', refresh);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
})();
