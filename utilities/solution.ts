import type {
  AuthorContentsT,
  CategoryContentsT,
  ImageContentsT,
  SolutionContentT,
  SolutionContentsT,
  SolutionRelationT,
  SolutionResultT,
  AuthorResultT,
  CategoryResultT,
  ImageResultT
} from '@/types'
import type { SolutionBaseI } from '@/interfaces'
import { articleMap, contentFind } from '@/utilities'

export function solutionFind(
  solutions: SolutionContentsT,
  relation: SolutionRelationT,
  key: keyof SolutionContentT = 'slug'
): SolutionContentT | undefined {
  return contentFind<SolutionBaseI, SolutionRelationT>(solutions, relation, key)
}

export function solutionMap(
  solution: SolutionContentT,
  authors: AuthorContentsT,
  categories: CategoryContentsT,
  images: ImageContentsT
): SolutionContentT {
  return articleMap<SolutionBaseI>(solution, authors, categories, images)
}

export function solutionResultMap(
  solutionResult: SolutionResultT,
  authorResult: AuthorResultT,
  categoryResult: CategoryResultT,
  imageResult: ImageResultT
): SolutionResultT {
  if (
    !!solutionResult &&
    Array.isArray(authorResult) &&
    Array.isArray(categoryResult) &&
    Array.isArray(imageResult)
  ) {
    if (Array.isArray(solutionResult)) {
      solutionResult = solutionsMap(
        solutionResult,
        authorResult,
        categoryResult,
        imageResult
      )
    } else {
      solutionResult = solutionMap(
        solutionResult,
        authorResult,
        categoryResult,
        imageResult
      )
    }
  }

  return solutionResult
}

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
