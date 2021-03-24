import type { StoreMutationInstanceT } from '@/types'
import type { StoreStateInstanceI } from '@/interfaces'
import {
  storeMutationInstanceKeyGet,
  storeMutationMethodGet,
  valueIsObject
} from '@/utilities'

export function storeMutationInstanceGet(
  storeStateInstance: StoreStateInstanceI,
  storeStateInstanceKeys: string[] = [],
  storeMutationInstance: StoreMutationInstanceT = {}
): StoreMutationInstanceT {
  for (const storeStateInstanceKey in storeStateInstance) {
    const _storeStateInstanceKeys = [
      ...storeStateInstanceKeys,
      storeStateInstanceKey
    ]
    const storeStateInstanceValue = storeStateInstance[storeStateInstanceKey]

    storeMutationInstance[
      storeMutationInstanceKeyGet(_storeStateInstanceKeys)
    ] = storeMutationMethodGet(_storeStateInstanceKeys)

    if (valueIsObject(storeStateInstanceValue)) {
      storeMutationInstance = storeMutationInstanceGet(
        storeStateInstanceValue,
        _storeStateInstanceKeys,
        storeMutationInstance
      )
    }
  }

  return storeMutationInstance
}
