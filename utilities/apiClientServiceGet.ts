import type { APIClientModelT, APIClientServiceT } from '@/types'
import {
  apiClientGet,
  apiClientServiceKeyGet,
  valueIsObject
} from '@/utilities'

export function apiClientServiceGet(
  apiClientModel: APIClientModelT,
  apiClientModelKeys: string[] = [],
  apiClientService: APIClientServiceT = {}
): APIClientServiceT {
  for (const apiClientModelKey in apiClientModel) {
    const _apiClientModelKeys = [...apiClientModelKeys, apiClientModelKey]
    const apiClientModelValue = apiClientModel[apiClientModelKey]
    const apiClientServiceKey = apiClientServiceKeyGet(_apiClientModelKeys)

    apiClientService[apiClientServiceKey] = apiClientGet()

    if (valueIsObject(apiClientModelValue)) {
      apiClientService = apiClientServiceGet(
        apiClientModelValue,
        _apiClientModelKeys,
        apiClientService
      )
    }
  }

  return apiClientService
}
