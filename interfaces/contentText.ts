import type { ContentValueI } from '@/interfaces'

export interface ContentTextI extends ContentValueI<string> {
  type: 'rich_text' | 'text'
}
