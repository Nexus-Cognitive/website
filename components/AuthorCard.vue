<template>
  <article class="text-black">
    <figure>
      <ImageBase class="h-14 w-14" v-bind="image" />
      <figcaption class="mt-2">
        <span class="font-bold tracking-wider uppercase">{{ title }}</span
        ><br /><span class="font-mono" v-html="position"></span>
      </figcaption>
    </figure>
    <div class="flex items-center mt-1 text-gray-dark">
      <a :href="`mailto:${email}`" class="mr-2"><IconEmail /></a>
      <a :href="linkedIn"
        ><ImageBase
          src="/images/linked-in.svg"
          alt="LinkedIn Logo"
          :height="32"
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
  }
})
</script>
