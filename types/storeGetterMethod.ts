import type { StoreStateInstanceI } from '@/interfaces'

export type StoreGetterMethodT = (
  stateInstance: StoreStateInstanceI,
  stateInstanceKey: string
) => void
