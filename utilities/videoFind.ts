import type { VideoContentT, VideoContentsT, VideoRelationT } from '@/types'
import type { VideoBaseI } from '@/interfaces'
import { contentFind } from '@/utilities'

export function videoFind(
  videos: VideoContentsT,
  relation: VideoRelationT,
  key: string = 'slug'
): VideoContentT | undefined {
  return contentFind<VideoBaseI, VideoRelationT>(videos, relation, key)
}
