import { siteConfig } from './lib/site-config'

export default siteConfig({
  // 必須設定（IDは確認済み）
  rootNotionPageId: '3099ee114e2c80c884d8e6f3a019f0fb',

  // サイト情報
  name: 'Yasuyuki Sakane CV',
  domain: 'cv.sakane.dev',
  author: 'Yasuyuki Sakane',
  description: 'Curriculum Vitae of Yasuyuki Sakane',

  // ソーシャル設定（必要に応じてIDを入れてください）
  twitter: 'sakane_dev',
  github: 'sakane-dev',
  linkedin: 'yasuyukisakane',

  // プレビュー画像機能のみ有効化
  isPreviewImageSupportEnabled: true,
})
