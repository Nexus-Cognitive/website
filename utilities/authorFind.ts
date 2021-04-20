import type { AuthorContentT, AuthorContentsT, AuthorRelationT } from '@/types'
import type { AuthorBaseI } from '@/interfaces'
import { contentFind } from '@/utilities'

export function authorFind(
  authorContents: AuthorContentsT,
  authorRelation: AuthorRelationT,
  authorKey: string = 'slug'
): AuthorContentT | undefined {
  return contentFind<AuthorBaseI, AuthorRelationT>(
    authorContents,
    authorRelation,
    authorKey
  )
}
