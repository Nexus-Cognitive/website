import type { ImageRelationT } from '@/types'
import type { ResourceBaseI } from '@/interfaces'

export interface AuthorBaseI extends ResourceBaseI {
  image: ImageRelationT
  partner: boolean
  position: string
}
