import { AxiosPromise } from 'axios'

export interface ClientMethodI {
  (id?: number, data?: object, params?: object): AxiosPromise
}
