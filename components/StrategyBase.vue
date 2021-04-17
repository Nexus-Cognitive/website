<template>
  <section :class="classList">
    <ImageBase
      v-if="imageShow"
      :alt="image.alt"
      class="md:col-start-2 md:h-screen md:max-w-4xl 3xl:max-w-full object-cover md:row-start-1"
      :src="image.src"
    />

    <VideoBase v-if="videoShow" v-bind="video" />

    <SectionBase
      class="flex flex-col justify-between md:py-6 lg:py-9 md:w-full"
    >
      <h2 :class="titleClassList" v-html="title"></h2>

      <p :class="bodyClassList" v-html="body"></p>

      <ul :class="industriesClassList">
        <li
          v-for="(industry, index) in industries_"
          :key="industry.slug"
          :class="industryClassListGet(index)"
          v-html="industry.title"
        ></li>
      </ul>
    </SectionBase>
  </section>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import type { IndustryBaseI } from '@/interfaces'

export default Vue.extend({
  props: {
    backgroundColor: {
      required: true,
      type: String
    },

    body: {
      required: true,
      type: String
    },

    bodyColor: {
      required: true,
      type: String
    },

    image: {
      default: () => null,
      type: Object
    },

    industries: {
      required: true,
      type: Array as PropType<string[]>
    },

    industriesContent: {
      required: true,
      type: Array as PropType<IndustryBaseI[]>
    },

    title: {
      required: true,
      type: String
    },

    titleColor: {
      required: true,
      type: String
    },

    video: {
      default: () => null,
      type: String
    }
  },

  computed: {
    bodyClassList(): string {
      return `font-mono mt-1 3xl:mt-2 text-${this.bodyColor} 3xl:text-sm`
    },

    classList(): string {
      return `bg-${this.backgroundColor} md:h-screen-half lg:h-screen grid md:grid-cols-2 md:grid-rows-1 overflow-hidden`
    },

    imageShow(): boolean {
      return !!this.image
    },

    industries_(): IndustryBaseI[] {
      return this.industriesContent.filter(({ slug }): boolean =>
        this.industries.includes(slug)
      )
    },

    industriesClassList(): string {
      return `mt-2 md:mt-auto ${this.titleColor_}`
    },

    titleClassList(): string {
      return `font-bold text-md sm:text-lg md:text-md lg:text-lg 3xl:text-xl ${this.titleColor_}`
    },

    titleColor_(): string {
      return `text-${this.titleColor}`
    },

    videoShow(): boolean {
      return !!this.video
    }
  },

  methods: {
    industryClassListGet(index: number): object {
      return {
        'py-1 sm:py-2 md:py-1 lg:py-2 text-xs sm:text-sm md:text-xs lg:text-sm 3xl:text-md': true,
        'border-gray-light border-t-2': index > 0
      }
    }
  }
})
</script>
