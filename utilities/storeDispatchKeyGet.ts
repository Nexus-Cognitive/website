import { APIClientInstanceMethodKeyT } from '@/types'
import { keyGetCamelCase } from '@/utilities'

export function storeDispatchKeyGet(
  apiClientStoreModuleKey: string,
  stateInstanceKeys: string[],
  apiClientInstanceMethodKey: APIClientInstanceMethodKeyT
): string {
  return [
    keyGetCamelCase([apiClientStoreModuleKey]),
    keyGetCamelCase([...stateInstanceKeys, apiClientInstanceMethodKey])
  ].join('/')
}
