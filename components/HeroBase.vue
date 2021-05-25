<template>
  <header
    class="flex justify-center overflow-hidden relative text-center"
    :class="headerClassList"
  >
    <SectionVideo v-if="videoShow" v-bind="video" class="hero-video" />

    <ImageBase
      v-if="imageShow"
      v-bind="image"
      class="hero-image xs:max-h-full"
    />

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
    backgroundColor: {
      default: 'purple',
      type: String,
      validator: (v) => ['black', 'blue-dark', 'purple'].includes(v)
    },

    headerHeight: {
      default: null,
      type: String,
      validator: (v): boolean =>
        ['full', 'half', 'three-quarter'].includes(v.toLowerCase())
    },

    heroVideo: {
      default: null,
      type: Object as PropType<VideoContentT>
    },

    heroSection: {
      default: true,
      type: Boolean
    },

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
    headerClassList(): string[] {
      return [
        `bg-${this.backgroundColor}`,
        this.headerHeight === 'full' ? 'lg:h-screen' : '',
        this.headerHeight === 'half' ? 'lg:h-screen-half' : '',
        this.headerHeight === 'three-quarter' ? 'lg:h-screen-three-quarter' : ''
      ]
    },

    imageShow(): boolean {
      return !!this.image.alt && !!this.image.src
    },

    sectionClassList_(): string {
      return `${this.heroSection ? 'hero-section' : ''} ${
        this.sectionClassList
      }`
    },

    videoShow(): boolean {
      return !!this.video.src && !!this.video.poster
    }
  }
})
</script>
