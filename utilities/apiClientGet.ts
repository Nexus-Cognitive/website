import type { APIClientInstanceT } from '@/types'
import { apiClientMethodGet, API_CLIENT_METHOD_KEYS } from '@/utilities'

export function apiClientGet(
  moduleKey: string,
  apiClientModelKey: string
): APIClientInstanceT {
  const _apiClient: any = {}

  for (const methodKey of API_CLIENT_METHOD_KEYS) {
    _apiClient[methodKey] = apiClientMethodGet(
      moduleKey,
      apiClientModelKey,
      methodKey
    )
  }

  return <APIClientInstanceT>_apiClient
}
