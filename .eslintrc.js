module.exports = {
  env: {
    es6: true,
    'jest/globals': true,
  },
  extends: ['prettier', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'prettier', 'jest'],
  rules: {
    'prettier/prettier': ['error'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'react/jsx-filename-extension': 'off',
    'global-require': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'import/no-extraneous-dependencies': ['error', {devDependencies: true}],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
