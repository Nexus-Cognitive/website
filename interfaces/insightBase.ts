import type { ResourceBaseI } from '@/interfaces'

export interface InsightBaseI extends ResourceBaseI {
  authors: string[]
  categories: string[]
  description: string
  feature: string
  subtitle: string
}
