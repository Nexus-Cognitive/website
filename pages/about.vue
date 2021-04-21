<template>
  <article>
    <HeroBase :image="aboutHero">
      <template #default>
        <h1 class="sr-only">About</h1>
        <p class="page-title-large">An agency rethinking how we work, play and experience the future economy.</p>
      </template>
    </HeroBase>
    
    <SlideBase v-bind="weAreSlide" class="h-screen-half"/>

    <section class="px-3 sm:px-6 py-6 sm:py-9 text-black z-10 bg-white">
      <div class="flex items-center">
        <ArrowBase class="mr-1"/><h2 class="text-md xl:text-lg uppercase">Led by</h2></div>
      <p class="font-mono mt-3 text-xs xl:text-sm max-w-prose">An experienced leadership team with 100 years of combined experience in delivering technology led outcomes.</p>
    </section>

    <SectionBase class="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 bg-white">
      <template #default>
        <AuthorCard v-for="author in authors" :key="author.slug" v-bind="author" class="mx-auto" />
      </template>
    </SectionBase>
    
  </article>
</template>

<script lang="ts">
import type { Context } from '@nuxt/types'
import type { AuthorContentsT, ImageContentT, SlideContentT, ImageContentsT, ColorContentsT, VideoContentsT } from '@/types'
import type { AuthorBaseI, ImageBaseI, SlideBaseI, ColorBaseI, VideoBaseI } from '@/interfaces'
import Vue from 'vue'
import { authorMap, imageFind, slideMap } from '@/utilities'

export default Vue.extend({
  async asyncData({ $content, error }: Context): Promise<object | undefined> {
    try {
      const colors: ColorContentsT = (await $content('colors')
        .fetch<ColorBaseI>()) as ColorContentsT

      const images: ImageContentsT = (await $content('images')
        .fetch<ImageBaseI>()) as ImageContentsT

      const videos: VideoContentsT = (await $content('videos')
        .fetch<VideoBaseI>()) as VideoContentsT

      const aboutHero: ImageContentT = 
        imageFind(images, 'about-hero') as ImageContentT
      
      const aboutImageOne: ImageContentT = 
        imageFind(images, 'the-future-isnt-static') as ImageContentT

      let weAreSlide: SlideContentT = (await $content('slides', 'we-are')
        .fetch<SlideBaseI>()) as SlideContentT

      weAreSlide = slideMap(weAreSlide, colors, images, videos)

      let authors: AuthorContentsT = (await $content('authors').where({
        partner: true
      }).fetch<AuthorBaseI>()) as AuthorContentsT

      authors = authors.map(author => authorMap(author, images))

      // let ledBySlide: SlideContentT = (await $content('slides', 'led-by')
      //   .fetch<SlideBaseI>()) as SlideContentT

      // ledBySlide = slideMap(ledBySlide, colors, images)

      return {
        aboutHero,
        aboutImageOne,
        weAreSlide,
        authors,
        // ledBySlide
      }
    } catch (e: any) {
      error({ message: e.toString() })
    }
  }
})
</script>

