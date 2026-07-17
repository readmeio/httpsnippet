import type { Request } from '../../../index.js';

import short from '../../../fixtures/requests/short.cjs';
import { runCustomFixtures } from '../../../fixtures/runCustomFixtures';

runCustomFixtures({
  targetId: 'ai',
  clientId: 'prompt',
  tests: [
    {
      it: 'should support the infoUrl option',
      input: short.log.entries[0].request as Request,
      options: {
        infoUrl: 'https://docs.example.com/reference/anything',
      },
      expected: 'info-url.txt',
    },
  ],
});
