import type {
  ColorContentsT,
  ImageContentsT,
  ServiceContentsT,
  StrategyContentT
} from '@/types'
import { colorFind, imageFind, servicesFilter } from '@/utilities'

export function strategyMap(
  strategy: StrategyContentT,
  colors: ColorContentsT,
  images: ImageContentsT,
  services: ServiceContentsT
): StrategyContentT {
  if (strategy.backgroundColor) {
    strategy.backgroundColor = colorFind(colors, strategy.backgroundColor)
  }

  if (strategy.bodyColor) {
    strategy.bodyColor = colorFind(colors, strategy.bodyColor)
  }

  if (strategy.image) {
    strategy.image = imageFind(images, strategy.image)
  }

  if (strategy.services?.length) {
    strategy.services = servicesFilter(services, strategy.services)
  }

  if (strategy.titleColor) {
    strategy.titleColor = colorFind(colors, strategy.titleColor)
  }

  return strategy
}
