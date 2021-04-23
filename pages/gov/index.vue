<template>
  <a id="anchor" href="https://dev-nexus-corp-blog.azurewebsites.net/gov/"></a>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'empty',

  mounted(): void {
    document.getElementById('anchor')?.click()
  }
})
</script>
