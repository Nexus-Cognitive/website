import type {
  AuthorContentsT,
  AuthorRelationT,
  AuthorRelationsT
} from '@/types'
import type { AuthorBaseI } from '@/interfaces'
import { contentsFilter } from '@/utilities'

export function authorsFilter(
  authors: AuthorContentsT,
  relations: AuthorRelationsT,
  key: string = 'slug'
): AuthorContentsT | undefined {
  return contentsFilter<AuthorBaseI, AuthorRelationT>(authors, relations, key)
}
