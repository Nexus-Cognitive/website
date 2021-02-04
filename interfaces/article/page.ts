import * as Interfaces from '@/interfaces'

export interface Page extends Interfaces.Article.Base {
  body: string
  images: Interfaces.Image.Base[]
  introduction: string
}
