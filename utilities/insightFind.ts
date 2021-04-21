import type {
  InsightContentT,
  InsightContentsT,
  InsightRelationT
} from '@/types'
import type { InsightBaseI } from '@/interfaces'
import { contentFind } from '@/utilities'

export function insightFind(
  insights: InsightContentsT,
  relation: InsightRelationT,
  key: string = 'slug'
): InsightContentT | undefined {
  return contentFind<InsightBaseI, InsightRelationT>(insights, relation, key)
}
