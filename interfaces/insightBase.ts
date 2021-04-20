import type {
  AuthorContentRelationsT,
  CategoryRelationsT,
  ImageRelationT
} from '@/types'
import type { ResourceBaseI } from '@/interfaces'

export interface InsightBaseI extends ResourceBaseI {
  authors: AuthorContentRelationsT
  categories: CategoryRelationsT
  cover: ImageRelationT
  description: string
  feature: boolean
  subtitle: string
}
