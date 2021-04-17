<template>
  <section :class="classList">
    <ImageBase
      v-if="imageShow"
      :alt="image.alt"
      :src="image.src"
      class="slide-image"
    />

    <VideoBase v-if="!!video" :src="video" autoplay class="z-0" />

    <SectionBase>
      <template #default>
        <h2 :class="titleClassList" v-html="title"></h2>

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
import Vue from 'vue'

export default Vue.extend({
  props: {
    body: {
      required: true,
      type: String
    },

    color: {
      required: true,
      type: String
    },

    image: {
      default: () => null,
      type: Object
    },

    subtitle: {
      default: () => null,
      type: String
    },

    title: {
      required: true,
      type: String
    },

    video: {
      default: () => null,
      type: String
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
      return `bg-${this.color} overflow-hidden relative text-white`
    },

    imageShow(): boolean {
      return !!this.image
    },

    subtitleShow(): boolean {
      return !!this.subtitle
    },

    titleClassList(): object {
      return {
        'text-md xl:text-lg': true,
        'font-bold': this.subtitleShow
      }
    }
  }
})
</script>
