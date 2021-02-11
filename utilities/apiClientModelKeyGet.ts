import { camelCase } from 'lodash'

export function apiClientModelKeyGet(apiClientModelKey: string): string {
  return camelCase(apiClientModelKey)
}
