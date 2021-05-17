import type {
  ContentT,
  ContentResultT,
  ContentsT,
  RelationT,
  RelationsT
} from '@/types'
import type { ColorBaseI } from '@/interfaces'

export type ColorContentT = ContentT<ColorBaseI>

export type ColorContentsT = ContentsT<ColorBaseI>

export type ColorRelationT = RelationT<ColorBaseI>

export type ColorRelationsT = RelationsT<ColorBaseI>

export type ColorResultT = ContentResultT<ColorBaseI>
