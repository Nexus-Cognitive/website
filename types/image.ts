import type {
  ContentT,
  ContentResultT,
  ContentsT,
  RelationT,
  RelationsT
} from '@/types'
import type { ImageBaseI } from '@/interfaces'

export type ImageContentT = ContentT<ImageBaseI>

export type ImageContentsT = ContentsT<ImageBaseI>

export type ImageRelationT = RelationT<ImageBaseI>

export type ImageRelationsT = RelationsT<ImageBaseI>

export type ImageResultT = ContentResultT<ImageBaseI>
