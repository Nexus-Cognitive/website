<template>
  <article class="prose">
    <header>
      <h1>Home</h1>
    </header>
    <section v-show="base.length > 1" class="grid grid-cols-2 gap-8 mt-4">
      <insight-base
        v-for="insight in base"
        :key="insight.id"
        v-bind="insight"
      ></insight-base>
    </section>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { storeDispatchKeyGet, storeModuleInstanceKeyGet } from '@/utilities'

const storeModuleInstanceKey = storeModuleInstanceKeyGet('insights')

export default Vue.extend({
  async asyncData({ store }) {
    await store.dispatch(
      storeDispatchKeyGet(storeModuleInstanceKey, ['base'], 'GET')
    )
  },

  computed: {
    ...mapState(storeModuleInstanceKey, ['acting', 'alert', 'base'])
  }
})
</script>
