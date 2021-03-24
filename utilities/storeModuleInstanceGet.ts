import type { APIClientModelT, APIClientServiceT } from '@/types'
import type { StoreModuleInstanceI } from '@/interfaces'
import {
  storeActionInstanceGet,
  storeGetterInstanceGet,
  storeMutationInstanceGet,
  storeStateInstanceMethodGet
} from '@/utilities'

export function storeModuleInstanceGet(
  apiClientModel: APIClientModelT,
  apiClientService: APIClientServiceT
): StoreModuleInstanceI {
  const state = storeStateInstanceMethodGet(apiClientModel)
  const _storeStateInstance = state()

  return {
    state,
    mutations: storeMutationInstanceGet(_storeStateInstance),
    actions: storeActionInstanceGet(apiClientService, _storeStateInstance),
    getters: storeGetterInstanceGet(_storeStateInstance)
  }
}
