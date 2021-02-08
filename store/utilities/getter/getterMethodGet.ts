import type { StateInstanceT } from '@/types'

export function getterMethodGet(
  state: StateInstanceT,
  stateKey: string
): () => void {
  return () => state[stateKey]
}
