import type { PaginationBaseI, StoreStateAlertI } from '@/interfaces'

export interface StoreStateI {
  acting: boolean
  alert: StoreStateAlertI
  pagination: PaginationBaseI
  [index: string]: any
}
