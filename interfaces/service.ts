import type { ImageRelationT, ServiceRelationsT } from '@/types'
import type { ResourceBaseI } from '@/interfaces'

export interface ServiceBaseI extends ResourceBaseI {
  body: string
  description: string
  image: ImageRelationT
  services: ServiceRelationsT
}
