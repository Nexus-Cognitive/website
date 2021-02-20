import type { APIClientServiceT } from '@/types'
import { InsightClientM } from '@/models'
import { apiClientServiceGet } from '@/utilities'

export const InsightClientS: APIClientServiceT = apiClientServiceGet(
  InsightClientM
)
