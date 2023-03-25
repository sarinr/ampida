module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: ["eslint:recommended"],
  overrides: [
    {
      files: ["**/__tests__/**/*"],
      env: {
        jest: true,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        groups: [['^node:'], ['^\\u0000', '^@?\\w'], ['^'], ['^\\.']],
      },
    ],
    'simple-import-sort/exports': 'error',
  },
};
