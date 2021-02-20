import Vue from 'vue'

Vue.filter('commaDelimit', (values: string[]): string => {
  return values.join(', ')
})
