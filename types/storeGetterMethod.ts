import { StateInstanceT } from '@/types'

export type StoreGetterMethodT = (
  stateInstance: StateInstanceT,
  stateKey: string
) => void
