module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
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
    'declaration-empty-line-before': 'never'
  }
}
