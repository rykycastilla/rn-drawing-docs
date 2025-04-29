import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: [ 'dist', 'src/libs' ] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'indent': [ 'warn', 2 ],
    'quotes': [ 'warn', 'single' ],
    'semi': [ 'error', 'never' ],
    'no-trailing-spaces': [ 'warn' ],
    'space-before-blocks': [ 'warn', 'always' ],
    'space-in-parens': [ 'warn', 'always' ],
    'comma-dangle': [ 'warn', 'always-multiline' ],
    'eol-last': [ 'error', 'always' ],
    'no-multiple-empty-lines': [ 'warn', { 'max': 1 } ],
    'space-infix-ops': 'error',
    'prefer-template': 'error',
    'react-refresh/only-export-components': [ 'warn', { allowConstantExport: true } ],
    '@typescript-eslint/no-inferrable-types': [ 'warn' ],
    '@typescript-eslint/consistent-type-assertions': [ 'error', { 'assertionStyle': 'as' } ],
    '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
)
