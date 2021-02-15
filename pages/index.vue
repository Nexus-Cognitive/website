<template>
  <div class="container">
    <p v-if="alertShow" :class="alertClassList" role="alert">
      {{ alertMessage }}
    </p>

    <section class="grid grid-cols-2 gap-8 mt-4">
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
import { mapActions, mapState } from 'vuex'
import { storeModuleKeyGet } from '@/utilities'

const storeModuleKey = storeModuleKeyGet('insights')

export default Vue.extend({
  data() {
    const alerted: boolean = false

    return {
      alerted
    }
  },

  computed: {
    ...mapState(storeModuleKey, ['acting', 'alert', 'base']),

    alertClassList(): (null | string)[] {
      return [
        this.alerted ? null : 'animate-pulse',
        this.alert.error ? 'bg-red-300' : 'bg-green-300',
        'px-3',
        'py-2',
        'mx-auto',
        'rounded-lg',
        'mt-4',
        'shadow-md',
        'flex',
        'items-center',
        this.alert.error ? 'text-red-900' : 'text-green-900'
      ]
    },

    alertMessage(): string {
      return this.alert.error ? this.alert.error : this.alert.success
    },

    alertShow(): boolean {
      return this.alert.error || this.alert.success
    }
  },

  created() {
    this.baseGet().then(() => {
      if (this.alert.error || this.alert.success) this.alertedTimeout()
    })
  },

  methods: {
    ...mapActions(storeModuleKey, ['baseGet']),

    alertedTimeout(): void {
      setTimeout(() => (this.alerted = !this.alerted), 2000)
    }
  }
})
</script>
