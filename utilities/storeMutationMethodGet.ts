import objectPath from 'object-path'
import { StateInstanceT, StoreMutationMethodT } from '@/types'

export function storeMutationMethodGet(
  stateInstanceKeys: string[]
): StoreMutationMethodT {
  return (stateInstance: StateInstanceT, stateInstanceValue: any): void => {
    objectPath.set(stateInstance, stateInstanceKeys, stateInstanceValue)
  }
}
