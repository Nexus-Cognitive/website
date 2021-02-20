module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    camelcase: [
      'error',
      {
        allow: [
          'last_modified',
          'modular_content',
          'next_page',
          'sitemap_locations',
          'taxonomy_group',
          'url_slug'
        ]
      }
    ],
    'vue/no-v-html': 'off',
    'vue/prop-name-casing': ['error', 'camelCase' | 'snake_case']
  }
}
