import * as Interfaces from '@/interfaces'

export interface Base {
  id: number
  articles: Interfaces.Article.Page[]
  description: string
  subtitle: string
  title: string
}
