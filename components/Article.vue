<template>
  <article></article>
</template>

<script lang="ts">
import 'reflect-metadata'
import { Component, Prop, Vue } from 'vue-property-decorator'
import * as Interfaces from '@/interfaces'

@Component
export default class Article extends Vue implements Interfaces.ArticleBase {
  @Prop() id!: number
  @Prop() authors!: Interfaces.AuthorBase[]
  @Prop() categories!: Interfaces.CategoryBase[]
  @Prop() description!: string
  @Prop() feature!: Interfaces.ImageBase
  @Prop() subtitle!: string
  @Prop() title!: string

  created() {}
}
</script>
