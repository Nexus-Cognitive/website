<template>
  <section class="px-4 mb-7 mt-6">
    <Grid
      v-if="titleShow"
      class="container"
      :cols-md="colsMd"
      :cols2xl="cols2xl"
    >
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
      :cols2xl="cols2xl"
    />

    <div v-if="linkShow" class="container mt-4">
      <NuxtLink class="hover:no-underline underline" :to="to"
        >View all {{ title }} Insights</NuxtLink
      >
    </div>
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
      validator: (v: number | string): boolean =>
        typeof v === 'number' || !isNaN(parseInt(v))
    },

    cols2xl: {
      default: 2,
      type: [Number, String],
      validator: (v: number | string): boolean =>
        typeof v === 'number' || !isNaN(parseInt(v))
    },

    insights: {
      required: true,
      type: Array as PropType<InsightContentsT>
    },

    linkShow: {
      default: true,
      type: Boolean
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
    },

    to(): string {
      return `/insights/sections/${this.title.toLowerCase()}`
    }
  }
})
</script>
