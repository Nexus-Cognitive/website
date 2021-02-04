import { ArticleItemI, ImageI } from '@/interfaces'

export interface ArticlePageI extends ArticleItemI {
  body: string
  images: ImageI[]
  introduction: string
}
