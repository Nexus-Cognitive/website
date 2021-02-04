<template></template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { ArticleItemI } from '@/interfaces/article'
import { AuthorI } from '@/interfaces/author'
import { CategoryI } from '@/interfaces/category'
import { ImageI } from '@/interfaces/image'

@Component
export default class Article extends Vue implements ArticleItemI {
  @Prop() id!: number
  @Prop() authors!: AuthorI[]
  @Prop() categories!: CategoryI[]
  @Prop() description!: string
  @Prop() feature!: ImageI
  @Prop() subtitle!: string
  @Prop() title!: string

  created() {}
}
</script>
