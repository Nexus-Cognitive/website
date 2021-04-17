<template>
  <article>
    <ImageBase :alt="featureAlt" :src="feature" />

    <header>
      <h2 class="text-lg">
        {{ title }}
      </h2>

      <p v-if="!!subtitle">
        {{ subtitle }}
      </p>

      <div class="flex items-center">
        <div class="mr-1">By:</div>

        <AuthorList :authors="authors" />
      </div>

      <div class="flex items-center">
        <div class="mr-1">In:</div>

        <CategoryList :categories="categories" />
      </div>
    </header>

    <p>
      {{ description }}
    </p>
  </article>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  props: {
    authors: {
      required: true,
      type: Array as PropType<string[]>
    },

    categories: {
      required: true,
      type: Array as PropType<string[]>
    },

    description: {
      required: true,
      type: String
    },

    feature: {
      required: true,
      type: String
    },

    subtitle: {
      default: '',
      type: String
    },

    title: {
      required: true,
      type: String
    }
  },

  computed: {
    featureAlt(): string {
      return `‘${this.title}’ Featured Image`
    }
  }
})
</script>
