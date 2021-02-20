import { InsightClientM } from '@/models'
import { InsightClientS } from '@/services'
import { storeModuleGet } from '@/utilities'

export const { state, mutations, actions, getters } = storeModuleGet(
  InsightClientM,
  InsightClientS
)
