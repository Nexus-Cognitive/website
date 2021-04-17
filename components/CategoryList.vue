<template>
  <ul>
    <li v-for="category in categoriesContent" :key="category.slug">
      <CategoryBase v-bind="category" />
    </li>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  props: {
    categories: {
      required: true,
      type: Array as PropType<string[]>
    }
  },

  async asyncData({ $content, error }): Promise<object | undefined> {
    const categoriesContent = await $content('categories')
      .where({ slug: { $in: this.categories } })
      .sortBy('slug')
      .fetch()
      .catch((e: Error) => error({ message: e.toString() }))

    return {
      categoriesContent
    }
  }
})
</script>
