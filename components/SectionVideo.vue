<template>
  <div class="section-video-wrapper flex justify-center items-center">
    <iframe
      allowfullscreen
      class="section-video-iframe"
      frameborder="0"
      :height="height"
      mozallowfullscreen
      :poster="poster.src"
      :src="src"
      :title="title"
      webkitallowfullscreen
      :width="width"
    />
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import type { ImageContentT } from '@/types'

export default Vue.extend({
  props: {
    height: {
      required: true,
      type: Number
    },

    poster: {
      required: true,
      type: Object as PropType<ImageContentT>
    },

    src: {
      required: true,
      type: String
    },

    title: {
      required: true,
      type: String
    },

    width: {
      required: true,
      type: Number
    }
  }
})
</script>
