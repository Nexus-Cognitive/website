import { AuthorI, CategoryI, ImageI } from '@/interfaces'

export interface ArticleItemI {
  id: number
  authors: AuthorI[]
  categories: CategoryI[]
  description: string
  feature: ImageI
  subtitle: string
  title: string
}
