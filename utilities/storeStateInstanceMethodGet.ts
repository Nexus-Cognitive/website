import type { APIClientModelT, StoreStateInstanceMethodT } from '@/types'

export function storeStateInstanceMethodGet(
  apiClientModel: APIClientModelT
): StoreStateInstanceMethodT {
  return () => ({
    acting: false,
    alert: {
      message: '',
      success: true
    },
    ...apiClientModel
  })
}
