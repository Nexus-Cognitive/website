import { ContentValueI } from '@/interfaces'

export interface ContentURLI extends ContentValueI<string> {
  type: 'url_slug'
  name: 'URL'
}
