import type { StoreActionPayloadI, StoreContextI } from '@/interfaces'

export type StoreActionMethodT = (
  storeInstance: StoreContextI,
  actionPayload: StoreActionPayloadI
) => Promise<void>
