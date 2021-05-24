import type { ContentT, RelationT } from '@/types'
import type { MetaBaseI } from '@/interfaces'

export function relationMetaMap<T>(
  relation: RelationT<T>,
  name: string,
  key: keyof ContentT<T> = 'title'
): MetaBaseI {
  return {
    content:
      typeof relation === 'object' &&
      Object.prototype.hasOwnProperty.call(relation, key)
        ? relation[key.toString()]
        : 'Unknown',
    name
  }
}
