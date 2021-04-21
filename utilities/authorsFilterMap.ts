import type {
  AuthorContentsT,
  AuthorContentT,
  AuthorRelationsT,
  ImageContentsT
} from '@/types'
import { authorMap, authorsFilter } from '@/utilities'

export function authorsFilterMap(
  authors: AuthorContentsT,
  relations: AuthorRelationsT,
  images: ImageContentsT
): AuthorContentsT | undefined {
  return authorsFilter(authors, relations)?.map(
    (author: AuthorContentT): AuthorContentT => authorMap(author, images)
  )
}
