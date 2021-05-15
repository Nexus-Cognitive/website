import type { ColorRelationT, ImageRelationT, ServiceRelationsT } from '@/types'
import type { ResourceBaseI } from '@/interfaces'

export interface StrategyBaseI extends ResourceBaseI {
  backgroundColor: ColorRelationT
  body: string
  bodyColor: ColorRelationT
  image: ImageRelationT
  services: ServiceRelationsT
  order: number
  titleColor: ColorRelationT
}
