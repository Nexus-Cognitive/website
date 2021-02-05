import type { ArticleClientI } from '@/interfaces'
import { ArticleBaseM, ArticlePageM } from '@/models'

export const ArticleClientM: ArticleClientI = {
  index: [ArticleBaseM],
  page: ArticlePageM
}
