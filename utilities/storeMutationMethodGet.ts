import type { StoreMutationMethodT } from '@/types'
import type { StoreStateInstanceI } from '@/interfaces'

function set(
  storeStateInstance: StoreStateInstanceI,
  storeStateInstanceKeys: string[],
  storeStateInstanceValue: any
): any {
  storeStateInstance[storeStateInstanceKeys[0]] =
    storeStateInstanceKeys.length > 1
      ? set(
          storeStateInstance,
          storeStateInstanceKeys.slice(1),
          storeStateInstanceValue
        )
      : storeStateInstanceValue

  return storeStateInstance
}

export function storeMutationMethodGet(
  storeStateInstanceKeys: string[]
): StoreMutationMethodT {
  return (
    storeStateInstance: StoreStateInstanceI,
    storeStateInstanceValue: any
  ): void => {
    set(storeStateInstance, storeStateInstanceKeys, storeStateInstanceValue)
  }
}
