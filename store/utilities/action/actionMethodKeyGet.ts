import { camelCase, capitalize } from 'lodash'
import { ClientMethodKeyT } from '@/types'

export function actionMethodKeyGet(
  stateKey: string,
  clientMethodKey: ClientMethodKeyT
): string {
  return camelCase(stateKey) + capitalize(clientMethodKey)
}
