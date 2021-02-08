import { ArticleClientM } from '@/models'
import { ArticleClientS } from '@/services'
import { storeMap } from '@/store'

export const Article = storeMap(ArticleClientM, ArticleClientS)
