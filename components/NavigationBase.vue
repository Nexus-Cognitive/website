<template>
  <nav>
    <div class="flex flex-wrap items-center">
      <Wordmark class="mr-auto" />

      <button @click="hiddenToggle">
        <IconMenu />
      </button>
    </div>

    <ol class="float-right w-full mt-2 text-right" :class="listClassList">
      <li
        v-for="route in routes"
        :key="route.name"
        class="block mt-1 sm:text-sm font-title"
        :class="routeClassListGet(route.name)"
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

interface hidable {
  hidden: boolean
}

export default Vue.extend({
  data(): hidable {
    const hidden: boolean = true

    return {
      hidden
    }
  },

  computed: {
    listClassList(): object {
      return {
        hidden: this.hidden
      }
    },

    routeLast(): number {
      return this.routes.length - 1
    },

    routes(): RouteRecordPublic[] {
      return this.$router
        .getRoutes()
        .filter((route) => route.path.split('/').length === 2)
        .reverse()
    }
  },

  watch: {
    $route() {
      if (!this.hidden) {
        this.hiddenToggle()
      }
    }
  },

  methods: {
    hiddenToggle(): void {
      this.hidden = !this.hidden
    },

    routeClassListGet(name: string): object {
      return {
        underline: name === this.$route.name
      }
    }
  }
})
</script>
