import type { ContentTextI } from '@/interfaces'

export interface ContentRichTextI extends ContentTextI {
  images: object
  links: object
  modular_content: []
}
