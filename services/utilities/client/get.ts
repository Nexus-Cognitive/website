import type { ClientInstanceI } from '@/interfaces'
import { CLIENT_METHOD_KEYS, clientMethodGet } from '@/services'

export function clientGet(
  moduleKey: string,
  modelKey: string
): ClientInstanceI {
  const _client: ClientInstanceI = {}

  for (const methodKey of CLIENT_METHOD_KEYS) {
    _client[methodKey] = clientMethodGet(moduleKey, modelKey, methodKey)
  }

  return _client
}
