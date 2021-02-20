import type { InsightElementI } from '@/interfaces'

export const InsightElementM: InsightElementI = {
  body: {
    images: {},
    links: {},
    modular_content: [],
    name: 'Body',
    type: 'text',
    value: ''
  },
  categories: {
    name: 'Categories',
    taxonomy_group: 'categories',
    type: 'taxonomy',
    value: [
      {
        codename: '',
        name: ''
      }
    ]
  },
  description: {
    name: 'Description',
    type: 'text',
    value: ''
  },
  feature: {
    name: 'Feature',
    type: 'asset',
    value: [
      {
        description: '',
        height: 0,
        name: '',
        size: 0,
        type: '',
        url: '',
        width: 0
      }
    ]
  },
  introduction: {
    name: 'Introduction',
    type: 'text',
    value: ''
  },
  subtitle: {
    name: 'Subtitle',
    type: 'text',
    value: ''
  },
  title: {
    name: 'Title',
    type: 'text',
    value: ''
  },
  url: {
    name: 'URL',
    type: 'url_slug',
    value: ''
  }
}
