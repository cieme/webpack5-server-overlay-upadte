module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['google', 'prettier'],
  // parser: 'babel-eslint',
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: ['@typescript-eslint'],
  rules: {},
};
