import type { ContentT, RelationT } from '@/types'

export type ContentRelationT<C, R> = ContentT<C> | RelationT<R>
