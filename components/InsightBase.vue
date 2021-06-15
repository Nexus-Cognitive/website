<template>
  <article class="base" :class="classList">
    <!-- cover container -->
    <div class="cover-container">
      <!-- image -->
      <ImageBase v-bind="cover" class="cover-image" />
    </div>

    <!-- content container -->
    <div class="content-container">
      <header>
        <!-- heading -->
        <h2 class="title">
          <!-- link -->
          <NuxtLink :to="to">
            <!-- title -->
            {{ title }}
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
        <AuthorList :authors="authors" class="mt-4 authors" />

        <!-- publish -->
        <p class="px-7 font-mono text-gray-light">
          {{ publish | dateFormat }}
        </p>
      </footer>
    </div>
  </article>
</template>

<script lang="ts">
import type { AuthorContentsT, ImageContentT } from '@/types'
import Vue, { PropType } from 'vue'

export default Vue.extend({
  inheritAttrs: false,

  props: {
    authors: {
      required: true,
      type: Array as PropType<AuthorContentsT>
    },

    cover: {
      required: true,
      type: Object as PropType<ImageContentT>
    },

    description: {
      required: true,
      type: String
    },

    feature: {
      required: true,
      type: Boolean
    },

    shadow: {
      default: false,
      type: Boolean
    },

    slug: {
      required: true,
      type: String
    },

    publish: {
      required: true,
      type: String
    },

    title: {
      required: true,
      type: String
    }
  },

  computed: {
    classList(): object {
      return {
        feature: this.feature,
        shadow: this.shadow,
        'shadow-lg': this.feature && this.shadow
      }
    },

    to(): string {
      return `/insights/${this.slug}`
    }
  }
})
</script>

<style scoped lang="scss">
.base {
  @apply bg-white gap-3 md:gap-4 grid grid-cols-1 xl:grid-cols-2 overflow-hidden text-black;

  .content {
    &-container {
      @apply xl:py-4;
    }
  }
}

.authors {
  @apply mt-2;
}

.content {
  &-container {
    @apply flex flex-col justify-center pb-3 px-3 xl:pl-0 xl:pr-4;
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

.description {
  @apply mt-1;
}

.title {
  @apply font-bold font-title mt-2 text-sm xl:text-md;
}
</style>
