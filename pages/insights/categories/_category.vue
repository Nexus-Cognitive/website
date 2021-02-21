<template>
  <article class="mt-7">
    <header class="prose">
      <h1>Insights: {{ name }}</h1>
    </header>

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
import { snakeCase, startCase } from 'lodash'
import { storeDispatchKeyGet, storeModuleKeyGet } from '@/utilities'

const storeModuleKey = storeModuleKeyGet('insights')

export default Vue.extend({
  async asyncData({ params, store }) {
    await store.dispatch(
      storeDispatchKeyGet(storeModuleKey, ['items'], 'GET'),
      {
        params: {
          'elements.categories[contains]': snakeCase(params.category)
        }
      }
    )

    const category: string = params.category

    return {
      category
    }
  },

  data() {
    const category: string = ''

    return {
      category
    }
  },

  computed: {
    ...mapState(storeModuleKey, ['acting', 'alert', 'items']),

    name(): string {
      return startCase(this.category)
    }
  }
})
</script>
