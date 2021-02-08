import type { ArticleBaseI, ImageBaseI } from '@/interfaces'

export interface ArticlePageI extends ArticleBaseI {
  body: string
  images: ImageBaseI[]
  introduction: string
}
