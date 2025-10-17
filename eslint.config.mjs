import { defineConfig } from 'eslint/config';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPrettier from 'eslint-config-prettier';
import eslintReactHooks from 'eslint-plugin-react-hooks';

export default defineConfig([
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    rules: eslintReactHooks.configs['recommended-latest'].rules,
    plugins: {
      'react-hooks': eslintReactHooks,
    },
  },
  eslintPrettier,
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/.eslintrc.cjs',
      '**/vite.config.js',
    ],
  },
]);
