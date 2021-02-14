import { StateInstanceT, StoreMutationMethodT } from '@/types'

export function storeMutationMethodGet(stateKey: string): StoreMutationMethodT {
  return (state: StateInstanceT, value: any) => (state[stateKey] = value)
}
