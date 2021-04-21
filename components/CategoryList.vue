<template>
  <ul>
    <li v-for="(category, index) in categories" :key="category.slug">
      {{ category.title }}
      <span v-if="categoryDelimiterShow(index)" class="mx-1">|</span>
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
    categoriesLast(): number {
      return this.categories.length - 1
    }
  },

  methods: {
    categoryDelimiterShow(index: number): boolean {
      return index < this.categoriesLast
    }
  }
})
</script>
