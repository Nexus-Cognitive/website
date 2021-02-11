import { AxiosPromise } from 'axios'

export type APIClientMethodT = (
  id?: number,
  data?: object,
  params?: object
) => AxiosPromise
