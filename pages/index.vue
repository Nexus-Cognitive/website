<template>
  <article>
    <HeroBase
      poster-src="/images/index-poster.jpeg"
      section-class-list="pb-9 sm:pb-24"
      video-src="/videos/index-hero.webm"
    >
      <template #default>
        <p class="font-light font-mono text-xs sm:text-lg 2xl:text-xl">
          We’re building digitally mature<br
            class="hidden xs:inline 3xl:hidden"
          />
          <FocusList :focuses="focuses" />
        </p>
      </template>
    </HeroBase>

    <SlideBase v-for="slide in slides" v-bind="slide" :key="slide.slug" />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content, error }): Promise<object | undefined> {
    try {
      const focuses = await $content('focuses').sortBy('createdAt').fetch()

      const slides = await $content('slides').sortBy('createdAt').fetch()

      return {
        focuses,
        slides
      }
    } catch (e) {
      error({ message: `Unable to fetch() $content(): ${e.toString()}` })
    }
  }
})
</script>
