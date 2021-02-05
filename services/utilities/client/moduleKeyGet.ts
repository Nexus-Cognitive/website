import { camelCase, capitalize } from 'lodash'

export function clientModuleKeyGet(moduleKey: string): string {
  return capitalize(camelCase(moduleKey))
}
