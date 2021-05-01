import type {
  ArticleContentT,
  AuthorContentsT,
  CategoryContentsT,
  ImageContentsT,
  SolutionContentT
} from '@/types'
import { articleMap } from '@/utilities'

export function solutionMap(
  solution: SolutionContentT,
  authors: AuthorContentsT,
  categories: CategoryContentsT,
  images: ImageContentsT
): ArticleContentT {
  return articleMap(solution, authors, categories, images)
}
