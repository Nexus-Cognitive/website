import { ImageContentsT, ServiceContentsT, ServiceContentT } from '@/types'
import { serviceMap } from '@/utilities'

export function servicesMap(
  services: ServiceContentsT,
  images: ImageContentsT
): ServiceContentsT {
  return services.map(
    (service: ServiceContentT): ServiceContentT =>
      serviceMap(service, services, images)
  )
}
