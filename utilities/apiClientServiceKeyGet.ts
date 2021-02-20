import { keyGetCamelCase } from '@/utilities'

export function apiClientServiceKeyGet(
  apiClientModelKeys: string[]
): string {
  return keyGetCamelCase(apiClientModelKeys)
}
