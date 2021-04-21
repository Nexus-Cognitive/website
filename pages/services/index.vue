<template>
  <article>
    <HeroBase section-class-list="pb-9 sm:pb-24" :video="video">
      <template #default>
        <p
          class="font-light font-mono text-sm sm:text-lg 2xl:text-xl text-left"
        >
          We’re building digitally mature<br class="hidden xs:inline" />
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
  IndustryContentsT,
  StrategyContentT,
  StrategyContentsT,
  VideoContentT
} from '@/types'
import type {
  ColorBaseI,
  FocusBaseI,
  ImageBaseI,
  IndustryBaseI,
  StrategyBaseI,
  VideoBaseI
} from '@/interfaces'
import Vue from 'vue'
import { colorFind, imageFind, industriesFilter } from '@/utilities'

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

      const industries: IndustryContentsT = (await $content('industries')
        .sortBy('createdAt')
        .fetch<IndustryBaseI>()) as IndustryContentsT

      const colors: ColorContentsT = (await $content(
        'colors'
      ).fetch<ColorBaseI>()) as ColorContentsT

      let strategies: StrategyContentsT = (await $content('strategies')
        .sortBy('order')
        .fetch<StrategyBaseI>()) as StrategyContentsT

      strategies = strategies.map(
        (strategy: StrategyContentT): StrategyContentT => {
          if (strategy.backgroundColor) {
            strategy.backgroundColor = colorFind(
              colors,
              strategy.backgroundColor
            )
          }

          if (strategy.bodyColor) {
            strategy.bodyColor = colorFind(colors, strategy.bodyColor)
          }

          if (strategy.image) {
            strategy.image = imageFind(images, strategy.image)
          }

          if (strategy.industries?.length) {
            strategy.industries = industriesFilter(
              industries,
              strategy.industries
            )
          }

          if (strategy.titleColor) {
            strategy.titleColor = colorFind(colors, strategy.titleColor)
          }

          return strategy
        }
      )

      return {
        focuses,
        industries,
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
