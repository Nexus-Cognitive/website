import type { ImageBaseI, ResourceBaseI } from '@/interfaces'

export interface AuthorBaseI extends ResourceBaseI {
  image: ImageBaseI
  name: string
}
