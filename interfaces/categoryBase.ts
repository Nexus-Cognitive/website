import type { ServiceRelationsT } from '@/types'
import type { ResourceBaseI } from '@/interfaces'

export interface CategoryBaseI extends ResourceBaseI {
  description: string
  services: ServiceRelationsT
}
