<template>
  <div class="vimeo-wrapper flex justify-center items-center">
    <iframe
      class="vimeo-iframe"
      frameborder="0"
      webkitallowfullscreen
      mozallowfullscreen
      allowfullscreen
      :src="video.src"
    />
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    video: {
      required: true,
      type: Object
    }
  }
})
</script>
