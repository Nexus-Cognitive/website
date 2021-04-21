import type { AuthorContentsT, AuthorContentT, ImageContentsT } from '@/types'
import { authorMap } from '@/utilities'

export function authorsMap(
  authors: AuthorContentsT,
  images: ImageContentsT
): AuthorContentsT {
  return authors.map(
    (author: AuthorContentT): AuthorContentT => authorMap(author, images)
  )
}
