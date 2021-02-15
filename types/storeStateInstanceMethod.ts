import type { APIClientModelT } from '@/types'
import type { StoreStateInstanceI } from '@/interfaces'

export type StoreStateInstanceMethodT = {
  (apiClientModel: APIClientModelT): StoreStateInstanceI
}
