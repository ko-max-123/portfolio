# Tetsuyuki Portfolio — Content Edition

個人制作・研究と、Web開発・QAの取り組みを紹介するポートフォリオです。LAB / BASEの切り替えで、それぞれの内容を表示します。

## モード

- **LAB MODE**: 旅行やキャンプ向けのWebアプリ、3D CAPTCHA・QRの研究、画像処理、ゲームの補助ツール、Appium・Playwrightによる個人でのテスト自動化の試作・検証を、制作のきっかけや工夫した点とともに紹介します。
- **BASE MODE**: Web開発やチームリーダーの経験、ソフトウェア品質・テストの業務、業務改善の事例を紹介します。

## Google Search Console

次の確認用メタタグを `index.html` / `projects.html` / `career.html` に設定済みです。

```html
<meta name="google-site-verification" content="L4IvNJhZD9AygXZNSC45SL-LYYBehn3dd7ZT6utL0IA" />
```

## 公開情報の扱い

勤務先は業種で記載しています。業務に関する事例は、会社名や顧客名、案件固有の画面・データ、認証情報、社内資料、ソースコードを伏せ、取り組みの内容や設計上の工夫、使用技術を紹介しています。

## ファイル

- `index.html`
- `projects.html`
- `career.html`
- `projects-data.js`
- `app.js`
- `style.css`


## ファビコン / アプリアイコン

- LAB MODE: `assets/icons/favicon-lab.svg`
- BASE MODE: `assets/icons/favicon-base.svg`
- 共通 / ブックマーク用: `assets/icons/favicon.svg`, `favicon.ico`
- Apple Touch Icon / PWA icons / `site.webmanifest` を同梱
- LAB / BASE切替時にブラウザのファビコンと `theme-color` も自動で切り替わります。
