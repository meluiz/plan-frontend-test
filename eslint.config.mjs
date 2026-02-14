import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import { defineConfig, globalIgnores } from 'eslint/config';
import nextWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier/flat';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

const FILE_IGNORES = {
  ignores: [
    '**/node_modules/**',
    '**/dist/**',
    '**/build/**',
    '**/.next/**',
    '**/coverage/**',
    '**/*.mjs',
  ],
};

const MAIN_CONFIG = {
  files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
  languageOptions: {
    parser: tsparser,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    globals: {
      ...globals.browser,
      ...globals.node,
      ...globals.es2021,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: true,
      typescript: true,
    },
  },
  plugins: {
    '@typescript-eslint': tseslint,
    react,
    'react-hooks': reactHooks,
    'eslint-plugin-jsx-a11y': jsxA11y,
    import: importPlugin,
  },
  rules: {
    ...tseslint.configs.recommended.rules,
    ...react.configs.recommended.rules,
    ...reactHooks.configs.recommended.rules,
    ...jsxA11y.configs.recommended.rules,

    'react/jsx-key': 'error',
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],

    'prefer-const': 'error',
    'no-param-reassign': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',

    'no-var': 'error',
    'react/no-array-index-key': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',

    'no-useless-rename': 'warn',
    'prefer-rest-params': 'warn',
    '@typescript-eslint/ban-types': 'off',
    'react/jsx-no-useless-fragment': 'warn',

    'react/no-danger': 'off',
    'react/jsx-no-target-blank': 'warn',

    'jsx-a11y/alt-text': 'warn',
    'react/button-has-type': 'warn',
    'jsx-a11y/no-redundant-roles': 'warn',
    'jsx-a11y/no-aria-hidden-on-focusable': 'warn',

    'import/no-anonymous-default-export': 'off',
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'react-dom',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'next',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'internal',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react', 'react-dom', 'next'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};

export default defineConfig([
  js.configs.recommended,
  FILE_IGNORES,
  MAIN_CONFIG,
  prettier,
  ...nextWebVitals,
  ...nextTypescript,
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);
