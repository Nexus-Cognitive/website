import type { ContentT, ContentsT, RelationT, RelationsT } from '@/types'

export function contentFind<C, R>(
  contents: ContentsT<C>,
  relation: RelationT<R>,
  key: keyof ContentT<C> = 'slug'
): ContentT<C> | undefined {
  return relation
    ? contents.find(
        (content: ContentT<C>): boolean => content[key] === relation
      )
    : undefined
}

export function contentsFilter<C, R>(
  contents: ContentsT<C>,
  relations: RelationsT<R>,
  key: keyof ContentT<C> = 'slug'
): ContentsT<C> | undefined {
  return relations
    ? contents.filter((content: ContentT<C>): boolean =>
        relations.includes(content[key])
      )
    : undefined
}
