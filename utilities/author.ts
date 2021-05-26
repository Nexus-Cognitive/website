import type {
  AuthorContentT,
  AuthorContentsT,
  AuthorRelationT,
  AuthorRelationsT,
  AuthorResultT,
  ImageContentsT,
  ImageResultT
} from '@/types'
import type { AuthorBaseI, MetaBaseI } from '@/interfaces'
import {
  contentFind,
  contentsFilter,
  imageFind,
  relationMetaMap
} from '@/utilities'

export function authorFind(
  authors: AuthorContentsT,
  relation: AuthorRelationT,
  key: keyof AuthorContentT = 'slug'
): AuthorContentT | undefined {
  return contentFind<AuthorBaseI, AuthorRelationT>(authors, relation, key)
}

export function authorMap(
  author: AuthorContentT,
  images: ImageContentsT
): AuthorContentT {
  if (typeof author.image !== 'object') {
    author.image = imageFind(images, author.image)
  }

  return author
}

export function authorRelationMetaMap(relation: AuthorRelationT): MetaBaseI {
  return relationMetaMap<AuthorBaseI>(relation, 'author')
}

export function authorRelationsMetaMap(
  relations: AuthorRelationsT
): MetaBaseI[] {
  return Array.isArray(relations)
    ? relations.map(
        (relation: AuthorRelationT): MetaBaseI =>
          authorRelationMetaMap(relation)
      )
    : []
}

export function authorResultMap(
  authors: AuthorResultT,
  images: ImageResultT
): AuthorResultT {
  if (!!authors && Array.isArray(images)) {
    if (Array.isArray(authors)) {
      authors = authorsMap(authors, images)
    } else {
      authors = authorMap(authors, images)
    }
  }
  return authors
}

export function authorsFilter(
  authors: AuthorContentsT,
  relations: AuthorRelationsT,
  key: keyof AuthorContentT = 'slug'
): AuthorContentsT | undefined {
  return contentsFilter<AuthorBaseI, AuthorRelationT>(authors, relations, key)
}

export function authorsFilterMap(
  authors: AuthorContentsT,
  relations: AuthorRelationsT,
  images: ImageContentsT
): AuthorContentsT | undefined {
  const _authors = authorsFilter(authors, relations)

  return _authors ? authorsMap(_authors, images) : _authors
}

export function authorsMap(
  authors: AuthorContentsT,
  images: ImageContentsT
): AuthorContentsT {
  return authors.map(
    (author: AuthorContentT): AuthorContentT => authorMap(author, images)
  )
}
