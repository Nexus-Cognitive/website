import type { ClientServiceT } from '@/types'
import { ArticleClientM } from '@/models'
import { clientServiceMap } from '@/services'

export const ArticleClientS: ClientServiceT = clientServiceMap(
  ArticleClientM,
  'article'
)
