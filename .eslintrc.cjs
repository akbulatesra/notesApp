module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard', 'airbnb'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 0,
    semi: 0,
    'space-before-function-paren': 0,
    'comma-dangle': 0,
    'operator-linebreak': ['error', 'before'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    'block-spacing': 'error',
    'linebreak-style': 1,
    'arrow-body-style': 0,
    'no-underscore-dangle': 0,
  },
};
