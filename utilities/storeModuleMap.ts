import type { APIClientModelT, APIClientServiceT } from '@/types'
import type { StoreModuleInstanceI } from '@/interfaces'
import {
  storeActionInstanceGet,
  storeGetterInstanceGet,
  storeMutationInstanceGet,
  storeStateMap
} from '@/utilities'

export function storeModuleMap(
  apiClientModel: APIClientModelT,
  apiClientService: APIClientServiceT
): StoreModuleInstanceI {
  const state = storeStateMap(apiClientModel)
  const _state = state()

  return {
    state,
    mutations: storeMutationInstanceGet(_state),
    actions: storeActionInstanceGet(apiClientService, _state),
    getters: storeGetterInstanceGet(_state)
  }
}
