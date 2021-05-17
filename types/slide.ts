import type {
  ContentT,
  ContentResultT,
  ContentsT,
  RelationT,
  RelationsT
} from '@/types'
import type { SlideBaseI } from '@/interfaces'

export type SlideContentT = ContentT<SlideBaseI>

export type SlideContentsT = ContentsT<SlideBaseI>

export type SlideRelationT = RelationT<SlideBaseI>

export type SlideRelationsT = RelationsT<SlideBaseI>

export type SlideResultT = ContentResultT<SlideBaseI>
