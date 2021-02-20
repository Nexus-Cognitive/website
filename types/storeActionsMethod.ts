import type { StoreActionPayloadI, StoreContextI } from '@/interfaces'

export type StoreActionsMethodT = (
  storeContext: StoreContextI,
  storeActionPayload: StoreActionPayloadI
) => Promise<void>
