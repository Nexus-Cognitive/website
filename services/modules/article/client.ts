import type { ClientServiceT } from '@/types'
import { ArticleClientM } from '@/models'
import { clientMap } from '@/services'

export const ArticleClientS: ClientServiceT = clientMap(
  'article',
  ArticleClientM
)
