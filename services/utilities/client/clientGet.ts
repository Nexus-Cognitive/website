import type { ClientInstanceT } from '@/types'
import { CLIENT_METHOD_KEYS, clientMethodGet } from '@/services'

export function clientGet(
  moduleKey: string,
  modelKey: string
): ClientInstanceT {
  const _client: any = {}

  for (const methodKey of CLIENT_METHOD_KEYS) {
    _client[methodKey] = clientMethodGet(moduleKey, modelKey, methodKey)
  }

  return <ClientInstanceT>_client
}
