<template>
  <p aria-live="polite" :class="classList" role="status">
    {{ message }}
  </p>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    message: {
      default: '',
      type: String
    },

    success: {
      default: false,
      type: Boolean
    }
  },

  data() {
    const pulse: boolean = true

    return {
      pulse
    }
  },

  computed: {
    classList(): object {
      return {
        'flex items-center mx-auto px-3 py-2 rounded-lg shadow-md': true,
        'bg-red-300 text-red-900': !this.success,
        'bg-green-300 text-green-900': this.success,
        'animate-pulse': this.pulse
      }
    }
  },

  mounted(): void {
    this.timeout()
  },

  methods: {
    timeout(): void {
      setTimeout(() => (this.pulse = false), 2000)
    }
  }
})
</script>
