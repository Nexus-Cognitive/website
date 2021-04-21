import type { ContentT, ContentsT, RelationT } from '@/types'

export function contentFind<C, R>(
  contents: ContentsT<C>,
  relation: RelationT<R>,
  key: string = 'slug'
): ContentT<C> | undefined {
  return contents.find(
    (content: ContentT<C>): boolean => content[key] === relation
  )
}
