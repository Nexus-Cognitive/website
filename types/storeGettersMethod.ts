import type { StoreStateI } from '@/interfaces'

export type StoreGetterMethodT = (
  storeState: StoreStateI,
  storeStateKey: string
) => void
