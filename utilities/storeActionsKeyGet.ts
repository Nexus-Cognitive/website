import type { APIClientMethodKeyT } from '@/types'
import { keyGetCamelCase } from '@/utilities'

export function storeActionsKeyGet(
  storeStateKeys: string[],
  apiClientMethodKey: APIClientMethodKeyT
): string {
  return keyGetCamelCase([
    ...storeStateKeys,
    apiClientMethodKey
  ])
}
