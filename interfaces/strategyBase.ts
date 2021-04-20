import type {
  ColorRelationT,
  ImageRelationT,
  IndustryRelationsT
} from '@/types'
import type { ResourceBaseI } from '@/interfaces'

export interface StrategyBaseI extends ResourceBaseI {
  backgroundColor?: ColorRelationT
  body: string
  bodyColor?: ColorRelationT
  image?: ImageRelationT
  industries: IndustryRelationsT
  order: number
  titleColor?: ColorRelationT
}
