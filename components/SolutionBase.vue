<template>
  <article class="base">
    <!-- cover container -->
    <div class="cover-container">
      <!-- image -->
      <ImageBase v-bind="cover" class="cover-image" />
    </div>
    <!-- content container -->
    <div class="content-container">
      <header>
        <!-- categories -->
        <CategoryList :categories="categories" />
        <!-- heading -->
        <h2 class="client">
          <!-- link -->
          <NuxtLink :to="to">
            <!-- client -->
            {{ client }}
          </NuxtLink>
        </h2>
      </header>
      <!-- description -->
      <p class="description">
        {{ description }}
      </p>
      <!-- footer -->
      <footer class="footer">
        <!-- authors -->
        <AuthorList :authors="authors" class="authors" />
      </footer>
    </div>
  </article>
</template>

<script lang="ts">
import type { AuthorContentsT, CategoryContentsT, ImageContentT } from '@/types'
import Vue, { PropType } from 'vue'

export default Vue.extend({
  inheritAttrs: false,

  props: {
    authors: {
      required: true,
      type: Array as PropType<AuthorContentsT>
    },

    categories: {
      required: true,
      type: Array as PropType<CategoryContentsT>
    },

    client: {
      required: true,
      type: String
    },

    cover: {
      required: true,
      type: Object as PropType<ImageContentT>
    },

    description: {
      required: true,
      type: String
    },

    slug: {
      required: true,
      type: String
    }
  },

  computed: {
    to(): string {
      return `/gov/solutions/${this.slug}`
    }
  }
})
</script>

<style scoped lang="scss">
.base {
  @apply bg-white gap-3 md:gap-4 grid grid-cols-1 xl:grid-cols-2 overflow-hidden rounded-lg shadow text-black;
}

.authors {
  @apply mt-2;
}

.content {
  &-container {
    @apply flex flex-col pb-3 px-3 xl:pl-0 xl:pr-4 xl:py-4;
  }
}

.cover {
  &-container,
  &-image {
    @apply h-24 sm:h-32 xl:h-full;
  }

  &-image {
    @apply object-cover w-full;
  }
}

.client {
  @apply font-bold font-title mt-2 text-sm xl:text-md;
}

.description {
  @apply mt-1;
}

.footer {
  @apply mt-auto;
}
</style>
