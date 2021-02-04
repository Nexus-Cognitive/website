import { AxiosPromise } from 'axios'

export interface ClientMethod {
  (id?: number, data?: object, params?: object): AxiosPromise
}
