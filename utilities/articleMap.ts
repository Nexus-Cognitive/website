import type {
  ArticleContentT,
  AuthorContentsT,
  CategoryContentsT,
  ImageContentsT
} from '@/types'
import { authorsFilterMap, categoriesFilter, imageFind } from '@/utilities'

export function articleMap(
  article: ArticleContentT,
  authors: AuthorContentsT,
  categories: CategoryContentsT,
  images: ImageContentsT
): ArticleContentT {
  if (article.authors?.length) {
    article.authors = authorsFilterMap(authors, article.authors, images)
  }

  if (article.categories?.length) {
    article.categories = categoriesFilter(categories, article.categories)
  }

  if (article.cover) {
    article.cover = imageFind(images, article.cover)
  }

  return article
}
