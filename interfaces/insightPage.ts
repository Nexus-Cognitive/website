import type { InsightBaseI } from '@/interfaces'

export interface InsightPageI extends InsightBaseI {
  body: string
  images: string[]
  introduction: string
}
