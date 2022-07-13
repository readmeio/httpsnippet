wget --quiet \
  --method POST \
  --header 'content-type: application/json' \
  --body-data '{"foo":null}' \
  --output-document \
<<<<<<< HEAD:__tests__/__fixtures__/output/shell/wget/jsonObj-null-value.sh
  - https://httpbin.org/anything
=======
  - http://mockbin.com/har
>>>>>>> upstream/master:src/targets/shell/wget/fixtures/jsonObj-null-value.sh
