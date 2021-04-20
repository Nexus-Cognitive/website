<template>
  <HeroBase :image="image">
    <template #default> </template>
  </HeroBase>
</template>

<script lang="ts">
import type { Context } from '@nuxt/types'
import type { ImageContentT } from '@/types'
import type { ImageBaseI } from '@/interfaces'
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content, error }: Context): Promise<object | undefined> {
    try {
      const image: ImageContentT = (await $content('images', 'about-hero')
        .fetch<ImageBaseI>()
        .catch((e: any) => error({ message: e.toString() }))) as ImageContentT

      return {
        image
      }
    } catch (e: any) {
      error({ message: e.toString() })
    }
  }
})
</script>
