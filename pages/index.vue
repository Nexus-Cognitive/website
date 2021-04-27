<template>
  <article>
    <HeroBase section-class-list="md:h-screen" :video="video">
      <template #default>
        <h1 class="sr-only">Home</h1>

        <p class="page-title">
          We nurture long-term<br class="hidden sm:inline" />
          digital maturity.
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

    <section class="illuminate-wrapper">
      <img
        alt="Photo of trees in a forest."
        src="/images/our-framework.jpeg"
        class="illuminate-image"
      />
      <section class="illuminate-text">
        <div class="flex items-center">
          <ArrowBase class="mr-1" />
          <h2
            class="font-bold font-mono font-title text-sm tracking-widest uppercase"
          >
            Our Framework
          </h2>
        </div>
        <h3
          class="font-light font-mono xs:mt-1 mt-2 xs:text-sm text-md xl:text-lg"
        >
          Illuminating your way forward
        </h3>
        <p class="font-mono xs:mt-1 mt-3 text-xs xl:text-sm">
          We build on platforms and technologies that empower, illuminate and
          amplify your employees and products.
        </p>
        <a
          href="/services"
          class="w-auto mt-5 px-4 py-2 bg-blue font-mono text-xs md:text-sm box-content"
        >
          See Our Framework
        </a>
      </section>
      <img src="/images/framework-logos.svg" class="illuminate-logos" />
    </section>

    <SectionVideo v-bind="futureStaticVideo">
      <section
        class="px-3 sm:px-6 py-6 sm:py-9 text-white z-10 hero-section absolute"
      >
        <div class="flex items-center">
          <ArrowBase class="mr-1" />
          <h2 class="font-light font-mono text-md xl:text-lg">
            The Future isn’t Static
          </h2>
        </div>
        <p class="font-mono mt-3 text-xs xl:text-sm">
          Get the tools and strategies to shape your new standards in business
        </p>
      </section>
    </SectionVideo>

    <SectionBase class="bg-blue-dark" tag="div">
      <template #default>
        <div class="flex items-baseline">
          <ArrowBase class="mr-1 text-blue" />
          <h2 class="font-bold font-title text-sm tracking-wider uppercase">
            Latest Insights
          </h2>
        </div>

        <InsightBase v-bind="insight" class="mt-4" />

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
  VideoContentsT,
  InsightContentT
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
import { imageFind, insightsMap, slidesMap, videoFind } from '@/utilities'

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

      let insights: InsightContentsT = (await $content('insights')
        .without('body')
        .sortBy('publish', 'desc')
        .fetch<InsightBaseI>()) as InsightContentsT

      insights = insightsMap(insights, authors, categories, images)

      const insight: InsightContentT = insights.find(
        ({ feature }: InsightContentT): boolean => feature
      ) as InsightContentT

      insights = insights
        .filter(({ feature }: InsightContentT): boolean => !feature)
        ?.slice(0, 2)

      let slides: SlideContentsT = (await $content('slides')
        .sortBy('order')
        .fetch<SlideBaseI>()) as SlideContentsT

      slides = slidesMap(slides, colors, images, videos)

      const video: VideoContentT | undefined = videoFind(videos, 'index-hero')

      const futureStaticVideo: VideoContentT | undefined = videoFind(
        videos,
        'the-future-isnt-static'
      )

      if (video) {
        video.poster = imageFind(images, video.poster)
      }

      if (futureStaticVideo) {
        futureStaticVideo.poster = imageFind(images, futureStaticVideo.poster)
      }

      return {
        insight,
        insights,
        slides,
        video,
        futureStaticVideo
      }
    } catch (e: any) {
      error({ message: e.toString() })
    }
  }
})
</script>
