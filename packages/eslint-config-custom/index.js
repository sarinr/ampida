module.exports = {
  extends: ["next", "turbo", "prettier"],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
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
  settings: {
    react: {
      version: "detect",
    },
  },
};
