import type {
  ColorContentsT,
  ImageContentsT,
  ServiceContentsT,
  StrategyContentT,
  StrategyContentsT
} from '@/types'
import { strategyMap } from '@/utilities'

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
