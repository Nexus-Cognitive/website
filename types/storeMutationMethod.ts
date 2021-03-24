import type { StoreStateInstanceI } from '@/interfaces'

export type StoreMutationMethodT = (
  storeStateInstance: StoreStateInstanceI,
  storeStateInstanceKey: string
) => void
