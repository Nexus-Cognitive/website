<template>
  <article class="text-black">
    <figure>
      <ImageBase class="h-14 w-14" v-bind="image" />
      <figcaption class="mt-2">
        <span class="font-bold tracking-wider uppercase">{{ title }}</span>
        <br />
        <span class="font-sans" v-html="position"></span>
      </figcaption>
    </figure>
    <div class="flex items-center mt-1">
      <a :href="href" class="mr-2" :aria-label="`Email ${title}`"
        ><IconEmail
      /></a>
      <a :href="linkedIn"
        ><ImageBase
          alt="LinkedIn Logo"
          class="linked-in-logo"
          :height="32"
          src="/images/linked-in.svg"
          :width="32"
      /></a>
    </div>
  </article>
</template>

<script lang="ts">
import type { ImageContentT } from '@/types'
import Vue, { PropType } from 'vue'

export default Vue.extend({
  props: {
    image: {
      required: true,
      type: Object as PropType<ImageContentT>
    },

    position: {
      required: true,
      type: String
    },

    title: {
      required: true,
      type: String
    },

    linkedIn: {
      required: true,
      type: String
    },

    email: {
      required: true,
      type: String
    }
  },

  computed: {
    href(): string {
      return `mailto:${this.email}`
    }
  }
})
</script>

<style scoped>
.linked-in-logo {
  @apply h-4 w-4;
}
</style>
