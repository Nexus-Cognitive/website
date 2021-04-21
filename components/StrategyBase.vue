<template>
  <section :class="classList">
    <ImageBase
      v-if="imageShow"
      v-bind="image"
      class="md:h-screen object-cover md:row-start-1"
      :class="imageClassList"
    />

    <SectionBase
      class="flex flex-col justify-between md:py-6 lg:py-9 md:w-full"
      :class="sectionClassList"
    >
      <h2 :class="titleClassList" v-html="title"></h2>

      <p :class="bodyClassList" v-html="body"></p>

      <ul :class="industriesClassList">
        <li
          v-for="(industry, index) in industries"
          :key="industry.slug"
          :class="industryClassListGet(index)"
          v-html="industry.title"
        ></li>
      </ul>
    </SectionBase>
  </section>
</template>

<script lang="ts">
import type { ColorContentT, ImageContentT, IndustryContentT } from '@/types'
import Vue, { PropType } from 'vue'
import { ImageContentM } from '@/models'

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

    bodyColor: {
      required: true,
      type: Object as PropType<ColorContentT>
    },

    image: {
      default: (): ImageContentT => ImageContentM,
      type: Object as PropType<ImageContentT>
    },

    imageRight: {
      default: false,
      type: Boolean
    },

    industries: {
      required: true,
      type: Array as PropType<IndustryContentT[]>
    },

    title: {
      required: true,
      type: String
    },

    titleColor: {
      required: true,
      type: Object as PropType<ColorContentT>
    }
  },

  computed: {
    bodyClassList(): string {
      return `font-mono mt-1 3xl:mt-2 text-${this.bodyColor.slug} 3xl:text-sm`
    },

    classList(): string {
      return `bg-${this.backgroundColor.slug} md:h-screen-half lg:h-screen grid md:grid-cols-2 md:grid-rows-1 overflow-hidden`
    },

    imageClassList(): object {
      return {
        'md:col-start-2': this.imageRight
      }
    },

    imageShow(): boolean {
      return !!this.image.src
    },

    industriesClassList(): string {
      return `mt-2 md:mt-auto ${this.titleColor_}`
    },

    sectionClassList(): object {
      return {
        'md:col-start-2': !this.imageRight
      }
    },

    titleClassList(): string {
      return `font-bold text-md sm:text-lg md:text-md lg:text-lg 3xl:text-xl ${this.titleColor_}`
    },

    titleColor_(): string {
      return `text-${this.titleColor.slug}`
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
