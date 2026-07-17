/**
 * @description
 * HTTP code snippet generator to generate a plain-text, copy-and-pastable prompt for any AI model
 * describing how to make the request.
 *
 * @author
 * @erunion
 *
 * For any questions or issues regarding the generated code snippet, please open an issue mentioning the author.
 */
import type { Client } from '../../index.js';

import { CodeBuilder } from '../../../helpers/code-builder.js';

export const prompt: Client = {
  info: {
    key: 'prompt',
    title: 'AI Prompt',
    link: 'https://github.com/readmeio/httpsnippet',
    description: 'A copy-and-pastable prompt, for any AI model, describing how to make the request.',
    extname: '.txt',
  },
  convert: ({ method, fullUrl, allHeaders, postData }, options) => {
    const { blank, push, join } = new CodeBuilder({ indent: '  ', join: '\n', ...options });

    push(
      "Write code that makes the HTTP request described below. Use my preferred programming language and HTTP client library — if I haven't told you what those are, ask me before writing any code.",
    );
    blank();

    push(`Method: ${method}`);
    push(`URL: ${fullUrl}`);

    const headerKeys = Object.keys(allHeaders);
    if (headerKeys.length) {
      blank();
      push('Headers:');
      headerKeys.forEach(key => {
        push(`${key}: ${allHeaders[key]}`, 1);
      });
    }

    if (postData.text) {
      blank();
      push(`Body (${postData.mimeType}):`);
      push(postData.text);
    }

    blank();
    push('The request the code makes must match the method, URL, headers, and body exactly as described above.');

    return join();
  },
};
