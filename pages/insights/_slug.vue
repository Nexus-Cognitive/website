<template>
  <article>
    <HeroBase background-color="blue-dark" :image="insight.cover">
      <template #default>
        <div class="text-left">
          <CategoryList :categories="insight.categories" class="flex" />

          <AuthorList :authors="insight.authors" class="mt-2" />

          <h1 class="font-light font-mono mt-1 text-sm sm:text-lg 2xl:text-xl">
            {{ insight.title }}
          </h1>

          <p class="mt-1 page-subtitle">{{ insight.subtitle }}</p>

          <p class="font-light font-mono mt-1 text-xs sm:text-sm 2xl:text-md">
            {{ insight.description }}
          </p>
        </div>
      </template>
    </HeroBase>

    <div class="container py-6">
      <NuxtContent
        class="mx-auto prose prose-blue prose-lg"
        :document="insight"
      />
    </div>
  </article>
</template>

<script lang="ts">
import type { Context } from '@nuxt/types'
import type {
  AuthorContentsT,
  CategoryContentsT,
  ColorContentT,
  ImageContentsT,
  InsightContentT
} from '@/types'
import {
  AuthorBaseI,
  CategoryBaseI,
  ColorBaseI,
  ImageBaseI,
  InsightBaseI
} from '@/interfaces'
import Vue from 'vue'
import { insightMap } from '@/utilities'

export default Vue.extend({
  async asyncData({
    $content,
    error,
    params
  }: Context): Promise<object | void> {
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

      let insight: InsightContentT = (await $content(
        'insights',
        params.slug
      ).fetch<InsightBaseI>()) as InsightContentT

      insight = insightMap(insight, authors, categories, images)

      return {
        insight
      }
    } catch (e: any) {
      error({ message: e.toString() })
    }
  }
})
</script>
