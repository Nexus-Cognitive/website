import * as Interfaces from '@/interfaces'

export interface AuthorBase extends Interfaces.ResourceBase {
  image: Interfaces.ImageBase
  name: string
}
