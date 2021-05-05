import type {
  ServiceContentsT,
  ServiceRelationT,
  ServiceRelationsT
} from '@/types'
import type { ServiceBaseI } from '@/interfaces'
import { contentsFilter } from '@/utilities'

export function servicesFilter(
  services: ServiceContentsT,
  relations: ServiceRelationsT,
  key: string = 'slug'
): ServiceContentsT | undefined {
  return contentsFilter<ServiceBaseI, ServiceRelationT>(
    services,
    relations,
    key
  )
}
