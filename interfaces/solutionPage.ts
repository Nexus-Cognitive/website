import type { ArticlePageI, SolutionBaseI } from '@/interfaces'

export interface SolutionPageI extends ArticlePageI, SolutionBaseI {
  outcomes: string
  client: string
  problem: string
  project: string
}
