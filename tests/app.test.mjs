import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import projects from '../content/projects.mjs';
import site from '../content/site.mjs';
import { runApp } from './helpers/runtime.mjs';

const source = await readFile(new URL('../app.js', import.meta.url), 'utf8');
const runtime = theme => runApp(source, { projects, modes: site.modes, theme });
const ids = output => [...output.matchAll(/class="project-id">([^<]+)<\/span>/g)].map(match => match[1]);

test('モードごとの実績とトップ掲載を維持し、個人の自動化はLABだけに表示する', () => {
  const app = runtime('lab');
  assert.equal(ids(app.elements['[data-projects]'].innerHTML).length, 13);
  assert.deepEqual(ids(app.elements['[data-featured]'].innerHTML), ['LAB-001', 'LAB-002', 'LAB-003', 'LAB-005', 'R-001', 'QA-001']);
  app.filter('AUTOMATION');
  assert.deepEqual(ids(app.elements['[data-projects]'].innerHTML), ['QA-001', 'QA-002']);
  app.click('[data-theme-toggle]');
  const base = ids(app.elements['[data-projects]'].innerHTML);
  assert.equal(base.length, 18);
  assert.ok(!base.includes('QA-001') && !base.includes('QA-002'));
  assert.ok(!app.elements['[data-filters]'].innerHTML.includes('AUTOMATION'));
  assert.deepEqual(ids(app.elements['[data-featured]'].innerHTML), ['LAB-007', 'R-001', 'QA-003', 'QA-004']);
  assert.equal(app.elements['[data-mode-label]'].textContent, 'BASE MODE');
  assert.equal(app.storage.get('portfolio-theme'), 'base');
  assert.equal(app.elements['[data-dynamic-favicon]'].href, './assets/icons/favicon-base.svg');
});

test('分類・並び替え・スマホメニューが動作する', () => {
  const app = runtime('lab');
  app.filter('TRAVEL');
  assert.deepEqual(ids(app.elements['[data-projects]'].innerHTML), ['LAB-001', 'LAB-002']);
  app.click('[data-shuffle]');
  assert.deepEqual(ids(app.elements['[data-projects]'].innerHTML).sort(), ['LAB-001', 'LAB-002']);
  app.click('[data-menu-btn]');
  assert.equal(app.elements['[data-menu-btn]'].attributes['aria-expanded'], 'true');
  app.click('[data-menu-btn]');
  assert.equal(app.elements['[data-menu-btn]'].attributes['aria-expanded'], 'false');
});

test('共通設定の分類変更が反映され、不正な保存モードはLABへ戻る', () => {
  const modes = structuredClone(site.modes);
  modes.lab.filters.push('NEW');
  modes.lab.label = 'CUSTOM LAB';
  const app = runApp(source, { projects, modes, theme: 'unknown' });
  assert.equal(app.body.dataset.theme, 'lab');
  assert.equal(app.elements['[data-mode-label]'].textContent, 'CUSTOM LAB');
  assert.ok(app.elements['[data-filters]'].innerHTML.includes('data-filter="NEW"'));
});

test('動的カードでも文章・属性の記号をエスケープする', () => {
  const fixture = structuredClone(projects[0]);
  fixture.title = '<script> & "title"';
  fixture.live = 'https://example.test/?a=1&b=2';
  const app = runApp(source, { projects: [fixture], modes: site.modes });
  assert.ok(app.elements['[data-projects]'].innerHTML.includes('&lt;script&gt; &amp; &quot;title&quot;'));
  assert.ok(app.elements['[data-projects]'].innerHTML.includes('href="https://example.test/?a=1&amp;b=2"'));
});
