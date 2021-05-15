import type {
  ServiceContentT,
  ServiceContentsT,
  ServiceRelationT
} from '@/types'
import type { ServiceBaseI } from '@/interfaces'
import { contentFind } from '@/utilities'

export function serviceFind(
  services: ServiceContentsT,
  relation: ServiceRelationT,
  key: string = 'slug'
): ServiceContentT | undefined {
  return contentFind<ServiceBaseI, ServiceRelationT>(services, relation, key)
}
