import * as Services from '@/services'
import * as Types from '@/types'

export function map(moduleKey: string, model: object): Types.Client.Service {
  const _service: Types.Client.Service = {}

  for (const modelKey in model) {
    const _modelKey = Services.Utilities.Client.moduleModelKeyGet(modelKey)

    _service[_modelKey] = Services.Utilities.Client.clientGet(
      moduleKey,
      _modelKey
    )
  }

  return _service
}
