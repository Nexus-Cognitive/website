import type { ClientServiceT } from '@/types'
import type { StoreInstanceI } from '@/interfaces'
import {
  storeActionMap,
  storeGetterMap,
  storeMutationMap,
  storeStateMap
} from '@/utilities'

export function storeModuleMap(
  clientModel: object,
  clientService: ClientServiceT
): StoreInstanceI {
  const state = storeStateMap(clientModel)
  const _state = state()

  return {
    state,
    mutations: storeMutationMap(_state),
    actions: storeActionMap(clientService, _state),
    getters: storeGetterMap(_state)
  }
}
