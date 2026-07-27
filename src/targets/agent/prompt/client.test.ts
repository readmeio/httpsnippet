import type { Request } from '../../../index.js';

import short from '../../../fixtures/requests/short.cjs';
import { runCustomFixtures } from '../../../fixtures/runCustomFixtures';

runCustomFixtures({
  targetId: 'agent',
  clientId: 'prompt',
  tests: [
    {
      it: 'should support the markdownURL option',
      input: short.log.entries[0].request as Request,
      options: {
        markdownURL: 'https://docs.example.com/reference/anything.md',
      },
      expected: 'markdown-url.txt',
    },
  ],
});
