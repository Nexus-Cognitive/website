import type { StoreStateInstanceT } from '@/types'

export type StoreMutationMethodT = (
  state: StoreStateInstanceT,
  stateKey: string
) => void
