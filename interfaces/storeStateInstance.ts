import type { StoreStateAlertI } from '@/interfaces'

export interface StoreStateInstanceI {
  acting: boolean
  alert: StoreStateAlertI
  [index: string]: any
}
