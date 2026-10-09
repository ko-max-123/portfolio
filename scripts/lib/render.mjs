import { escapeHtml, html, loadTemplates } from './templates.mjs';
import { array, validateContent } from './validate.mjs';

// テンプレートが使うクラス名・要素順・文章内の空白を維持し、内容だけを差し込みます。
export async function createRenderer(directory) {
  const template = await loadTemplates(directory);
  const component = (name, values) => template(`components/${name}`, values);
  const list = (items, render, label, separator = '\n') => html(array(items, label).map(render).join(separator));
  const points = (items = [], className = '') => {
    if (!array(items, 'points').length) return html('');
    return html(`<ul${className ? ` class="${className}"` : ''}>${items.map(text => `<li>${escapeHtml(text)}</li>`).join('')}</ul>`);
  };
  const capability = item => component('cap-card', { ...item, points: points(item.points) });
  const note = (text, extraClass = '') => html(component('note-box', { text, extraClass }));
  const pageHero = (hero, disclosure = '') => html(component('page-hero', { hero, note: disclosure ? note(disclosure, ' only-base') : html('') }));

  function renderHome(data) {
    const values = structuredClone(data);
    for (const mode of ['lab', 'base']) {
      values.hero.heading[mode] = html(array(data.hero.heading[mode], `hero.heading.${mode}`).map(line =>
        line.emphasis ? `<em>${escapeHtml(line.text)}</em>` : escapeHtml(line.text)).join('<br>'));
    }
    values.workbench = list(data.workbench, (item, index) => component('bench-item', { ...item, number: String(index + 1).padStart(2, '0') }), 'workbench', '\n  ');
    values.questions = list(data.questions, item => component('question-card', { ...item, points: points(item.points, 'micro-list') }), 'questions', '\n  ');
    values.capabilities = list(data.capabilities, capability, 'capabilities', '\n  ');
    values.manifesto.title = html(array(data.manifesto.title, 'manifesto.title').map(escapeHtml).join('<br>'));
    values.operatorStats = list(data.operator.stats, item => component('operator-stat', item), 'operator.stats', '');
    return template('pages/home', values);
  }

  function renderProjects(data) {
    return template('pages/projects', { ...data, pageHero: pageHero(data.hero, data.note) });
  }

  function log(item) {
    const facts = list(item.facts || [], fact => component('fact-row', fact), 'facts', '');
    return component('log-card', {
      ...item,
      badge: html(item.badge ? ` <span class="active-badge">${escapeHtml(item.badge)}</span>` : ''),
      facts: html(facts.html ? `<div class="fact-list">${facts.html}</div>` : ''),
    });
  }

  function renderCareer(data) {
    return template('pages/career', {
      ...data, pageHero: pageHero(data.hero),
      journey: list(data.journey, item => component('journey-step', item), 'journey'),
      employment: list(data.employment, log, 'employment'),
      education: list(data.education, log, 'education', ''),
      skills: list(data.skills, capability, 'skills', ''),
    });
  }

  function renderLink(site, id, activePage) {
    const item = site.links.find(link => link.id === id);
    return component('link', {
      ...item,
      activeAttribute: html(item.id === activePage ? ' class="active"' : ''),
      externalAttributes: html(item.external ? ' target="_blank" rel="noopener"' : ''),
    });
  }

  function renderSite(content) {
    validateContent(content);
    const { site, projects } = content;
    const renderers = { home: renderHome, projects: renderProjects, career: renderCareer };
    const files = new Map();
    for (const page of site.pages) {
      if (!renderers[page.id]) throw new Error(`ページのテンプレートが未登録です: ${page.id}`);
      const header = component('header', { site, navigation: list(site.navigation, id => renderLink(site, id, page.id), 'navigation', '') });
      const footer = component('footer', { site, page, footerLinks: list(page.footerLinks, id => renderLink(site, id), 'footerLinks', '') });
      const main = renderers[page.id](page.id === 'projects' ? content.projectsPage : content[page.id]);
      files.set(page.file, '<!-- 自動生成: content/ と templates/ を編集し、npm run build を実行してください。 -->\n' + template('layout', { site, page, header: html(header), main: html(main), footer: html(footer) }) + '\n');
    }
    // 既存の読み込み順とファイル名を維持します。app.js の設定も一緒に出力します。
    files.set('projects-data.js', '// 自動生成: content/projects.mjs と content/site.mjs を編集してください。\n' +
      `window.PROJECTS = ${JSON.stringify(projects, null, 2)};\n` +
      `window.PORTFOLIO_CONFIG = ${JSON.stringify({ modes: site.modes }, null, 2)};\n`);
    const urls = site.pages.map(page => new URL(page.urlPath, site.url).href);
    files.set('sitemap.xml', '<?xml version="1.0" encoding="UTF-8"?>\n' +
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
      urls.map(url => `  <url><loc>${escapeHtml(url)}</loc></url>`).join('\n') + '\n</urlset>\n');
    return files;
  }

  return { renderSite, renderHome, renderCareer };
}
