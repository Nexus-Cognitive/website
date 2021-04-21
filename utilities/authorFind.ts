import type { AuthorContentT, AuthorContentsT, AuthorRelationT } from '@/types'
import type { AuthorBaseI } from '@/interfaces'
import { contentFind } from '@/utilities'

export function authorFind(
  authors: AuthorContentsT,
  relation: AuthorRelationT,
  key: string = 'slug'
): AuthorContentT | undefined {
  return contentFind<AuthorBaseI, AuthorRelationT>(authors, relation, key)
}
