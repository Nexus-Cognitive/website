import type {
  ContentT,
  ContentResultT,
  ContentsT,
  RelationT,
  RelationsT
} from '@/types'
import type { SectionBaseI } from '@/interfaces'

export type SectionContentT = ContentT<SectionBaseI>

export type SectionContentsT = ContentsT<SectionBaseI>

export type SectionRelationT = RelationT<SectionBaseI>

export type SectionRelationsT = RelationsT<SectionBaseI>

export type SectionResultT = ContentResultT<SectionBaseI>
