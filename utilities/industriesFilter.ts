import type {
  IndustryContentsT,
  IndustryRelationT,
  IndustryRelationsT
} from '@/types'
import type { IndustryBaseI } from '@/interfaces'
import { contentsFilter } from '@/utilities'

export function industriesFilter(
  industryContents: IndustryContentsT,
  industryRelations: IndustryRelationsT,
  key: string = 'slug'
): IndustryContentsT | undefined {
  return contentsFilter<IndustryBaseI, IndustryRelationT>(
    industryContents,
    industryRelations,
    key
  )
}
