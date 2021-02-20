import type { ContentValueI, ContentTaxonomyTermI } from '@/interfaces'

export interface ContentTaxonomyGroupI
  extends ContentValueI<ContentTaxonomyTermI[]> {
  taxonomy_group: string
}
