<template>
  <div>
    <time :datetime="last_modified">
      {{ last_modified | dateFormat }}
    </time>
    |
    <insight-categories :categories="categories"></insight-categories>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import type { ContentTaxonomyTermI } from '@/interfaces'

export default Vue.extend({
  props: {
    categories: {
      required: true,
      type: Array as PropType<ContentTaxonomyTermI[]>
    },

    last_modified: {
      required: true,
      type: String
    }
  }
})
</script>
