import type { Target } from '../index.js';

import { axios } from './axios/client.js';
import { fetch } from './fetch/client.js';
import { jquery } from './jquery/client.js';

export const javascript: Target = {
  info: {
    key: 'javascript',
    title: 'JavaScript',
  },

  clientsById: {
    axios,
    fetch,
    jquery,
  },
};
