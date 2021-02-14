import { APIClientInstanceT } from '@/types'
import { API_CLIENT_METHOD_KEYS, apiClientMethodGet } from '@/utilities'

export function apiClientInstanceGet(): APIClientInstanceT {
  let apiClientInstance!: APIClientInstanceT

  for (const apiClientMethodKey of API_CLIENT_METHOD_KEYS) {
    apiClientInstance[apiClientMethodKey] = apiClientMethodGet(
      apiClientMethodKey
    )
  }

  return apiClientInstance
}
