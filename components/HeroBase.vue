<template>
  <header
    class="bg-purple flex lg:h-screen justify-center overflow-hidden relative text-center"
  >
    <VideoBase
      v-if="videoShow"
      v-bind="video"
      autoplay
      class="hero-video"
      loop
      muted
      playsinline
    />

    <ImageBase v-if="imageShow" v-bind="image" class="slide-image" />

    <SectionBase :class="sectionClassList_" tag="div">
      <template #default>
        <slot name="default"></slot>
      </template>
    </SectionBase>
  </header>
</template>

<script lang="ts">
import type { ImageContentT, VideoContentT } from '@/types'
import Vue, { PropType } from 'vue'
import { ImageContentM, VideoContentM } from '@/models'

export default Vue.extend({
  props: {
    image: {
      default: (): ImageContentT => ImageContentM,
      type: Object as PropType<ImageContentT>
    },

    sectionClassList: {
      default: '',
      type: String
    },

    video: {
      default: (): VideoContentT => VideoContentM,
      type: Object as PropType<VideoContentT>
    }
  },

  computed: {
    imageShow(): boolean {
      return !!this.image.alt && !!this.image.src
    },

    sectionClassList_(): string {
      return `hero-section ${this.sectionClassList}`
    },

    videoShow(): boolean {
      return !!this.video.src && !!this.video.poster
    }
  }
})
</script>
