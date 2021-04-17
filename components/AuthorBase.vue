<template>
  <figure>
    <ImageBase avatar v-bind="image" />

    <figcaption>{{ name }} | <span v-html="title"></span></figcaption>
  </figure>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import type { ImageBaseI } from '@/interfaces'

export default Vue.extend({
  props: {
    image: {
      required: true,
      type: Object as PropType<ImageBaseI>
    },

    name: {
      required: true,
      type: String
    },

    title: {
      required: true,
      type: Boolean
    }
  }
})
</script>
