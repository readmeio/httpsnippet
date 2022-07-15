/* eslint-disable jest/no-conditional-expect */
import type { Request } from '.';
import type { ClientId, TargetId } from './targets/targets';
import type { Response } from 'har-format';

import shell from 'child_process';
import { format } from 'util';
import { readdirSync } from 'fs';
import path from 'path';

import { availableTargets, extname } from './helpers/utils';

const expectedBasePath = ['src', 'fixtures', 'requests'];

const inputFileNames = readdirSync(path.join(...expectedBasePath), 'utf-8');

const fixtures: [string, Request][] = inputFileNames.map(inputFileName => [
  inputFileName.replace(path.extname(inputFileName), ''),
  // eslint-disable-next-line import/no-dynamic-require, global-require
  require(path.resolve(...expectedBasePath, inputFileName)),
]);

/** ignore a set of fixtures from being run in tests */
const fixtureIgnoreFilter: string[] = [
  // Some targets don't support native file handling without supplying a raw boundary header and
  // because the HAR for `multipart-file` doesn't include the files contents, just its filename
  // running one of these generated snippets doesn't send anything for the file because the
  // FormData API rewrites the incoming full path of `src/fixtures/files/hello.txt` to just
  // `hello.txt`. Instead of monkeypatching these targets to have the full file path at time of
  // this execution suite we're just ignoring this test case as file uploading is well covered by
  // the other cases we have.
  'multipart-file',
];

const environmentFilter = (): TargetId[] => {
  if (process.env.HTTPBIN) {
    // Every target that we test in an HTTPBin-powered Docker environment.
    return ['node', 'php', 'shell'];
  } else if (process.env.NODE_ENV === 'test') {
    // Every target that we support testing within our standard `npm test` workflow.
    return ['node', 'php', 'python', 'shell'];
  }

  throw new Error('Unsupported environment supplied to `environmentFilter`.');
};

const clientFilter = (target: TargetId): ClientId[] => {
  if (process.env.HTTPBIN) {
    switch (target) {
      case 'node': // We don't expose `unirest` in `@readme/oas-to-snippet` so no need to test it.
        return ['unirest'];
      case 'php': // These Pear and PECL clients as they don't have much traction anymore.
        return ['http1', 'http2'];
      case 'shell': // We're only testing `curl` here.
        return ['httpie', 'wget'];
    }
  } else if (process.env.NODE_ENV === 'test') {
    // When running tests locally, or within a Jest CI environment, we shold limit the targets that
    // we're testing so as to not require a mess of dependency requirements that would be better
    // served within a container.
    switch (target) {
      case 'node':
        return ['axios', 'fetch', 'request', 'unirest']; // Only testing `native` locally.
      case 'php':
        return ['guzzle', 'http1', 'http2']; // Only testing `curl` locally.
      case 'python':
        return [];
      case 'shell':
        return ['httpie', 'wget']; // Only testing `curl`.
    }
  }

  throw new Error('Unsupported environment supplied to `clientFilter`.');
};

const testFilter =
  <T>(property: keyof T, list: T[keyof T][], ignore = false) =>
  (item: T) => {
    if (ignore) {
      return list.length > 0 ? !list.includes(item[property]) : true;
    }

    return list.length > 0 ? list.includes(item[property]) : true;
  };

/**
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#never_use_eval!
 */
function looseJSONParse(obj: any) {
  // eslint-disable-next-line no-new-func
  return new Function(`"use strict";return ${obj}`)();
}

