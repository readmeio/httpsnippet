/* eslint-disable jest/no-conditional-expect */
const fixtures = require('./fixtures');
const HTTPSnippet = require('../src');
const shell = require('child_process');
const { format } = require('util');

const environment = process.env.NODE_ENV;
const snippetDir = './test/fixtures/output/';

const snippets = Object.keys(fixtures.requests)
  .filter(req => !['info', 'index'].includes(req))
  .filter(req => {
    return ![
      'multipart-data', // Disabling because there's some quirks with cURL.
      'multipart-file', // Disabling because there's some quirks with newlines.
    ].includes(req);
  })
  .map(req => {
    return [req];
  });

const clients = HTTPSnippet.availableTargets()
  .filter(client => client.cli)
  .map(client => {
    // When running tests manually and not in docker we should limit our integration tests to a smaller subset so we can
    // constrain every targets clients full dependency requirements to the container.
    if (process.env.HTTPBIN) {
      // @todo only run tests for what the docker is configured to run.
    } else if (process.env.NODE_ENV === 'test') {
      switch (client.key) {
        case 'node':
          return { ...client, clients: client.clients.filter(target => target.key === 'native') };
        case 'php':
          return { ...client, clients: client.clients.filter(target => target.key === 'curl') };
        // case 'python':
        //   return { ...client, clients: client.clients.filter(target => target.key === 'python3') };
        default:
          return false;
      }
    }

    // If we don't have any special cases set up for the client then just ignore it.
    return false;
  })
  .filter(Boolean)
  .map(client => ({ ...client, clients: client.clients.map(target => [target.key, target]) }))
  .map(client => [client.title, client]);

describe.each(clients)('%s', (_, client) => {
  describe.each(client.clients)('%s', (__, target) => {
    it.each(snippets)('should return the expected response for `%s`', snippet => {
      // Clone the fixture we're testing against to another object because for multipart/form-data cases we're
      // deleting the header, and if we don't clone the fixture to another object, that deleted header will cause
      // other tests to fail because it's missing where other tests are expecting it.
      let har = JSON.parse(JSON.stringify(fixtures.requests[snippet]));
      let url;
      if (har.log) {
        url = har.log.entries[0].request.url;
        har = har.log.entries[0].response;
      } else {
        url = har.url;
      }

      const command = format(
        client.cli,
        `${snippetDir}${client.key}/${target.key}/${snippet}${HTTPSnippet.extname(client.key)}`
      );

      const stdout = shell.execSync(command);

      // If the endpoint we're testing against returns HTML we should do a string comparison instead of parsing a
      // non-existent JSON response.
      if (har.headers.find(header => header.name === 'Content-Type' && header.value === 'text/html')) {
        expect(stdout.toString().trim()).toStrictEqual(har.content.text);
        return;
      }

      const expected = JSON.parse(har.content.text);
      const response = JSON.parse(stdout);

      // If we're testing against the `/cookies` or `/headers` endpoints it returns a different schema than
      // everything else.
      if (url === 'https://httpbin.org/cookies') {
        expect(response.cookies).toStrictEqual(expected.cookies);
        return;
      } else if (url === 'https://httpbin.org/headers') {
        expect(response.headers).toStrictEqual(
          expect.objectContaining({
            ...expected.headers,
          })
        );

        return;
      }

      expect(response.args).toStrictEqual(expected.args);
      expect(response.files).toStrictEqual(expected.files);
      expect(response.form).toStrictEqual(expected.form);
      expect(response.json).toStrictEqual(expected.json);
      expect(response.method).toStrictEqual(expected.method);
      expect(response.url).toStrictEqual(expected.url);

      // If we're dealing with a JSON payload, some snippets add indents and new lines to the data that is sent to
      // HTTPBin (that it then returns back us in the same format) -- to make this `data` check target agnostic we
      // need to parse and re-stringify our expectations so that this test can universally match them all.
      if (expected.headers?.['Content-Type']?.includes('application/json')) {
        expect(JSON.stringify(JSON.parse(response.data))).toStrictEqual(JSON.stringify(JSON.parse(expected.data)));
      } else {
        expect(response.data).toStrictEqual(expected.data);
      }

      // `multipart/form-data` needs some special tests to assert that boundaries were sent and received properly.
      if (expected.headers?.['Content-Type']?.includes('multipart/form-data')) {
        if (expected.headers['Content-Type'] === response.headers['Content-Type']) {
          // If the headers match identically, great! If not we need to make sure that there's a boundary set up.
        } else {
          // It doesn't matter that the /right/ boundary is set up because some targets may add their own, we just
          // need to make sure that **a** boundary is present.
          const contentTypes = expected.headers['Content-Type'].split(';').map(p => p.trim());
          expect(contentTypes).toHaveLength(2);
          expect(contentTypes.map(type => type.includes('boundary=')).filter(Boolean)).toHaveLength(1);
        }
      } else {
        expect(response.headers).toStrictEqual(
          expect.objectContaining({
            ...expected.headers,
          })
        );
      }
    });
  });
});
