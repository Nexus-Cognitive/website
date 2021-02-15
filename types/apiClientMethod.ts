import type { AxiosPromise } from 'axios'
import type { IDT } from '@/types'

export type APIClientMethodT = (
  paths: IDT[],
  data?: object,
  params?: object
) => AxiosPromise
