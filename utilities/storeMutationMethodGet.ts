import type { MutationMethodT, StateInstanceT } from '@/types'

export function storeMutationMethodGet(stateKey: string): MutationMethodT {
  return (state: StateInstanceT, value: any) => (state[stateKey] = value)
}
