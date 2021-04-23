module.exports = {
  extends: ['stylelint-config-sass-guidelines', 'stylelint-config-prettier'],
  plugins: ['stylelint-scss'],
  rules: {
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'apply',
          'layer',
          'responsive',
          'screen',
          'tailwind',
          'variants'
        ]
      }
    ],
    'declaration-empty-line-before': 'never',
    'max-nesting-depth': 4,
    'selector-no-qualifying-type': [
      true,
      {
        ignore: 'attribute'
      }
    ]
  }
}
