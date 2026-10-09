# Tetsuyuki Portfolio

個人制作・研究と、Web開発・QAの取り組みを紹介する静的ポートフォリオです。LAB / BASEで表示内容を切り替えます。

共通部品はテンプレート、文章や繰り返し項目はデータで管理します。公開用のHTMLは生成済みファイルとしてリポジトリに含めるため、GitHub Pagesはこれまでどおり `master` のルートから公開できます。

## 更新手順

Node.js 22以上を使用します。追加ライブラリはなく、`npm install` は不要です。

1. 下の表から編集するデータファイルを選びます。
2. 文章を変更するか、配列内の項目をコピーして追加します。項目の間はカンマで区切ります。
3. 公開用ファイルを生成し、確認します。

```sh
npm run build
npm run check
```

4. 必要に応じてローカルで表示を確認します。

```sh
npm run preview
```

[ローカルプレビュー](http://127.0.0.1:4173)を開き、PC・スマホとLAB・BASEを確認してください。終了は `Ctrl+C` です。プレビュー中に内容を変えた場合は、もう一度 `npm run build` を実行してブラウザーを再読み込みします。

5. 元データ・テンプレートと、生成された公開用ファイルを一緒にコミット・プッシュします。

`npm run check` は元データと公開用ファイルの不一致を検出します。「生成ファイルを更新してください」と出た場合は `npm run build` を実行してください。確認だけではファイルを書き換えません。

## どこを編集するか

| 更新したい内容 | 編集するファイル |
| --- | --- |
| 共通ブランド、ナビゲーション、フッター、ページ名、説明文、公開URL | `content/site.mjs` |
| LAB / BASEの表示名、アイコン、制作実績の分類 | `content/site.mjs` の `modes` |
| トップの文章・作業台・取り組みカード・プロフィール | `content/home.mjs` |
| 制作一覧の導入文・注意書き | `content/projects-page.mjs` |
| 制作・研究・業務事例の追加と編集 | `content/projects.mjs` |
| 歩み・職歴・学歴・技術経験 | `content/career.mjs` |
| 全ページの共通枠・ヘッダー・フッター・導入部 | `templates/layout.html`、`templates/components/` |
| 各ページのセクション構成 | `templates/pages/` |
| 色・寸法・余白・PC／スマホの配置 | `style.css` |
| モード切替・絞り込み・並び替え・メニューの動作 | `app.js` |

**ルートの `index.html`、`projects.html`、`career.html`、`projects-data.js`、`sitemap.xml` は自動生成です。直接編集すると、次の生成で上書きされます。**

データにはHTMLを記述せず、通常の文章を入力してください。`&` や `<` などは自動でエスケープします。テンプレートの `{{...}}` は文章・属性、`{{{...}}}` は生成処理が作った部品を差し込むための記法です。タグ間の字下げ用の改行は生成時に除去し、同じ行に記述した空白は維持します。

既存の種類のカード・経歴・学歴はデータの追加だけで表示されます。新しい種類のセクションや新しいページを作る場合は、テンプレートと生成処理も追加してください。

## トップのカードを追加する

`content/home.mjs` の `questions` に次のような項目を追加します。

```js
{
  "label": "BUILD / 05",
  "title": "追加する取り組みのタイトル",
  "summary": "取り組みの説明文。",
  "points": ["工夫した点", "確認したこと"]
}
```

箇条書きが不要なら `points: []` にします。BASEの業務カードは `capabilities`、作業台は `workbench` に追加します。作業台の番号は配列順から自動で付けます。

## 経歴・学歴を追加する

`content/career.mjs` の `employment` または `education` に追加します。

```js
{
  "period": "2027.04 — PRESENT",
  "title": "表示する名称",
  "summary": "経験・活動の説明文。",
  "badge": "",
  "facts": []
}
```

`badge` は `ACTIVE` などの任意の表示、`facts` は `{ "label": "ROLE", "text": "補足文" }` の配列です。不要な場合は省略できます。

LABの歩みは `journey` に `period`・`title`・`summary`・`note` を持つ項目を追加します。技術経験は `skills` に `label`・`title`・`summary` と任意の `points` を持つ項目を追加します。

## 制作実績を追加する

`content/projects.mjs` の配列に項目を追加します。個人のテスト自動化の試作・検証はLAB側に掲載します。

```js
{
  id: "LAB-009",
  title: "制作したアプリ",
  showLab: true,
  showBase: false,
  featuredLab: false,
  featuredBase: false,
  labCats: ["TOOLS", "EXPERIMENT"],
  live: "https://example.com/",
  code: "https://github.com/example/project",
  lab: {
    label: "何を実現する制作か",
    question: "制作のきっかけ。",
    summary: "制作内容の説明。",
    points: ["工夫した点"]
  }
}
```

- `id` は重複しない値にします。
- `showLab` / `showBase` は表示先です。
- `featuredLab` / `featuredBase` はトップ掲載の指定です。トップの表示は配列順で最大6件です。
- BASEにも掲載する場合は `baseCats` と `base` の `label`・`summary`・`skills`・`evidence` も指定します。
- 公開URLやソースがない場合は `live` / `code` を省略します。
- 分類を新しく作る場合は、`content/site.mjs` の対応する `modes.lab.filters` / `modes.base.filters` にも追加します。

生成時に重複ID、未登録の分類、不正な表示指定やURLを検出します。エラーには該当する実績・項目名が表示されます。

## 共通部品とデザイン

ヘッダー・フッター・ページ導入部と、作業台・取り組みカード・経歴カードを `templates/components/` に集約しています。全ページの共通設定は `content/site.mjs` から差し込みます。

CSSは役割ごとの説明コメントを付け、読みやすく整形しています。テーマやスマホ向けの上書き順序には意味があるため、移動する場合は優先順位も確認してください。特に経歴の `subhead` とBASEの `note-box` は、共通ルールより優先させて余白を維持しています。

今回の整理では、3ページの本文・要素構成、20件の実績データ、CSSのルール・値・順序、21通りのモード／分類のカード出力が変更前と一致することを確認しています。

## サイトマップ

`sitemap.xml` は `content/site.mjs` の公開URLと `pages` から自動生成します。現在の対象は次の3ページです。

- [トップ](https://ko-max-123.github.io/portfolio/)
- [制作一覧](https://ko-max-123.github.io/portfolio/projects.html)
- [経歴](https://ko-max-123.github.io/portfolio/career.html)

[サイトマップの公開先](https://ko-max-123.github.io/portfolio/sitemap.xml)。各ページの共通headにもサイトマップへの参照を設定しています。更新していない日付を毎回付けることはせず、`lastmod` は省略しています。

ページ追加時は、対応する本文データ・ページテンプレート・`scripts/lib/render.mjs` の生成処理と、`content/site.mjs` の `pages` を追加してください。サイトマップのURL一覧はその登録に追従します。

Google Search Consoleの確認用メタタグは共通レイアウトから全3ページに出力します。確認コードを変更する場合は `content/site.mjs` の `verification` を編集します。

## 公開情報の扱い

勤務先は業種で記載しています。業務に関する事例は、会社名や顧客名、案件固有の画面・データ、認証情報、社内資料、ソースコードを伏せ、取り組みの内容や設計上の工夫、使用技術を紹介しています。

## 構成

```text
content/                 文章・共通設定・制作実績の元データ
templates/
  layout.html            全ページの共通枠
  components/            共通部品
  pages/                 ページごとの構成
scripts/
  build.mjs              公開ファイルの生成・生成忘れの確認
  preview.mjs            ローカルプレビュー
  lib/                   テンプレート差し込み・ページ生成・データ確認
tests/                   データ追加・生成・モード切替の確認
style.css                共通CSS・各ページ・テーマ・スマホ表示
app.js                   ブラウザー側の動作
index.html               自動生成
projects.html            自動生成
career.html              自動生成
projects-data.js         自動生成
sitemap.xml              自動生成
assets/icons/            LAB / BASEのアイコン
```

`blog.html`、`site.js`、`styles.css` は以前の構成です。現在の3ページからは参照しておらず、今回の生成対象にも含めていません。

LAB / BASE切替時のファビコン・`theme-color`、共通のApple Touch Icon、PWAアイコンと `site.webmanifest` は引き続き使用しています。
