import type { StoreStateInstanceT, StoreMutationInstanceT } from '@/types'
import {
  storeMutationInstanceKeyGet,
  storeMutationMethodGet,
  valueIsObject
} from '@/utilities'

export function storeMutationInstanceGet(
  stateInstance: StoreStateInstanceT,
  stateInstanceKeys: string[] = [],
  storeMutationInstance: StoreMutationInstanceT = {}
): StoreMutationInstanceT {
  for (const stateInstanceKey in stateInstance) {
    const _stateInstanceKeys = [...stateInstanceKeys, stateInstanceKey]
    const stateInstanceValue = stateInstance[stateInstanceKey]
    const storeMutationKey = storeMutationInstanceKeyGet(_stateInstanceKeys)

    storeMutationInstance[storeMutationKey] = storeMutationMethodGet(
      _stateInstanceKeys
    )

    if (valueIsObject(stateInstanceValue)) {
      storeMutationInstance = storeMutationInstanceGet(
        stateInstanceValue,
        _stateInstanceKeys,
        storeMutationInstance
      )
    }
  }

  return storeMutationInstance
}
