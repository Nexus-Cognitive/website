import type { APIClientServiceT, StoreActionsT } from '@/types'
import type { StoreStateI } from '@/interfaces'
import {
  API_CLIENT_METHOD_KEYS,
  apiClientServiceKeyGet,
  storeActionsKeyGet,
  storeActionMethodGet,
  valueIsObject
} from '@/utilities'

export function storeActionsGet(
  apiClientService: APIClientServiceT,
  storeState: StoreStateI,
  storeStateKeys: string[] = [],
  storeActions: StoreActionsT = {}
): StoreActionsT {
  for (const storeStateKey in storeState) {
    for (const apiClientMethodKey of API_CLIENT_METHOD_KEYS) {
      const _storeStateKeys = [
        ...storeStateKeys,
        storeStateKey
      ]
      const storeStateValue = storeState[storeStateKey]
      const storeActionsKey = storeActionsKeyGet(
        _storeStateKeys,
        apiClientMethodKey
      )

      storeActions[storeActionsKey] = storeActionMethodGet(
        apiClientService,
        apiClientServiceKeyGet(_storeStateKeys),
        apiClientMethodKey,
        _storeStateKeys
      )

      if (valueIsObject(storeStateValue)) {
        storeActions = storeActionsGet(
          apiClientService,
          storeStateValue,
          _storeStateKeys,
          storeActions
        )
      }
    }
  }

  return storeActions
}
