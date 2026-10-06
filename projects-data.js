window.PROJECTS = [
  {
    id:"LAB-001", title:"わたしの収集手帳", showLab:true, showBase:true, featuredLab:true, featuredBase:false,
    tags:["PWA","IndexedDB","Image handling"], baseCats:["WEB","PWA"], labCats:["TRAVEL","EXPERIMENT"],
    live:"https://ko-max-123.github.io/travel/", code:"https://github.com/ko-max-123/travel",
    lab:{
      label:"旅の写真と訪問記録をまとめる", question:"ポケフタや一宮巡りの写真を、自分だけの手帳として残したい。",
      summary:"ポケフタ482件、一宮103社の初期データを備えた収集記録アプリです。都道府県ごとの写真や訪問記録を端末に保存でき、自由帳も追加できます。本棚から手帳を選ぶように、旅の記録を見返せます。",
      points:["IndexedDBに写真・訪問記録を保存","画像を詳細用1280px／一覧用360pxへ縮小","Service WorkerによるPWA・オフライン対応"]
    },
    base:{
      label:"写真を端末に保存するPWA", summary:"写真や訪問記録をブラウザ内に保存するアプリです。1500枚規模の写真を扱うことを想定し、画像の縮小、必要な画像から読み込む処理、IndexedDBでの保存を組み合わせています。",
      skills:["IndexedDB","PWA / Service Worker","Client-side image processing","Responsive UI"], evidence:"画像容量やスマホでの使いやすさに配慮し、記録の保存からオフライン利用まで、静的サイトで対応できる構成にしました。"
    }
  },
  {
    id:"LAB-002", title:"旅しおりメーカー", showLab:true, showBase:true, featuredLab:true, featuredBase:false,
    tags:["PWA","localStorage","Print / PDF"], baseCats:["WEB","PWA"], labCats:["TRAVEL","UTILITY"],
    live:"https://ko-max-123.github.io/shiori/", code:"https://github.com/ko-max-123/shiori",
    lab:{
      label:"旅行の準備をひとつのしおりに", question:"予定や持ち物、予算をまとめて、旅行中も見返せるようにしたい。",
      summary:"日ごとの予定や持ち物、予算、表紙画像を編集できる旅行しおりアプリです。完成イメージを確認しながら編集でき、複数の旅行を保存できます。JSONで書き出して、別の端末に移すこともできます。",
      points:["一覧・編集・プレビューを3カラムで表示","ドラッグ&ドロップで予定を並べ替え","印刷・PDF向けの専用レイアウト"]
    },
    base:{
      label:"ブラウザで使う旅行計画アプリ", summary:"localStorageで複数のしおりを保存し、JSONでデータを読み込み・書き出しできるアプリです。編集画面と印刷用のレイアウトを分け、PCとスマホの両方で使えるようにしています。",
      skills:["localStorage","Drag & Drop","Print CSS","JSON import/export"], evidence:"繰り返し使える保存形式を設計し、編集・閲覧・印刷までの流れを静的サイトに実装しました。"
    }
  },
  {
    id:"LAB-003", title:"Camp Layout Lab", showLab:true, showBase:true, featuredLab:true, featuredBase:false,
    tags:["Map","Weather API","GPS","Device orientation"], baseCats:["WEB","PROTOTYPE"], labCats:["CAMP","EXPERIMENT"],
    live:"https://ko-max-123.github.io/camp/04/", code:"https://github.com/ko-max-123/camp",
    lab:{
      label:"キャンプ場での設営を助ける", question:"現在地や向いている方向と風向きが分かれば、テントの配置を考えやすくなるのでは。",
      summary:"地図上でキャンプの設営を考えるツールです。現地での使い方に合わせて当初の地図・3D中心の構成を見直し、GPSや端末の方位、風向を確認できる機能を加えました。",
      points:["MapLibre系の地図UIで設営位置を確認","Open-Meteoの風向情報を表示","Geolocationと端末の方位情報を取得"]
    },
    base:{
      label:"地図・気象・位置情報の連携", summary:"地図や気象API、GPS、端末の方位情報を組み合わせた設営支援の試作品です。キャンプ場で配置を判断しやすくするため、表示する情報と機能を見直しました。",
      skills:["Geolocation","DeviceOrientation","Weather API","Map UI"], evidence:"現地で必要になる情報を整理し、試作を重ねながら仕様を調整しました。"
    }
  },
  {
    id:"LAB-004", title:"Camp Window Finder", showLab:true, showBase:true, featuredLab:false, featuredBase:false,
    tags:["Weather API","Comparison","Decision support"], baseCats:["WEB","PROTOTYPE"], labCats:["CAMP","UTILITY"],
    live:"https://ko-max-123.github.io/camp/01/", code:"https://github.com/ko-max-123/camp",
    lab:{
      label:"キャンプ候補日の天気を比べる", question:"候補日ごとの気温や雨、風を、同じ画面で比較したい。",
      summary:"複数の日程について、気温や降水、風の予報を比較できるツールです。キャンプに向いている日を選びやすいよう、候補日ごとの情報を同じ形式で表示しています。",
      points:["候補日を同じレイアウトで比較","設営や過ごしやすさに関わる気温・雨・風を表示","複数の条件をまとめて日程を検討"]
    },
    base:{
      label:"日程選びに使える気象情報の表示", summary:"気象APIのデータを日程ごとに整理し、複数の候補を比較できる画面にしました。利用者が日程を選ぶときに必要な項目を、まとめて確認できる構成です。",
      skills:["API integration","Data normalization","Comparison UI","Responsive design"], evidence:"気象データの数値を整理し、候補日を同じ条件で比べられる表示を実装しました。"
    }
  },
  {
    id:"LAB-005", title:"Campfire Topics", showLab:true, showBase:true, featuredLab:true, featuredBase:false,
    tags:["JavaScript","Video","Ambient UX"], baseCats:["WEB","PROTOTYPE"], labCats:["CAMP","PLAY"],
    live:"https://ko-max-123.github.io/campfire-web/", code:"https://github.com/ko-max-123/campfire-web",
    lab:{
      label:"焚き火を囲む会話のきっかけに", question:"会話が途切れたときに、自然に次の話題を見つけられるようにしたい。",
      summary:"焚き火の動画を背景に、一定間隔で話題カードが切り替わるWebアプリです。同じキャンプ場の人がルームに参加して使う形も、今後の案として検討しています。",
      points:["会話中に操作が増えない画面構成","10・15・30分間隔で話題を切り替え","映像・音・話題を組み合わせて表示"]
    },
    base:{
      label:"会話中にも使いやすい画面設計", summary:"動画の再生とタイマー制御で、会話のきっかけとなる話題を表示するアプリです。会話に集中できるよう、利用中の操作を少なくしています。",
      skills:["JavaScript timers","Media playback","Ambient interaction","UI simplification"], evidence:"話題の切り替えを自動化し、画面を頻繁に操作しなくても使える構成にしました。"
    }
  },
  {
    id:"LAB-006", title:"情報セキュリティ体験デモ集", showLab:true, showBase:true, featuredLab:false, featuredBase:false,
    tags:["Security","Education","Interactive demo"], baseCats:["WEB","PROTOTYPE"], labCats:["EDUCATION","EXPERIMENT"],
    live:"https://ko-max-123.github.io/demo/", code:"https://github.com/ko-max-123/demo",
    lab:{
      label:"操作しながらセキュリティを学ぶ", question:"見学者が自分で試しながら、情報セキュリティの仕組みを理解できるようにしたい。",
      summary:"情報セキュリティのテーマを、実際に操作できる小さなデモにまとめました。画面に目的や操作方法、注意点を記載し、見学者だけでも内容を理解しやすいように整えています。",
      points:["操作して結果を確認できるデモ","各デモに目的・操作方法・注意点を記載","見学者向けに説明文を整理"]
    },
    base:{
      label:"自分で試して学べるデモの設計", summary:"展示や見学での利用を想定し、情報セキュリティの概念を操作と説明で学べるデモにしました。目的や操作方法を画面内で確認できるようにしています。",
      skills:["Instructional UI","Front-end","Information architecture","Demo design"], evidence:"初めて見る人が使いやすいよう、説明の順序と操作への案内を見直しました。"
    }
  },
  {
    id:"LAB-007", title:"研究室 Webサイト", showLab:true, showBase:true, featuredLab:false, featuredBase:true,
    tags:["Jekyll","YAML","GitHub Pages"], baseCats:["WEB"], labCats:["WEB","MAINTAINABILITY"],
    live:"https://ko-max-123.github.io/test/", code:"https://github.com/ko-max-123/test",
    lab:{
      label:"研究室サイトを更新しやすくする", question:"研究業績やメンバーの追加を、もっと手軽にできるようにしたい。",
      summary:"研究室のサイトをJekyllに移行し、ヘッダーやフッター、カードを共通化しました。メンバーや研究業績はMarkdown・YAMLで管理し、内容を追加しやすい構成にしています。",
      points:["_includes / _layoutsで共通部分を管理","メンバー・業績・ニュースをデータ化","著者IDでメンバーと業績を関連付け"]
    },
    base:{
      label:"更新しやすい静的サイトの構成", summary:"JekyllのテンプレートとYAML・Markdownを使い、画面の構造と掲載データを分けました。更新担当者がHTMLを直接編集せずに、内容を追加できる構成です。",
      skills:["Jekyll","YAML data modeling","Template architecture","GitHub Pages"], evidence:"継続的な更新を考え、共通部分の管理方法と、メンバー・業績のデータ構造を整理しました。"
    }
  },
  {
    id:"R-001", title:"3D CAPTCHA 実験", showLab:true, showBase:true, featuredLab:true, featuredBase:true,
    tags:["3D","CAPTCHA","User study"], baseCats:["RESEARCH","WEB"], labCats:["RESEARCH","EXPERIMENT"],
    live:"https://ko-max-123.github.io/3d-cha-model/", code:"https://github.com/ko-max-123/3d-cha-model",
    lab:{
      label:"3D空間の認識を使った認証の研究", question:"3D空間を認識する力を使って、人が使いやすく、機械には解きにくい認証を作れるか。",
      summary:"スマートフォンで3D CAPTCHAを操作してもらい、正答率や所要時間、使いやすさの評価を集める実験ページです。査読の指摘を受け、統計検定や誤答傾向、占有率、平滑化による攻撃のリスクも再評価しました。",
      points:["ブラウザで3D CAPTCHAを操作・回答","実験結果とアンケートを収集","統計評価・誤答分析・攻撃耐性を再検討"]
    },
    base:{
      label:"研究の検証を支える実験ページ", summary:"参加者が3D CAPTCHAを操作し、回答やアンケートを記録できる実験環境を作りました。研究の検証に必要な計測と評価を、Web上で行える構成にしています。",
      skills:["3D Web UI","Experiment design","Statistical evaluation","Usability testing"], evidence:"査読の指摘をもとに分析項目を追加し、実験結果や攻撃耐性を再評価しました。"
    }
  },
  {
    id:"R-002", title:"Rot3D-CHA", showLab:true, showBase:true, featuredLab:false, featuredBase:false,
    tags:["Three.js","Point cloud","Authentication"], baseCats:["RESEARCH","WEB"], labCats:["RESEARCH","EXPERIMENT"],
    live:"https://ko-max-123.github.io/3dmodel-create/", code:"https://github.com/ko-max-123/3dmodel-create",
    lab:{
      label:"回転して読み取る3D文字認証", question:"点で表した3D文字を回転して読み取る操作を、認証に使えるか。",
      summary:"英大文字や数字を3D空間の点群で表し、利用者が読み取って回答する認証の試作品です。文字を表す点とノイズの配置、色や大きさの違い、背景文字などを試しています。",
      points:["Three.jsによる3D点群の表示","回転操作と文字の回答画面","読み取りやすさと攻撃耐性を検討"]
    },
    base:{
      label:"Three.jsを使った認証の試作", summary:"3D空間の点群文字を使う認証方式を、ブラウザで試せる形に実装しました。回転して文字を読み取り、回答するまでの操作を確認できます。",
      skills:["Three.js","3D interaction","Authentication UX","Rapid prototyping"], evidence:"配置や見せ方を変えながら試作し、認証のアイデアを操作・評価できる形にしています。"
    }
  },
  {
    id:"R-003", title:"Dual QR / 位相シフトOTP", showLab:true, showBase:true, featuredLab:false, featuredBase:false,
    tags:["QR","OTP","Image encoding"], baseCats:["RESEARCH","PROTOTYPE"], labCats:["RESEARCH","EXPERIMENT"],
    code:"https://github.com/ko-max-123/Dualqr",
    lab:{
      label:"QRコードに複数の情報を重ねる", question:"QRコードの見た目を保ちながら、色や位相、動画のフレームに情報を重ねられるか。",
      summary:"2つのURLを切り替える方法や、RGB多重化、位相シフト、ワンタイムパスワード（OTP）を持つ動画を検討しています。動画方式では、135フレームから675bitを抽出する構成を試作しました。",
      points:["複数URLを切り替える方法を検討","RGB多重化・位相シフトを比較","動画のフレームにOTPの情報を埋め込み"]
    },
    base:{
      label:"画像と動画を使った情報の多重化", summary:"QRコードに色や位相、動画のフレームを組み合わせ、複数の情報やOTPを持たせる方法を試作しました。",
      skills:["QR encoding","Image processing","Temporal encoding","Prototype evaluation"], evidence:"複数の符号化方法を比較し、それぞれの実装方法と実現可能性を検証しました。"
    }
  },
  {
    id:"LAB-008", title:"Arktools", showLab:true, showBase:true, featuredLab:false, featuredBase:false,
    tags:["Electron","Python","OpenCV","OCR"], baseCats:["TOOLS","PROTOTYPE"], labCats:["PLAY","TOOLS"],
    code:"https://github.com/ko-max-123/ark_tools",
    lab:{
      label:"ゲーム画面から募集タグを読み取る", question:"スクリーンショットから募集タグを読み取り、ゲーム内の選択を助けたい。",
      summary:"アークナイツの画面キャプチャから、テンプレートマッチングやOCRで募集タグを読み取るデスクトップツールです。Electronの画面とPythonの画像処理を組み合わせています。",
      points:["画面キャプチャを解析に使用","OpenCV・OCRで募集タグを認識","Electronの画面とPythonの処理を連携"]
    },
    base:{
      label:"画像解析を使うデスクトップツール", summary:"ElectronとPython/OpenCVを連携し、画面画像からタグの情報を読み取って結果を表示するツールを作りました。",
      skills:["Electron","Python","OpenCV","OCR"], evidence:"画面の取得、画像の解析、結果の表示までを、一つのツールで行えるようにしました。"
    }
  },

  /* Work / QA case studies. No customer-specific data or source code is published. */
  {
    id:"QA-001", title:"Android操作レコーダー / Appium", showLab:false, showBase:true, featuredBase:true,
    tags:["Appium","ADB","pytest","Android"], baseCats:["QA","AUTOMATION","TOOLS"],
    base:{
      label:"Androidの操作記録と再生", summary:"Windows PCとAndroid実機をUSBでつなぎ、タップやスクロール、スワイプ、戻る操作をADBで記録する仕組みを試作しました。画面画像やUIの構造、操作対象の候補、画面サイズに対する座標の比率をYAMLに保存し、操作の再生やpytestでの実行につなげています。",
      skills:["Appium","ADB","Python / pytest","UI hierarchy analysis"], evidence:"WebView内の要素を取得できない場合に備え、要素を特定する情報と座標の両方を記録する設計にしました。"
    }
  },
  {
    id:"QA-002", title:"ExcelテストケースのPlaywright変換", showLab:false, showBase:true, featuredBase:true,
    tags:["Playwright","Excel","Copilot","TypeScript"], baseCats:["QA","AUTOMATION","AI"],
    base:{
      label:"既存のテストケースを使った自動化", summary:"Excelやテスト管理ツールCATのテストケースを、CopilotでPlaywrightのシナリオに変換する方法を検証しています。基本処理や環境設定、認証情報を分け、ログイン状態をstorageStateで再利用する構成を作りました。",
      skills:["Playwright","TypeScript","Excel parsing","M365 Copilot"], evidence:"既存のテストケースを段階的に自動化できるよう、変換ルールやサンプル、環境設定、認証の準備処理を分けて整理しました。"
    }
  },
  {
    id:"QA-003", title:"テスト実施状況の見える化", showLab:false, showBase:true, featuredBase:true,
    tags:["QA operation","Planning","Excel"], baseCats:["QA","PROCESS"],
    base:{
      label:"テストの準備状況と課題の共有", summary:"仕様の確認やデータの準備、作業予定の共有を進めやすくするため、システム理解マップ、実施可能なテストの一覧、週次予定、作業が止まる理由の記録を整えました。",
      skills:["Test management","Task visualization","Blocker analysis","Documentation"], evidence:"実施できるテストと、準備や確認が必要な項目を分け、チームで状況を共有しやすくしました。"
    }
  },
  {
    id:"QA-004", title:"テスト証跡フォルダの自動生成", showLab:false, showBase:true, featuredBase:true,
    tags:["Excel","Python","Evidence management"], baseCats:["QA","TOOLS","PROCESS"],
    base:{
      label:"仕様書から証跡の保存先を作る", summary:"Excelのテスト仕様書を読み込み、仕様書名・シナリオID・端末ごとに証跡フォルダを作るツールを設計しました。期待値が空欄で続くケースは「1〜8」のようにまとめ、複数のExcelファイルを一括で読み込める構成にしています。",
      skills:["Excel parsing","File system automation","Python","HTML UI"], evidence:"仕様書の構造からフォルダ名と階層を決めることで、保存先を手作業で作る負担を減らせるようにしました。"
    }
  },
  {
    id:"QA-005", title:"テスト証跡画像の仕分け", showLab:false, showBase:true, featuredBase:false,
    tags:["Image classification","Batch","Evidence"], baseCats:["QA","TOOLS"],
    base:{
      label:"数千枚の証跡画像を整理する試作", summary:"iOSのスクリーンショットとAndroid端末を撮影した写真を、テストの区切りに入れた目印の「しおり画像」で仕分ける仕組みを試作しました。画面の一部を登録し、画像の特徴から目印を判定する処理も追加しました。",
      skills:["Image matching","Batch processing","File organization","Python"], evidence:"文字を読み取りにくい写真も扱えるよう、時間情報や画像の特徴、目印の位置を組み合わせて仕分ける設計にしました。"
    }
  },
  {
    id:"QA-006", title:"画面遷移図のWeb化", showLab:false, showBase:true, featuredBase:false,
    tags:["Excel","Search UI","Maintainability"], baseCats:["QA","WEB","PROCESS"],
    base:{
      label:"画面を探しやすくするWeb表示の試作", summary:"画面数が多く、更新や検索に手間のかかるExcelの画面遷移図を、Webで閲覧する試作品を作りました。画面の検索や関連画面の表示を備え、Excelと画像から生成する構成を検討しました。",
      skills:["Information architecture","Search UI","Excel data modeling","Static web"], evidence:"Excelで全体を管理できる構成を生かしながら、目的の画面を探しやすくし、3か月ごとの更新作業を減らす方法を考えました。"
    }
  },
  {
    id:"QA-007", title:"操作マニュアル編集・HTML化ツール", showLab:false, showBase:true, featuredBase:false,
    tags:["Markdown","HTML","Authoring tool"], baseCats:["TOOLS","PROCESS","WEB"],
    base:{
      label:"マニュアルの作成・更新を支援", summary:"Excelの操作マニュアルをMarkdown・HTMLに変換し、画面画像に説明番号を配置できる編集ツールを設計しました。画像をクリックして番号の位置を指定でき、新規作成や更新、Markdown・Excelへの出力を一連の流れにまとめています。",
      skills:["Markdown","HTML/CSS/JS","Coordinate mapping","Document generation"], evidence:"説明番号の位置を画像上で指定できるようにし、マニュアルを更新しやすい操作方法にしました。"
    }
  },
  {
    id:"QA-008", title:"低速ネットワーク試験環境", showLab:false, showBase:true, featuredBase:false,
    tags:["Windows","Python","Network testing"], baseCats:["QA","TOOLS"],
    base:{
      label:"通信が遅い条件でのテスト環境", summary:"専用の低速Wi-FiやiOSの開発者モードを使えない環境で、通信が遅い状態を再現する方法を検討しました。Windows PCにスマホを接続し、PC側で速度を制限する構成です。PythonとWindowsの標準機能を使い、事前の環境チェックも用意しました。",
      skills:["Windows networking","Python","Test environment design","Constraint handling"], evidence:"ソフトの追加に制約がある業務PCを想定し、利用できる標準機能で試験環境を組む方法を整理しました。"
    }
  },
  {
    id:"QA-009", title:"AI生成テストケースのレビュー設計", showLab:false, showBase:true, featuredBase:false,
    tags:["M365 Copilot","Test design","Quality metrics"], baseCats:["QA","AI","PROCESS"],
    base:{
      label:"AIが作ったテストケースの評価", summary:"生成AIが作ったテストケースを、人が確認するための基準を整理しました。網羅性や正確性、実行可能性、重複、欠陥の見つけやすさ、レビューの効率を分け、仕様書から作った正解表や観点表と照合する方法を検討しました。",
      skills:["Test design","M365 Copilot","Review criteria","Quality measurement"], evidence:"テストケースの良し悪しを判断する基準を明確にし、AIの出力を人が検証できる流れを設計しました。"
    }
  }
];
