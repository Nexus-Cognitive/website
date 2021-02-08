import type { ClientServiceT } from '@/types'
import type { StoreInstanceI } from '@/interfaces'
import { actionMap, getterMap, mutationMap, stateMap } from '@/store'

export function storeMap(
  clientModel: object,
  clientService: ClientServiceT
): StoreInstanceI {
  const state = stateMap(clientModel)

  return {
    state,
    mutations: mutationMap(state),
    actions: actionMap(clientService, state),
    getters: getterMap(state)
  }
}
