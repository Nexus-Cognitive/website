import { APIClientModelT, APIClientServiceT } from '@/types'
import {
  apiClientInstanceGet,
  apiClientServiceKeyGet,
  valueIsObject
} from '@/utilities'

export function apiClientServiceGet(
  apiClientModel: APIClientModelT,
  apiClientStoreModuleKey: string,
  apiClientService: APIClientServiceT = {},
  apiClientModelKeys: string[] = []
): APIClientServiceT {
  for (const apiClientModelKey in apiClientModel) {
    const _apiClientModelKeys = [...apiClientModelKeys, apiClientModelKey]
    const apiClientModelValue = apiClientModel[apiClientModelKey]
    const apiClientServiceKey = apiClientServiceKeyGet(_apiClientModelKeys)

    apiClientService[apiClientServiceKey] = apiClientInstanceGet(
      apiClientStoreModuleKey
    )

    if (valueIsObject(apiClientModelValue)) {
      apiClientService = apiClientServiceGet(
        apiClientModelValue,
        apiClientStoreModuleKey,
        apiClientService,
        _apiClientModelKeys
      )
    }
  }

  return apiClientService
}
