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

    <SectionBase class="flex justify-center w-full h-auto bg-purple" tag="div">
      <section
        class="flex flex-col items-start text-white z-10 xs: pt-2 sm:pt-3 px-3 md:px-0 max-w-12xl"
      >
        <div class="flex items-center">
          <ArrowBase class="mr-1 text-blue" />
          <h2
            class="font-bold font-mono font-title text-sm tracking-widest uppercase"
          >
            We are
          </h2>
        </div>

        <p
          class="font-light font-mono font-titlexs:mt-1 mt-2 xs:text-sm text-md xl:text-lg"
        >
          A passionate team of technologists and developers helping businesses
          mature their products and workflows.
        </p>
      </section>
    </SectionBase>

    <SectionBase class="illuminate-wrapper" tag="div">
      <img
        alt="Photo of trees in a forest."
        src="/images/our-framework.jpeg"
        class="illuminate-bg-image"
      />
      <div
        class="max-w-12xl flex flex-row justify-center xs:flex-wrap lg:flex-nowrap pt-3"
      >
        <section class="illuminate-text">
          <div class="flex items-center">
            <ArrowBase class="mr-1 text-blue" />
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
          <a href="/services" class="link-button mt-3"> See Our Framework </a>
        </section>
        <img
          src="/images/framework-logos.svg"
          class="illuminate-logos"
          alt="Image of logos for UI Path, alteryx, ethereum, GraphQL, Amazon Web Services, salesforce, Power BI, and Azure."
        />
      </div>
    </SectionBase>

    <SectionVideo v-bind="futureStaticVideo" class="relative">
      <section
        class="px-3 sm:px-6 py-6 sm:py-9 text-white z-10 hero-section absolute h-auto mt-3"
      >
        <div class="flex items-center">
          <h2
            class="font-bold text-center uppercase font-title text-center text-sm xl:text-lg"
          >
            The Future isn’t Static
          </h2>
        </div>
        <p class="text-center font-mono mt-3 text-xs xl:text-sm">
          Get the tools and strategies to shape your new standards in business
        </p>
      </section>
      <img
        class="absolute -bottom-10 w-full"
        src="/images/the-future-isnt-static-cover.svg"
      />
    </SectionVideo>

    <section class="bg-blue-dark px-4 py-6">
      <div class="container">
        <div class="flex items-baseline">
          <ArrowBase class="mr-1 text-blue" />

          <h2 class="cross text-white title">Latest Insights</h2>
        </div>

       

        <ArticleList
          :articles="insights"
          class="mt-4"
          component="InsightBase"
        />
      </div>
    </section>
  </article>
</template>

<script lang="ts">
import type { Context } from '@nuxt/types'
import type {
  AuthorResultT,
  CategoryResultT,
  ColorResultT,
  ImageResultT,
  InsightContentT,
  InsightResultT,
  SlideResultT,
  VideoContentT,
  VideoResultT
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
  insightResultFilterPublishMap,
  insightsFilter,
  slideResultMap,
  videoFind
} from '@/utilities'

export default Vue.extend({
  async asyncData({ $content, error }: Context): Promise<object | undefined> {
    try {
      const authors: AuthorResultT = await $content(
        'authors'
      ).fetch<AuthorBaseI>()

      const categories: CategoryResultT = await $content(
        'categories'
      ).fetch<CategoryBaseI>()

      const colors: ColorResultT = await $content('colors').fetch<ColorBaseI>()

      const images: ImageResultT = await $content('images').fetch<ImageBaseI>()

      const videos: VideoResultT = await $content('videos').fetch<VideoBaseI>()

      let insights: InsightResultT = await $content('insights')
        .only([
          'authors',
          'categories',
          'cover',
          'description',
          'feature',
          'publish',
          'slug',
          'title'
        ])
        .sortBy('publish', 'desc')
        .fetch<InsightBaseI>()

      insights = insightResultFilterPublishMap(
        insights,
        authors,
        categories,
        images,
        undefined
      )

      const insightFeature: InsightContentT = insights?.find(
        ({ feature }: InsightContentT): boolean => feature
      )

      if (Array.isArray(insights)) {
        insights = insightsFilter(
          insights,
          'slug',
          (slug: string): boolean => slug !== insightFeature?.slug
        )

        insights = insights?.slice(0, 2)
      }

      let slides: SlideResultT = await $content('slides')
        .sortBy('order')
        .fetch<SlideBaseI>()

      slides = slideResultMap(slides, colors, images, videos)

      let video: VideoContentT | undefined

      let futureStaticVideo: VideoContentT | undefined

      if (Array.isArray(videos)) {
        video = videoFind(videos, 'index-hero')

        futureStaticVideo = videoFind(videos, 'the-future-isnt-static')
      }

      if (Array.isArray(images)) {
        if (video) {
          video.poster = imageFind(images, video.poster)
        }

        if (futureStaticVideo) {
          futureStaticVideo.poster = imageFind(images, futureStaticVideo.poster)
        }
      }

      return {
        insightFeature,
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
