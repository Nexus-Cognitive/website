<template>
  <ul>
    <li v-for="author in authors" :key="author.slug" class="item">
      <AuthorBase v-bind="author" />
    </li>
  </ul>
</template>

<script lang="ts">
import type { AuthorContentsT } from '@/types'
import Vue, { PropType } from 'vue'

export default Vue.extend({
  props: {
    authors: {
      required: true,
      type: Array as PropType<AuthorContentsT>
    }
  }
})
</script>

<style scoped lang="scss">
.item:not(:first-child) {
  @apply mt-2;
}
</style>
