import type {
  AuthorContentsT,
  CategoryContentsT,
  ImageContentsT,
  SolutionContentsT,
  SolutionContentT
} from '@/types'
import { solutionMap } from '@/utilities'

export function solutionsMap(
  solutions: SolutionContentsT,
  authors: AuthorContentsT,
  categories: CategoryContentsT,
  images: ImageContentsT
): SolutionContentsT {
  return solutions.map(
    (solution: SolutionContentT): SolutionContentT =>
      solutionMap(solution, authors, categories, images)
  )
}
