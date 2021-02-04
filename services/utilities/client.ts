import { AxiosPromise } from 'axios'
import { camelCase, capitalize } from 'lodash'
import { ClientS } from '@/services'
import { MethodT, ServiceT } from '@/types'
import { ClientMethodI, ClientInstanceI } from '@/interfaces'

export const METHOD_KEYS: MethodT[] = ['DELETE', 'GET', 'PATCH', 'POST', 'PUT']

export function moduleKeyGet(moduleKey: string): string {
  return capitalize(camelCase(moduleKey))
}

export function moduleMethodKeyGet(methodKey: MethodT): MethodT {
  return <MethodT>methodKey.toUpperCase()
}

export function moduleModelKeyGet(modelKey: string): string {
  return camelCase(modelKey)
}

function methodGet(
  moduleKey: string,
  modelKey: string,
  methodKey: MethodT
): ClientMethodI {
  return (id?: number, data?: object, params?: object): AxiosPromise => {
    const paths: (number | string)[] = [moduleKey]

    if (id) {
      paths.push(id)
    }

    paths.push(modelKey)

    return ClientS({
      method: methodKey,
      url: paths.join('/'),
      data,
      params
    })
  }
}

function clientGet(moduleKey: string, modelKey: string): ClientInstanceI {
  let _client!: ClientInstanceI

  for (const methodKey of METHOD_KEYS) {
    _client[methodKey] = methodGet(moduleKey, modelKey, methodKey)
  }

  return _client
}

export function map(moduleKey: string, model: object): ServiceT {
  const _service: ServiceT = {}

  for (const modelKey in model) {
    const _modelKey = moduleModelKeyGet(modelKey)

    _service[_modelKey] = clientGet(moduleKey, _modelKey)
  }

  return _service
}
