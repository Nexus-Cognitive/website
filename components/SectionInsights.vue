<template>
  <section class="px-4 my-6">
    <Grid v-if="titleShow" class="container" :cols-md="colsMd">
      <div :class="titleClassList">
        <ArrowBase :class="arrowClassList" />
        <h2 class="cross title">{{ title }}</h2>
      </div>
    </Grid>

    <ArticleList
      :articles="insights"
      class="container mt-4"
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
    backgroundColor: {
      default: 'blue',
      type: String,
      validator: (v: string): boolean =>
        ['blue', 'blue-dark', 'green', 'purple', 'red'].includes(
          v.toLowerCase()
        )
    },

    colsMd: {
      default: 2,
      type: [Number, String],
      validator: (v: any): boolean =>
        typeof v === 'number' || !isNaN(parseInt(v))
    },

    insights: {
      required: true,
      type: Array as PropType<InsightContentsT>
    },

    title: {
      required: true,
      type: String
    },

    titleBlock: {
      default: true,
      type: Boolean
    },

    titleShow: {
      default: true,
      type: Boolean
    }
  },

  computed: {
    arrowClassList(): object {
      return {
        'mr-1': true,
        'text-blue': !this.titleBlock
      }
    },

    titleClassList(): string[] {
      return [
        'flex items-center',
        this.titleBlock ? `bg-${this.backgroundColor} px-2 py-1 text-white` : ''
      ]
    }
  }
})
</script>
