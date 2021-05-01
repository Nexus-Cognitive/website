import type {
  ArticleContentT,
  AuthorContentsT,
  CategoryContentsT,
  ImageContentsT,
  InsightContentT
} from '@/types'
import { articleMap } from '@/utilities'

export function insightMap(
  insight: InsightContentT,
  authors: AuthorContentsT,
  categories: CategoryContentsT,
  images: ImageContentsT
): ArticleContentT {
  return articleMap(insight, authors, categories, images)
}
