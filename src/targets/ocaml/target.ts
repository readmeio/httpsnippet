import type { Target } from '../index.js';

import { cohttp } from './cohttp/client.js';

export const ocaml: Target = {
  info: {
    key: 'ocaml',
    title: 'OCaml',
    extname: '.ml',
    default: 'cohttp',
  },
  clientsById: {
    cohttp,
  },
};
