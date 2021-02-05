import type {
  AuthorBaseI,
  CategoryBaseI,
  ImageBaseI,
  ResourceBaseI
} from '@/interfaces'

export interface ArticleBaseI extends ResourceBaseI {
  authors: AuthorBaseI[]
  categories: CategoryBaseI[]
  description: string
  feature: ImageBaseI
  subtitle: string
}
