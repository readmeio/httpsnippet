import type { Options } from 'tsup';

import { defineConfig } from 'tsup';

export default defineConfig((options: Options) => ({
  ...options,
  entry: ['src/index.ts', 'src/targets/targets.ts'],
  treeshake: true,
  format: ['esm', 'cjs'],
  silent: !options.watch,
  minify: false,
  dts: true,
  sourcemap: true,
  clean: true,
  splitting: true,
  shims: true,
  cjsInterop: true,
  tsconfig: './tsconfig.build.json',
}));
