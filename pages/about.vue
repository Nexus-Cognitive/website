<template>
  <article>
    <HeroBase v-if="heroVideo" :video="heroVideo">
      <template #default>
        <h1 class="sr-only">About</h1>

        <p class="page-title-large">
          An agency rethinking how we work, play, and experience the future
          economy.
        </p>
      </template>
    </HeroBase>

    <SlideBase v-if="weAreSlide" v-bind="weAreSlide" class="h-screen-half" />

    <section class="px-3 sm:px-6 py-6 sm:py-9 text-black z-10 bg-white">
      <div class="flex items-center">
        <ArrowBase class="mr-1" />
        <h2 class="text-md xl:text-lg uppercase">Led by</h2>
      </div>

      <p class="font-mono mt-3 text-xs xl:text-sm max-w-prose">
        An experienced leadership team with 100 years of combined experience in
        delivering technology-led outcomes.
      </p>
    </section>

    <SectionBase
      v-if="authors"
      class="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 bg-white"
    >
      <template #default>
        <AuthorCard
          v-for="author in authors"
          :key="author.slug"
          v-bind="author"
          class="mx-auto"
        />
      </template>
    </SectionBase>
  </article>
</template>

<script lang="ts">
import type { Context } from '@nuxt/types'
import type {
  AuthorResultT,
  ImageResultT,
  ColorResultT,
  VideoContentT,
  VideoResultT,
  SlideResultT
} from '@/types'
import type {
  AuthorBaseI,
  ImageBaseI,
  SlideBaseI,
  ColorBaseI,
  VideoBaseI
} from '@/interfaces'
import Vue from 'vue'
import { authorResultMap, imageFind, slideResultMap } from '@/utilities'

export default Vue.extend({
  async asyncData({ $content, error }: Context): Promise<object | undefined> {
    try {
      const colors: ColorResultT = await $content('colors').fetch<ColorBaseI>()

      const images: ImageResultT = await $content('images').fetch<ImageBaseI>()

      const videos: VideoResultT = await $content('videos').fetch<VideoBaseI>()

      let authors: AuthorResultT = await $content('authors')
        .where({ partner: true })
        .sortBy('order')
        .fetch<AuthorBaseI>()

      authors = authorResultMap(authors, images)

      let weAreSlide: SlideResultT = await $content(
        'slides',
        'we-are'
      ).fetch<SlideBaseI>()

      weAreSlide = slideResultMap(weAreSlide, colors, images, videos)

      let heroVideo: VideoContentT | undefined

      if (Array.isArray(images)) {
        heroVideo = videos.find(
          ({ slug }: VideoContentT): boolean => slug === 'about-hero'
        )

        if (heroVideo?.poster) {
          heroVideo.poster = imageFind(images, heroVideo.poster)
        }
      }

      return {
        authors,
        heroVideo,
        weAreSlide
      }
    } catch (e: any) {
      error({ message: e.toString() })
    }
  }
})
</script>
