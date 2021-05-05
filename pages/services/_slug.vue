<template>
  <article>
    <HeroBase section-class-list="pb-9 sm:pb-24" :image="image">
      <template #default>
        <h2
          class="font-title font-bold text-sm md:text-xl left-3 md:left-5 bottom-5 absolute"
        >
          {{ service.heading }}
        </h2>
      </template>
    </HeroBase>
    <SectionBase class="h-auto">
      <div
        class="text-black md:grid md:grid-cols-2 grid-flow-row auto-rows-auto"
      >
        <h2 class="font-title text-sm md:text-md">{{ service.description }}</h2>
        <p class="font-mono pt-2 md:pt-0 text-xs row-start-2 col-start-2">
          {{ service.body }}
        </p>
      </div>
    </SectionBase>
  </article>
</template>

<script lang="ts">
import type { Context } from '@nuxt/types'
import type { ImageContentsT, ServiceContentT } from '@/types'
import type { ServiceBaseI, ImageBaseI } from '@/interfaces'
import Vue from 'vue'

export default Vue.extend({
  async asyncData({
    $content,
    error,
    params
  }: Context): Promise<object | undefined> {
    try {
      const service: ServiceContentT = (await $content(
        'services',
        params.slug
      ).fetch<ServiceBaseI>()) as ServiceContentT

      const image: ImageContentsT = (await $content(
        'images',
        service.image
      ).fetch<ImageBaseI>()) as ImageContentsT

      return {
        service,
        image
      }
    } catch (e: any) {
      error({ message: e.toString() })
    }
  }
})
</script>
