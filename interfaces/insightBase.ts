import type { ArticleBaseI } from '@/interfaces'
import { SectionRelationT } from '~/types'

export interface InsightBaseI extends ArticleBaseI {
  feature: boolean
  section: SectionRelationT
}
