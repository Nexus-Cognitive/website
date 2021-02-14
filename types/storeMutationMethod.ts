import { StateInstanceT } from './stateInstance'

export type StoreMutationMethodT = (
  state: StateInstanceT,
  stateKey: string
) => void
