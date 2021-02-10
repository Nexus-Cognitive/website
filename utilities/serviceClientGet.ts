import type { ClientInstanceT } from '@/types'
import { serviceClientMethodGet, SERVICE_CLIENT_METHOD_KEYS } from '@/utilities'

export function serviceClientGet(
  moduleKey: string,
  clientModelKey: string
): ClientInstanceT {
  const _client: any = {}

  for (const methodKey of SERVICE_CLIENT_METHOD_KEYS) {
    _client[methodKey] = serviceClientMethodGet(
      moduleKey,
      clientModelKey,
      methodKey
    )
  }

  return <ClientInstanceT>_client
}
