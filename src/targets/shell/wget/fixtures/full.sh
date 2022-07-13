wget --quiet \
  --method POST \
  --header 'cookie: foo=bar; bar=baz' \
  --header 'accept: application/json' \
  --header 'content-type: application/x-www-form-urlencoded' \
  --body-data foo=bar \
  --output-document \
<<<<<<< HEAD:__tests__/__fixtures__/output/shell/wget/full.sh
  - 'https://httpbin.org/anything?foo=bar&foo=baz&baz=abc&key=value'
=======
  - 'http://mockbin.com/har?foo=bar&foo=baz&baz=abc&key=value'
>>>>>>> upstream/master:src/targets/shell/wget/fixtures/full.sh
