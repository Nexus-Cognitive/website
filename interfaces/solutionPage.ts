import type { ArticlePageI, SolutionBaseI } from '@/interfaces'

export interface SolutionPageI extends ArticlePageI, SolutionBaseI {
  amount: string
  client: string
  problem: string
  project: string
}
