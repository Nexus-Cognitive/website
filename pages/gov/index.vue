<template>
  <article>
    <HeroBase section-class-list="md:h-screen" :video="video">
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

    <section class="bg-blue-dark px-4 py-6">
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
      <div class="sm:pl-8">
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
import type {
  AuthorContentT,
  AuthorContentsT,
  CategoryContentsT,
  ColorContentsT,
  ImageContentsT,
  ServiceContentsT,
  SolutionContentsT,
  StrategyContentsT,
  StrategyContentT,
  VideoContentT
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
  authorsMap,
  colorFind,
  imageFind,
  servicesFilter,
  solutionsMap
} from '@/utilities'

export default Vue.extend({
  async asyncData({ $content, error }: Context): Promise<object | undefined> {
    try {
      const categories: CategoryContentsT = (await $content(
        'categories'
      ).fetch<CategoryBaseI>()) as CategoryContentsT

      const colors: ColorContentsT = (await $content(
        'colors'
      ).fetch<ColorBaseI>()) as ColorContentsT

      const images: ImageContentsT = (await $content(
        'images'
      ).fetch<ImageBaseI>()) as ImageContentsT

      const services: ServiceContentsT = (await $content('services')
        .sortBy('createdAt')
        .fetch<ServiceBaseI>()) as ServiceContentsT

      let authors: AuthorContentsT = (await $content(
        'authors'
      ).fetch<AuthorBaseI>()) as AuthorContentsT

      authors = authorsMap(authors, images)

      const authorPoC: AuthorContentT = authorFind(
        authors,
        'steve-roberts'
      ) as AuthorContentT

      let solutions: SolutionContentsT = (await $content('solutions')
        .sortBy('publish', 'desc')
        .fetch<SolutionBaseI>()) as SolutionContentsT

      solutions = solutionsMap(solutions, authors, categories, images)

      let strategies: StrategyContentsT = (await $content('strategies')
        .sortBy('order')
        .fetch<StrategyBaseI>()) as StrategyContentsT

      strategies = strategies.map(
        (strategy: StrategyContentT): StrategyContentT => {
          if (strategy.backgroundColor) {
            strategy.backgroundColor = colorFind(
              colors,
              strategy.backgroundColor
            )
          }

          if (strategy.bodyColor) {
            strategy.bodyColor = colorFind(colors, strategy.bodyColor)
          }

          if (strategy.image) {
            strategy.image = imageFind(images, strategy.image)
          }

          if (strategy.services?.length) {
            strategy.services = servicesFilter(services, strategy.services)
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

          return strategy
        }
      )

      const video: VideoContentT = (await $content(
        'videos',
        'government-hero'
      ).fetch<VideoBaseI>()) as VideoContentT

      if (video.poster) {
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
  methods: {
    strategyImageRightGet(index: number): boolean {
      return !(index % 2 === 0)
    }
  }
})
</script>
