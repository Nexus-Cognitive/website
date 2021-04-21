import type { ColorRelationT, ImageRelationT, VideoRelationT } from '@/types'
import type { ResourceBaseI } from '@/interfaces'

export interface SlideBaseI extends ResourceBaseI {
  backgroundColor?: ColorRelationT
  body: string
  image?: ImageRelationT
  order: number
  video?: VideoRelationT
}
