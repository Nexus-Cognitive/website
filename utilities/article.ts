import type {
  ArticleContentT,
  ArticleContentsT,
  AuthorContentsT,
  CategoryContentsT,
  ImageContentsT
} from '@/types'
import { authorsFilterMap, categoriesFilter, imageFind } from '@/utilities'

export function articlesFilter<T>(
  articles: ArticleContentsT<T>,
  key: keyof ArticleContentT<T>,
  condition: (value: any) => boolean
): ArticleContentsT<T> | undefined {
  return articles.filter((article: ArticleContentT<T>): boolean =>
    condition(article[key])
  )
}

export function articleMap<T>(
  article: ArticleContentT<T>,
  authors: AuthorContentsT,
  categories: CategoryContentsT,
  images: ImageContentsT
): ArticleContentT<T> {
  article.authors = authorsFilterMap(authors, article.authors, images)

  article.categories = categoriesFilter(categories, article.categories)

  article.cover = imageFind(images, article.cover)

  return article
}
