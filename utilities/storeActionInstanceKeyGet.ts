import type { APIClientInstanceMethodKeyT } from '@/types'
import { keyGetCamelCase } from '@/utilities'

export function storeActionInstanceKeyGet(
  storeStateInstanceKeys: string[],
  apiClientInstanceMethodKey: APIClientInstanceMethodKeyT
): string {
  return keyGetCamelCase([
    ...storeStateInstanceKeys,
    apiClientInstanceMethodKey
  ])
}
