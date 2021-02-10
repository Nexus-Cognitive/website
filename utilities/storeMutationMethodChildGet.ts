import type {
  MutationInstanceT,
  MutationMethodT,
  StateInstanceT
} from '@/types'

export function storeMutationMethodChildGet(
  stateKey: string,
  stateValueKey: string,
  mutations: MutationInstanceT,
  mutationKey: string
): MutationMethodT {
  return (state: StateInstanceT, value: any) => {
    const stateValue = state[stateKey]

    stateValue[stateValueKey] = value

    mutations[mutationKey](state, stateValue)
  }
}
