import type { ContentCodenameI, ContentTypeI } from '@/interfaces'

export interface SystemBaseI extends ContentCodenameI, ContentTypeI {
  collection: string
  id: string
  language: string
  last_modified: string
  sitemap_locations: string[]
}
