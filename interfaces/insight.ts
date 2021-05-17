import type { SectionRelationT } from '@/types'
import type { ArticleBaseI, ArticlePageI } from '@/interfaces'

export interface InsightBaseI extends ArticleBaseI {
  feature: boolean
  section: SectionRelationT
}

export interface InsightPageI extends ArticlePageI, InsightBaseI {}
