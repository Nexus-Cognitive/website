module.exports = {
  extends: ['stylelint-config-sass-guidelines', 'stylelint-config-prettier'],
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          /apply/,
          /layer/,
          /responsive/,
          /screen/,
          /tailwind/,
          /variants/
        ]
      }
    ],
    'declaration-empty-line-before': 'never',
    'max-nesting-depth': 4
  }
}
