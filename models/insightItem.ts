import type { InsightItemI } from '@/interfaces'

export const InsightItemM: InsightItemI = {
  elements: {
    body: {
      images: {},
      links: {},
      modular_content: [],
      name: 'Body',
      type: 'rich_text',
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
  },
  modular_content: [],
  system: {
    codename: 'title_of_insight',
    collection: '',
    id: '',
    language: '',
    last_modified: '',
    name: 'Title of Insight',
    sitemap_locations: [''],
    type: 'insight'
  }
}
