import js from '@eslint/js';
import globals from 'globals';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import eslintReactRefresh from 'eslint-plugin-react-refresh';
import eslintTypescript from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

export default eslintTypescript
  .config(
    { ignores: ['dist-app', 'dist-web'] },
    {
      extends: [
        js.configs.recommended,
        ...eslintTypescript.configs.recommended,
      ],
      files: ['**/*.{ts,tsx}'],
      languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
      },
      plugins: {
        'react-hooks': eslintReactHooks,
        'react-refresh': eslintReactRefresh,
      },
      rules: {
        ...eslintReactHooks.configs.recommended.rules,
        '@typescript-eslint/no-unused-vars': 'warn',
        'react-refresh/only-export-components': [
          'warn',
          { allowConstantExport: true },
        ],
      },
    }
  )
  .concat(eslintPluginPrettier);
