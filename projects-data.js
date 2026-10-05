window.PROJECTS = [
  {
    id:"LAB-001", title:"わたしの収集手帳", showLab:true, showBase:true, featuredLab:true, featuredBase:false,
    tags:["PWA","IndexedDB","Image handling"], baseCats:["WEB","PWA"], labCats:["TRAVEL","EXPERIMENT"],
    live:"https://ko-max-123.github.io/travel/", code:"https://github.com/ko-max-123/travel",
    lab:{
      label:"旅の記録を、本棚として育てる", question:"ポケフタや一宮巡りの写真を、一覧ではなく『自分の収集手帳』として残したい。",
      summary:"ポケフタ482件、一宮103社の初期データを持ち、都道府県ごとの写真・訪問記録を端末内に保存するPWA。自由帳も追加でき、旅の記録を本棚から選ぶ体験にしています。",
      points:["IndexedDBに写真・訪問記録を保存","画像を詳細用1280px／一覧用360pxへ縮小","Service WorkerによるPWA・オフライン対応"]
    },
    base:{
      label:"大量画像を扱う端末内完結PWA", summary:"サーバへ写真を送らず、ブラウザ内に記録を保持する収集記録アプリ。1500枚規模を想定し、画像縮小・遅延読込・IndexedDB保存を組み合わせています。",
      skills:["IndexedDB","PWA / Service Worker","Client-side image processing","Responsive UI"], evidence:"データ永続化、画像容量、スマホ利用、オフライン利用まで含めて、静的ホスティングだけで成立する構成にしました。"
    }
  },
  {
    id:"LAB-002", title:"旅しおりメーカー", showLab:true, showBase:true, featuredLab:true, featuredBase:false,
    tags:["PWA","localStorage","Print / PDF"], baseCats:["WEB","PWA"], labCats:["TRAVEL","UTILITY"],
    live:"https://ko-max-123.github.io/shiori/", code:"https://github.com/ko-max-123/shiori",
    lab:{
      label:"旅行前の情報整理を、そのまま旅の道具にする", question:"予定・持ち物・予算が別々になる旅行準備を、ひとつのしおりにまとめたい。",
      summary:"日別予定、持ち物、概算予算、表紙画像を編集しながら完成形を同時に確認できる旅行しおりPWA。複数の旅行を保存し、JSONで別端末へ持ち出せます。",
      points:["3カラムで一覧・編集・プレビューを同時表示","ドラッグ&ドロップによる予定並べ替え","印刷/PDF向けの専用レイアウト"]
    },
    base:{
      label:"バックエンドなしの旅行計画アプリ", summary:"API・DB・ログインを使わず、localStorageとJSON入出力で複数しおりを管理。編集UIと印刷UIを分け、PCとスマホの両方で利用できるようにしています。",
      skills:["localStorage","Drag & Drop","Print CSS","JSON import/export"], evidence:"静的サイトでも継続利用できるデータ設計と、編集・閲覧・印刷を切り替えるUIフローを実装しました。"
    }
  },
  {
    id:"LAB-003", title:"Camp Layout Lab", showLab:true, showBase:true, featuredLab:true, featuredBase:false,
    tags:["Map","Weather API","GPS","Device orientation"], baseCats:["WEB","PROTOTYPE"], labCats:["CAMP","EXPERIMENT"],
    live:"https://ko-max-123.github.io/camp/04/", code:"https://github.com/ko-max-123/camp",
    lab:{
      label:"設営図から、現地で使う道具へ", question:"風向きだけでなく、自分が今どちらを向いているかまで分かれば、設営判断がしやすくなる。",
      summary:"当初は地図上の設営シミュレーターと3D表現を中心にしていましたが、実利用を考える中でGPS・端末方位・風向を重ねる方向へ変更。見栄えより現地で役立つことを優先しました。",
      points:["MapLibre系の地図UIで設営位置を扱う","Open-Meteoの風向情報を表示","Geolocationと端末方位の取得を追加"]
    },
    base:{
      label:"位置・気象・端末センサー統合UI", summary:"地図、気象API、位置情報、端末方位を組み合わせたキャンプ設営支援プロトタイプ。利用シーンから仕様を見直し、3D中心から現地判断中心へ変更しました。",
      skills:["Geolocation","DeviceOrientation","Weather API","Map UI"], evidence:"『作った機能を守る』のではなく、利用目的に合わせて仕様そのものを変える反復型プロトタイピングを行いました。"
    }
  },
  {
    id:"LAB-004", title:"Camp Window Finder", showLab:true, showBase:true, featuredLab:false, featuredBase:false,
    tags:["Weather API","Comparison","Decision support"], baseCats:["WEB","PROTOTYPE"], labCats:["CAMP","UTILITY"],
    live:"https://ko-max-123.github.io/camp/01/", code:"https://github.com/ko-max-123/camp",
    lab:{
      label:"複数候補日の天気を、一度に比べる", question:"キャンプ候補日ごとに天気予報を開き直すのではなく、同じ観点で横並びにしたい。",
      summary:"複数日程の気温、降水、風などを同じ画面で比較し、キャンプ向きの日を判断するためのツール。単なる予報表示ではなく、日程選択のための比較に寄せています。",
      points:["候補日を同じレイアウトで比較","気温・雨・風をキャンプ目線で整理","複数日程の総合比較"]
    },
    base:{
      label:"気象データの比較・意思決定UI", summary:"外部気象データを日程単位で整理し、複数候補を横断比較できる画面に変換。情報取得よりも比較・選択を主目的に設計しています。",
      skills:["API integration","Data normalization","Comparison UI","Responsive design"], evidence:"複数ソースの数値を、利用者が選択に使える粒度へ整形して表示するUIを実装しました。"
    }
  },
  {
    id:"LAB-005", title:"Campfire Topics", showLab:true, showBase:true, featuredLab:true, featuredBase:false,
    tags:["JavaScript","Video","Ambient UX"], baseCats:["WEB","PROTOTYPE"], labCats:["CAMP","PLAY"],
    live:"https://ko-max-123.github.io/campfire-web/", code:"https://github.com/ko-max-123/campfire-web",
    lab:{
      label:"会話を操作しない、会話支援", question:"焚き火を囲んだ会話で、アプリが主役にならずに沈黙だけを少し助けられないか。",
      summary:"焚き火動画を背景に、一定間隔で話題カードだけが切り替わるWebアプリ。後から『同じキャンプ場の人がルーム参加できる』構想へ広げています。",
      points:["操作要求を減らしたアンビエントUI","10/15/30分で話題切替","映像・音・話題の最小構成"]
    },
    base:{
      label:"低操作型インタラクション設計", summary:"背景メディアとタイマー制御だけで会話のきっかけを提示するWebアプリ。利用者同士の会話を阻害しないよう、操作量を意図的に減らしています。",
      skills:["JavaScript timers","Media playback","Ambient interaction","UI simplification"], evidence:"機能を増やすのではなく、利用場面に合わせて操作を削る設計を実装しました。"
    }
  },
  {
    id:"LAB-006", title:"情報セキュリティ体験デモ集", showLab:true, showBase:true, featuredLab:false, featuredBase:false,
    tags:["Security","Education","Interactive demo"], baseCats:["WEB","PROTOTYPE"], labCats:["EDUCATION","EXPERIMENT"],
    live:"https://ko-max-123.github.io/demo/", code:"https://github.com/ko-max-123/demo",
    lab:{
      label:"聞くだけではなく、触って理解する", question:"情報セキュリティの説明を、見学者が自分で試せる体験に変えたい。",
      summary:"複数のセキュリティテーマを、目的・操作・注意点と一緒に触れる小さなデモとして整理。説明者用のカンペを外し、見学者単独でも意味が分かる構成へ修正しました。",
      points:["操作→結果→理解の流れ","各デモに目的・操作・注意を明示","説明者依存の文章を削除"]
    },
    base:{
      label:"説明依存を減らす教育UI", summary:"情報セキュリティの概念を、体験型デモと利用者向け説明で理解できる構成に再設計。展示・見学用途を想定しています。",
      skills:["Instructional UI","Front-end","Information architecture","Demo design"], evidence:"誰かが横で説明しなくても使えるよう、画面内の情報構造と導線を見直しました。"
    }
  },
  {
    id:"LAB-007", title:"研究室 Webサイト", showLab:true, showBase:true, featuredLab:false, featuredBase:true,
    tags:["Jekyll","YAML","GitHub Pages"], baseCats:["WEB"], labCats:["WEB","MAINTAINABILITY"],
    live:"https://ko-max-123.github.io/test/", code:"https://github.com/ko-max-123/test",
    lab:{
      label:"更新する人の作業を減らすサイト", question:"研究業績やメンバー追加のたびにHTMLを直接直す運用から離れたい。",
      summary:"研究室サイトをJekyll化し、ヘッダー・フッター・カードを共通部品へ分離。メンバーや研究業績をMarkdown/YAMLデータとして管理できる構成にしました。",
      points:["_includes / _layoutsへ共通化","メンバー・業績・ニュースをデータ化","著者IDでメンバーと業績を関連付け"]
    },
    base:{
      label:"静的サイトの保守性改善", summary:"JekyllのテンプレートとYAML/Markdownを使い、画面とデータを分離。更新担当者がHTML構造を意識せずコンテンツを追加できる構成へ変更しました。",
      skills:["Jekyll","YAML data modeling","Template architecture","GitHub Pages"], evidence:"制作だけでなく、継続更新を前提にしたデータ構造・共通化・運用方法まで設計しました。"
    }
  },
  {
    id:"R-001", title:"3D CAPTCHA 実験", showLab:true, showBase:true, featuredLab:true, featuredBase:true,
    tags:["3D","CAPTCHA","User study"], baseCats:["RESEARCH","WEB"], labCats:["RESEARCH","EXPERIMENT"],
    live:"https://ko-max-123.github.io/3d-cha-model/", code:"https://github.com/ko-max-123/3d-cha-model",
    lab:{
      label:"空間認識を認証へ使う研究", question:"人が3D空間を認識する能力を利用すると、機械判定と人間の使いやすさを両立できるか。",
      summary:"スマートフォン上で3D CAPTCHAを操作してもらい、正答率、所要時間、主観評価を取得する実験ページ。査読対応では統計検定、誤答傾向、占有率、平滑化リスクなども再評価しました。",
      points:["3D CAPTCHAの操作フローをWeb化","実験結果とアンケートを収集","統計評価・誤答分析・攻撃耐性の見直し"]
    },
    base:{
      label:"研究要件を実験UIへ変換", summary:"研究仮説を参加者が操作できる3D Web UIへ落とし込み、計測・アンケート・再評価まで含めた検証環境を構築しました。",
      skills:["3D Web UI","Experiment design","Statistical evaluation","Usability testing"], evidence:"実装だけでなく、査読指摘に対する再評価と分析観点の追加まで行い、研究としての検証を継続しました。"
    }
  },
  {
    id:"R-002", title:"Rot3D-CHA", showLab:true, showBase:true, featuredLab:false, featuredBase:false,
    tags:["Three.js","Point cloud","Authentication"], baseCats:["RESEARCH","WEB"], labCats:["RESEARCH","EXPERIMENT"],
    live:"https://ko-max-123.github.io/3dmodel-create/", code:"https://github.com/ko-max-123/3dmodel-create",
    lab:{
      label:"回転する3D文字認証", question:"文字を3D点群として配置し、回転操作と空間認識を認証に使えるか。",
      summary:"英大文字・数字を3D空間の点群として表示し、利用者が読み取って回答する認証プロトタイプ。文字球とノイズの分離、色・大きさ差、背景文字などを試しています。",
      points:["Three.jsによる3D点群表示","回転操作と文字回答UI","認識性と攻撃耐性の両面を検討"]
    },
    base:{
      label:"Three.js認証プロトタイプ", summary:"3D空間の点群文字を使う認証方式を、ブラウザ上で検証可能な操作UIとして実装しました。",
      skills:["Three.js","3D interaction","Authentication UX","Rapid prototyping"], evidence:"研究アイデアを、実際に操作・回答・評価できるプロトタイプへ短いサイクルで変換しています。"
    }
  },
  {
    id:"R-003", title:"Dual QR / 位相シフトOTP", showLab:true, showBase:true, featuredLab:false, featuredBase:false,
    tags:["QR","OTP","Image encoding"], baseCats:["RESEARCH","PROTOTYPE"], labCats:["RESEARCH","EXPERIMENT"],
    code:"https://github.com/ko-max-123/Dualqr",
    lab:{
      label:"1枚の見た目に複数情報を重ねる", question:"QRコードの見え方を保ちながら、色・位相・時間方向に複数情報を持たせられるか。",
      summary:"2URL切替、RGB多重、位相シフト、OTP動画などを検討。動画方式では135フレームから675bitを抽出する構成まで試作しました。",
      points:["複数URLの切替方式を検討","RGB多重・位相シフトを比較","時間方向へ情報を埋め込むOTP動画"]
    },
    base:{
      label:"画像・時間方向の情報多重化検証", summary:"QR表現に色・位相・フレーム系列を組み合わせ、複数情報やOTPを持たせる方式を検討・試作しました。",
      skills:["QR encoding","Image processing","Temporal encoding","Prototype evaluation"], evidence:"単一方式に固定せず、複数の符号化方法を比較しながら実装可能性を検証しました。"
    }
  },
  {
    id:"LAB-008", title:"Arktools", showLab:true, showBase:true, featuredLab:false, featuredBase:false,
    tags:["Electron","Python","OpenCV","OCR"], baseCats:["TOOLS","PROTOTYPE"], labCats:["PLAY","TOOLS"],
    code:"https://github.com/ko-max-123/ark_tools",
    lab:{
      label:"ゲーム画面を自分用ツールの入力にする", question:"スクリーンショットから募集タグを読み取り、ゲーム内の判断を補助できないか。",
      summary:"アークナイツの画面キャプチャを入力に、テンプレートマッチングやOCRでタグを認識・解析するデスクトップツール。ElectronとPythonを組み合わせています。",
      points:["画面キャプチャを入力化","OpenCV/OCRでタグ認識","Electron UIとPython処理を接続"]
    },
    base:{
      label:"画像解析デスクトップツール", summary:"ElectronのUIとPython/OpenCVの画像処理を組み合わせ、画面画像から情報を抽出して結果表示する処理フローを構築しました。",
      skills:["Electron","Python","OpenCV","OCR"], evidence:"異なる実行環境を接続し、画像取得→解析→結果表示までを一つのデスクトップツールにまとめました。"
    }
  },

  /* Work / QA case studies. No customer-specific data or source code is published. */
  {
    id:"QA-001", title:"Android操作レコーダー / Appium", showLab:false, showBase:true, featuredBase:true,
    tags:["Appium","ADB","pytest","Android"], baseCats:["QA","AUTOMATION","TOOLS"],
    base:{
      label:"モバイルテスト自動化PoC / 非公開", summary:"Windows PCとAndroid実機をUSB接続し、指操作のタップ・縦スクロール・横スワイプ・戻るをADBで記録。スクリーンショットとUI XML、Locator候補、画面比率座標をYAMLへ保存し、再生・pytest実行につなげる仕組みを試作しました。",
      skills:["Appium","ADB","Python / pytest","UI hierarchy analysis"], evidence:"WebView DOMが取得できない場面も想定し、UI要素Locatorと画面比率座標の両方を記録するフォールバック設計にしました。"
    }
  },
  {
    id:"QA-002", title:"Excelテストケース → Playwright PoC", showLab:false, showBase:true, featuredBase:true,
    tags:["Playwright","Excel","Copilot","TypeScript"], baseCats:["QA","AUTOMATION","AI"],
    base:{
      label:"既存テスト資産を自動化へつなぐPoC / 非公開", summary:"Excel/CATで管理されているテストケースを、Copilotを使ってPlaywrightシナリオへ変換する運用を検討。基本処理、外部環境設定、認証情報の分離、storageState再利用まで含む構成を作りました。",
      skills:["Playwright","TypeScript","Excel parsing","M365 Copilot"], evidence:"既存Excelを捨てずに自動化へ段階移行できるよう、変換ルール・基準となるspec・環境設定・認証setupを分離しました。"
    }
  },
  {
    id:"QA-003", title:"テスト実施状況の見える化", showLab:false, showBase:true, featuredBase:true,
    tags:["QA operation","Planning","Excel"], baseCats:["QA","PROCESS"],
    base:{
      label:"テスト運用改善 / 非公開", summary:"仕様理解不足、テストデータ準備と実施の同時進行、日々の予定共有不足という課題に対し、システム理解マップ・テスト実施可能一覧・1週間の作業予定・詰まり理由記録の4つに整理しました。",
      skills:["Test management","Task visualization","Blocker analysis","Documentation"], evidence:"『その日やること』だけで進めず、実施可否・準備不足・詰まり理由を分離して、チーム内で状況を共有できる形にしました。"
    }
  },
  {
    id:"QA-004", title:"エビデンスフォルダ自動生成", showLab:false, showBase:true, featuredBase:true,
    tags:["Excel","Python","Evidence management"], baseCats:["QA","TOOLS","PROCESS"],
    base:{
      label:"テスト証跡整理ツール / 非公開", summary:"テスト仕様書Excelから、仕様書名→シナリオID/ID→端末別というフォルダを自動生成するツールを設計。期待値が空欄で連続するケースは『1~8』のように範囲フォルダへまとめ、複数Excelの一括読込にも対応する構成にしました。",
      skills:["Excel parsing","File system automation","Python","HTML UI"], evidence:"人が大量の証跡フォルダを手作業する前提をやめ、仕様書の構造からフォルダ規則を生成する形へ置き換えました。"
    }
  },
  {
    id:"QA-005", title:"大量エビデンス画像の仕分け", showLab:false, showBase:true, featuredBase:false,
    tags:["Image classification","Batch","Evidence"], baseCats:["QA","TOOLS"],
    base:{
      label:"数千枚の画像整理PoC / 非公開", summary:"iOSスクリーンショットとAndroid端末を撮影した写真が混在する数千枚の証跡を、テスト境界に挟まる『しおり画像』を基準に分割する仕組みを試作。UIの一部画像を登録し、画像特徴からしおり判定する方向へ拡張しました。",
      skills:["Image matching","Batch processing","File organization","Python"], evidence:"OCRだけに依存できない撮影画像を含むため、時間情報・画像特徴・しおり境界を組み合わせる設計にしました。"
    }
  },
  {
    id:"QA-006", title:"画面遷移図のWeb化プロトタイプ", showLab:false, showBase:true, featuredBase:false,
    tags:["Excel","Search UI","Maintainability"], baseCats:["QA","WEB","PROCESS"],
    base:{
      label:"大規模Excel資料の保守改善 / 非公開", summary:"全画面を網羅している一方、重い・保守しにくい・目的画面を探しにくいExcel画面遷移図を、検索・関連表示しやすいWeb UIへ置き換えるプロトタイプを作成。Excelと画像から生成できる構成を検討しました。",
      skills:["Information architecture","Search UI","Excel data modeling","Static web"], evidence:"既存Excelの『専門知識不要で全体を網羅』という長所を残しつつ、3か月ごとの更新負荷を下げる方向で再設計しました。"
    }
  },
  {
    id:"QA-007", title:"操作マニュアル編集・HTML化ツール", showLab:false, showBase:true, featuredBase:false,
    tags:["Markdown","HTML","Authoring tool"], baseCats:["TOOLS","PROCESS","WEB"],
    base:{
      label:"マニュアル保守支援 / 非公開", summary:"Excelベースの操作マニュアルをMarkdown/HTMLへ変換し、画面画像上をクリックして①②③などの説明番号を配置できる編集補助ツールを設計。新規・更新、Markdown出力、Excel出力まで一つの流れにまとめました。",
      skills:["Markdown","HTML/CSS/JS","Coordinate mapping","Document generation"], evidence:"座標を手入力する運用をやめ、画像をクリックして説明位置を設定できるようにし、マニュアル更新の作業負荷を下げました。"
    }
  },
  {
    id:"QA-008", title:"低速ネットワーク試験環境", showLab:false, showBase:true, featuredBase:false,
    tags:["Windows","Python","Network testing"], baseCats:["QA","TOOLS"],
    base:{
      label:"モバイル通信条件テスト支援 / 非公開", summary:"専用の低速Wi-FiやiOS開発者モードを使えない条件で、Windows PCをアクセスポイントとしてスマホを接続し、PC側で通信速度を制限する試験環境を検討。PythonとWindows標準機能だけで構成し、事前の環境チェックも用意しました。",
      skills:["Windows networking","Python","Test environment design","Constraint handling"], evidence:"追加ソフトを自由に導入できない業務PCを想定し、利用可能な標準機能から試験条件を再現する方法を組み立てました。"
    }
  },
  {
    id:"QA-009", title:"AI生成テストケースのレビュー設計", showLab:false, showBase:true, featuredBase:false,
    tags:["M365 Copilot","Test design","Quality metrics"], baseCats:["QA","AI","PROCESS"],
    base:{
      label:"AI活用の品質評価設計 / 非公開", summary:"生成AIにテストケースを作らせるだけでなく、人がレビューできる評価軸を設計。網羅性、正確性、実行可能性、重複、欠陥検出力、レビュー効率を分け、仕様書に基づく正解表・観点表と照合する運用を検討しました。",
      skills:["Test design","M365 Copilot","Review criteria","Quality measurement"], evidence:"AI出力をそのまま採用せず、『何をもって良いテストケースとするか』を人間側で定義する仕組みにしました。"
    }
  }
];
