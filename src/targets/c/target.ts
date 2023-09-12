import type { Target } from '../index.js';

import { libcurl } from './libcurl/client.js';

export const c: Target = {
  info: {
    key: 'c',
    title: 'C',
    extname: '.c',
    default: 'libcurl',
    cli: 'c',
  },
  clientsById: {
    libcurl,
  },
};
