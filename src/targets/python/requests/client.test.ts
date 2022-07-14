import type { Request } from '../../..';
import { runCustomFixtures } from '../../../fixtures/runCustomFixtures';

runCustomFixtures({
  targetId: 'python',
  clientId: 'requests',
  tests: [
    {
      it: "should support query parameters provided in HAR's url",
      input: { method: 'GET', url: 'https://httpbin.org/anything?param=value' } as Request,
      options: {
        showBoilerplate: false,
      },
      expected: 'query-params.py',
    },
  ],
});
