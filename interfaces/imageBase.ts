import type { ResourceBaseI } from '@/interfaces'

export interface ImageBaseI extends ResourceBaseI {
  alt: string
  height: string
  url: string
  width: string
}