availableTargets()
  .filter(target => target.cli)
  .filter(testFilter('key', environmentFilter()))
  .forEach(({ key: targetId, cli: targetCLI, title, extname: fixtureExtension, clients }) => {
    describe(`${title} Request Validation`, () => {
      clients.filter(testFilter('key', clientFilter(targetId), true)).forEach(({ key: clientId }) => {
        // eslint-disable-next-line jest/valid-title
        describe(clientId, () => {
          fixtures.filter(testFilter(0, fixtureIgnoreFilter, true)).forEach(([fixture, request]) => {
            it(`should return the expected response for \`${fixture}\``, () => {
              const basePath = path.join(
                'src',
                'targets',
                targetId,
                clientId,
                'fixtures',
                `${fixture}${extname(targetId)}`
              );

              // Clone the fixture we're testing against to another object because for multipart cases
              // we're deleting the header, and if we don't clone the fixture to another object, that
              // deleted header will cause other tests to fail because it's missing where other tests
              // are expecting it.
              const har = JSON.parse(JSON.stringify(request));
              const url = har.log.entries[0].request.url;
              const harResponse = har.log.entries[0].response as Response;

              const command = format(targetCLI, basePath);
              let stdout;
              try {
                stdout = shell.execSync(command);
              } catch (err) {
                // If this target throws errors when it can't access a method on the server that
                // doesn't exist let's make sure that it only did that on the `custom-method` test,
                // otherwise something went wrong!
                if (err instanceof Error && err.message.includes('405 METHOD NOT ALLOWED')) {
                  expect(fixture).toBe('custom-method');
                  return;
                }

                throw err;
              }

              stdout = stdout.toString().trim();

              // If the endpoint we're testing against returns HTML we should do a string comparison
              // instead of parsing a non-existent JSON response.
              if (harResponse.headers.find(header => header.name === 'Content-Type' && header.value === 'text/html')) {
                // const stdoutTrimmed = stdout.toString().trim();

                try {
                  expect(stdout).toStrictEqual(harResponse.content.text);
                } catch (err) {
                  // Some targets always assume that their response is JSON and for this case
                  // (`custom-method`) will print out an empty string instead.
                  expect(stdout).toBe('');
                }

                return;
              }

              const expected = JSON.parse(String(harResponse.content.text));
              let response;
              try {
                response = JSON.parse(stdout);
              } catch (err) {
                // Some JS targets print out their response with `console.log(json)` which creates
                // a JSON object that we can't access with `JSON.parse()`.
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#never_use_eval!
                if (fixtureExtension !== '.js') {
                  throw err;
                }

                response = looseJSONParse(stdout);
              }

              // If we're testing against the `/cookies` or `/headers` endpoints it returns a
              // different schema than everything else.
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

              // Some targets send files that have a new line at the end of them without that new
              // line so we need to make our assertion universal across all targets.
              let files = {};
              if (Object.keys(response.files).length) {
                files = Object.entries(response.files)
                  .map(([k, v]) => ({ [k]: String(v).trim() }))
                  .reduce((prev, next) => Object.assign(prev, next));
              }

              expect(files).toStrictEqual(expected.files);

              expect(response.form).toStrictEqual(expected.form);
              expect(response.method).toStrictEqual(expected.method);
              expect(response.url).toStrictEqual(expected.url);

              // Because some JS targets may be returning their payloads with `console.log()` that
              // method has a default depth, at which point it turns objects into `[Object]`. When
              // we then run that through `looseJSONParse` it gets transformed again into
              // `[ [Function: Object] ]`. Since we don't have access to the original object context
              // from the target snippet, we rewrite our response a bit so that it can partially
              // match what we're looking for.
              //
              // Of course the side effect to this is is that now these test cases may be subject
              // to flakiness but without updating the root snippets to not use `console.log()`,
              // which we don't want to do, this is the way it's got to be.
              if (fixture === 'application-json' && fixtureExtension === '.js') {
                const respJSON = response.json;
                respJSON.arr_mix[2] = { arr_mix_nested: {} };

                expect(respJSON).toStrictEqual(expected.json);
              } else {
                expect(response.json).toStrictEqual(expected.json);
              }

              // If we're dealing with a JSON payload, some snippets add indents and new lines to
              // the data that is sent to
              // HTTPBin (that it then returns back us in the same format) -- to make this `data`
              // check target agnostic we need to parse and re-stringify our expectations so that
              // this test can universally match them all.
              if (expected.headers?.['Content-Type']?.includes('application/json')) {
                expect(JSON.stringify(JSON.parse(response.data))).toStrictEqual(
                  JSON.stringify(JSON.parse(expected.data))
                );
              } else {
                expect(response.data).toStrictEqual(expected.data);
              }

              // `multipart/form-data` needs some special tests to assert that boundaries were sent
              // and received properly.
              if (expected.headers?.['Content-Type']?.includes('multipart/form-data')) {
                if (expected.headers['Content-Type'] === response.headers['Content-Type']) {
                  // If the headers match identically, great! If not we need to make sure that
                  // there's a boundary set up.
                } else {
                  // It doesn't matter that the /right/ boundary is set up because some targets may
                  // add their own, we just need to make sure that **a** boundary is present.
                  const contentTypes: string[] = response.headers['Content-Type']
                    .split(';')
                    .map((p: string) => p.trim());

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
      });
    });
  });