import type { StoreGetterMethodT } from '@/types'

export type StoreGetterInstanceT = {
  [index: string]: StoreGetterMethodT
}
