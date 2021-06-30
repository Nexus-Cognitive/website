<template>
  <article v-if="solution">
      <HeroBase
      background-color="blue-dark"
      :image="solution.cover">
      <template #default>
        <div class="text-left">
          <AuthorList :authors="solution.authors" class="mt-3" />
          <h1 class="font-bold font-title mt-2 text-sm sm:text-lg 2xl:text-xl">
            {{ solution.client }}
          </h1>
          <CategoryList :categories="solution.categories" class="mt-1" />
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
import type { MetaInfo } from 'vue-meta'
import type {
  AuthorResultT,
  CategoryResultT,
  ImageResultT,
  SolutionResultT
} from '@/types'
import {
  AuthorBaseI,
  CategoryBaseI,
  ImageBaseI,
  SolutionBaseI
} from '@/interfaces'
import Vue from 'vue'
import { solutionResultMap } from '@/utilities'

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

      let solution: SolutionResultT = await $content(
        'solutions',
        params.slug
      ).fetch<SolutionBaseI>()

      solution = solutionResultMap(solution, authors, categories, images)

      let description: string = 'How our team empowered a government agency.'

      let title: string = 'Solution'

      if (solution && !Array.isArray(solution)) {
        description = solution.description

        title = solution.client
      }

      return {
        description,
        solution,
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
      titleTemplate: '%s | Solutions | Government | Nexus Cognitive',
      meta: [
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
