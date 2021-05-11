import { contentFind } from './contentFind'
import { SectionBaseI } from '~/interfaces'
import { SectionContentsT, SectionContentT, SectionRelationT } from '~/types'

export function sectionFind(
  sections: SectionContentsT,
  relation: SectionRelationT,
  key: string = 'slug'
): SectionContentT | undefined {
  return contentFind<SectionBaseI, SectionRelationT>(sections, relation, key)
}
