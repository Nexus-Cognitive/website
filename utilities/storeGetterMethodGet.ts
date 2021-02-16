import type { StoreStateInstanceI } from '@/interfaces'

export function storeGetterMethodGet(
  storeStateInstance: StoreStateInstanceI,
  storeStateInstanceKey: string
): () => void {
  return () => storeStateInstance[storeStateInstanceKey]
}
