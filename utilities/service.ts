import type {
  ImageContentsT,
  ServiceContentT,
  ServiceContentsT,
  ServiceRelationT,
  ServiceRelationsT
} from '@/types'
import type { ServiceBaseI } from '@/interfaces'
import { contentFind, contentsFilter, imageFind } from '@/utilities'

export function serviceFind(
  services: ServiceContentsT,
  relation: ServiceRelationT,
  key: keyof ServiceContentT = 'slug'
): ServiceContentT | undefined {
  return contentFind<ServiceBaseI, ServiceRelationT>(services, relation, key)
}

export function serviceMap(
  service: ServiceContentT,
  services: ServiceContentsT,
  images: ImageContentsT
): ServiceContentT {
  if (service.image) {
    service.image = imageFind(images, service.image)
  }

  if (service.services?.length) {
    service.services = servicesFilter(services, service.services)
  }

  return service
}

export function servicesFilter(
  services: ServiceContentsT,
  relations: ServiceRelationsT,
  key: keyof ServiceContentT = 'slug'
): ServiceContentsT | undefined {
  return contentsFilter<ServiceBaseI, ServiceRelationT>(
    services,
    relations,
    key
  )
}

export function servicesMap(
  services: ServiceContentsT,
  images: ImageContentsT
): ServiceContentsT {
  return services.map(
    (service: ServiceContentT): ServiceContentT =>
      serviceMap(service, services, images)
  )
}
