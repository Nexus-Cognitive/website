import type {
  ContentT,
  ContentResultT,
  ContentsT,
  RelationT,
  RelationsT
} from '@/types'
import type { SolutionBaseI, SolutionPageI } from '@/interfaces'

export type SolutionContentT = ContentT<SolutionBaseI>

export type SolutionContentsT = ContentsT<SolutionBaseI>

export type SolutionRelationT = RelationT<SolutionBaseI>

export type SolutionRelationsT = RelationsT<SolutionBaseI>

export type SolutionResultT = ContentResultT<SolutionBaseI>

export type SolutionPageContentT = ContentT<SolutionPageI>

export type SolutionPageContentsT = ContentsT<SolutionPageI>

export type SolutionPageRelationT = RelationT<SolutionPageI>

export type SolutionPageRelationsT = RelationsT<SolutionPageI>

export type SolutionPageResultT = ContentResultT<SolutionPageI>
