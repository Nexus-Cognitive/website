<template>
  <ul>
    <li v-for="author in authorsContent" :key="author.slug">
      <AuthorBase v-bind="author" />
    </li>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  props: {
    authors: {
      required: true,
      type: Array as PropType<string[]>
    }
  },

  async asyncData({ $content, error }): Promise<object | undefined> {
    const authorsContent = await $content('authors')
      .where({ slug: { $in: this.authors } })
      .sortBy('slug')
      .fetch()
      .catch((e: Error) => error({ message: e.toString() }))

    return {
      authorsContent
    }
  }
})
</script>
