import type { APIClientServiceT } from '@/types'
import { apiClientGet, apiClientModelKeyGet } from '@/utilities'

export function apiClientMap(
  apiClientModel: object,
  moduleKey: string
): APIClientServiceT {
  const _apiClientService: APIClientServiceT = {}

  for (const apiClientModelKey in apiClientModel) {
    const _apiClientModelKey = apiClientModelKeyGet(apiClientModelKey)

    _apiClientService[_apiClientModelKey] = apiClientGet(
      moduleKey,
      _apiClientModelKey
    )
  }

  return _apiClientService
}
