import {
  APIClientServiceT,
  StateInstanceT,
  StoreActionInstanceT
} from '@/types'
import {
  API_CLIENT_METHOD_KEYS,
  apiClientServiceKeyGet,
  storeActionInstanceKeyGet,
  storeActionMethodGet,
  valueIsObject
} from '@/utilities'

export function storeActionInstanceGet(
  apiClientService: APIClientServiceT,
  stateInstance: StateInstanceT,
  stateInstanceKeys: string[] = [],
  storeActionInstance: StoreActionInstanceT = {}
): StoreActionInstanceT {
  for (const stateInstanceKey in stateInstance) {
    for (const apiClientMethodKey of API_CLIENT_METHOD_KEYS) {
      const _stateInstanceKeys = [...stateInstanceKeys, stateInstanceKey]
      const stateInstanceValue = stateInstance[stateInstanceKey]
      const storeActionInstanceKey = storeActionInstanceKeyGet(
        _stateInstanceKeys,
        apiClientMethodKey
      )

      storeActionInstance[storeActionInstanceKey] = storeActionMethodGet(
        apiClientService,
        apiClientServiceKeyGet(_stateInstanceKeys),
        apiClientMethodKey,
        _stateInstanceKeys
      )

      if (valueIsObject(stateInstanceValue)) {
        storeActionInstance = storeActionInstanceGet(
          apiClientService,
          stateInstanceValue,
          _stateInstanceKeys,
          storeActionInstance
        )
      }
    }
  }

  return storeActionInstance
}
