<template>
  <nav>
    <ol>
      <li>
        <nuxt-link :to="{ name: 'index' }">
          Home
        </nuxt-link>
      </li>

      <li v-for="route in routes" :key="route.name">
        <nuxt-link :to="{ name: route.name }">
          {{ route.name | capitalize }}
        </nuxt-link>
      </li>
    </ol>
  </nav>
</template>

<script lang="ts">
import { RouteRecordPublic } from 'vue-router'
import Vue from 'vue'

export default Vue.extend({
  computed: {
    routes(): RouteRecordPublic[] {
      return this.$router
        .getRoutes()
        .filter(route => route.path.split('/').length === 2)
    }
  }  
})
</script>
