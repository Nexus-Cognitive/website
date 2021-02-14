import type { InsightClientI } from '@/interfaces'
import { InsightBaseM, InsightPageM } from '@/models'

export const InsightClientM: InsightClientI = {
  base: [InsightBaseM],
  page: InsightPageM
}
