import type { APIClientModelT, APIClientServiceT } from '@/types'
import type { StoreModuleI } from '@/interfaces'
import {
  storeActionsGet,
  storeGettersGet,
  storeMutationsGet,
  storeStateMethodGet
} from '@/utilities'

export function storeModuleGet(
  apiClientModel: APIClientModelT,
  apiClientService: APIClientServiceT
): StoreModuleI {
  const state = storeStateMethodGet(apiClientModel)
  const _storeState = state()

  return {
    state,
    mutations: storeMutationsGet(_storeState),
    actions: storeActionsGet(apiClientService, _storeState),
    getters: storeGettersGet(_storeState)
  }
}
