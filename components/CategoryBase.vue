<template>
  <NuxtLink :to="{ name: 'insights/categories', params: { slug } }">
    {{ title }}
  </NuxtLink>
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
