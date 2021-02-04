import { AxiosPromise } from 'axios'

export interface Method {
  (id?: number, data?: object, params?: object): AxiosPromise
}
