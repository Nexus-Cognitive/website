import type { ColorContentT, ColorContentsT, ColorRelationT } from '@/types'
import type { ColorBaseI } from '@/interfaces'
import { contentFind } from '@/utilities'

export function colorFind(
  colorContents: ColorContentsT,
  colorRelation: ColorRelationT,
  colorKey: string = 'slug'
): ColorContentT | undefined {
  return contentFind<ColorBaseI, ColorRelationT>(
    colorContents,
    colorRelation,
    colorKey
  )
}
