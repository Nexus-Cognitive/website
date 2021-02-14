import type { APIClientModelT } from '@/types'
import type { StoreStateInstanceI } from '@/interfaces'

export function storeStateMap(
  apiClientModel: APIClientModelT
): () => StoreStateInstanceI {
  return () => ({
    acting: false,
    alert: '',
    ...apiClientModel
  })
}
