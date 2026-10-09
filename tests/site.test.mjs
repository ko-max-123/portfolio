import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, writeFile, cp, mkdtemp, rm } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import os from 'node:os';
import path from 'node:path';
import site from '../content/site.mjs';
import home from '../content/home.mjs';
import career from '../content/career.mjs';
import projects from '../content/projects.mjs';
import projectsPage from '../content/projects-page.mjs';
import { createRenderer } from '../scripts/lib/render.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const renderer = await createRenderer(path.join(root, 'templates'));
const content = () => structuredClone({ site, home, career, projects, projectsPage });

test('共通設定の変更が3ページに反映され、現在ページだけが選択状態になる', () => {
  const data = content();
  data.site.brand.title = 'COMMON BRAND';
  const files = renderer.renderSite(data);
  for (const page of data.site.pages) {
    const output = files.get(page.file);
    assert.match(output, /<strong>COMMON BRAND<\/strong>/);
    assert.equal((output.match(/<a class="active"/g) || []).length, 1);
    const link = data.site.links.find(link => link.id === page.id);
    assert.ok(output.includes(`<a class="active" href="${link.href}">`));
  }
});

test('トップの項目はデータ追加だけで増え、番号・箇条書きが生成される', () => {
  const data = structuredClone(home);
  data.workbench.push({ title: '追加した作業台', summary: '新しい説明' });
  data.questions.push({ label: 'BUILD / 05', title: '追加した取り組み', summary: '新しい説明', points: ['確認項目'] });
  data.capabilities.push({ label: 'NEW', title: '追加した業務', summary: '新しい説明' });
  const output = renderer.renderHome(data);
  assert.match(output, /<b>04<\/b><div><strong>追加した作業台<\/strong>/);
  assert.match(output, /<h3>追加した取り組み<\/h3><p>新しい説明<\/p><ul class="micro-list"><li>確認項目<\/li><\/ul>/);
  assert.match(output, /<h3>追加した業務<\/h3><p>新しい説明<\/p><\/article>/);
});

test('歩み・職歴・学歴・技術もデータ追加だけで表示される', () => {
  const data = structuredClone(career);
  data.journey.push({ period: '2027', title: '追加した歩み', summary: '本文', note: 'NOTE' });
  data.employment.push({ period: '2027', title: '追加した職歴', summary: '本文', badge: 'ACTIVE', facts: [{ label: 'ROLE', text: '補足' }] });
  data.education.push({ period: '2027', title: '追加した学歴', summary: '本文' });
  data.skills.push({ label: 'NEW', title: '追加した技術', summary: '本文', points: ['経験'] });
  const output = renderer.renderCareer(data);
  for (const title of ['追加した歩み', '追加した職歴', '追加した学歴', '追加した技術']) assert.ok(output.includes(title));
  assert.match(output, /<div class="fact-row"><small>ROLE<\/small><p>補足<\/p><\/div>/);
  assert.match(output, /<ul><li>経験<\/li><\/ul>/);
});

test('追加した文章の記号をエスケープし、必須項目の不足は検出する', () => {
  const data = structuredClone(home);
  data.questions.push({ label: 'NEW', title: '<script> & "title"', summary: 'A < B', points: [] });
  const output = renderer.renderHome(data);
  assert.ok(output.includes('&lt;script&gt; &amp; &quot;title&quot;'));
  assert.ok(!output.includes('<script> &'));
  delete data.questions.at(-1).title;
  assert.throws(() => renderer.renderHome(data), /テンプレートの値がありません: title/);
});

test('実績の重複ID・未登録の分類・危険なURL・非表示のトップ掲載を検出する', () => {
  const duplicate = content();
  duplicate.projects.push(structuredClone(duplicate.projects[0]));
  assert.throws(() => renderer.renderSite(duplicate), /ID が重複/);
  const category = content();
  category.projects[0].labCats.push('NEW');
  assert.throws(() => renderer.renderSite(category), /分類 NEW/);
  category.site.modes.lab.filters.push('NEW');
  assert.doesNotThrow(() => renderer.renderSite(category));
  const url = content();
  url.projects[0].live = 'javascript:alert(1)';
  assert.throws(() => renderer.renderSite(url), /URL形式/);
  const featured = content();
  featured.projects[0].showLab = false;
  assert.throws(() => renderer.renderSite(featured), /トップ掲載できません/);
});

test('サイトマップは登録した3ページの公開URLから生成される', () => {
  const data = content();
  data.site.url = 'https://example.test/portfolio/';
  const output = renderer.renderSite(data).get('sitemap.xml');
  assert.ok(output.startsWith('<?xml version="1.0" encoding="UTF-8"?>'));
  assert.ok(output.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"'));
  assert.deepEqual([...output.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]), [
    'https://example.test/portfolio/', 'https://example.test/portfolio/projects.html', 'https://example.test/portfolio/career.html',
  ]);
  assert.ok(!output.includes('blog.html'));
});

test('生成コマンドの再実行は同じ出力になり、--check は生成忘れを検出する', async () => {
  const temporaryParent = path.resolve(os.tmpdir());
  const temporary = await mkdtemp(path.join(temporaryParent, 'portfolio-build-test-'));
  try {
    for (const directory of ['scripts', 'content', 'templates']) await cp(path.join(root, directory), path.join(temporary, directory), { recursive: true });
    const run = args => spawnSync(process.execPath, ['scripts/build.mjs', ...args], { cwd: temporary, encoding: 'utf8' });
    assert.equal(run(['--check']).status, 1);
    assert.equal(run([]).status, 0);
    const first = await readFile(path.join(temporary, 'index.html'), 'utf8');
    assert.equal(run([]).status, 0);
    assert.equal(await readFile(path.join(temporary, 'index.html'), 'utf8'), first);
    assert.equal(run(['--check']).status, 0);
    const file = path.join(temporary, 'content', 'home.mjs');
    await writeFile(file, (await readFile(file, 'utf8')).replace('日常で使えるWebアプリにする', '更新後の文章'));
    const stale = run(['--check']);
    assert.equal(stale.status, 1);
    assert.match(stale.stderr, /index.html/);
    assert.equal(run([]).status, 0);
    assert.match(await readFile(path.join(temporary, 'index.html'), 'utf8'), /更新後の文章/);
    assert.equal(run(['--check']).status, 0);
  } finally {
    // このテストで作った一時ディレクトリだけを片付けます。
    const relative = path.relative(temporaryParent, path.resolve(temporary));
    assert.ok(relative.startsWith('portfolio-build-test-') && !relative.includes(path.sep) && !path.isAbsolute(relative));
    await rm(temporary, { recursive: true, force: true });
  }
});
