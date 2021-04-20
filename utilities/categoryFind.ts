import type {
  CategoryContentT,
  CategoryContentsT,
  CategoryRelationT
} from '@/types'
import type { CategoryBaseI } from '@/interfaces'
import { contentFind } from '@/utilities'

export function categoryFind(
  categoryContents: CategoryContentsT,
  categoryRelation: CategoryRelationT,
  categoryKey: string = 'slug'
): CategoryContentT | undefined {
  return contentFind<CategoryBaseI, CategoryRelationT>(
    categoryContents,
    categoryRelation,
    categoryKey
  )
}
