import { AxiosPromise } from 'axios'
import { IDT } from '@/types'

export type APIClientMethodT = (
  paths: IDT[],
  data?: object,
  params?: object
) => AxiosPromise
