import type { ImageRelationT } from '@/types'
import type { AssetBaseI } from '@/interfaces'

export interface VideoBaseI extends AssetBaseI {
  poster: ImageRelationT
}
