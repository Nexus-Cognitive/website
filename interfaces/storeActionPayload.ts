import { AxiosResponse } from 'axios'

export interface StoreActionPayloadI {
  id?: number
  data?: object
  params?: object
  resolve?: (response: AxiosResponse) => any
  silent?: boolean
}
