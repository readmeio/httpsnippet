import type { Target } from '../index.js';

import { prompt } from './prompt/client.js';

export const ai: Target = {
  info: {
    key: 'ai',
    title: 'AI',
    default: 'prompt',
  },
  clientsById: {
    prompt,
  },
};
