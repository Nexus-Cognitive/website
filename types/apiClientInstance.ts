import type { APIClientMethodT, APIClientInstanceMethodKeyT } from '@/types'

export type APIClientInstanceT = {
  [index in APIClientInstanceMethodKeyT]: APIClientMethodT
}
