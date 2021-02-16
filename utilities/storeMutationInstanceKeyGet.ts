import { keyGetSnakeCase } from '@/utilities'

export function storeMutationInstanceKeyGet(
  storeStateInstanceKeys: string[]
): string {
  return keyGetSnakeCase([...storeStateInstanceKeys, 'set'])
}
