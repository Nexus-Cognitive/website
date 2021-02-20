<template>
  <div class="container gap-4 grid grid-cols-1 md:grid-cols-4">
    <header class="col-span-1">
      <navigation-base></navigation-base>
      
      &copy; {{ dateStart }}<template v-if="dateRangeShow">–{{ dateCurrent }}</template> Nexus Cognitive
    </header>
    
    <main class="col-span-1 md:col-span-3">
      <Nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      dateStart: 2021
    }
  },

  computed: {
    dateCurrent(): number {
      return new Date().getFullYear()
    },

    dateRangeShow(): boolean {
      return this.dateCurrent > this.dateStart
    }
  }
})
</script>
