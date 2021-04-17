import type { ResourceBaseI } from '@/interfaces'

export interface SlideBaseI extends ResourceBaseI {
  body: string
  color: string
  image?: string
  video?: string
}
