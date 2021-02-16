<template>
  <img
    :alt="alt"
    :class="classList"
    :height="height"
    :src="src"
    :width="width"
  />
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import type { IDT } from '@/types'

export default Vue.extend({
  props: {
    id: {
      required: true,
      type: [Number, String] as PropType<IDT>
    },
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
      type: String
    },
    src: {
      required: true,
      type: String
    },
    width: {
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
