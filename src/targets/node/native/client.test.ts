import type { Request } from '../../..';

import short from '../../../fixtures/requests/short';
import { runCustomFixtures } from '../../../fixtures/runCustomFixtures';

runCustomFixtures({
  targetId: 'node',
  clientId: 'native',
  tests: [
    {
      it: 'should support the insecureSkipVerify option',
      input: short.log.entries[0].request as Request,
      options: {
        insecureSkipVerify: true,
      },
      expected: 'insecure-skip-verify.js',
    },
  ],
});
