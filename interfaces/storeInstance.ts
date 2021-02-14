import type {
  StoreActionInstanceT,
  StoreGetterInstanceT,
  StoreMutationInstanceT,
  StoreStateInstanceMethodT
} from '@/types'

export interface StoreInstanceI {
  state: StoreStateInstanceMethodT
  mutations: StoreMutationInstanceT
  actions: StoreActionInstanceT
  getters: StoreGetterInstanceT
}
