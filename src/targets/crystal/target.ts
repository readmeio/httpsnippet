import type { Target } from '../index.js';

import { native } from './native/client';

export const crystal: Target = {
  info: {
    key: 'crystal',
    title: 'Crystal',
    default: 'native',
  },
  clientsById: {
    native,
  },
};
