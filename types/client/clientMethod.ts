import { AxiosPromise } from 'axios'

export type ClientMethodT = (
  id?: number,
  data?: object,
  params?: object
) => AxiosPromise
