import { keyGetCamelCase } from '@/utilities'

export function storeGetterInstanceKeyGet(
  storeStateInstanceKeys: string[]
): string {
  return keyGetCamelCase(storeStateInstanceKeys)
}
