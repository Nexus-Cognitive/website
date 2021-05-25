<template>
  <section class="px-4 mt-6">
    <Grid v-if="titleShow" class="container" :cols-md="colsMd">
      <div class="flex items-center" :class="textColor_">
        <ArrowBase class="mr-1" />

        <h2 class="cross title">
          {{ title }}
        </h2>
      </div>
    </Grid>

    <ArticleList
      :articles="insights"
      class="container mt-5"
      component="InsightBase"
      :cols-md="colsMd"
    />
  </section>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { InsightContentsT } from '@/types'

export default Vue.extend({
  props: {
    colsMd: {
      default: 1,
      type: [Number, String],
      validator: (v: any): boolean =>
        typeof v === 'number' || !isNaN(parseInt(v))
    },

    insights: {
      required: true,
      type: Array as PropType<InsightContentsT>
    },

    textColor: {
      required: true,
      type: String,
      validator: (v: string): boolean =>
        ['blue', 'blue-dark', 'green', 'purple', 'red'].includes(v)
    },

    title: {
      required: true,
      type: String
    },

    titleShow: {
      default: true,
      type: Boolean
    }
  },

  computed: {
    textColor_(): string {
      return `text-${this.textColor}`
    }
  }
})
</script>
