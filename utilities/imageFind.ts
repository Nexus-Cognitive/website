import type { ImageContentT, ImageContentsT, ImageRelationT } from '@/types'
import type { ImageBaseI } from '@/interfaces'
import { contentFind } from '@/utilities'

export function imageFind(
  images: ImageContentsT,
  relation: ImageRelationT,
  key: string = 'slug'
): ImageContentT | undefined {
  return contentFind<ImageBaseI, ImageRelationT>(images, relation, key)
}
