import { camelCase, capitalize } from 'lodash'

export function moduleKeyGet(moduleKey: string): string {
  return capitalize(camelCase(moduleKey))
}
