/**
 * @description
 * HTTP code snippet generator for Python using Requests
 *
 * @author
 * @montanaflynn
 *
 * for any questions or issues regarding the generated code snippet, please open an issue mentioning the author.
 */
<<<<<<< HEAD
import type { Client } from '../../targets';

import { CodeBuilder } from '../../../helpers/code-builder';
import { getHeaderName } from '../../../helpers/headers';
import { literalRepresentation } from '../helpers';

=======

import { CodeBuilder } from '../../../helpers/code-builder';
import { escapeForDoubleQuotes } from '../../../helpers/escape';
import { getHeaderName } from '../../../helpers/headers';
import { Client } from '../../targets';
import { literalRepresentation } from '../helpers';

const builtInMethods = ['HEAD', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'];

>>>>>>> upstream/master
export interface RequestsOptions {
  pretty?: true;
}

export const requests: Client<RequestsOptions> = {
  info: {
    key: 'requests',
    title: 'Requests',
    link: 'http://docs.python-requests.org/en/latest/api/#requests.request',
    description: 'Requests HTTP library',
  },
<<<<<<< HEAD
  convert: ({ fullUrl, postData, allHeaders, method }, options) => {
=======
  convert: ({ queryObj, url, postData, allHeaders, method }, options) => {
>>>>>>> upstream/master
    const opts = {
      indent: '    ',
      pretty: true,
      ...options,
    };
    // Start snippet
<<<<<<< HEAD
    const { push, blank, join, addPostProcessor } = new CodeBuilder({ indent: opts.indent });
=======
    const { push, blank, join } = new CodeBuilder({ indent: opts.indent });
>>>>>>> upstream/master

    // Import requests
    push('import requests');
    blank();

    // Set URL
<<<<<<< HEAD
    push(`url = "${fullUrl}"`);
    blank();

=======
    push(`url = "${url}"`);
    blank();

    // Construct query string
    let qs;
    if (Object.keys(queryObj).length) {
      qs = `querystring = ${JSON.stringify(queryObj)}`;

      push(qs);
      blank();
    }

>>>>>>> upstream/master
    const headers = allHeaders;

    // Construct payload
    let payload: Record<string, any> = {};
    const files: Record<string, string> = {};

    let hasFiles = false;
    let hasPayload = false;
    let jsonPayload = false;
    switch (postData.mimeType) {
      case 'application/json':
        if (postData.jsonObj) {
          push(`payload = ${literalRepresentation(postData.jsonObj, opts)}`);
          jsonPayload = true;
          hasPayload = true;
        }
        break;

      case 'multipart/form-data':
        if (!postData.params) {
          break;
        }

        payload = {};
        postData.params.forEach(p => {
          if (p.fileName) {
<<<<<<< HEAD
            if (p.contentType) {
              files[p.name] = `('${p.fileName}', open('${p.fileName}', 'rb'), '${p.contentType}')`;
            } else {
              files[p.name] = `('${p.fileName}', open('${p.fileName}', 'rb'))`;
            }

=======
            files[p.name] = `open('${p.fileName}', 'rb')`;
>>>>>>> upstream/master
            hasFiles = true;
          } else {
            payload[p.name] = p.value;
            hasPayload = true;
          }
        });

        if (hasFiles) {
          push(`files = ${literalRepresentation(files, opts)}`);

          if (hasPayload) {
            push(`payload = ${literalRepresentation(payload, opts)}`);
          }

          // The requests library will only automatically add a `multipart/form-data` header if there are files being sent. If we're **only** sending form data we still need to send the boundary ourselves.
          const headerName = getHeaderName(headers, 'content-type');
          if (headerName) {
            delete headers[headerName];
          }
        } else {
          const nonFilePayload = JSON.stringify(postData.text);
          if (nonFilePayload) {
            push(`payload = ${nonFilePayload}`);
            hasPayload = true;
          }
        }
<<<<<<< HEAD

        // The `open()` call must be a literal in the code snippet.
        addPostProcessor(code =>
          code
            .replace(/"\('(.+)', open\('(.+)', 'rb'\)\)"/g, '("$1", open("$2", "rb"))')
            .replace(/"\('(.+)', open\('(.+)', 'rb'\), '(.+)'\)"/g, '("$1", open("$2", "rb"), "$3")')
        );
        break;

      default: {
        const stringPayload = JSON.stringify(postData.text);
        if (stringPayload) {
          push(`payload = ${stringPayload}`);
=======
        break;

      default: {
        if (postData.mimeType === 'application/x-www-form-urlencoded' && postData.paramsObj) {
          push(`payload = ${literalRepresentation(postData.paramsObj, opts)}`);
          hasPayload = true;
          break;
        }

        const payload = JSON.stringify(postData.text);
        if (payload) {
          push(`payload = ${payload}`);
>>>>>>> upstream/master
          hasPayload = true;
        }
      }
    }

    // Construct headers
    const headerCount = Object.keys(headers).length;

    if (headerCount === 0 && (hasPayload || hasFiles)) {
      // If we don't have any heads but we do have a payload we should put a blank line here between that payload consturction and our execution of the requests library.
      blank();
    } else if (headerCount === 1) {
<<<<<<< HEAD
      Object.keys(headers).forEach(header => {
        push(`headers = {"${header}": "${headers[header]}"}`);
        blank();
      });
=======
      for (const header in headers) {
        push(`headers = {"${header}": "${escapeForDoubleQuotes(headers[header])}"}`);
        blank();
      }
>>>>>>> upstream/master
    } else if (headerCount > 1) {
      let count = 1;

      push('headers = {');

<<<<<<< HEAD
      Object.keys(headers).forEach(header => {
        if (count !== headerCount) {
          push(`"${header}": "${headers[header]}",`, 1);
        } else {
          push(`"${header}": "${headers[header]}"`, 1);
        }
        count += 1;
      });
=======
      for (const header in headers) {
        if (count !== headerCount) {
          push(`"${header}": "${escapeForDoubleQuotes(headers[header])}",`, 1);
        } else {
          push(`"${header}": "${escapeForDoubleQuotes(headers[header])}"`, 1);
        }
        count += 1;
      }
>>>>>>> upstream/master

      push('}');
      blank();
    }

    // Construct request
<<<<<<< HEAD
    let request;
    // Method list pulled from their api reference https://docs.python-requests.org/en/latest/api/#requests.head
    if (['HEAD', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE'].includes(method)) {
      request = `response = requests.${method.toLowerCase()}(url`;
    } else {
      request = `response = requests.request("${method}", url`;
    }
=======
    let request = builtInMethods.includes(method)
      ? `response = requests.${method.toLowerCase()}(url`
      : `response = requests.request("${method}", url`;
>>>>>>> upstream/master

    if (hasPayload) {
      if (jsonPayload) {
        request += ', json=payload';
      } else {
        request += ', data=payload';
      }
    }

    if (hasFiles) {
      request += ', files=files';
    }

    if (headerCount > 0) {
      request += ', headers=headers';
    }

<<<<<<< HEAD
=======
    if (qs) {
      request += ', params=querystring';
    }

>>>>>>> upstream/master
    request += ')';

    push(request);
    blank();

    // Print response
<<<<<<< HEAD
    push('print(response.text)');
=======
    push('print(response.json())');
>>>>>>> upstream/master

    return join();
  },
};
