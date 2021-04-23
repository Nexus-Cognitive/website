import type { AuthorContentsT, AuthorRelationsT, ImageContentsT } from '@/types'
import { authorsFilter, authorsMap } from '@/utilities'

export function authorsFilterMap(
  authors: AuthorContentsT,
  relations: AuthorRelationsT,
  images: ImageContentsT
): AuthorContentsT | undefined {
  const _authors = authorsFilter(authors, relations)

  return _authors ? authorsMap(_authors, images) : _authors
}
