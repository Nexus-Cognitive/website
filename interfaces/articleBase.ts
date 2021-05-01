import type {
  AuthorContentRelationsT,
  CategoryRelationsT,
  ImageRelationT
} from '@/types'
import type { ResourceBaseI } from '@/interfaces'

export interface ArticleBaseI extends ResourceBaseI {
  authors: AuthorContentRelationsT
  categories: CategoryRelationsT
  cover: ImageRelationT
  description: string
  publish: string
}
