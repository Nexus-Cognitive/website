import type { MutationMethodT, StateInstanceT } from '@/types'

export function mutationMethodGet(stateKey: string): MutationMethodT {
  return (state: StateInstanceT, value: any) => (state[stateKey] = value)
}
