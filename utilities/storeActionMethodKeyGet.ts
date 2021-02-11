import { camelCase, capitalize } from 'lodash'
import type { APIClientMethodKeyT } from '@/types'

export function storeActionMethodKeyGet(
  stateKey: string,
  apiClientMethodKey: APIClientMethodKeyT
): string {
  return camelCase(stateKey) + capitalize(apiClientMethodKey)
}
