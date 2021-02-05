import { AxiosPromise } from 'axios'
import type { ClientMethodT } from '@/types'
import type { ClientMethodI } from '@/interfaces'
import { ClientInstanceS } from '@/services'

export function clientMethodGet(
  moduleKey: string,
  modelKey: string,
  methodKey: ClientMethodT
): ClientMethodI {
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
