// 共通設定・ナビゲーション・公開ページ。pages がサイトマップの元データです。
// 配列に項目を追加すると、同じテンプレートで表示されます。
export default {
  // 公開URL。末尾の / を含めます。サイトマップもこのURLを使用します。
  "url": "https://ko-max-123.github.io/portfolio/",
  "author": "Tetsuyuki Koyama",
  "verification": "L4IvNJhZD9AygXZNSC45SL-LYYBehn3dd7ZT6utL0IA",
  "brand": {
    "mark": "TK",
    "title": "TETSUYUKI",
    "subtitle": "LAB / BASE",
    "footer": "TETSUYUKI LAB / BASE"
  },
  "copyright": "© 2026",
  "toggleLabel": "LABモードとBASEモードを切り替える",
  "links": [
    {
      "id": "home",
      "href": "./index.html",
      "label": "HOME"
    },
    {
      "id": "projects",
      "href": "./projects.html",
      "label": "PROJECTS"
    },
    {
      "id": "career",
      "href": "./career.html",
      "label": "CAREER"
    },
    {
      "id": "github",
      "href": "https://github.com/ko-max-123",
      "label": "GITHUB ↗",
      "external": true
    },
    {
      "id": "mail",
      "href": "mailto:mini.mountain1990@gmail.com",
      "label": "MAIL"
    }
  ],
  "navigation": [
    "home",
    "projects",
    "career",
    "github"
  ],
  // 公開ページの登録。file は生成先、urlPath が空ならトップURLです。
  "pages": [
    {
      "id": "home",
      "file": "index.html",
      "urlPath": "",
      "title": "Tetsuyuki Koyama — LAB / BASE",
      "description": "Tetsuyuki Koyamaのポートフォリオ。旅行・キャンプ向けのWebアプリや研究、Web開発・QA・テスト自動化の取り組みを紹介しています。",
      "footerLinks": [
        "projects",
        "career",
        "mail"
      ],
      "footerSuffix": " — PERSONAL BUILDS & ENGINEERING WORK."
    },
    {
      "id": "projects",
      "file": "projects.html",
      "urlPath": "projects.html",
      "title": "Projects — Tetsuyuki Koyama",
      "description": "Tetsuyuki Koyamaの制作・研究・QAの取り組み。Webアプリや3D CAPTCHAの研究、個人でのテスト自動化の検証と、業務でのWeb開発・QAの事例を紹介しています。",
      "footerLinks": [
        "home",
        "career"
      ],
      "footerSuffix": ""
    },
    {
      "id": "career",
      "file": "career.html",
      "urlPath": "career.html",
      "title": "Career — Tetsuyuki Koyama",
      "description": "Tetsuyuki Koyamaの経歴。Web開発やチームリーダーを経験し、現在は品質・テスト支援企業でモバイルアプリのテストや業務改善に取り組んでいます。",
      "footerLinks": [
        "home",
        "projects"
      ],
      "footerSuffix": ""
    }
  ],
  // モード別の表示設定と分類。分類追加時は filters も更新します。
  "modes": {
    "lab": {
      "label": "LAB MODE",
      "sub": "IDEAS / PROCESS",
      "favicon": "./assets/icons/favicon-lab.svg",
      "faviconPng": "./assets/icons/favicon-lab-32x32.png",
      "themeColor": "#F7F4EC",
      "filters": [
        "ALL",
        "TRAVEL",
        "CAMP",
        "EXPERIMENT",
        "AUTOMATION",
        "UTILITY",
        "RESEARCH",
        "WEB",
        "TOOLS",
        "PLAY",
        "EDUCATION",
        "MAINTAINABILITY"
      ]
    },
    "base": {
      "label": "BASE MODE",
      "sub": "WORK / CAPABILITY",
      "favicon": "./assets/icons/favicon-base.svg",
      "faviconPng": "./assets/icons/favicon-base-32x32.png",
      "themeColor": "#0A0F0E",
      "filters": [
        "ALL",
        "QA",
        "AI",
        "PROCESS",
        "WEB",
        "PWA",
        "PROTOTYPE",
        "RESEARCH",
        "TOOLS"
      ]
    }
  }
};
