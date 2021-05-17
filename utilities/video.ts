import type {
  ImageContentsT,
  VideoContentT,
  VideoContentsT,
  VideoRelationT,
  VideoResultT,
  ImageResultT
} from '@/types'
import type { VideoBaseI } from '@/interfaces'
import { contentFind, imageFind } from '@/utilities'

export function videoFind(
  videos: VideoContentsT,
  relation: VideoRelationT,
  key: keyof VideoContentT = 'slug'
): VideoContentT | undefined {
  return contentFind<VideoBaseI, VideoRelationT>(videos, relation, key)
}

export function videoMap(
  video: VideoContentT,
  images: ImageContentsT
): VideoContentT {
  if (video.poster) {
    video.poster = imageFind(images, video.poster)
  }

  return video
}

export function videoResultMap(
  videoResult: VideoResultT,
  images: ImageResultT
): VideoResultT {
  if (!!videoResult && Array.isArray(images)) {
    if (Array.isArray(videoResult)) {
      videoResult = videoResultMap(videoResult, images)
    } else {
      videoResult = videoMap(videoResult, images)
    }
  }

  return videoResult
}

export function videosMap(
  videos: VideoContentsT,
  images: ImageContentsT
): VideoContentsT {
  return videos.map(
    (video: VideoContentT): VideoContentT => videoMap(video, images)
  )
}
