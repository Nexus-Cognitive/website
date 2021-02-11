import { AxiosPromise } from 'axios'
import type { APIClientMethodT, APIClientMethodKeyT } from '@/types'
import { APIClientS } from '@/services'

export function apiClientMethodGet(
  moduleKey: string,
  apiClientModelKey: string,
  methodKey: APIClientMethodKeyT
): APIClientMethodT {
  return (id?: number, data?: object, params?: object): AxiosPromise => {
    const paths: (number | string)[] = [moduleKey]

    if (id) {
      paths.push(id)
    }

    paths.push(apiClientModelKey)

    return APIClientS({
      method: methodKey,
      url: paths.join('/'),
      data,
      params
    })
  }
}
