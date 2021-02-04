import * as Interfaces from '@/interfaces'
import * as Services from '@/services'

export function clientGet(
  moduleKey: string,
  modelKey: string
): Interfaces.ClientInstance {
  let _client!: Interfaces.ClientInstance

  for (const methodKey of Services.Utilities.Client.METHOD_KEYS) {
    _client[methodKey] = Services.Utilities.Client.methodGet(
      moduleKey,
      modelKey,
      methodKey
    )
  }

  return _client
}
