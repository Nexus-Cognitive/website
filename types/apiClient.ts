import type { APIClientMethodT, APIClientMethodKeyT } from '@/types'

export type APIClientT = {
  [index in APIClientMethodKeyT]: APIClientMethodT
}
