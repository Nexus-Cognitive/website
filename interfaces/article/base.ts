import * as Interfaces from '@/interfaces'

export interface Base {
  id: number
  authors: Interfaces.Author.Base[]
  categories: Interfaces.Category.Base[]
  description: string
  feature: Interfaces.Image.Base
  subtitle: string
  title: string
}
