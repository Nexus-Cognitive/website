<template>
  <article>
    <header>
      <h2 class="text-lg">{{ title }}</h2>
      <p>{{ subtitle }}</p>
      <div class="flex items-center">
        <div class="mr-1">By:</div>
        <img
          v-for="{ id, image } in authors"
          :key="id"
          :alt="image.alt"
          class="mr-1 rounded-full"
          :height="image.height"
          :src="image.url"
          :width="image.width"
        />
      </div>
    </header>
    <section>
      {{ description }}
    </section>
  </article>
</template>

<script lang="ts">
import 'reflect-metadata'
import { Component, Prop, Vue } from 'vue-property-decorator'
import type {
  InsightBaseI,
  AuthorBaseI,
  CategoryBaseI,
  ImageBaseI
} from '@/interfaces'

@Component
export default class Article extends Vue implements InsightBaseI {
  @Prop() id!: number
  @Prop() authors!: AuthorBaseI[]
  @Prop() categories!: CategoryBaseI[]
  @Prop() description!: string
  @Prop() feature!: ImageBaseI
  @Prop() subtitle!: string
  @Prop() title!: string

  created() {}
}
</script>
