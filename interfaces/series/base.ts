import type { ArticlePageI, ResourceBaseI } from '@/interfaces'

export interface SeriesBaseI extends ResourceBaseI {
  articles: ArticlePageI[]
  description: string
  subtitle: string
}
