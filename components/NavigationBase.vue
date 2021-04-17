<template>
  <nav>
    <ol class="flex items-center">
      <li class="mr-auto">
        <Wordmark />
      </li>

      <li
        v-for="(route, index) in routes"
        :key="route.name"
        :class="routeClassListGet(index, route.name)"
      >
        <nuxt-link :to="{ name: route.name }">
          {{ route.name | capitalize }}
        </nuxt-link>
      </li>
    </ol>
  </nav>
</template>

<script lang="ts">
import type { RouteRecordPublic } from 'vue-router'
import Vue from 'vue'

export default Vue.extend({
  computed: {
    routeLast(): number {
      return this.routes.length - 1
    },

    routes(): RouteRecordPublic[] {
      return this.$router
        .getRoutes()
        .filter((route) => route.path.split('/').length === 2)
    }
  },

  methods: {
    routeClassListGet(index: number, name: string): object {
      return {
        'mr-4': index !== this.routeLast,
        underline: name === this.$route.name
      }
    }
  }
})
</script>
