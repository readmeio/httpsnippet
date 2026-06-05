import type { Request } from '../../../index.js';

import httpInsecure from '../../../fixtures/requests/http-insecure.cjs';
import { runCustomFixtures } from '../../../fixtures/runCustomFixtures';

runCustomFixtures({
  targetId: 'ruby',
  clientId: 'native',
  tests: [
    {
      it: 'should support the insecureSkipVerify option',
      input: httpInsecure.log.entries[0].request as Request,
      options: {
        insecureSkipVerify: true,
      },
      expected: 'insecure-skip-verify.rb',
    },
  ],
});
