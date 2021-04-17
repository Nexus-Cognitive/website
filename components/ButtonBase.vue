<template>
  <button :class="classList" v-bind="$attrs">
    <span v-html="text"></span>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    text: {
      required: true,
      type: String
    }
  },

  computed: {
    classList() {
      return {
        '': true
      }
    }
  }
})
</script>
