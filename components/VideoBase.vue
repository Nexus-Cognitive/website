<template>
  <video
    autoplay
    class="w-full"
    :height="height"
    loop
    muted
    playsinline
    :poster="poster.src"
    :width="width"
  >
    <source :src="srcWebM" type="video/webm" />
    <source :src="srcMP4" type="video/mp4" />
  </video>
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
  },

  computed: {
    srcWebM() {
      return `${this.src}.webm`
    },

    srcMP4() {
      return `${this.src}.mp4`
    }
  }
})
</script>
