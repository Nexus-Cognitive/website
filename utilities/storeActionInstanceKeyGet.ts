import { keyGetCamelCase } from './keyGetCamelCase'
import { APIClientMethodKeyT } from '~/types'

export function storeActionInstanceKeyGet(
  stateInstanceKeys: string[],
  apiClientMethodKey: APIClientMethodKeyT
): string {
  return keyGetCamelCase([...stateInstanceKeys, apiClientMethodKey])
}
