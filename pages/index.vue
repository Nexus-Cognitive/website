<template>
  <article>
    <HeroBase section-class-list="md:h-screen-half lg:h-screen" :video="video">
      <template #default>
        <h1 class="sr-only">Home</h1>

        <p class="page-title">
          We nurture long-term<br class="hidden sm:inline" />digital maturity.
        </p>

        <p class="page-subtitle">Digital transformation isn’t a finish line.</p>

        <p class="page-subtitle">
          We develop strong foundations for growth and resilience to the fast
          evolving web 3.0 and future economy.
        </p>
      </template>
    </HeroBase>

    <SectionBase class="bg-black" tag="div">
      <InsightBase v-bind="insight" class="bg-purple" />
    </SectionBase>

    <SlideBase v-for="slide in slides" v-bind="slide" :key="slide.slug" />
  </article>
</template>

<script lang="ts">
import type { Context } from '@nuxt/types'
import type {
  AuthorContentsT,
  ColorContentsT,
  ImageContentsT,
  InsightContentsT,
  SlideContentT,
  SlideContentsT,
  VideoContentT,
  CategoryContentsT,
  AuthorContentT
} from '@/types'
import {
  AuthorBaseI,
  CategoryBaseI,
  ColorBaseI,
  ImageBaseI,
  InsightBaseI,
  SlideBaseI,
  VideoBaseI
} from '@/interfaces'
import Vue from 'vue'
import {
  authorsFilter,
  categoriesFilter,
  colorFind,
  imageFind
} from '@/utilities'

export default Vue.extend({
  async asyncData({ $content, error }: Context): Promise<object | undefined> {
    try {
      const authors: AuthorContentsT = (await $content(
        'authors'
      ).fetch<AuthorBaseI>()) as AuthorContentsT

      const categories: CategoryContentsT = (await $content(
        'categories'
      ).fetch<CategoryBaseI>()) as CategoryContentsT

      const colors: ColorContentsT = (await $content(
        'colors'
      ).fetch<ColorBaseI>()) as ColorContentsT

      const images: ImageContentsT = (await $content(
        'images'
      ).fetch<ImageBaseI>()) as ImageContentsT

      const [insight]: InsightContentsT = (await $content('insights')
        .where({ feature: true })
        .fetch<InsightBaseI>()) as InsightContentsT

      if (insight) {
        if (insight.authors?.length) {
          insight.authors = authorsFilter(authors, insight.authors)?.map(
            (author: AuthorContentT): AuthorContentT => {
              if (author.image) {
                author.image = imageFind(images, author.image)
              }

              return author
            }
          )
        }

        if (insight.categories?.length) {
          insight.categories = categoriesFilter(categories, insight.categories)
        }

        if (insight.cover) {
          insight.cover = imageFind(images, insight.cover)
        }
      }

      const video: VideoContentT = (await $content(
        'videos',
        'index-hero'
      ).fetch<VideoBaseI>()) as VideoContentT

      video.poster = imageFind(images, video.poster)

      let slides: SlideContentsT = (await $content('slides')
        .sortBy('createdAt')
        .fetch<SlideBaseI>()) as SlideContentsT

      slides = slides.map(
        (slide: SlideContentT): SlideContentT => {
          if (slide.backgroundColor) {
            slide.backgroundColor = colorFind(colors, slide.backgroundColor)
          }

          if (slide.image) {
            slide.image = imageFind(images, slide.image)
          }

          return slide
        }
      )

      return {
        insight,
        slides,
        video
      }
    } catch (e: any) {
      error({ message: e.toString() })
    }
  }
})
</script>
