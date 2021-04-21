import type {
  ColorContentsT,
  ImageContentsT,
  SlideContentsT,
  SlideContentT,
  VideoContentsT
} from '@/types'
import { slideMap } from '@/utilities'

export function slidesMap(
  slides: SlideContentsT,
  colors: ColorContentsT,
  images: ImageContentsT,
  videos: VideoContentsT
): SlideContentsT {
  return slides.map(
    (slide: SlideContentT): SlideContentT =>
      slideMap(slide, colors, images, videos)
  )
}
