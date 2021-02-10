import type { ClientServiceT } from '@/types'
import { serviceClientGet, serviceClientModelKeyGet } from '@/utilities'

export function serviceClientMap(
  clientModel: object,
  moduleKey: string
): ClientServiceT {
  const _clientService: ClientServiceT = {}

  for (const clientModelKey in clientModel) {
    const _clientModelKey = serviceClientModelKeyGet(clientModelKey)

    _clientService[_clientModelKey] = serviceClientGet(
      moduleKey,
      _clientModelKey
    )
  }

  return _clientService
}
