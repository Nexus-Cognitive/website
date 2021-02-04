import * as Interfaces from '@/interfaces'

export interface ImageBase extends Interfaces.ResourceBase {
  alt: string
  height: number
  url: string
  width: number
}
