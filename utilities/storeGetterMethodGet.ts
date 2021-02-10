import type { StateInstanceT } from '@/types'

export function storeGetterMethodGet(
  state: StateInstanceT,
  stateKey: string
): () => void {
  return () => state[stateKey]
}
