import type { ClientMethodT } from '@/types'

export function clientModuleMethodKeyGet(
  methodKey: ClientMethodT
): ClientMethodT {
  return <ClientMethodT>methodKey.toUpperCase()
}
