<template>
  <component
    :is="tag"
    class="px-3 sm:px-5 pb-5 sm:pb-8 pt-3 sm:pt-5 text-white z-10"
  >
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
