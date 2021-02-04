import { ArticlePageI } from '@/interfaces'

export interface SeriesI {
  id: number
  articles: ArticlePageI[]
  description: string
  subtitle: string
  title: string
}
