import type { Target } from '../index.js';
import { reqwest } from './reqwest/client';

export const rust: Target = {
  info: {
    key: 'rust',
    title: 'Rust',
    default: 'reqwest',
  },
  clientsById: {
    reqwest,
  },
};
