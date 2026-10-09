// 経歴・学歴・技術経験の元データ。journey/employment/skills/education の配列に追加します。
// 配列に項目を追加すると、同じテンプレートで表示されます。
export default {
  "hero": {
    "lab": {
      "kicker": "TECH JOURNEY / WHAT I LEARNED",
      "title": "MY ROUTE",
      "lead": "情報工学を学び、Web開発やチームリーダー、研究・個人制作を経験してきました。現在はQAにも携わり、個人の活動としてテスト自動化の試作・検証を続けています。",
      "mode": "LAB = 学んできたことと関心の広がり"
    },
    "base": {
      "kicker": "EMPLOYMENT / ROLE / PRACTICE",
      "title": "CAREER LOG",
      "lead": "2015年からWeb開発に携わり、バックエンドやタブレットアプリの開発、チームリーダーを経験してきました。2026年7月からは品質・テスト支援企業で、モバイルアプリのテストやデータの準備、業務改善を担当しています。",
      "mode": "BASE = 職務経歴と現在の取り組み"
    }
  },
  "journeyTitle": "これまでの歩み",
  "employmentTitle": "職務経歴",
  "skillsTitle": "主な技術と業務経験",
  "educationTitle": "学歴",
  "journeyCode": "/ TECH JOURNEY 01",
  "employmentCode": "01 / EMPLOYMENT LOG",
  // LABの歩み。period / title / summary / note を指定します。
  "journey": [
    {
      "period": "2009 — 2015 / FOUNDATION",
      "title": "情報工学の基礎を学ぶ",
      "summary": "北九州市立大学 情報メディア工学科と、同大学院 情報工学専攻で学びました。ソフトウェア工学を学んだ経験が、現在の開発や研究の土台になっています。",
      "note": "INFORMATION ENGINEERING"
    },
    {
      "period": "2015 — 2020 / WEB",
      "title": "Web制作からシステム開発へ",
      "summary": "CMSの導入支援、Webページ制作、Webシステム開発を担当しました。HTML/CSS/JavaScript、PHP、WordPress、Java、MySQLを使い、利用者や運用担当者の要望に応える経験を積みました。",
      "note": "WEB / CMS / SYSTEM"
    },
    {
      "period": "2020 — 2024 / LEAD",
      "title": "開発とチームの進行を支える",
      "summary": "Webアプリのバックエンドやタブレットアプリの開発を担当しました。チームリーダーとして進捗管理やメンバーの技術面のサポートも行い、チーム全体で開発を進める経験を積みました。",
      "note": "TEAM / DELIVERY / SUPPORT"
    },
    {
      "period": "2024 — 2026 / RESEARCH & BUILD",
      "title": "研究と個人制作に取り組む",
      "summary": "3D CAPTCHAの再評価、Rot3D-CHA、Dual QR、画像加工の評価に取り組みました。旅行しおりや収集手帳、キャンプ支援ツールなども制作し、AIを活用しながら試作と改善を重ねました。",
      "note": "3D / PWA / IMAGE / PROTOTYPE"
    },
    {
      "period": "2026.07 — PRESENT / QUALITY",
      "title": "開発の経験をQAに生かす",
      "summary": "品質・テスト支援企業で、モバイルアプリのテストや証跡の整理、進捗の共有に取り組んでいます。個人の活動では、Appium/ADBによる操作記録やPlaywrightを使ったテスト自動化を試作・検証しています。",
      "note": "SOFTWARE QA / PERSONAL EXPERIMENTS"
    }
  ],
  // BASEの職歴。badge は任意、facts は補足項目の配列です。
  "employment": [
    {
      "period": "2026.07 — PRESENT",
      "title": "品質・テスト支援企業",
      "badge": "ACTIVE",
      "summary": "モバイルアプリの機能・回帰テスト、テストデータの準備、実施状況の整理を担当しています。証跡の整理や資料の更新を助けるツールも検討・試作しています。",
      "facts": [
        {
          "label": "TEST",
          "text": "実機での機能・回帰テストと、テストデータの準備を行っています。"
        },
        {
          "label": "IMPROVEMENT",
          "text": "システムの理解に必要な情報、テストの準備状況、週次予定、作業が止まる理由を整理しています。証跡フォルダの生成や画像の仕分け、マニュアル・画面遷移図の更新を支援するツールも試作しています。"
        }
      ]
    },
    {
      "period": "2024.09 — 2026.06",
      "title": "研究・個人制作 / 再就職準備",
      "badge": "",
      "summary": "研究室のWeb制作や研究支援を続けながら、3D CAPTCHA、Rot3D-CHA、旅行・キャンプ向けPWA、画像処理、ゲームの補助ツールなどを制作しました。これまでの開発経験を整理し、QAやテスト設計、自動化の学習も進めました。",
      "facts": []
    },
    {
      "period": "2020.02 — 2024.08",
      "title": "システム開発企業",
      "badge": "",
      "summary": "Webアプリのバックエンドやタブレットアプリの開発を担当しました。チームリーダーとして進捗を管理し、メンバーの技術面のサポートも行いました。",
      "facts": []
    },
    {
      "period": "2015.04 — 2020.02",
      "title": "Web開発企業",
      "badge": "",
      "summary": "CMSの導入支援、Webページ制作、Webシステム開発を担当しました。HTML、CSS、JavaScript、PHP、WordPress、Java、MySQLなどを使い、チームリーダーとしての業務も経験しました。",
      "facts": []
    }
  ],
  // 学歴。同じ職歴部品を使用し、HTMLを追加する必要はありません。
  "education": [
    {
      "period": "2013.04 — 2015.03",
      "title": "北九州市立大学大学院 情報工学専攻",
      "badge": "",
      "summary": "情報工学専攻 修了。",
      "facts": []
    },
    {
      "period": "2009.04 — 2013.03",
      "title": "北九州市立大学 情報メディア工学科",
      "badge": "",
      "summary": "情報メディア工学科 卒業。",
      "facts": []
    }
  ],
  // 主な技術と業務経験。points を指定すると箇条書きも表示できます。
  "skills": [
    {
      "label": "WEB",
      "title": "Web Development",
      "summary": "Java / PHP / JavaScript / MySQL / CMS / WordPressを使い、バックエンド開発やWeb制作を経験してきました。",
      "points": []
    },
    {
      "label": "QA",
      "title": "Software Testing",
      "summary": "モバイルアプリの実機テストやデータ準備、確認すべき観点の整理を行っています。",
      "points": []
    },
    {
      "label": "PROTOTYPE",
      "title": "Tool Building",
      "summary": "Python / HTML / JavaScriptで、業務の繰り返し作業を減らすツールを試作しています。",
      "points": []
    }
  ],
  "note": "勤務先は業種で記載しています。業務に関する事例は、会社名や顧客名、案件固有の画面・データ・資料・ソースコードを伏せて紹介しています。"
};
