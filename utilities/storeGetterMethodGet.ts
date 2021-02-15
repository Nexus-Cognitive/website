import type { StoreStateInstanceT } from '@/types'

export function storeGetterMethodGet(
  state: StoreStateInstanceT,
  stateKey: string
): () => void {
  return () => state[stateKey]
}
