/**
 * @description
 * HTTP code snippet generator for PHP using Guzzle.
 *
 * @author @RobertoArruda
 * @author @erunion
 *
 * for any questions or issues regarding the generated code snippet, please open an issue mentioning the author.
 */
import type { Client } from '../../index.js';

import { CodeBuilder } from '../../../helpers/code-builder.js';
import { escapeForSingleQuotes } from '../../../helpers/escape.js';
import { getHeader, getHeaderName, hasHeader } from '../../../helpers/headers.js';
import { convertType } from '../helpers.js';

export interface GuzzleOptions {
  closingTag?: boolean;
  indent?: string;
  noTags?: boolean;
  shortTags?: boolean;
}

export const guzzle: Client<GuzzleOptions> = {
  info: {
    key: 'guzzle',
    title: 'Guzzle',
    link: 'http://docs.guzzlephp.org/en/stable/',
    description: 'PHP with Guzzle',
    extname: '.php',
    installation: () => 'composer require guzzlehttp/guzzle',
  },
  convert: ({ postData, fullUrl, method, cookies, headersObj }, options) => {
    const opts = {
      closingTag: false,
      indent: '  ',
      noTags: false,
      shortTags: false,
      ...options,
    };

    const { push, blank, join } = new CodeBuilder({ indent: opts.indent });
    const { code: requestCode, push: requestPush, join: requestJoin } = new CodeBuilder({ indent: opts.indent });

    if (!opts.noTags) {
      push(opts.shortTags ? '<?' : '<?php');
    }

    push("require_once('vendor/autoload.php');");
    blank();

    switch (postData.mimeType) {
      case 'application/x-www-form-urlencoded':
        requestPush(`'form_params' => ${convertType(postData.paramsObj, opts.indent + opts.indent, opts.indent)},`, 1);
        break;

      case 'multipart/form-data': {
        interface MultipartField {
          contents: string | undefined;
          filename?: string;
          headers?: Record<string, string>;
          name: string;
        }

        const fields: MultipartField[] = [];

        if (postData.params) {
          postData.params.forEach(param => {
            if (param.fileName) {
              const field: MultipartField = {
                name: param.name,
                filename: param.fileName,
                contents: param.value,
              };

              if (param.contentType) {
                field.headers = { 'Content-Type': param.contentType };
              }

              fields.push(field);
            } else if (param.value) {
              fields.push({
                name: param.name,
                contents: param.value,
              });
            }
          });
        }

        if (fields.length) {
          requestPush(`'multipart' => ${convertType(fields, opts.indent + opts.indent, opts.indent)}`, 1);

          // Guzzle adds its own boundary for multipart requests.
          if (hasHeader(headersObj, 'content-type')) {
            if (getHeader(headersObj, 'content-type')?.indexOf('boundary')) {
              const headerName = getHeaderName(headersObj, 'content-type');
              if (headerName) {
                delete headersObj[headerName];
              }
            }
          }
        }
        break;
      }

      default:
        if (postData.text) {
          requestPush(`'body' => ${convertType(postData.text)},`, 1);
        }
    }

    // construct headers
    const headers = Object.keys(headersObj)
      .sort()
      .map(function (key) {
        return `${opts.indent}${opts.indent}'${key}' => '${escapeForSingleQuotes(headersObj[key])}',`;
      });

    // construct cookies
    const cookieString = cookies
      .map(cookie => `${encodeURIComponent(cookie.name)}=${encodeURIComponent(cookie.value)}`)
      .join('; ');
    if (cookieString.length) {
      headers.push(`${opts.indent}${opts.indent}'cookie' => '${escapeForSingleQuotes(cookieString)}',`);
    }

    if (headers.length) {
      requestPush("'headers' => [", 1);
      requestPush(headers.join('\n'));
      requestPush('],', 1);
    }

    push('$client = new \\GuzzleHttp\\Client();');
    blank();

    if (requestCode.length) {
      push(`$response = $client->request('${method}', '${fullUrl}', [`);
      push(requestJoin());
      push(']);');
    } else {
      push(`$response = $client->request('${method}', '${fullUrl}');`);
    }

    blank();
    push('echo $response->getBody();');

    if (!opts.noTags && opts.closingTag) {
      blank();
      push('?>');
    }

    return join();
  },
};
