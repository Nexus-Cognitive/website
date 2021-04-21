<template>
  <section :class="classList">
    <VideoBase
      v-if="videoShow"
      v-bind="video"
      autoplay
      class="slide-video"
      loop
      muted
      playsinline
    />

    <ImageBase v-if="imageShow" v-bind="image" class="slide-image" />

    <SectionBase class="hero-section">
      <template #default>
        <div class="flex items-center">
          <ArrowBase class="mr-1" />
          <h2 :class="titleClassList" v-html="title"></h2>
        </div>

        <p
          v-if="subtitleShow"
          class="font-mono mt-3 xl:mt-6 text-xs xl:text-sm"
          v-html="subtitle"
        ></p>

        <p :class="bodyClassList" v-html="body"></p>
      </template>
    </SectionBase>
  </section>
</template>

<script lang="ts">
import type { ColorContentT, ImageContentT, VideoContentT } from '@/types'
import Vue, { PropType } from 'vue'
import { ImageContentM, VideoContentM } from '@/models'

export default Vue.extend({
  props: {
    backgroundColor: {
      required: true,
      type: Object as PropType<ColorContentT>
    },

    body: {
      required: true,
      type: String
    },

    image: {
      default: (): ImageContentT => ImageContentM,
      type: Object as PropType<ImageContentT>
    },

    subtitle: {
      default: '',
      type: String
    },

    title: {
      required: true,
      type: String
    },

    video: {
      default: (): VideoContentT => VideoContentM,
      type: Object as PropType<VideoContentT>
    }
  },

  computed: {
    bodyClassList(): object {
      return {
        'font-mono': true,
        'font-light mt-1 xl:mt-2 text-sm xl:text-lg': this.subtitleShow,
        'mt-3 text-xs xl:text-sm': !this.subtitleShow
      }
    },

    classList(): string {
      return `bg-${this.backgroundColor.slug} flex flex-col items-center justify-center overflow-hidden relative text-center text-white`
    },

    imageShow(): boolean {
      return !!this.image.src
    },

    subtitleShow(): boolean {
      return !!this.subtitle
    },

    titleClassList(): object {
      return {
        'font-light font-mono text-md xl:text-lg': true,
        'font-bold': this.subtitleShow
      }
    },

    videoShow(): boolean {
      return !!this.video.src
    }
  }
})
</script>
