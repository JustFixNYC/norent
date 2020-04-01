// This file silences a few problematic eslint validators that were causing trouble
// with our use of graphql fragments
//
// Pulled from this response to a GitHub thread describing the issue this codebase was facing:
// https://github.com/apollographql/eslint-plugin-graphql/issues/19#issuecomment-425029137

const { specifiedRules: allGraphqlRules } = require('graphql');

const validators = allGraphqlRules
  .map(rule => rule.name)
  .filter(ruleName => [
    'NoUnusedFragments',
    'KnownFragmentNames',
    'NoUnusedVariables'
  ].findIndex(x => x === ruleName) === -1);

module.exports = {
  parser: "babel-eslint",
  rules: {
    "graphql/template-strings": ['error', {
      // .graphql files
      env: 'literal',
      schemaJson: require('./schema.json'),
      validators
    }, {
      env: 'apollo',
      schemaJson: require('./schema.json'),
    }]
  },
  plugins: [
    'graphql'
  ]
}