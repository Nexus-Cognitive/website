import type { StoreStateInstanceT, StoreMutationMethodT } from '@/types'
import objectPath from 'object-path'

export function storeMutationMethodGet(
  stateInstanceKeys: string[]
): StoreMutationMethodT {
  return (
    stateInstance: StoreStateInstanceT,
    stateInstanceValue: any
  ): void => {
    objectPath.set(stateInstance, stateInstanceKeys, stateInstanceValue)
  }
}
