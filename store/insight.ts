import { InsightClientM } from '@/models'
import { InsightClientS } from '@/services'
import { storeModuleMap } from '@/utilities'

export const { state, mutations, actions, getters } = storeModuleMap(
  InsightClientM,
  InsightClientS
)
