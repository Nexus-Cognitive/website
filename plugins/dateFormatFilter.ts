import Vue from 'vue'

const IntlDateTimeFormatter = new Intl.DateTimeFormat([])

Vue.filter('dateFormat', (value: string) => {
  return IntlDateTimeFormatter.format(new Date(value))
})
