import type { StoreStateInstanceT, StoreGetterInstanceT } from '@/types'
import {
  storeGetterInstanceKeyGet,
  storeGetterMethodGet,
  valueIsObject
} from '@/utilities'

export function storeGetterInstanceGet(
  stateInstance: StoreStateInstanceT,
  stateInstanceKeys: string[] = [],
  storeGetterInstance: StoreGetterInstanceT = {}
): StoreGetterInstanceT {
  for (const stateKey in stateInstance) {
    const _stateInstanceKeys = [...stateInstanceKeys, stateKey]
    const stateValue = stateInstance[stateKey]

    storeGetterInstance[
      storeGetterInstanceKeyGet(_stateInstanceKeys)
    ] = storeGetterMethodGet(stateInstance, stateKey)

    if (valueIsObject(stateValue)) {
      storeGetterInstance = storeGetterInstanceGet(
        stateValue,
        _stateInstanceKeys,
        storeGetterInstance
      )
    }
  }

  return storeGetterInstance
}
