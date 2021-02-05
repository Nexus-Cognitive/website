<template>
  <article></article>
</template>

<script lang="ts">
import 'reflect-metadata'
import { Component, Prop, Vue } from 'vue-property-decorator'
import type {
  ArticleBaseI,
  AuthorBaseI,
  CategoryBaseI,
  ImageBaseI
} from '@/interfaces'

@Component
export default class Article extends Vue implements ArticleBaseI {
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
