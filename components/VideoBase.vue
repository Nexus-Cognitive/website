<template>
  <video
    autoplay
    :height="height"
    loop
    muted
    playsinline
    :poster="poster.src"
    :src="src"
    :width="width"
  ></video>
</template>

<script lang="ts">
import type { ImageContentT } from '@/types'
import Vue, { PropType } from 'vue'

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

    width: {
      required: true,
      type: Number
    }
  }
})
</script>
