import { keyGetCamelCase } from '@/utilities'

export function apiClientServiceKeyGet(apiClientServiceKeys: string[]): string {
  return keyGetCamelCase(apiClientServiceKeys)
}
