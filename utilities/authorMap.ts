import type { AuthorContentT, ImageContentsT } from '@/types'
import { imageFind } from '@/utilities'

export function authorMap(
  author: AuthorContentT,
  images: ImageContentsT
): AuthorContentT {
  if (author.image && typeof author.image !== 'object') {
    author.image = imageFind(images, author.image)
  }

  return author
}
