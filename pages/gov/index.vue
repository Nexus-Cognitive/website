<template>
  <article>
    <HeroBase v-if="video" section-class-list="md:h-screen" :video="video">
      <template #default>
        <h1 class="sr-only">Government</h1>

        <p class="font-mono font-light text-md">
          Digitally maturing government<br class="hidden xs:hidden md:inline" />
          organizations and workflows<br class="hiddn xs:hidden md:inline" />
          for the future economy.
        </p>

        <a href="mailto:steve@nexuscognitive.com" class="link-button mt-5">
          Schedule a Consultation
        </a>
      </template>
    </HeroBase>

    <SectionBase class="flex justify-center w-full h-auto bg-purple" tag="div">
      <section
        class="flex flex-col items-start text-white z-10 xs: pt-2 sm:pt-3 px-3 md:px-0 max-w-12xl"
      >
        <div class="flex items-center">
          <ArrowBase class="mr-1" />
          <h2
            class="font-bold font-mono font-title text-xs md:text-sm tracking-widest uppercase"
          >
            We are
          </h2>
        </div>

        <p
          class="font-light font-mono font-titlexs:mt-1 mt-2 xs:text-sm text-md xl:text-lg"
        >
          A veteran owned, passionate team of technologists and developers based
          in Dallas, Texas.
        </p>
      </section>
    </SectionBase>

    <SectionBase
      class="flex flex-col justify-center w-full h-auto bg-white"
      tag="div"
    >
      <section
        class="flex flex-col items-start text-black h-full z-10 xs:pt-2 sm:pt-3 px-3 md:px-0 max-w-12xl"
      >
        <div class="flex items-center">
          <ArrowBase class="mr-1" />
          <h2
            class="font-bold font-mono font-title text-xs md:text-sm tracking-widest uppercase"
          >
            Our Capabilities
          </h2>
        </div>

        <p
          class="font-light font-mono font-titlexs:mt-1 mt-2 xs:text-sm text-md xl:text-lg"
        >
          The full spectrum of digital innovation, empowering your team with the
          tools to succeed.
        </p>
      </section>

      <div
        v-if="strategies"
        class="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 md:mt-10 px-3 md:px-0 max-w-12xl"
      >
        <StrategyBase
          v-for="strategy in strategies"
          v-bind="strategy"
          :key="strategy.slug"
          :gov="true"
        ></StrategyBase>
      </div>
    </SectionBase>

    <section v-if="solutions" class="bg-blue-dark px-4 py-6">
      <div class="container">
        <div class="flex items-baseline">
          <ArrowBase class="mr-1 text-blue" />

          <h2
            class="font-bold font-title text-sm text-white tracking-wider uppercase"
          >
            Past Performances
          </h2>
        </div>

        <ArticleList
          :articles="solutions"
          class="mt-4"
          component="SolutionBase"
        />
      </div>
    </section>

    <SectionBase class="flex w-full h-auto" tag="div">
      <section
        class="w-full flex flex-col items-start text-black z-10 xs:pt-2 sm:pt-3 px-3 md:px-0 max-w-12xl"
      >
        <div class="flex items-center">
          <ArrowBase class="mr-1" />
          <h2
            class="font-bold font-mono font-title text-xs md:text-sm tracking-widest uppercase"
          >
            Our Differentiators
          </h2>
        </div>

        <p
          class="font-bold font-mono md:ml-6 xs:mt-1 mt-2 xs:text-xs md:text-sm"
        >
          An outstanding team of highly experienced industry leaders<br />
          and staff with over 100 years of combined consulting experience.
        </p>

        <div
          class="flex mx-6 flex-wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <img
            class="w-full self-center mt-5"
            src="/images/sdvosb.svg"
            alt="Service Disabled Veteran Owned Small Business logo"
          />

          <img
            class="w-full self-center mt-5"
            src="/images/sam-gov.svg"
            alt="SAM.gov logo"
          />

          <img
            class="w-full self-center mt-5"
            src="/images/nc-hub.jpeg"
            alt="North Carolina Department of Administration Office for Historically Underutilized Business logo"
          />

          <img
            class="w-full self-center mt-5"
            src="/images/tx-hub.png"
            alt="Texas HUB - Statewide Historically Underutilized Business Program"
          />
        </div>
      </section>
    </SectionBase>

    <SectionBase
      class="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 px-4 bg-purple flex items-between"
    >
      <div v-if="authorPoC" class="sm:pl-8">
        <h2
          class="font-bold font-mono text-sm text-uppercase tracking-wider uppercase"
        >
          <abbr title="Goverment">Gov</abbr>
          <abbr title="Point of Contact">PoC</abbr>
        </h2>

        <AuthorCard v-bind="authorPoC" class="mt-2 text-white" />
      </div>

      <div class="font-mono pr-8">
        <h2 class="font-bold xs:text-xs md:text-sm">Vendor Profile</h2>

        <p class="mt-2 font-bold">
          <span>Small Business</span>
          <br />
          <span class="pt-3">Veteran-Owned Business</span>
        </p>

        <p class="mt-2">
          <span class="font-bold">DUNS:</span> 116984504<br />
          <span class="font-bold">CAGE:</span> 89N87
        </p>

        <p class="mt-2">
          <span class="font-bold">Primary NAICS</span> 518210 * Data Processing,
          Hosting,<br />
          and Related Services
        </p>

        <p class="mt-2">
          <span class="font-bold">Secondary NAICS:</span> 541611, 561499,
          541513, 541512,<br />
          611420, 541511, 541330,<br />
          522320, 541430, 519130, 541519, 541618, 541614
        </p>
      </div>
    </SectionBase>
  </article>
