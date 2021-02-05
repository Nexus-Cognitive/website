import type { ClientServiceT } from '@/types'
import { clientGet, clientModuleModelKeyGet } from '@/services'

export function clientMap(moduleKey: string, model: object): ClientServiceT {
  const _service: ClientServiceT = {}

  for (const modelKey in model) {
    const _modelKey = clientModuleModelKeyGet(modelKey)

    _service[_modelKey] = clientGet(moduleKey, _modelKey)
  }

  return _service
}
