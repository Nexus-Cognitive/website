import type { APIClientInstanceT } from '@/types'
import {
  API_CLIENT_INSTANCE_METHOD_KEYS,
  apiClientMethodGet
} from '@/utilities'

export function apiClientInstanceGet(
  apiClientStoreModuleKey: string
): APIClientInstanceT {
  const apiClientInstance = {} as APIClientInstanceT

  for (const apiClientInstanceMethodKey of API_CLIENT_INSTANCE_METHOD_KEYS) {
    apiClientInstance[apiClientInstanceMethodKey] = apiClientMethodGet(
      apiClientStoreModuleKey,
      apiClientInstanceMethodKey
    )
  }

  return apiClientInstance
}
