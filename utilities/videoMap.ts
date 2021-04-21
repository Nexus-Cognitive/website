import type { ImageContentsT, VideoContentT } from '@/types'
import { imageFind } from '@/utilities'

export function videoMap(
  video: VideoContentT,
  images: ImageContentsT
): VideoContentT {
  if (video.poster) {
    video.poster = imageFind(images, video.poster)
  }

  return video
}
