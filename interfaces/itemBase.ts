import type { SystemBaseI } from '@/interfaces'

export interface ItemBaseI<ElementType> {
  elements: ElementType
  modular_content: object
  system: SystemBaseI
}
