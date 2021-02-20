import type { StoreStateI } from '@/interfaces'

export type StoreMutationsMethodT = (
  storeState: StoreStateI,
  storeStateKey: string
) => any
