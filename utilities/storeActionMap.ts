import type { ActionInstanceT, ClientServiceT, StateInstanceT } from '@/types'
import {
  SERVICE_CLIENT_METHOD_KEYS,
  storeActionMethodGet,
  storeActionMethodKeyGet
} from '@/utilities'

export function storeActionMap(
  clientService: ClientServiceT,
  state: StateInstanceT
): ActionInstanceT {
  const _actions: ActionInstanceT = {}

  for (const stateKey in state) {
    for (const clientMethodKey of SERVICE_CLIENT_METHOD_KEYS) {
      _actions[
        storeActionMethodKeyGet(stateKey, clientMethodKey)
      ] = storeActionMethodGet(clientService, stateKey, clientMethodKey)
    }
  }

  return _actions
}
