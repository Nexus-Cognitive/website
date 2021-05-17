<template>
  <Grid :cols-md="colsMd">
    <template #default>
      <component
        v-bind="article"
        :is="component"
        v-for="article in articles"
        :key="article.slug"
      />
    </template>
  </Grid>
</template>

<script lang="ts">
import type { ArticleContentsT } from '@/types'
import type { InsightBaseI, SolutionBaseI } from '@/interfaces'
import Vue, { PropType } from 'vue'

export default Vue.extend({
  props: {
    // articles

    articles: {
      required: true,
      type: Array as PropType<ArticleContentsT<InsightBaseI | SolutionBaseI>>
    },

    // component

    component: {
      required: true,
      type: String
    },

    // columns

    colsMd: {
      default: 2,
      type: [Number, String],
      validator: (v: any): boolean =>
        typeof v === 'number' || !isNaN(parseInt(v))
    }
  }
})
</script>
