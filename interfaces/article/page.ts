import * as Interfaces from '@/interfaces'

export interface ArticlePage extends Interfaces.ArticleBase {
  body: string
  images: Interfaces.ImageBase[]
  introduction: string
}
