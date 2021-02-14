import { StateInstanceT, StoreMutationInstanceT } from '@/types'
import {
  storeMutationInstanceKeyGet,
  storeMutationMethodGet,
  valueIsObject
} from '@/utilities'

export function storeMutationInstanceGet(
  stateInstance: StateInstanceT,
  stateInstanceKeys: string[] = [],
  storeMutationInstance: StoreMutationInstanceT = {}
): StoreMutationInstanceT {
  for (const stateKey in stateInstance) {
    const _stateInstanceKeys = [...stateInstanceKeys, stateKey]
    const stateInstanceValue = stateInstance[stateKey]
    const storeMutationKey = storeMutationInstanceKeyGet(_stateInstanceKeys)

    storeMutationInstance[storeMutationKey] = storeMutationMethodGet(stateKey)

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