</template>

<script lang="ts">
import type { Context } from '@nuxt/types'
import type { MetaInfo } from 'vue-meta'
import type {
  AuthorContentT,
  AuthorResultT,
  CategoryResultT,
  ColorResultT,
  ImageResultT,
  ServiceResultT,
  SolutionResultT,
  StrategyContentT,
  StrategyResultT,
  VideoResultT
} from '@/types'
import {
  AuthorBaseI,
  CategoryBaseI,
  ColorBaseI,
  ImageBaseI,
  ServiceBaseI,
  SolutionBaseI,
  StrategyBaseI,
  VideoBaseI
} from '@/interfaces'
import Vue from 'vue'
import {
  authorFind,
  authorResultMap,
  colorFind,
  imageFind,
  servicesFilter,
  solutionResultMap
} from '@/utilities'

export default Vue.extend({
  async asyncData({ $content, error }: Context): Promise<object | undefined> {
    try {
      const categories: CategoryResultT = await $content(
        'categories'
      ).fetch<CategoryBaseI>()

      const colors: ColorResultT = await $content('colors').fetch<ColorBaseI>()

      const images: ImageResultT = await $content('images').fetch<ImageBaseI>()

      const services: ServiceResultT = await $content('services')
        .sortBy('title')
        .fetch<ServiceBaseI>()

      let authors: AuthorResultT = await $content(
        'authors'
      ).fetch<AuthorBaseI>()

      authors = authorResultMap(authors, images)

      let authorPoC: AuthorContentT | undefined

      if (Array.isArray(authors)) {
        authorPoC = authorFind(authors, 'steve-roberts')
      }

      let solutions: SolutionResultT = await $content('solutions')
        .sortBy('publish', 'desc')
        .fetch<SolutionBaseI>()

      solutions = solutionResultMap(solutions, authors, categories, images)

      let strategies: StrategyResultT = await $content('strategies')
        .sortBy('order')
        .fetch<StrategyBaseI>()

      strategies = strategies.map(
        (strategy: StrategyContentT): StrategyContentT => {
          if (Array.isArray(colors)) {
            if (strategy.backgroundColor) {
              strategy.backgroundColor = colorFind(
                colors,
                strategy.backgroundColor
              )
            }

            if (strategy.bodyColor) {
              strategy.bodyColor = colorFind(colors, strategy.bodyColor)
            }

            switch (strategy.slug) {
              case 'amplify':
                strategy.titleColor = colorFind(colors, 'green')
                break
              case 'empower':
                strategy.titleColor = colorFind(colors, 'red')
                break
              case 'illuminate':
                strategy.titleColor = colorFind(colors, 'blue')
                break
              default:
                strategy.titleColor = colorFind(colors, 'purple')
            }
          }

          if (strategy.image && Array.isArray(images)) {
            strategy.image = imageFind(images, strategy.image)
          }

          if (Array.isArray(strategy.services) && Array.isArray(services)) {
            strategy.services = servicesFilter(services, strategy.services)
          }

          return strategy
        }
      )

      const video: VideoResultT = await $content(
        'videos',
        'government-hero'
      ).fetch<VideoBaseI>()

      if (!Array.isArray(video) && video.poster && Array.isArray(images)) {
        video.poster = imageFind(images, video.poster)
      }

      return {
        authorPoC,
        authors,
        solutions,
        strategies,
        video
      }
    } catch (e: any) {
      error({ message: e.toString() })
    }
  },

  head(): MetaInfo {
    return {
      title: 'Government | Nexus Cognitive',
      meta: [
        {
          content:
            'Digitally maturing government organizations and workflows for the future economy.',
          hid: 'description',
          name: 'description'
        }
      ]
    }
  },

  methods: {
    strategyImageRightGet(index: number): boolean {
      return !(index % 2 === 0)
    }
  }
})
</script>
