import type {
  AuthorContentsT,
  CategoryContentsT,
  ImageContentsT,
  InsightContentT
} from '@/types'
import { authorsFilterMap, categoriesFilter, imageFind } from '@/utilities'

export function insightMap(
  insight: InsightContentT,
  authors: AuthorContentsT,
  categories: CategoryContentsT,
  images: ImageContentsT
): InsightContentT {
  if (insight.authors?.length) {
    insight.authors = authorsFilterMap(authors, insight.authors, images)
  }

  if (insight.categories?.length) {
    insight.categories = categoriesFilter(categories, insight.categories)
  }

  if (insight.cover) {
    insight.cover = imageFind(images, insight.cover)
  }

  return insight
}
