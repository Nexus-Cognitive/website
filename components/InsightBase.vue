<template>
  <article>
    <header>
      <h2 class="text-lg">
        {{ title }}
      </h2>

      <p v-if="subtitle">
        {{ subtitle }}
      </p>

      <div class="flex items-center">
        <div class="mr-1">By:</div>

        <image-base
          v-for="author in authors"
          :key="author.id"
          avatar
          class="mr-1"
          v-bind="author.image"
        ></image-base>
      </div>
    </header>

    <section>
      <p>
        {{ description }}
      </p>
    </section>
  </article>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import type { IDT } from '@/types'
import type { AuthorBaseI, CategoryBaseI, ImageBaseI } from '@/interfaces'

export default Vue.extend({
  props: {
    id: {
      required: true,
      type: [Number, String] as PropType<IDT>
    },

    authors: {
      required: true,
      type: Array as PropType<AuthorBaseI[]>
    },

    categories: {
      required: true,
      type: Array as PropType<CategoryBaseI[]>
    },

    description: {
      required: true,
      type: String
    },

    feature: {
      required: true,
      type: Object as PropType<ImageBaseI>
    },

    subtitle: {
      default: '',
      type: String
    },

    title: {
      required: true,
      type: String
    }
  }
})
</script>
