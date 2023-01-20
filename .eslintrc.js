// eslint-disable-next-line @typescript-eslint/no-var-requires
const prettierConfig = require('./.prettierrc');
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/react-in-jsx-scope': 0,
    'prettier/prettier': ['error', prettierConfig],
    'react/prop-types': 0,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
    'no-console': 2,
    'import/named': 0,
    'import/no-unresolved': 0,
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc' },
      },
    ],
  },
  plugins: ['react', 'prettier', '@typescript-eslint', 'jsx-a11y'],
  parser: '@typescript-eslint/parser',
  globals: {
    console: true,
    module: true,
    process: true,
    __DEV__: true,
    Promise: true,
    setTimeout: true,
    fetch: true,
    require: true,
    global: true,
  },
};
