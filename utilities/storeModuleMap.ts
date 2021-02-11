import type { APIClientServiceT } from '@/types'
import type { StoreInstanceI } from '@/interfaces'
import {
  storeActionMap,
  storeGetterMap,
  storeMutationMap,
  storeStateMap
} from '@/utilities'

export function storeModuleMap(
  apiClientModel: object,
  apiClientService: APIClientServiceT
): StoreInstanceI {
  const state = storeStateMap(apiClientModel)
  const _state = state()

  return {
    state,
    mutations: storeMutationMap(_state),
    actions: storeActionMap(apiClientService, _state),
    getters: storeGetterMap(_state)
  }
}
