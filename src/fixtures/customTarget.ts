import type { Target } from '../targets/index.js';

import { axios } from '../targets/node/axios/client.js';

export const customTarget = {
  info: {
    key: 'js-variant',
    title: 'JavaScript Variant',
    extname: '.js',
    default: 'axios',
  },
  clientsById: {
    axios,
  },
} as unknown as Target;
