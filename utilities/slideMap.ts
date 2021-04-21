import type { ColorContentsT, ImageContentsT, SlideContentT } from '@/types'
import { colorFind, imageFind } from '@/utilities'

export function slideMap(
  slide: SlideContentT,
  colors: ColorContentsT,
  images: ImageContentsT
): SlideContentT {
  if (slide.backgroundColor) {
    slide.backgroundColor = colorFind(colors, slide.backgroundColor)
  }

  if (slide.image) {
    slide.image = imageFind(images, slide.image)
  }

  return slide
}
