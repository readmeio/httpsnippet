import type { Target } from '../index.js';

import { curl } from './curl/client.js';
import { httpie } from './httpie/client.js';
import { wget } from './wget/client.js';

export const shell: Target = {
  info: {
    key: 'shell',
    title: 'Shell',
    extname: '.sh',
    default: 'curl',
    cli: '%s',
  },
  clientsById: {
    curl,
    httpie,
    wget,
  },
};
