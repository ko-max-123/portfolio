function assert(condition, message) {
  if (!condition) throw new Error(message);
}

export function array(value, label) {
  assert(Array.isArray(value), `${label} は配列で指定してください。`);
  return value;
}

function text(value, label) {
  assert(typeof value === 'string' && value.trim(), `${label} に文章を指定してください。`);
}

function unique(values, label) {
  assert(new Set(values).size === values.length, `${label} が重複しています。`);
}

function link(value, label, local = false) {
  if (local && /^\.\/[\w./-]+$/.test(value)) return;
  let url;
  try { url = new URL(value); } catch { throw new Error(`${label} のURLが正しくありません。`); }
  assert(['https:', 'http:', ...(local ? ['mailto:'] : [])].includes(url.protocol), `${label} のURL形式は使用できません。`);
}

// 追加時の表示先・分類・必須項目を確認し、空のカードや編集漏れを防ぎます。
export function validateContent({ site, projects }) {
  link(site.url, 'site.url');
  const url = new URL(site.url);
  assert(url.protocol === 'https:' && site.url.endsWith('/') && !url.search && !url.hash, 'site.url は末尾が / のHTTPS公開URLにしてください。');
  array(site.pages, 'site.pages');
  array(site.links, 'site.links');
  unique(site.pages.map(page => page.id), 'ページID');
  unique(site.pages.map(page => page.file), 'ページの出力先');
  unique(site.pages.map(page => page.urlPath), 'サイトマップのURL');
  unique(site.links.map(item => item.id), 'リンクID');
  const linkIds = site.links.map(item => item.id);
  for (const item of site.links) {
    text(item.label, `リンク ${item.id} の label`);
    link(item.href, `リンク ${item.id}`, true);
  }
  for (const id of array(site.navigation, 'site.navigation')) assert(linkIds.includes(id), `ナビゲーションに未登録のリンクがあります: ${id}`);
  for (const page of site.pages) {
    assert(/^[a-z][a-z0-9-]*\.html$/.test(page.file), `ページの出力先が正しくありません: ${page.file}`);
    assert(page.urlPath === '' || page.urlPath === page.file, `ページの公開パスが正しくありません: ${page.id}`);
    text(page.title, `${page.id}.title`);
    text(page.description, `${page.id}.description`);
    for (const id of array(page.footerLinks, `${page.id}.footerLinks`)) assert(linkIds.includes(id), `フッターに未登録のリンクがあります: ${id}`);
  }
  for (const mode of ['lab', 'base']) {
    const filters = array(site.modes[mode].filters, `${mode}.filters`);
    unique(filters, `${mode}の分類`);
    assert(filters[0] === 'ALL', `${mode}.filters の先頭は ALL にしてください。`);
  }
  array(projects, 'projects');
  unique(projects.map(project => project.id), '制作実績のID');
  for (const project of projects) {
    text(project.id, '制作実績の id');
    text(project.title, `${project.id}.title`);
    for (const key of ['showLab', 'showBase', 'featuredLab', 'featuredBase']) {
      assert(project[key] === undefined || typeof project[key] === 'boolean', `${project.id}.${key} は true/false で指定してください。`);
    }
    for (const key of ['live', 'code']) if (project[key]) link(project[key], `${project.id}.${key}`);
    for (const mode of ['lab', 'base']) {
      const suffix = mode === 'lab' ? 'Lab' : 'Base';
      if (project[`show${suffix}`] === false) {
        assert(!project[`featured${suffix}`], `${project.id} は ${mode} 非表示のため、トップ掲載できません。`);
        continue;
      }
      const detail = project[mode];
      assert(detail, `${project.id}.${mode} の説明が必要です。`);
      text(detail.label, `${project.id}.${mode}.label`);
      text(detail.summary, `${project.id}.${mode}.summary`);
      for (const category of array(project[`${mode}Cats`], `${project.id}.${mode}Cats`)) {
        assert(site.modes[mode].filters.includes(category), `${project.id} の分類 ${category} を site.mjs の ${mode}.filters に追加してください。`);
      }
      for (const value of array(mode === 'lab' ? detail.points : detail.skills, `${project.id}.${mode}`)) text(value, `${project.id} の箇条書き`);
      if (mode === 'base') text(detail.evidence, `${project.id}.base.evidence`);
    }
  }
}
