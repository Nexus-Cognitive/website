import type { APIClientModelT, StoreStateMethodT } from '@/types'

export function storeStateMethodGet(
  apiClientModel: APIClientModelT
): StoreStateMethodT {
  return () => ({
    acting: false,
    alert: {
      message: '',
      success: true
    },
    modular_content: {},
    pagination: {
      count: 0,
      limit: 0,
      skip: 0,
      next_page: ''
    },
    ...apiClientModel
  })
}
