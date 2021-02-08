import type {
  ActionInstanceT,
  GetterInstanceT,
  MutationInstanceT,
  StateInstanceT
} from '@/types'

export interface StoreInstanceI {
  state: StateInstanceT
  mutations: MutationInstanceT
  actions: ActionInstanceT
  getters: GetterInstanceT
}
