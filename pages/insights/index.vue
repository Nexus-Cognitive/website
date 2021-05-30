<template>
  <article>
    <InsightHero heading="Insights" v-bind="insightFeature" />

    <div id="insights-top" class="px-4">
      <SectionNavigation v-if="sectionsShow" :sections="sections" />
    </div>

    <SectionInsights
      v-if="insightsBusinessShow"
      :insights="insightsBusiness"
      text-color="green"
      title="Business"
    />

    <SectionInsights
      v-if="insightsTechnologyShow"
      :insights="insightsTechnology"
      text-color="blue"
      title="Technology"
    />

    <SectionInsights
      v-if="insightsDesignShow"
      :insights="insightsDesign"
      text-color="red"
      title="Design"
    />

    <svg
      id="scroll-icon"
      alt="Scroll to top of insights button"
      class="cursor-pointer fixed bottom-2 right-1 w-8 transition duration-500 opacity-50 transform hover:opacity-100"
      :style="iconStyles"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 100 100"
      @click="scrollToTop"
    >
      <path
        d="M49.6,5c-16.6,0-30,14.3-30,32v26c0,17.7,13.4,32,30,32c16.6,0,30-14.3,30-32V37C79.6,19.3,66.2,5,49.6,5z M64,56.4
	c-0.8,0.8-2,0.8-2.8,0L49.6,44.8L38,56.4c-0.8,0.8-2,0.8-2.8,0s-0.8-2,0-2.8l13-13c0.8-0.8,2-0.8,2.8,0l13,13
	C64.8,54.4,64.8,55.6,64,56.4z M71.7,33.3H27.5c-0.7,0-1.3-0.6-1.3-1.3s0.6-1.3,1.3-1.3h44.3c0.7,0,1.3,0.6,1.3,1.3
	S72.4,33.3,71.7,33.3z"
      />
    </svg>
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
    let footer: HTMLElement | undefined
    const footerFromViewportTop: number = 0
    const iconFromDocTop: number = 0
    const iconStyles: object = {}
    const insightsBusiness: InsightResultT = []
    const insightsDesign: InsightResultT = []
    let insightsNav: HTMLElement | undefined
    const insightsNavFromViewPortTop = 0
    const insightsTechnology: InsightResultT = []
    let scrollIcon: HTMLElement | undefined
    let timeoutID: number | undefined

    return {
      footer,
      footerFromViewportTop,
      iconFromDocTop,
      iconStyles,
      insightsBusiness,
      insightsDesign,
      insightsNav,
      insightsNavFromViewPortTop,
      insightsTechnology,
      scrollIcon,
      timeoutID
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

  watch: {
    iconFromDocTop(): void {
      if (this.insightsNavFromViewPortTop > 0) {
        this.iconStyles = { display: 'none' }
      } else if (this.iconFromDocTop < this.footerFromViewportTop) {
        this.iconStyles = { display: 'block', bottom: '16px' }
      } else {
        this.iconStyles = { display: 'block', top: '16px' }
      }
    }
  },

  mounted() {
    this.footer = document.getElementById('footer')
    this.insightsNav = document.getElementById('insights-top')
    this.scrollIcon = document.getElementById('scroll-icon')

    this.footerFromViewportTop =
      document.body.scrollHeight - this.footer.offsetHeight
    this.iconFromDocTop =
      this.scrollIcon!.getBoundingClientRect().bottom + window.pageYOffset
    this.insightsNavFromViewPortTop = this.insightsNav.getBoundingClientRect().top

    window.addEventListener('scroll', this.calcScrollIconPosition)
  },

  destroyed() {
    window.removeEventListener('scroll', this.calcScrollIconPosition)
  },

  methods: {
    calcScrollIconPosition() {
      this.debounce(() => {
        this.insightsNavFromViewPortTop = this.insightsNav.getBoundingClientRect().top
        this.footerFromViewportTop =
          document.body.scrollHeight - this.footer.offsetHeight
        this.iconFromDocTop =
          this.scrollIcon!.getBoundingClientRect().bottom + window.pageYOffset
      }, 200)
    },

    debounce(callback: () => any, duration: number = 100): Promise<void> {
      if (typeof this.timeoutID === 'number') {
        clearTimeout(this.timeoutID)
      }

      return new Promise((resolve): void => {
        this.timeoutID = window.setTimeout(callback, duration)

        resolve()
      })
    },

    sectionKeyGet(section: string): string {
      return `section-${section}`
    },

    sectionToGet(section: string): string {
      return `/insights/sections/${section}`
    },

    scrollToTop() {
      const elTop: number | null =
        document.getElementById('insights-top')!.getBoundingClientRect().top +
        window.scrollY
      window.scrollTo({ top: elTop, left: 0, behavior: 'smooth' })
    }
  }
})
</script>
