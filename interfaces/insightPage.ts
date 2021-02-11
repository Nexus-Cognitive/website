import type { InsightBaseI, ImageBaseI } from '@/interfaces'

export interface InsightPageI extends InsightBaseI {
  body: string
  images: ImageBaseI[]
  introduction: string
}
