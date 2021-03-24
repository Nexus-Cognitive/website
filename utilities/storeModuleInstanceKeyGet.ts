import { camelCase } from 'lodash'

export function storeModuleInstanceKeyGet(storeModuleKey: string): string {
  return camelCase(storeModuleKey)
}
