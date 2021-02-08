import type { MutationInstanceT, StateInstanceT } from '@/types'
import {
  mutationMethodGet,
  mutationMethodChildGet,
  mutationMethodKeyGet
} from '@/store'

export function mutationMap(state: StateInstanceT): MutationInstanceT {
  const mutations: MutationInstanceT = {}

  for (const stateKey in state) {
    const mutationKey = mutationMethodKeyGet(stateKey)
    const stateValue = state[stateKey]

    mutations[mutationKey] = mutationMethodGet(stateKey)

    if (typeof stateValue === 'object') {
      for (const stateValueKey in stateValue) {
        mutations[
          mutationMethodKeyGet(stateKey, stateValueKey)
        ] = mutationMethodChildGet(
          stateKey,
          stateValueKey,
          mutations,
          mutationKey
        )
      }
    }
  }

  return mutations
}
