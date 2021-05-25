<template>
  <article>
    <HeroBase v-if="video" section-class-list="pb-9 sm:pb-24" :video="video">
      <template #default>
        <h1 class="sr-only">Services</h1>

        <p
          class="font-light font-mono text-md sm:text-lg 2xl:text-xl text-left left-2 md:left-6 bottom-1/4 md:bottom-1/3 absolute"
        >
          We’re building<br class="hidden xs:inline" />
          digitally mature<br class="md:hidden" />
          <FocusList :focuses="focuses" />
        </p>
      </template>
    </HeroBase>

    <template v-if="strategies">
      <StrategyBase
        v-for="(strategy, index) in strategies"
        v-bind="strategy"
        :key="strategy.slug"
        :image-right="strategyImageRightGet(index)"
      />
    </template>
  </article>
</template>

<script lang="ts">
import type { Context } from '@nuxt/types'
import type { MetaInfo } from 'vue-meta'
import type {
  ColorResultT,
  FocusResultT,
  ImageResultT,
  ServiceResultT,
  StrategyResultT,
  VideoResultT
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
import { strategyResultMap, videoResultMap } from '@/utilities'

export default Vue.extend({
  async asyncData({ $content, error }: Context): Promise<object | undefined> {
    try {
      const focuses: FocusResultT = await $content('focuses')
        .sortBy('createdAt')
        .fetch<FocusBaseI>()

      const images: ImageResultT = await $content('images').fetch<ImageBaseI>()

      let video: VideoResultT = await $content(
        'videos',
        'services-hero'
      ).fetch<VideoBaseI>()

      video = videoResultMap(video, images)

      const services: ServiceResultT = await $content('services')
        .sortBy('title')
        .fetch<ServiceBaseI>()

      const colors: ColorResultT = await $content('colors').fetch<ColorBaseI>()

      let strategies: StrategyResultT = await $content('strategies')
        .sortBy('order')
        .fetch<StrategyBaseI>()

      strategies = strategyResultMap(strategies, colors, images, services)

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

  head(): MetaInfo {
    return {
      title: 'Services | Nexus Cognitive',
      meta: [
        {
          content:
            'Our framework of services empower your teams, illuminate your solutions, and amplify your successes.',
          hid: 'description',
          name: 'description'
        }
      ]
    }
  },

  methods: {
    strategyImageRightGet(index: number): boolean {
      return !(index % 2 === 0)
    }
  }
})
</script>
