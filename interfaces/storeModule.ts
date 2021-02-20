import type {
  StoreActionsT,
  StoreGettersT,
  StoreMutationsT,
  StoreStateMethodT
} from '@/types'

export interface StoreModuleI {
  state: StoreStateMethodT
  mutations: StoreMutationsT
  actions: StoreActionsT
  getters: StoreGettersT
}
