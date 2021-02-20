import Vue from 'vue'

Vue.filter('capitalize', (value: string): string => value.slice(0, 1).toUpperCase() + value.slice(1))
