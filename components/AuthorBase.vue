<template>
  <figure class="flex items-center">
    <ImageBase avatar class="h-6 mr-2 w-6" v-bind="image" />

    <figcaption>
      <span class="font-bold tracking-wider uppercase">{{ title }}</span
      ><br /><span v-html="position"></span>
    </figcaption>
  </figure>
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
    }
  }
})
</script>
