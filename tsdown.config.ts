import { defineConfig } from 'tsdown';

// biome-ignore lint/style/noDefaultExport: `tsdown` uses default exports.
export default defineConfig(options => ({
  ...options,
  bundle: true,
  platform: 'browser',
  target: ['es2022'],
  cjsInterop: true,
  dts: true,
  entry: ['src/index.ts', 'src/helpers/code-builder.ts', 'src/helpers/reducer.ts', 'src/targets/index.ts'],
  format: ['esm', 'cjs'],
  shims: true,
  silent: !options.watch,
  sourcemap: true,
  treeshake: true,
  tsconfig: './tsconfig.json',
}));
