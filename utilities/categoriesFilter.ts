import type {
  CategoryContentsT,
  CategoryRelationT,
  CategoryRelationsT
} from '@/types'
import type { CategoryBaseI } from '@/interfaces'
import { contentsFilter } from '@/utilities'

export function categoriesFilter(
  categories: CategoryContentsT,
  relations: CategoryRelationsT,
  key: string = 'slug'
): CategoryContentsT | undefined {
  return contentsFilter<CategoryBaseI, CategoryRelationT>(
    categories,
    relations,
    key
  )
}
