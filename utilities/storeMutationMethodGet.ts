import type { StoreMutationsMethodT } from '@/types'
import type { StoreStateI } from '@/interfaces'
import { objectSet } from '@/utilities'

export function storeMutationMethodGet(
  storeStateKeys: string[]
): StoreMutationsMethodT {
  return (
    storeState: StoreStateI,
    storeStateValue: any
  ): any => {
    storeState = objectSet(
      storeState,
      storeStateKeys,
      storeStateValue
    )

    return storeState
  }
}
