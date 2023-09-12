import type { Target } from '../index.js';

import { native } from './native/client.js';

export const json: Target = {
  info: {
    key: 'json',
    title: 'JSON',
    extname: '.json',
    default: 'native',
  },
  clientsById: {
    native,
  },
};
