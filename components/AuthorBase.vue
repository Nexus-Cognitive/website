<template>
  <figure class="flex items-center">
    <ImageBase avatar class="h-4 mr-2 w-4" v-bind="image" />

    <figcaption class="xl:flex xl:items-center">
      <span class="font-bold tracking-wider uppercase">{{ title }}</span
      ><br class="xl:hidden" />
      <span class="mx-1 hidden xl:inline-block">|</span>
      <span v-html="position"></span>
    </figcaption>
  </figure>
</template>

<script lang="ts">
import type { ImageContentT } from '@/types'
import Vue, { PropType } from 'vue'

export default Vue.extend({
  inheritAttrs: false,

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
    }
  }
})
</script>
