<template>
  <article v-if="insight">
    <HeroBase
      background-color="blue-dark"
      :image="insight.cover"
      section-class-list="xs:h-screen-three-quarter"
    >
      <template #default>
        <div class="text-left">
          <h1 class="font-bold font-title mt-2 text-sm sm:text-md 2xl:text-lg">
            {{ insight.title }}
          </h1>

          <p class="font-light font-mono mt-1 text-xs sm:text-sm 2xl:text-md">
            {{ insight.description }}
          </p>
          <AuthorList :authors="insight.authors" class="mt-3" />
        </div>
      </template>
    </HeroBase>

    <div class="container px-3 md:px-0 py-6">
      <NuxtContent
        class="mx-auto prose prose-blue prose-lg"
        :document="insight"
      />
      <div class="max-w-prose mx-auto">
        <CategoryList
          :categories="insight.categories"
          class="mt-3 text-gray-dark"
        />

        <p class="font-mono mt-3 text-gray-dark">
          {{ insight.publish | dateFormat }}
        </p>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import type { Context } from '@nuxt/types'
import type { MetaInfo } from 'vue-meta'
import type {
  AuthorResultT,
  CategoryResultT,
  ImageResultT,
  InsightResultT
} from '@/types'
import {
  AuthorBaseI,
  CategoryBaseI,
  ImageBaseI,
  InsightBaseI,
  MetaBaseI,
  MetaPageI
} from '@/interfaces'
import Vue from 'vue'
import { authorRelationsMetaMap, insightResultMap } from '@/utilities'

export default Vue.extend({
  async asyncData({
    $content,
    error,
    params
  }: Context): Promise<object | void> {
    try {
      const authors: AuthorResultT = await $content(
        'authors'
      ).fetch<AuthorBaseI>()

      const categories: CategoryResultT = await $content(
        'categories'
      ).fetch<CategoryBaseI>()

      const images: ImageResultT = await $content('images').fetch<ImageBaseI>()

      let insight: InsightResultT = await $content(
        'insights',
        params.slug
      ).fetch<InsightBaseI>()

      insight = insightResultMap(insight, authors, categories, images)

      let authorMetas: MetaBaseI[] = []
      let description: string = 'Inform your intuition with our expertise.'
      let title: string = 'Insight'

      if (!!insight && !Array.isArray(insight)) {
        authorMetas = authorRelationsMetaMap(insight.authors)
        description = insight.description
        title = insight.title
      }

      return {
        authors: authorMetas,
        description,
        title,
        insight
      }
    } catch (e: any) {
      error({ message: e.toString() })
    }
  },

  data(): MetaPageI {
    const authorMetas: MetaBaseI[] = []
    const description: string = 'Inform your intuition with our expertise.'
    const title: string = 'Insight'

    return {
      authors: authorMetas,
      description,
      title
    }
  },

  head(): MetaInfo {
    return {
      title: this.title,
      titleTemplate: '%s | Insights | Nexus Cognitive',
      meta: [
        ...(this.authors ?? []),
        {
          content: this.description,
          hid: 'description',
          name: 'description'
        }
      ]
    }
  }
})
</script>
