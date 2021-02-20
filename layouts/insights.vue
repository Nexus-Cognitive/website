<template>
  <article>
    <header>
      <h1>
        Insights<template v-if="$route.params.category">: {{ $route.params.category | capitalize }}</template>
      </h1>
    </header>

    <alert-base v-if="!alert.success" v-bind="alert" class="mt-4"></alert-base>

    <section v-if="items.length > 0" class="grid grid-cols-2 gap-4 mt-4">
      <insight-element
        v-for="{ elements, system } in items"
        :key="system.id"
        :elements="elements"
        :system="system"
      ></insight-element>
    </section>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { storeDispatchKeyGet, storeModuleKeyGet } from '@/utilities'

const storeModuleKey = storeModuleKeyGet('insights')

export default Vue.extend({
  async asyncData({ params, store }) {
    await store.dispatch(
      storeDispatchKeyGet(storeModuleKey, ['items'], 'GET'),
      {
        params: {
          'elements.categories[contains]': params.category
        }
      }
    )
  },

  computed: mapState(storeModuleKey, ['acting', 'alert', 'items'])
})
</script>
