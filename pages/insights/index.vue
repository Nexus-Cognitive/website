<template>
  <article>
    <HeroBase :image="image">
      <template #default>
        <p>Featured</p>
        <h2>{{ insightFeature.title }}</h2>
        <p>{{ insightFeature.description }}</p>
      </template>
    </HeroBase>

    <div
      class="container gap-4 grid grid-cols-1 md:grid-cols-2 mt-4 mx-auto px-4"
    >
      <InsightBase
        v-for="insight in insights"
        v-bind="insight"
        :key="insight.slug"
      />
    </div>
  </article>
</template>

<script lang="ts">
import type { Context } from '@nuxt/types'
import type {
  AuthorContentT,
  AuthorContentsT,
  CategoryContentsT,
  ImageContentT,
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
import { authorsFilter, categoriesFilter, imageFind } from '@/utilities'

export default Vue.extend({
  async asyncData({ $content, error }: Context): Promise<object | undefined> {
    try {
      const images: ImageContentsT = (await $content(
        'images'
      ).fetch<ImageBaseI>()) as ImageContentsT

      const authors: AuthorContentsT = (await $content(
        'authors'
      ).fetch<AuthorBaseI>()) as AuthorContentsT

      const categories: CategoryContentsT = (await $content(
        'categories'
      ).fetch<CategoryBaseI>()) as CategoryContentsT

      let insights: InsightContentsT = (await $content('insights')
        .only([
          'authors',
          'categories',
          'description',
          'feature',
          'subtitle',
          'title'
        ])
        .sortBy('publish', 'desc')
        .fetch<InsightBaseI>()) as InsightContentsT

      const insightFeature: InsightContentT | undefined = insights.find(
        (insight: InsightContentT): boolean => insight.feature
      )

      const image: ImageContentT | undefined = imageFind(
        images,
        insightFeature?.cover
      )

      insights = insights.map(
        (insight: InsightContentT): InsightContentT => {
          if (insight.authors?.length) {
            insight.authors = authorsFilter(authors, insight.authors)

            insight.authors = authors.map(
              (author: AuthorContentT): AuthorContentT => {
                if (author.image) {
                  author.image = imageFind(images, author.image as string)
                }

                return author
              }
            )
          }

          if (insight.categories?.length) {
            insight.categories = categoriesFilter(
              categories,
              insight.categories
            )
          }

          if (insight.cover) {
            insight.cover = imageFind(images, insight.cover as string)
          }

          return insight
        }
      )

      return {
        image,
        insightFeature,
        insights
      }
    } catch (e: any) {
      error({ message: e.toString() })
    }
  }
})
</script>
