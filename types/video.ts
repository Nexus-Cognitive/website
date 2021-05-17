import type {
  ContentT,
  ContentResultT,
  ContentsT,
  RelationT,
  RelationsT
} from '@/types'
import type { VideoBaseI } from '@/interfaces'

export type VideoContentT = ContentT<VideoBaseI>

export type VideoContentsT = ContentsT<VideoBaseI>

export type VideoRelationT = RelationT<VideoBaseI>

export type VideoRelationsT = RelationsT<VideoBaseI>

export type VideoResultT = ContentResultT<VideoBaseI>
