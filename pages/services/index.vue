<template>
  <article>
    <HeroBase
      poster-src="/images/services-poster.jpeg"
      section-class-list="md:h-screen-half lg:h-screen"
      video-src="/videos/services-hero.mp4"
    >
      <template #default>
        <p class="text-md sm:text-lg">We nurture long-term digital maturity.</p>

        <p class="font-mono mt-1 text-xs sm:text-sm">
          Empower + Illuminate + Amplify: the framework to rich, digital
          maturity and resilience.
        </p>
      </template>
    </HeroBase>

    <StrategyBase
      v-for="strategy in strategies"
      v-bind="strategy"
      :key="strategy.slug"
      :industries-content="industriesContent"
    />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content, error }): Promise<object | undefined> {
    try {
      const industriesContent = await $content('industries')
        .sortBy('createdAt')
        .fetch()

      const strategies = await $content('strategies')
        .sortBy('createdAt')
        .fetch()

      return {
        industriesContent,
        strategies
      }
    } catch (e) {
      error({ message: e.toString() })
    }
  }
})
</script>
