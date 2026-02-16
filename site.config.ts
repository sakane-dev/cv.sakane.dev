import { siteConfig } from './lib/site-config'

export default siteConfig({
  // 必須設定
  rootNotionPageId: '3099ee114e2c80c884d8e6f3a019f0fb',

  // サイト情報
  name: 'Yasuyuki Sakane CV',
  domain: 'cv.sakane.dev',
  author: 'Yasuyuki Sakane',
  description: 'Curriculum Vitae of Yasuyuki Sakane',

  // ソーシャル（不要ならコメントアウトのままでOK）
  // twitter: 'sakane_dev',
  // github: 'sakane-dev',
  // linkedin: 'yasuyukisakane',

  // 画像プレビュー機能（これは残しても安全です）
  isPreviewImageSupportEnabled: true,

  // 以下の古い設定項目はすべて削除しました
  // mapIsEnabled, isRedisEnabled, pageUrlOverrides など
})
