<template>
  <article>
    <!-- hero -->
    <HeroBase
      v-if="category"
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
    <section v-if="category.description" class="px-2 md:px-4 py-3 md:py-6">
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
    <section
      v-if="insightsShow"
      class="bg-blue-dark px-2 md:px-4 pt-1 pb-3 md:pt-3 md:pb-6"
    >
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
import type { MetaInfo } from 'vue-meta'
import type {
  AuthorResultT,
  CategoryContentT,
  CategoryResultT,
  InsightContentT,
  InsightResultT,
  ImageResultT
} from '@/types'
import {
  AuthorBaseI,
  CategoryBaseI,
  ImageBaseI,
  InsightBaseI
} from '@/interfaces'
import Vue from 'vue'
import { insightResultFilterPublishMap } from '~/utilities'

export default Vue.extend({
  async asyncData({
    $content,
    error,
    params
  }: Context): Promise<object | undefined> {
    try {
      const authors: AuthorResultT = await $content(
        'authors'
      ).fetch<AuthorBaseI>()

      const images: ImageResultT = await $content('images').fetch<ImageBaseI>()

      const categories: CategoryResultT = await $content(
        'categories'
      ).fetch<CategoryBaseI>()

      const category: CategoryContentT | undefined = categories?.find(
        ({ slug }: CategoryContentT): boolean => slug === params.slug
      )

      let description: string = 'Insights focused on'

      let title: string = 'Category'

      if (category) {
        title = category.title

        description = category.description
          ? category.description
          : `${description} ${title}`
      }

      let insights: InsightResultT = []

      if (category) {
        insights = await $content('insights')
          .where({ categories: { $contains: category.slug } })
          .sortBy('publish', 'desc')
          .fetch<InsightBaseI>()

        insights = insightResultFilterPublishMap(
          insights,
          authors,
          categories,
          images
        )?.map(
          (insight: InsightContentT): InsightContentT => {
            insight.feature = false
            return insight
          }
        )
      }

      return {
        authors,
        category,
        description,
        insights,
        title
      }
    } catch (e: any) {
      error({ message: e.toString() })
    }
  },

  data(): any {
    const description: string = ''
    const title: string = ''

    return {
      description,
      title
    }
  },

  head(): MetaInfo {
    return {
      title: this.title,
      titleTemplate: '%s | Categories | Insights | Nexus Cognitive',
      meta: [
        {
          content: this.description,
          hid: 'description',
          name: 'description'
        }
      ]
    }
  },

  computed: {
    insightsShow(): boolean {
      return this.insights?.length > 0
    }
  }
})
</script>
