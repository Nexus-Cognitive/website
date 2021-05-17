<template>
  <ul class="font-mono">
    <li
      v-for="(category, index) in categories"
      :key="category.slug"
      class="inline"
    >
      <span v-if="startShow(index)">//</span>
      <NuxtLink :to="categoryToGet(category.slug)">{{
        category.title
      }}</NuxtLink
      ><span v-if="delimiterShow(index)">,</span>
    </li>
  </ul>
</template>

<script lang="ts">
import type { CategoryContentsT } from '@/types'
import Vue, { PropType } from 'vue'

export default Vue.extend({
  props: {
    categories: {
      required: true,
      type: Array as PropType<CategoryContentsT>
    }
  },

  computed: {
    last(): number {
      return this.categories.length - 1
    }
  },

  methods: {
    categoryToGet(slug: string): string {
      return `/insights/categories/${slug}`
    },

    delimiterShow(index: number): boolean {
      return index !== this.last
    },

    startShow(index: number): boolean {
      return !index
    },

    toGet(slug: string): string {
      return `/insights/categories/${slug}`
    }
  }
})
</script>
