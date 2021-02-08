import type { StoreCommitT, StoreDispatchT } from '@/types'

export interface StoreContextI {
  commit: StoreCommitT
  dispatch: StoreDispatchT
}
