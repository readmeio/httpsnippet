import oxlintConfig from '@readme/oxlint-config';
import oxlintConfigVitest from '@readme/oxlint-config/testing/vitest';
import oxlintConfigTS from '@readme/oxlint-config/typescript';
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [oxlintConfig, oxlintConfigTS],
  options: {
    reportUnusedDisableDirectives: 'error',
  },
  ignorePatterns: ['coverage/', 'dist/', 'src/targets/**/fixtures/'],
  categories: {
    suspicious: 'error',
  },
  env: {
    browser: true,
    commonjs: true,
    es2022: true,
    node: true,
  },
  rules: {
    'class-methods-use-this': 'off',
    'default-case': 'off',
    'max-classes-per-file': 'off',
    'no-param-reassign': 'off', // @fixme
    'no-use-before-define': 'off', // @fixme
    'unicorn/consistent-function-scoping': 'off', // @fixme
    'unicorn/no-array-sort': 'off', // @fixme
  },
  overrides: [
    {
      files: ['test/**/*.test.{js,ts}'],
      ...oxlintConfigVitest,
      rules: oxlintConfigVitest.rules,
    },
  ],
});
