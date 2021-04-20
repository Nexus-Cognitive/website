import type { ContentT, ContentsT, RelationsT } from '@/types'

export function contentsFilter<C, R>(
  contents: ContentsT<C>,
  relations: RelationsT<R>,
  key: string = 'slug'
): ContentsT<C> | undefined {
  return contents.filter((content: ContentT<C>): boolean =>
    relations ? relations.includes(content[key]) : false
  )
}
