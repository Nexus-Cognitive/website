import type {
  ActionInstanceT,
  APIClientServiceT,
  StateInstanceT
} from '@/types'
import {
  API_CLIENT_METHOD_KEYS,
  storeActionMethodGet,
  storeActionMethodKeyGet
} from '@/utilities'

export function storeActionMap(
  apiClientService: APIClientServiceT,
  state: StateInstanceT
): ActionInstanceT {
  const _actions: ActionInstanceT = {}

  for (const stateKey in state) {
    for (const apiClientMethodKey of API_CLIENT_METHOD_KEYS) {
      _actions[
        storeActionMethodKeyGet(stateKey, apiClientMethodKey)
      ] = storeActionMethodGet(apiClientService, stateKey, apiClientMethodKey)
    }
  }

  return _actions
}
