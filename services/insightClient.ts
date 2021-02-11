import type { APIClientServiceT } from '@/types'
import { InsightClientM } from '@/models'
import { apiClientMap } from '@/utilities'

export const InsightClientS: APIClientServiceT = apiClientMap(
  InsightClientM,
  'insights'
)
