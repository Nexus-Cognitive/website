import * as Interfaces from '@/interfaces'

export interface ArticleBase extends Interfaces.ResourceBase {
  authors: Interfaces.AuthorBase[]
  categories: Interfaces.CategoryBase[]
  description: string
  feature: Interfaces.ImageBase
  subtitle: string
}
