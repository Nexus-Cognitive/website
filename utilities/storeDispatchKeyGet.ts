import type { APIClientMethodKeyT } from '@/types'
import { keyGetCamelCase } from '@/utilities'

export function storeDispatchKeyGet(
  apiClientStoreModuleKey: string,
  storeStateKeys: string[],
  apiClientMethodKey: APIClientMethodKeyT
): string {
  return [
    keyGetCamelCase([apiClientStoreModuleKey]),
    keyGetCamelCase([...storeStateKeys, apiClientMethodKey])
  ].join('/')
}
