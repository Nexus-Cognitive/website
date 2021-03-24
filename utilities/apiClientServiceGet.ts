import type { APIClientModelT, APIClientServiceT } from '@/types'
import {
  apiClientInstanceGet,
  apiClientServiceKeyGet,
  valueIsObject
} from '@/utilities'

export function apiClientServiceGet(
  apiClientInstanceStoreModuleInstanceKey: string,
  apiClientModel: APIClientModelT,
  apiClientModelKeys: string[] = [],
  apiClientService: APIClientServiceT = {}
): APIClientServiceT {
  for (const apiClientModelKey in apiClientModel) {
    const _apiClientModelKeys = [...apiClientModelKeys, apiClientModelKey]
    const apiClientModelValue = apiClientModel[apiClientModelKey]
    const apiClientServiceKey = apiClientServiceKeyGet(_apiClientModelKeys)

    apiClientService[apiClientServiceKey] = apiClientInstanceGet(
      apiClientInstanceStoreModuleInstanceKey
    )

    if (valueIsObject(apiClientModelValue)) {
      apiClientService = apiClientServiceGet(
        apiClientInstanceStoreModuleInstanceKey,
        apiClientModelValue,
        _apiClientModelKeys,
        apiClientService
      )
    }
  }

  return apiClientService
}
