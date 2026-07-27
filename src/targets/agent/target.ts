import type { Target } from '../index.js';

import { prompt } from './prompt/client.js';

export const agent: Target = {
  info: {
    key: 'agent',
    title: 'Agent',
    default: 'prompt',
  },
  clientsById: {
    prompt,
  },
};
