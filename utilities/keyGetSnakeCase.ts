import { snakeCase } from 'lodash'
import { keyGetCamelCase } from '@/utilities'

export function keyGetSnakeCase(keys: string[]): string {
  return snakeCase(keyGetCamelCase(keys))
}
