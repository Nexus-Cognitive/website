import { StateInstanceT } from '../state'

export type MutationMethodT = (state: StateInstanceT, stateValue: any) => void
