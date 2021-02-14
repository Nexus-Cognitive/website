import { APIClientInstanceT } from '@/types'
import { API_CLIENT_METHOD_KEYS, apiClientMethodGet } from '@/utilities'

export function apiClientInstanceGet(
  apiClientStoreModuleKey: string
): APIClientInstanceT {
  const apiClientInstance: { [index: string]: any } = {}

  for (const apiClientMethodKey of API_CLIENT_METHOD_KEYS) {
    apiClientInstance[apiClientMethodKey] = apiClientMethodGet(
      apiClientStoreModuleKey,
      apiClientMethodKey
    )
  }

  return <APIClientInstanceT>apiClientInstance
}
