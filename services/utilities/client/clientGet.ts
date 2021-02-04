import * as Interfaces from '@/interfaces'
import * as Services from '@/services'

export function clientGet(
  moduleKey: string,
  modelKey: string
): Interfaces.Client.Instance {
  let _client!: Interfaces.Client.Instance

  for (const methodKey of Services.Utilities.Client.METHOD_KEYS) {
    _client[methodKey] = Services.Utilities.Client.methodGet(
      moduleKey,
      modelKey,
      methodKey
    )
  }

  return _client
}
