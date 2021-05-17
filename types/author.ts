import type {
  ContentT,
  ContentResultT,
  ContentsT,
  RelationT,
  RelationsT
} from '@/types'
import type { AuthorBaseI } from '@/interfaces'

export type AuthorContentT = ContentT<AuthorBaseI>

export type AuthorContentsT = ContentsT<AuthorBaseI>

export type AuthorRelationT = RelationT<AuthorBaseI>

export type AuthorRelationsT = RelationsT<AuthorBaseI>

export type AuthorResultT = ContentResultT<AuthorBaseI>
