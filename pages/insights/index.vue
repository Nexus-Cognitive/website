<template>
  <article>
    <HeroBase
      background-color="blue-dark"
      :hero-section="false"
      :image="insightFeature.cover"
    >
      <template #default>
        <h1 class="sr-only">Insights</h1>

        <InsightBase
          class="col-span-1 md:col-span-2 mt-12 text-left"
          v-bind="insightFeature"
        />
      </template>
    </HeroBase>

    <div class="bg-blue-dark px-4 py-6">
      <ArticleList
        :articles="insights"
        class="container"
        component="InsightBase"
      />
    </div>
  </article>
</template>

<script lang="ts">
import type { Context } from '@nuxt/types'
import type {
  AuthorContentsT,
  CategoryContentsT,
  ImageContentsT,
  InsightContentT,
  InsightContentsT
} from '@/types'
import type {
  AuthorBaseI,
  CategoryBaseI,
  ImageBaseI,
  InsightBaseI
} from '@/interfaces'
import Vue from 'vue'
import { insightsMap } from '@/utilities'

export default Vue.extend({
  async asyncData({ $content, error }: Context): Promise<object | undefined> {
    try {
      const authors: AuthorContentsT = (await $content(
        'authors'
      ).fetch<AuthorBaseI>()) as AuthorContentsT

      const categories: CategoryContentsT = (await $content(
        'categories'
      ).fetch<CategoryBaseI>()) as CategoryContentsT

      const images: ImageContentsT = (await $content(
        'images'
      ).fetch<ImageBaseI>()) as ImageContentsT

      let insights: InsightContentsT = (await $content('insights')
        .only([
          'authors',
          'categories',
          'cover',
          'description',
          'feature',
          'publish',
          'slug',
          'title'
        ])
        .sortBy('publish', 'desc')
        .fetch<InsightBaseI>()) as InsightContentsT

      insights = insightsMap(
        insights,
        authors,
        categories,
        images
      ) as InsightContentsT

      const insightFeature: InsightContentT | undefined = insights.find(
        (insight: InsightContentT): boolean => insight.feature
      )

      insights = insights.filter(
        ({ feature, publish }: InsightContentT): boolean =>
          !feature && publish <= new Date().toISOString()
      )

      return {
        insightFeature,
        insights
      }
    } catch (e: any) {
      error({ message: e.toString() })
    }
  }
})
</script>
