type Headers<T> = Record<string, T>;

/**
 * Given a headers object retrieve a specific header out of it via a case-insensitive key.
 */
export const getHeaderName = <T>(headers: Headers<T>, name: string): string | undefined =>
  Object.keys(headers).find(header => header.toLowerCase() === name.toLowerCase());

/**
 * Given a headers object retrieve the contents of a header out of it via a case-insensitive key.
 */
export const getHeader = <T>(headers: Headers<T>, name: string): T | undefined => {
  const headerName = getHeaderName(headers, name);
  if (!headerName) {
    return undefined;
  }
  return headers[headerName];
};

/**
 * Determine if a given case-insensitive header exists within a header object.
 */
export const hasHeader = <T>(headers: Headers<T>, name: string): boolean => Boolean(getHeaderName(headers, name));

/**
 * Determines if a given MIME type is JSON, or a variant of such.
 */
export const isMimeTypeJSON = (mimeType: string): boolean =>
  ['application/json', 'application/x-json', 'text/json', 'text/x-json', '+json'].some(
    type => mimeType.indexOf(type) > -1,
  );
