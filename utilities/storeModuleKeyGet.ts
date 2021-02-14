import { camelCase } from 'lodash'

export function storeModuleKeyGet(storeModuleKey: string): string {
  return camelCase(storeModuleKey)
}
