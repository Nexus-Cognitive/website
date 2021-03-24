import type { StoreGetterInstanceT } from '@/types'
import type { StoreStateInstanceI } from '@/interfaces'
import {
  storeGetterInstanceKeyGet,
  storeGetterMethodGet,
  valueIsObject
} from '@/utilities'

export function storeGetterInstanceGet(
  storeStateInstance: StoreStateInstanceI,
  storeStateInstanceKeys: string[] = [],
  storeGetterInstance: StoreGetterInstanceT = {}
): StoreGetterInstanceT {
  for (const storeStateInstanceKey in storeStateInstance) {
    const _storeStateInstanceKeys = [
      ...storeStateInstanceKeys,
      storeStateInstanceKey
    ]
    const storeStateInstanceValue = storeStateInstance[storeStateInstanceKey]

    storeGetterInstance[
      storeGetterInstanceKeyGet(_storeStateInstanceKeys)
    ] = storeGetterMethodGet(storeStateInstance, storeStateInstanceKey)

    if (valueIsObject(storeStateInstanceValue)) {
      storeGetterInstance = storeGetterInstanceGet(
        storeStateInstanceValue,
        _storeStateInstanceKeys,
        storeGetterInstance
      )
    }
  }

  return storeGetterInstance
}
