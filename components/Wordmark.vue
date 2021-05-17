<template>
  <div class="flex items-center wordmark">
    <Logo class="mr-2" />

    <h1
      class="font-bold font-title inline-block text-xs md:text-sm text-white tracking-wide md:tracking-widest uppercase"
    >
      <NuxtLink :is-exact-active="false" to="/">Nexus Cognitive</NuxtLink>
    </h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
.wordmark {
  animation: 1s appear;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
