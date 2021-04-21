import type {
  ColorContentsT,
  ImageContentsT,
  SlideContentT,
  VideoContentsT
} from '@/types'
import { colorFind, imageFind, videoFind, videoMap } from '@/utilities'

export function slideMap(
  slide: SlideContentT,
  colors: ColorContentsT,
  images: ImageContentsT,
  videos: VideoContentsT
): SlideContentT {
  if (slide.backgroundColor) {
    slide.backgroundColor = colorFind(colors, slide.backgroundColor)
  }

  if (slide.image) {
    slide.image = imageFind(images, slide.image)
  }

  if (slide.video) {
    slide.video = videoFind(videos, slide.video)

    if (slide.video) {
      slide.video = videoMap(slide.video, images)
    }
  }

  return slide
}
