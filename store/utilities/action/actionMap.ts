import type { ActionInstanceT, ClientServiceT, StateInstanceT } from '@/types'
import { CLIENT_METHOD_KEYS } from '@/services'
import { actionMethodGet, actionMethodKeyGet } from '@/store'

export function actionMap(
  clientService: ClientServiceT,
  state: StateInstanceT
): ActionInstanceT {
  const _actions: ActionInstanceT = {}

  for (const stateKey in state) {
    for (const clientMethodKey of CLIENT_METHOD_KEYS) {
      _actions[actionMethodKeyGet(stateKey, clientMethodKey)] = actionMethodGet(
        clientService,
        stateKey,
        clientMethodKey
      )
    }
  }

  return _actions
}
