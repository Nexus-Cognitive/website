import type {
  ColorContentsT,
  ImageContentsT,
  SlideContentsT,
  SlideContentT
} from '@/types'
import { slideMap } from '@/utilities'

export function slidesMap(
  slides: SlideContentsT,
  colors: ColorContentsT,
  images: ImageContentsT
): SlideContentsT {
  return slides.map(
    (slide: SlideContentT): SlideContentT => slideMap(slide, colors, images)
  )
}
