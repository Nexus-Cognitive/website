import type { InsightClientI } from '@/interfaces'
import { InsightBaseM, InsightPageM } from '@/models'

export const InsightClientM: InsightClientI = {
  '': [InsightBaseM],
  page: InsightPageM
}
