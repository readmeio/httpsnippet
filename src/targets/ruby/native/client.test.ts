import type { Request } from '../../..';

import full from '../../../fixtures/requests/full';
import { runCustomFixtures } from '../../../fixtures/runCustomFixtures';

runCustomFixtures({
  targetId: 'ruby',
  clientId: 'native',
  tests: [
    {
      it: 'should support the insecureSkipVerify option',
      input: full.log.entries[0].request as Request,
      options: {
        insecureSkipVerify: true,
      },
      expected: 'insecure-skip-verify.rb',
    },
  ],
});
