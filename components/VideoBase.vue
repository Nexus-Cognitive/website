<template>
  <video :height="height" :poster="poster" :src="src" :width="width"></video>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    height: {
      required: true,
      type: Number
    },

    poster: {
      required: true,
      type: String
    },

    src: {
      required: true,
      type: String
    },

    width: {
      required: true,
      type: Number
    }
  }
})
</script>
