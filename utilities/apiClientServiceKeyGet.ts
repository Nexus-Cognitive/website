import { keyGetCamelCase } from '@/utilities'

export function apiClientServiceKeyGet(
  storeStateInstanceKeys: string[]
): string {
  return keyGetCamelCase(storeStateInstanceKeys)
}
