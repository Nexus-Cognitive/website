import type { APIClientMethodT, APIClientMethodKeyT, IDT } from '@/types'
import { APIClientS } from '@/services'

export function apiClientMethodGet(
  apiClientStoreModuleKey: string,
  apiClientMethodKey: APIClientMethodKeyT
): APIClientMethodT {
  return (paths: IDT[], data?: object, params?: object) =>
    APIClientS({
      method: apiClientMethodKey,
      url: [apiClientStoreModuleKey, ...paths].join('/'),
      data,
      params
    })
}
