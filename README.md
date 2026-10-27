# Tetsuyuki Portfolio — Content Edition

V5のLAB / BASEデザインを維持し、掲載文言を実際の経歴・制作・研究・QA活動に置き換えた版です。

## モード

- **LAB MODE**: 個人制作・研究。旅行、キャンプ、3D CAPTCHA、QR、画像処理、ゲーム支援などを、目的・試行錯誤・実装内容で表示します。
- **BASE MODE**: 職務・技術・QA。Web開発、チームリード、ソフトウェア品質・テスト、自動化、業務改善の内容を表示します。

## Google Search Console

次の確認用メタタグを `index.html` / `projects.html` / `career.html` に設定済みです。

```html
<meta name="google-site-verification" content="L4IvNJhZD9AygXZNSC45SL-LYYBehn3dd7ZT6utL0IA" />
```

## 公開情報の扱い

業務系ケーススタディでは、顧客名、案件固有の画面・データ、認証情報、社内資料、ソースコードなどは掲載せず、取り組みの目的・設計・使用技術のみを一般化して記載しています。

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
