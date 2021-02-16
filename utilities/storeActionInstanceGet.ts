import type { APIClientServiceT, StoreActionInstanceT } from '@/types'
import type { StoreStateInstanceI } from '@/interfaces'
import {
  API_CLIENT_INSTANCE_METHOD_KEYS,
  apiClientServiceKeyGet,
  storeActionInstanceKeyGet,
  storeActionMethodGet,
  valueIsObject
} from '@/utilities'

export function storeActionInstanceGet(
  apiClientService: APIClientServiceT,
  storeStateInstance: StoreStateInstanceI,
  storeStateInstanceKeys: string[] = [],
  storeActionInstance: StoreActionInstanceT = {}
): StoreActionInstanceT {
  for (const storeStateInstanceKey in storeStateInstance) {
    for (const apiClientInstanceMethodKey of API_CLIENT_INSTANCE_METHOD_KEYS) {
      const _storeStateInstanceKeys = [
        ...storeStateInstanceKeys,
        storeStateInstanceKey
      ]
      const storeStateInstanceValue = storeStateInstance[storeStateInstanceKey]
      const storeActionInstanceKey = storeActionInstanceKeyGet(
        _storeStateInstanceKeys,
        apiClientInstanceMethodKey
      )

      storeActionInstance[storeActionInstanceKey] = storeActionMethodGet(
        apiClientService,
        apiClientServiceKeyGet(_storeStateInstanceKeys),
        apiClientInstanceMethodKey,
        _storeStateInstanceKeys
      )

      if (valueIsObject(storeStateInstanceValue)) {
        storeActionInstance = storeActionInstanceGet(
          apiClientService,
          storeStateInstanceValue,
          _storeStateInstanceKeys,
          storeActionInstance
        )
      }
    }
  }

  return storeActionInstance
}
