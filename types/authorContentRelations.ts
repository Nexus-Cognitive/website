import type {
  AuthorContentT,
  AuthorRelationT,
  ContentRelationsT
} from '@/types'

export type AuthorContentRelationsT = ContentRelationsT<
  AuthorContentT,
  AuthorRelationT
>
