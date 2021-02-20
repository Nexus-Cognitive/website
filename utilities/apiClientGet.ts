import type { APIClientT } from '@/types'
import {
  API_CLIENT_METHOD_KEYS,
  apiClientMethodGet
} from '@/utilities'

export function apiClientGet(): APIClientT {
  const apiClient = {} as APIClientT

  for (const apiClientMethodKey of API_CLIENT_METHOD_KEYS) {
    apiClient[apiClientMethodKey] = apiClientMethodGet(
      apiClientMethodKey
    )
  }

  return apiClient
}
