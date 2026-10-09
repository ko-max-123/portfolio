import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

// {{{...}}} は、生成処理が作った部品だけに使用します。
// content/ の文章は {{...}} で表示し、HTMLとして解釈させません。
class HtmlFragment {
  constructor(html) { this.html = html; }
}

export const html = value => new HtmlFragment(value);

export function escapeHtml(value) {
  if (!['string', 'number', 'boolean'].includes(typeof value)) {
    throw new Error('文章・属性には文字列、数値、真偽値を指定してください。');
  }
  return String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;',
  }[character]));
}

// 単純な差し込みだけを扱います。ループや条件分岐は render.mjs に集約します。
export function renderTemplate(source, values) {
  return source.replace(/\{\{\{([\w.]+)\}\}\}|\{\{([\w.]+)\}\}/g, (_, rawKey, textKey) => {
    const key = rawKey || textKey;
    const value = key.split('.').reduce((object, property) =>
      object && Object.hasOwn(object, property) ? object[property] : undefined, values);
    if (value === undefined) throw new Error(`テンプレートの値がありません: ${key}`);
    if (rawKey) {
      if (!(value instanceof HtmlFragment)) throw new Error(`部品として生成したHTMLが必要です: ${key}`);
      return value.html;
    }
    return escapeHtml(value);
  });
}

export async function loadTemplates(directory) {
  const templates = new Map();
  async function load(relative = '') {
    for (const entry of await readdir(path.join(directory, relative), { withFileTypes: true })) {
      const name = relative ? `${relative}/${entry.name}` : entry.name;
      if (entry.isDirectory()) await load(name);
      else if (entry.name.endsWith('.html')) {
        // ソースの説明コメントは公開HTMLの余白に影響させません。
        const source = await readFile(path.join(directory, name), 'utf8');
        // タグ間の字下げ用の改行だけを除去します。同じ行の空白はそのまま残します。
        // 文章を差し込む前に処理するため、データ内の文字・記号には触れません。
        templates.set(name.slice(0, -5), source.replace(/<!--[\s\S]*?-->\s*/g, '')
          .replace(/>[ \t]*\r?\n\s*</g, '><').trim());
      }
    }
  }
  await load();
  return (name, values) => {
    if (!templates.has(name)) throw new Error(`テンプレートがありません: ${name}`);
    return renderTemplate(templates.get(name), values);
  };
}
