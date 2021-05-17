<template>
  <Grid class="container mt-6 px-4 my-6" cols-md="2">
    <template #default>
      <ul :class="listClassList">
        <li v-for="(section, index) in sections" :key="sectionKeyGet(section)">
          <NuxtLink
            v-if="sectionLinkableGet(section)"
            :class="itemClassListGet(index)"
            :to="sectionToGet(section)"
          >
            {{ section | capitalize }}
          </NuxtLink>

          <template v-else>
            <p class="font-bold text-sm md:text-md">
              {{ section | capitalize }}
            </p>
          </template>
        </li>
      </ul>
    </template>
  </Grid>
</template>

<script lang="ts">
import type { SectionContentT } from '@/types'
import Vue, { PropType } from 'vue'

export default Vue.extend({
  props: {
    sectionCurrent: {
      default: undefined,
      type: Object as PropType<SectionContentT | undefined>
    },

    sections: {
      required: true,
      type: Array as PropType<string[]>
    }
  },

  computed: {
    listClassList(): object {
      return {
        'flex items-baseline': true,
        'justify-between': this.sectionsFull
      }
    },

    sectionsFull(): boolean {
      return this.sections.length > 2
    },

    sectionsLast() {
      return this.sections.length - 1
    }
  },

  methods: {
    itemClassListGet(index: number): object {
      return {
        'text-sm md:text-md underline hover:no-underline': true,
        'mr-4': !this.sectionsFull && index < this.sectionsLast
      }
    },

    sectionKeyGet(section: string): string {
      return `section-${section}`
    },

    sectionLinkableGet(section: string): boolean {
      return section !== this.sectionCurrent?.slug
    },

    sectionToGet(section: string): string {
      return `/insights/sections/${section}`
    }
  }
})
</script>
