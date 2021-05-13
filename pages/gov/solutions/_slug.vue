<template>
  <article>
    <HeroBase background-color="blue-dark" :image="solution.cover">
      <template #default>
        <div class="text-left">
          <CategoryList :categories="solution.categories" class="mt-1" />

          <AuthorList :authors="solution.authors" class="mt-3" />

          <h1 class="font-bold font-title mt-2 text-sm sm:text-lg 2xl:text-xl">
            {{ solution.client }}
          </h1>
          <h2 class="font-light font-mono mt-2 text-xs sm:text-sm 2xl:text-md">
            <strong>Project:</strong> {{ solution.description }}
          </h2>
          <p class="font-light font-mono mt-1 text-xs sm:text-sm 2xl:text-md">
           <strong> Outcomes:</strong> {{ solution.outcomes }}
          </p>
     
        </div>
      </template>
    </HeroBase>

    <div class="container py-6">
      <div class="mx-auto prose prose-blue prose-lg">
        <h2>Problem</h2>

        <p>{{ solution.problem }}</p>

        <NuxtContent :document="solution" />
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import type { Context } from '@nuxt/types'
import type {
  AuthorContentsT,
  CategoryContentsT,
  ImageContentsT,
  SolutionContentT
} from '@/types'
import {
  AuthorBaseI,
  CategoryBaseI,
  ImageBaseI,
  SolutionBaseI
} from '@/interfaces'
import Vue from 'vue'
import { solutionMap } from '@/utilities'

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

      let solution: SolutionContentT = (await $content(
        'solutions',
        params.slug
      ).fetch<SolutionBaseI>()) as SolutionContentT

      solution = solutionMap(
        solution,
        authors,
        categories,
        images
      ) as SolutionContentT

      return {
        solution
      }
    } catch (e: any) {
      error({ message: e.toString() })
    }
  }
})
</script>
