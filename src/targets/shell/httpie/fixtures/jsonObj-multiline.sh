echo '{
  "foo": "bar"
}' |  \
<<<<<<< HEAD:__tests__/__fixtures__/output/shell/httpie/jsonObj-multiline.sh
  http POST https://httpbin.org/anything \
  content-type:application/json
=======
  http POST http://mockbin.com/har \
  content-type:application/json
>>>>>>> upstream/master:src/targets/shell/httpie/fixtures/jsonObj-multiline.sh
