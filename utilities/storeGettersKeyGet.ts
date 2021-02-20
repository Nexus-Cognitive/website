import { keyGetCamelCase } from '@/utilities'

export function storeGettersKeyGet(
  storeStateKeys: string[]
): string {
  return keyGetCamelCase(storeStateKeys)
}
