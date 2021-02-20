import type { StoreMutationsT } from '@/types'
import type { StoreStateI } from '@/interfaces'
import {
  storeMutationsKeyGet,
  storeMutationMethodGet,
  valueIsObject
} from '@/utilities'

export function storeMutationsGet(
  storeState: StoreStateI,
  storeStateKeys: string[] = [],
  storeMutations: StoreMutationsT = {}
): StoreMutationsT {
  for (const storeStateKey in storeState) {
    const _storeStateKeys = [
      ...storeStateKeys,
      storeStateKey
    ]
    const storeStateValue = storeState[storeStateKey]

    storeMutations[
      storeMutationsKeyGet(_storeStateKeys)
    ] = storeMutationMethodGet(_storeStateKeys)

    if (valueIsObject(storeStateValue)) {
      storeMutations = storeMutationsGet(
        storeStateValue,
        _storeStateKeys,
        storeMutations
      )
    }
  }

  return storeMutations
}
