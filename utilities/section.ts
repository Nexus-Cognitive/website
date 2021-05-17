import type {
  SectionContentT,
  SectionContentsT,
  SectionRelationT
} from '@/types'
import type { SectionBaseI } from '@/interfaces'
import { contentFind } from '@/utilities'

export function sectionFind(
  sections: SectionContentsT,
  relation: SectionRelationT,
  key: keyof SectionContentT = 'slug'
): SectionContentT | undefined {
  return contentFind<SectionBaseI, SectionRelationT>(sections, relation, key)
}
