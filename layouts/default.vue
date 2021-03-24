<template>
  <div class="container gap-4 grid grid-cols-1 md:grid-cols-4">
    <header class="col-span-1">
      <navigation-base></navigation-base> &copy; {{ dateStart
      }}<template v-if="dateRangeShow">–{{ dateCurrent }}</template> Nexus
      Cognitive
    </header>

    <main class="col-span-1 md:col-span-3">
      <Nuxt />
    </main>
  </div>
</template>
