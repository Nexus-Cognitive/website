import { snakeCase } from 'lodash'

export function mutationMethodKeyGet(...keys: string[]): string {
  return [...keys, 'set'].map((key) => snakeCase(key).toUpperCase()).join('_')
}
