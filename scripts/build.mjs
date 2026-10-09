import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import site from '../content/site.mjs';
import home from '../content/home.mjs';
import career from '../content/career.mjs';
import projects from '../content/projects.mjs';
import projectsPage from '../content/projects-page.mjs';
import { createRenderer } from './lib/render.mjs';

// Node.jsの標準機能だけで生成します。npm install は不要です。
// --check はファイルを書き換えず、生成忘れだけを検出します。
const root = new URL('../', import.meta.url);
try {
  const renderer = await createRenderer(fileURLToPath(new URL('templates/', root)));
  const files = renderer.renderSite({ site, home, career, projects, projectsPage });
  const check = process.argv.includes('--check');
  const stale = [];
  for (const [name, source] of files) {
    const target = new URL(name, root);
    let current;
    try { current = await readFile(target, 'utf8'); }
    catch (error) { if (error.code !== 'ENOENT') throw error; }
    if (current?.replace(/\r\n/g, '\n') === source) continue;
    if (check) stale.push(name);
    else await writeFile(target, source, 'utf8');
  }
  if (stale.length) throw new Error(`生成ファイルを更新してください: ${stale.join(', ')}\n実行: npm run build`);
  console.log(check ? '生成ファイルと元データの一致を確認しました。' : `${files.size}個の公開ファイルを生成しました。`);
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
