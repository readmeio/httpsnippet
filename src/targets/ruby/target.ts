import type { Target } from '../index.js';

import { native } from './native/client.js';

export const ruby: Target = {
  info: {
    key: 'ruby',
    title: 'Ruby',
    extname: '.rb',
    default: 'native',
  },
  clientsById: {
    native,
  },
};
