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

    height: {
      required: true,
      type: Number
    },

    src: {
      required: true,
      type: String
    },

    width: {
      required: true,
      type: Number
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
