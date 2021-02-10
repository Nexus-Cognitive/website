import { camelCase, capitalize } from 'lodash'
import type { ClientMethodKeyT } from '@/types'

export function storeActionMethodKeyGet(
  stateKey: string,
  clientMethodKey: ClientMethodKeyT
): string {
  return camelCase(stateKey) + capitalize(clientMethodKey)
}
