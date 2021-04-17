import type { ResourceBaseI } from '@/interfaces'

export interface AssetBaseI extends ResourceBaseI {
  height: number
  src: string
  width: number
}
