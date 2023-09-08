import { defineConfig } from 'tsup';

export default defineConfig(options => ({
  ...options,

  cjsInterop: true,
  dts: true,
  entry: ['src/index.ts', 'src/targets/targets.ts'],
  format: ['esm', 'cjs'],
  shims: true,
  silent: !options.watch,
  sourcemap: true,
  treeshake: true,
  tsconfig: './tsconfig.build.json',
}));
