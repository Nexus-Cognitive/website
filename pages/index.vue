<template>
  <div class="container">
    <alert-base v-if="!alert.success" v-bind="alert" class="mt-4"></alert-base>

    <section v-show="base.length > 1" class="grid grid-cols-2 gap-8 mt-4">
      <insight-base
        v-for="insight in base"
        :key="insight.id"
        v-bind="insight"
      ></insight-base>
    </section>
  </div>
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
