import type {
  CategoryContentT,
  CategoryContentsT,
  CategoryRelationT
} from '@/types'
import type { CategoryBaseI } from '@/interfaces'
import { contentFind } from '@/utilities'

export function categoryFind(
  categories: CategoryContentsT,
  relation: CategoryRelationT,
  key: string = 'slug'
): CategoryContentT | undefined {
  return contentFind<CategoryBaseI, CategoryRelationT>(
    categories,
    relation,
    key
  )
}
