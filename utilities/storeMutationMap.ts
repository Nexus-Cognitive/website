import type { MutationInstanceT, StateInstanceT } from '@/types'
import {
  storeMutationMethodChildGet,
  storeMutationMethodGet,
  storeMutationMethodKeyGet
} from '@/utilities'

export function storeMutationMap(state: StateInstanceT): MutationInstanceT {
  const mutations: MutationInstanceT = {}

  for (const stateKey in state) {
    const methodKey = storeMutationMethodKeyGet(stateKey)
    const stateValue = state[stateKey]

    mutations[methodKey] = storeMutationMethodGet(stateKey)

    if (typeof stateValue === 'object') {
      for (const stateValueKey in stateValue) {
        mutations[
          storeMutationMethodKeyGet(stateKey, stateValueKey)
        ] = storeMutationMethodChildGet(
          stateKey,
          stateValueKey,
          mutations,
          methodKey
        )
      }
    }
  }

  return mutations
}
