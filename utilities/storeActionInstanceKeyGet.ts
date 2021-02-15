import type { APIClientMethodKeyT } from '@/types'
import { keyGetCamelCase } from '@/utilities'

export function storeActionInstanceKeyGet(
  stateInstanceKeys: string[],
  apiClientMethodKey: APIClientMethodKeyT
): string {
  return keyGetCamelCase([...stateInstanceKeys, apiClientMethodKey])
}
