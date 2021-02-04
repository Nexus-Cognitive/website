<template></template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import * as Interfaces from '@/interfaces'

@Component
export default class Article extends Vue implements Interfaces.Article.Base {
  @Prop() id!: number
  @Prop() authors!: Interfaces.Author.Base[]
  @Prop() categories!: Interfaces.Category.Base[]
  @Prop() description!: string
  @Prop() feature!: Interfaces.Image.Base
  @Prop() subtitle!: string
  @Prop() title!: string

  created() {}
}
</script>
