import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import js from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginReact.configs.flat.recommended,
  {
    name: 'global-settings',
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    name: 'ignoring-lint-files',
    ignores: ['*.config.js'],
  },
  {
    name: 'rule-bypasser',
    files: ['src/**/*.{js,jsx}'],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      semi: 'error',
    },
  },
  {
    name: 'language-rule',
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: globals.browser,
    },
  },
];
