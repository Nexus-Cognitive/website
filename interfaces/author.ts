import type { ImageRelationT } from '@/types'
import type { ResourceBaseI } from '@/interfaces'

export interface AuthorBaseI extends ResourceBaseI {
  email: string
  image: ImageRelationT
  linkedIn: string
  order: number
  partner: boolean
  position: string
}
