<template>
  <article>
    <InsightHero heading="Insights" v-bind="insightFeature" />

    <div class="px-4">
      <SectionNavigation v-if="sectionsShow" :sections="sections" />
    </div>

    <SectionInsights
      v-if="insightsBusinessShow"
      :insights="insightsBusiness"
      text-color="green"
      title="Business"
    />

    <div class="px-4 mt-4">
      <div class="container">
        <NuxtLink
          class="hover:no-underline underline"
          :to="sectionToGet('business')"
          >View all Business Insights</NuxtLink
        >
      </div>
    </div>

    <SectionInsights
      v-if="insightsTechnologyShow"
      :insights="insightsTechnology"
      text-color="blue"
      title="Technology"
    />

    <div class="px-4 mt-4">
      <div class="container">
        <NuxtLink
          class="hover:no-underline underline"
          :to="sectionToGet('technology')"
          >View all Technology Insights</NuxtLink
        >
      </div>
    </div>

    <SectionInsights
      v-if="insightsDesignShow"
      :insights="insightsDesign"
      text-color="red"
      title="Design"
    />

    <div class="px-4 mt-4">
      <div class="container">
        <NuxtLink
          class="hover:no-underline underline"
          :to="sectionToGet('design')"
          >View all Design Insights</NuxtLink
        >
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
import {
  insightsFilterSection,
  insightResultFilterPublishMap
} from '@/utilities'

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

      let insightsBusiness: InsightResultT

      let insightsDesign: InsightResultT

      let insightFeature: InsightContentT | undefined

      let insightsTechnology: InsightResultT

      const insightLimit: number = 3

      if (Array.isArray(insights)) {
        insightFeature = insights.find(
          (insight: InsightContentT): boolean => insight.feature
        )

        insights = insights
          .filter(
            ({ slug }: InsightContentT): boolean =>
              slug !== insightFeature?.slug
          )
          .map(
            (insight: InsightContentT): InsightContentT => {
              insight.feature = false

              return insight
            }
          )

        insightsBusiness = insightsFilterSection(insights, 'business')?.slice(
          0,
          insightLimit
        )

        insightsDesign = insightsFilterSection(insights, 'design')?.slice(
          0,
          insightLimit
        )

        insightsTechnology = insightsFilterSection(
          insights,
          'technology'
        )?.slice(0, insightLimit)
      }

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

  head(): MetaInfo {
    return {
      title: 'Insights | Nexus Cognitive',
      meta: [
        {
          content:
            'Articles to deepen your understanding of business, technology, and design written by our team of experts.',
          hid: 'description',
          name: 'description'
        }
      ]
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
