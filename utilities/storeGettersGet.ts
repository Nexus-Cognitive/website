import type { StoreGettersT } from '@/types'
import type { StoreStateI } from '@/interfaces'
import {
  storeGettersKeyGet,
  storeGetterMethodGet,
  valueIsObject
} from '@/utilities'

export function storeGettersGet(
  storeState: StoreStateI,
  storeStateKeys: string[] = [],
  storeGetters: StoreGettersT = {}
): StoreGettersT {
  for (const storeStateKey in storeState) {
    const _storeStateKeys = [
      ...storeStateKeys,
      storeStateKey
    ]
    const storeStateValue = storeState[storeStateKey]

    storeGetters[
      storeGettersKeyGet(_storeStateKeys)
    ] = storeGetterMethodGet(storeState, storeStateKey)

    if (valueIsObject(storeStateValue)) {
      storeGetters = storeGettersGet(
        storeStateValue,
        _storeStateKeys,
        storeGetters
      )
    }
  }

  return storeGetters
}
