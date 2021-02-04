import { AxiosPromise } from 'axios'
import * as Interfaces from '@/interfaces'
import * as Services from '@/services'
import * as Types from '@/types'

export function methodGet(
  moduleKey: string,
  modelKey: string,
  methodKey: Types.ClientMethod
): Interfaces.ClientMethod {
  return (id?: number, data?: object, params?: object): AxiosPromise => {
    const paths: (number | string)[] = [moduleKey]

    if (id) {
      paths.push(id)
    }

    paths.push(modelKey)

    return Services.Modules.Client.Instance({
      method: methodKey,
      url: paths.join('/'),
      data,
      params
    })
  }
}
