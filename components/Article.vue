<template>
  <article></article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import * as Interfaces from '@/interfaces'

@Component
export default class Article extends Vue implements Interfaces.Article.Base {
  @Prop(Number) readonly id!: number
  @Prop(Array) readonly authors!: Interfaces.Author.Base[]
  @Prop(Array) categories!: Interfaces.Category.Base[]
  @Prop(String) description!: string
  @Prop(Object) feature!: Interfaces.Image.Base
  @Prop(String) subtitle!: string
  @Prop(String) title!: string

  created() {}
}
</script>
