<template>
  <article
    class="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-lg"
    :class="classList"
  >
    <div
      class="flex overflow-hidden md:row-start-1"
      :class="imageContainerClassList"
    >
      <ImageBase class="object-cover" v-bind="cover" />
    </div>

    <div class="flex flex-col p-3 md:p-6" :class="contentClassList">
      <header>
        <p v-if="feature" class="category flex items-baseline">
          <ArrowBase class="md:-ml-3 mr-1" />Featured Insight
        </p>

        <CategoryList :categories="categories" :class="categoriesClassList" />

        <h2 class="font-bold font-mono mt-2" :class="titleClassList">
          {{ title }}
        </h2>
      </header>

      <p :class="descriptionClassList">
        {{ description }}
      </p>

      <AuthorList :authors="authors" class="mt-2" />
    </div>
  </article>
</template>

<script lang="ts">
import type { AuthorContentsT, CategoryContentsT, ImageContentT } from '@/types'
import Vue, { PropType } from 'vue'

export default Vue.extend({
  inheritAttrs: false,

  props: {
    authors: {
      required: true,
      type: Array as PropType<AuthorContentsT>
    },

    categories: {
      required: true,
      type: Array as PropType<CategoryContentsT>
    },

    cover: {
      required: true,
      type: Object as PropType<ImageContentT>
    },

    description: {
      required: true,
      type: String
    },

    feature: {
      required: true,
      type: Boolean
    },

    subtitle: {
      default: '',
      type: String
    },

    title: {
      required: true,
      type: String
    }
  },

  computed: {
    categoriesClassList(): object {
      return {
        'md:flex': this.feature
      }
    },

    classList(): object {
      return {
        'bg-purple shadow-lg': this.feature,
        'bg-white shadow-md': !this.feature
      }
    },

    contentClassList(): object {
      return {
        'justify-center text-white': this.feature,
        'text-black': !this.feature
      }
    },

    descriptionClassList(): object {
      return {
        'mt-2 text-sm': this.feature,
        'mt-1': !this.feature
      }
    },

    imageContainerClassList(): object {
      return {
        'md:col-start-2': !this.feature
      }
    },

    titleClassList(): object {
      return {
        'text-md md:text-lg': this.feature,
        'text-sm': !this.feature
      }
    }
  }
})
</script>
