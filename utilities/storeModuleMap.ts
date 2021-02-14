import { APIClientModelT, APIClientServiceT } from '@/types'
import { StoreInstanceI } from '@/interfaces'
import {
  storeActionInstanceGet,
  storeGetterInstanceGet,
  storeMutationInstanceGet,
  storeStateMap
} from '@/utilities'

export function storeModuleMap(
  apiClientModel: APIClientModelT,
  apiClientService: APIClientServiceT
): StoreInstanceI {
  const state = storeStateMap(apiClientModel)
  const _state = state()

  return {
    state,
    mutations: storeMutationInstanceGet(_state),
    actions: storeActionInstanceGet(apiClientService, _state),
    getters: storeGetterInstanceGet(_state)
  }
}
