<template>
  <nav>
    <div class="flex flex-wrap items-center">
      <Wordmark class="mr-auto" />

      <button class="md:hidden" @click="hiddenToggle">
        <IconMenu />
      </button>
    </div>

    <ol
      class="float-right md:flex md:items-baseline md:items-center md:w-full mt-2 text-right"
      :class="listClassList"
    >
      <li
        v-for="(route, index) in routes"
        :key="route.name"
        class="block mt-1 md:mt-0 sm:text-sm"
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
  data(): object {
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
    }
  },

  methods: {
    hiddenToggle(): void {
      this.hidden = !this.hidden
    },

    routeClassListGet(index: number, name: string): object {
      return {
        'md:mr-4': index !== this.routeLast,
        underline: name === this.$route.name
      }
    }
  }
})
</script>
