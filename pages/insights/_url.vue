<template>
  <article v-if="insight" :key="$route.params.slug" class="prose prose-indigo">
    <header>
      <image-base
        class="mx-auto"
        v-bind="insight.elements.feature.value[0]"
      ></image-base>

      <insight-categories-last-modified
        class="mb-3"
        :categories="insight.elements.categories.value"
        :last_modified="insight.system.last_modified"
      ></insight-categories-last-modified>

      <h1>
        {{ insight.system.name }}
      </h1>

      <p v-if="insight.elements.subtitle.value" class="text-lg">
        {{ insight.elements.subtitle.value }}
      </p>
    </header>

    <div v-html="insight.elements.body.value"></div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'
import type { InsightItemI } from '@/interfaces'
import { storeDispatchKeyGet, storeModuleKeyGet } from '@/utilities'

const storeModuleKey = storeModuleKeyGet('insights')

export default Vue.extend({
  async asyncData({ params, store }): Promise<void> {
    await store.dispatch(
      storeDispatchKeyGet(storeModuleKey, ['items'], 'GET'),
      {
        params: {
          'elements.url': params.url
        }
      }
    )
  },

  computed: {
    ...mapState(storeModuleKey, ['acting', 'alert', 'items']),

    insight(): InsightItemI {
      return this.items[0]
    }
  },

  methods: mapActions(storeModuleKey, ['itemsGet']),

  watch: {
    '$route.params'(p) {
      this.itemsGet({
        params: {
          'elements.url': p.url
        }
      })
    }
  }
})
</script>
