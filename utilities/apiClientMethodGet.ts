import { APIClientMethodT, APIClientMethodKeyT, IDT } from '@/types'
import { APIClientS } from '@/services'

export function apiClientMethodGet(
  apiClientMethodKey: APIClientMethodKeyT
): APIClientMethodT {
  return (paths: IDT[], data?: object, params?: object) =>
    APIClientS({
      method: apiClientMethodKey,
      url: paths.join('/'),
      data,
      params
    })
}
