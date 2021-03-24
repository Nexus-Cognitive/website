import type { InsightPageI, ResourceBaseI } from '@/interfaces'

export interface SeriesBaseI extends ResourceBaseI {
  insights: InsightPageI[]
  description: string
  subtitle: string
}
