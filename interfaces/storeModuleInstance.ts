import type {
  StoreActionInstanceT,
  StoreGetterInstanceT,
  StoreMutationInstanceT,
  StoreStateInstanceMethodT
} from '@/types'

export interface StoreModuleInstanceI {
  state: StoreStateInstanceMethodT
  mutations: StoreMutationInstanceT
  actions: StoreActionInstanceT
  getters: StoreGetterInstanceT
}
