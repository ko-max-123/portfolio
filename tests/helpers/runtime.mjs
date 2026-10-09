import vm from 'node:vm';

// ブラウザーに触れず、表示内容とイベント処理を確認する最小限のDOM代替です。
export function runApp(source, { projects, modes, theme = 'lab' }) {
  function element() {
    const classes = new Set();
    return {
      dataset: {}, innerHTML: '', textContent: '', attributes: {}, events: {}, offsetWidth: 0,
      classList: {
        add: name => classes.add(name), remove: name => classes.delete(name),
        toggle(name) { if (classes.has(name)) { classes.delete(name); return false; } classes.add(name); return true; },
      },
      setAttribute(name, value) { this.attributes[name] = value; },
      addEventListener(name, callback) { this.events[name] = callback; },
    };
  }
  const selectors = ['[data-featured]', '[data-projects]', '[data-filters]', '[data-nav]', '[data-shuffle]', '[data-theme-toggle]', '[data-menu-btn]', '[data-random]', '[data-mode-label]', '[data-mode-sub]', '[data-dynamic-favicon]', '[data-dynamic-favicon-png]', '[data-theme-color]'];
  const elements = Object.fromEntries(selectors.map(selector => [selector, element()]));
  const body = element();
  body.dataset.theme = 'lab';
  const storage = new Map([['portfolio-theme', theme]]);
  const opened = [];
  const context = {
    document: {
      body,
      querySelector: selector => elements[selector] || null,
      querySelectorAll: selector => elements[selector] ? [elements[selector]] : [],
    },
    window: { PROJECTS: projects, PORTFOLIO_CONFIG: { modes }, open: (...args) => opened.push(args) },
    localStorage: { getItem: key => storage.get(key), setItem: (key, value) => storage.set(key, value) },
    setInterval() {}, Date, Math,
  };
  vm.runInNewContext(source, context);
  return {
    body, elements, storage, opened,
    click: selector => elements[selector].events.click(),
    filter: category => elements['[data-filters]'].events.click({ target: { closest: () => ({ dataset: { filter: category } }) } }),
  };
}
