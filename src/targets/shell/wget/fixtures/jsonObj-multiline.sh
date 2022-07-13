wget --quiet \
  --method POST \
  --header 'content-type: application/json' \
  --body-data '{\n  "foo": "bar"\n}' \
  --output-document \
<<<<<<< HEAD:__tests__/__fixtures__/output/shell/wget/jsonObj-multiline.sh
  - https://httpbin.org/anything
=======
  - http://mockbin.com/har
>>>>>>> upstream/master:src/targets/shell/wget/fixtures/jsonObj-multiline.sh
