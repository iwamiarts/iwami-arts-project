IWAMI ARTS PROJECT｜GitHub Pages 公式サイト公開ガイド
=============================================

このZIPはWordPressではなく、GitHub Pagesで公開するHTMLサイトです。
【含まれる内容】
・トップページ (index.html)
・団体紹介 (about.html)
・活動の記録 (works.html)
・お知らせ一覧・記事本文 (news.html)
・お知らせデータ (news-data.js) ← 新着情報はここだけを編集
・正式ロゴ、画像、CSS、JavaScript
・X @ARTS_IWAMI、Instagram @iwami_arts へのリンク

◆ STEP 1 GitHubアカウントを作る（すでにある場合は不要）
https://github.com/signup
アカウント名は、公開URLにも使われます。

◆ STEP 2 リポジトリ（サイト保管庫）を作る
https://github.com/new
Repository name : iwami-arts-project
Visibility : Public （GitHub FreeでPagesを使う場合）
Create repository を選びます。

◆ STEP 3 サイトのファイルをアップロード
このZIPをPCで解凍してください。
GitHubのリポジトリで Add file → Upload files をクリック。
解凍したフォルダの「中身」をすべてアップロードします。
index.html、about.html、news.html、news-data.js、images/ などが
リポジトリの一番上に来るようにしてください。
※ ZIPファイルそのものをアップロードしてもサイトは公開できません。
※ GitHubのWeb画面で隠しファイル .nojekyll が扱いにくければ、
   そのファイルは省略しても今回のサイトは動作します。
Commit changes でアップロードを確定します。

◆ STEP 4 公開を設定
Settings → Pages → Build and deployment
Source : Deploy from a branch
Branch : main / (root)
Save を選びます。
しばらくするとサイトURLが表示されます。
公開URLは通常、
https://＜GitHubのユーザー名＞.github.io/iwami-arts-project/
です。

◆ STEP 5 新しいお知らせを追加（重要）
1. GitHub上で「news-data.js」を開く。
2. 右上の鉛筆（Edit this file）を押す。
3. window.IAP_NEWS = [ のすぐ下に、次の例のような記事を追加。

  {
    id: "workshop-2026-12",
    date: "2026-12-05",
    category: "ワークショップ",
    title: "新しいワークショップのご案内",
    body: "内容をご紹介します。\n参加をお待ちしています。",
    link: "",
    linkText: ""
  },

4. 「Commit changes」で保存。
5. 公開サイトのお知らせ一覧と、トップの最新4件が自動で切り替わります。
※ id は英数字とハイフンで記事ごとに重複しない文字列にしてください。
※ date は YYYY-MM-DD 形式で入力してください。
※ タイトルや本文の引用符 " は、必要なら「」に置き換えてください。
※ body の文章内で \n と書くと、表示時に段落が分かれます。
※ 新しい記事は date を基準に新しい順に並びます。

◆ STEP 6 写真を追加・更新
images/ フォルダへ写真をアップロードし、該当HTMLの img src を変更。
公式写真への差し替え前に、画像の権利やクレジットを確認してください。
コンセプト画像（AI制作）には実際の公演写真でないことを明記しています。

◆ STEP 7 独自ドメインに切り替える（取得後、任意）
このサイトは相対パスのため、GitHub標準URL／独自ドメインのどちらでも使用できます。
独自ドメインを取得するまでは、そのままGitHub Pagesの無料URLで公開してください。
取得後は Settings → Pages → Custom domain に登録し、DNSを設定します。
詳しい手順・DNSレコードの値は「CUSTOM-DOMAIN-GUIDE.txt」をご覧ください。
「CNAME.example」は将来の設定用サンプルで、現時点では使用しません。
リポジトリのPages設定から登録すれば、CNAMEはGitHubが自動作成します。

◆ 注意・制限
- GitHub Pagesの基本的な利用は無料ですが、ドメインの取得費は別途です。
- WordPressなどPHPが必要なCMSは動きません。
- GitHubのPublicリポジトリはすべてのファイルが公開されます。
- お問い合わせはメールリンクで、フォームの送信サーバーはありません。
- 投稿の自動同期はありません（Xはボタンから埋め込み表示、Instagramは公式リンク）。
- Googleなどの検索エンジンへの掲載は保証されません。
- news-data.js はJavaScriptを有効にしたブラウザで表示されます。
- 「お知らせ」の編集はGitHubログインが必要です。
- 外部サイトの画像を参照している部分は、その配信元次第で表示されなくなることがあります。
- デザイン・内容・画像権利・連絡先を確認してから公開してください。

公式の公開方法：
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
