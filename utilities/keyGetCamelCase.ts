import { camelCase, startCase } from 'lodash'

export function keyGetCamelCase(keys: string[]): string {
  return camelCase(
    keys.map((key) => startCase(key).split(' ').join('')).join('')
  )
}
