import type { GetterInstanceT, StateInstanceT } from '@/types'
import { storeGetterKeyGet, storeGetterMethodGet } from '@/utilities'

export function storeGetterMap(
  state: StateInstanceT,
  getters: GetterInstanceT = {},
  keys: string[] = []
): GetterInstanceT {
  for (const stateKey in state) {
    const _keys = [...keys, stateKey]
    const stateValue = state[stateKey]

    getters[storeGetterKeyGet(_keys)] = storeGetterMethodGet(state, stateKey)

    if (stateValue instanceof Object && !Array.isArray(stateValue)) {
      getters = storeGetterMap(stateValue, getters, _keys)
    }
  }

  return getters
}
