import { NotionAPI } from 'notion-client'

// NotionのAPIはCloudflare配下にあり、User-Agentを持たないリクエストを403で弾く。
// Nodeのfetchは既定でUser-Agentを送らないため、明示的に付与する。
export const notion = new NotionAPI({
  apiBaseUrl: process.env.NOTION_API_BASE_URL,
  ofetchOptions: {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'
    }
  }
})
