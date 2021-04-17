<template>
  <nuxt-link :to="{ name: 'insights/categories', params: { slug } }">
    {{ title }}
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    slug: {
      required: true,
      type: String
    },

    title: {
      required: true,
      type: String
    }
  }
})
</script>
