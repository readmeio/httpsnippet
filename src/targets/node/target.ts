import type { Target } from '../index.js';

import { axios } from './axios/client.js';
import { unirest } from './unirest/client.js';

export const node: Target = {
  info: {
    key: 'node',
    title: 'Node.js',
    default: 'axios',
    cli: 'node %s',
  },
  clientsById: {
    unirest,
    axios,
  },
};
