import type {
  ContentT,
  ContentResultT,
  ContentsT,
  RelationT,
  RelationsT
} from '@/types'
import type { CategoryBaseI } from '@/interfaces'

export type CategoryContentT = ContentT<CategoryBaseI>

export type CategoryContentsT = ContentsT<CategoryBaseI>

export type CategoryRelationT = RelationT<CategoryBaseI>

export type CategoryRelationsT = RelationsT<CategoryBaseI>

export type CategoryResultT = ContentResultT<CategoryBaseI>
