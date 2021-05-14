<template>
  <div class="section-video-wrapper flex justify-center items-center">
    <video
      autoplay
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
