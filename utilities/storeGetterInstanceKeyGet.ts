import { keyGetCamelCase } from '@/utilities'

export function storeGetterInstanceKeyGet(storeGetterKeys: string[]): string {
  return keyGetCamelCase(storeGetterKeys)
}
