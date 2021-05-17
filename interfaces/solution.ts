import type { ArticleBaseI, ArticlePageI } from '@/interfaces'

export interface SolutionBaseI extends ArticleBaseI {}

export interface SolutionPageI extends ArticlePageI, SolutionBaseI {
  outcomes: string
  client: string
  problem: string
  project: string
}
