import type { ColorRelationT, ImageRelationT } from '@/types'
import type { ResourceBaseI } from '@/interfaces'

export interface SlideBaseI extends ResourceBaseI {
  backgroundColor?: ColorRelationT
  body: string
  image?: ImageRelationT
  video?: string
}
