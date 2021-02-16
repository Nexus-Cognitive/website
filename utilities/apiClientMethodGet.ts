import type {
  APIClientMethodT,
  APIClientInstanceMethodKeyT,
  IDT
} from '@/types'
import { APIClientS } from '@/services'

export function apiClientMethodGet(
  apiClientStoreModuleKey: string,
  apiClientInstanceMethodKey: APIClientInstanceMethodKeyT
): APIClientMethodT {
  return (paths: IDT[], data?: object, params?: object) =>
    APIClientS({
      method: apiClientInstanceMethodKey,
      url: [apiClientStoreModuleKey, ...paths].join('/'),
      data,
      params
    })
}
