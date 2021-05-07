import type { ImageContentsT, ServiceContentsT, ServiceContentT } from '@/types'
import { servicesFilter } from '@/utilities'
import { imageFind } from './imageFind'

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
