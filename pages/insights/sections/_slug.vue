<template>
  <article v-if="sectionCurrent">
    <HeroBase
      v-if="insightFeature"
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

    <SectionNavigation
      v-if="sectionsShow"
      :section-current="sectionCurrent"
      :sections="sections"
    />

    <SectionInsights
      v-if="insightsBusinessShow"
      background-color="green"
      :insights="insightsBusiness"
      title="Business"
      :title-show="false"
    />

    <SectionInsights
      v-if="insightsTechnologyShow"
      background-color="red"
      :insights="insightsTechnology"
      title="Technology"
      :title-show="false"
    />

    <SectionInsights
      v-if="insightsDesignShow"
      background-color="purple"
      :insights="insightsDesign"
      title="Design"
      :title-show="false"
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
  SectionContentT,
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

      const images: ImageResultT = await $content('images').fetch<ImageBaseI>()

      const sections: SectionResultT = await $content(
        'sections'
      ).fetch<SectionBaseI>()

      const sectionCurrent: SectionContentT | undefined = sections?.find(
        ({ slug }: SectionContentT): boolean => slug === params.slug
      )

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

      if (Array.isArray(insights)) {
        if (sectionCurrent) {
          insightFeature = insights.find(
            (insight: InsightContentT): boolean => {
              return insight.feature && typeof insight.section === 'object'
                ? insight.section.slug === sectionCurrent.slug
                : typeof insight.section === 'string'
                ? insight.section === sectionCurrent.clug
                : false
            }
          )
        }

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

        insightsBusiness = insightsFilterSection(insights, 'business')

        insightsDesign = insightsFilterSection(insights, 'design')

        insightsTechnology = insightsFilterSection(insights, 'technology')
      }

      return {
        insightFeature,
        insightsBusiness,
        insightsDesign,
        insightsTechnology,
        sectionCurrent
      }
    } catch (e: any) {
      error({ message: e.toString() })
    }
  },

  data(): any {
    const insightsBusiness: InsightResultT = []
    const insightsDesign: InsightResultT = []
    const insightsTechnology: InsightResultT = []
    let sectionCurrent: SectionContentT | undefined

    return {
      insightsBusiness,
      insightsDesign,
      insightsTechnology,
      sectionCurrent
    }
  },

  computed: {
    insightsBusinessLength(): number {
      return this.insightsBusiness?.length
    },

    insightsBusinessShow(): boolean {
      return (
        this.sectionCurrent.slug === 'business' &&
        this.insightsBusinessLength > 0
      )
    },

    insightsDesignLength(): number {
      return this.insightsDesign?.length
    },

    insightsDesignShow(): boolean {
      return (
        this.sectionCurrent.slug === 'design' && this.insightsDesignLength > 0
      )
    },

    insightsTechnologyLength(): number {
      return this.insightsTechnology?.length
    },

    insightsTechnologyShow(): boolean {
      return (
        this.sectionCurrent.slug === 'technology' &&
        this.insightsTechnologyLength > 0
      )
    },

    sections(): string[] {
      return [
        this.insightsBusinessLength > 0 ? 'business' : '',
        this.insightsTechnologyLength > 0 ? 'technology' : '',
        this.insightsDesignLength > 0 ? 'design' : ''
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

    sectionLinkableGet(section: string): boolean {
      return section !== this.sectionCurrent?.slug
    },

    sectionToGet(section: string): string {
      return `/insights/sections/${section}`
    }
  }
})
</script>
