import Vue from 'vue'

const IntlDateTimeFormatter = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  month: 'short',
  year: 'numeric'
})

Vue.filter('dateFormat', (value: string) => {
  return IntlDateTimeFormatter.format(new Date(value))
})
