import type { ResourceBaseI } from '@/interfaces'

export interface StrategyBaseI extends ResourceBaseI {
  body: string
  color: string
  industries: string[]
  video: string
}
