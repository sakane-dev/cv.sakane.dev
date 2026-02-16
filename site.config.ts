import { siteConfig } from './lib/site-config'

export default siteConfig({
  // 【最重要】NotionのページID (ハイフンなし32桁)
  rootNotionPageId: '3099ee114e2c80c884d8e6f3a019f0fb',

  // サイトの基本情報
  name: 'Yasuyuki Sakane CV',
  domain: 'cv.sakane.dev',
  author: 'Yasuyuki Sakane',

  // SEO用説明文
  description: 'Curriculum Vitae of Yasuyuki Sakane - Architecting Structural Intelligence.',

  // --- 以下の設定はデフォルトのままでOKですが、必要に応じて変更してください ---

  // Twitterアカウント (任意)
  // twitter: 'sakane_dev', // アカウントがない場合は行ごと削除またはコメントアウト

  // GitHubアカウント (任意)
  github: 'sakane-dev',

  // LinkedInアカウント (任意)
  linkedin: 'yasuyukis',

  // ページのプレビュー画像 (Notionのカバー画像が使われるのでそのままでOK)
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // 画像のCDN活用 (true推奨)
  isPreviewImageSupportEnabled: true,

  // 開発モードでのRedis使用 (false推奨)
  isRedisEnabled: false,

  // マップ設定 (falseでOK)
  mapIsEnabled: false,

  // コレクション画像の表示 (nullでOK)
  pageUrlOverrides: null,
})
