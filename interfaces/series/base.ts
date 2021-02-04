import * as Interfaces from '@/interfaces'

export interface SeriesBase extends Interfaces.ResourceBase {
  articles: Interfaces.ArticlePage[]
  description: string
  subtitle: string
}
