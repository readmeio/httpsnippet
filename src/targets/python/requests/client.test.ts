import type { Request } from '../../..';
import { runCustomFixtures } from '../../../fixtures/runCustomFixtures';

runCustomFixtures({
  targetId: 'python',
  clientId: 'requests',
  tests: [
    {
      it: "should support query parameters provided in HAR's url",
      input: { method: 'GET', url: 'http://mockbin.com/har?param=value' } as Request,
      options: {
        showBoilerplate: false,
      },
      expected: 'query-params.py',
    },
  ],
});
