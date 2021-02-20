import { keyGetSnakeCase } from '@/utilities'

export function storeMutationsKeyGet(
  storeStateKeys: string[]
): string {
  return keyGetSnakeCase([...storeStateKeys, 'set'])
}
