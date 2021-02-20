<template>
  <article
    class="prose prose-indigo prose-sm px-3 rounded shadow hover:shadow-md"
  >
    <header>
      <image-base v-bind="elements.feature.value[0]"></image-base>

      <insight-categories-last-modified
        :categories="elements.categories.value"
        :last_modified="system.last_modified"
      ></insight-categories-last-modified>

      <h2>
        <nuxt-link :to="nuxtLinkTo">
          {{ system.name }}
        </nuxt-link>
      </h2>

      <p v-if="elements.subtitle.value">
        {{ elements.subtitle.value }}
      </p>
    </header>
  </article>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import type { InsightElementI, SystemBaseI } from '@/interfaces'

export default Vue.extend({
  props: {
    elements: {
      required: true,
      type: Object as PropType<InsightElementI>
    },

    system: {
      required: true,
      type: Object as PropType<SystemBaseI>
    }
  },

  computed: {
    nuxtLinkTo(): string {
      return `/insights/${this.elements.url.value}`
    }
  }
})
</script>
