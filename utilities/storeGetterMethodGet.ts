import type { StoreStateI } from '@/interfaces'

export function storeGetterMethodGet(
  storeState: StoreStateI,
  storeStateKey: string
): () => void {
  return () => storeState[storeStateKey]
}
