import type {
  ColorContentsT,
  ImageContentsT,
  ServiceContentsT,
  StrategyContentT,
  StrategyContentsT,
  StrategyResultT,
  ColorResultT,
  ImageResultT,
  ServiceResultT
} from '@/types'
import { colorFind, imageFind, servicesFilter } from '@/utilities'

export function strategiesMap(
  strategies: StrategyContentsT,
  colors: ColorContentsT,
  images: ImageContentsT,
  services: ServiceContentsT
): StrategyContentsT {
  return strategies.map(
    (strategy: StrategyContentT): StrategyContentT =>
      strategyMap(strategy, colors, images, services)
  )
}

export function strategyMap(
  strategy: StrategyContentT,
  colors: ColorContentsT,
  images: ImageContentsT,
  services: ServiceContentsT
): StrategyContentT {
  strategy.backgroundColor = colorFind(colors, strategy.backgroundColor)

  strategy.bodyColor = colorFind(colors, strategy.bodyColor)

  strategy.image = imageFind(images, strategy.image)

  strategy.services = servicesFilter(services, strategy.services)

  strategy.titleColor = colorFind(colors, strategy.titleColor)

  return strategy
}

export function strategyResultMap(
  strategyResult: StrategyResultT,
  colorResult: ColorResultT,
  imageResult: ImageResultT,
  serviceResult: ServiceResultT
): StrategyResultT {
  if (
    !!strategyResult &&
    Array.isArray(colorResult) &&
    Array.isArray(imageResult) &&
    Array.isArray(serviceResult)
  ) {
    if (Array.isArray(strategyResult)) {
      strategyResult = strategiesMap(
        strategyResult,
        colorResult,
        imageResult,
        serviceResult
      )
    } else {
      strategyResult = strategyMap(
        strategyResult,
        colorResult,
        imageResult,
        serviceResult
      )
    }
  }
  return strategyResult
}
