<template>
  <img :alt="alt" :class="classList" :src="src" />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  inheritAttrs: false,

  props: {
    alt: {
      required: true,
      type: String
    },

    avatar: {
      default: false,
      type: Boolean
    },

    src: {
      required: true,
      type: String
    }
  },

  computed: {
    classList() {
      return {
        'rounded-full': this.avatar
      }
    }
  }
})
</script>
