import type { GetterInstanceT, StateInstanceT } from '@/types'
import { getterKeyGet, getterMethodGet } from '@/store'

export function getterMap(
  state: StateInstanceT,
  getters: GetterInstanceT = {},
  keys: string[] = []
): GetterInstanceT {
  for (const stateKey in state) {
    const _keys = [...keys, stateKey]
    const stateValue = state[stateKey]

    getters[getterKeyGet(_keys)] = getterMethodGet(state, stateKey)

    if (stateValue instanceof Object && !Array.isArray(stateValue)) {
      getters = getterMap(stateValue, getters, _keys)
    }
  }

  return getters
}
