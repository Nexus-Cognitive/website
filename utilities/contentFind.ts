import type { ContentT, ContentsT, RelationT } from '@/types'

export function contentFind<C, R>(
  contentDocuments: ContentsT<C>,
  contentRelation: RelationT<R>,
  contentKey: string = 'slug'
): ContentT<C> | undefined {
  return contentDocuments.find(
    (content: ContentT<C>): boolean => content[contentKey] === contentRelation
  )
}
