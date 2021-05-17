<template>
  <span
    class="align-top h-auto md:align-text-top lg:align-text-baseline 2xl:align-top inline-block relative transition-all"
    :class="classList"
  >
    <FocusBase
      v-for="(focus, index) in focuses_"
      :key="focus.slug"
      :active="focusActive"
      :index="index"
      :title="focus.title"
    />
  </span>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import type { FocusBaseI } from '@/interfaces'

export default Vue.extend({
  props: {
    focuses: {
      required: true,
      type: Array as PropType<FocusBaseI[]>
    }
  },

  data() {
    const focusActive: number = 0
    const focuses_: FocusBaseI[] = []

    return {
      focusActive,
      focuses_
    }
  },

  computed: {
    classList(): string[] {
      return [
        `md:${this.focusActive ? '-' : ''}top-${this.topGet(4)}`,
        `lg:${this.focusActive ? '-' : ''}top-${this.topGet(8)}`,
        `2xl:${this.focusActive ? '-' : ''}top-${this.topGet(10)}`
      ]
    },

    focusesLast(): number {
      return this.focusesLength - 1
    },

    focusesLength(): number {
      return this.focuses.length
    }
  },

  mounted(): void {
    this.focuses_ = this.focuses

    this.focusInterval()
  },

  methods: {
    focusInterval(): void {
      window.setInterval(() => {
        this.focusActive = 1

        this.focuses_ = [
          ...this.focuses_.slice(1, this.focusesLength),
          this.focuses_[0]
        ]

        this.focusActive = 0
      }, 3000)
    },

    topGet(factor: number): number {
      return this.focusActive * factor
    }
  }
})
</script>
