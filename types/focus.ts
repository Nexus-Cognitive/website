import type {
  ContentT,
  ContentResultT,
  ContentsT,
  RelationT,
  RelationsT
} from '@/types'
import type { FocusBaseI } from '@/interfaces'

export type FocusContentT = ContentT<FocusBaseI>

export type FocusContentsT = ContentsT<FocusBaseI>

export type FocusRelationT = RelationT<FocusBaseI>

export type FocusRelationsT = RelationsT<FocusBaseI>

export type FocusResultT = ContentResultT<FocusBaseI>
