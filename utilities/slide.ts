import type {
  ColorContentsT,
  ImageContentsT,
  SlideContentT,
  SlideContentsT,
  VideoContentsT,
  SlideResultT,
  ColorResultT,
  ImageResultT,
  VideoResultT
} from '@/types'
import { colorFind, imageFind, videoFind, videoMap } from '@/utilities'

export function slideMap(
  slide: SlideContentT,
  colors: ColorContentsT,
  images: ImageContentsT,
  videos: VideoContentsT
): SlideContentT {
  slide.backgroundColor = colorFind(colors, slide.backgroundColor)

  slide.image = imageFind(images, slide.image)

  slide.video = videoFind(videos, slide.video)

  if (slide.video) {
    slide.video = videoMap(slide.video, images)
  }

  return slide
}

export function slideResultMap(
  slides: SlideResultT,
  colors: ColorResultT,
  images: ImageResultT,
  videos: VideoResultT
): SlideResultT {
  if (
    !!slides &&
    Array.isArray(colors) &&
    Array.isArray(images) &&
    Array.isArray(videos)
  ) {
    if (Array.isArray(slides)) {
      slides = slidesMap(slides, colors, images, videos)
    } else {
      slides = slideMap(slides, colors, images, videos)
    }
  }

  return slides
}

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
