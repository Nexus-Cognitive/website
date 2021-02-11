import type { APIClientMethodT, APIClientMethodKeyT } from '@/types'

export type APIClientInstanceT = {
  [index in APIClientMethodKeyT]: APIClientMethodT
}
