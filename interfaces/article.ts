import type {
  AuthorRelationsT,
  CategoryRelationsT,
  ImageRelationT
} from '@/types'
import type { ResourceBaseI } from '@/interfaces'

export interface ArticleBaseI extends ResourceBaseI {
  authors: AuthorRelationsT
  categories: CategoryRelationsT
  cover: ImageRelationT
  description: string
  publish: string
}

export interface ArticlePageI extends ArticleBaseI {
  body: string
}
