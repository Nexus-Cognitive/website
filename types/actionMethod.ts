import type { ActionPayloadI, StoreContextI } from '@/interfaces'

export type ActionMethodT = (
  storeInstance: StoreContextI,
  actionPayload: ActionPayloadI
) => Promise<void>
