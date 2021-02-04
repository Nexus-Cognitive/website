import { camelCase } from 'lodash'

export function moduleModelKeyGet(modelKey: string): string {
  return camelCase(modelKey)
}
