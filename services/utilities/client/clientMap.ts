import type { ClientServiceT } from '@/types'
import { clientGet, clientModuleModelKeyGet } from '@/services'

export function clientServiceMap(
  clientModel: object,
  moduleKey: string
): ClientServiceT {
  const _service: ClientServiceT = {}

  for (const clientModelKey in clientModel) {
    const _clientModelKey = clientModuleModelKeyGet(clientModelKey)

    _service[_clientModelKey] = clientGet(moduleKey, _clientModelKey)
  }

  return _service
}
