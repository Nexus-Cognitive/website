import type { StoreStateInstanceT } from '@/types'

export type StoreGetterMethodT = (
  stateInstance: StoreStateInstanceT,
  stateKey: string
) => void
