import { AxiosPromise } from 'axios'
import type { ClientMethodT, ClientMethodKeyT } from '@/types'
import { ClientInstanceS } from '@/services'

export function clientMethodGet(
  moduleKey: string,
  modelKey: string,
  methodKey: ClientMethodKeyT
): ClientMethodT {
  return (id?: number, data?: object, params?: object): AxiosPromise => {
    const paths: (number | string)[] = [moduleKey]

    if (id) {
      paths.push(id)
    }

    paths.push(modelKey)

    return ClientInstanceS({
      method: methodKey,
      url: paths.join('/'),
      data,
      params
    })
  }
}
