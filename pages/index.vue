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

    <SlideBase
      v-for="slide in slides"
      v-bind="slide"
      :key="slide.slug"
      class="h-screen"
    />

    <SectionBase class="bg-blue-dark" tag="div">
      <template #default>
        <InsightBase v-bind="insight" />

        <div class="gap-4 grid grid-cols-1 md:grid-cols-2 mt-5">
          <InsightBase
            v-for="insight in insights"
            v-bind="insight"
            :key="insight.slug"
          />
        </div>
      </template>
    </SectionBase>
  </article>
</template>

<script lang="ts">
import type { Context } from '@nuxt/types'
import type {
  AuthorContentsT,
  ColorContentsT,
  ImageContentsT,
  InsightContentsT,
  SlideContentsT,
  VideoContentT,
  CategoryContentsT,
  VideoContentsT
} from '@/types'
import type {
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
  imageFind,
  insightMap,
  insightsMap,
  slidesMap,
  videoFind
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

      const videos: VideoContentsT = (await $content(
        'videos'
      ).fetch<VideoBaseI>()) as VideoContentsT

      let [insight]: InsightContentsT = (await $content('insights')
        .where({ feature: true })
        .without('body')
        .fetch<InsightBaseI>()) as InsightContentsT

      insight = insightMap(insight, authors, categories, images)

      let insights: InsightContentsT = (await $content('insights')
        .where({ feature: false })
        .sortBy('publish', 'desc')
        .limit(2)
        .without('body')
        .fetch<InsightBaseI>()) as InsightContentsT

      insights = insightsMap(insights, authors, categories, images)

      let slides: SlideContentsT = (await $content('slides')
        .sortBy('order')
        .fetch<SlideBaseI>()) as SlideContentsT

      slides = slidesMap(slides, colors, images, videos)

      const video: VideoContentT | undefined = videoFind(videos, 'index-hero')

      if (video) {
        video.poster = imageFind(images, video.poster)
      }

      return {
        insight,
        insights,
        slides,
        video
      }
    } catch (e: any) {
      error({ message: e.toString() })
    }
  }
})
</script>
