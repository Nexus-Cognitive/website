<template>
  <ul class="flex">
    <li v-for="(category, index) in categories" :key="category.slug">
      <CategoryBase v-bind="category" />
      <span v-if="categoryDelimiterShow(index)">|&nbsp;</span>
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
