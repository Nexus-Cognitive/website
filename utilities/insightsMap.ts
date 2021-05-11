import type {
  ArticleContentT,
  ArticleContentsT,
  AuthorContentsT,
  CategoryContentsT,
  ImageContentsT,
  InsightContentsT,
  InsightContentT,
  SectionContentsT
} from '@/types'
import { insightMap } from '@/utilities'

export function insightsMap(
  insights: InsightContentsT,
  authors: AuthorContentsT,
  categories: CategoryContentsT,
  images: ImageContentsT,
  sections: SectionContentsT | undefined = undefined
): ArticleContentsT {
  return insights.map(
    (insight: InsightContentT): ArticleContentT =>
      insightMap(insight, authors, categories, images, sections)
  )
}
