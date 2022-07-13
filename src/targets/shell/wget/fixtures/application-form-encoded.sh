wget --quiet \
  --method POST \
  --header 'content-type: application/x-www-form-urlencoded' \
  --body-data 'foo=bar&hello=world' \
  --output-document \
<<<<<<< HEAD:__tests__/__fixtures__/output/shell/wget/application-form-encoded.sh
  - https://httpbin.org/anything
=======
  - http://mockbin.com/har
>>>>>>> upstream/master:src/targets/shell/wget/fixtures/application-form-encoded.sh
