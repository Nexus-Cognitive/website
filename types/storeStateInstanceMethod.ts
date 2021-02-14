import { StoreStateInstanceI } from '@/interfaces'
import { APIClientModelT } from '@/types'

export type StoreStateInstanceMethodT = {
  (apiClientModel: APIClientModelT): StoreStateInstanceI
}
