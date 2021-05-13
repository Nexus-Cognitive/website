<template>
  <article>
    <!-- hero -->
    <HeroBase
      header-height="three-quarter"
      :image="category.image"
      section-class-list="pb-9 sm:pb-24"
    >
      <template #default>
        <!-- heading -->
        <h2
          class="font-title font-bold text-sm md:text-xl left-2 md:left-4 bottom-3 md:bottom-6 absolute"
        >
          {{ category.title }}
        </h2>
      </template>
    </HeroBase>

    <!-- description and body -->
    <section class="px-2 md:px-4 py-3 md:py-6">
      <!-- grid -->
      <Grid class="container" cols-md="2">
        <!-- default -->
        <template #default>
          <!-- description -->
          <h3 class="font-title text-black text-sm md:text-md">
            {{ category.description }}
          </h3>
        </template>
      </Grid>
    </section>

    <!-- insights -->
    <section class="bg-blue-dark px-2 md:px-4 pt-1 pb-3 md:pt-3 md:pb-6">
      <!-- <section v-if="insightsShow" class="bg-blue-dark px-2 md:px-4 py-3 md:py-6"> -->
      <!-- container -->
      <div class="container">
        <!-- insights list -->
        <ArticleList
          :articles="insights"
          class="mt-4"
          component="InsightBase"
        />
      </div>
    </section>
  </article>
</template>

<script lang="ts">
import type { Context } from '@nuxt/types'
import type {
  ArticleContentT,
  AuthorContentsT,
  CategoryContentT,
  CategoryContentsT,
  ImageContentsT,
  InsightContentT,
  InsightContentsT
} from '@/types'
import {
  ImageBaseI,
  InsightBaseI,
  AuthorBaseI,
  CategoryBaseI
} from '@/interfaces'
import Vue from 'vue'
import { insightsMap } from '~/utilities'

export default Vue.extend({
  async asyncData({
    $content,
    error,
    params
  }: Context): Promise<object | undefined> {
    try {
      const authors: AuthorContentsT = (await $content(
        'authors'
      ).fetch<AuthorBaseI>()) as AuthorContentsT

      const images: ImageContentsT = (await $content(
        'images'
      ).fetch<ImageBaseI>()) as ImageContentsT

      const categories: CategoryContentsT = (await $content(
        'categories'
      ).fetch<CategoryBaseI>()) as CategoryContentsT

      const category: CategoryContentT | undefined = categories.find(
        ({ slug }) => slug === params.slug
      )

      let insights: InsightContentsT = []

      if (category) {
        insights = (await $content('insights')
          .where({ categories: { $contains: category.slug } })
          .sortBy('publish', 'desc')
          .fetch<InsightBaseI>()) as InsightContentsT

        if (insights?.length) {
          insights = insightsMap(insights, authors, categories, images).map(
            (insight: ArticleContentT): ArticleContentT => {
              insight.feature = false
              return insight
            }
          ) as InsightContentsT
        }

        insights = insights.filter(
          ({ feature, publish }: InsightContentT): boolean =>
            !feature && publish <= new Date().toISOString()
        )
      }

      return {
        authors,
        insights,
        category
      }
    } catch (e: any) {
      error({ message: e.toString() })
    }
  },

  data(): any {
    return {}
  },

  computed: {
    insightsShow(): boolean {
      return this.insights?.length > 0
    }
  }
})
</script>
