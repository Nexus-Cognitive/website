<template>
  <!-- insight hero -->
  <header class="insight-hero">
    <!-- cover image -->
    <ImageBase v-bind="cover" class="cover" />

    <!-- container -->
    <div class="container">
      <!-- arrow + page heading -->
      <div v-if="heading" class="arrow-heading">
        <!-- arrow -->
        <ArrowBase class="arrow" />

        <!-- heading -->
        <h1 class="heading">{{ heading }}</h1>
      </div>

      <!-- title + link -->
      <component :is="titleIs" class="title">
        <!-- link -->
        <NuxtLink v-if="linkShow" :to="to">
          <!-- title -->
          {{ title }}
        </NuxtLink>

        <!-- title -->
        <template v-else>
          {{ title }}
        </template>
      </component>

      <!-- description -->
      <p class="description">{{ description }}</p>

      <!-- authors -->
      <AuthorList :authors="authors" class="authors" />

      <!-- categories + publish -->
      <div class="categories-publish">
        <!-- categories -->
        <CategoryList :categories="categories" class="categories" />

        <!-- publish -->
        <p class="publish">
          {{ publish | dateFormat }}
        </p>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import type { AuthorContentsT, CategoryContentsT, ImageContentT } from '@/types'
import Vue, { PropType } from 'vue'

export default Vue.extend({
  props: {
    authors: {
      required: true,
      type: Array as PropType<AuthorContentsT>
    },

    categories: {
      required: true,
      type: Array as PropType<CategoryContentsT>
    },

    cover: {
      required: true,
      type: Object as PropType<ImageContentT>
    },

    description: {
      required: true,
      type: String
    },

    heading: {
      default: '',
      type: String
    },

    linkShow: {
      default: true,
      type: Boolean
    },

    publish: {
      required: true,
      type: String,
      validator: (v: string): boolean =>
        /^\d{4}(-(\d{2})){2}T(\d{2}:?){3}(.\d{3})?Z$/.test(v)
    },

    slug: {
      required: true,
      type: String
    },

    title: {
      required: true,
      type: String
    }
  },

  computed: {
    titleIs(): string {
      return `h${this.heading ? '2' : '1'}`
    },

    to(): string {
      return `/insights/${this.slug}`
    }
  }
})
</script>

<style lang="scss" scoped>
.arrow {
  @apply mr-1 text-blue;
}

.arrow-heading {
  @apply flex items-center;
}

.authors {
  @apply mt-5;
}

.categories-publish {
  @apply font-mono mt-2 pl-7;
}

.container {
  @apply z-10;
}

.cover {
  @apply absolute left-0 max-w-none xl:max-w-full object-cover land:w-full xs:max-h-full top-0 z-0;
  filter: opacity(20%);
}

.description {
  @apply font-mono mt-1 md:text-sm;
}

.heading {
  @apply font-bold font-title lg:text-sm tracking-widest uppercase;
}

.insight-hero {
  @apply bg-blue-dark flex items-center min-h-screen-three-quarter pb-4 md:pb-6 pt-16 md:pt-24 px-4 md:px-6 relative text-white;
}

.publish {
  @apply text-gray-light;
}

.title {
  @apply mt-2 text-sm md:text-md lg:text-lg;
}
</style>
