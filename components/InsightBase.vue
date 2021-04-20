<template>
  <article
    class="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-lg shadow"
  >
    <div class="flex overflow-hidden">
      <ImageBase class="object-cover" v-bind="cover" />
    </div>

    <div class="flex flex-col justify-center p-6">
      <header>
        <p v-if="feature" class="category flex items-baseline">
          <ArrowBase class="mr-1" />Featured Insight
        </p>

        <div class="flex">
          // <CategoryList :categories="categories" class="ml-1" />
        </div>

        <h2 class="font-bold font-mono mt-2 text-md">
          {{ title }}
        </h2>
      </header>

      <p class="mt-2 text-sm">
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
  }
})
</script>
