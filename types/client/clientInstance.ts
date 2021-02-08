import type { ClientMethodT, ClientMethodKeyT } from '@/types'

export type ClientInstanceT = {
  [index in ClientMethodKeyT]: ClientMethodT
}
