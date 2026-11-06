# IWAMI ARTS PROJECT｜GitHub Pages 運用ガイド（2026-11-06版）

## 今回の更新内容
1. サイト内のAI生成の舞台・風景画像を廃止。旧公式サイト掲載の活動写真２種類を使い、足りない画像は「写真準備中」のSVG表示にしました。
2. 追加した `news-editor.html` で、日付・タイトル・本文を入力すると `news-data.js` をダウンロードできます。既存の記事も残します。
3. XとInstagramの公式リンクを維持。Xは「タイムラインを表示」ボタンを押したときに外部埋め込みを読み込みます（Xの仕様やブラウザ設定で非表示のことがあります）。Instagramはプロフィールへのリンクです。自動同期ではありません。
4. 独自ドメインに切り替えるためのDNS設定を下記に記載。まだ購入していない `iwamiarts.jp` のCNAMEを有効化していません。

## 更新版ZIPの導入
- ZIPを解凍し、MacのGitHub Desktopでクローンした `iwami-arts-project` フォルダをFinderで開きます。
- 更新版のファイルとフォルダを **内容だけ** コピーします。`index.html` がフォルダ直下に来ることを確認します。
- 既存ファイルの置き換えを確認します。旧版に含まれていた AI画像ファイル（`images/concept-*.webp`、`images/hero-stage.webp`）は新版では使わないため、**公開リポジトリからも削除したい場合は** Macの `images` フォルダ内で該当ファイルを削除してください。
- GitHub Desktopで `Commit to main`、続いて `Push origin` を押します。
- テスト: https://iwamiarts.github.io/iwami-arts-project/
- 注意: すでにGitHub上で変更があったときは、GitHub Desktopで先に Fetch/Pull して最新にしてください。

## お知らせの更新（簡単・無料）
- Macで https://iwamiarts.github.io/iwami-arts-project/news-editor.html を開きます（更新版をpushしたあと有効）。
- 日付、カテゴリ、タイトル、本文、必要なら関連リンクを入力。
- 「記事データをダウンロード」をクリック。
- ダウンロードした `news-data.js` を、GitHub Desktopのクローン済みフォルダ直下に **上書き** します。
- GitHub Desktopで `Commit to main` → `Push origin`。トップの新着４件とニュース一覧が自動更新されます。
- 旧データを安全に残すため、編集前にGitHub Desktopで最新を Fetch/Pull してください。
- GitHub Pagesにはサーバー側の投稿機能はないため、ダウンロードだけで公開はされません。

## 写真を自前の公演写真へ差し替える
- 現時点の活動写真は古い公式サイトのCDNにあるため、外部サイトの画像読み込みが止まる可能性があります。撮影者や出演者の肖像使用許諾を確認し、ローカル画像の保存をおすすめします。
- ファイルを用意したら `images/wakakusa-stage.jpg`、`images/workshop.jpg` のように置きます。
- `index.html` / `about.html` / `works.html` の `src="https://cdn.amebaowndme.com/..."` を同じファイル名の `src="images/wakakusa-stage.jpg"` に置換します。
- 「写真準備中」SVG（images/placeholder-*.svg）は、正式な活動写真が届くまでの仮の案内画像です。AI生成写真は同梱していません。
- 演劇祭や国際交流等の別プロジェクトを、若草物語の写真に誤って置き換えないでください。

## SNSリンク（確認対象）
- X: https://x.com/ARTS_IWAMI
- Instagram: https://www.instagram.com/iwami_arts/
- Xのタイムライン埋め込みは利用者が押したときだけ外部スクリプトを読み込みます。
- Instagramは直接プロフィールを開きます。サイト内で最新投稿を同期するには別の認証・仕組みが必要です。
- 本人が正しい公式アカウントか、公開後に念のため確認してください。

## 独自ドメイン iwamiarts.jp を取得したら
注意： `iwamiarts.jp` の購入・所有権・利用可能性は未確認です。購入前にGitHubのCustom domainへ入力しないでください。
1. 取得したドメインの管理画面のDNS設定で、ドメイン直下（@）の A レコードとして以下を登録：
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
2. www も使う場合は `www` の CNAME を `iwamiarts.github.io` に設定（末尾のピリオドは管理会社の仕様に従う）。
3. GitHubリポジトリの Settings > Pages > Custom domain に `iwamiarts.jp` を入力し Save。
   ※ ブランチからデプロイしている場合、GitHubがルートに CNAME ファイルを作ります。ローカルのGitHub Desktopで Fetch/Pull を行ってから次の編集をしてください。
4. DNS反映と証明書発行を待ち、Enforce HTTPS にチェック。設定の反映に時間がかかる場合があります。
5. 可能ならGitHubのドメイン所有権検証（TXT）も設定。ワイルドカードDNSは設定しない。
6. ドメイン購入前は `CNAME.example` をそのまま残します。`CNAME` という名前のファイルを作らないでください。
GitHub公式: https://docs.github.com/ja/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## 現時点で未実施
- ドメインの購入・DNS変更
- 公式の舞台本番写真の受領と差し替え、写真権利確認
- GitHubへの最新版のアップロード（このZIPは手元で作成した更新版です）

補足：サイトのファビコンも、ご提供いただいた正式ロゴの一部を使用しています。
