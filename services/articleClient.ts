import type { ClientServiceT } from '@/types'
import { ArticleClientM } from '@/models'
import { serviceClientMap } from '@/utilities'

export const ArticleClientS: ClientServiceT = serviceClientMap(
  ArticleClientM,
  'article'
)
