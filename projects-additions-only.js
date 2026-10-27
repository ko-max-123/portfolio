// GitHub再確認（2026-10-27）で追加候補としたプロジェクト。
// 現行 projects-data.js の LAB-006 より前に、この6オブジェクトを挿入してください。

{
    id:"LAB-009", title:"キャンプギア棚", showLab:true, showBase:true, featuredLab:true, featuredBase:true,
    tags:["Cloudflare Workers","Supabase","Auth","Image optimization"], baseCats:["WEB","CLOUD","TOOLS"], labCats:["CAMP","UTILITY"],
    live:"https://camp-gear-manager.mini-mountain1990.workers.dev/", code:"https://github.com/ko-max-123/camp_gear_manager",
    lab:{
      label:"キャンプ道具を、一覧ではなく『収納から選ぶ』", question:"持っているキャンプギアを表形式で管理するのではなく、実際の収納棚を眺めながら選べないか。",
      summary:"木の収納棚から収納を選ぶと、道具が布の上に広がるキャンプギア管理サイト。道具一覧、今回の荷物、状態確認、お手入れまで同じ世界観でつなぎ、実物の道具を扱う感覚に近づけています。",
      points:["収納棚→布の上へ道具を広げる視覚的UI","ドラッグ＆ドロップで今回の荷物を選択","清掃・乾燥・点検・収納のお手入れ記録"]
    },
    base:{
      label:"認証・DB・非公開Storageまで含むキャンプギア管理Webアプリ", summary:"JavaScriptをES modulesとクラスへ再構成し、Cloudflare Workersを入口にSupabase Auth、PostgreSQL、非公開Storageを利用。同じアカウントで端末をまたいで道具・写真・メンテナンス記録を扱える構成です。",
      skills:["Cloudflare Workers","Supabase Auth / PostgreSQL / Storage","ES modules","Client-side image processing"], evidence:"PC用棚画像はWebP化で約91%軽量化。登録画像の縮小・白背景除去、遅延読込、ローカル保存からクラウドへの移行まで含めて設計しています。"
    }
  },
  {
    id:"LAB-010", title:"縁図 — 神社の知識関係マップ", showLab:true, showBase:true, featuredLab:false, featuredBase:true,
    tags:["YAML","Knowledge graph","GitHub Pages","Interactive UI"], baseCats:["WEB","DATA","PROTOTYPE"], labCats:["KNOWLEDGE","EXPERIMENT"],
    live:"https://ko-max-123.github.io/shrine-knowledge-map/", code:"https://github.com/ko-max-123/shrine-knowledge-map",
    lab:{
      label:"神社の知識を、読むのではなく『たどる』", question:"神社・建築様式・社格・神々の関係を、記事の一覧ではなく関連そのものを眺めながら学べないか。",
      summary:"神社、神々、神宝、建築様式、式内社・社格などを円で配置し、関連項目をたどる知識マップ。クリックで詳細、ダブルクリックで中心を切り替え、周囲の知識がゆっくり公転します。",
      points:["68項目・106関係をYAMLで管理","中心ノードの切替で1段目・2段目の関連を再描画","各ノードに参考資料リンクを紐付け"]
    },
    base:{
      label:"YAML駆動の知識グラフ型静的サイト", summary:"HTMLへ知識データを埋め込まず、manifestと複数YAMLをfetchして表示するGitHub Pages向け構成。ノード、関係、出典を分離し、HTML/JavaScriptを編集せずデータ追加できるようにしています。",
      skills:["YAML data modeling","Graph visualization","JavaScript","GitHub Pages"], evidence:"重複ID、不明な参照先、重複関係、ファイル欠落、不正YAMLを読込時に検査し、データ追加時の破損を検出できるようにしています。"
    }
  },
  {
    id:"LAB-011", title:"Face Habit Viewer", showLab:true, showBase:true, featuredLab:false, featuredBase:true,
    tags:["React","TypeScript","MediaPipe","IndexedDB"], baseCats:["WEB","AI","TOOLS"], labCats:["EXPERIMENT","UTILITY"],
    live:"https://kaokensyo.pages.dev/", code:"https://github.com/ko-max-123/kaokensyo",
    lab:{
      label:"自分の表情や顔の向きの『クセ』を見る", question:"面接や会話練習で、自分では気づきにくい顔の向きやカメラ方向への向きやすさを振り返れないか。",
      summary:"カメラ映像をブラウザ内で解析し、表情・顔向き・視線の近似指標を可視化する補助ツール。心理状態や採用適性を判定するのではなく、自分の傾向を振り返る用途に限定しています。",
      points:["MediaPipe Face Landmarkerでブラウザ内解析","動画を保存せず数値ログだけをIndexedDBへ保存","CSV/JSONエクスポートに対応"]
    },
    base:{
      label:"プライバシーを考慮したブラウザ内顔解析Webアプリ", summary:"React 18 + TypeScript + Viteで構築し、MediaPipeによる顔解析、Chart.jsによる可視化、Zustand、IndexedDBを組み合わせています。映像をサーバへ送らず端末内で処理します。",
      skills:["React / TypeScript","MediaPipe","Chart.js","IndexedDB / Cloudflare Workers"], evidence:"『視線追跡』や診断と誤認されないよう、機能上の限界・用途・保存データを明示し、技術実装と説明責任の両方を設計しています。"
    }
  },
  {
    id:"WEB-001", title:"FFTPRS ワークショップ公式サイト", showLab:false, showBase:true, featuredBase:false,
    tags:["Jekyll","Tailwind CSS","YAML","Docker"], baseCats:["WEB","PROCESS"],
    live:"https://fftprs.github.io/WS/", code:"https://github.com/ko-max-123/site",
    base:{
      label:"研究ワークショップの継続更新を支える静的サイト", summary:"有限体理論と擬似乱数系列生成への応用ワークショップの開催情報、プログラム、申込情報を掲載するJekyllサイト。開催回ごとの情報をYAMLへ分離し、共通レイアウトと部品で更新できる構成にしています。",
      skills:["Jekyll / Liquid","Tailwind CSS","YAML","Docker / GitHub Pages"], evidence:"ワークショップデータ、共通ヘッダー・フッター、開催回レイアウトを分離し、新しい開催回を既存構造へ追加しやすい運用にしています。"
    }
  },
  {
    id:"LAB-012", title:"発表練習サークル 企画・運営ページ", showLab:true, showBase:true, featuredLab:false, featuredBase:false,
    tags:["Planning","Information architecture","Responsive UI"], baseCats:["WEB","PROCESS"], labCats:["COMMUNITY","DOCUMENT"],
    live:"https://ko-max-123.github.io/club/", code:"https://github.com/ko-max-123/club",
    lab:{
      label:"『人前で話す練習』を続けられる活動にする", question:"発表が得意な人だけではなく、不安がある人も参加しやすい練習の場をどう設計するか。",
      summary:"就労移行支援施設での発表練習サークルについて、背景、目的、活動内容、参加方法、運営、募集、引継ぎ、配慮事項まで整理した公開説明ページ。複数段階の発表ガイドラインも用意しています。",
      points:["活動の目的から引継ぎまで運用全体を文章化","基本・話しやすさ重視・発展版のガイドライン","PC/スマホで読みやすい目次ナビゲーション"]
    },
    base:{
      label:"企画内容を運用可能な情報構造へ整理", summary:"アイデアだけで終わらせず、参加条件、実施スケジュール、運営体制、継続運営、配慮事項をWeb上で一つの説明資料に整理。第三者が読んでも活動像を把握できる構成にしました。",
      skills:["Information architecture","Responsive HTML/CSS","Documentation","Operational planning"], evidence:"企画・説明・運営を分離せず、実施後に別の人へ引き継げるところまでを情報設計の対象にしています。"
    }
  },
  {
    id:"GAME-001", title:"YTC Game / 2.5D装備収集アクション", showLab:true, showBase:true, featuredLab:false, featuredBase:false,
    tags:["Unity","Game design","Prototype","Automated verification"], baseCats:["PROTOTYPE","QA","GAME"], labCats:["GAME","WORLD BUILDING"],
    code:"https://github.com/ko-max-123/02_game",
    lab:{
      label:"世界観・装備・戦闘を、設定資料から動くプロトタイプへ", question:"小規模PMC『ytc』を軸に、射撃と近接、装備収集、環境攻略を組み合わせた2.5Dアクションをどこまで具体化できるか。",
      summary:"主人公・山田と新型攻殻装甲K1を中心にした2.5D装備収集アクション。全20章、15人のメンバー、敵・武器・装備・ドロップ・フィールド・共通ID規則までGame Bibleとして整理し、Windows戦闘プロトタイプへ展開しています。",
      points:["全20章とキャラクター・敵・装備を分冊設計","UnityでWindows向け戦闘デモをビルド","A/D移動、奥行き、JET、射撃、敵撃破、MISSION CLEARを実装"]
    },
    base:{
      label:"仕様・実装・検証を分離したUnityプロトタイプ開発", summary:"Game Bible、プロデューサー判断、技術成果物、受入記録を分離し、Unityプロトタイプを段階的に検証。WindowsスタンドアロンP0では静的契約検証、EditMode、PlayMode、Player build、配布物完全性、EXEスモークまで確認しています。",
      skills:["Unity","Game specification","EditMode / PlayMode tests","Acceptance criteria"], evidence:"P0受入時点で静的契約検証72/72、EditMode 19/19、PlayMode戦闘ループ1/1、配布物完全性8/8をPASSとし、試作品でも受入基準と証跡を持つ開発フローにしています。"
    }
  },
