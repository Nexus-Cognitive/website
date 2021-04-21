import type {
  IndustryContentsT,
  IndustryRelationT,
  IndustryRelationsT
} from '@/types'
import type { IndustryBaseI } from '@/interfaces'
import { contentsFilter } from '@/utilities'

export function industriesFilter(
  industries: IndustryContentsT,
  relations: IndustryRelationsT,
  key: string = 'slug'
): IndustryContentsT | undefined {
  return contentsFilter<IndustryBaseI, IndustryRelationT>(
    industries,
    relations,
    key
  )
}
