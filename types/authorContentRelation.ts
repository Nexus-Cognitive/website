import type { AuthorContentT, ContentRelationT } from '@/types'
import type { ImageBaseI } from '~/interfaces'

export type AuthorContentRelationT = ContentRelationT<
  ImageBaseI,
  AuthorContentT
>
