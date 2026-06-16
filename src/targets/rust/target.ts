import type { Target } from '../index.js';

import { reqwest } from './reqwest/client.js';

export const rust: Target = {
  info: {
    key: 'rust',
    title: 'Rust',
    default: 'reqwest',
    cli: 'rust',
  },
  clientsById: {
    reqwest,
  },
};
