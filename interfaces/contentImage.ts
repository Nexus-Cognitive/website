import type { ContentTypeI } from '@/interfaces'

export interface ContentImageI extends ContentTypeI {
  description: string
  height: number
  size: number
  url: string
  width: number
}
