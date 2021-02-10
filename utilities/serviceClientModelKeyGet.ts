import { camelCase } from 'lodash'

export function serviceClientModelKeyGet(clientModelKey: string): string {
  return camelCase(clientModelKey)
}
