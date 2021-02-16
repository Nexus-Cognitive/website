import type { ResourceBaseI } from '@/interfaces'

export interface ImageBaseI extends ResourceBaseI {
  alt: string
  height: string
  src: string
  width: string
}
