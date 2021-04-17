<template>
  <component :is="tag" class="px-3 sm:px-6 py-6 sm:py-9 text-white z-10">
    <slot name="default"></slot>
  </component>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    tag: {
      default: 'section',
      type: String
    }
  }
})
</script>
