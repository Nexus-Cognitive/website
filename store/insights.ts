import { InsightClientM } from '@/models'
import { InsightClientS } from '@/services'
import { storeModuleInstanceGet } from '@/utilities'

export const { state, mutations, actions, getters } = storeModuleInstanceGet(
  InsightClientM,
  InsightClientS
)
