import type { ColorContentT, ColorContentsT, ColorRelationT } from '@/types'
import type { ColorBaseI } from '@/interfaces'
import { contentFind } from '@/utilities'

export function colorFind(
  colors: ColorContentsT,
  relation: ColorRelationT,
  key: string = 'slug'
): ColorContentT | undefined {
  return contentFind<ColorBaseI, ColorRelationT>(colors, relation, key)
}
