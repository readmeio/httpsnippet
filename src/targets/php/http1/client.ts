/**
 * @description
 * HTTP code snippet generator for PHP using curl-ext.
 *
 * @author
 * @AhmadNassri
 *
 * for any questions or issues regarding the generated code snippet, please open an issue mentioning the author.
 */
import type { Client } from '../../index.js';

import { CodeBuilder } from '../../../helpers/code-builder.js';
import { convertType, supportedMethods } from '../helpers.js';

export interface Http1Options {
  closingTag?: boolean;
  noTags?: boolean;
  shortTags?: boolean;
}

export const http1: Client<Http1Options> = {
  info: {
    key: 'http1',
    title: 'HTTP v1',
    link: 'http://php.net/manual/en/book.http.php',
    description: 'PHP with pecl/http v1',
    extname: '.php',
  },
  convert: ({ method, url, postData, queryObj, headersObj, cookiesObj }, options = {}) => {
    const { closingTag = false, indent = '  ', noTags = false, shortTags = false } = options;

    const { push, blank, join } = new CodeBuilder({ indent });

    if (!noTags) {
      push(shortTags ? '<?' : '<?php');
      blank();
    }

    if (!supportedMethods.includes(method.toUpperCase() as (typeof supportedMethods)[number])) {
      push(`HttpRequest::methodRegister('${method}');`);
    }

    push('$request = new HttpRequest();');
    push(`$request->setUrl(${convertType(url)});`);

    if (supportedMethods.includes(method.toUpperCase() as (typeof supportedMethods)[number])) {
      push(`$request->setMethod(HTTP_METH_${method.toUpperCase()});`);
    } else {
      push(`$request->setMethod(HttpRequest::HTTP_METH_${method.toUpperCase()});`);
    }

    blank();

    if (Object.keys(queryObj).length) {
      push(`$request->setQueryData(${convertType(queryObj, indent)});`);
      blank();
    }

    if (Object.keys(headersObj).length) {
      push(`$request->setHeaders(${convertType(headersObj, indent)});`);
      blank();
    }

    if (Object.keys(cookiesObj).length) {
      push(`$request->setCookies(${convertType(cookiesObj, indent)});`);
      blank();
    }

    switch (postData.mimeType) {
      case 'application/x-www-form-urlencoded':
        push(`$request->setContentType(${convertType(postData.mimeType)});`);
        push(`$request->setPostFields(${convertType(postData.paramsObj, indent)});`);
        blank();
        break;

      case 'application/json':
        push(`$request->setContentType(${convertType(postData.mimeType)});`);
        push(`$request->setBody(json_encode(${convertType(postData.jsonObj, indent)}));`);
        blank();
        break;

      default:
        if (postData.text) {
          push(`$request->setBody(${convertType(postData.text)});`);
          blank();
        }
    }

    push('try {');
    push('$response = $request->send();', 1);
    blank();
    push('echo $response->getBody();', 1);
    push('} catch (HttpException $ex) {');
    push('echo $ex;', 1);
    push('}');

    if (!noTags && closingTag) {
      blank();
      push('?>');
    }

    return join();
  },
};
