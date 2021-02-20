<template>
  <div class="inline-block">
    <span v-for="(category, index) in categories" :key="category.codename">
      <nuxt-link :to="nuxtLinkToGet(category.codename)">{{
        category.name
      }}</nuxt-link
      ><span v-if="commaShowGet(index)">, </span>
    </span>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { kebabCase } from 'lodash'
import type { ContentTaxonomyTermI } from '@/interfaces'

export default Vue.extend({
  props: {
    categories: {
      required: true,
      type: Array as PropType<ContentTaxonomyTermI[]>
    }
  },

  computed: {
    categoriesLast() {
      return this.categories.length - 1
    }
  },

  methods: {
    commaShowGet(index: number): boolean {
      return index !== this.categoriesLast
    },

    nuxtLinkToGet(codename: string): string {
      return `/insights/categories/${kebabCase(codename)}`
    }
  }
})
</script>
