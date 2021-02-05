import type { ResourceBaseI } from '@/interfaces'

export interface ImageBaseI extends ResourceBaseI {
  alt: string
  height: number
  url: string
  width: number
}
