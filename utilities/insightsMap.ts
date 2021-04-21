import type {
  AuthorContentsT,
  CategoryContentsT,
  ImageContentsT,
  InsightContentsT,
  InsightContentT
} from '@/types'
import { insightMap } from '@/utilities'

export function insightsMap(
  insights: InsightContentsT,
  authors: AuthorContentsT,
  categories: CategoryContentsT,
  images: ImageContentsT
): InsightContentsT {
  return insights.map(
    (insight: InsightContentT): InsightContentT =>
      insightMap(insight, authors, categories, images)
  )
}
