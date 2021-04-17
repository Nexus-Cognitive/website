<template>
  <header class="flex lg:h-screen overflow-hidden relative">
    <VideoBase
      autoplay
      class="hero-video"
      :height="2160"
      loop
      :poster="posterSrc"
      :src="videoSrc"
      :width="3840"
    />

    <SectionBase :class="sectionClassList_" tag="div">
      <template #default>
        <slot name="default"></slot>
      </template>
    </SectionBase>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    posterSrc: {
      required: true,
      type: String
    },

    sectionClassList: {
      default: '',
      type: String
    },

    videoSrc: {
      required: true,
      type: String
    }
  },

  computed: {
    sectionClassList_(): string {
      return `hero-section ${this.sectionClassList}`
    }
  }
})
</script>
