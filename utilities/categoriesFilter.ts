import type {
  CategoryContentsT,
  CategoryRelationT,
  CategoryRelationsT
} from '@/types'
import type { CategoryBaseI } from '@/interfaces'
import { contentsFilter } from '@/utilities'

export function categoriesFilter(
  categoryContents: CategoryContentsT,
  categoryRelations: CategoryRelationsT,
  key: string = 'slug'
): CategoryContentsT | undefined {
  return contentsFilter<CategoryBaseI, CategoryRelationT>(
    categoryContents,
    categoryRelations,
    key
  )
}
