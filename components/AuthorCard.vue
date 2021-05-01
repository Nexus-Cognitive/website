<template>
  <!-- Default AuthorCard -->
  <div v-if="!gov">
    <article class="text-black">
      <figure>
        <ImageBase class="h-14 w-14" v-bind="image" />
        <figcaption class="mt-2">
          <span class="font-bold tracking-wider uppercase">{{ title }}</span
          ><br /><span class="font-mono" v-html="position"></span>
        </figcaption>
      </figure>
      <div class="flex items-center mt-1 text-gray-dark">
        <a :href="href" class="mr-2"><IconEmail /></a>
        <a :href="linkedIn"
          ><ImageBase
            alt="LinkedIn Logo"
            class="linked-in-logo"
            :height="32"
            src="/images/linked-in.svg"
            :width="32"
        /></a>
      </div>
    </article>
  </div>
  <!-- Gov AuthorCard -->
  <div v-else>
    <article class="text-white">
      <figure>
        <ImageBase class="h-14 w-14" v-bind="image" />
        <figcaption class="mt-2">
          <span class="font-bold tracking-wider uppercase"
            ><abbr title="Government Point-of-contact">GOV POC</abbr>
            {{ title }}</span
          ><br /><span class="font-mono" v-html="position"></span>
        </figcaption>
      </figure>
      <div class="flex items-center mt-1 text-white">
        <a :href="href" class="mr-2"><IconEmail /></a>
        <a :href="linkedIn">
          <ImageBase
            alt="LinkedIn Logo"
            class="linked-in-logo"
            :height="32"
            src="/images/linked-in.svg"
            :width="32"
          />
        </a>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import type { ImageContentT } from '@/types'
import Vue, { PropType } from 'vue'

export default Vue.extend({
  props: {
    image: {
      required: true,
      type: Object as PropType<ImageContentT>
    },

    gov: {
      required: false,
      type: Boolean
    },

    position: {
      required: true,
      type: String
    },

    title: {
      required: true,
      type: String
    },

    linkedIn: {
      required: true,
      type: String
    },

    email: {
      required: true,
      type: String
    }
  },

  computed: {
    href(): string {
      return `mailto:${this.email}`
    }
  }
})
</script>

<style scoped>
.linked-in-logo {
  @apply h-4 w-4;
}
</style>
