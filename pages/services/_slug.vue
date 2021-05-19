<template>
  <article>
    <!-- hero -->
    <HeroBase

      :image="service.image"
      section-class-list="pb-9 sm:pb-24 xs:h-screen-half lg:h-screen-half"
    >
      <template #default>
        <!-- heading -->
        <h2
          class="font-title font-bold text-sm md:text-xl left-2 md:left-4 bottom-3 md:bottom-6 absolute"
        >
          {{ service.title }}
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
            {{ service.description }}
          </h3>

          <!-- body -->
          <p
            class="font-sans text-gray-dark text-xs md:row-start-2 md:col-start-2"
          >
            {{ service.body }}
          </p>
        </template>
      </Grid>
    </section>

    <!-- related insights -->
    <section v-if="insightsShow" class="bg-blue-dark px-2 md:px-4 py-3 md:py-6">
      <!-- container -->
      <div class="container">
        <!-- arrow and heading -->
        <div class="flex items-baseline">
          <!-- arrow -->
          <ArrowBase class="mr-1 text-blue" />

          <!-- heading -->
          <h2
            class="font-bold font-title text-sm text-white tracking-wider uppercase"
          >
            Related Insights
          </h2>
        </div>

        <!-- insights -->
        <ArticleList
          :articles="insights"
          class="mt-4"
          component="InsightBase"
        />
      </div>
    </section>

    <!-- related services -->
    <section
      v-if="servicesShow"
      class="px-2 md:px-4 py-3 md:py-6 border-t border-solid border-gray-light"
    >
      <!-- container -->
      <div class="container">
        <!-- heading and arrow -->
        <div class="flex items-baseline">
          <!-- arrow -->
          <ArrowBase class="mr-1 text-blue" />

          <!-- heading -->
          <h3 class="font-bold font-title text-xs tracking-wider uppercase">
            Related Services
          </h3>
        </div>

        <!-- grid -->
        <Grid class="mt-2 md:mt-4" cols-md="4">
          <!-- default -->
          <template #default>
            <!-- service -->
            <article
              v-for="serviceRelation in service.services"
              :key="serviceRelation.slug"
            >
              <!-- title -->
              <h4 class="font-sans text-sm text-purple md:text-md">
                <NuxtLink :to="serviceToGet(serviceRelation)">
                  {{ serviceRelation.title }}
                </NuxtLink>
              </h4>

              <!-- description -->
              <p class="text-gray-dark">{{ serviceRelation.description }}</p>
            </article>
          </template>
        </Grid>
      </div>
    </section>
  </article>
</template>

<script lang="ts">
import type { Context } from '@nuxt/types'
import type {
  AuthorResultT,
  CategoryContentT,
  CategoryResultT,
  ImageResultT,
  InsightContentT,
  InsightResultT,
  ServiceContentT,
  ServiceResultT
} from '@/types'
import {
  ServiceBaseI,
  ImageBaseI,
  InsightBaseI,
  AuthorBaseI,
  CategoryBaseI
} from '@/interfaces'
import Vue from 'vue'
import {
  insightResultFilterPublishMap,
  serviceFind,
  serviceMap
} from '@/utilities'

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

      const categories: CategoryResultT = await $content(
        'categories'
      ).fetch<CategoryBaseI>()

      const categoriesFiltered: string[] = categories
        .filter(({ services }: CategoryContentT): boolean => {
          if (Array.isArray(services)) {
            return (services as string[]).includes(params.slug)
          } else {
            return false
          }
        })
        ?.map(({ slug }: CategoryContentT): string => slug)

      const images: ImageResultT = await $content('images').fetch<ImageBaseI>()

      let insights: InsightResultT = await $content('insights')
        .where({ categories: { $containsAny: categoriesFiltered } })
        .sortBy('publish', 'desc')
        .limit(2)
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

      const services: ServiceResultT = await $content(
        'services'
      ).fetch<ServiceBaseI>()

      let service: ServiceContentT | undefined

      if (Array.isArray(services)) {
        service = serviceFind(services, params.slug)

        if (service && Array.isArray(images)) {
          service = serviceMap(service, services, images)
        }
      }

      return {
        insights,
        service
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
    },

    servicesShow(): boolean {
      return this.service?.services?.length > 0
    }
  },

  methods: {
    serviceToGet({ slug }: ServiceContentT): string {
      return `/services/${slug}`
    }
  }
})
</script>
