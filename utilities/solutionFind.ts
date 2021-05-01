import type {
  SolutionContentT,
  SolutionContentsT,
  SolutionRelationT
} from '@/types'
import type { SolutionBaseI } from '@/interfaces'
import { contentFind } from '@/utilities'

export function solutionFind(
  solutions: SolutionContentsT,
  relation: SolutionRelationT,
  key: string = 'slug'
): SolutionContentT | undefined {
  return contentFind<SolutionBaseI, SolutionRelationT>(solutions, relation, key)
}
