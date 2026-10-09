// トップページの文章・取り組みカード・作業台。HTMLを触らず、必要な項目を編集・追加します。
// 配列に項目を追加すると、同じテンプレートで表示されます。
export default {
  "hero": {
    "kicker": {
      "lab": "PERSONAL LAB / BUILD, USE, REBUILD",
      "base": "SOFTWARE ENGINEER / SOFTWARE QA"
    },
    "heading": {
      "lab": [
        {
          "text": "MAKE IT.",
          "emphasis": false
        },
        {
          "text": "USE IT.",
          "emphasis": true
        },
        {
          "text": "CHANGE IT.",
          "emphasis": false
        }
      ],
      "base": [
        {
          "text": "BUILD.",
          "emphasis": false
        },
        {
          "text": "VERIFY.",
          "emphasis": true
        },
        {
          "text": "IMPROVE.",
          "emphasis": false
        }
      ]
    },
    "lead": {
      "lab": "旅行のしおりや収集記録、キャンプの設営を助けるWebアプリを作っています。3D CAPTCHAやQRコードの研究、テスト自動化の試作・検証にも取り組み、実際に使った感想や検証結果をもとに改良を重ねています。",
      "base": "2015年からWeb開発に携わり、バックエンドやタブレットアプリの開発、チームリーダーを経験してきました。2026年7月からは品質・テスト支援企業で、モバイルアプリのテストやデータの準備、テスト業務の改善に取り組んでいます。"
    },
    "primaryLink": {
      "lab": "制作と研究を見る →",
      "base": "開発・QAの取り組みを見る →"
    },
    "randomLink": {
      "lab": "公開アプリをランダムに開く ⚄",
      "base": "公開アプリをランダムに開く ⚄"
    },
    "careerLink": {
      "lab": "これまでの歩み",
      "base": "職務経歴を見る"
    }
  },
  "ticker": {
    "lab": "PWA ✦ CAMP TOOLS ✦ 3D CAPTCHA ✦ DUAL QR ✦ IMAGE PROCESSING ✦ GAME TOOLS ✦ TEST AUTOMATION ✦",
    "base": "WEB DEVELOPMENT ✦ TEAM LEAD ✦ MOBILE TEST ✦ QA PROCESS ✦ TOOLING ✦"
  },
  "featured": {
    "code": {
      "lab": "/ CURRENT BUILDS 01",
      "base": "01 / SELECTED CASES"
    },
    "title": {
      "lab": "個人制作と研究",
      "base": "開発・QAの取り組み"
    },
    "intro": {
      "lab": "Webアプリや研究用の試作品、個人で検証しているテスト自動化を、制作のきっかけや工夫した点とともに紹介します。",
      "base": "Web開発やQA、業務改善の事例を紹介します。業務に関する内容は、企業や案件を特定できる情報を伏せて掲載しています。"
    },
    "link": {
      "lab": "すべての制作・研究を見る →",
      "base": "すべての取り組みを見る →"
    }
  },
  "practice": {
    "code": {
      "lab": "/ WHAT I KEEP DOING 02",
      "base": "02 / CURRENT PRACTICE"
    },
    "title": {
      "lab": "制作で大切にしていること",
      "base": "現在の主な業務"
    }
  },
  "console": {
    "focusCommand": {
      "lab": "show --current-focus",
      "base": "profile --current"
    },
    "focus": {
      "lab": "PWA / Camp tools / 3D CAPTCHA / QR / image processing / Test automation",
      "base": "Software Quality & Testing / Mobile test support"
    },
    "methodCommand": {
      "lab": "show --method",
      "base": "profile --tooling"
    },
    "method": {
      "lab": "prototype → use → notice → rebuild",
      "base": "Excel / Python / M365 Copilot / Documentation"
    },
    "label": "tetsuyuki@lab-base:~"
  },
  // 作業台の項目。title / summary をコピーして追加すると番号が自動で付きます。
  "workbench": [
    {
      "title": "Camp Layout Lab",
      "summary": "地図と風向にGPS・端末の方位を加え、キャンプ場で使いやすい設営ツールへ改良しています。"
    },
    {
      "title": "旅しおり / 収集手帳",
      "summary": "localStorageやIndexedDBを使い、旅の予定や写真を端末に保存できるアプリを作っています。"
    },
    {
      "title": "3D CAPTCHA / QR",
      "summary": "3D空間での文字認識や、色・位相・動画を使って情報を重ねる方法を検証しています。"
    }
  ],
  "buildRule": {
    "label": "BUILD RULE",
    "text": "実際に使って気づいたことを、次の改善につなげる。"
  },
  // LABの取り組みカード。points は任意の箇条書き（不要なら []）。
  "questions": [
    {
      "label": "BUILD / 01",
      "title": "日常で使えるWebアプリにする",
      "summary": "localStorageやIndexedDBで記録を保存し、Service Workerでオフライン利用に対応しています。JSONでのデータ入出力も備え、継続して使えるようにしています。",
      "points": []
    },
    {
      "label": "BUILD / 02",
      "title": "使う場面に合わせて見直す",
      "summary": "キャンプ設営ツールでは、現地での判断に役立つGPS・方位・風向の表示を重視しました。実際の使い方を考えながら、必要な機能を見直しています。",
      "points": []
    },
    {
      "label": "RESEARCH / 03",
      "title": "研究のアイデアを試せる形にする",
      "summary": "3D CAPTCHA、Rot3D-CHA、Dual QRなど、認証や画像表現のアイデアをブラウザで試せる形に実装し、使いやすさや方式の可能性を検証しています。",
      "points": []
    },
    {
      "label": "EXPERIMENT / 04",
      "title": "テスト自動化の検証",
      "summary": "個人の試作として、AppiumやPlaywrightを使ったテスト自動化を検証しています。Androidの操作記録や、Excelのテストケースを実行可能なシナリオに変換する方法を試しています。",
      "points": [
        "Appium / ADBでの操作記録",
        "pytestによるテスト実行",
        "ExcelからPlaywrightへの変換"
      ]
    }
  ],
  // BASEの業務カード。配列順に表示します。
  "capabilities": [
    {
      "label": "01 / MOBILE TEST",
      "title": "モバイルアプリのテスト",
      "summary": "実機での機能・回帰テストや、テストデータの準備を担当しています。",
      "points": [
        "Android実機での確認",
        "ST / UATの支援",
        "実施状況・課題の整理"
      ]
    },
    {
      "label": "02 / QA PROCESS",
      "title": "テストの進め方を改善",
      "summary": "準備状況や課題を整理し、テストの実施判断とチーム内の共有を支援しています。",
      "points": [
        "システム理解マップ",
        "実施可能なテストの一覧",
        "週次予定・作業が止まる理由の記録"
      ]
    },
    {
      "label": "03 / TOOLING",
      "title": "業務を支えるツール作り",
      "summary": "繰り返し発生する作業を減らすため、用途に合わせたツールを試作しています。",
      "points": [
        "証跡フォルダの生成",
        "画像の仕分け",
        "マニュアル・画面遷移図の保守"
      ]
    }
  ],
  "manifesto": {
    "label": "PERSONAL DEVELOPMENT",
    "title": [
      "作って試し、",
      "少しずつ改良する。"
    ],
    "before": "アイデアを形にした後も、",
    "emphasis": "使って確かめ、改善を重ねる",
    "after": "ことを大切にしています。"
  },
  // BASEのプロフィール。stats に指標を追加できます。
  "operator": {
    "label": "OPERATOR PROFILE / TK-2026",
    "status": "ACTIVE",
    "name": "TETSUYUKI KOYAMA",
    "current": "CURRENT: SOFTWARE QA / SINCE 2026.07",
    "role": "ENGINEER",
    "stats": [
      {
        "label": "WEB DEVELOPMENT",
        "value": "9+ YEARS"
      },
      {
        "label": "TEAM LEAD",
        "value": "EXPERIENCED"
      },
      {
        "label": "CURRENT DOMAIN",
        "value": "QA / TEST"
      },
      {
        "label": "IMPROVEMENT",
        "value": "PROCESS / TOOLS"
      }
    ],
    "summary": "Web開発の経験を生かし、仕様の確認からテスト、業務改善まで取り組んでいます。現場の手作業や進めにくさを整理し、ツールや運用の工夫で改善を図っています。"
  }
};
