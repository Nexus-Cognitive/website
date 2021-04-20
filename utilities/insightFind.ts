import type {
  InsightContentT,
  InsightContentsT,
  InsightRelationT
} from '@/types'
import type { InsightBaseI } from '@/interfaces'
import { contentFind } from '@/utilities'

export function insightFind(
  insightContents: InsightContentsT,
  insightRelation: InsightRelationT,
  insightKey: string = 'slug'
): InsightContentT | undefined {
  return contentFind<InsightBaseI, InsightRelationT>(
    insightContents,
    insightRelation,
    insightKey
  )
}
