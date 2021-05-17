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

    <Grid v-if="sectionsShow" class="container mt-6" cols-md="2">
      <template #default>
        <ul class="flex items-baseline justify-between">
          <li v-for="section in sections" :key="sectionKeyGet(section)">
            <NuxtLink
              class="text-sm md:text-md underline hover:no-underline"
              :to="sectionToGet(section)"
            >
              {{ section | capitalize }}
            </NuxtLink>
          </li>
        </ul>
      </template>
    </Grid>

    <SectionInsights
      v-if="insightsBusinessShow"
      background-color="green"
      :insights="insightsBusiness"
      title="Business"
    />

    <SectionInsights
      v-if="insightsTechnologyShow"
      background-color="red"
      :insights="insightsTechnology"
      title="Technology"
    />

    <SectionInsights
      v-if="insightsDesignShow"
      background-color="purple"
      :insights="insightsDesign"
      title="Design"
    />
  </article>
</template>

<script lang="ts">
import type { Context } from '@nuxt/types'
import type {
  AuthorResultT,
  CategoryResultT,
  ImageResultT,
  InsightContentT,
  InsightResultT,
  SectionResultT
} from '@/types'
import type {
  AuthorBaseI,
  CategoryBaseI,
  ImageBaseI,
  InsightBaseI,
  SectionBaseI
} from '@/interfaces'
import Vue from 'vue'
import { insightResultFilterPublishMap } from '@/utilities'

export default Vue.extend({
  async asyncData({ $content, error }: Context): Promise<object | undefined> {
    try {
      const authors: AuthorResultT = await $content(
        'authors'
      ).fetch<AuthorBaseI>()

      const categories: CategoryResultT = await $content(
        'categories'
      ).fetch<CategoryBaseI>()

      const images: ImageResultT = await $content('images').fetch<ImageBaseI>()

      const sections: SectionResultT = await $content(
        'sections'
      ).fetch<SectionBaseI>()

      let insights: InsightResultT = await $content('insights')
        .only([
          'authors',
          'categories',
          'cover',
          'description',
          'feature',
          'publish',
          'section',
          'slug',
          'title'
        ])
        .sortBy('publish', 'desc')
        .fetch<InsightBaseI>()

      insights = insightResultFilterPublishMap(
        insights,
        authors,
        categories,
        images,
        sections
      )

      const insightFeature: InsightContentT | undefined = insights?.find(
        (insight: InsightContentT): boolean => insight.feature
      )

      insights = insights
        ?.filter(
          ({ slug }: InsightContentT): boolean => slug !== insightFeature?.slug
        )
        ?.map(
          (insight: InsightContentT): InsightContentT => {
            insight.feature = false

            return insight
          }
        )

      const insightLimit: number = 3

      const insightsBusiness: InsightResultT = insights
        ?.filter(({ section }: InsightContentT): boolean => {
          if (typeof section !== 'string' && !!section?.slug) {
            return section.slug === 'business'
          } else {
            return false
          }
        })
        ?.slice(0, insightLimit)

      const insightsDesign: InsightResultT = insights
        ?.filter(({ section }: InsightContentT): boolean => {
          if (typeof section !== 'string' && !!section?.slug) {
            return section.slug === 'design'
          } else {
            return false
          }
        })
        ?.slice(0, insightLimit)

      const insightsTechnology: InsightResultT = insights
        ?.filter(({ section }: InsightContentT): boolean => {
          if (typeof section !== 'string' && !!section?.slug) {
            return section.slug === 'technology'
          } else {
            return false
          }
        })
        ?.slice(0, insightLimit)

      return {
        insightFeature,
        insightsBusiness,
        insightsDesign,
        insightsTechnology
      }
    } catch (e: any) {
      error({ message: e.toString() })
    }
  },

  data(): any {
    const insightsBusiness: InsightResultT = []
    const insightsDesign: InsightResultT = []
    const insightsTechnology: InsightResultT = []

    return {
      insightsBusiness,
      insightsDesign,
      insightsTechnology
    }
  },

  computed: {
    insightsBusinessShow(): boolean {
      return this.insightsBusiness?.length > 0
    },

    insightsDesignShow(): boolean {
      return this.insightsDesign?.length > 0
    },

    insightsTechnologyShow(): boolean {
      return this.insightsTechnology?.length > 0
    },

    sections(): string[] {
      return [
        this.insightsBusinessShow ? 'business' : '',
        this.insightsTechnologyShow ? 'technology' : '',
        this.insightsDesignShow ? 'design' : ''
      ].filter((section: string): boolean => !!section)
    },

    sectionsShow(): boolean {
      return this.sections.length > 0
    }
  },

  methods: {
    sectionKeyGet(section: string): string {
      return `section-${section}`
    },

    sectionToGet(section: string): string {
      return `/insights/sections/${section}`
    }
  }
})
</script>
