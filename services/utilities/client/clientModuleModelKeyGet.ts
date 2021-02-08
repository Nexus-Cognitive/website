import { camelCase } from 'lodash'

export function clientModuleModelKeyGet(modelKey: string): string {
  return camelCase(modelKey)
}
