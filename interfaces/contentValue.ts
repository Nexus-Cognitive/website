import type { ContentTypeI } from '@/interfaces'

export interface ContentValueI<ValueType> extends ContentTypeI {
  value: ValueType
}
