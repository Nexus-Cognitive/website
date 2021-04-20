import type {
  AuthorContentsT,
  AuthorRelationT,
  AuthorRelationsT
} from '@/types'
import type { AuthorBaseI } from '@/interfaces'
import { contentsFilter } from '@/utilities'

export function authorsFilter(
  authorContents: AuthorContentsT,
  authorRelations: AuthorRelationsT,
  authorKey: string = 'slug'
): AuthorContentsT | undefined {
  return contentsFilter<AuthorBaseI, AuthorRelationT>(
    authorContents,
    authorRelations,
    authorKey
  )
}
