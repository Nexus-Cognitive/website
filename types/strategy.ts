import type {
  ContentT,
  ContentResultT,
  ContentsT,
  RelationT,
  RelationsT
} from '@/types'
import type { StrategyBaseI } from '@/interfaces'

export type StrategyContentT = ContentT<StrategyBaseI>

export type StrategyContentsT = ContentsT<StrategyBaseI>

export type StrategyRelationT = RelationT<StrategyBaseI>

export type StrategyRelationsT = RelationsT<StrategyBaseI>

export type StrategyResultT = ContentResultT<StrategyBaseI>
