import { snakeCase } from 'lodash'

export function storeMutationMethodKeyGet(...keys: string[]): string {
  return [...keys, 'set'].map((key) => snakeCase(key).toUpperCase()).join('_')
}
