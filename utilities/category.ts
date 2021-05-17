import type {
  CategoryContentT,
  CategoryContentsT,
  CategoryRelationT,
  CategoryRelationsT
} from '@/types'
import type { CategoryBaseI } from '@/interfaces'
import { contentFind, contentsFilter } from '@/utilities'

export function categoriesFilter(
  categories: CategoryContentsT,
  relations: CategoryRelationsT,
  key: keyof CategoryContentT = 'slug'
): CategoryContentsT | undefined {
  return contentsFilter<CategoryBaseI, CategoryRelationT>(
    categories,
    relations,
    key
  )
}

export function categoryFind(
  categories: CategoryContentsT,
  relation: CategoryRelationT,
  key: keyof CategoryContentT = 'slug'
): CategoryContentT | undefined {
  return contentFind<CategoryBaseI, CategoryRelationT>(
    categories,
    relation,
    key
  )
}
