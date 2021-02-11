<template>
  <div class="container mx-auto">
    <p v-if="alert.error" :class="alertErrorClassList" role="alert">
      {{ alert.error }}
    </p>
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
    ...mapState(storeModuleKey, ['acting', 'alert']),

    alertErrorClassList(): (null | string)[] {
      return [
        this.alerted ? null : 'animate-pulse',
        'bg-red-300',
        'p-6',
        'mx-auto',
        'rounded-lg',
        'mt-4',
        'shadow-md',
        'flex',
        'items-center',
        'text-red-900'
      ]
    }
  },

  created() {
    this.indexGet().then(() => {
      if (this.alert.error || this.alert.success) this.alertedTimeout()
    })
  },

  methods: {
    ...mapActions(storeModuleKey, ['indexGet']),

    alertedTimeout(): void {
      setTimeout(() => (this.alerted = !this.alerted), 2000)
    }
  }
})
</script>
