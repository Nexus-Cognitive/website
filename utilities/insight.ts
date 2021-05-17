import type {
  ArticleContentT,
  AuthorContentsT,
  AuthorResultT,
  CategoryContentsT,
  CategoryResultT,
  ImageContentsT,
  ImageResultT,
  InsightContentT,
  InsightContentsT,
  InsightRelationT,
  InsightResultT,
  SectionContentsT,
  SectionRelationT,
  SectionResultT
} from '@/types'
import type { InsightBaseI } from '@/interfaces'
import {
  articleMap,
  articlesFilter,
  contentFind,
  sectionFind
} from '@/utilities'

export function insightFind(
  insights: InsightContentsT,
  relation: InsightRelationT,
  key: keyof InsightContentT = 'slug'
): InsightContentT | undefined {
  return contentFind<InsightBaseI, InsightRelationT>(insights, relation, key)
}

export function insightMap(
  insight: InsightContentT,
  authors: AuthorContentsT,
  categories: CategoryContentsT,
  images: ImageContentsT,
  sections: SectionContentsT | undefined = undefined
): InsightContentT {
  const insightMapped = articleMap<InsightBaseI>(
    insight,
    authors,
    categories,
    images
  )

  if (sections) {
    insightMapped.section = sectionFind(sections, insightMapped.section)
  }

  return insightMapped
}

export function insightResultMap(
  insightResult: InsightResultT,
  authorResult: AuthorResultT,
  categoryResult: CategoryResultT,
  imageResult: ImageResultT,
  sectionResult: SectionResultT = undefined
): InsightResultT {
  if (
    !!insightResult &&
    Array.isArray(authorResult) &&
    Array.isArray(categoryResult) &&
    Array.isArray(imageResult)
  ) {
    sectionResult = Array.isArray(sectionResult) ? sectionResult : undefined

    if (Array.isArray(insightResult)) {
      insightResult = insightsMap(
        insightResult,
        authorResult,
        categoryResult,
        imageResult,
        sectionResult
      )
    } else {
      insightResult = insightMap(
        insightResult,
        authorResult,
        categoryResult,
        imageResult,
        sectionResult
      )
    }
  }
  return insightResult
}

export function insightResultFilterPublishMap(
  insightResult: InsightResultT,
  authorResult: AuthorResultT,
  categoryResult: CategoryResultT,
  imageResult: ImageResultT,
  sectionResult: SectionResultT = undefined
): InsightResultT {
  if (Array.isArray(insightResult)) {
    insightResult = insightsFilterPublish(insightResult)

    insightResult = insightResultMap(
      insightResult,
      authorResult,
      categoryResult,
      imageResult,
      sectionResult
    )
  }

  return insightResult
}

export function insightsFilter(
  insights: InsightContentsT,
  key: keyof ArticleContentT<InsightBaseI>,
  condition: (value: any) => boolean
): InsightContentsT | undefined {
  return articlesFilter<InsightBaseI>(insights, key, condition)
}

export function insightsFilterPublish(
  insights: InsightContentsT
): InsightContentsT | undefined {
  let date: Date | string = new Date()

  date.setHours(23, 59, 59, 999)

  date = date.toISOString()

  return insightsFilter(
    insights,
    'publish',
    (value: string): boolean => value <= date
  )
}

export function insightsFilterSection(
  insights: InsightContentsT,
  section: string
): InsightContentsT | undefined {
  return insightsFilter(
    insights,
    'section',
    (value: SectionRelationT): boolean => {
      if (typeof value === 'string') {
        return value === section
      } else if (value?.slug) {
        return value.slug === section
      } else {
        return false
      }
    }
  )
}

export function insightsMap(
  insights: InsightContentsT,
  authors: AuthorContentsT,
  categories: CategoryContentsT,
  images: ImageContentsT,
  sections: SectionContentsT | undefined = undefined
): InsightContentsT {
  return insights.map(
    (insight: InsightContentT): InsightContentT =>
      insightMap(insight, authors, categories, images, sections)
  )
}
