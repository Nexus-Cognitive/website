import type { StoreMutationMethodT } from '@/types'

export type StoreMutationInstanceT = {
  [index: string]: StoreMutationMethodT
}
