import type { ImageContentT, ImageContentsT, ImageRelationT } from '@/types'
import type { ImageBaseI } from '@/interfaces'
import { contentFind } from '@/utilities'

export function imageFind(
  imageContents: ImageContentsT,
  imageRelation: ImageRelationT,
  imageKey: string = 'slug'
): ImageContentT | undefined {
  return contentFind<ImageBaseI, ImageRelationT>(
    imageContents,
    imageRelation,
    imageKey
  )
}
