<template>
  <img
    :alt="description"
    :class="classList"
    :height="height"
    :src="url"
    :width="width"
  />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    description: {
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
    url: {
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
