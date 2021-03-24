import type { InsightBaseI, InsightPageI } from '@/interfaces'

export interface InsightClientI {
  base: InsightBaseI[]
  page: InsightPageI
}
