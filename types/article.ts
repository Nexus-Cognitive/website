import type {
  ContentT,
  ContentResultT,
  ContentsT,
  RelationT,
  RelationsT
} from '@/types'
import type { ArticleBaseI } from '@/interfaces'

export type ArticleIntersectionT<T> = ArticleBaseI & T

export type ArticleContentT<T> = ContentT<ArticleIntersectionT<T>>

export type ArticleContentsT<T> = ContentsT<ArticleIntersectionT<T>>

export type ArticleRelationT<T> = RelationT<ArticleIntersectionT<T>>

export type ArticleRelationsT<T> = RelationsT<ArticleIntersectionT<T>>

export type ArticleResultT<T> = ContentResultT<ArticleIntersectionT<T>>
