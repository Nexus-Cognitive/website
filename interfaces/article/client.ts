import type { ArticleBaseI, ArticlePageI } from '@/interfaces'

export interface ArticleClientI {
  index: ArticleBaseI[]
  page: ArticlePageI
}
