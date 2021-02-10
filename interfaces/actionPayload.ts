import { AxiosResponse } from 'axios'

export interface ActionPayloadI {
  id?: number
  data?: object
  params?: object
  resolve?: (response: AxiosResponse) => any
  silent?: boolean
}
