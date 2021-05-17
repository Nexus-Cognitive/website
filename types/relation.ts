import type { ContentT, ContentsT } from '@/types'

export type RelationT<T> = string | ContentT<T> | undefined

export type RelationsT<T> = string[] | ContentsT<T> | undefined
