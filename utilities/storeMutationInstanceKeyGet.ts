import { keyGetSnakeCase } from '@/utilities'

export function storeMutationInstanceKeyGet(
  storeMutationKeys: string[]
): string {
  return keyGetSnakeCase([...storeMutationKeys, 'set'])
}
