<template>
  <span
    class="static md:absolute block whitespace-nowrap transition-all"
    :class="classList"
    >{{ title }}<span v-show="activeIndex">.</span></span
  >
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    active: {
      required: true,
      type: Number
    },

    index: {
      required: true,
      type: Number
    },

    title: {
      required: true,
      type: String
    }
  },

  computed: {
    activeIndex(): boolean {
      return this.active === this.index
    },

    classList(): string[] {
      return [
        `opacity-${
          this.order < 3 && this.index >= this.active
            ? this.opacityGet(40)
            : '0'
        }`,
        `top-${this.topGet(5)}`,
        `sm:top-${this.topGet(8)}`,
        `2xl:top-${this.topGet(10)}`,
        this.activeIndex ? ' underline' : ''
      ]
    },

    order(): number {
      return Math.abs(this.active - this.index)
    }
  },

  methods: {
    opacityGet(factor: number): number {
      return 100 - this.order * factor
    },

    topGet(factor: number): number {
      return this.index * factor
    }
  }
})
</script>
