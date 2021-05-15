<template>
  <section class="px-4 my-6">
    <Grid v-if="titleShow" class="container" cols-md="2">
      <div :class="titleClassList">
        <ArrowBase class="mr-1" />
        <h2 class="cross title">{{ title }}</h2>
      </div>
    </Grid>

    <ArticleList
      :articles="insights"
      class="container mt-4"
      component="InsightBase"
    />
  </section>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { InsightContentsT } from '@/types'

export default Vue.extend({
  props: {
    backgroundColor: {
      required: true,
      type: String,
      validator: (v: string): boolean =>
        ['blue', 'blue-dark', 'green', 'purple', 'red'].includes(v)
    },

    insights: {
      required: true,
      type: Array as PropType<InsightContentsT>
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
    titleClassList(): string {
      return `bg-${this.backgroundColor} flex items-center px-2 py-1 text-white`
    }
  }
})
</script>
