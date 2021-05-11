import type {
  AuthorContentsT,
  CategoryContentsT,
  ImageContentsT,
  InsightContentT,
  SectionContentsT
} from '@/types'
import { articleMap, sectionFind } from '@/utilities'

export function insightMap(
  insight: InsightContentT,
  authors: AuthorContentsT,
  categories: CategoryContentsT,
  images: ImageContentsT,
  sections: SectionContentsT | undefined = undefined
): InsightContentT {
  const article = articleMap(
    insight,
    authors,
    categories,
    images
  ) as InsightContentT

  if (article.section && sections) {
    article.section = sectionFind(sections, article.section)
  }

  return article
}
