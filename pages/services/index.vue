<template>
  <article>
    <HeroBase section-class-list="pb-9 sm:pb-24" :video="video">
      <template #default>
        <h1 class="sr-only">Services</h1>

        <p
          class="font-light font-mono text-md sm:text-lg 2xl:text-xl text-left left-2 md:left-6 bottom-2/4 md:bottom-1/3 absolute"
        >
          We’re building<br class="hidden xs:inline" />digitally mature<br class="md:hidden"/>
          <FocusList :focuses="focuses" />
        </p>
      </template>
    </HeroBase>

    <StrategyBase
      v-for="(strategy, index) in strategies"
      v-bind="strategy"
      :key="strategy.slug"
      :image-right="strategyImageRightGet(index)"
    />
  </article>
</template>

<script lang="ts">
import type { Context } from '@nuxt/types'
import type {
  ColorContentsT,
  FocusContentsT,
  ImageContentsT,
  ServiceContentsT,
  StrategyContentsT,
  VideoContentT
} from '@/types'
import type {
  ColorBaseI,
  FocusBaseI,
  ImageBaseI,
  ServiceBaseI,
  StrategyBaseI,
  VideoBaseI
} from '@/interfaces'
import Vue from 'vue'
import { imageFind, strategiesMap } from '@/utilities'

export default Vue.extend({
  async asyncData({ $content, error }: Context): Promise<object | undefined> {
    try {
      const focuses: FocusContentsT = (await $content('focuses')
        .sortBy('createdAt')
        .fetch<FocusBaseI>()) as FocusContentsT

      const images: ImageContentsT = (await $content(
        'images'
      ).fetch<ImageBaseI>()) as ImageContentsT

      const video: VideoContentT = (await $content(
        'videos',
        'services-hero'
      ).fetch<VideoBaseI>()) as VideoContentT

      if (video.poster) {
        video.poster = imageFind(images, video.poster)
      }

      const services: ServiceContentsT = (await $content('services')
        .sortBy('title')
        .fetch<ServiceBaseI>()) as ServiceContentsT

      const colors: ColorContentsT = (await $content(
        'colors'
      ).fetch<ColorBaseI>()) as ColorContentsT

      let strategies: StrategyContentsT = (await $content('strategies')
        .sortBy('order')
        .fetch<StrategyBaseI>()) as StrategyContentsT

      strategies = strategiesMap(strategies, colors, images, services)

      return {
        focuses,
        services,
        strategies,
        video
      }
    } catch (e: any) {
      error({ message: e.toString() })
    }
  },

  methods: {
    strategyImageRightGet(index: number): boolean {
      return !(index % 2 === 0)
    }
  }
})
</script>
